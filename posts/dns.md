---
  title: 'Domain Name System (DNS)'
  date: '2021-08-22'
---

## Domain Name System

El objetivo del sistema DNS es brindar soporte a otros programas de la capa de aplicación, proveyendo un “mapeo” de direcciones IP con nombres.
El protocolo TCP/IP usa direcciones IP, sin embargo estas no son usadas directamente por los programas de la capade aplicación, sino que son usadas a través de nombres que las identifican.

Dentro de los elementos que intervienen en un sistema DNS se encuentran:

+ **Domain Name Space (Espacio de nombre de dominio):**
Este espacio determina una estructura de árbol invertida, con la raíz en lo más alto. El cual
tiene sólo 128 niveles, el nivel 0 para la raíz hasta el nivel 127.
Cada nodo del árbol tiene una etiqueta **(Label)**, que es un string con un máximo de 63
caracteres. El nodo raíz es el único que tiene una etiqueta nula. Dentro de una misma rama del
árbol, las etiquetas son únicas para garantizar que no haya dominios iguales.
Cada nodo tiene además un nombre de dominio **(Domain Name)**, que es una secuencia de
etiquetas separadas por puntos. Estos nombres de dominio se leen desde el nodo actual hacia
la raíz, es decir, todos los nombres de dominio terminan con la etiqueta nula del nodo raíz

![wikipedia_dns](https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/DNS_arbol.svg/1920px-DNS_arbol.svg.png)

+ **Name server (Servidores de nombres):**
La información contenida en el domain name space es distribuida entre muchos programas que
actúan como servidores DNS. La raíz crea dominios **(subárboles)**, y DNS permite a los
dominios dividirse en dominios más pequeños **(subdominios)**, donde cada servidor es responsable de un dominio más pequeño.

+ **Resolvers (Resolvedores):**
Son aplicaciones cliente/servidor que se encarga de realizar consultas a los servidores de
nombres en respuesta a las peticiones de los clientes. Un resolver accede al servidor DNS más
cercano con una petición de mapeo. Si el servidor no puede satisfacer la consulta, remite al
resolver a otros servidores, o él mismo envía las consultas a otros servidores.

Cada nombre de dominio, cada nodo del árbol, está asociado con un registro de recursos,
estos registros de recursos son devueltos por el servidor al cliente.
Cada registro de recursos tiene un tipo de asociado, que se identifica con letras, entre los
principales encontramos:

+ **A:** asocia un nombre de host a una dirección IPv4.
+ **AAAA:** asocia un nombre de host a una dirección IPv6.
+ **CNAME:** asocia un nombre de host a otro nombre de host (Alias).
+ **NS:** asocia un nombre de dominio con un nombre de host con autoridad sobre ese
dominio.
+ **MX:** asocia un nombre de dominio con un nombre de host que recibe correo para ese
dominio.
+ **SOA:** asocia un nombre de dominio con información administrativa sobre el dominio
