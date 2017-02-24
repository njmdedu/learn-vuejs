<template lang="html">
  <div class="">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">处理中心</el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
  </el-submenu>
  <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
</el-menu>
<div class="line"></div>
<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">处理中心</el-menu-item>
  <el-submenu index="2">
    <template slot="title">
 我的工作台
</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
  </el-submenu>
  <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
</el-menu>
<el-button>默认按钮</el-button>
<el-button type="primary">主要按钮</el-button>
<el-button type="text">文字按钮</el-button>
<template>
<el-radio class="radio" v-model="radio" label="1">
    备选项</el-radio>
<el-radio class="radio" v-model="radio" label="2">备选项</el-radio>
</template>
<template>
<el-checkbox-group v-model="checkList">
    <el-checkbox label="复选框 A"></el-checkbox>
    <el-checkbox label="复选框 B"></el-checkbox>
    <el-checkbox label="复选框 C"></el-checkbox>
    <el-checkbox label="禁用" disabled></el-checkbox>
    <el-checkbox label="选中且禁用" disabled></el-checkbox>
</el-checkbox-group>
</template>
<div style="margin-top: 15px;">
  <el-input placeholder="请输入内容" v-model="input5">
    <el-select v-model="select" slot="prepend" placeholder="请选择">
      <el-option label="餐厅名" value="1"></el-option>
      <el-option label="订单号" value="2"></el-option>
      <el-option label="用户电话" value="3"></el-option>
    </el-select>
    <el-button slot="append" icon="search"></el-button>
  </el-input>
</div>
<template>
<el-input-number v-model="num1" @change="handleChange" :min="1" :max="10">
</el-input-number>
</template>
<template>
<el-select v-model="value" placeholder="请选择">
    <el-option v-for="item in options" :label="item.label" :value="item.value">
    </el-option>
</el-select>
</template>
<el-switch
  v-model="value1"
  on-text=""
  off-text="">
</el-switch>
<el-switch
  v-model="value2"
  on-color="#13ce66"
  off-color="#ff4949">
</el-switch>
<el-upload
  action="//jsonplaceholder.typicode.com/posts/"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove">
  <i class="el-icon-plus"></i>
</el-upload>
<el-dialog v-model="dialogVisible" size="tiny">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
<div class="block">
  <span class="demonstration">页数较少时的效果</span>
  <el-pagination
    layout="prev, pager, next"
    :total="50">
  </el-pagination>
</div>
<div class="block">
  <span class="demonstration">大于 7 页时的效果</span>
    <el-pagination
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </div><template>
<el-button :plain="true" @click="open">
    打开消息提示</el-button>
</template>
<el-row class="tac">
  <el-col :span="8">
    <h5>带 icon</h5>
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
<i class="el-icon-message"></i>
导航一
</template>
        <el-menu-item-group>
          <template slot="title">
 分组一
</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">
 选项4
</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
      <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
    </el-menu>
  </el-col>
  <el-col :span="8">
    <h5>不带 icon</h5>
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
      <el-submenu index="1">
        <template slot="title">
 导航一
</template>
        <el-menu-item-group title="分组一">
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">
 选项4
</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">导航二</el-menu-item>
      <el-menu-item index="3">导航三</el-menu-item>
    </el-menu>
  </el-col>
  <el-col :span="8">
    <h5>分组</h5>
    <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo">
      <el-menu-item-group title="分组一">
        <el-menu-item index="1"><i class="el-icon-message"></i>导航一</el-menu-item>
        <el-menu-item index="2"><i class="el-icon-message"></i>导航二</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组二">
        <el-menu-item index="3"><i class="el-icon-message"></i>导航三</el-menu-item>
        <el-menu-item index="4"><i class="el-icon-message"></i>导航四</el-menu-item>
      </el-menu-item-group>
    </el-menu>
  </el-col>
</el-row>
<el-steps :space="100" :active="active" finish-status="success">
  <el-step title="步骤 1"></el-step>
  <el-step title="步骤 2"></el-step>
  <el-step title="步骤 3"></el-step>
</el-steps>

<el-button style="margin-top: 12px;" @click="next">下一步</el-button>
<el-collapse v-model="activeNames" @change="handleChange">
  <el-collapse-item title="一致性 Consistency" name="1">
    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
  </el-collapse-item>
  <el-collapse-item title="反馈 Feedback" name="2">
    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
  </el-collapse-item>
  <el-collapse-item title="效率 Efficiency" name="3">
    <div>简化流程：设计简洁直观的操作流程；</div>
    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
  </el-collapse-item>
  <el-collapse-item title="可控 Controllability" name="4">
    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
  </el-collapse-item>
</el-collapse>
  </div>
</template>

<script>
export default {
    data() {
        return {
            activeNames: ['1'],
            active: 0,
            dialogImageUrl: '',
            dialogVisible: false,
            value1: true,
            value2: true,
            activeIndex: '1',
            activeIndex2: '1',
            radio: '1',
            checkList: ['选中且禁用', '复选框 A'],
            input3: '',
            input4: '',
            input5: '',
            select: '',
            num1: 1,
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            value: ''
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        handleChange(value) {
            console.log(value);
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        open() {
            this.$message('这是一条消息提示');
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        next() {
            if (this.active++ > 2) this.active = 0;
        }
    }
}
</script>

<style lang="css">
.el-select .el-input {
   width: 110px;
 }
 .el-upload-list__item.is-success .el-icon-close, .el-upload__input{
   display: none !important;
 }
</style>
