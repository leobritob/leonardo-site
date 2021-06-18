import { useState } from 'react';

export const Newsletter = () => {
  const [email, setEmail] = useState('');

  return (
    <form
      action="https://leonardobrito.us6.list-manage.com/subscribe/post?u=f3169c764ab380c91957b5174&amp;id=9a9188bddb"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      target="_blank"
      noValidate
    >
      <div id="mc_embed_signup_scroll" className="w-full">
        <input
          type="email"
          name="EMAIL"
          className="w-full block p-4 rounded-md"
          id="mce-EMAIL"
          placeholder="Informe o seu MELHOR e-mail"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
          <input type="text" name="b_f3169c764ab380c91957b5174_9a9188bddb" tabIndex={-1} value="" />
        </div>
        <div className="w-full flex items-center justify-center">
          <input
            type="submit"
            value="QUERO FICAR SABENDO"
            name="subscribe"
            id="mc-embedded-subscribe"
            className="button block rounded-md text-center space-y-4 my-2 bg-gradient-to-r from-blue-500 to-green-500 p-4 text-white cursor-pointer w-full"
          />
        </div>
      </div>
    </form>
  );
};
