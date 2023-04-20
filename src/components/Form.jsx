import React from 'react'
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(watch("example"));
  
  return (
    <div>
      <form id='form' onSubmit={handleSubmit(onSubmit)}>
        <h2>Заполните заявку на обратную связь</h2>
        <div className='input-group mb-3'>  
          <input {...register('lastname', {required: true, 
           maxLength: 50, pattern: /^[a-zA-Zа-яА-Я]+$/i
          })}
          type="text" placeholder='Фамилия' className='form-control'/>
        </div>
          {errors?.lastname?.type === 'required' && (<p>Обязательно для заполнения</p>)}
          {errors?.lastname?.type === 'maxLength' && (<p>Максимум 50 символов</p>)}
          {errors?.lastname?.type === 'pattern' && (<p>Некоректные символы</p>)}
        <div className='input-group mb-3'>  
          <input {...register('firstname', {required: true, 
           maxLength: 50, pattern: /^[a-zA-Zа-яА-Я]+$/i
          })}
          type="text" placeholder='Имя' className='form-control'/>
        </div>
          {errors?.firstname?.type === 'required' && (<p>Обязательно для заполнения</p>)}
          {errors?.firstname?.type === 'maxLength' && (<p>Максимум 50 символов</p>)}
          {errors?.firstname?.type === 'pattern' && (<p>Некоректные символы</p>)}
        <div className='input-group mb-3'>  
          <input {...register('patronymic', {required: true, 
           maxLength: 50, pattern: /^[a-zA-Zа-яА-Я]+$/i
          })}
          type="text" placeholder='Отчество' className='form-control'/>
        </div>
          {errors?.patronymic?.type === 'required' && (<p>Обязательно для заполнения</p>)}
          {errors?.patronymic?.type === 'maxLength' && (<p>Максимум 50 символов</p>)}
          {errors?.patronymic?.type === 'pattern' && (<p>Некоректные символы</p>)}
        <div className='input-group mb-3'>  
          <input {...register('email', {required: true, 
           maxLength: 50})}
          type="text" placeholder='Электронная почта' className='form-control'/>
        </div>
          {errors?.email?.type === 'required' && (<p>Обязательно для заполнения</p>)}
          {errors?.email?.type === 'maxLength' && (<p>Максимум 50 символов</p>)}
        <input className='btn btn-outline-primary' type="submit" />
      </form>
    </div>
  )
}

export default Form