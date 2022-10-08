# Qui ? Pourquoi ?

Cette template a été crée pour produire un bot discord en utilisant [discordJS V13](https://discord.js.org/#/docs/discord.js/main/general/welcome) et en prenant en charge les [slash commands](https://discord.com/blog/slash-commands-are-here)

# comment configurer la template.

crée et remplisez un fichier **.env** dans le dossier config puis executé les commandes ci-dessous

```shell
 $ npm install
 
 $ npm run dev
```

# exemple du .env
```dotenv
TOKEN=xxx
OWNERID=xxx
GUILD_ID=xxx
BOTID=xxx
DB_USERNAME=my_username
DB_PASSWORD=my_db_password
DB_NAME=DataBase_name
DB_IP=0.0.0.0:2017
```

# paramètre d'envoie des commandes

si la deuxième option est mise sur __true__ les commandes sera mise à jour instantanément

```client.modules.sendSlahCommand.exec( process.env.TOKEN, true, client.commands.all, process.env.BOTID, process.env.GUILD_ID )```

si la deuxième option est mise sur __false__ les commandes seront mises à jour avec un gros délai 

```client.modules.sendSlahCommand.exec( process.env.TOKEN, false, client.commands.all, process.env.BOTID, process.env.GUILD_ID )```

donc mettez là sur __true__ pour la version en développement et sur false pour la version officielle

