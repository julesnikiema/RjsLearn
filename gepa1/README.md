
a cet niveau nous avons avons crees les 3pages mais sans le react router dom 
creer un repertoire css dans lequel nous aurons nos css, et app.css dans le repertoire ou nous allons importer les css
j'ai aussi creer le repertoire pages ou se trouves toutes les pages du site .
le repertoire components a ete cree , dans lequel nous avons notre premier component qui est menu.js
============================================================================================================================
- Pour implementer le routage il faut npm install react-router-dom
- ensuite dans index.js ajouter au sein   <React.StrictMode> BrowserRouter et l'importer from react-router-dom
- puis dans app js ajouter les routes 
- on peut crrer les liens dans mENU.JS
 className={({ isActive }) => (isActive ? "activeLink" : undefined)} 
============================================================================================================================
 import {useState} from 'react'; les useState permet d'avoir des getters et des setters 

 dans le parent app.js on creer un propshandleaddtechnos

  props est un objet contenant la propriété handleaddtechnos, et en utilisant la déstructuration, vous extrayez la valeur de
cette propriété dans une constante nommée handleaddtechnos

** Dans APP on a cree un morceau d'etat a l'aide de useState aui commence avec un tableau vide parce qu'ensuite nous voulons avoir des 
elements a l'interieur
  const [getTechnos, setTechnos]= useState([ ]); on un getter et un setter 
  ensuite on va apporter cette fonction a son enfant techno add : element={<Technoadd * handleaddtechnos={handleaddtechnos*}/>}

  il faut s\assurer de pouvoir appeler cette fonction dans l'enfant(technoadd.js)
jouiuiui
============================================================================================================================

lister les tecnologies dans la page qll technologie (partie1)
============================================================================================================================
react_devtools_backend_compact.js:2367 Warning: Each child in a list should have a unique "key" prop. 
pour cooriger cette erreur il faut : 
--> npm install uuid
--> import {v4 as uuidv4 } from "uuid";
--> setTechnos([...technos,  **{...techno, technoid : uuidv4() }] **); dans la fonction handleAddtechnos dans APP.js
-->  <div key={techno.technoid}> dans alltecchnos
par ailleuirs nous avons creer un composant technoitem qui va permettre d'afficher les technologies qu'on aurait a ajouter

============================================================================================================================
 nous avons utilser uselocal storage pour stocker en local nos donne 