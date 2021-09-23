module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
    
  ],
  presets: ["@vue/app"],
  plugins:[
    [
      "component",
      {
        "libraryName": "mint-ui",
        "style": true
      }
    ]
  ]
}
