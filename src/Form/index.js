import React from 'react';

import useForm from './UseForm';
import validate from './Validation';

const Form = () => {
  const {
    handleChange, handleSubmit, values, errors,
  } = useForm(
    submit,
    validate,
  );

  // const handleUserInput = (e) => {
  //   const { name } = e.target;
  //   const { value } = e.target;
  //   setState({ [name]: value });
  // };

  function submit() {
    console.log('Submitted Succesfully');
  }

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <div>
            <input
              className={`${errors.surname && 'inputError'}`}
              name="surname"
              placeholder="Фамилия"
              type="surname"
              value={values.surname}
              onChange={handleChange}
            />
            {errors.surname && <p className="error">{errors.surname}</p>}
          </div>
        </div>
        <div>
          <div>
            <input
              className={`${errors.name && 'inputError'}`}
              placeholder="Имя"
              name="name"
              type="name"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
        </div>
        <div>
          <div>
            <input
              className={`${errors.name && 'inputError'}`}
              placeholder="Отчество"
              name="name"
              type="name"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
        </div>
        <div className='flex'>
          <div>
            <div>
              <input
                className={`${errors.gender && 'inputError'}`}
                placeholder="Пол"
                name="gender"
                type="gender"
                value={values.gender}
                onChange={handleChange}
              />
              {errors.gender && <p className="error">{errors.gender}</p>}
            </div>
          </div>
          <div>
            <label>Дата рождения</label>
            <div>
              <input
                className={`${errors.date && 'inputError'}`}
                placeholder="Дата рождения"
                name="date"
                type="date"
                value={values.date}
                onChange={handleChange}
              />
              {errors.date && <p className="error">{errors.date}</p>}
            </div>
          </div>
        </div>
        <div className='flex'>
          <div>
            <div>
              <input
                className={`${errors.phone && 'inputError'}`}
                placeholder="Мобильный телефон"
                name="phone"
                type="phone"
                value={values.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="error">{errors.phone}</p>}
            </div>
          </div>
          <div>
            <div>
              <input
                className={`${errors.email && 'inputError'}`}
                placeholder="Email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
          </div>
        </div>
        <div>
          <div>
            <input
              className={`${errors.address && 'inputError'}`}
              placeholder="Адрес постоянной регистрации"
              name="address"
              type="address"
              value={values.address}
              onChange={handleChange}
            />
            {errors.address && <p className="error">{errors.address}</p>}
          </div>
        </div>
        <div>
          <div>
            <input
              className={`${errors.email && 'inputError'}`}
              placeholder="Название работодателя"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
