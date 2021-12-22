
# Twitch bot for adrianmartindev

Bot para Twitch creado en comunidad en el canal https://www.twitch.tv/adrianmartindev

## FAQ

#### ¿Puedo aportar al proyecto?

Sí, eres libre de aportar las ideas que veas necesarias, puedes desarrollarlas o pedirnos que lo hagamos en directo.

El repositorio está montado con gitflow por lo que si no conoces cómo funciona, te dejo a continuación un enlace:
https://www.atlassian.com/es/git/tutorials/comparing-workflows/gitflow-workflow

#### ¿Cómo configurar una conexión para hacer pruebas?

Está configurado mediante el paquete dotenv por tanto para poder probar tus desarrollos tendrás que seguir los siguientes pasos:

##### 1. Clona el repositorio en tu local
##### 2. Crea en la raíz del repositorio un archivo .env
##### 3. Conecta con tu usuario de Twitch a: https://twitchapps.com/tmi/
##### 4. Copia el valor que te da en la página web.
##### 5. Añade a él los siguientes valores: 
        TWITCH_OAUTH_USERNAME=""
        TWITCH_OAUTH_TOKEN=""

En TWITCH_OAUTH_USERNAME indicarás tu usuario de twitch y en TWITCH_OAUTH_TOKEN el valor obtenido en al web que conectaste anteriormente.
No te preocupes por poner la información, ese archivo no se subirá al repositorio cuando hagas un commit.