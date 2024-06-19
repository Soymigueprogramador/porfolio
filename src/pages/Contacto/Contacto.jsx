{/* import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'

const Contacto = () => {
  return (
    <div>
      <h1>Contacto</h1>
      <form>
        <Input type="text" label='Nombre' placeholder="Ingresa tu nombre" />
        <Input type="email" label='Email' placeholder="Ingresa tu email" />
        <Input type="text" label='Asunto' placeholder="Ingresa tu asunto" />
        <Input type="textarea" label='Mensaje' placeholder="Ingresa tu mensaje" />
        <Button width={300} height={50} type='submit'>Enviar</Button>
      </form>
    </div>
  )
}

export default Contacto */}









import { useState } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!nombre) tempErrors.nombre = 'El nombre es requerido';
    if (!email) {
      tempErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = 'El email no es válido';
    }
    if (!asunto) tempErrors.asunto = 'El asunto es requerido';
    if (!mensaje) tempErrors.mensaje = 'El mensaje es requerido';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Aquí puedes manejar el envío de los datos, por ejemplo, enviarlos a un servidor
      console.log({ nombre, email, asunto, mensaje });
    }
  };

  return (
    <div>
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit}>
        <Input 
          type="text" 
          label='Nombre' 
          placeholder="Ingresa tu nombre" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
        />
        {errors.nombre && <span>{errors.nombre}</span>}
        
        <Input 
          type="email" 
          label='Email' 
          placeholder="Ingresa tu email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        {errors.email && <span>{errors.email}</span>}
        
        <Input 
          type="text" 
          label='Asunto' 
          placeholder="Ingresa tu asunto" 
          value={asunto} 
          onChange={(e) => setAsunto(e.target.value)} 
        />
        {errors.asunto && <span>{errors.asunto}</span>}
        
        <Input 
          type="textarea" 
          label='Mensaje' 
          placeholder="Ingresa tu mensaje" 
          value={mensaje} 
          onChange={(e) => setMensaje(e.target.value)} 
        />
        {errors.mensaje && <span>{errors.mensaje}</span>}
        
        <Button width={300} height={50} type='submit'>Enviar</Button>
      </form>
    </div>
  );
};

export default Contacto;
