const checkPhone = (rule: any, value: any, callback: any) => {
  if (/^1[34578]\d{9}$/.test(value) == false) {
    callback(new Error('手机号格式错误'))
  } else {
    callback()
  }
}

export const rules = {
  num: [
    {
      required: true,
      message: '请输入手机号码',
      trigger: 'blur'
    },
    {
      validator: checkPhone,
      trigger: 'blur'
    }
  ],
  code: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    { min: 6, max: 6, message: '验证码长度为6个字符', trigger: 'blur' }
  ]
}
