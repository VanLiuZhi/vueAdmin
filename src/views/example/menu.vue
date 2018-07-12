<!--@Time: 2018/7/2 23:44 -->
<!--@Auther: VanLiuZhi -->
<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="80px" style="margin: 20px 300px">
      <el-form-item label="菜单名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="菜单类型">
        <el-select v-model="form.type" placeholder="请选择菜单类型">
          <el-option label="文章" value="1"></el-option>
          <!--<el-option label="区域二" value="beijing"></el-option>-->
        </el-select>
      </el-form-item>
      <el-form-item label="菜单级别">
        <el-radio-group v-model="form.level">
          <el-radio label="1" border>一级</el-radio>
          <el-radio label="2" border>二级</el-radio>
          <el-radio label="3" border>三级</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="所属菜单">
        <el-select v-model="form.type" placeholder="请选择菜单类型">
          <el-option label="文章" value="1"></el-option>
          <!--<el-option label="区域二" value="beijing"></el-option>-->
        </el-select>
        <el-select v-model="form.type" placeholder="请选择菜单类型">
          <el-option label="文章" value="1"></el-option>
          <!--<el-option label="区域二" value="beijing"></el-option>-->
        </el-select>
        <el-select v-model="form.type" placeholder="请选择菜单类型">
          <el-option label="文章" value="1"></el-option>
          <!--<el-option label="区域二" value="beijing"></el-option>-->
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'menu',
    data() {
      return {
        form: {
          name: '',
          type: '',
          level: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!')
      }
    }
  }
</script>

<style scoped>

</style>
