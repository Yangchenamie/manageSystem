<template>
  <div class="conItem">
    <p>请输入广告相关信息</p>
    <div class="name">
      <label>广告标语</label>
      <input
        type="text"
        placeholder="请输入商品名称"
        v-model="vedioMsg.title"
      />
    </div>
    <div class="img">
      <label>封面图片</label>
      <div>
        <el-upload
          style="margin-top: 5%"
          class="avatar-uploader el-upload--text"
          action
          multiple
          :http-request="uploadFile"
          :on-change="handleChange"
          :on-success="handleVideoSuccess"
          :before-upload="beforeUploadVideo"
          :on-progress="uploadVideoProcess"
        >
          <video
            v-if="videoForm.showVideoPath != '' && !videoFlag"
            v-bind:src="videoForm.showVideoPath"
            class="avatar video-avatar"
            controls="controls"
          >
            您的浏览器不支持视频播放
          </video>
          <i v-if="Plus" class="el-icon-upload"></i>
          <div v-if="Plus" class="el-upload__text">
            将文件拖到此处，或<em>点击上传</em>
          </div>
          <el-progress
            v-if="videoFlag == true"
            type="circle"
            :percentage="videoUploadPercent"
            style="margin-top: 30px"
          ></el-progress>
          <div class="el-upload__tip" slot="tip">
            只能上传mp4/flv/avi文件，且不超过300M
          </div>
        </el-upload>
      </div>
    </div>
    <div class="name">
      <label>广告标签</label>
      <el-tag
        :key="tag"
        v-for="tag in dynamicTags"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)"
      >
        {{ tag }}
      </el-tag>
      <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
      >
      </el-input>
      <el-button v-else class="button-new-tag" size="small" @click="showInput"
        >+ New Tag</el-button
      >
    </div>
    <div class="name description">
      <label>广告描述</label>
      <textarea
        name="saysth"
        rows="5"
        cols="45"
        v-model="vedioMsg.description"
      ></textarea>
    </div>
    <div class="btn">
      <button @click="gotoLast()">确认</button>
      <button @click="gotoLast()">取消</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vedioMsg: {
        title: '',
        tags: '',
        description: "",
        video: ''
      },
      videoFlag: false,
      videoUploadPercent: "",
      videoForm: {
        showVideoPath: "",  //回显的变量
      },
      Plus: true,
      Path: {
        url: 'F:/video/videoUpload'
      },
      videoUploadPercent: 0,
      dynamicTags: ['人工智能', '5G'],
      inputVisible: false,
      inputValue: ''
    }
  },
  methods: {
    gotoLast(){
      this.$emit('change',true)
    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      console.log('handleClose',this.dynamicTags);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
      console.log('showInput',this.dynamicTags);
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
      console.log('showInput',this.dynamicTags);
    },
    //上传文件的事件
    async uploadFile(item) {
      const tags = this.dynamicTags.join(' ')
      console.log(tags);
      const data = await this.$http({
        method: 'post',
        url: 'http://1.12.244.193:80/manage/video/uploadAlyiVideo',
        headers: {
          "Content-Type": "multipart/form-data"
        },
        timeout: 30000,
        data: {
          title: this.vedioMsg.title,
          tags: tags,
          description: this.vedioMsg.description,
          video: item.file
        }
      })
    
      const id = data.data.data.id
      if(data.data.code == 200){
        const res = await this.$http({
          url:`/manage/video/getPlayAddress/${id}`
        })
        console.log(res);
        this.videoForm.showVideoPath= res.data.data.url[0].playURL
      }
      console.log(data);
    },

    handleChange(file) {
      console.log('handleChange', document.getElementsByClassName("el-upload__input")[0].value);
      this.vedioMsg.video = document.getElementsByClassName("el-upload__input")[0].value
    },
    // 视频上传前执行
    beforeUploadVideo(file) {
      const isLt300M = file.size / 1024 / 1024 < 300
      if (['video/mp4', 'video/ogg', 'video/flv', 'video/avi', 'video/wmv', 'video/rmvb'].indexOf(file.type) === -1) {
        this.$message.error('请上传正确的视频格式')
        return false
      }
      if (!isLt300M) {
        this.$message.error('上传视频大小不能超过300MB哦!')
        return false
      }
    },
    // 视频上传过程中执行
    uploadVideoProcess(event, file, fileList) {
      this.Plus = false
      this.videoFlag = true
      this.videoUploadPercent = file.percentage.toFixed(0)
    },
    // 视频上传成功是执行
    handleVideoSuccess(res, file) {
      this.Plus = false
      this.videoUploadPercent = 100
      console.log(res)
    }
  }
};
</script>

<style scoped lang="less">
.conItem {
  width: 564px;
  height: calc(100vh - 110px);
  padding: 0 60px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;

  & p {
    font-size: 20px;
  }

  & div {
    line-height: 40px;

    & label {
      margin-right: 30px;
    }

    & input,
    textarea {
      width: 300px;
      height: 40px;
      padding: 0 15px;
      border: 1px solid rgba(184, 196, 209, 1);
    }
    & video{
      width: 330px;
    }
  }

  .description {
    & label {
      vertical-align: top;
    }

    & textarea {
      // width: 100%;
      height: auto;
    }
  }

  .img {
    display: flex;

    & img {
      vertical-align: top;
    }

    .addPic {
      width: 225px;
      height: 150px;
      background-color: #fff;
      border: 1px dotted rgba(184, 196, 209, 1);
      border-radius: 4px;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: space-evenly;
      box-sizing: border-box;
      padding-top: 20px;

      & span {
        // font-size: 14px;
        color: rgba(153, 153, 153, 1);
      }
    }

    & span {
      font-size: 14px;
      color: rgba(102, 102, 102, 1);
    }
  }

  .time {
    & select {
      width: 101px;
      height: 40px;
      text-align: center;

      border: 1px solid rgba(229, 229, 229, 1);
    }

    & span {
      margin-left: 22px;
    }
  }

  .status {
    display: flex;
    align-items: center;

    & input {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }

  .btn {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-left: 100px;

    & button {
      width: 76px;
      height: 40px;
      background-color: rgba(6, 107, 100, 1);
      color: #fff;
      border: none;
      border-radius: 4px;
      margin: 0 12px;
    }
  }
}
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>