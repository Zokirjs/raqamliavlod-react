import SelectionForm from './SelectionForm';

const RegisterForm = () => {
  return (
    <div className="register">
      <form className="register-form">
        <h1 class="register-title">Raqamli Avlod</h1>
        <p class="register-text">IT Oromgohiga ro’yxatdan o’ting</p>
        <label className="register-label">
          <div>
            <input type="text" placeholder="Ism Familya" name="FirstName" />
          </div>
        </label>

        <label className="register-label">
          <div>
            <input type="email" placeholder="Email" name="Email" />
          </div>
        </label>
        <label className="register-label">
          <span>Tug'ilgan sanangiz:</span>
          <div>
            <input
              required=""
              placeholder="dd/mm/yyyy"
              type="date"
              name=""
              id=""
              value="Mon Aug 18 2014 21:11:54 GMT+0500 (Узбекистан, стандартное время)"
            />
          </div>
        </label>

        <SelectionForm />

        <label className="register-label">
          <div>
            <h5 className="number-val active">+998</h5>
            <input
              type="number"
              name="tell"
              maxLength={9}
              placeholder="991234567"
              required
            />
          </div>
        </label>

        <button className="register-submit" type="submit">
          Ro'yxatdan o'tish
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
