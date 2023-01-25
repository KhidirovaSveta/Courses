import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
      img1: Yup.string()
      .min(2, 'Too Short!')
      .max(350, 'Too Long!')
      .required('Required'),
      title: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      tags: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      img2: Yup.string()
      .min(2, 'Too Short!')
      .max(250, 'Too Long!')
      .required('Required'),
      name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      price: Yup.number()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });