const t={required:e=>!!e||"Este campo \xE9 obrigat\xF3rio!",minLength:(e,o)=>e&&e.length>=o||`Este campo deve ter no m\xEDnimo ${o} caracteres!`,maxLength:(e,o)=>e&&e.length<=o||`Este campo deve ter no m\xE1ximo ${o} caracteres!`,email:e=>/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)||"Este campo deve ser um e-mail v\xE1lido!",confirmPassword:e=>o=>o===e||"As senhas n\xE3o conferem!",cnpj:e=>/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/.test(e)||"CNPJ inv\xE1lido!",phone:e=>/^\(\d{2}\)\d{4,5}\-\d{4}$/.test(e)||"Telefone inv\xE1lido!",number:e=>/^\d+$/.test(e)||"Este campo deve ser num\xE9rico!"};export{t as r};