<template>
  <div>
    <div class="hqt-area">
      <el-scrollbar>
        <div class="box">
          <div class="item">
            <img class="img" :src="require('@/assets/image/q1.png')" />
            <img class="imgon" :src="require('@/assets/image/q1_on.png')" />
            <p>通德桥</p>
          </div>
          <div class="item">
            <img class="img" :src="require('@/assets/image/q2.png')" />
            <img class="imgon" :src="require('@/assets/image/q2_on.png')" />
            <p>梁溪大院</p>
          </div>
          <div class="item">
            <img class="img" :src="require('@/assets/image/q3.png')" />
            <img class="imgon" :src="require('@/assets/image/q3_on.png')" />
            <p>西谭</p>
          </div>
          <div class="item">
            <img class="img" :src="require('@/assets/image/q4.png')" />
            <img class="imgon" :src="require('@/assets/image/q4_on.png')" />
            <p>春申</p>
          </div>
          <div class="item">
            <img class="img" :src="require('@/assets/image/q5.png')" />
            <img class="imgon" :src="require('@/assets/image/q5_on.png')" />
            <p>山北</p>
          </div>
          <div class="item">
            <img class="img" :src="require('@/assets/image/q6.png')" />
            <img class="imgon" :src="require('@/assets/image/q6_on.png')" />
            <p>蠡园</p>
          </div>
          <div class="item">
            <img class="img" :src="require('@/assets/image/q7.png')" />
            <img class="imgon" :src="require('@/assets/image/q7_on.png')" />
            <p>老年活动中心</p>
          </div>
          <div class="item">
            <img class="img" :src="require('@/assets/image/q8.png')" />
            <img class="imgon" :src="require('@/assets/image/q8_on.png')" />
            <p>输电运检</p>
          </div>
          <div class="item">
            <img class="img" :src="require('@/assets/image/q9.png')" />
            <img class="imgon" :src="require('@/assets/image/q9_on.png')" />
            <p>东亭</p>
          </div>
          <div class="item">
            <img class="img" :src="require('@/assets/image/q10.png')" />
            <img class="imgon" :src="require('@/assets/image/q10_on.png')" />
            <p>农电</p>
          </div>
          <div class="item">
            <img class="img" :src="require('@/assets/image/q11.png')" />
            <img class="imgon" :src="require('@/assets/image/q11_on.png')" />
            <p>汇融</p>
          </div>
          <div class="item">
            <img class="img" :src="require('@/assets/image/q12.png')" />
            <img class="imgon" :src="require('@/assets/image/q12_on.png')" />
            <p>红旗变配电</p>
          </div>
          <div class="item">
            <img class="img" :src="require('@/assets/image/q13.png')" />
            <img class="imgon" :src="require('@/assets/image/q13_on.png')" />
            <p>益能</p>
          </div>
          <div class="item">
            <img class="img" :src="require('@/assets/image/q14.png')" />
            <img class="imgon" :src="require('@/assets/image/q14_on.png')" />
            <p>马山</p>
          </div>
          <div class="item">
            <img class="img" :src="require('@/assets/image/q15.png')" />
            <img class="imgon" :src="require('@/assets/image/q15_on.png')" />
            <p>山水城</p>
          </div>
        </div>
      </el-scrollbar>
    </div>
    <div class="app-rows">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="grid-content heighta">
            <div class="gtitle">能耗管理</div>
            <img class="img" :src="require('@/assets/image/d1.png')" />
          </div>
        </el-col>
        <el-col :span="12">
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="grid-content heighta">
                <div class="gtitle">智能考勤</div>
                <img class="img" :src="require('@/assets/image/d2.png')" />
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content heighta">
                <div class="gtitle">用电金额</div>
                <img class="img" :src="require('@/assets/image/d3.png')" />
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="grid-content heightb">
                <div class="gtitle">网页留存率</div>
                <div class="htq-progress">
                  <div class="item">
                    <p>
                      首页
                      <span>68%</span>
                    </p>
                    <el-progress
                      :percentage="68"
                      :show-text="false"
                      color="#2057b9"
                      :stroke-width="12"
                    ></el-progress>
                  </div>
                  <div class="item">
                    <p>
                      个人中心
                      <span>38%</span>
                    </p>
                    <el-progress
                      :percentage="38"
                      :show-text="false"
                      color="#2057b9"
                      :stroke-width="12"
                    ></el-progress>
                  </div>
                  <div class="item">
                    <p>
                      产品列表
                      <span>88%</span>
                    </p>
                    <el-progress
                      :percentage="88"
                      :show-text="false"
                      color="#2057b9"
                      :stroke-width="12"
                    ></el-progress>
                  </div>
                  <div class="item">
                    <p>
                      文章列表
                      <span>18%</span>
                    </p>
                    <el-progress
                      :percentage="18"
                      :show-text="false"
                      color="#2057b9"
                      :stroke-width="12"
                    ></el-progress>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content heightb">
                <div class="gtitle">人脸识别</div>
                <div class="hqt-users">
                  <div class="item">
                    <img class="img2" :src="require('@/assets/image/user.png')" />
                    <em>小灰灰</em>
                    <span>1分钟</span>
                  </div>
                  <div class="item">
                    <img :src="require('@/assets/image/user.png')" />
                    <em>东方白</em>
                    <span>4分钟</span>
                  </div>
                  <div class="item">
                    <img :src="require('@/assets/image/user.png')" />
                    <em>九尾鸟</em>
                    <span>8分钟</span>
                  </div>
                  <div class="item">
                    <img :src="require('@/assets/image/user.png')" />
                    <em>爱心人</em>
                    <span>14分钟</span>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="12">
          <div class="grid-content heightb">
            <div class="gtitle">设备列表</div>
            <el-table :data="tableData" stripe>
              <el-table-column prop="name" label></el-table-column>
              <el-table-column prop="nums" label></el-table-column>
              <el-table-column prop="id" label></el-table-column>
              <el-table-column prop="nums" label></el-table-column>
            </el-table>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: 1,
          name: "产品A款",
          nums: 666
        },
        {
          id: 1,
          name: "产品A款",
          nums: 666
        },
        {
          id: 1,
          name: "产品A款",
          nums: 666
        },
        {
          id: 1,
          name: "产品A款",
          nums: 666
        },
        {
          id: 1,
          name: "产品A款",
          nums: 666
        }
      ]
    };
  },
  methods: {}
};
</script>
<style>
.hqt-area {
  background: #fff;
  box-shadow: 1px 4px 20px rgba(222, 222, 222, 0.5);
  padding: 10px 10px 0 10px;
}
.hqt-area .box {
  padding-bottom: 15px;
  white-space: nowrap;
}
.hqt-area .item {
  margin-right: 5px;
  display: inline-block;
  background: #f2f4f9;
  height: 112px;
  width: 112px;
  text-align: center;
  overflow: hidden;
  cursor: pointer;
  padding-top: 20px;
}
.hqt-area .item .imgon {
  display: none;
}
.hqt-area .item:hover {
  background: #0b64b4;
  color: #fff;
}
.hqt-area .item:hover .img {
  display: none;
}
.hqt-area .item:hover .imgon {
  display: inline-block;
}
/**/
.app-rows {
  padding: 20px;
}
.app-rows .el-row {
  margin-bottom: 10px;
}
.app-rows .heighta {
  height: 450px;
}
.app-rows .heighta img {
  height: 380px;
}
.app-rows .heightb {
  height: 330px;
}
.app-rows imgs {
  width: 100%;
}
.app-rows .grid-content {
  background: #fff;
  border-radius: 6px;
  padding: 20px;
}
.app-rows .gtitle {
  font-size: 17px;
  font-weight: 700;
  color: #707070;
  margin-bottom: 10px;
}

.htq-progress .el-progress-bar__outer {
  width: 100%;
}
.htq-progress .item {
  margin-top: 25px;
}
.htq-progress p {
  color: #666;
  margin-bottom: 5px;
}
.htq-progress span {
  color: #1550bf;
  float: right;
  font-size: 16px;
}
.hqt-users .item {
  margin-top: 10px;
}
.hqt-users .item img {
  width: 38px;
  margin: 10px;
  display: inline-block;
  vertical-align: middle;
}
.hqt-users .item em {
  font-size: 16px;
  color: #333;
}
.hqt-users .item span {
  float: right;
  font-size: 14px;
  color: #999;
  line-height: 38px;
}

.app-rows .el-table::before {
  height: 0;
}
.app-rows .el-table td,
.app-rows .el-table th {
  border: none !important;
}
.app-rows .el-table .el-table__row--striped td {
  background: #f2f5fb !important;
}
</style>
