<h1 id="phantauth">PhantAuth v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Random User Generator + OpenID Connect Provider. Like Lorem Ipsum, but for user accounts and authentication.

The PhantAuth API documentation is available on the following API documentation sites:

- [apiary](https://phantauth.docs.apiary.io) (primary source)

- [speca](https://speca.io/phantauth/phantauth)

- [PhantAuth Developer Portal](https://www.phantauth.net/api)

### TL;DR

**PhantAuth was designed to simplify testing for applications using OpenID Connect authentication by making use of random generated users.**

endpoint  | address
--------- | -------
issuer    | https://phantauth.net
discovery | https://phantauth.net/.well-known/openid-configuration

credential    | value
------------- | -----
client_id     | test.client
client_secret | UTBcWwt5

## OpenID Connect

The OpenID Connect Provider of PhantAuth supports the flows listed in the OpenID Connect specifications (Hybrid, Implicit, Authorization Code), as well as the Resource Owner Password grant type, specified in the OAuth 2.0 specifications. PhantAuth as an OpenID Connect Provider can be integrated with a variety of web applications, mobil applications, and  backend applications. The integration can be either direct, as in the case of the OpenID Connect Provider, or through an authentication integration service, as in the case of Auth0 or Azure Active Directory B2C. To learn more, please go to chapter [Integration](https://doc.phantauth.net/#/integration).

Examples:

- [Direct OpenID Connect integration](https://www.phantauth.net/test/oidc)

- [Auth0 Social Connections integration](https://www.phantauth.net/test/auth0)

- [Azure Active Directory B2C integration](https://www.phantauth.net/test/azure)

## Random User

The random user generator of PhantAuth can also be used separately, independent of the OpenID Connect Provider. You can generate an optional number of test users. In the knowledge of their user name, the data of the generated users can be regenerated at any time (OpenID Connect *sub* claim). The generated users have a unique, operational, disposable email address, a profile picture selected from one of the multiple pools of pictures, and the usual profile data. Custom email addresses and profile pictures may also be added. The random user generator of PhantAuth can be fully customized. Additionally, you can link an external generator to the application. For details,please go to chapter [Generator](https://doc.phantauth.net/#/generator).

Test pages:

- [Default Generator Test Page](https://phantauth.net/test/user) (embedded generator)

- [Greek Gods Generator Test Page](https://phantauth.net/_gods/test/user) (embedded generator working from a Google Sheet)

- [Faker Generator Test Page](https://phantauth.net/_faker/test/user) (external generator using Javascript Faker library)

- [Chance Generator Test Page](https://phantauth.net/_chance/test/user) (external generator using Javascript Chance library)

- [Casual Generator Test Page](https://phantauth.net/_casual/test/user) (external generator using Javascript Casual library)

- [Randomuser Generator Test Page](https://phantauth.net/_randomuser/test/user) (client side generator using https://randomuser.me)

- [uinames Generator Test Page](https://phantauth.net/_uinames/test/user) (client side generator using https://uinames.com)

- [Mockaroo Generator Test Page](https://phantauth.net/_mockaroo/test/user) (client side generator using https://mockaroo.com)

Every random generated user has a profile page, which contains their profile data in a simple one-page format.

Profile examples:

- [Random Profile](https://phantauth.net/%7Ejoe.black)

- [Random Greek God Profile](https://phantauth.net/_gods/%7Ezeus)

- [Random Faker Profile](https://phantauth.net/_faker/%7Eharry.houdini)

- [Random Chance Profile](https://phantauth.net/_chance/%7Epeter.pan)

- [Random Casual Profile](https://phantauth.net/_casual/%7Ejohn.smith)

## CodeSandbox

The use of the random user generator and the direct integration of  the OpenID Connect is demonstrated through a set of CodeSandbox samples. The sample applications are run directly from CodeSandbox, so the source code is easy to view, edit, and test.

Examples:

- [Random User Generator usage exampe](https://4xyj8lw394.codesandbox.io/)

- [OpenID Connect direct integration exampe](https://8z77681269.codesandbox.io/)

## Tenants

The PhantAuth is extremely versatile and customizable. You can use your own random user service, or generate users from an external .csv file or Google Sheet. You can use a set of Bootstrap themes to tailor the look and feel of the profile, morover, you can fundamentally change the same look and feel by the use of your own HTML templates. To find out more, please go to chapter [Tenant](https://doc.phantauth.net/#/tenant).

To customize the application, you need to use one or more so-called tenants. A tenant can be consiered as an independent PhantAuth service. A tenant has its own random user generator endpoints and OpenID Connect endpoints.

The tenants can be organised into so-called domains. Practically, a domain is a DNS zone, which contains the settings of the given tenant(s). The tenants as well as the domain can be configured by the use of DNS TXT records.

In addition to the default tenant, the PhantAuth domain contains some sample tenants, which are primarily designed to demonstrate customizability, a range of hosting possibilities, and the links to external services. In most cases, using the [default tenant](https://phantauth.net) is enough.

- [PhantAuth Default](https://phantauth.net) - default tenant, based on a Java Fairy library

- [Greek Gods](https://phantauth.net/_gods) - based on a Google Sheet document

- [PhantAuth Faker](https://phantauth.net/_faker) - based on a Javascript Faker library, hosted at https://now.sh

- [PhantAuth Chance](https://phantauth.net/_chance) - based on a Javascript Chance library, hosted at https://now.sh

- [PhantAuth Casual](https://phantauth.net/_casual) - based on a Javascript Casual library, hosted at https://webtask.io

- [RANDOM USER](https://phantauth.net/_randomuser) - based on https://randomuser.me service

- [uinames](https://phantauth.net/_uinames) - based on https://uinames.com service

- [Mockaroo](https://phantauth.net/_mockaroo) - based on  https://mockaroo.com service

Anyone can create a domain and the tenants. Sharing the tenants is facilitated by the [PhantAuth Shared Domain](https://shared.phantauth.net). A shared domain is connected to the [phantauth.cf](http://phantauth.cf) DNS zone, where anyone can create tenant configuration nodes by the use of the [FreeDNS](https://freedns.afraid.org/) service.

### Concept

The internal structure of PhantAuth is modular enough to allow certain elements to be customized or even replaced. The customized PhantAuth instances can be considered as separate services, which are independent from the original one. For the sake of simplicity, the customized PhantAuth instances will be called **tenants**.

The customized PhantAuth instances (tenants) have a different URL from that of the default tenant. For technological and cloud hosting purposes, it is advised that only the beginning of the path component of these URLs differs from the default PhantAuth URL. Similarly, the path component of a tenant URL should start with a low line character ("_"). So the general format of a tenant URL is:

```
https://phantauth.net/_TENANT
```

where `TENANT` is the name of the tenant. The tenant name is a DNS domain name at the same time, which may lack `.phantauth.net` or `.phantauth.cf` from the end.

### DNS for configuration

When desiging PhantAuth, the aim is that PhantAuth can run without a database, and it is configurable by the users. This can be achieved if for the purpose of storing the tenant configuration, the system uses the special TXT records of the Domain Name System (DNS), in compliance with the [RFC 6763](https://tools.ietf.org/html/rfc6763) specifications. So the tenant name is one or more DNS TXT records. These TXT records contain the configuration properties in NAME=VALUE format.

This allows anyone to create their own tenants by creating a DNS domain and the TXT records in that domain. [Freenom](https://www.freenom.com), a service provider, allows you to register some top-level domains (.tk, .ml, .ga, .cf, .gq) free charge. The domain registered this way can be managed on the online interface of Freenom or transferred to an other free service provider offering a more convenient DNS name server (e.g. [CloudFlare](https://www.cloudflare.com/)). Additionally, [FreeDNS](https://freedns.afraid.org/) allows you to create DNS records within a second- or third level domain that is privately owned or shared with a community. In this case, you are advised to create the entries within the `phantauth.cf` domain, because here you can omit the `.phantauth.cf` from the tenant name in the URL. This means that a tenant with a name of `mytenant.phantauth.cf` can be referred to in the shorther `https://phantauth.net/_mytenant` format, rather than the longer `https://phantauth.net/_mytenant.phantauth.cf` URL . Similar to `.phantauth.cf`, the `phantauth.net` can be omitted, thus the officially supported and the example tenants can be referred to by their short names (e.g. https://phantauth.net/_faker).

In a nutshell, to create a tenant, you have the following options:

- With TXT records in a domain registered at Freenom, either on the online interface of Freenom or that of another free DNS service provider (e.g. CloudFlare).

- With TXT records created in a second- or third level domain shared with a community, by using FreeDNS.

- With TXT records created in your own existing DNS domain, by the use of an any DNS software.

### Parameters

The below table contains a summary of the tenant parameters having an effect on the operation of the tenants.

Property | Description
--- | ---
[name](#name) | the displayed name of the tenant
[flags](#flags) | generator flags having an effect on the login page
[theme](#theme) | the address of the Bootstrap theme
[template](#template) | the address of the HTML page templates
[factory](#factory) | the address of the external user generator
[depot](#depot) | the address of the external user database
[sheet](#sheet) | the identifier of the Google Sheets document containing the user database
[script](#script) | the JavaScript URL inserted in the HTML pages
[summary](#summary) | a one-line summary of the tenant
[about](#about) | a detailed description of the tenant
[attribution](#attribution) | the specifications of the external source
[logo](#logo) | the logo of the tenant
[favicon](#favicon) | the favicon of the tenant's web pages

#### name

The displayed name of the tenant is defined in the `name` parameter. In lack of such a name, the tenant's DNS name is displayed. This name appears in the address bar of the tenant's webpages.

#### flags

This parameter contains the flags that affect the operation of a tenant (see [Flags](generator.md#flags)). Currently, the flags affecting the team size are used in the login screen. If any of the flags is a team size flag, you can select the user from a list in the login screen, rather than using an input field. It can take the following values:

- tiny

- small

- medium

- large

#### theme

The HTML page templates of a tenant are created by the use of the Bootstrap library. This allows you to customize the layout and the colours of the pages by using external Bootstrap CSS files. The `theme` parameter contains the URL of the Bootstrap CSS file used in the pages. It is optional; in lack of such a parameter, the tenant's HTML pages have the default layout provided in the [PhantAuth developer portal](https://www.phantauth.net).

#### template

The place of the HTML page templates of a tenant is specified by the `template` parameter. The value of the parameter is n [RFC 6570 - URI temaplate](https://tools.ietf.org/html/rfc6570) expression. The URI template receives the page name in a `resource` parameter.

The default value of the `template` parameter:

```
https://default.phantauth.net{/resource}
```

The `resource` URI template parameter may take the following values:

Value | Description
--- | ---
tenant.html | the tenant's webpage; it contains a short description and the entry points of the tenant 
user.html | the user's profile page
login.html | the login page used for signing in
consent.html | the content page used for signing in
team.html | the profile page of the user group
client.html | the profile page of a client
fleet.html | the profile page of the client group
policy.html | the client's privacy policy
tos.html | a client's terms of service
test.html | a login test page of the user generator and OpenID Connect

If you use your own template, the pages are fully customizable. The templates use a template engine called [Thymeleaf](https://www.thymeleaf.org/), which provides flexible template options. The source of the default template is available in the [phantauth-default](https://github.com/phantauth/phantauth-default) GitHub repository. If you wish to create your own templates, you are advised to produce them from these templates.

#### factory

PhantAuth allows you to use your own random resource (user, team) generator. To do so, you need to provide its address in the `factory` tenant parameter. The value of the parameter is an [RFC 6570 - URI temaplate](https://tools.ietf.org/html/rfc6570) expression. The URI template receives the type of the object (user, team) to be generated in the `kind` parameter, and the identifier of the object to be generated in the `name` parameter.

#### factories

In the `factories` parameter, you can specify the resource types that can be generated by the external generator set in the `factory` parameter. It takes the value of one or more strings from the following: `user`, `team`.

#### depot

Instead of generating a user and team resource, you can randomly select them from a pre-created inventory. In this case, the URL of the CSV file containing the resources can be specified in the `depot` parameter. The value of the parameter is an [RFC 6570 - URI temaplate](https://tools.ietf.org/html/rfc6570) expression. The URI template receives the type of the object (user, team) to be generated in the `kind` parameter.

The first line of the CSV file contains the resource property names, the following lines, on the other hand, contain the relevant data.
In the case of nested properties, a "." character separates the elements of the property name (e.g. address.formatted).

#### depots

In the `depots` parameter, you can specify the purpose of the external source set in the `depot` parameter. It takes the value of one or more strings from the following: `user`, `team`.

#### sheet

You can randomly select the user data from a Google Sheets document. In the `sheet` parameter, you can specify the identifier of a public Google Sheets document. The first row of the table contains the user property names, the following rows contain the relating data. In the case of nested properties, a "." character is used to separate the elements of the property name (e.g. address.formatted).

The tenant named `gods` is an example for the use of the `sheet` parameter. It provides the user data in a [public Google Sheets](https://docs.google.com/spreadsheets/d/1Xa4mRcLWroJr2vUDhrJXGBcobYmpS8fNZxFpXw-M9DY/) document. In this case, the identifier of the sheet is `1Xa4mRcLWroJr2vUDhrJXGBcobYmpS8fNZxFpXw-M9DY`, and the associated TXT record is:

```
gods    120 IN  TXT "sheet=1Xa4mRcLWroJr2vUDhrJXGBcobYmpS8fNZxFpXw-M9DY"
```

#### script

You can automatically insert a custom JavaScript file in the login.html, consent.html, and test.html pages. The URL of this file can be specified in the `script` parameter. By inserting a custom JavaScript file, you can also integrate a client-side random user generator.

#### summary

You can provide a short, one-line description, a watchword for the tenant in the `summary` parameter. It appears on the tenant's startup page and all the pages that contain a list of available tenants.

#### about

To provide a detailed description of the tenant, use the `about` parameter. If it takes the value of a URL, the description is downloaded from the given URL; otherwise the value is the description itself. The description may have markdown formatting.

#### attribution

It is an external data source. If you use a random user generator, you can specify the attribution in the `attribution` parameter. The attribution may have markdown formatting, that is, you can highlight any element or provide a link to an external source:

```
randomuser  120 IN  TXT "attribution=User data generated using [RANDOM USER GENERATOR](https://randomuser.me/)."
```

#### logo

It is the URL of the tenant's logo. The image at this address appears in the address bar of the tenant's webpages.

#### favicon

Use the `favicon` parameter to provide the URL of the favicon. The image at this address appears as a shortcut icon in the browser when a user visits the tenant's webpages.

### Examples

PhantAuth offers several examples for creating a custom tenant. They are ready-to-use tenants, although primarily created to show examples for customization.

#### faker

A [PhantAuth Faker](https://phantauth.net/_faker) tenant contains a generator built on the JavaScript Faker library. The generator runs on the serverless deployment platform of [ZEIT Now](https://now.sh), available free of charge. Its source code is accessible in the [phantauth-faker](https://github.com/phantauth/phantauth-faker) GitHub repository. Its DNS configuration is:

```
faker.phantauth.net. 120    IN  TXT "factories=team"
faker.phantauth.net. 120    IN  TXT "factories=user"
faker.phantauth.net. 120    IN  TXT "flags=small"
faker.phantauth.net. 120    IN  TXT "factory=https://phantauth-faker.now.sh/api{/kind,name}"
faker.phantauth.net. 120    IN  TXT "userinfo=Dream Team"
faker.phantauth.net. 120    IN  TXT "theme=https://stackpath.bootstrapcdn.com/bootswatch/4.2.1/united/bootstrap.min.css"
faker.phantauth.net. 120    IN  TXT "logo=https://phantauth-faker.now.sh/faker-logo.svg"
faker.phantauth.net. 120    IN  TXT "name=PhantAuth Faker"
```

#### chance

A [PhantAuth Chance](https://phantauth.net/_chance) tenant contains a generator built on the JavaScript Chance library. The generator runs on the serverless deployment platform of [ZEIT Now](https://now.sh), available free of charge. Its source code is accessible in the [phantauth-chance](https://github.com/phantauth/phantauth-chance) GitHub repository. Its DNS configuration is:

```
chance.phantauth.net. 120   IN  TXT "flags=small"
chance.phantauth.net. 120   IN  TXT "name=PhantAuth Chance"
chance.phantauth.net. 120   IN  TXT "factory=https://phantauth-chance.now.sh/api{/kind,name}"
chance.phantauth.net. 120   IN  TXT "factories=team"
chance.phantauth.net. 120   IN  TXT "factories=user"
chance.phantauth.net. 120   IN  TXT "theme=https://stackpath.bootstrapcdn.com/bootswatch/4.2.1/united/bootstrap.min.css"
chance.phantauth.net. 120   IN  TXT "logo=https://phantauth-chance.now.sh/chance-logo.png"
```

#### casual

A [PhantAuth Casual](https://phantauth.net/_casual) tenant contains a generator built on the JavaScript Casual library. The generator runs on the serverless deployment platform of [Auth0 Webtask](https://webtask.io), available free of charge. Its source code is accessible in the [phantauth-casual](https://github.com/phantauth/phantauth-casual) GitHub repository. Its DNS configuration is:

```
casual.phantauth.net. 120   IN  TXT "logo=https://www.phantauth.net/logo/phantauth-logo-gray.svg"
casual.phantauth.net. 120   IN  TXT "name=PhantAuth Casual"
casual.phantauth.net. 120   IN  TXT "factory=https://wt-51217f7b3eee6aead0123eeafe3b83e8-0.sandbox.auth0-extend.com/user{?name}"
casual.phantauth.net. 120   IN  TXT "theme=https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
```

#### gods

For the [Greek Gods](https://phantauth.net/_gods) tenant, the user data is contained in a [public Google Sheets](https://docs.google.com/spreadsheets/d/1Xa4mRcLWroJr2vUDhrJXGBcobYmpS8fNZxFpXw-M9DY/) document. Its DNS configuration is:

```
gods.phantauth.net. 120 IN  TXT "attribution=God pictures come from  [Theoi Project](https://www.theoi.com/), a site exploring Greek mythology and the gods in classical literature and art."
gods.phantauth.net. 120 IN  TXT "name=Greek Gods"
gods.phantauth.net. 120 IN  TXT "flags=medium"
gods.phantauth.net. 120 IN  TXT "theme=https://stackpath.bootstrapcdn.com/bootswatch/4.2.1/sandstone/bootstrap.min.css"
gods.phantauth.net. 120 IN  TXT "logo=https://cdn.staticaly.com/favicons/www.theoi.com"
gods.phantauth.net. 120 IN  TXT "sheet=1Xa4mRcLWroJr2vUDhrJXGBcobYmpS8fNZxFpXw-M9DY"
```

#### randomuser

The [RANDOM USER](https://phantauth.net/_randomuser) tenant uses the popular https://randomuser.me service to generate random users. The randomuser.me service is called on the client side, the call is contained in the [randomuser.js](https://www.phantauth.net/selfie/randomuser.js) script given in the `script` parameter. Its DNS configuration is:

```
randomuser.phantauth.net.   120 IN  TXT "attribution=User data generated using [RANDOM USER GENERATOR](https://randomuser.me/)."
randomuser.phantauth.net.   120 IN  TXT "script=https://www.phantauth.net/selfie/randomuser.js"
randomuser.phantauth.net.   120 IN  TXT "flags=small"
randomuser.phantauth.net.   120 IN  TXT "name=RANDOM USER"
randomuser.phantauth.net.   120 IN  TXT "logo=https://cdn.staticaly.com/favicons/randomuser.me"
randomuser.phantauth.net.   120 IN  TXT "theme=https://stackpath.bootstrapcdn.com/bootswatch/4.2.1/sandstone/bootstrap.min.css"
```

#### uinames

The [uinames](https://phantauth.net/_uinames) tenant uses the https://uinames.com service to generate random users. The uinames.com service is called on the client side, the call is contained in the [uinames.js](https://www.phantauth.net/selfie/uinames.js) script given in the `script` parameter. Its DNS configuration is:

```
uinames.phantauth.net.  120 IN  TXT "attribution=User data generated using [uinames.com API](https://uinames.com)."
uinames.phantauth.net.  120 IN  TXT "logo=https://uinames.com/assets/img/ios-precomposed.png"
uinames.phantauth.net.  120 IN  TXT "flags=small"
uinames.phantauth.net.  120 IN  TXT "theme=https://stackpath.bootstrapcdn.com/bootswatch/4.2.1/minty/bootstrap.min.css"
uinames.phantauth.net.  120 IN  TXT "name=uinames"
uinames.phantauth.net.  120 IN  TXT "script=https://www.phantauth.net/selfie/uinames.js"
```

#### mockaroo

The [Mockaroo](https://phantauth.net/_mockaroo) tenant uses the https://mockaroo.com service to generate random users. The mockaroo.com service is called on the client side, the call is contained in the [mockaroo.js](https://www.phantauth.net/selfie/mockaroo.js) script given in the `script` parameter. Its DNS configuration is:

```
mockaroo.phantauth.net. 120 IN  TXT "attribution=User data generated using [Mockaroo's Mock APIs](https://mockaroo.com/mock_apis)."
mockaroo.phantauth.net. 120 IN  TXT "script=https://www.phantauth.net/selfie/mockaroo.js"
mockaroo.phantauth.net. 120 IN  TXT "logo=https://www.phantauth.net/selfie/kongaroo.svg"
mockaroo.phantauth.net. 120 IN  TXT "flags=small"
mockaroo.phantauth.net. 120 IN  TXT "theme=https://stackpath.bootstrapcdn.com/bootswatch/4.2.1/minty/bootstrap.min.css"
mockaroo.phantauth.net. 120 IN  TXT "name=Mockaroo"
```

## Pricing

PhantAuth is a free, open-source, non-profit application. If you find this service useful and can afford, please make a small donation as a contribution to the operation costs (domain registration, service hosting, etc.)

[Donate on Ko-fi](https://ko-fi.com/Q5Q0T7C7) | [Donate on Liberapay](https://liberapay.com/szkiba/donate) | [Donate on PayPal](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VXLCJ3EZRAE7G&source=url)

## Generator

The basic concept of PhantAuth is that it generates data in a random but deterministic way. To achieve this goal, a so-called pseudorandom number generator (PRNG) is used. Each object type has an identifier (login name for user, client_id for client, etc.) By using a given hash algorithm, the value of the pseudorandom generator seed is produced from this identifier. Then, every property of the given object is generated with the pseudorandom generator started from this seed value. Taking advantage of the special feature of the pseudorandom number generator, also called as deterministic random bit generator (DRBG), that is, it generates the same random value series started from the same seed, the identifier clearly defines the object generated from it. That is, by the use of an identifier and generator, you can regenarate the properties of a given object at any time.

Based on the above concept, PhantAuth is absolutely stateless, and no storage medium is necessary. So, a randomly selected login name will "exist", and the properties of the "associated" user can be generated.

### Identifier

In brief, an object is defined by its identifier. The name of the identifier of a user or client object is `sub` or `client_id` used in the OpenID Connect specifications. The name of the identifier property of other PhantAuth-specific objects that are not included in the specifications is `sub`.

The identifier may contain any character.

### Customization

Sometimes you may want to customize the properties generated from the identifier. Although the identifier may contain any character, and its structure is optional, you can customize the generated values if a certain structure is used.

#### Flags

You can use a variety of flags to customize or give the parameters of certain object properties (user, client, etc.). The flags can be grouped by their effect on the generation of the properties. Basically, a flag is a keyword. You can set more than one flags to affect the generation of a variety of properties at the same time. To separate the flags from one another and the rest of the identifier, you need to use a semicolon `;`:

```
joe;female;kitten
```

In the above example, the user generated by the user generator is female, and her avatar is a randomly selected sketched kitten avatar. The other features are deterministically generated from the name "joe", that is, their values are not affected by the two flags. The [profile page](https://phantauth.net/%7Ejoe%3bfemale%3bkitten) of this example can be found [here](https://phantauth.net/%7Ejoe%3bfemale%3bkitten).

Please note that the flags form part of the identifier, as a different flag allows you to generate a different object.

##### User gender flags

The following flags modify the gender of the generated user.

Flag | Description
--- | ---
male | The `gender` property of the generated user is male, independent of the user's name
female | The `gender` property of the generated user is female, independent of the user's name
guess | The `gender` property is defined on the basis of the generated user's given name (default)
nogender | The generated user doesn't have a `gender` property

##### User avatar flags

The following flags modify the generated avatar image.

Avatar | Flag | Description
--- | --- | ---
![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQCAwMDAgQDAwMEBAQEBQkGBQUFBQsICAYJDQsNDQ0LDAwOEBQRDg8TDwwMEhgSExUWFxcXDhEZGxkWGhQWFxb/2wBDAQQEBAUFBQoGBgoWDwwPFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhb/wgARCAAgACADAREAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAABQcIBgT/xAAZAQACAwEAAAAAAAAAAAAAAAACBQEDBAb/2gAMAwEAAhADEAAAAC6Xe29GzHjM+gFAVhqJajyCeLlrIXbWPewzZijGPPvG/NwoetBt08tMkn//xAAqEAABBAEDAwMDBQAAAAAAAAABAgMEBREABhIHITETIkEIFWEjMlFxof/aAAgBAQABPwDoBVvmxe3DuSZCnJjKxAaaaBSlwYJcJz8ZSB+VDVjQ3Ni+L+ukOh9LRaS1IkFCSknvhKchJyB/IOB21vOduKNt+TC3LspNpVvHhKWC26koPYqcb4+5I+SSSPOrjpbVN2D1bt+ImJEkMpDjshCXHsqySGjjKRxKR7jnIOuhUaMxtlguVqY7rbi2kxArJCXMcV4wAByB8Z8E6n9TaSv3Wjbv2+zmPuKS0XWWx6SV+AknlkHP41Y9SqSbuqZtX7baR5rZWxzdY/RWvuCnkVd/6A8d9b86uWjd1Pq9gbUfdlR3lx3LFTBOVpUQotj9oTnwfONdEdwsU0lFHcwr+NYT3S5BVYyUSBz9MFaUnlyCQhkrHYgYWdXG762DdoW/ErgtlHMvynkMKkZ8IZUrty+T+AE5Gci26m1CGLO+broZQ0y9JcLcptx2MpIK1IdKSQOXwO5GoHVSss7kzbWqkyovqKWquE/0m3CpWTlSEBXgkY/0+Da9L7fY/wBUNYuXbxp1TupiwjUCe6HIkhtv1g0sEcQVMtuoCwdX93XVT8ytvYMkpT7WltoQpaUgkcClYOCDkeDqvsdoXcKTAuSKiisIsiqYfslAqlzZDZaQhtKQSSjklftHtJSdVzEqC7IiTWiw/FcWy6kkHgtJwpJI7ZBBGc41/8QAJREAAgIABQIHAAAAAAAAAAAAAQIAEQMEEjFBIVEFEyIycYHB/9oACAECAQE/AMsFY6wKqM/WxDiudhNbXqPEyTgYTKxsi4XrrvFY77QgM2omhMNhiMShBrtMJgxvtPc6qOYnhgVvU9/VfsbKocu2FhKF+O8S1NHoZkcvqfzX42nM/8QAIhEAAgICAgICAwAAAAAAAAAAAQIAEQMhBDESIhNBBTJx/9oACAEDAQE/ALLHcXB600PEXxu4cSeOonFyL4mtE9/yLjJNHUyLQI7FQkra9kTj8la+I/e9wJ61ZsxwqYmLH9RG5pK0q0Zg5ATMrt0DFfVg2J+W5nr8SffcB1P/2Q==) | ai | [AI](https://thispersondoesnotexist.com/) type generated, photo-like avatars (default)
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABelBMVEX////uuIw6TFomLDQ4SljuuYovQ1Hvuo5KMSztuI4xRFIxQ1DsuY3storvuY3+///zvY8nLTLc4ePx17zvxqPzvpP2wZHvuYrVpnyjfVycdlw1SFcyRlWWc1QjN0YqOEMoLDVMMCxILipFKyb6/Pv9/vn3+Pju8vPu8PDo6+337d/Bxcets7eHkZn1wZXotYrutonsuYiViobQonj7///79+/28unx4M3y2cbx3MO3v8Ozq6nov5ruvpLktYvxuIfpt4bbqYCnlIDQo33MoHlxdXmEd3O+k3C5kGqlgGA7TVueeVltXFktP0p2VURrTD0qNDsmMTgoLjIfJS8iKC1DMyX9/vvl6evq6Of28OHb1djb1NjEycvGwr/Jwb+yub3Cu7nu0rjt0bi3sazfvp7evZzpvJPdtZN+ipPpvJKdko/uvIx1gYrisIVxfIXRonqJe3pWZXGCb2iuhWRDU1+dd11pV1SGZE6BYU4tQE5iT0pXQkFDLylBKSPfP9FbAAABsklEQVQ4y62SV1fCMBhAm5C0tLWlIFOGAoqAAgLuvfdW3Hvvvcd/NynnCJLy5n3p+XJv25y03D+zttOV+Zy+qC2jNz6+w6FgMGjeNPbb4aA5T3jPyNeGQm9VhOfHWXM4wnpL19erA1AqhNnQoYUt7uacIB9UOOcyHMv0GFE0EEU8NmoQvFyqjqQAgOBwqNdGwYNz3ONxY+z2eMadmWbGt/T2ZDUNEwQt23PawgSVLqBOTNFXTE2oAFcaBWBoGBCGh4BR0JGmsimVaqLXdAcT1O0rRCjZW4UGB+z3Wmmlt2rJpEaOKt1qYZ/AdfcB4M/l/AD0dZORJd4vioLfL4hif5wzpE0RscuFRaWNK0P8RAVAPV/nytF87B4YcB9ZynmbzU5P0m6zGdloAgXq7fR3sNcHUCJa6hu8kATtCsZKezSAIGr46zt9EPL8SGww1TsYG+F5CKXOYr9KPJSkhWXT0pJpeUGSyOiLFW32hiwgXppfrCEszks8IgtXBR+R9YCvtpoI1mr+PXGGoBwp3iFBKgS++ycIvVu/QSOigVeeMenMyPqMdkuCSVnWvVWWJ/WgkbofGhc3SydvBmYAAAAASUVORK5CYII=) | sketch | sketched photo-like [avataaars](https://getavataaars.com/) avatars
![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQDAwMDAgQDAwMEBAQFBgoGBgUFBgwICQcKDgwPDg4MDQ0PERYTDxAVEQ0NExoTFRcYGRkZDxIbHRsYHRYYGRj/2wBDAQQEBAYFBgsGBgsYEA0QGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBj/wgARCAAgACADAREAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAABAcIBgP/xAAZAQEAAwEBAAAAAAAAAAAAAAAFAwQGAAH/2gAMAwEAAhADEAAAAKqCXmKa6P3Ur6dnoLS3qPAoU9InlVzAmWDq+q42gRzMJepNsBxZvCPWhP8A/8QALRAAAQQBAwMCAwkAAAAAAAAAAQIDBBEFAAYSByExE0EUFVEWIiMyQmFxkbH/2gAIAQEAAT8A+bIwOSlTA20iGpbzrzjaAXClKeXbt3rW8989V944c5+LGcfxU0r9CKy4GwGQriApI48/BNm71sHq71E2dPZjZfGvyMGshDsSSeaRyIFIJFJJ1Kw70zIJf2rFfeZUn8RvtTS+xKeRP0I89voT7TszHm4lczmlh1cFL7bJPZRWSKH8CzoTcpBlYrbLO3XlwxFQgzw4kJQoJF/cq6v31Ekqy3zLETNvS47ENbZTIk0W1lDyDYoX7WD5/bT+2mZ60oRkIhkFRWFsZN5pZUfJtKQfP11kus2zoKMWJ+OkyBFYZbRKQsUhSKBUgBXe/NEdxpzqTPlNujb8JhbuNQiPKTOfS1wVVd0+SCBYI1M6m42BDbi7i4QMpIPNccH1BxokKtN0OVV58HWG3jh1vw3JOIeeiLbDhkR5iSSon8vZsitSp7z7LranFEA3V/2f919stvbnxrOcTuc7czDjKGsi36XqJf4CgSixzr9JBujRB1ms+5kt2TJ6JcmQ2FhDbsmgtaU0ORA7C6Jr2urNXrozuCa9siZF+NcQwyQQk0QVEAEkHz4Tr//EACURAAICAQMCBwEAAAAAAAAAAAECAAMRBBIhMlEFExUiMUFxsf/aAAgBAgEBPwCtsEmeaith4GR+kxQzdIyJYhryByBLCQeJpF2glp6U46WENG4nJ+ZYWW7b9TSA2kl4umA9xPH7NvaHR2iwo67lzwe2ZVUKkCAYxPFw6otinAGf5xP/xAAgEQACAQUAAgMAAAAAAAAAAAABAgADBBESIQUxFSJx/9oACAEDAQE/AGTYCUbIlcr7lezKjMLhOMcGWxFZlU82MtlGvTL8FgFp+zifJUx7WCi66lTggyxVKqAM2DPIbp9KOCex3dTow7+Q1jgiU7ykUFVX1bHRHuGZ2cnMtwrkhhk8n//Z) | photo | photo avatars
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAASFBMVEX///AoHCf/4LXP1Yz////EzHL/3K3Tmob/5sRURUXWuppMNzoKBgnWz8Df0rhXhIg+NC0uIyrf5+jz9eTf2cr44sHZ15VMPj4HhT4EAAAAlElEQVQ4y72S2w6CMBBEpYhstRXx+v9/Ko4LS1sgmRfOQzPZOWnSy2FHqgxW8FVJ0vfT+Aw+Q/LL+zvgsy2sVW6BFFyvtRGCCRgcf7gskkJnQncvBZGriBvjSxJhlfSYNreLIoScTaFtOQF4rcDSl3lGzC4AMUb2T4ITQGSFdw2ax/COTf1n3ms9ogorQNGlFBI44QtzCgcBd0pFOQAAAABJRU5ErkJggg==) | dice | pixel art-style [DiceBear](https://github.com/DiceBear/avatars) avatars
![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQCAwMDAgQDAwMEBAQEBQkGBQUFBQsICAYJDQsNDQ0LDAwOEBQRDg8TDwwMEhgSExUWFxcXDhEZGxkWGhQWFxb/2wBDAQQEBAUFBQoGBgoWDwwPFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhb/wgARCAAgACADAREAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAABAYDBQgH/8QAGwEAAgMAAwAAAAAAAAAAAAAABQYBAwQAAgf/2gAMAwEAAhADEAAAANaJeOCqOd+iDnkJur0WoZYGhWcmLanlnJDCsyquYXZ9NWmmUpTHqfadDPhj/8QAKhAAAgICAQMDAwQDAAAAAAAAAQIDBAUREgAGIQciMRMVQSNCUXEyUmH/2gAIAQEAAT8Az3cdmbvpoqlmdqsE8dOKGFggaYuY3ck6J0zlNbA2m/J11lO985i+9rmOatHchV2P0nKxmFdnhpvnRXRPtY+V8aPXcnrtnKdmCnat0KkwTlYjhgkeSJ0mMb71vanTsnjzwAIcHz6HeoWb7zyUMZ4S0oIXWWyYDE9kr+8qQvBgSgKga9zHWtazNRZ8pnpnhlcUpLVmIQ+11lW0oVw2wVADOSR5A2RsgDpObF5XkeWSV2klkk1ykdjssQAACT+AAB8AADXSxVIu5ESDEsbeQhkaS5DVGiIyihJZB52eY4qd7CN/r1grAjz1evjK9iI1L1YN9CLgk6mdecaP/idPHp1HkFdEeR01atW9V7ONvQI9TMVXVY2GwxcBzv8AsxTf9G16z3Y9jHRvPQngejChZhM4jaFAP51xIA/JK6A+D1QTKXpoExKvWtyv+k0yKVQ+dc15r4PwAGB2QD/B9P8AsrK0cn937lyy3bKbaKCCNUhjZiWL6ABJ2ToHlrQPJm2x9R8NYvUosljQfuOOb6kPEbLgENrX5IKhgD86K/uJ67m7myncMfAwT16qIA1KA8nsOB7ixHll3sKh0NeXGzpOxe4Z4IMPnM/WnipySWK9yNNgpKkwVCfOw6hGP9+NAkdROskYdGBVgCpHwQev/8QALhEAAQMCBAMGBwEAAAAAAAAAAQIDEQQhAAUxgRJBURMUYXGRoQYQIiMzscHR/9oACAECAQE/AH83WM1TSoEpsDHXn6C2KrPHqOodS4ApIVAGhiAdb9eY3wxldPVNU9U09DawCQdTIsARoZsbcjjM+NjOVUrY+3w8XOb6e8jxicNMTXVrhMFMwehJ12/WKh9x91TrhlRwFvushHaEpSRCZOpm6RtfzGMuVVU1c32hMrIBBmYkfvQHzw22lnOXUKH0uoncWP8ATiu+FlcRXTrEdFct/wDcUFK49VBtogqGhmPQx/MUOUlp7vFQeJYsNbbmPYAXNtIzOkcdQl1j8jZkePUb4zTO6irUKanBSDY9Z5jyGMqR3SrVKZTYT0tNt42+X//EACwRAAIBAwEFBgcAAAAAAAAAAAECAwAEIRESMUFR8AWBkbHB0RATFBUyQqH/2gAIAQMBAT8Ae5P1IiFS3RhJ1znTTuHGvus+pATrrNWF286ja3jf78s0iazTNxFSOzsWbfQUspIPLHHNWu3FKuv7eNKoW6bkw8qm7OJJKN4+9QRFpNlT/dPT0qK22W2239dbhU8ZcBl/Jcj276ubt5D8tMc6t0EUxxjHl8P/2Q==) | kitten | [ROBOHASH](https://robohash.org/)-generated sketched kitten avatars
![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAcFBQYFBAcGBQYIBwcIChELCgkJChUPEAwRGBUaGRgVGBcbHichGx0lHRcYIi4iJSgpKywrGiAvMy8qMicqKyr/2wBDAQcICAoJChQLCxQqHBgcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKir/wgARCAAgACADAREAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAUDBAYB/8QAGgEBAAMAAwAAAAAAAAAAAAAAAAIDBAEFBv/aAAwDAQACEAMQAAAAc9Z7oAAFM8lXmOgr25uzDMTxt5Ku5DQgtxWBpXr/AP/EACgQAAICAQMDBAEFAAAAAAAAAAECAwQRBRIhAAYxEBMiUQdBRXFzwv/aAAgBAQABPwD0BBzgg444Prc1F1p+7PQtiNZzkIoYlEG7ewPhcjwfOP1z1oGqi7BLLQRrETXNkkjZVtpiQiTHOcnB8+Gz6d394J2tQSdKZuu03tOqvsEZ2hvk2DgkHjqHvLQZHENm/WqzGNHMU0yHAZQw+QJU8H7/AJA6m7p0CooD6rTHgKkcgY/QAA603uGC/repaU0FivZoOqSrPGF5OfjkE/Lg8HB6s6VTutKbMCSrNGI5UcZSRQcjcp4JHOD5H31N+Ne1p/2wJ/VLIP8AR6bsPQZ5o5b0E99oo1ijNy1JJsReFQZbhQOAPA6qaJp9F4zSqpXSLJjiiG2NWIwX2jy2ONxyccdf/8QAHxEAAgIBBAMAAAAAAAAAAAAAAQIAAxEQITFBEhMg/9oACAECAQE/APlRgxxvvpWnmYamXqCtj1GrKDJgYjie54bnMLluZ//EACgRAAEEAQICCwAAAAAAAAAAAAECAwQRACExBUEQEhUgIlFhgZGhwf/aAAgBAwEBPwDuvLK26o1f0OeR12klOuv5v0SpYjpsCzdY1OYcTqqj66YqUwgWVjI8tD6ilPLFsocvrDfOzY/kfnE8NjjcE++Nx22z4BWf/9k=) | adorable | [Adorable Avatars](http://avatars.adorable.io/)
![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQCAwMDAgQDAwMEBAQEBQkGBQUFBQsICAYJDQsNDQ0LDAwOEBQRDg8TDwwMEhgSExUWFxcXDhEZGxkWGhQWFxb/2wBDAQQEBAUFBQoGBgoWDwwPFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhb/wgARCAAgACADAREAAhEBAxEB/8QAGgAAAgIDAAAAAAAAAAAAAAAAAAcBBAIGCP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAOii6BSAb5InzIaoCqNqGQAtz//EACcQAAIBAwMCBgMAAAAAAAAAAAECAwQFEQAGQRKRBxAhMTJxE1HB/9oACAEBAAE/ANWe03G6OVoKV5un5N6BR9k4GrvaLlayBX0jxBvichlP0Rkeey4IYNrUKQABXgV2I5Zhlj3Ot4wQVG165JwCqwM4J4ZRkHuPKFHllWONCzuQqhRkkn2A1sS2XG12YQV06vn1SIDP4s+46udb4ttwudmanoKgJy8RGDLj1A6uP7+9So8UrxyIVdCVYMMEEe4OvCOgSpvc1ZIARSRjoB4ZsgHsG8/FqgSmvcVZGABVxnrA5ZcAnsV1/8QAFBEBAAAAAAAAAAAAAAAAAAAAQP/aAAgBAgEBPwAH/8QAFBEBAAAAAAAAAAAAAAAAAAAAQP/aAAgBAwEBPwAH/9k=) | mp | simple, cartoon-style silhouetted outline of a person (does not vary by user)
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEVPMTn///+hkZWsnqKWhInz8fG3q67o5OVjymXqAAAAoElEQVQoz82OwQ3CMBAEV8ENXCzxdjowHeBHCnBQ/jRB/2TWwjVwq5H2tXOK3HPkLYAoaq9RlwCirNeFNnCqyoUWcM7jcxQpwX7upzdWqcHciJIC5kasLcAb+DVudPwaNzp+pOBO5S1wx6/HXeCOX7e3wN3+caPbP879b/4oetoPSt447Ac1b/SCFFJ4o6/4ocXYsB9+G/bD3MAPcwM/kC/KhCQv+Oa0WgAAAABJRU5ErkJggg==) | identicon | a geometric pattern based on an email hash
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAB2lBMVEXw3/Q3t350dHTn1+uwo7LAssOnp6dVVVWhoaGamprs3PDp2e3j0+ZxcXHZyt2UlJQ1sXlwcHBcW1zTxNapnauMjIyHfol3b3lvb29qampoZ2jh0eTez+K5ubmmm6iakJyYj5qTiZV+mJOSkpKIh4h8fHx4eHg0p3RsbGxiYGJQUFAgbUvQwdPOwNLNzc3Hucq/vcC5rbu4q7u2qrmVjJeWlpaTk5ORh5OPiZGPj4+LhoxylouJgYuAd4JzioB+dYB+fH96eHs0rXcwoW9uZ29Chmg7hWVkY2VgW2I4c1lOTU9MTEzJu8y9r8C0p7e1tbWyqbWiqa+rn66ro62qqqqkmKahl6Ock56MnJyFgYWEhIR1hn98c35lf3ZzbnRJhmsvmGlUdmg4jGctkmVkXWVRaV9fX180eltEa1kmf1dFZVdVUVZHR0f////o2OzVytvY2NjT0tPKvs3AvMjCtMXCu8Sqsbeor7WxsbGtobCurq6mqqicn6ajo6Oenp6OjZWJiYlymohwj4dxioVDt4Nil4N4i4OAgIAzqXQ6onRcfm85mW5LgWw6kWtkbGhgaGdAgWRUbGMwimJNZF5KZFxZWVlLVFBJRUo9UEg5UEgfZ0c8PDw7OTsgQzTXmnPvAAACSUlEQVQ4y42ShXPiQBSH325ISBqCe4sWKFJ3B4pD3d2u3p67u7v7/3pLgB5Q5ua+yWQy+X37due9hf9CXl/1z/zC+XPjZyBHK4BGVi6Mn+64EV0Wi1BWoCahnJrmxmaZLKinAKrpKykeQDIDwE9ZLoNItWGgiQe+YWCZgpaJOvT47OSwPGhINjY3ips1qf0Zv3qErx81bMHVCEJoUxvVO7p+9VxrgSyrWIqPjF59FdADH+tIXhcIPOxP4CO11waEUR8RjH6887VL/mo/gFDkxxBCKfxZKsXeWSJsYSwVH+Hta4TW9yMBRFDuZXAGY5MWIGne8Ru9RNgm5QlkuWgcYJMaq3xWANA4ZrRp6fYzVMK6GadxkpZDHvoUKmNX9TOhKRpH34Nve8fShy+/+zbUvn4oYc6UKghx2/Vsh6lSoSp6QLLYS/Lqg4rUfFduLlluPkJovuKlGLF+ejc9uHSfVLgrOxE3HAq17O7gEyXK8ibca6OLT0C1uxnF01Dn2BoS2WAZhgvrG46b4GLYWmFsZS2uzAkxXQfHkn+5ccoWdIxCZ5oeJGmBF5yC5Wo7JWL5MMfc4ViVJY7+MvS+e5HrIVeAUN/TybDu7pAlhop4fpE3L87lDqgyGiSUJuRxrzid8xKRW07nBCzcloBIt8IB0Mq4OC0UI8O6vDB7D1MAU71WvkSQuIz5TjTpFG1wkvYOoTCkVXclwaXozec2qVmtLY81/WnhsEb8NJhUgkdwlObVCZXZ4/ENA+ESTbfa7V1lAk23tdvtQQr+AEpRWa/mX8zUAAAAAElFTkSuQmCC) | monsterid | a generated "monster" with different colors, faces, etc.
![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQDAwMDAgQDAwMEBAQFBgoGBgUFBgwICQcKDgwPDg4MDQ0PERYTDxAVEQ0NExoTFRcYGRkZDxIbHRsYHRYYGRj/2wBDAQQEBAYFBgsGBgsYEA0QGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBj/wgARCAAgACADAREAAhEBAxEB/8QAGwAAAQQDAAAAAAAAAAAAAAAABAMFBgcBAgj/xAAbAQACAwEBAQAAAAAAAAAAAAACAwAEBgcBBf/aAAwDAQACEAMQAAAA7bDwNf1URYFK7aFah061OMmdYZHaxjHR6yMLmEsbVQ8o1RuMQhGZD//EAC4QAAEDAwMBBwIHAAAAAAAAAAECAwQFESEABhIHEyIxUVKR0kGiFSMkNGFiof/aAAgBAQABPwD8Vlvy0R4pbF0laluXISBbFhbxv5/TTm4JLTpQZcXH9VfLTm55KGlLEqKbD0K+WqDvw1Sqv054Nh1CO0Spu4BSDYggk+ac3zc4Fs06euQ6+Uryhk/6U63HRRL620eGjY8KpUidBck1iryePNiV3vygmwNgUoAJKuQXcHGOn9I/QVmpVzaEbblbiVYx6ezG4FMmJ61FKbpAGQoqss4462nNVG3u6ortyiuj729bOqTbzs/tFjDIt76mVVbFUkJehurY5XQ+xZfdsLhSb8r8uXgCLWzpdWXI4oiwng0T33n7NpCfrZJPMny7oH86jTRG3chSVYVHeH3tapPV52lKfLRbd7ZHCy74ze+DpXWCSpfK8T2V8tHq7IN/2nsr5af6lokPNPHsm1tIUm7dxfkQT4k+lOv/xAAiEQACAgECBwEAAAAAAAAAAAABAgARAwQSEyExQWGBwfD/2gAIAQIBAT8A3Q5wIdQBMOoGW67QtamZCoQFW5xypw3u5/u00Brf6+wMNpuEi+sYius0Zrf6+zjCiDKTzKTzEdUFLP/EADARAAECBAIGCQUAAAAAAAAAAAIBEQADBSEEBgciMUFhkRITVGKSwcLS4UJRcoGh/9oACAEDAQE/AJA9Y99kDSTJHRV5fMDRTJWf+fMValzKb0FNXQnbdsZ7ftIoKocwkXh5xgJc6ZiSGfL1b/TZtyou/nGFHEDUEFJbBd9WyJ+W/nGkRhDCt3vTGVnmTDbh5xLA0HZaJYH0ktGkzVDCP3/TGX81FSJxTEBDQkuiq2zjeE0vn2UfEvthNMB9lHxL7YzPnebXylqYIAi7IivtZ72+0f/Z) | wavatar | generated faces with varying features and backgrounds
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAABlBMVEVLAmn9LdWXmTS+AAAAMUlEQVQI12N4wMDAj0wUyCATDAUyDMgE/wMEARbDIOQbmD8gEx/kkQmZApkCJIIwAAAZjxw4Pi/EJgAAAABJRU5ErkJggg==) | retro | awesome generated, 8-bit arcade-style pixelated faces
![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wgARCAAgACADAREAAhEBAxEB/8QAGgAAAQUBAAAAAAAAAAAAAAAACQABBgcIBP/EABkBAAIDAQAAAAAAAAAAAAAAAAAFAwQGAf/aAAwDAQACEAMQAAAAKmFTQT2dNB19GAcj3fTwWbgRZRgG/Z38htKyALMogqCxfyBdakdVZv8A/8QAKBAAAQMDBAEEAgMAAAAAAAAAAgEDBAUGEQAHCBIhEBMiMRQkMkJS/9oACAEBAAE/ANbv71SdsatRILFtzqutSkjH98U6MopKiIiH5yXlVxj+uqe6+9BYclMDGkmCE4yLnuIBY8j2wmcfWcevNTlQtyXJKsq3ak/T4dEnKD8qKRNGclvIkvuf5RVIRQcYUVJV1wb5PXJet1zbBvGpFWjKN+ZSqm8Qm9gfJsmafz+OSQl+SYJF9d+OJNfi7n3XV27br9xU2rVBZ8OTQBjGgA453eB4XF7IY5JBwnVdcCuOVXS8I+69RzTKE2zJYosJ0wKU+hEbSuPIHxFBHI4+1L15N7k1javbF2r0IYS1A5Tcb94FMUAhMjUQQh7lgPrKa4b7/wC4q3jaVty3YMbbFme9RTMWA7rLfZekMNqXZXEVTEkFcIOkXOv/xAAlEQABAwEIAgMAAAAAAAAAAAABAgMEEQAFEBITITFBMlFCccH/2gAIAQIBAT8Ast0INKWHG+MJiMkZ5XfA/bXjDbaGqz4+sZN43olDTd2aSQkHNqBRJPxpl6913s/eDsiO227TOAMxGwJ7oPVeK4xmkvOpbUaV2tNitQyW6kq6+sP/xAAkEQABAwQBAwUAAAAAAAAAAAABAgMRAAQFIRASMXETFEFRof/aAAgBAwEBPwCm2usEzXjnCYfqb9w62VSNa1FZjGt249dgQmYI5x+Xtk26G3DBSIOu+jG/MTWWyiLlsMt7+z2/ObFlFw+lpwwDWSsbeyBbBJX8eOP/2Q==) | robohash | a generated robot with different colors, faces, etc.
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAAtJREFUCNdjGOQAAACgAAH4BzM6AAAAAElFTkSuQmCC) | blank | a transparent PNG image
  | notfound | return an HTTP 404 (File Not Found) response
  | noavatar | the user will not have a `picture` property

##### Client logo flags

The following flags modify the generated logo.

Logo | Flag | Description
--- | --- | ---
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAJFBMVEX/VyL76ef+dkz71s774t39noL8uqf9kXD+glz/Zjb8xrf9qZHgm7oqAAAAlElEQVQoz6XNwQ0CMQwEwPUhIZ5rgcQXRAOUcCUcJVACHVACdEAJlMh5E5Dlzz1YR4k0iWN4yQ9WFWALQPgSWAYgALh1wBxa7E/BC5jAIyICAHbmbhNgM7Dd6GTAA5HTXa5KuVSwsQL/Bx8rqCowfbG1Agzw3HENmNAzODwWU4fA04wG7A/eJviKHeCCJsMea29Q8gH9RxXZMd8OgAAAAABJRU5ErkJggg==) | icon | [Game-icons.net](https://game-icons.net/) icon as a logo (default)
![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wgARCAAgACADAREAAhEBAxEB/8QAGQAAAwADAAAAAAAAAAAAAAAAAwQGAgUH/8QAGAEBAQEBAQAAAAAAAAAAAAAABgUEAwL/2gAMAwEAAhADEAAAAASHNXa056c8HP8ANkeusPyLOLuuNvc5byaaDbHQy6XH2GuA1ZxYPrmmEZP/xAAuEAABAwIFAwIEBwAAAAAAAAABAgMEBREAITFBUQYScQciFGGBoRMyM4KRksH/2gAIAQEAAT8A9HPT1mndMtPSWEKkPgPvFY3Oif2jFIpIlTZbIUoMpUlBUDmfbfI83++KlCXSHwxEJSJC9ASeVKt87ZeABtj1YoEiu0B2LNYR8THBehu6kLAuW720UBa17XANztSOokwaOSMwoFSlk2CTve+nP1x03W2GWnXJDqWUuO5FZ7ArPM57knTxpiqVVpVUgFVz2lRBPix+x+xx1xKjSobamFBStAUkHOxIz8gHBpyZcj8U+1squv3WCc/GoJH8njOJGbkLKVuraQpAUhIV+Ygg9pO4NsxwPGKhAkxgiK4opfjICw4q/cogDjQk2H1POH5lReaWmSsPFA7UWCQCom225sc+LnI3t05UY/UNFiVRkBRdQEvI07XAlQWP7km3BBxGmOxYJi/DtusKIUF6qQf9Gmp2xUJTD6OyO4p1Q/UWSVdxyyGW1uecdTTo9Ao8uovaMBYabXY9zujQA+V0g22F8f/EACwRAAECBQICCgMAAAAAAAAAAAECBAADESExEkEFYRMUMlFxkcHh8PEigdH/2gAIAQIBAT8A4k5UFdCnAz4+0NXC1MES0mn5H+w0dFpImrVemK3vT6MNn6nZKJhqoYhwhap9KXMM2iGzWWiYoAm+dztztHHmpS11p2Vf9j2hlMMtwlQ2IhHCZ8qdrVhO+ceQMO19aWrWvSUdkd45czmGM2aUKaTb6sD09YZcJWp2lGkgA38AeflCp5nNqitabZsKYia0UhJHbBNlYp31r8pCGhTN6RJ1KF1KJsOX0IW4UJSp69sV54PzIBMf/8QAKxEAAgECBAQFBQEAAAAAAAAAAQIRAAMEBSExE0FRYRIicYHBMlKRodHw/9oACAEDAQE/AMutjA4dfvfU9ulYu4i3uKwBaNPzRspi2Qt3n0msyyyy+HLWOWtXcKtxg5MAVnPFu32aypIUAbToOf73rIvExdWO66ex1rBWHCOj9Kv51hnAVWktsJ117bilThongSZPm7aTPxWIawFGKtkQDqff+0+Y20wzXZBkae9ZeFW8HYjXrMT0nl27GKwuJ494XSeGyyGT6vFGxEH4NHHlbbC6ptqfKiBRJjn6eugoJwXKqYG8Dr0P+MSB1j//2Q==) | fractal | [Electric Sheep](https://electricsheep.org/) fractal as a logo

##### `Group` size flags

The following flag modify the sizes of the generated team (group of users) and fleet (group of clients).

Flag | Size
--- | ---
tiny | 5 (default)
small | 10
medium | 25
large | 50
huge | 100

#### Name

In most cases, the generated objects have a full name, which is generated from the identifier. Instead of being generated, the full name can be produced from the identifier, if the identifier contains at least one period (`.`) or space (` `) character. In such cases, these characters play the role of separator between the parts of the full name (e.g. family name, given name). That is, the full name isn't randomly generated from the identifier but, by taking the separator characters into account,  it is produced from the single parts of the full name (with capitalised initial letters). For this purpose, it is advised to use a period character, rather than a space character.

```
joe.black;sketch
```

In the above example: The full name of the user generated by the user generator is *Joe Black* (and his avatar is a skecthed profile avatar). The [profile page](https://phantauth.net/%7Ejoe.black%3bsketch) of this example can be found [here](https://phantauth.net/%7Ejoe.black%3bsketch).

#### Picture

In most cases, the generated objects have an image (avatar for a user, logo for a client), which is generated from the identifier. The *flags* determine which pre-defined inventory the image comes from (see [flags](#flags)). It can be further customized by the use of [Gravatar](https://gravatar.com).

Each object has a generated unique email address (`email` for a user, `logo_email` for any other objects). To customize the image of a given object, you need to assign the gravatar image to this email address. By default, an object has a gravatar image, and the generated image is the default value of the gravatar URL only. In other words, as soon as you create a gravatar image to a given email address, that image will appear as the image associated with the given object.

#### Email

A disposable, operational email address suitable for receiving incoming emails is generated to each object. You can use your own email address (e.g. a previously set test email address) instead of a generated email address, if you prefer. In this case, the identifier contains an email address. Consequently, the image associated with the given object is the gravatar image assigned to the email address contained in the identifier.

```
ivan.test.szkiba@spam4.me
```

In the above example: The email address of the user generated by the user generator is *ivan.test.szkiba@spam4.me* (and his name is *Ivan Test Szkiba*). The [profile page](https://phantauth.net/%7Eivan.test.szkiba%40spam4.me) of this example can be found [here](https://phantauth.net/%7Eivan.test.szkiba%40spam4.me).

### Custom Generators

PhantAuth can use external data sources and generators as well. The only restriction is that the external generator has to be deterministic. This means that even if called several times, it has to generate the same object to the same identifier.

A special case of external generators is if an external data source is used. In such cases, the properties of a given object can be provided in a comma separated value (CSV) file or a Google Sheets document.

The external data sources and generators can be defined by the use of so-called [tenants](https://doc.phantauth.net/#/tenant). To learn more, please go to chapter [Tenant](https://doc.phantauth.net/#/tenant).

Base URLs:

* <a href="https://phantauth.net">https://phantauth.net</a>

<h1 id="phantauth-user">User</h1>

The *user* resource contains the [Standard Claims](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims) defined in the [OpenID Connect Core](https://openid.net/specs/openid-connect-core-1_0.html) specifications. It also includes some PhantAuth-specific property.

To use PhantAuth as an OpenID Connect provider, you don't need to carry out the user-related operations described here.
You don't need to generate users in advance. If PhantAuth requires a piece of data that belongs to a specific user, it will be generated in runtime.
The deterministic nature of the generators guarantee that the same user object will be generated to the same user name.
The only exception is selfie token generation, when the provided user data are used to create a so-called selfie token, which can later be used as a login name.

## Create a User Selfie

> Code samples

```bash
curl https://example.com/user \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "address": {
      "country": "USA",
      "formatted": "160 Washington Walk\nSan Francisco 98239",
      "locality": "San Francisco",
      "postal_code": "98239",
      "street_address": "160 Washington Walk"
    },
    "birthdate": "1950-02-10",
    "email": "john.smith.XPKEFHI@mailinator.com",
    "email_verified": false,
    "family_name": "Smith",
    "gender": "male",
    "given_name": "John",
    "locale": "en_US",
    "name": "John Smith",
    "nickname": "John",
    "password": "Opha8TV2",
    "phone_number": "747-178-7374",
    "phone_number_verified": true,
    "picture": "https://www.gravatar.com/avatar/54c27dd1891df67163ef53616549933f?s=256&d=https://avatars.phantauth.net/ai/male/Vyb8Yrdv.jpg",
    "preferred_username": "jsmith",
    "sub": "john.smith",
    "updated_at": 1518220800,
    "zoneinfo": "America/Chicago"
  }'
```

`POST /user`

To create a selfie token from the user data, you need an opaqe string token, which contains the encoded user properties sent in the request.
Later, the selfie token can be used as a login name. In this case, the user data is included in the selfie token, that is, the user properties are taken from the token.
By the use of a selfie token, you can use your own user objects during the authentication process.

Its use, however, is limited by its relatively large size (more than 100 characters), which exceeds the maximum size of the user name in several systems.

> Body parameter

```json
{
  "address": {
    "country": "USA",
    "formatted": "160 Washington Walk\nSan Francisco 98239",
    "locality": "San Francisco",
    "postal_code": "98239",
    "street_address": "160 Washington Walk"
  },
  "birthdate": "1950-02-10",
  "email": "john.smith.XPKEFHI@mailinator.com",
  "email_verified": false,
  "family_name": "Smith",
  "gender": "male",
  "given_name": "John",
  "locale": "en_US",
  "name": "John Smith",
  "nickname": "John",
  "password": "Opha8TV2",
  "phone_number": "747-178-7374",
  "phone_number_verified": true,
  "picture": "https://www.gravatar.com/avatar/54c27dd1891df67163ef53616549933f?s=256&d=https://avatars.phantauth.net/ai/male/Vyb8Yrdv.jpg",
  "preferred_username": "jsmith",
  "sub": "john.smith",
  "updated_at": 1518220800,
  "zoneinfo": "America/Chicago"
}
```

<h3 id="create-a-user-selfie-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» @id|body|string|false|The URL of the user's JSON representation.|
|» address|body|object|false|The user's preferred postal address.|
|» » country|body|string|false|Country name component.|
|» » formatted|body|string|false|Full mailing address, formatted for display or use on a mailing label. This field MAY contain multiple lines, separated by newlines. Newlines can be represented either as a carriage return/line feed pair or as a single line feed character.|
|» » locality|body|string|false|City or locality component.|
|» » postal_code|body|string|false|Zip code or postal code component.|
|» » region|body|string|false|State, province, prefecture, or region component.|
|» » street_address|body|string|false|Full street address component, which MAY include house number, street name, post office box, and multi-line extended street address information. This field MAY contain multiple lines, separated by newlines. Newlines can be represented either as a carriage return/line feed pair or as a single line feed character.|
|» birthdate|body|string|false|The user's birthday, represented as an ISO 8601:2004 [ISO8601‑2004] YYYY-MM-DD format.|
|» email|body|string|false|The user's preferred email address.|
|» email_verified|body|boolean|false|True if the user's e-mail address has been verified; otherwise false.|
|» family_name|body|string|false|The user's surname(s) or last name(s).|
|» gender|body|string|false|The enduser's gender. Possible values are: female, male, and unknown.|
|» given_name|body|string|false|The user's given name(s) or first name(s).|
|» locale|body|string|false|The user's locale, represented as a BCP47 [RFC5646] language tag. It is an ISO 639-1 Alpha-2 language code in lowercase and an ISO 3166-1 Alpha-2 country code in uppercase letters, separated by a dash.|
|» me|body|string|false|The simplified URL of the user's profile page.|
|» middle_name|body|string|false|The user's middle name(s).|
|» name|body|string|false|The user's full name in displayable form, including all name parts, possibly including titles and suffixes, ordered according to the enduser's locale and preferences.|
|» nickname|body|string|false|A casual name of the User that may or may not be the same as the given_name.|
|» password|body|string|false|The user's generated password.|
|» phone_number|body|string|false|The user's preferred telephone number.|
|» phone_number_verified|body|boolean|false|True if the enduser's phone number has been verified; otherwise false.|
|» picture|body|string|false|The URL of the user's profile picture.|
|» preferred_username|body|string|false|A shorthand name by which the user wishes to be referred to at the Relying Party.|
|» profile|body|string|false|The URL of the user's profile page.|
|» sub|body|string|true|Subject - User identifier at the issuer.|
|» uid|body|string|false|The user's simplified, shortened identifier at the Issuer.|
|» updated_at|body|number|false|The time when the User's information was last updated. Its value is a JSON number representing the number of seconds from 1970-01-01T0:0:0Z as measured in UTC until the date/time.|
|» webmail|body|string|false|The URL of user's mailbox in a webmail application.|
|» website|body|string|false|The URL of the user's webpage or blog.|
|» zoneinfo|body|string|false|A string from the zoneinfo time zone database representing the user's time zone. For example, Europe/Paris or America/Los_Angeles.|

> Example responses

> 200 Response

```text
eyJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0..3FlrxAUU5W8t31Rw.2JMhWkDz4aTGnvo4f2T5htzwwtzaUYbNzDZ4zAiqCepjhM5IX6pZMDQohr2M3u5liARhiObS1j1wlpNRdYz6YIDaLNZoRwHml-5LY8s8_1lgC4EQqAag3z9qrCoxc4LCkinruwQAeYuFiGq0YB6pp2FzQKDYh41RA_t3sgqsKAPG3Ql7X_Z0NMa0wMaBYxTLHn-lPbZOSWu3-nQzNQ8652HuBDY3JubCt_0hOBGCuhjrIX1fmq8RJb61pNFvWuJ8CHhx6fAoWi0hCETkYJ27gnrOy_jiPIThcyLrB7pouQ9Xs9xXtPdumfRScX7zx-kE9j_RyJ-HEG7WLBZkKJSHfqMCKB3dVxVdJ6DE3cYkADBb7J_8YLOKgMv1Jiw9yEZjoTQ39LtPBVCsubLPuI3k1SrYvZchNfJWbkFr9YlB46UzTnkt3VYvPfstLYXpYl--o9UIbZMM2wtyi24Szoq-GvPtNRXLvAZt2QeMB8ZGqPC7DcCgs4pba4X1uS0b_-oyjmI1azCve-5ov5UQZ9VRjBiVf3IlMFs2276A5hsxm-x-JcspBD4T83iSzObEnYM5gVX2FLD_QPt61TYknufuSkFyhgSyM8Zw4s1L4zLCljEqtGWFzOg3KrpKH7b4NQN1nuY2NEkhVrrAKZJeUM55KMRXdBTXTUOyWk2hObZs325_2F9mjYE1QTnGHHhuzFLT0uRxxf1HmcguzTfeorwk626Ed_VtSDygH0wbHuV7YOlt6VYkuEknzqS62NINPNkuvCKmkBjl1tIeCaaXXMb_fVcTL-9rueG9YxY4RpX0tvPN25zwuj3wXiEh11YlUnmD3zFh3QoKbJ0GQc8Xc5z0vj59NXMPQUC36xQ0O7KVIY7uKYbKVf71wtKY2rq4sYuWbm0vdOiab0lzvYv3-R5v79KPuq03AyPZeWOfmSPpnTRo4WA6geXID-KAEFkboL_SxHU7r--MpqL2tFeF7nS2IFNYjRchr19LWqZ9bvXtEyfsiqgQAzPmGOQ.QPl0yBPkyUxlb7WuxcOmeA

```

<h3 id="create-a-user-selfie-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get a User

> Code samples

```bash
curl https://example.com/user/string \
  -H 'Accept: application/json'
```

`GET /user/{username}`

Use this endpoint to generate a random user. The user is generated in a deterministic way, on the bases of the user name given as a path parameter.
In the case of identical user names, the endpoint will generate the same user object. The properties of the generated user object are randomly generated on the basis of the user name.
In lack of a user name, all calls generate a different user object to the randomly generated user name.

By providing an email address as the `username` parameter, you can customize the user picture by the use of the gravatar associated with the email address.

If the `username` parameter contains at least one dot (`.`) or space (` `) character, the whole name is produced from the parameter, rather than being generated.
In this case, these cahracters play the role of separator between the units of the full name (family name, given name).`

The result is always a user object. If you want to generate multiple users in one single step, you can do it by the use of *Team* generation.
The members of a team are users randomly generated from the team name.

<h3 id="get-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|The username or email used for generation purposes.|

> Example responses

> 200 Response

```json
{
  "@id": "https://phantauth.net/user/john.smith",
  "address": {
    "country": "USA",
    "formatted": "160 Washington Walk\nSan Francisco 98239",
    "locality": "San Francisco",
    "postal_code": "98239",
    "street_address": "160 Washington Walk"
  },
  "birthdate": "1950-02-10",
  "email": "john.smith.XPKEFHI@mailinator.com",
  "email_verified": false,
  "family_name": "Smith",
  "gender": "male",
  "given_name": "John",
  "locale": "en_US",
  "me": "https://phantauth.net/~john.smith",
  "name": "John Smith",
  "nickname": "John",
  "password": "Opha8TV2",
  "phone_number": "747-178-7374",
  "phone_number_verified": true,
  "picture": "https://www.gravatar.com/avatar/54c27dd1891df67163ef53616549933f?s=256&d=https://avatars.phantauth.net/ai/male/Vyb8Yrdv.jpg",
  "preferred_username": "jsmith",
  "profile": "https://phantauth.net/user/john.smith/profile",
  "sub": "john.smith",
  "uid": "tf+gMsdUWj0",
  "updated_at": 1518220800,
  "webmail": "https://www.mailinator.com/v3/?zone=public&query=john.smith.XPKEFHI",
  "website": "https://phantauth.net",
  "zoneinfo": "America/Chicago"
}
```

<h3 id="get-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@id|string|false|none|The URL of the user's JSON representation.|
|address|object|false|none|The user's preferred postal address.|
|» country|string|false|none|Country name component.|
|» formatted|string|false|none|Full mailing address, formatted for display or use on a mailing label. This field MAY contain multiple lines, separated by newlines. Newlines can be represented either as a carriage return/line feed pair or as a single line feed character.|
|» locality|string|false|none|City or locality component.|
|» postal_code|string|false|none|Zip code or postal code component.|
|» region|string|false|none|State, province, prefecture, or region component.|
|» street_address|string|false|none|Full street address component, which MAY include house number, street name, post office box, and multi-line extended street address information. This field MAY contain multiple lines, separated by newlines. Newlines can be represented either as a carriage return/line feed pair or as a single line feed character.|
|birthdate|string|false|none|The user's birthday, represented as an ISO 8601:2004 [ISO8601‑2004] YYYY-MM-DD format.|
|email|string|false|none|The user's preferred email address.|
|email_verified|boolean|false|none|True if the user's e-mail address has been verified; otherwise false.|
|family_name|string|false|none|The user's surname(s) or last name(s).|
|gender|string|false|none|The enduser's gender. Possible values are: female, male, and unknown.|
|given_name|string|false|none|The user's given name(s) or first name(s).|
|locale|string|false|none|The user's locale, represented as a BCP47 [RFC5646] language tag. It is an ISO 639-1 Alpha-2 language code in lowercase and an ISO 3166-1 Alpha-2 country code in uppercase letters, separated by a dash.|
|me|string|false|none|The simplified URL of the user's profile page.|
|middle_name|string|false|none|The user's middle name(s).|
|name|string|false|none|The user's full name in displayable form, including all name parts, possibly including titles and suffixes, ordered according to the enduser's locale and preferences.|
|nickname|string|false|none|A casual name of the User that may or may not be the same as the given_name.|
|password|string|false|none|The user's generated password.|
|phone_number|string|false|none|The user's preferred telephone number.|
|phone_number_verified|boolean|false|none|True if the enduser's phone number has been verified; otherwise false.|
|picture|string|false|none|The URL of the user's profile picture.|
|preferred_username|string|false|none|A shorthand name by which the user wishes to be referred to at the Relying Party.|
|profile|string|false|none|The URL of the user's profile page.|
|sub|string|true|none|Subject - User identifier at the issuer.|
|uid|string|false|none|The user's simplified, shortened identifier at the Issuer.|
|updated_at|number|false|none|The time when the User's information was last updated. Its value is a JSON number representing the number of seconds from 1970-01-01T0:0:0Z as measured in UTC until the date/time.|
|webmail|string|false|none|The URL of user's mailbox in a webmail application.|
|website|string|false|none|The URL of the user's webpage or blog.|
|zoneinfo|string|false|none|A string from the zoneinfo time zone database representing the user's time zone. For example, Europe/Paris or America/Los_Angeles.|

<aside class="success">
This operation does not require authentication
</aside>

## Get a User Token

> Code samples

```bash
curl 'https://example.com/user/string/token/'\''access'\'''
```

`GET /user/{username}/token/{kind}`

It is used to generate OpenID Connect tokens as path parameters to a user of a given name.

This method is mainly used in the testing process, when, for example, the token received from the normal authenticaton flow is not available to the test code.
Generating an access token, for example, will let you avoid authentication, and immediately call an operation requiring the access token.

<h3 id="get-a-user-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|A username or email.|
|kind|path|string|true|Token type|
|scope|query|string|false|OpenID Connect scope|

#### Enumerated Values

|Parameter|Value|
|---|---|
|kind|'access'|
|kind|'refresh'|
|kind|'authorization'|
|kind|'id'|
|kind|'selfie'|
|kind|'plain'|

> Example responses

> 200 Response

```text
eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb3NoLnNtaXRoIiwidG9rZW5fa2luZCI6IkFDQ0VTUyIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwgYWRkcmVzcyBwaG9uZSBpbmRpZWF1dGggdWlkIiwiZXhwIjoxNTU2ODg5NzcxLCJpYXQiOjE1NTY4ODkxNzF9.YBQ_6GlQ1iXjk6OKU7meJhlg3iRDEgeTqnBFdeLDJyI

```

<h3 id="get-a-user-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="phantauth-client">Client</h1>

The client object contains standard OAuth2/OpenID Connect client properties. To use an OpenID Connect flow, you need a client_id. Certain flows also require a client_secret. The client object contains the client_id and client_secret values, as well as some properties to be displayed to the user (e.g. logo, client name, version).

## Create a Client Selfie

> Code samples

```bash
curl https://example.com/client \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "client_id": "magic.toolbox",
    "client_name": "Magic Toolbox",
    "client_secret": "O68dVlLk",
    "logo_email": "magic.toolbox.OUUWE4A@mailinator.com",
    "logo_uri": "https://www.gravatar.com/avatar/23a9c0277d8e4062b01f1097037f0d5b?s=256&d=https%3A%2F%2Favatars.phantauth.net%2Ficon%2F9b68RVeE.png",
    "policy_uri": "https://phantauth.net/client/magic.toolbox/policy",
    "software_id": "igG6Jgx7mfzPdjhBvHvqRQ",
    "software_version": "3.8.0",
    "tos_uri": "https://phantauth.net/client/magic.toolbox/tos"
  }'
```

`POST /client`

To create a selfie token from the client data, you need an opaqe string token, which contains the encoded client properties sent in the request.
Later, the selfie token can be used as a client ID. In this case, the client data is included in the selfie token, that is, the client properties are taken from the token.
By the use of a selfie token, you can use your own client objects in the authentication process.

> Body parameter

```json
{
  "client_id": "magic.toolbox",
  "client_name": "Magic Toolbox",
  "client_secret": "O68dVlLk",
  "logo_email": "magic.toolbox.OUUWE4A@mailinator.com",
  "logo_uri": "https://www.gravatar.com/avatar/23a9c0277d8e4062b01f1097037f0d5b?s=256&d=https%3A%2F%2Favatars.phantauth.net%2Ficon%2F9b68RVeE.png",
  "policy_uri": "https://phantauth.net/client/magic.toolbox/policy",
  "software_id": "igG6Jgx7mfzPdjhBvHvqRQ",
  "software_version": "3.8.0",
  "tos_uri": "https://phantauth.net/client/magic.toolbox/tos"
}
```

<h3 id="create-a-client-selfie-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» @id|body|string|false|URL of the Client's JSON representation.|
|» client_id|body|string|true|OAuth 2.0 client identifier string.|
|» client_name|body|string|false|Human-readable string name of the client to be presented to the end-user during authorization.|
|» client_secret|body|string|false|OAuth 2.0 client secret string. |
|» client_uri|body|string|false|URL string of a web page providing information about the client.|
|» contacts|body|[object]|false|Array of strings representing ways to contact people responsible for this client, typically email addresses.|
|» grant_types|body|[object]|false|Array of OAuth 2.0 grant type strings that the client can use at the token endpoint.|
|» jwks|body|[object]|false|Client's JSON Web Key Set [RFC7517] document value, which contains the client's public keys.  The value of this field MUST be a JSON object containing a valid JWK Set.|
|» jwks_uri|body|string|false|URL string referencing the client's JSON Web Key (JWK) Set [RFC7517] document, which contains the client's public keys.|
|» logo_email|body|string|false|An email address used to generate a gravatar.com logo_uri.|
|» logo_uri|body|string|false|URL string that references a logo for the client.|
|» policy_uri|body|string|false|URL string that points to a human-readable privacy policy document that describes how the deployment organization collects, uses, retains, and discloses personal data.|
|» redirect_uris|body|[object]|false|Array of redirection URI strings for use in redirect-based flows such as the authorization code and implicit flows.|
|» response_types|body|[object]|false|Array of the OAuth 2.0 response type strings that the client can use at the authorization endpoint.|
|» scope|body|string|false|String containing a space-separated list of scope values (as described in Section 3.3 of OAuth 2.0 [RFC6749]) that the client can use when requesting access tokens.|
|» software_id|body|string|false|A unique identifier string (e.g., a Universally Unique Identifier (UUID)) assigned by the client developer or software publisher used by registration endpoints to identify the client software to be dynamically registered.|
|» software_version|body|string|false|A version identifier string for the client software identified by software_id.|
|» token_endpoint_auth_method|body|string|false|String indicator of the requested authentication method for the token endpoint.|
|» tos_uri|body|string|false|URL string that points to a human-readable terms of service document for the client that describes a contractual relationship between the end-user and the client that the end-user accepts when authorizing the client.|

> Example responses

> 200 Response

```text
eyJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0..HQLixaDFwfYXZ2Hu.p4zIoe54Cg3W1hQR2yIXbWMg5fC9X66si7jhz7IuB2-_2m8VuYMP6V3-e3sFsPfZsHlxpdtuSZ5eYphb5qnN-tHEEhnu2OBQDLH6FVmofpSdXVsastRiN7BcESH6-3FaJmsS-gs-C-RFn9YmlE9OdCt2CFwca5584SmSwd5lqC87ljgjKn1afPKTPqG8esxNsj3h_1qkjdzArCo94B-0Gq_dLN3vNImCW0Y9rV4ThviZQh1rFCwD1-hotmsVRwZcGIxGmQd6KtqS9MtSimdFB29QtPm64htB8OPiUZSUeD5MhYty2UyYsru-coyd4Uye59jj8LQWQOi6K5mO46sM6rOOKpVYBDMRyfKZHtw0SEjLKJYFadtnZ4kAAe7faZB8prY50FG-BtVnsWVQRbpbIeuih-iGk-X-5kQ3MEbXcBLkBIEwjVEKT7s9zjLV1NzWNeQHadzMxAa_jMRZi5bpcUxHT5GctLVVRP5_iCQX0lrh7dDkV5oNmxVj0JT7f0Fada709a9uAiVzcQa3maBWx8u7moxMhHT-CeTGXFiGRkKC3q-tXzRItaAFFhYDv38Efj23sTBwjjyK3ldWyhwVXOenzmQP9aesj8lgz0jtpzcjkW_ckRz_POM_fTF-y6M_bHb1eloCXaGem8mfTWBqWydUUWEsH6hmSI5pkmTS2k_9TQ.fu0lDi24J2c1a33NTNwU7g

```

<h3 id="create-a-client-selfie-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get a Client

> Code samples

```bash
curl https://example.com/client/string \
  -H 'Accept: application/json'
```

`GET /client/{client_id}`

Use this endpoint to generate a random client. The client is generated in a deterministic way, on the bases of the client ID given as a path parameter.
In the case of identical client IDs, the endpoint will generate the same client object. The properties of the generated client object are randomly generated on the basis of the client ID.
In lack of a client ID, all calls generate a different client object to the randomly generated client ID.

By providing an email address as the `client_id` parameter, you can customize the client logo by the use of the gravatar associated with the email address.

If the `client_id` parameter contains minimum one dot (`.`) or space (` `) character, the client_name is produced from the parameter, rather than being generated.`

The result is always a client object. If you want to generate multiple clients in one single step, you can do it by the use of *Fleet* generation.
The members of a fleet are clients randomly generated from the fleet name.

<h3 id="get-a-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|client_id|path|string|true|A client ID or email.|

> Example responses

> 200 Response

```json
{
  "@id": "https://phantauth.net/client/magic.toolbox",
  "client_id": "magic.toolbox",
  "client_name": "Magic Toolbox",
  "client_secret": "O68dVlLk",
  "client_uri": "https://phantauth.net/client/magic.toolbox/profile",
  "logo_email": "magic.toolbox.OUUWE4A@mailinator.com",
  "logo_uri": "https://www.gravatar.com/avatar/23a9c0277d8e4062b01f1097037f0d5b?s=256&d=https%3A%2F%2Favatars.phantauth.net%2Ficon%2F9b68RVeE.png",
  "policy_uri": "https://phantauth.net/client/magic.toolbox/policy",
  "software_id": "igG6Jgx7mfzPdjhBvHvqRQ",
  "software_version": "3.8.0",
  "tos_uri": "https://phantauth.net/client/magic.toolbox/tos"
}
```

<h3 id="get-a-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-a-client-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@id|string|false|none|URL of the Client's JSON representation.|
|client_id|string|true|none|OAuth 2.0 client identifier string.|
|client_name|string|false|none|Human-readable string name of the client to be presented to the end-user during authorization.|
|client_secret|string|false|none|OAuth 2.0 client secret string. |
|client_uri|string|false|none|URL string of a web page providing information about the client.|
|contacts|[object]|false|none|Array of strings representing ways to contact people responsible for this client, typically email addresses.|
|grant_types|[object]|false|none|Array of OAuth 2.0 grant type strings that the client can use at the token endpoint.|
|jwks|[object]|false|none|Client's JSON Web Key Set [RFC7517] document value, which contains the client's public keys.  The value of this field MUST be a JSON object containing a valid JWK Set.|
|jwks_uri|string|false|none|URL string referencing the client's JSON Web Key (JWK) Set [RFC7517] document, which contains the client's public keys.|
|logo_email|string|false|none|An email address used to generate a gravatar.com logo_uri.|
|logo_uri|string|false|none|URL string that references a logo for the client.|
|policy_uri|string|false|none|URL string that points to a human-readable privacy policy document that describes how the deployment organization collects, uses, retains, and discloses personal data.|
|redirect_uris|[object]|false|none|Array of redirection URI strings for use in redirect-based flows such as the authorization code and implicit flows.|
|response_types|[object]|false|none|Array of the OAuth 2.0 response type strings that the client can use at the authorization endpoint.|
|scope|string|false|none|String containing a space-separated list of scope values (as described in Section 3.3 of OAuth 2.0 [RFC6749]) that the client can use when requesting access tokens.|
|software_id|string|false|none|A unique identifier string (e.g., a Universally Unique Identifier (UUID)) assigned by the client developer or software publisher used by registration endpoints to identify the client software to be dynamically registered.|
|software_version|string|false|none|A version identifier string for the client software identified by software_id.|
|token_endpoint_auth_method|string|false|none|String indicator of the requested authentication method for the token endpoint.|
|tos_uri|string|false|none|URL string that points to a human-readable terms of service document for the client that describes a contractual relationship between the end-user and the client that the end-user accepts when authorizing the client.|

<aside class="success">
This operation does not require authentication
</aside>

## Get a Client Token

> Code samples

```bash
curl 'https://example.com/client/string/token/'\''registration'\'''
```

`GET /client/{client_id}/token/{kind}`

It is used to generate a OpenID Connect token as a path parameter to a client of a given client ID.

It is primarily used for testing purposes, when, for example, the token from the standard authentication flow is not available to the test code.

<h3 id="get-a-client-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|client_id|path|string|true|A client ID or email.|
|kind|path|string|true|Token type|

#### Enumerated Values

|Parameter|Value|
|---|---|
|kind|'registration'|
|kind|'selfie'|
|kind|'plain'|

> Example responses

> 200 Response

```text
eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYWdpYy50b29sYm94IiwidG9rZW5fa2luZCI6IlJFR0lTVFJBVElPTiIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwgYWRkcmVzcyBwaG9uZSBpbmRpZWF1dGggdWlkIiwiZXhwIjoxNTg4NDI4NDM4LCJpYXQiOjE1NTY4OTI0Mzh9.TGilMHuWIDYiBAjzXyMuBvMiRlnKFLDX7FJJW_flldg

```

<h3 id="get-a-client-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="phantauth-team">Team</h1>

Team is a group of users under a given name. For the purposes of identification and visualisation, the team object has its own properties (e.g. logo), the most important of which is the `members`, which contains the user objects of the team.

## Get a Team

> Code samples

```bash
curl https://example.com/team/string \
  -H 'Accept: application/json'
```

`GET /team/{teamname}`

Use this endpoint to generate a random group of users. The team is generated in a deterministic way, on the basis of the team name given as the path parameter.
In the case of identical team names, the endpoint will generate the same team object. The properties of the generated team object are randomly generated on the basis of the team name.
In lack of a team name, all calls generate a different team object to the randomly generated team name.

<h3 id="get-a-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|teamname|path|string|true|<br>The identifier or email address of the team; it is integrated in the `sub` property and is the basis of the other generated properties.<br>|

> Example responses

> 200 Response

```json
{
  "@id": "https://phantauth.net/team/dream.team",
  "logo": "https://www.gravatar.com/avatar/0d6fbd4eb21c269933ca5bba043ab4aa?s=256&d=identicon",
  "logo_email": "dream.team.HIECLNQ@mailinator.com",
  "members": [
    {
      "@id": "https://phantauth.net/user/ariana.riley.hudson",
      "address": {
        "country": "USA",
        "formatted": "62 Highland Place APT 63\nMiami 30927",
        "locality": "Miami",
        "postal_code": "30927",
        "street_address": "62 Highland Place APT 63"
      },
      "birthdate": "1938-11-19",
      "email": "ariana.riley.hudson.VJ2ABXA@mailinator.com",
      "email_verified": false,
      "family_name": "Hudson",
      "gender": "female",
      "given_name": "Ariana",
      "locale": "en_US",
      "me": "https://phantauth.net/~ariana.riley.hudson",
      "middle_name": "Riley",
      "name": "Ariana Hudson",
      "nickname": "Ariana",
      "password": "cuTCy0IZ",
      "phone_number": "552-769-0026",
      "phone_number_verified": true,
      "picture": "https://www.gravatar.com/avatar/8b0562dd7dd8ff1d8d872fcf58972d6d?s=256&d=https://avatars.phantauth.net/ai/female/BeXDnkey.jpg",
      "preferred_username": "ahudson",
      "profile": "https://phantauth.net/user/ariana.riley.hudson/profile",
      "sub": "ariana.riley.hudson",
      "uid": "1sKcrGacQtY",
      "updated_at": 1542585600,
      "webmail": "https://www.mailinator.com/v3/?zone=public&query=ariana.riley.hudson.VJ2ABXA",
      "website": "https://phantauth.net",
      "zoneinfo": "America/Chicago"
    },
    {
      "@id": "https://phantauth.net/user/madeline.randall",
      "address": {
        "country": "UnitedKingdom",
        "formatted": "140 Atkins Avenue APT 126\nSan Francisco 48571",
        "locality": "San Francisco",
        "postal_code": "48571",
        "street_address": "140 Atkins Avenue APT 126"
      },
      "birthdate": "1966-08-28",
      "email": "madeline.randall.P545AFI@mailinator.com",
      "email_verified": true,
      "family_name": "Randall",
      "gender": "female",
      "given_name": "Madeline",
      "locale": "en_GB",
      "me": "https://phantauth.net/~madeline.randall",
      "name": "Madeline Randall",
      "nickname": "Madeline",
      "password": "xi89SZWX",
      "phone_number": "747-136-9890",
      "phone_number_verified": true,
      "picture": "https://www.gravatar.com/avatar/eb3bac3d1654c56efbb93645770e5a60?s=256&d=https://avatars.phantauth.net/ai/female/pmbkErez.jpg",
      "preferred_username": "mrandall",
      "profile": "https://phantauth.net/user/madeline.randall/profile",
      "sub": "madeline.randall",
      "uid": "5xjXrNaK8eU",
      "updated_at": 1535414400,
      "webmail": "https://www.mailinator.com/v3/?zone=public&query=madeline.randall.P545AFI",
      "website": "https://phantauth.net",
      "zoneinfo": "Europe/London"
    },
    {
      "@id": "https://phantauth.net/user/alexa.brooklyn.rollins",
      "address": {
        "country": "Canada",
        "formatted": "104 Herzi Street APT 39\nWashington 22412",
        "locality": "Washington",
        "postal_code": "22412",
        "street_address": "104 Herzi Street APT 39"
      },
      "birthdate": "1920-02-29",
      "email": "alexa.brooklyn.rollins.WHW7KNY@mailinator.com",
      "email_verified": false,
      "family_name": "Rollins",
      "gender": "female",
      "given_name": "Alexa",
      "locale": "fr_CA",
      "me": "https://phantauth.net/~alexa.brooklyn.rollins",
      "middle_name": "Brooklyn",
      "name": "Alexa Rollins",
      "nickname": "Alexa",
      "password": "8h3tEVhM",
      "phone_number": "335-295-2273",
      "phone_number_verified": true,
      "picture": "https://www.gravatar.com/avatar/404e4bf6b700625b670d84336fa38d52?s=256&d=https://avatars.phantauth.net/ai/female/pmbkyvez.jpg",
      "preferred_username": "arollins",
      "profile": "https://phantauth.net/user/alexa.brooklyn.rollins/profile",
      "sub": "alexa.brooklyn.rollins",
      "uid": "ji7mQ76imjY",
      "updated_at": 1519776000,
      "webmail": "https://www.mailinator.com/v3/?zone=public&query=alexa.brooklyn.rollins.WHW7KNY",
      "website": "https://phantauth.net",
      "zoneinfo": "Canada/Central"
    },
    {
      "@id": "https://phantauth.net/user/cameron.barnes",
      "address": {
        "country": "Australia",
        "formatted": "139 Aster Court\nNew York 20333",
        "locality": "New York",
        "postal_code": "20333",
        "street_address": "139 Aster Court"
      },
      "birthdate": "1960-07-17",
      "email": "cameron.barnes.UW4JUXI@mailinator.com",
      "email_verified": false,
      "family_name": "Barnes",
      "gender": "male",
      "given_name": "Cameron",
      "locale": "en_AU",
      "me": "https://phantauth.net/~cameron.barnes",
      "name": "Cameron Barnes",
      "nickname": "Cameron",
      "password": "OL4y4cpb",
      "phone_number": "449-465-925",
      "phone_number_verified": true,
      "picture": "https://www.gravatar.com/avatar/6cc04628ef7fb47eaa9a262b56b61e7d?s=256&d=https://avatars.phantauth.net/ai/male/wdL96rej.jpg",
      "preferred_username": "cbarnes",
      "profile": "https://phantauth.net/user/cameron.barnes/profile",
      "sub": "cameron.barnes",
      "uid": "N4DJJyHMhUg",
      "updated_at": 1531785600,
      "webmail": "https://www.mailinator.com/v3/?zone=public&query=cameron.barnes.UW4JUXI",
      "website": "https://phantauth.net",
      "zoneinfo": "Australia/Sydney"
    },
    {
      "@id": "https://phantauth.net/user/kayden.abbott",
      "address": {
        "country": "Canada",
        "formatted": "110 Aster Court APT 299\nMiami 16321",
        "locality": "Miami",
        "postal_code": "16321",
        "street_address": "110 Aster Court APT 299"
      },
      "birthdate": "2016-02-28",
      "email": "kayden.abbott.6VBRMHI@mailinator.com",
      "email_verified": true,
      "family_name": "Abbott",
      "gender": "unknown",
      "given_name": "Kayden",
      "locale": "fr_CA",
      "me": "https://phantauth.net/~kayden.abbott",
      "name": "Kayden Abbott",
      "nickname": "Kayden",
      "password": "RUEJG2Vj",
      "phone_number": "988-622-6683",
      "phone_number_verified": false,
      "picture": "https://www.gravatar.com/avatar/0e72d45f96c44213f80f10b593ccba13?s=256&d=https://avatars.phantauth.net/ai/unknown/X7axLPay.jpg",
      "preferred_username": "kabbott",
      "profile": "https://phantauth.net/user/kayden.abbott/profile",
      "sub": "kayden.abbott",
      "uid": "VHNoCwU/+LE",
      "updated_at": 1519776000,
      "webmail": "https://www.mailinator.com/v3/?zone=public&query=kayden.abbott.6VBRMHI",
      "website": "https://phantauth.net",
      "zoneinfo": "Canada/Central"
    }
  ],
  "name": "Dream Team",
  "profile": "https://phantauth.net/team/dream.team/profile",
  "sub": "dream.team"
}
```

<h3 id="get-a-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-a-team-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@id|string|false|none|URL of the Teams's JSON representation.|
|logo|string|false|none|The URL of the team logo, which can be customized by the gravatar associated with the email address in the `logo_email` property.|
|logo_email|string|false|none|The email address of the team, either generated or provided in the `sub` property. The team logo can be customized by the use of the gravater associated with this email address.|
|members|[object]|false|none|The user objects that generate a team member.|
|name|string|false|none|The displayed team name.|
|profile|string|false|none|The URL of the Team profile.|
|sub|string|true|none|The name or email address of a given team. The team properties and team members are generated from this name. If you provide an email address, you can customize the team logo by the use of the gravatar associated with the email address.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="phantauth-fleet">Fleet</h1>

Fleet is a group of clients under a given a name. For the purposes of identification and visualisation, the Fleet object has its own properties (e.g. logo), the most important of which is the `members`, which contains the user objects of the fleet.

## Get a Fleet

> Code samples

```bash
curl https://example.com/fleet/string \
  -H 'Accept: application/json'
```

`GET /fleet/{fleetname}`

Use this endpoint to generate a random group of clients. The feleet is generated in a deterministic way, on the basis of a fleet name given as a path parameter.
In the case of identical fleet names, the endpoint will generate the same fleet object. The properties of the generated fleet object are randomly generated on the basis of the fleet name.
In lack of a fleet name, all calls generate a different fleet object to the randomly generated fleet name.

<h3 id="get-a-fleet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fleetname|path|string|true|<br>The identifier or email address of the fleet; it is integrated in the `sub` property and is the basis of the other generated properties.<br>|

> Example responses

> 200 Response

```json
{
  "@id": "https://phantauth.net/fleet/blue.fleet",
  "logo": "https://www.gravatar.com/avatar/60757eca81bdd6768421ed3b669b651d?s=256&d=identicon",
  "logo_email": "blue.fleet.6JBLL7Y@mailinator.com",
  "members": [
    {
      "@id": "https://phantauth.net/client/zamit%7Eueyonuvxhz0",
      "client_id": "zamit~ueyonuvxhz0",
      "client_name": "Zamit",
      "client_secret": "o0Ie0Ph4",
      "client_uri": "https://phantauth.net/client/zamit%7Eueyonuvxhz0/profile",
      "logo_email": "zamit.6UTF3FA@mailinator.com",
      "logo_uri": "https://www.gravatar.com/avatar/849f9934a6aec97935cb40eadbf06d60?s=256&d=https%3A%2F%2Favatars.phantauth.net%2Ficon%2Fpnelv7bK.png",
      "policy_uri": "https://phantauth.net/client/zamit%7Eueyonuvxhz0/policy",
      "software_id": "tzpm4afosVpE65jyw55ZLA",
      "software_version": "8.0.8",
      "tos_uri": "https://phantauth.net/client/zamit%7Eueyonuvxhz0/tos"
    },
    {
      "@id": "https://phantauth.net/client/otcom%7Ekzwnwi3dcjc",
      "client_id": "otcom~kzwnwi3dcjc",
      "client_name": "Otcom",
      "client_secret": "W0UFeZTo",
      "client_uri": "https://phantauth.net/client/otcom%7Ekzwnwi3dcjc/profile",
      "logo_email": "otcom.DVC7D4Y@mailinator.com",
      "logo_uri": "https://www.gravatar.com/avatar/102ea74126cec525eded6e2511ee4960?s=256&d=https%3A%2F%2Favatars.phantauth.net%2Ficon%2FQBeXrkby.png",
      "policy_uri": "https://phantauth.net/client/otcom%7Ekzwnwi3dcjc/policy",
      "software_id": "RqrMOl5ZNZeEoYNkCdg1AA",
      "software_version": "8.0.9",
      "tos_uri": "https://phantauth.net/client/otcom%7Ekzwnwi3dcjc/tos"
    },
    {
      "@id": "https://phantauth.net/client/greenlam%7Eo3sbolv1qjc",
      "client_id": "greenlam~o3sbolv1qjc",
      "client_name": "Greenlam",
      "client_secret": "jeXBkxJ4",
      "client_uri": "https://phantauth.net/client/greenlam%7Eo3sbolv1qjc/profile",
      "logo_email": "greenlam.2XD4DYQ@mailinator.com",
      "logo_uri": "https://www.gravatar.com/avatar/0d304aa152b8edd056d1e7862364dec2?s=256&d=https%3A%2F%2Favatars.phantauth.net%2Ficon%2FLDdwLJe1.png",
      "policy_uri": "https://phantauth.net/client/greenlam%7Eo3sbolv1qjc/policy",
      "software_id": "0dQ9wd0fb1v2RPd1de-m6A",
      "software_version": "6.4.2",
      "tos_uri": "https://phantauth.net/client/greenlam%7Eo3sbolv1qjc/tos"
    },
    {
      "@id": "https://phantauth.net/client/holdlamis%7E1jvzg8zw3ie",
      "client_id": "holdlamis~1jvzg8zw3ie",
      "client_name": "Holdlamis",
      "client_secret": "N0dEVTVQ",
      "client_uri": "https://phantauth.net/client/holdlamis%7E1jvzg8zw3ie/profile",
      "logo_email": "holdlamis.4AP3BGI@mailinator.com",
      "logo_uri": "https://www.gravatar.com/avatar/14d66b1256d484d2ab268cbe58694bb9?s=256&d=https%3A%2F%2Favatars.phantauth.net%2Ficon%2FRb4x6nbB.png",
      "policy_uri": "https://phantauth.net/client/holdlamis%7E1jvzg8zw3ie/policy",
      "software_id": "ReiInzn-af_1XjFhBwl2Kw",
      "software_version": "9.0.5",
      "tos_uri": "https://phantauth.net/client/holdlamis%7E1jvzg8zw3ie/tos"
    },
    {
      "@id": "https://phantauth.net/client/asoka%7Evu9rsfdq16m",
      "client_id": "asoka~vu9rsfdq16m",
      "client_name": "Asoka",
      "client_secret": "92Qz6rSU",
      "client_uri": "https://phantauth.net/client/asoka%7Evu9rsfdq16m/profile",
      "logo_email": "asoka.K2ZLAYQ@mailinator.com",
      "logo_uri": "https://www.gravatar.com/avatar/7acc74527505772449417aed086c3b24?s=256&d=https%3A%2F%2Favatars.phantauth.net%2Ficon%2F6dBB3xd7.png",
      "policy_uri": "https://phantauth.net/client/asoka%7Evu9rsfdq16m/policy",
      "software_id": "s0GXgtm6HqPy0nayXt8g4w",
      "software_version": "3.9.6",
      "tos_uri": "https://phantauth.net/client/asoka%7Evu9rsfdq16m/tos"
    }
  ],
  "name": "Blue Fleet",
  "profile": "https://phantauth.net/fleet/blue.fleet/profile",
  "sub": "blue.fleet"
}
```

<h3 id="get-a-fleet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-a-fleet-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@id|string|false|none|URL of the Fleet's JSON representation.|
|logo|string|false|none|The URL of the fleet logo, which can be customized by the gravatar associated with the email address in the `logo_email` property.|
|logo_email|string|false|none|The email address of the fleet, either generated or provided in the `sub` property. The fleet logo can be customized by the use of the gravater associated with this email address.|
|members|[object]|false|none|The client objects included in a fleet.|
|name|string|false|none|The displayed fleet name.|
|profile|string|false|none|The URL of the Fleet profile.|
|sub|string|true|none|The name or email address of a given fleet. The fleet properties and fleet members are generated from this name. If provide an email address, you can customize the fleet logo by the use of the gravatar associated with the email address.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="phantauth-tenant">Tenant</h1>

To customize the application, you need to use one or more so-called tenants. A tenant can be consiered as an independent PhantAuth service. A tenant has its own random user generator endpoints and OpenID Connect endpoints.

The tenants can be organised into so-called domains. Practically, a domain is a DNS zone, which contains the settings of the given tenant(s). The tenants as well as the domain can be configured by the use of DNS TXT records.

The URL of the tenant issuer is in `https://phantauth.net/_{tenant}` format, where `tenant` is the fully qualified DNS name associated with the tenant. When using a PhantAuth official tenant, you can omit `phantauth.net` from the end of the name. When using a community-created, shared tenant, `phantauth.cf` can be omitted from the end of the name.
When using a default tenant (default.phantauth.net), the issuer URL is identical with the PhantAuth base URL, that is, [https://phantauth.net](https://phantauth.net).

The resource URL is relative to the URL of the tenant issuer URL, that is, the endpoint address of the random user generator for the tenant named `faker` is: [https://phantauth.net/_faker/user](https://phantauth.net/_faker/user).

## Get a Tenant

> Code samples

```bash
curl https://example.com/tenant/string \
  -H 'Accept: application/json'
```

`GET /tenant/{tenantname}`

This endpoint allows you to get the data of a given PhantAuth tenant. To use the PhantAuth services, you don't need this endpoint.
It is, therefore, mainly used for debug/diagnostic purposes in tenant customization.

Tenantname is the name of the full DNS domain of the tenant you get.
In the case of an official and shared tenant (phantauth.net and phantauth.cf DNS domains), the DNS domain can be omitted (e.g. *default* or *faker*).

<h3 id="get-a-tenant-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tenantname|path|string|true|The tenant ID integrated in the `sub` property.|

> Example responses

> 200 Response

```json
{
  "@id": "https://phantauth.net/_faker/tenant/faker",
  "domain": false,
  "factories": [
    "team",
    "user"
  ],
  "factory": "https://faker.phantauth.net/api{/kind,name}",
  "flags": "small",
  "issuer": "https://phantauth.net/_faker",
  "logo": "https://phantauth-faker.now.sh/faker-logo.svg",
  "name": "PhantAuth Faker",
  "sub": "faker",
  "subtenant": false,
  "template": "https://default.phantauth.net{/resource}",
  "theme": "https://stackpath.bootstrapcdn.com/bootswatch/4.2.1/united/bootstrap.min.css",
  "website": "https://phantauth.net/_faker"
}
```

<h3 id="get-a-tenant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-a-tenant-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@id|string|false|none|The URL of the tenant's JSON representation.|
|about|string|false|none|A detailed description of the tenant. If it takes the value of an URL, the description is downloaded from the given URL, otherwise the value it takes is the description itself. Markdown formatting can be used in the description.|
|attribution|string|false|none|The attribution of the external data source or random user generator. Its value can have markdown formatting, that is, the external source can contain highlights and links.|
|depot|string|false|none|It defines the place of the CSV file containing the resource data in [RFC 6570 - URI temaplate](https://tools.ietf.org/html/rfc6570) format.<br>The URI template receives the type of the object to be generated (user, team) in the `kind` parameter.<br><br>The first line of the CSV file contains the resource property names, the following lines, on the other hand, contain the relevant data.<br>In the case of nested properties, a '.' character separates the elements of the property name (e.g. address.formatted).|
|depots|[object]|false|none|A list of resource types supported by the external CSV set in `depot`.|
|domain|boolean|false|none|True in the case of a domain tenant collecting several tenants, otherwise false.|
|factories|[object]|false|none|A list of resource types supported by the external generator set in `factory`.|
|factory|string|false|none|The address of the custom random resource generator (user, team) in [RFC 6570 - URI temaplate](https://tools.ietf.org/html/rfc6570) format.<br>The URI template receives the type of the object to be generated (user, team) in the `kind` parameter, and the identifier of the object to be generated in the `name` parameter.|
|favicon|string|false|none|The URL of the tenant favicon. The image from this address appears as a shortcut icon in the browser when a user visits the tenant's webpages.|
|issuer|string|true|none|The URL of the tenant OpenID Connect issuer. This value allows you to get, for example, the [OpenID Provider Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).<br>As a webpage, it contains information on the use if the given tenant.|
|logo|string|false|none|The URL of the tenant logo. The image from this address appears in the address bar of the tenant's webpages and the pages that contain the list of available tenants.|
|name|string|false|none|The displayed tenant name. In lack of such name, the DNS name of the tenant is displayed in the address bar of the tenant's webpages.|
|script|string|false|none|The URL of a custom JavaScript file can be automatically inserted in the login.html, consent.html, és test.html pages.|
|sheet|string|false|none|It is used to give the identifyer of a public Google Sheet document. The first line of the table contains the user property names, the following lines, on the other hand, contain the relevant data.<br>In the case of nested properties, a '.' character separates the elements of the property name (e.g. address.formatted).|
|sub|string|true|none|The fully qualified DNS domain name of the tenant. In the case of official and shared tenants (phantauth.net and phantauth.cf DNS domain), the DNS domain can be omitted (e.g. *default* or *faker*).|
|subtenant|boolean|false|none|True in the case of a tenant referred to in a domain tenant, otherwise false.|
|summary|string|false|none|A one-line description, the watchword of the tenant. It appears on the tenant's startup page and the pages that contain the list of available tenants. It takes the valua of an unformatted text.|
|template|string|false|none|It defines the place of the templates of the HTML pages of the tenant in [RFC 6570 - URI temaplate](https://tools.ietf.org/html/rfc6570) format.<br>The URI template receives the page name in a `resource` parameter. By default, it takes the following value: `https://default.phantauth.net{/resource}`.|
|theme|string|false|none|The URL of the CSS style sheet used for the tenant's webpages.<br>The default webpage templates were created by the use of the Bootstrap library, therefore, the Bootstrap CSS URL has to be provided when such a webpage is used.|
|userinfo|string|false|none|none|
|website|string|false|none|The website address associated with the tenant. If a tenant doesn't have a website, its value is identical with that of the `issuer` property.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="phantauth-domain">Domain</h1>

A domain object contains several tenants; it can be considered a group of tenants. The PhantAuth official tenants are collected in a domain identified by `phantauth.net`.
In the `phantauth.cf` domain, you can share and register your own tenants as well.

A domain can also be used as a tenant, that is, it has an issuer endpoint and some resource endpoints. The issuer URL of the domain is in `https://phantauth.net/_{domain}` format, where `domain` is the fully qualified DNS name associated with the domain, that is, for example [https://phantauth.net/_phantauth.net](https://phantauth.net/_phantauth.net) or
[https://phantauth.net/_phantauth.cf](https://phantauth.net/_phantauth.cf). When using a default domain (phantauth.net), the domain name, that is, the URL of the default domain issuer, [https://phantauth.net/_](https://phantauth.net/_) can be omitted.

## Get a Domain

> Code samples

```bash
curl https://example.com/domain/string \
  -H 'Accept: application/json'
```

`GET /domain/{domainname}`

This endpoint allows you to get the data of a given PhantAuth domain. To use the PhantAuth services, you don't need this endpoint.
It is, therefore, mainly used for debug/diagnostic purposes in tenant customization.

Domainname is the fully qualified DNS name of the domain you get (e.g. *phantauth.net* or *phantauth.cf*).

<h3 id="get-a-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domainname|path|string|true|The domain ID integrated in the `sub` property.|

> Example responses

> 200 Response

```json
{
  "@id": "https://phantauth.net/domain/phantauth.net",
  "logo": "https://www.phantauth.net/logo/phantauth-logo.svg",
  "members": [
    {
      "@id": "https://phantauth.net/tenant/default",
      "domain": false,
      "favicon": "https://default.phantauth.net/logo/phantauth-favicon.png",
      "issuer": "https://phantauth.net",
      "logo": "https://default.phantauth.net/logo/phantauth-logo-light.svg",
      "name": "PhantAuth Default",
      "sub": "default",
      "subtenant": false,
      "template": "https://default.phantauth.net{/resource}",
      "website": "https://phantauth.net"
    },
    {
      "@id": "https://phantauth.net/_gods/tenant/gods",
      "attribution": "God pictures come from  [Theoi Project](https://www.theoi.com/), a site exploring Greek mythology and the gods in classical literature and art.",
      "depot": "https://docs.google.com/spreadsheets/d/1Xa4mRcLWroJr2vUDhrJXGBcobYmpS8fNZxFpXw-M9DY/gviz/tq?tqx=out:csv",
      "depots": [
        "user",
        "team"
      ],
      "domain": false,
      "favicon": "https://default.phantauth.net/logo/phantauth-favicon.png",
      "flags": "medium",
      "issuer": "https://phantauth.net/_gods",
      "logo": "https://cdn.staticaly.com/favicons/www.theoi.com",
      "name": "Greek Gods",
      "sub": "gods",
      "subtenant": false,
      "template": "https://default.phantauth.net{/resource}",
      "theme": "https://stackpath.bootstrapcdn.com/bootswatch/4.2.1/sandstone/bootstrap.min.css",
      "website": "https://phantauth.net/_gods"
    },
    {
      "@id": "https://phantauth.net/_casual/tenant/casual",
      "domain": false,
      "factories": [
        "user"
      ],
      "factory": "https://wt-51217f7b3eee6aead0123eeafe3b83e8-0.sandbox.auth0-extend.com/user{?name}",
      "favicon": "https://default.phantauth.net/logo/phantauth-favicon.png",
      "issuer": "https://phantauth.net/_casual",
      "logo": "https://www.phantauth.net/logo/phantauth-logo-gray.svg",
      "name": "PhantAuth Casual",
      "sub": "casual",
      "subtenant": false,
      "template": "https://default.phantauth.net{/resource}",
      "theme": "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",
      "website": "https://phantauth.net/_casual"
    },
    {
      "@id": "https://phantauth.net/_faker/tenant/faker",
      "domain": false,
      "factories": [
        "team",
        "user"
      ],
      "factory": "https://faker.phantauth.net/api{/kind,name}",
      "favicon": "https://default.phantauth.net/logo/phantauth-favicon.png",
      "flags": "small",
      "issuer": "https://phantauth.net/_faker",
      "logo": "https://phantauth-faker.now.sh/faker-logo.svg",
      "name": "PhantAuth Faker",
      "sub": "faker",
      "subtenant": false,
      "template": "https://default.phantauth.net{/resource}",
      "theme": "https://stackpath.bootstrapcdn.com/bootswatch/4.2.1/united/bootstrap.min.css",
      "website": "https://phantauth.net/_faker"
    },
    {
      "@id": "https://phantauth.net/_uinames/tenant/uinames",
      "attribution": "User data generated using [uinames.com API](https://uinames.com).",
      "domain": false,
      "favicon": "https://default.phantauth.net/logo/phantauth-favicon.png",
      "flags": "small",
      "issuer": "https://phantauth.net/_uinames",
      "logo": "https://uinames.com/assets/img/ios-precomposed.png",
      "name": "uinames",
      "script": "https://www.phantauth.net/selfie/uinames.js",
      "sub": "uinames",
      "subtenant": false,
      "template": "https://default.phantauth.net{/resource}",
      "theme": "https://stackpath.bootstrapcdn.com/bootswatch/4.2.1/minty/bootstrap.min.css",
      "website": "https://phantauth.net/_uinames"
    },
    {
      "@id": "https://phantauth.net/_chance/tenant/chance",
      "domain": false,
      "factories": [
        "user",
        "team"
      ],
      "factory": "https://chance.phantauth.net/api{/kind,name}",
      "favicon": "https://default.phantauth.net/logo/phantauth-favicon.png",
      "flags": "small",
      "issuer": "https://phantauth.net/_chance",
      "logo": "https://phantauth-chance.now.sh/chance-logo.png",
      "name": "PhantAuth Chance",
      "sub": "chance",
      "subtenant": false,
      "template": "https://default.phantauth.net{/resource}",
      "theme": "https://stackpath.bootstrapcdn.com/bootswatch/4.2.1/united/bootstrap.min.css",
      "website": "https://phantauth.net/_chance"
    },
    {
      "@id": "https://phantauth.net/_sketch/tenant/sketch",
      "domain": false,
      "favicon": "https://default.phantauth.net/logo/phantauth-favicon.png",
      "flags": "sketch;small",
      "issuer": "https://phantauth.net/_sketch",
      "logo": "https://www.phantauth.net/logo/phantauth-sketch.svg",
      "name": "PhantAuth Sketch",
      "sub": "sketch",
      "subtenant": false,
      "template": "https://default.phantauth.net{/resource}",
      "theme": "https://stackpath.bootstrapcdn.com/bootswatch/4.2.1/sketchy/bootstrap.min.css",
      "website": "https://phantauth.net/_sketch"
    },
    {
      "@id": "https://phantauth.net/_randomuser/tenant/randomuser",
      "attribution": "User data generated using [RANDOM USER GENERATOR](https://randomuser.me/).",
      "domain": false,
      "favicon": "https://default.phantauth.net/logo/phantauth-favicon.png",
      "flags": "small",
      "issuer": "https://phantauth.net/_randomuser",
      "logo": "https://cdn.staticaly.com/favicons/randomuser.me",
      "name": "RANDOM USER",
      "script": "https://www.phantauth.net/selfie/randomuser.js",
      "sub": "randomuser",
      "subtenant": false,
      "template": "https://default.phantauth.net{/resource}",
      "theme": "https://stackpath.bootstrapcdn.com/bootswatch/4.2.1/sandstone/bootstrap.min.css",
      "website": "https://phantauth.net/_randomuser"
    },
    {
      "@id": "https://phantauth.net/_mockaroo/tenant/mockaroo",
      "attribution": "User data generated using [Mockaroo's Mock APIs](https://mockaroo.com/mock_apis).",
      "domain": false,
      "favicon": "https://default.phantauth.net/logo/phantauth-favicon.png",
      "flags": "small",
      "issuer": "https://phantauth.net/_mockaroo",
      "logo": "https://www.phantauth.net/selfie/kongaroo.svg",
      "name": "Mockaroo",
      "script": "https://www.phantauth.net/selfie/mockaroo.js",
      "sub": "mockaroo",
      "subtenant": false,
      "template": "https://default.phantauth.net{/resource}",
      "theme": "https://stackpath.bootstrapcdn.com/bootswatch/4.2.1/minty/bootstrap.min.css",
      "website": "https://phantauth.net/_mockaroo"
    },
    {
      "@id": "https://mockuser.ga/tenant/mockuser.ga",
      "domain": false,
      "favicon": "https://www.phantauth.net/brand/mockuser/mockuser-favicon.png",
      "issuer": "https://mockuser.ga",
      "logo": "https://www.phantauth.net/brand/mockuser/mockuser-logo-light.svg",
      "name": "Mock User",
      "sub": "mockuser.ga",
      "subtenant": false,
      "template": "https://default.phantauth.net{/resource}",
      "theme": "https://www.phantauth.net/brand/mockuser/bootstrap-mockuser.min.css",
      "website": "https://www.mockuser.ga"
    }
  ],
  "name": "PhantAuth Domain",
  "profile": "https://phantauth.net/domain/phantauth.net/profile",
  "sub": "phantauth.net"
}
```

<h3 id="get-a-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-a-domain-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@id|string|false|none|The URL of the domain's JSON representation.|
|logo|string|false|none|The URL of the domain logo. The image from this address is displayed on the webpage of the domain.|
|members|[object]|false|none|The tenants included in a domain.|
|name|string|false|none|The displayed domain name.|
|profile|string|false|none|The URL of the domain's webpage.|
|sub|string|false|none|The fully qualified DNS name of the domain (e.g. phantauth.net).|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Address">Address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_Address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "country": "string",
  "formatted": "string",
  "locality": "string",
  "postal_code": "string",
  "region": "string",
  "street_address": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|string|false|none|Country name component.|
|formatted|string|false|none|Full mailing address, formatted for display or use on a mailing label. This field MAY contain multiple lines, separated by newlines. Newlines can be represented either as a carriage return/line feed pair or as a single line feed character.|
|locality|string|false|none|City or locality component.|
|postal_code|string|false|none|Zip code or postal code component.|
|region|string|false|none|State, province, prefecture, or region component.|
|street_address|string|false|none|Full street address component, which MAY include house number, street name, post office box, and multi-line extended street address information. This field MAY contain multiple lines, separated by newlines. Newlines can be represented either as a carriage return/line feed pair or as a single line feed character.|

<h2 id="tocS_Client">Client</h2>
<!-- backwards compatibility -->
<a id="schemaclient"></a>
<a id="schema_Client"></a>
<a id="tocSclient"></a>
<a id="tocsclient"></a>

```json
{
  "@id": "string",
  "client_id": "string",
  "client_name": "string",
  "client_secret": "string",
  "client_uri": "string",
  "contacts": [
    null
  ],
  "grant_types": [
    null
  ],
  "jwks": [
    null
  ],
  "jwks_uri": "string",
  "logo_email": "string",
  "logo_uri": "string",
  "policy_uri": "string",
  "redirect_uris": [
    null
  ],
  "response_types": [
    null
  ],
  "scope": "string",
  "software_id": "string",
  "software_version": "string",
  "token_endpoint_auth_method": "string",
  "tos_uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@id|string|false|none|URL of the Client's JSON representation.|
|client_id|string|true|none|OAuth 2.0 client identifier string.|
|client_name|string|false|none|Human-readable string name of the client to be presented to the end-user during authorization.|
|client_secret|string|false|none|OAuth 2.0 client secret string. |
|client_uri|string|false|none|URL string of a web page providing information about the client.|
|contacts|[object]|false|none|Array of strings representing ways to contact people responsible for this client, typically email addresses.|
|grant_types|[object]|false|none|Array of OAuth 2.0 grant type strings that the client can use at the token endpoint.|
|jwks|[object]|false|none|Client's JSON Web Key Set [RFC7517] document value, which contains the client's public keys.  The value of this field MUST be a JSON object containing a valid JWK Set.|
|jwks_uri|string|false|none|URL string referencing the client's JSON Web Key (JWK) Set [RFC7517] document, which contains the client's public keys.|
|logo_email|string|false|none|An email address used to generate a gravatar.com logo_uri.|
|logo_uri|string|false|none|URL string that references a logo for the client.|
|policy_uri|string|false|none|URL string that points to a human-readable privacy policy document that describes how the deployment organization collects, uses, retains, and discloses personal data.|
|redirect_uris|[object]|false|none|Array of redirection URI strings for use in redirect-based flows such as the authorization code and implicit flows.|
|response_types|[object]|false|none|Array of the OAuth 2.0 response type strings that the client can use at the authorization endpoint.|
|scope|string|false|none|String containing a space-separated list of scope values (as described in Section 3.3 of OAuth 2.0 [RFC6749]) that the client can use when requesting access tokens.|
|software_id|string|false|none|A unique identifier string (e.g., a Universally Unique Identifier (UUID)) assigned by the client developer or software publisher used by registration endpoints to identify the client software to be dynamically registered.|
|software_version|string|false|none|A version identifier string for the client software identified by software_id.|
|token_endpoint_auth_method|string|false|none|String indicator of the requested authentication method for the token endpoint.|
|tos_uri|string|false|none|URL string that points to a human-readable terms of service document for the client that describes a contractual relationship between the end-user and the client that the end-user accepts when authorizing the client.|

<h2 id="tocS_Domain">Domain</h2>
<!-- backwards compatibility -->
<a id="schemadomain"></a>
<a id="schema_Domain"></a>
<a id="tocSdomain"></a>
<a id="tocsdomain"></a>

```json
{
  "@id": "string",
  "logo": "string",
  "members": [
    null
  ],
  "name": "string",
  "profile": "string",
  "sub": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@id|string|false|none|The URL of the domain's JSON representation.|
|logo|string|false|none|The URL of the domain logo. The image from this address is displayed on the webpage of the domain.|
|members|[object]|false|none|The tenants included in a domain.|
|name|string|false|none|The displayed domain name.|
|profile|string|false|none|The URL of the domain's webpage.|
|sub|string|false|none|The fully qualified DNS name of the domain (e.g. phantauth.net).|

<h2 id="tocS_Fleet">Fleet</h2>
<!-- backwards compatibility -->
<a id="schemafleet"></a>
<a id="schema_Fleet"></a>
<a id="tocSfleet"></a>
<a id="tocsfleet"></a>

```json
{
  "@id": "string",
  "logo": "string",
  "logo_email": "string",
  "members": [
    null
  ],
  "name": "string",
  "profile": "string",
  "sub": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@id|string|false|none|URL of the Fleet's JSON representation.|
|logo|string|false|none|The URL of the fleet logo, which can be customized by the gravatar associated with the email address in the `logo_email` property.|
|logo_email|string|false|none|The email address of the fleet, either generated or provided in the `sub` property. The fleet logo can be customized by the use of the gravater associated with this email address.|
|members|[object]|false|none|The client objects included in a fleet.|
|name|string|false|none|The displayed fleet name.|
|profile|string|false|none|The URL of the Fleet profile.|
|sub|string|true|none|The name or email address of a given fleet. The fleet properties and fleet members are generated from this name. If provide an email address, you can customize the fleet logo by the use of the gravatar associated with the email address.|

<h2 id="tocS_Team">Team</h2>
<!-- backwards compatibility -->
<a id="schemateam"></a>
<a id="schema_Team"></a>
<a id="tocSteam"></a>
<a id="tocsteam"></a>

```json
{
  "@id": "string",
  "logo": "string",
  "logo_email": "string",
  "members": [
    null
  ],
  "name": "string",
  "profile": "string",
  "sub": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@id|string|false|none|URL of the Teams's JSON representation.|
|logo|string|false|none|The URL of the team logo, which can be customized by the gravatar associated with the email address in the `logo_email` property.|
|logo_email|string|false|none|The email address of the team, either generated or provided in the `sub` property. The team logo can be customized by the use of the gravater associated with this email address.|
|members|[object]|false|none|The user objects that generate a team member.|
|name|string|false|none|The displayed team name.|
|profile|string|false|none|The URL of the Team profile.|
|sub|string|true|none|The name or email address of a given team. The team properties and team members are generated from this name. If you provide an email address, you can customize the team logo by the use of the gravatar associated with the email address.|

<h2 id="tocS_Tenant">Tenant</h2>
<!-- backwards compatibility -->
<a id="schematenant"></a>
<a id="schema_Tenant"></a>
<a id="tocStenant"></a>
<a id="tocstenant"></a>

```json
{
  "@id": "string",
  "about": "string",
  "attribution": "string",
  "depot": "string",
  "depots": [
    null
  ],
  "domain": true,
  "factories": [
    null
  ],
  "factory": "string",
  "favicon": "string",
  "issuer": "string",
  "logo": "string",
  "name": "string",
  "script": "string",
  "sheet": "string",
  "sub": "string",
  "subtenant": true,
  "summary": "string",
  "template": "string",
  "theme": "string",
  "userinfo": "string",
  "website": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@id|string|false|none|The URL of the tenant's JSON representation.|
|about|string|false|none|A detailed description of the tenant. If it takes the value of an URL, the description is downloaded from the given URL, otherwise the value it takes is the description itself. Markdown formatting can be used in the description.|
|attribution|string|false|none|The attribution of the external data source or random user generator. Its value can have markdown formatting, that is, the external source can contain highlights and links.|
|depot|string|false|none|It defines the place of the CSV file containing the resource data in [RFC 6570 - URI temaplate](https://tools.ietf.org/html/rfc6570) format.<br>The URI template receives the type of the object to be generated (user, team) in the `kind` parameter.<br><br>The first line of the CSV file contains the resource property names, the following lines, on the other hand, contain the relevant data.<br>In the case of nested properties, a '.' character separates the elements of the property name (e.g. address.formatted).|
|depots|[object]|false|none|A list of resource types supported by the external CSV set in `depot`.|
|domain|boolean|false|none|True in the case of a domain tenant collecting several tenants, otherwise false.|
|factories|[object]|false|none|A list of resource types supported by the external generator set in `factory`.|
|factory|string|false|none|The address of the custom random resource generator (user, team) in [RFC 6570 - URI temaplate](https://tools.ietf.org/html/rfc6570) format.<br>The URI template receives the type of the object to be generated (user, team) in the `kind` parameter, and the identifier of the object to be generated in the `name` parameter.|
|favicon|string|false|none|The URL of the tenant favicon. The image from this address appears as a shortcut icon in the browser when a user visits the tenant's webpages.|
|issuer|string|true|none|The URL of the tenant OpenID Connect issuer. This value allows you to get, for example, the [OpenID Provider Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).<br>As a webpage, it contains information on the use if the given tenant.|
|logo|string|false|none|The URL of the tenant logo. The image from this address appears in the address bar of the tenant's webpages and the pages that contain the list of available tenants.|
|name|string|false|none|The displayed tenant name. In lack of such name, the DNS name of the tenant is displayed in the address bar of the tenant's webpages.|
|script|string|false|none|The URL of a custom JavaScript file can be automatically inserted in the login.html, consent.html, és test.html pages.|
|sheet|string|false|none|It is used to give the identifyer of a public Google Sheet document. The first line of the table contains the user property names, the following lines, on the other hand, contain the relevant data.<br>In the case of nested properties, a '.' character separates the elements of the property name (e.g. address.formatted).|
|sub|string|true|none|The fully qualified DNS domain name of the tenant. In the case of official and shared tenants (phantauth.net and phantauth.cf DNS domain), the DNS domain can be omitted (e.g. *default* or *faker*).|
|subtenant|boolean|false|none|True in the case of a tenant referred to in a domain tenant, otherwise false.|
|summary|string|false|none|A one-line description, the watchword of the tenant. It appears on the tenant's startup page and the pages that contain the list of available tenants. It takes the valua of an unformatted text.|
|template|string|false|none|It defines the place of the templates of the HTML pages of the tenant in [RFC 6570 - URI temaplate](https://tools.ietf.org/html/rfc6570) format.<br>The URI template receives the page name in a `resource` parameter. By default, it takes the following value: `https://default.phantauth.net{/resource}`.|
|theme|string|false|none|The URL of the CSS style sheet used for the tenant's webpages.<br>The default webpage templates were created by the use of the Bootstrap library, therefore, the Bootstrap CSS URL has to be provided when such a webpage is used.|
|userinfo|string|false|none|none|
|website|string|false|none|The website address associated with the tenant. If a tenant doesn't have a website, its value is identical with that of the `issuer` property.|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "@id": "string",
  "address": {
    "country": "string",
    "formatted": "string",
    "locality": "string",
    "postal_code": "string",
    "region": "string",
    "street_address": "string"
  },
  "birthdate": "string",
  "email": "string",
  "email_verified": true,
  "family_name": "string",
  "gender": "string",
  "given_name": "string",
  "locale": "string",
  "me": "string",
  "middle_name": "string",
  "name": "string",
  "nickname": "string",
  "password": "string",
  "phone_number": "string",
  "phone_number_verified": true,
  "picture": "string",
  "preferred_username": "string",
  "profile": "string",
  "sub": "string",
  "uid": "string",
  "updated_at": 0,
  "webmail": "string",
  "website": "string",
  "zoneinfo": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|@id|string|false|none|The URL of the user's JSON representation.|
|address|[Address](#schemaaddress)|false|none|none|
|birthdate|string|false|none|The user's birthday, represented as an ISO 8601:2004 [ISO8601‑2004] YYYY-MM-DD format.|
|email|string|false|none|The user's preferred email address.|
|email_verified|boolean|false|none|True if the user's e-mail address has been verified; otherwise false.|
|family_name|string|false|none|The user's surname(s) or last name(s).|
|gender|string|false|none|The enduser's gender. Possible values are: female, male, and unknown.|
|given_name|string|false|none|The user's given name(s) or first name(s).|
|locale|string|false|none|The user's locale, represented as a BCP47 [RFC5646] language tag. It is an ISO 639-1 Alpha-2 language code in lowercase and an ISO 3166-1 Alpha-2 country code in uppercase letters, separated by a dash.|
|me|string|false|none|The simplified URL of the user's profile page.|
|middle_name|string|false|none|The user's middle name(s).|
|name|string|false|none|The user's full name in displayable form, including all name parts, possibly including titles and suffixes, ordered according to the enduser's locale and preferences.|
|nickname|string|false|none|A casual name of the User that may or may not be the same as the given_name.|
|password|string|false|none|The user's generated password.|
|phone_number|string|false|none|The user's preferred telephone number.|
|phone_number_verified|boolean|false|none|True if the enduser's phone number has been verified; otherwise false.|
|picture|string|false|none|The URL of the user's profile picture.|
|preferred_username|string|false|none|A shorthand name by which the user wishes to be referred to at the Relying Party.|
|profile|string|false|none|The URL of the user's profile page.|
|sub|string|true|none|Subject - User identifier at the issuer.|
|uid|string|false|none|The user's simplified, shortened identifier at the Issuer.|
|updated_at|number|false|none|The time when the User's information was last updated. Its value is a JSON number representing the number of seconds from 1970-01-01T0:0:0Z as measured in UTC until the date/time.|
|webmail|string|false|none|The URL of user's mailbox in a webmail application.|
|website|string|false|none|The URL of the user's webpage or blog.|
|zoneinfo|string|false|none|A string from the zoneinfo time zone database representing the user's time zone. For example, Europe/Paris or America/Los_Angeles.|
