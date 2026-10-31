<h1 id="account-and-transaction-api-specification---uk">Account and Transaction API Specification - UK v3.1.5</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

## Functionality at a glance

The NBG "UK OPB - Account and Transaction v3.1.5" API follows the [UK Open Banking Specification
    v3.1.5](https://openbankinguk.github.io/read-write-api-site3/v3.1.5/profiles/account-and-transaction-api-profile.html)

This Account and Transaction API Specification describes the flows and payloads for retrieving a list of accounts and their transactions.

The API endpoints described here allow a AISP to:  

* Create the Consent with the appropriate permissions in order to be able to access the API Endpoints

* Retrieve the list of accounts

* Retrieve an account's details

* Retrieve an account's balances

* Retrieve an account's transactions

* Retrieve an account's beneficiaries

* Retrieve an account's standing orders

* Retrieve an account's party

* Retrieve an account's scheduled payments

* Retrieve an account's statements



## Quick Getting Started


1. **Login/Register** to the NBG Technology HUB

2. Go to **"APPS"**

3. Select your Organization and go to step 4. If you want to create a new Organization click **\"CREATE AN ORGANIZATION\"** and follow the steps below:
	1. Enter the title of your Organization
	2. Enter a short description of your Organization (optional)
	3. Click **"SUBMIT"**

4. Select the Organization of choice and click **"ADD AN APPLICATION"** 
	  1. Fill in the forms (title and short description)
	  2. Check **\"Authorization Code\" and \"Client Credentials\"** 
	  3. Enter the **OAuth Redirect and Post Logout URIs** (these are the URIs that we will redirect the user upon logging in and logging out respectively)
		  
		  You can use the following redirect URL to easily test the API through the portal: *https://developer.nbg.gr/oauth2/redoc-callback*
	  4. Click **"SUBMIT"**
	  5. Store the APPs **"Client ID"** and **"Client Secret"**
5. Go to **"API PRODUCTS"** and select the **ACCOUNT INFORMATION - UK OPEN BANKING API**

6. Click **\"START USING THIS API\"**, choose your app and click
**"SUBSCRIBE"**

7. Get an Access Token using the Access Token Flow and the API scopes provided in the Authentication and Authorization (OAuth2) section below

8. Create a Sandbox

9. Play with the API 


### Sandbox Flow

The Sandbox Flow matches the Production Flow. The difference lies into the Data used. Instead of live
data, the Sandbox flow uses mocked data.


### Production Flow  

The Production Flow is described in the [UK Open Banking v3.1.5
Specification](https://openbankinguk.github.io/read-write-api-site3/v3.1.5/profiles/account-and-transaction-api-profile.html)

More details about the implementation specifics followed, please visit section **UK OPB Implementation
Specifics**


## Authentication and Authorization (OAuth2)

This API version uses the OAuth2 protocol for authentication and authorization, which means that a
Bearer (access token) should be acquired. An access token can be retrieved using the client_id and
client_secret of the APP that you created and subscribed in this API, and your own credentials
(username, password) that you use to sign in the NBG Technology HUB. The scopes are defined below:

**Authorization Endpoint:** 

	  https://my.nbg.gr/identity/connect/authorize


**Token Endpoint:** 

	  https://my.nbg.gr/identity/connect/token

### Authorization Code ###

**Sandbox Scopes:** 

	  sandbox-uk-account-info-api-v1 offline_access


**Production Scopes:** 

	  accounts offline_access

### Client Credentials ###

**Sandbox Scopes:** 

	  sandbox-uk-account-info-api-v1


**Production Scopes:** 

	  accounts


See more [here](https://developer.nbg.gr/oauth-document)

## QWAC Certificates

TPPs are required to present a QWAC certificate during API consumption. The API checks that this certificate has been provided and is valid. In sandbox mode the certificate validations are optional. To validate your certificate in sandbox implementation, please send us your QWAC certificate at developer@nbg.gr and set the HTTP Header **\"x-sandbox-qwac-certificate-check\"** with the value **\"true\"** in your requests. 

## SMS Challenge (One Time Password)

In order to successfully authorize an Accounts Access you will need to provide the SMS OTP (One Time Password) in the corresponding Accounts Consent UI Screen.

By default the SMS OTP will be sent to the mobile number declared upon singing up in the NBG Technology HUB. 



## Create your Sandbox

Create a new Sandbox application by invoking the POST /sandbox. This call will generate a new Sandbox
with a unique sandbox-id.


__Important!__ Before proceeding save the sandbox id you just created.


When you create a sandbox, users and sandbox specific data are generated as sample data.


## Start Testing

Once you have your sandbox-id, you can start invoking the rest of the operations by providing the
mandatory http header **sandbox-id**  and the http headers described below.


## Important notes


**Request headers**


The following HTTP header parameters are required for every call:


1. Authorization. The Auth2 Token

2. sandbox-id. Your Sandbox ID


**Consent**


In order to be able to effectively start using the Endpoints the appropriate Consent needs to be
created and set to the 'Authorised' status. 


In order to create the Consent you need to at least set the required **permissions** and the **Risk**
sections. 


Optionally you may set the 


1. ExpirationDateTime. When the Consent expires 


2. TransactionFromDateTime. Start Date to retrieve the transactions 


3. TransactionToDateTime. End Date to retrieve the transactions 

**Not Implemented Endpoints**

The following endpoints are not implemented in the API

1. GET /balances
2. GET /transactions
3. GET /beneficiaries
4. GET /accounts/\{AccountId\}/direct-debits
5. GET /direct-debits
6. GET /standing-orders
7. GET /accounts/\{AccountId\}/product
8. GET /products
9. GET /accounts/\{AccountId\}/offers
10. GET /offers
11. GET /scheduled-payments
12. GET /statements


## Error Codes

The error codes and their description can be found
[here](https://openbankinguk.github.io/read-write-api-site3/v3.1.5/profiles/read-write-data-api-profile.html#error-response-structure)


# UK OPB Implementation Specifics 

Below you may find more specific information &amp; limitations regarding the implementation followed in the Production API.


## Token Endpoint Client Authentication

At this point the supported __Client Authentication__ method is "__Client Secret Basic__" - usage of "Client ID" &amp; "Client Secret".


## Consent Authorization

For a PSU to Authorize a Consent, they need to be redirected to the appropriate Consent UI.

For this redirection to take place the TPP needs to follow the Authorization Endpoint by amending the generated "Consent ID", like this: https://my.nbg.gr/identity/connect/authorize?consent_id={{consent_id}}&amp;client_id={{client_id}}&amp;scope={{scope}}&amp;redirect_uri={{redirect_uri}}&amp;response_type=code

Once the PSU is redirected to the Consent Authorization Screen, they need to enter their IBank (Production) or Developer Portal (Sandbox) Credentials and either Authorize or Reject the Consent.

At this point the Consent is binded with the PSU.


## Debtor Account
Currently, only the "UK.OBIE.IBAN" scheme is supported.



# Feedback and Questions

We would love to hear your feedback and answer your questions. Send us at
[developer@nbg.gr](developer@nbg.gr)


Check out our [Sandbox Postman
Collection](https://github.com/NBG-Developer-Portal/Account-Information-UK-Open-Banking)!


________________________________________

Created by [**NBG**](https://www.nbg.gr/).

 # Entities 

 Below, the main entities are documented.
 &lt;a name=OBExternalPermissions1Code&gt;&lt;/a&gt; 
## OBExternalPermissions1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| Specifies the Open Banking account access data types. This is a list of the data clusters being consented by the PSU, and requested for authorisation with the ASPSP.| &lt;ul style="padding-left: 0"&gt;&lt;li&gt;ReadAccountsBasic&lt;/li&gt;&lt;li&gt;ReadAccountsDetail&lt;/li&gt;&lt;li&gt;ReadBalances&lt;/li&gt;&lt;li&gt;ReadBeneficiariesBasic&lt;/li&gt;&lt;li&gt;ReadBeneficiariesDetail&lt;/li&gt;&lt;li&gt;ReadDirectDebits&lt;/li&gt;&lt;li&gt;ReadOffers&lt;/li&gt;&lt;li&gt;ReadPAN&lt;/li&gt;&lt;li&gt;ReadParty&lt;/li&gt;&lt;li&gt;ReadPartyPSU&lt;/li&gt;&lt;li&gt;ReadProducts&lt;/li&gt;&lt;li&gt;ReadScheduledPaymentsBasic&lt;/li&gt;&lt;li&gt;ReadScheduledPaymentsDetail&lt;/li&gt;&lt;li&gt;ReadStandingOrdersBasic&lt;/li&gt;&lt;li&gt;ReadStandingOrdersDetail&lt;/li&gt;&lt;li&gt;ReadStatementsBasic&lt;/li&gt;&lt;li&gt;ReadStatementsDetail&lt;/li&gt;&lt;li&gt;ReadTransactionsBasic&lt;/li&gt;&lt;li&gt;ReadTransactionsCredits&lt;/li&gt;&lt;li&gt;ReadTransactionsDebits&lt;/li&gt;&lt;li&gt;ReadTransactionsDetail&lt;/li&gt;&lt;/ul&gt;|

 &lt;a name=OBReadData1&gt;&lt;/a&gt; 
## OBReadData1 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Permissions| Specifies the Open Banking account access data types. This is a list of the data clusters being consented by the PSU, and requested for authorisation with the ASPSP.| array[[OBExternalPermissions1Code](#OBExternalPermissions1Code)]|
| ExpirationDateTime| Specified date and time the permissions will expire. If this is not populated, the permissions will be open ended. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00| string|
| TransactionFromDateTime| Specified start date and time for the transaction query period. If this is not populated, the start date will be open ended, and data will be returned from the earliest available transaction. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00| string|
| TransactionToDateTime| Specified end date and time for the transaction query period. If this is not populated, the end date will be open ended, and data will be returned to the latest available transaction. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00| string|

 &lt;a name=OBRisk2&gt;&lt;/a&gt; 
## OBRisk2 
The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Account Info. 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|

 &lt;a name=OBReadConsent1&gt;&lt;/a&gt; 
## OBReadConsent1 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Data | Entity | &lt;details&gt;&lt;summary&gt;[OBReadData1](#OBReadData1)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Permissions [array[[OBExternalPermissions1Code](#OBExternalPermissions1Code)]]&lt;/li&gt; &lt;li&gt;ExpirationDateTime [string]&lt;/li&gt; &lt;li&gt;TransactionFromDateTime [string]&lt;/li&gt; &lt;li&gt;TransactionToDateTime [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 
| Risk | Entity | &lt;details&gt;&lt;summary&gt;[OBRisk2](#OBRisk2)&lt;/summary&gt;&lt;ul&gt;&lt;/ul&gt;&lt;/details&gt; | 

 &lt;a name=ErrorCode&gt;&lt;/a&gt; 
## ErrorCode 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| This is Data Type gives a low level textual error code to help categorise an error response. The applicable HTTP response code is also given.| &lt;ul style="padding-left: 0"&gt;&lt;li&gt;UK.OBIE.Field.Expected&lt;/li&gt;&lt;li&gt;UK.OBIE.Field.Invalid&lt;/li&gt;&lt;li&gt;UK.OBIE.Field.InvalidDate&lt;/li&gt;&lt;li&gt;UK.OBIE.Field.Missing&lt;/li&gt;&lt;li&gt;UK.OBIE.Field.Unexpected&lt;/li&gt;&lt;li&gt;UK.OBIE.Header.Invalid&lt;/li&gt;&lt;li&gt;UK.OBIE.Header.Missing&lt;/li&gt;&lt;li&gt;UK.OBIE.Resource.ConsentMismatch&lt;/li&gt;&lt;li&gt;UK.OBIE.Resource.InvalidConsentStatus&lt;/li&gt;&lt;li&gt;UK.OBIE.Resource.InvalidFormat&lt;/li&gt;&lt;li&gt;UK.OBIE.Resource.NotFound&lt;/li&gt;&lt;li&gt;UK.OBIE.Rules.AfterCutOffDateTime&lt;/li&gt;&lt;li&gt;UK.OBIE.Rules.DuplicateReference&lt;/li&gt;&lt;li&gt;UK.OBIE.Signature.Invalid&lt;/li&gt;&lt;li&gt;UK.OBIE.Signature.InvalidClaim&lt;/li&gt;&lt;li&gt;UK.OBIE.Signature.MissingClaim&lt;/li&gt;&lt;li&gt;UK.OBIE.Signature.Malformed&lt;/li&gt;&lt;li&gt;UK.OBIE.Signature.Missing&lt;/li&gt;&lt;li&gt;UK.OBIE.Signature.Unexpected&lt;/li&gt;&lt;li&gt;UK.OBIE.Unsupported.AccountIdentifier&lt;/li&gt;&lt;li&gt;UK.OBIE.Unsupported.AccountSecondaryIdentifier&lt;/li&gt;&lt;li&gt;UK.OBIE.Unsupported.Currency&lt;/li&gt;&lt;li&gt;UK.OBIE.Unsupported.EventType&lt;/li&gt;&lt;li&gt;UK.OBIE.Unsupported.Frequency&lt;/li&gt;&lt;li&gt;UK.OBIE.Unsupported.LocalInstrument&lt;/li&gt;&lt;li&gt;UK.OBIE.Unsupported.Scheme&lt;/li&gt;&lt;li&gt;UK.OBIE.Reauthenticate&lt;/li&gt;&lt;li&gt;UK.OBIE.Rules.ResourceAlreadyExists&lt;/li&gt;&lt;li&gt;UK.OBIE.UnexpectedError&lt;/li&gt;&lt;/ul&gt;|

 &lt;a name=OBError1&gt;&lt;/a&gt; 
## OBError1 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| ErrorCode | Entity | &lt;details&gt;&lt;summary&gt;[ErrorCode](#ErrorCode)&lt;/summary&gt;&lt;ul&gt;&lt;/ul&gt;&lt;/details&gt; | 
| Message| A description of the error that occurred. e.g., 'A mandatory field isn't supplied' or 'RequestedExecutionDateTime must be in future'OBIE doesn't standardise this field| string|
| Path| Recommended but optional reference to the JSON Path of the field with error, e.g., Data.Initiation.InstructedAmount.Currency| string|

 &lt;a name=OBErrorResponse1&gt;&lt;/a&gt; 
## OBErrorResponse1 
An array of detail error codes, and messages, and URLs to documentation to help remediation. 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Code| High level textual error code, to help categorize the errors.| string|
| Id| A unique reference for the error instance, for audit purposes, in case of unknown/unclassified errors.| string|
| Message| Brief Error message, e.g., 'There is something wrong with the request parameters provided'| string|
| Errors| Gets or Sets Errors| array[[OBError1](#OBError1)]|

 &lt;a name=OBExternalRequestStatus1Code&gt;&lt;/a&gt; 
## OBExternalRequestStatus1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| Specifies the status of consent resource in code form.| &lt;ul style="padding-left: 0"&gt;&lt;li&gt;Authorised&lt;/li&gt;&lt;li&gt;AwaitingAuthorisation&lt;/li&gt;&lt;li&gt;Rejected&lt;/li&gt;&lt;li&gt;Revoked&lt;/li&gt;&lt;/ul&gt;|

 &lt;a name=OBReadDataConsentResponse1&gt;&lt;/a&gt; 
## OBReadDataConsentResponse1 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| ConsentId| Unique identification as assigned to identify the account access consent resource.| string|
| CreationDateTime| Date and time at which the resource was created. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00| string|
| Status | Entity | &lt;details&gt;&lt;summary&gt;[OBExternalRequestStatus1Code](#OBExternalRequestStatus1Code)&lt;/summary&gt;&lt;ul&gt;&lt;/ul&gt;&lt;/details&gt; | 
| StatusUpdateDateTime| Date and time at which the resource status was updated. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00| string|
| Permissions| Specifies the Open Banking account access data types. This is a list of the data clusters being consented by the PSU, and requested for authorisation with the ASPSP.| array[[OBExternalPermissions1Code](#OBExternalPermissions1Code)]|
| ExpirationDateTime| Specified date and time the permissions will expire. If this is not populated, the permissions will be open ended. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00| string|
| TransactionFromDateTime| Specified start date and time for the transaction query period. If this is not populated, the start date will be open ended, and data will be returned from the earliest available transaction. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00| string|
| TransactionToDateTime| Specified end date and time for the transaction query period. If this is not populated, the end date will be open ended, and data will be returned to the latest available transaction. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00| string|

 &lt;a name=Links&gt;&lt;/a&gt; 
## Links 
Links relevant to the payload 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Self| -| string|
| First| -| string|
| Prev| -| string|
| Next| -| string|
| Last| -| string|

 &lt;a name=Meta&gt;&lt;/a&gt; 
## Meta 
Meta Data relevant to the payload 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| TotalPages| -| integer|
| FirstAvailableDateTime| All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone.An example is below: 2017-04-05T10:43:07+00:00| string|
| LastAvailableDateTime| All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone.An example is below: 2017-04-05T10:43:07+00:00| string|

 &lt;a name=OBReadConsentResponse1&gt;&lt;/a&gt; 
## OBReadConsentResponse1 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Data | Entity | &lt;details&gt;&lt;summary&gt;[OBReadDataConsentResponse1](#OBReadDataConsentResponse1)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;ConsentId [string]&lt;/li&gt; &lt;li&gt;CreationDateTime [string]&lt;/li&gt; &lt;li&gt;&lt;details&gt;&lt;summary&gt;Status [[OBExternalRequestStatus1Code](#OBExternalRequestStatus1Code)]&lt;/summary&gt;&lt;ul&gt;&lt;/ul&gt;&lt;/details&gt;&lt;/li&gt;&lt;li&gt;StatusUpdateDateTime [string]&lt;/li&gt; &lt;li&gt;Permissions [array[[OBExternalPermissions1Code](#OBExternalPermissions1Code)]]&lt;/li&gt; &lt;li&gt;ExpirationDateTime [string]&lt;/li&gt; &lt;li&gt;TransactionFromDateTime [string]&lt;/li&gt; &lt;li&gt;TransactionToDateTime [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 
| Risk | Entity | &lt;details&gt;&lt;summary&gt;[OBRisk2](#OBRisk2)&lt;/summary&gt;&lt;ul&gt;&lt;/ul&gt;&lt;/details&gt; | 
| Links | Entity | &lt;details&gt;&lt;summary&gt;[Links](#Links)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Self [string]&lt;/li&gt; &lt;li&gt;First [string]&lt;/li&gt; &lt;li&gt;Prev [string]&lt;/li&gt; &lt;li&gt;Next [string]&lt;/li&gt; &lt;li&gt;Last [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 
| Meta | Entity | &lt;details&gt;&lt;summary&gt;[Meta](#Meta)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;TotalPages [integer]&lt;/li&gt; &lt;li&gt;FirstAvailableDateTime [string]&lt;/li&gt; &lt;li&gt;LastAvailableDateTime [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 

 &lt;a name=OBExternalAccountType1Code&gt;&lt;/a&gt; 
## OBExternalAccountType1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| -| &lt;ul style="padding-left: 0"&gt;&lt;li&gt;Business&lt;/li&gt;&lt;li&gt;Personal&lt;/li&gt;&lt;/ul&gt;|

 &lt;a name=OBExternalAccountSubType1Code&gt;&lt;/a&gt; 
## OBExternalAccountSubType1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| -| &lt;ul style="padding-left: 0"&gt;&lt;li&gt;ChargeCard&lt;/li&gt;&lt;li&gt;CreditCard&lt;/li&gt;&lt;li&gt;CurrentAccount&lt;/li&gt;&lt;li&gt;EMoney&lt;/li&gt;&lt;li&gt;Loan&lt;/li&gt;&lt;li&gt;Mortgage&lt;/li&gt;&lt;li&gt;PrePaidCard&lt;/li&gt;&lt;li&gt;Savings&lt;/li&gt;&lt;/ul&gt;|

 &lt;a name=OBCashAccount5&gt;&lt;/a&gt; 
## OBCashAccount5 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| SchemeName| Name of the identification scheme, in a coded form as published in an external list.| string|
| Identification| Identification assigned by an institution to identify an account. This identification is known by the account owner.| string|
| Name| The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels. Note, the account name is not the product name or the nickname of the account.| string|
| SecondaryIdentification| This is secondary identification of the account, as assigned by the account servicing institution. This can be used by building societies to additionally identify accounts with a roll number(in addition to a sort code and account number combination).| string|

 &lt;a name=OBBranchAndFinancialInstitutionIdentification5&gt;&lt;/a&gt; 
## OBBranchAndFinancialInstitutionIdentification5 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| SchemeName| Name of the identification scheme, in a coded form as published in an external list.| string|
| Identification| Unique and unambiguous identification of the servicing institution.| string|

 &lt;a name=OBAccount6&gt;&lt;/a&gt; 
## OBAccount6 
Unambiguous identification of the account to which credit and debit entries are made. 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| AccountId| A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.| string|
| Currency| Identification of the currency in which the account is held.  Usage: Currency should only be used in case one and the same account number covers several currencies and the initiating party needs to identify which currency needs to be used for settlement on the account.| string|
| AccountType | Entity | &lt;details&gt;&lt;summary&gt;[OBExternalAccountType1Code](#OBExternalAccountType1Code)&lt;/summary&gt;&lt;ul&gt;&lt;/ul&gt;&lt;/details&gt; | 
| AccountSubType | Entity | &lt;details&gt;&lt;summary&gt;[OBExternalAccountSubType1Code](#OBExternalAccountSubType1Code)&lt;/summary&gt;&lt;ul&gt;&lt;/ul&gt;&lt;/details&gt; | 
| Description| Specifies the description of the account type.| string|
| Nickname| The nickname of the account, assigned by the account owner in order to provide an additional means of identification of the account.| string|
| OpeningDate| Date on which the account and related basic services are effectively operational for the account owner.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00| string|
| Account| Provides the details to identify an account.| array[[OBCashAccount5](#OBCashAccount5)]|
| Servicer | Entity | &lt;details&gt;&lt;summary&gt;[OBBranchAndFinancialInstitutionIdentification5](#OBBranchAndFinancialInstitutionIdentification5)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;SchemeName [string]&lt;/li&gt; &lt;li&gt;Identification [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 

 &lt;a name=OBReadDataAccount5&gt;&lt;/a&gt; 
## OBReadDataAccount5 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Account| Unambiguous identification of the account to which credit and debit entries are made.| array[[OBAccount6](#OBAccount6)]|

 &lt;a name=OBReadAccount5&gt;&lt;/a&gt; 
## OBReadAccount5 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Data | Entity | &lt;details&gt;&lt;summary&gt;[OBReadDataAccount5](#OBReadDataAccount5)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Account [array[[OBAccount6](#OBAccount6)]]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 
| Links | Entity | &lt;details&gt;&lt;summary&gt;[Links](#Links)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Self [string]&lt;/li&gt; &lt;li&gt;First [string]&lt;/li&gt; &lt;li&gt;Prev [string]&lt;/li&gt; &lt;li&gt;Next [string]&lt;/li&gt; &lt;li&gt;Last [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 
| Meta | Entity | &lt;details&gt;&lt;summary&gt;[Meta](#Meta)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;TotalPages [integer]&lt;/li&gt; &lt;li&gt;FirstAvailableDateTime [string]&lt;/li&gt; &lt;li&gt;LastAvailableDateTime [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 

 &lt;a name=OBCreditDebitCode&gt;&lt;/a&gt; 
## OBCreditDebitCode 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| -| &lt;ul style="padding-left: 0"&gt;&lt;li&gt;Credit&lt;/li&gt;&lt;li&gt;Debit&lt;/li&gt;&lt;/ul&gt;|

 &lt;a name=OBBalanceType1Code&gt;&lt;/a&gt; 
## OBBalanceType1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| -| &lt;ul style="padding-left: 0"&gt;&lt;li&gt;ClosingAvailable&lt;/li&gt;&lt;li&gt;ClosingBooked&lt;/li&gt;&lt;li&gt;ClosingCleared&lt;/li&gt;&lt;li&gt;Expected&lt;/li&gt;&lt;li&gt;ForwardAvailable&lt;/li&gt;&lt;li&gt;Information&lt;/li&gt;&lt;li&gt;InterimAvailable&lt;/li&gt;&lt;li&gt;InterimBooked&lt;/li&gt;&lt;li&gt;InterimCleared&lt;/li&gt;&lt;li&gt;OpeningAvailable&lt;/li&gt;&lt;li&gt;OpeningBooked&lt;/li&gt;&lt;li&gt;OpeningCleared&lt;/li&gt;&lt;li&gt;PreviouslyClosedBooked&lt;/li&gt;&lt;/ul&gt;|

 &lt;a name=OBActiveOrHistoricCurrencyAndAmount&gt;&lt;/a&gt; 
## OBActiveOrHistoricCurrencyAndAmount 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Amount| A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.| string|
| Currency| A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".| string|

 &lt;a name=OBExternalLimitType1Code&gt;&lt;/a&gt; 
## OBExternalLimitType1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| -| &lt;ul style="padding-left: 0"&gt;&lt;li&gt;Available&lt;/li&gt;&lt;li&gt;Credit&lt;/li&gt;&lt;li&gt;Emergency&lt;/li&gt;&lt;li&gt;Pre-Agreed&lt;/li&gt;&lt;li&gt;Temporary&lt;/li&gt;&lt;/ul&gt;|

 &lt;a name=OBCreditLine1&gt;&lt;/a&gt; 
## OBCreditLine1 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Included| Indicates whether or not the credit line is included in the balance of the account. Usage: If not present, credit line is not included in the balance amount of the account.| boolean|
| Type | Entity | &lt;details&gt;&lt;summary&gt;[OBExternalLimitType1Code](#OBExternalLimitType1Code)&lt;/summary&gt;&lt;ul&gt;&lt;/ul&gt;&lt;/details&gt; | 
| Amount | Entity | &lt;details&gt;&lt;summary&gt;[OBActiveOrHistoricCurrencyAndAmount](#OBActiveOrHistoricCurrencyAndAmount)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Amount [string]&lt;/li&gt; &lt;li&gt;Currency [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 

 &lt;a name=OBCashBalance1&gt;&lt;/a&gt; 
## OBCashBalance1 
Set of elements used to define the balance details. 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| AccountId| A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.| string|
| CreditDebitIndicator | Entity | &lt;details&gt;&lt;summary&gt;[OBCreditDebitCode](#OBCreditDebitCode)&lt;/summary&gt;&lt;ul&gt;&lt;/ul&gt;&lt;/details&gt; | 
| Type | Entity | &lt;details&gt;&lt;summary&gt;[OBBalanceType1Code](#OBBalanceType1Code)&lt;/summary&gt;&lt;ul&gt;&lt;/ul&gt;&lt;/details&gt; | 
| DateTime| Indicates the date (and time) of the balance.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00| string|
| Amount | Entity | &lt;details&gt;&lt;summary&gt;[OBActiveOrHistoricCurrencyAndAmount](#OBActiveOrHistoricCurrencyAndAmount)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Amount [string]&lt;/li&gt; &lt;li&gt;Currency [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 
| CreditLine| Set of elements used to provide details on the credit line.| array[[OBCreditLine1](#OBCreditLine1)]|

 &lt;a name=OBReadDataBalance1&gt;&lt;/a&gt; 
## OBReadDataBalance1 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Balance| Set of elements used to define the balance details.| array[[OBCashBalance1](#OBCashBalance1)]|

 &lt;a name=OBReadBalance1&gt;&lt;/a&gt; 
## OBReadBalance1 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Data | Entity | &lt;details&gt;&lt;summary&gt;[OBReadDataBalance1](#OBReadDataBalance1)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Balance [array[[OBCashBalance1](#OBCashBalance1)]]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 
| Links | Entity | &lt;details&gt;&lt;summary&gt;[Links](#Links)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Self [string]&lt;/li&gt; &lt;li&gt;First [string]&lt;/li&gt; &lt;li&gt;Prev [string]&lt;/li&gt; &lt;li&gt;Next [string]&lt;/li&gt; &lt;li&gt;Last [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 
| Meta | Entity | &lt;details&gt;&lt;summary&gt;[Meta](#Meta)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;TotalPages [integer]&lt;/li&gt; &lt;li&gt;FirstAvailableDateTime [string]&lt;/li&gt; &lt;li&gt;LastAvailableDateTime [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 

 &lt;a name=OBBeneficiaryType1Code&gt;&lt;/a&gt; 
## OBBeneficiaryType1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| Specifies the Beneficiary Type.| &lt;ul style="padding-left: 0"&gt;&lt;li&gt;Trusted&lt;/li&gt;&lt;li&gt;Ordinary&lt;/li&gt;&lt;/ul&gt;|

 &lt;a name=OBBeneficiary5&gt;&lt;/a&gt; 
## OBBeneficiary5 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| AccountId| A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.| string|
| BeneficiaryType | Entity | &lt;details&gt;&lt;summary&gt;[OBBeneficiaryType1Code](#OBBeneficiaryType1Code)&lt;/summary&gt;&lt;ul&gt;&lt;/ul&gt;&lt;/details&gt; | 
| CreditorAccount | Entity | &lt;details&gt;&lt;summary&gt;[OBCashAccount5](#OBCashAccount5)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;SchemeName [string]&lt;/li&gt; &lt;li&gt;Identification [string]&lt;/li&gt; &lt;li&gt;Name [string]&lt;/li&gt; &lt;li&gt;SecondaryIdentification [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 

 &lt;a name=OBReadDataBeneficiary5&gt;&lt;/a&gt; 
## OBReadDataBeneficiary5 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Beneficiary| -| array[[OBBeneficiary5](#OBBeneficiary5)]|

 &lt;a name=OBReadBeneficiary5&gt;&lt;/a&gt; 
## OBReadBeneficiary5 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Data | Entity | &lt;details&gt;&lt;summary&gt;[OBReadDataBeneficiary5](#OBReadDataBeneficiary5)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Beneficiary [array[[OBBeneficiary5](#OBBeneficiary5)]]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 
| Links | Entity | &lt;details&gt;&lt;summary&gt;[Links](#Links)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Self [string]&lt;/li&gt; &lt;li&gt;First [string]&lt;/li&gt; &lt;li&gt;Prev [string]&lt;/li&gt; &lt;li&gt;Next [string]&lt;/li&gt; &lt;li&gt;Last [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 
| Meta | Entity | &lt;details&gt;&lt;summary&gt;[Meta](#Meta)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;TotalPages [integer]&lt;/li&gt; &lt;li&gt;FirstAvailableDateTime [string]&lt;/li&gt; &lt;li&gt;LastAvailableDateTime [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 

 &lt;a name=OBParty2&gt;&lt;/a&gt; 
## OBParty2 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| PartyId| A unique and immutable identifier used to identify the customer resource. This identifier has no meaning to the account owner.| string|
| Name| Name by which a party is known and which is usually used to identify that party.| string|

 &lt;a name=OBReadDataParty2&gt;&lt;/a&gt; 
## OBReadDataParty2 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Party | Entity | &lt;details&gt;&lt;summary&gt;[OBParty2](#OBParty2)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;PartyId [string]&lt;/li&gt; &lt;li&gt;Name [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 

 &lt;a name=OBReadParty2&gt;&lt;/a&gt; 
## OBReadParty2 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Data | Entity | &lt;details&gt;&lt;summary&gt;[OBReadDataParty2](#OBReadDataParty2)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;&lt;details&gt;&lt;summary&gt;Party [[OBParty2](#OBParty2)]&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;PartyId [string]&lt;/li&gt; &lt;li&gt;Name [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/details&gt; | 
| Links | Entity | &lt;details&gt;&lt;summary&gt;[Links](#Links)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Self [string]&lt;/li&gt; &lt;li&gt;First [string]&lt;/li&gt; &lt;li&gt;Prev [string]&lt;/li&gt; &lt;li&gt;Next [string]&lt;/li&gt; &lt;li&gt;Last [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 
| Meta | Entity | &lt;details&gt;&lt;summary&gt;[Meta](#Meta)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;TotalPages [integer]&lt;/li&gt; &lt;li&gt;FirstAvailableDateTime [string]&lt;/li&gt; &lt;li&gt;LastAvailableDateTime [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 

 &lt;a name=OBReadDataParty3&gt;&lt;/a&gt; 
## OBReadDataParty3 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Party| -| array[[OBParty2](#OBParty2)]|

 &lt;a name=OBReadParty3&gt;&lt;/a&gt; 
## OBReadParty3 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Data | Entity | &lt;details&gt;&lt;summary&gt;[OBReadDataParty3](#OBReadDataParty3)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Party [array[[OBParty2](#OBParty2)]]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 
| Links | Entity | &lt;details&gt;&lt;summary&gt;[Links](#Links)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Self [string]&lt;/li&gt; &lt;li&gt;First [string]&lt;/li&gt; &lt;li&gt;Prev [string]&lt;/li&gt; &lt;li&gt;Next [string]&lt;/li&gt; &lt;li&gt;Last [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 
| Meta | Entity | &lt;details&gt;&lt;summary&gt;[Meta](#Meta)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;TotalPages [integer]&lt;/li&gt; &lt;li&gt;FirstAvailableDateTime [string]&lt;/li&gt; &lt;li&gt;LastAvailableDateTime [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 

 &lt;a name=SandboxRequest&gt;&lt;/a&gt; 
## SandboxRequest 
Request to create a new sandbox 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| sandboxId| Sandbox Id| string|

 &lt;a name=ErrorResponse&gt;&lt;/a&gt; 
## ErrorResponse 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| errorMessage| -| string|

 &lt;a name=SandboxRetryCacheEntry&gt;&lt;/a&gt; 
## SandboxRetryCacheEntry 
Keeps the number of calls without x-fapi-customer-ip-address header present 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| cacheKey| Cache key| string|
| count| Number of retries ( up to 4 )| integer|
| expirationTimestamp| Expiration timestamp of the entry| string|

 &lt;a name=SandboxBankAccountInfo&gt;&lt;/a&gt; 
## SandboxBankAccountInfo 
General account information 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| currency| Currency (EUR, USD ...)| string|
| iban| Account's IBAN| string|
| accountType| Account's type (Business, Personal)| string|
| accountSubType| Account's sub-type (ChargeCard, CreditCard, CurrentAccount ...)| string|
| description| Account's description| string|
| alias| Account's alias| string|
| openingDate| Account's opening date| string|
| availableBalance| Account's available balance| number|
| ledgerBalance| Account's ledger balance| number|
| overdraftLimit| Account's overdraft limit| number|

 &lt;a name=SandboxParty&gt;&lt;/a&gt; 
## SandboxParty 
Connected party information 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| id| Party id| string|
| name| Name| string|

 &lt;a name=SandboxBeneficiary&gt;&lt;/a&gt; 
## SandboxBeneficiary 
Beneficiary information 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| name| Beneficiary name| string|

 &lt;a name=SandboxStandingOrder&gt;&lt;/a&gt; 
## SandboxStandingOrder 
Standing order information 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| description| Standing order short description| string|
| frequency| Standing order frequency| string|
| firstPaymentDate| Standing order first collection date| string|
| nextPaymentDate| Standing order next collection date| string|
| finalPaymentDate| Standing order final collection date| string|
| lastPaymentDate| Standing order last executed payment date| string|
| status| Standing order status (Active, Inactive)| string|
| amount| Standing order amount| number|

 &lt;a name=SandboxScheduledPayment&gt;&lt;/a&gt; 
## SandboxScheduledPayment 
Scheduled payment information 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| description| Scheduled payment's short description| string|
| executionDate| Scheduled payment's execution date| string|
| amount| Amount| number|
| senderReference| Debtor / Sender reference| string|

 &lt;a name=SandboxStatement&gt;&lt;/a&gt; 
## SandboxStatement 
Statement information 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| number| Statement number| string|
| year| Statement year| integer|
| month| Statement month| integer|

 &lt;a name=SandboxTransaction&gt;&lt;/a&gt; 
## SandboxTransaction 
Transaction information 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| reference| Transaction reference| string|
| amount| Amount| number|
| currency| Currency (EUR, USD ...)| string|
| creditDebit| Credit / Debit indicator| string|
| valueDateTime| Valeur| string|
| bookingDateTime| Booking date time| string|
| description| Description| string|
| accountingBalance| Balance| number|
| relatedAccount| Related account| string|
| relatedName| Related account| string|
| transactionCode| Transaction code| string|

 &lt;a name=SandboxBankAccount&gt;&lt;/a&gt; 
## SandboxBankAccount 
Sandbox bank account 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| info | Entity | &lt;details&gt;&lt;summary&gt;[SandboxBankAccountInfo](#SandboxBankAccountInfo)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;currency [string]&lt;/li&gt; &lt;li&gt;iban [string]&lt;/li&gt; &lt;li&gt;accountType [string]&lt;/li&gt; &lt;li&gt;accountSubType [string]&lt;/li&gt; &lt;li&gt;description [string]&lt;/li&gt; &lt;li&gt;alias [string]&lt;/li&gt; &lt;li&gt;openingDate [string]&lt;/li&gt; &lt;li&gt;availableBalance [number]&lt;/li&gt; &lt;li&gt;ledgerBalance [number]&lt;/li&gt; &lt;li&gt;overdraftLimit [number]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 
| party | Entity | &lt;details&gt;&lt;summary&gt;[SandboxParty](#SandboxParty)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;id [string]&lt;/li&gt; &lt;li&gt;name [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 
| beneficiaries| List of account's beneficiaries| array[[SandboxBeneficiary](#SandboxBeneficiary)]|
| standingOrders| List of account's standing orders| array[[SandboxStandingOrder](#SandboxStandingOrder)]|
| scheduledPayments| List of account's scheduled payments| array[[SandboxScheduledPayment](#SandboxScheduledPayment)]|
| statements| List of account's statements| array[[SandboxStatement](#SandboxStatement)]|
| transactions| List of account's transactions| array[[SandboxTransaction](#SandboxTransaction)]|

 &lt;a name=SandboxCardInfo&gt;&lt;/a&gt; 
## SandboxCardInfo 
Sandbox card information 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| number| Card number| string|
| description| Description| string|
| holderName| Holder name| string|
| expiration| Expiration date (05/2022)| string|
| type| Type| string|
| subType| Sub type| string|
| availableBalance| Available balance| number|
| ledgerBalance| Ledger balance| number|
| creditLimit| Credit limit ( applicable to credit cards )| number|

 &lt;a name=SandboxCard&gt;&lt;/a&gt; 
## SandboxCard 
Sandbox card 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| info | Entity | &lt;details&gt;&lt;summary&gt;[SandboxCardInfo](#SandboxCardInfo)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;number [string]&lt;/li&gt; &lt;li&gt;description [string]&lt;/li&gt; &lt;li&gt;holderName [string]&lt;/li&gt; &lt;li&gt;expiration [string]&lt;/li&gt; &lt;li&gt;type [string]&lt;/li&gt; &lt;li&gt;subType [string]&lt;/li&gt; &lt;li&gt;availableBalance [number]&lt;/li&gt; &lt;li&gt;ledgerBalance [number]&lt;/li&gt; &lt;li&gt;creditLimit [number]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 
| party | Entity | &lt;details&gt;&lt;summary&gt;[SandboxParty](#SandboxParty)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;id [string]&lt;/li&gt; &lt;li&gt;name [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 
| statements| Card statements| array[[SandboxStatement](#SandboxStatement)]|
| transactions| Card transactions| array[[SandboxTransaction](#SandboxTransaction)]|

 &lt;a name=SandboxUser&gt;&lt;/a&gt; 
## SandboxUser 
User data 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| userId| Connected user id| string|
| retryCacheEntries| Retry cache entries| array[[SandboxRetryCacheEntry](#SandboxRetryCacheEntry)]|
| accounts| List of accounts| array[[SandboxBankAccount](#SandboxBankAccount)]|
| cards| List of cards| array[[SandboxCard](#SandboxCard)]|

 &lt;a name=Sandbox&gt;&lt;/a&gt; 
## Sandbox 
Sandbox model 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| sandboxId| Sandbox id| string|
| users| List of users| array[[SandboxUser](#SandboxUser)]|

 &lt;a name=OBExternalScheduleType1Code&gt;&lt;/a&gt; 
## OBExternalScheduleType1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| -| &lt;ul style="padding-left: 0"&gt;&lt;li&gt;Arrival&lt;/li&gt;&lt;li&gt;Execution&lt;/li&gt;&lt;/ul&gt;|

 &lt;a name=OBScheduledPayment3&gt;&lt;/a&gt; 
## OBScheduledPayment3 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| AccountId| A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.| string|
| ScheduledPaymentId| A unique and immutable identifier used to identify the scheduled payment resource. This identifier has no meaning to the account owner.| string|
| ScheduledPaymentDateTime| The date on which the scheduled payment will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone.An example is below: 2017-04-05T10:43:07+00:00| string|
| ScheduledType | Entity | &lt;details&gt;&lt;summary&gt;[OBExternalScheduleType1Code](#OBExternalScheduleType1Code)&lt;/summary&gt;&lt;ul&gt;&lt;/ul&gt;&lt;/details&gt; | 
| Reference| Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction. Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money. If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.| string|
| DebtorReference| A reference value provided by the PSU to the PISP while setting up the scheduled payment.| string|
| InstructedAmount | Entity | &lt;details&gt;&lt;summary&gt;[OBActiveOrHistoricCurrencyAndAmount](#OBActiveOrHistoricCurrencyAndAmount)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Amount [string]&lt;/li&gt; &lt;li&gt;Currency [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 
| CreditorAccount | Entity | &lt;details&gt;&lt;summary&gt;[OBCashAccount5](#OBCashAccount5)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;SchemeName [string]&lt;/li&gt; &lt;li&gt;Identification [string]&lt;/li&gt; &lt;li&gt;Name [string]&lt;/li&gt; &lt;li&gt;SecondaryIdentification [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 

 &lt;a name=OBReadDataScheduledPayment3&gt;&lt;/a&gt; 
## OBReadDataScheduledPayment3 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| ScheduledPayment| -| array[[OBScheduledPayment3](#OBScheduledPayment3)]|

 &lt;a name=OBReadScheduledPayment3&gt;&lt;/a&gt; 
## OBReadScheduledPayment3 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Data | Entity | &lt;details&gt;&lt;summary&gt;[OBReadDataScheduledPayment3](#OBReadDataScheduledPayment3)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;ScheduledPayment [array[[OBScheduledPayment3](#OBScheduledPayment3)]]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 
| Links | Entity | &lt;details&gt;&lt;summary&gt;[Links](#Links)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Self [string]&lt;/li&gt; &lt;li&gt;First [string]&lt;/li&gt; &lt;li&gt;Prev [string]&lt;/li&gt; &lt;li&gt;Next [string]&lt;/li&gt; &lt;li&gt;Last [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 
| Meta | Entity | &lt;details&gt;&lt;summary&gt;[Meta](#Meta)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;TotalPages [integer]&lt;/li&gt; &lt;li&gt;FirstAvailableDateTime [string]&lt;/li&gt; &lt;li&gt;LastAvailableDateTime [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 

 &lt;a name=OBExternalStandingOrderStatus1Code&gt;&lt;/a&gt; 
## OBExternalStandingOrderStatus1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| -| &lt;ul style="padding-left: 0"&gt;&lt;li&gt;Active&lt;/li&gt;&lt;li&gt;Inactive&lt;/li&gt;&lt;/ul&gt;|

 &lt;a name=OBStandingOrder5&gt;&lt;/a&gt; 
## OBStandingOrder5 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| AccountId| A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.| string|
| StandingOrderId| A unique and immutable identifier used to identify the standing order resource. This identifier has no meaning to the account owner.| string|
| Frequency| Individual Definitions: IntrvlMnthDay - An interval specified in months(between 01, 02, 03, 04, 06, 12, 24), specifying the day within the month(01 to 31) Full Regular Expression: ^(IntrvlMnthDay:(0[1,2,3,4,6]|12|24):(0[1-9]|[12] [0-9]|3[01]))$| string|
| Reference| Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction. Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money. If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.| string|
| FirstPaymentDateTime| The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone.An example is below: 2017-04-05T10:43:07+00:00| string|
| NextPaymentDateTime| The date on which the next payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone.An example is below: 2017-04-05T10:43:07+00:00| string|
| LastPaymentDateTime| The date on which the last (most recent) payment for a Standing Order schedule was made.All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone.An example is below: 2017-04-05T10:43:07+00:00| string|
| FinalPaymentDateTime| The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone.An example is below: 2017-04-05T10:43:07+00:00| string|
| StandingOrderStatusCode | Entity | &lt;details&gt;&lt;summary&gt;[OBExternalStandingOrderStatus1Code](#OBExternalStandingOrderStatus1Code)&lt;/summary&gt;&lt;ul&gt;&lt;/ul&gt;&lt;/details&gt; | 
| FirstPaymentAmount | Entity | &lt;details&gt;&lt;summary&gt;[OBActiveOrHistoricCurrencyAndAmount](#OBActiveOrHistoricCurrencyAndAmount)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Amount [string]&lt;/li&gt; &lt;li&gt;Currency [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 
| NextPaymentAmount | Entity | &lt;details&gt;&lt;summary&gt;[OBActiveOrHistoricCurrencyAndAmount](#OBActiveOrHistoricCurrencyAndAmount)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Amount [string]&lt;/li&gt; &lt;li&gt;Currency [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 
| LastPaymentAmount | Entity | &lt;details&gt;&lt;summary&gt;[OBActiveOrHistoricCurrencyAndAmount](#OBActiveOrHistoricCurrencyAndAmount)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Amount [string]&lt;/li&gt; &lt;li&gt;Currency [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 
| FinalPaymentAmount | Entity | &lt;details&gt;&lt;summary&gt;[OBActiveOrHistoricCurrencyAndAmount](#OBActiveOrHistoricCurrencyAndAmount)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Amount [string]&lt;/li&gt; &lt;li&gt;Currency [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 
| CreditorAccount | Entity | &lt;details&gt;&lt;summary&gt;[OBCashAccount5](#OBCashAccount5)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;SchemeName [string]&lt;/li&gt; &lt;li&gt;Identification [string]&lt;/li&gt; &lt;li&gt;Name [string]&lt;/li&gt; &lt;li&gt;SecondaryIdentification [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 

 &lt;a name=OBReadDataStandingOrder5&gt;&lt;/a&gt; 
## OBReadDataStandingOrder5 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| StandingOrder| -| array[[OBStandingOrder5](#OBStandingOrder5)]|

 &lt;a name=OBReadStandingOrder6&gt;&lt;/a&gt; 
## OBReadStandingOrder6 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Data | Entity | &lt;details&gt;&lt;summary&gt;[OBReadDataStandingOrder5](#OBReadDataStandingOrder5)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;StandingOrder [array[[OBStandingOrder5](#OBStandingOrder5)]]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 
| Links | Entity | &lt;details&gt;&lt;summary&gt;[Links](#Links)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Self [string]&lt;/li&gt; &lt;li&gt;First [string]&lt;/li&gt; &lt;li&gt;Prev [string]&lt;/li&gt; &lt;li&gt;Next [string]&lt;/li&gt; &lt;li&gt;Last [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 
| Meta | Entity | &lt;details&gt;&lt;summary&gt;[Meta](#Meta)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;TotalPages [integer]&lt;/li&gt; &lt;li&gt;FirstAvailableDateTime [string]&lt;/li&gt; &lt;li&gt;LastAvailableDateTime [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 

 &lt;a name=OBExternalStatementType1Code&gt;&lt;/a&gt; 
## OBExternalStatementType1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| -| &lt;ul style="padding-left: 0"&gt;&lt;li&gt;AccountClosure&lt;/li&gt;&lt;li&gt;AccountOpening&lt;/li&gt;&lt;li&gt;Annual&lt;/li&gt;&lt;li&gt;Interim&lt;/li&gt;&lt;li&gt;RegularPeriodic&lt;/li&gt;&lt;/ul&gt;|

 &lt;a name=OBStatement2&gt;&lt;/a&gt; 
## OBStatement2 
Provides further details on a statement resource. 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| AccountId| A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.| string|
| StatementId| Unique identifier for the statement resource within an servicing institution. This identifier is both unique and immutable.| string|
| StatementReference| Unique reference for the statement. This reference may be optionally populated if available.| string|
| Type | Entity | &lt;details&gt;&lt;summary&gt;[OBExternalStatementType1Code](#OBExternalStatementType1Code)&lt;/summary&gt;&lt;ul&gt;&lt;/ul&gt;&lt;/details&gt; | 
| StartDateTime| Date and time at which the statement period starts.All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone.An example is below: 2017-04-05T10:43:07+00:00| string|
| EndDateTime| Date and time at which the statement period starts.All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone.An example is below: 2017-04-05T10:43:07+00:00| string|
| CreationDateTime| Date and time at which the statement period starts.All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone.An example is below: 2017-04-05T10:43:07+00:00| string|

 &lt;a name=OBReadDataStatement2&gt;&lt;/a&gt; 
## OBReadDataStatement2 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Statement| Provides further details on a statement resource.| array[[OBStatement2](#OBStatement2)]|

 &lt;a name=OBReadStatement2&gt;&lt;/a&gt; 
## OBReadStatement2 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Data | Entity | &lt;details&gt;&lt;summary&gt;[OBReadDataStatement2](#OBReadDataStatement2)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Statement [array[[OBStatement2](#OBStatement2)]]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 
| Links | Entity | &lt;details&gt;&lt;summary&gt;[Links](#Links)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Self [string]&lt;/li&gt; &lt;li&gt;First [string]&lt;/li&gt; &lt;li&gt;Prev [string]&lt;/li&gt; &lt;li&gt;Next [string]&lt;/li&gt; &lt;li&gt;Last [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 
| Meta | Entity | &lt;details&gt;&lt;summary&gt;[Meta](#Meta)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;TotalPages [integer]&lt;/li&gt; &lt;li&gt;FirstAvailableDateTime [string]&lt;/li&gt; &lt;li&gt;LastAvailableDateTime [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 

 &lt;a name=OBEntryStatus1Code&gt;&lt;/a&gt; 
## OBEntryStatus1Code 
### Attributes 

| Type| Description| Example| Values|
| -----| -----| -----| -----|
| enum| -| &lt;ul style="padding-left: 0"&gt;&lt;li&gt;Booked&lt;/li&gt;&lt;li&gt;Pending&lt;/li&gt;&lt;/ul&gt;|

 &lt;a name=ProprietaryBankTransactionCodeStructure1&gt;&lt;/a&gt; 
## ProprietaryBankTransactionCodeStructure1 
Set of elements to fully identify a proprietary bank transaction code. 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Code| Proprietary bank transaction code to identify the underlying transaction.| string|
| Issuer| Identification of the issuer of the proprietary bank transaction code.| string|

 &lt;a name=OBTransactionCashBalance&gt;&lt;/a&gt; 
## OBTransactionCashBalance 
Set of elements used to define the balance as a numerical representation of the net increases and decreases in an account after a transaction entry is applied to the account. 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| CreditDebitIndicator | Entity | &lt;details&gt;&lt;summary&gt;[OBCreditDebitCode](#OBCreditDebitCode)&lt;/summary&gt;&lt;ul&gt;&lt;/ul&gt;&lt;/details&gt; | 
| Type | Entity | &lt;details&gt;&lt;summary&gt;[OBBalanceType1Code](#OBBalanceType1Code)&lt;/summary&gt;&lt;ul&gt;&lt;/ul&gt;&lt;/details&gt; | 
| Amount | Entity | &lt;details&gt;&lt;summary&gt;[OBActiveOrHistoricCurrencyAndAmount](#OBActiveOrHistoricCurrencyAndAmount)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Amount [string]&lt;/li&gt; &lt;li&gt;Currency [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 

 &lt;a name=OBCashAccount6&gt;&lt;/a&gt; 
## OBCashAccount6 
Unambiguous identification of the account of the creditor, in the case of a debit transaction. 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| SchemeName| Name of the identification scheme, in a coded form as published in an external list.| string|
| Identification| Identification assigned by an institution to identify an account. This identification is known by the account owner.| string|
| Name| The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels. Note, the account name is not the product name or the nickname of the account.| string|

 &lt;a name=OBTransaction6&gt;&lt;/a&gt; 
## OBTransaction6 
Provides further details on an entry in the report. 

### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| AccountId| A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.| string|
| TransactionReference| Unique reference for the transaction. This reference is optionally populated, and may as an example be the FPID in the Faster Payments context.| string|
| CreditDebitIndicator | Entity | &lt;details&gt;&lt;summary&gt;[OBCreditDebitCode](#OBCreditDebitCode)&lt;/summary&gt;&lt;ul&gt;&lt;/ul&gt;&lt;/details&gt; | 
| Status | Entity | &lt;details&gt;&lt;summary&gt;[OBEntryStatus1Code](#OBEntryStatus1Code)&lt;/summary&gt;&lt;ul&gt;&lt;/ul&gt;&lt;/details&gt; | 
| BookingDateTime| Date and time when a transaction entry is posted to an account on the account servicer's books. Usage: Booking date is the expected booking date, unless the status is booked, in which case it is the actual booking date.All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone.An example is below: 2017-04-05T10:43:07+00:00| string|
| ValueDateTime| Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry. Usage: If transaction entry status is pending and value date is present, then the value date refers to an expected/requested value date. For transaction entries subject to availability/float and for which availability information is provided, the value date must not be used.In this case the availability component identifies the number of availability days.All dates in the JSON payloads are represented in ISO 8601 date-time format. All date-time fields in responses must include the timezone.An example is below: 2017-04-05T10:43:07+00:00| string|
| TransactionInformation| Further details of the transaction. This is the transaction narrative, which is unstructured text.| string|
| Amount | Entity | &lt;details&gt;&lt;summary&gt;[OBActiveOrHistoricCurrencyAndAmount](#OBActiveOrHistoricCurrencyAndAmount)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Amount [string]&lt;/li&gt; &lt;li&gt;Currency [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 
| ProprietaryBankTransactionCode | Entity | &lt;details&gt;&lt;summary&gt;[ProprietaryBankTransactionCodeStructure1](#ProprietaryBankTransactionCodeStructure1)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Code [string]&lt;/li&gt; &lt;li&gt;Issuer [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 
| Balance | Entity | &lt;details&gt;&lt;summary&gt;[OBTransactionCashBalance](#OBTransactionCashBalance)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;&lt;details&gt;&lt;summary&gt;CreditDebitIndicator [[OBCreditDebitCode](#OBCreditDebitCode)]&lt;/summary&gt;&lt;ul&gt;&lt;/ul&gt;&lt;/details&gt;&lt;/li&gt;&lt;li&gt;&lt;details&gt;&lt;summary&gt;Type [[OBBalanceType1Code](#OBBalanceType1Code)]&lt;/summary&gt;&lt;ul&gt;&lt;/ul&gt;&lt;/details&gt;&lt;/li&gt;&lt;li&gt;&lt;details&gt;&lt;summary&gt;Amount [[OBActiveOrHistoricCurrencyAndAmount](#OBActiveOrHistoricCurrencyAndAmount)]&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Amount [string]&lt;/li&gt; &lt;li&gt;Currency [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/details&gt; | 
| CreditorAccount | Entity | &lt;details&gt;&lt;summary&gt;[OBCashAccount6](#OBCashAccount6)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;SchemeName [string]&lt;/li&gt; &lt;li&gt;Identification [string]&lt;/li&gt; &lt;li&gt;Name [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 
| DebtorAccount | Entity | &lt;details&gt;&lt;summary&gt;[OBCashAccount6](#OBCashAccount6)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;SchemeName [string]&lt;/li&gt; &lt;li&gt;Identification [string]&lt;/li&gt; &lt;li&gt;Name [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 

 &lt;a name=OBReadDataTransaction6&gt;&lt;/a&gt; 
## OBReadDataTransaction6 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Transaction| Provides further details on an entry in the report.| array[[OBTransaction6](#OBTransaction6)]|

 &lt;a name=OBReadTransaction6&gt;&lt;/a&gt; 
## OBReadTransaction6 


### Attributes 

| Name| Description| Values|
| -----| -----| -----|
| Data | Entity | &lt;details&gt;&lt;summary&gt;[OBReadDataTransaction6](#OBReadDataTransaction6)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Transaction [array[[OBTransaction6](#OBTransaction6)]]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 
| Links | Entity | &lt;details&gt;&lt;summary&gt;[Links](#Links)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;Self [string]&lt;/li&gt; &lt;li&gt;First [string]&lt;/li&gt; &lt;li&gt;Prev [string]&lt;/li&gt; &lt;li&gt;Next [string]&lt;/li&gt; &lt;li&gt;Last [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 
| Meta | Entity | &lt;details&gt;&lt;summary&gt;[Meta](#Meta)&lt;/summary&gt;&lt;ul&gt;&lt;li&gt;TotalPages [integer]&lt;/li&gt; &lt;li&gt;FirstAvailableDateTime [string]&lt;/li&gt; &lt;li&gt;LastAvailableDateTime [string]&lt;/li&gt; &lt;/ul&gt;&lt;/details&gt; | 

# Authentication

&lt;!-- ReDoc-Inject: &lt;security-definitions&gt; --&gt;

Base URLs:

* <a href="https://apis.nbg.gr/sandbox/uk.openbanking.accountinfo/oauth2/v3.1.5">https://apis.nbg.gr/sandbox/uk.openbanking.accountinfo/oauth2/v3.1.5</a> - Sandbox Server

* <a href="https://services.nbg.gr/apis/open-banking/v3.1.5/aisp">https://services.nbg.gr/apis/open-banking/v3.1.5/aisp</a> - Production Server

Email: <a href="mailto:developer@nbg.gr">NBG</a> 
Web: <a href="https://developer.nbg.gr/">NBG</a> 

# Authentication

- oAuth2 authentication. OAuth2 Authorization Code Flow

    - Flow: authorizationCode
    - Authorization URL = [https://my.nbg.gr/identity/connect/authorize](https://my.nbg.gr/identity/connect/authorize)
    - Token URL = [https://my.nbg.gr/identity/connect/token](https://my.nbg.gr/identity/connect/token)

|Scope|Scope Description|
|---|---|
|accounts offline_access|Production Scope|
|sandbox-uk-account-info-api-v1 offline_access|Sandbox Scope|

- oAuth2 authentication. OAuth2 Client Credentials Flow

    - Flow: clientCredentials
    - Token URL = [https://my.nbg.gr/identity/connect/token](https://my.nbg.gr/identity/connect/token)

|Scope|Scope Description|
|---|---|
|accounts|Production Scope|
|sandbox-uk-account-info-api-v1|Sandbox Scope|

* API Key (Client-Id)
    - Parameter Name: **Client-Id**, in: header. Application's Id

<h1 id="account-and-transaction-api-specification---uk-accountaccess">AccountAccess</h1>

## Create Account Access Consents

> Code samples

```bash
curl https://example.com/account-access-consents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Client-Id: ${API_KEY}" \
  -H 'sandbox-id: string' \
  -d '{
    "Data": {
      "ExpirationDateTime": "1970-01-01T00:00:00Z",
      "Permissions": [
        "ReadAccountsBasic"
      ],
      "TransactionFromDateTime": "1970-01-01T00:00:00Z",
      "TransactionToDateTime": "1970-01-01T00:00:00Z"
    },
    "Risk": {}
  }'
```

`POST /account-access-consents`

Create Account Access Consents

> Body parameter

```json
{
  "Data": {
    "ExpirationDateTime": "1970-01-01T00:00:00Z",
    "Permissions": [
      "ReadAccountsBasic"
    ],
    "TransactionFromDateTime": "1970-01-01T00:00:00Z",
    "TransactionToDateTime": "1970-01-01T00:00:00Z"
  },
  "Risk": {}
}
```

<h3 id="create-account-access-consents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP.<br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:<br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|sandbox-id|header|string|true|The unique id of the sandbox to be used|
|body|body|[OBReadConsent1](#schemaobreadconsent1)|false|Default|
|» Data|body|[OBReadData1](#schemaobreaddata1)|true|none|
|» Risk|body|[OBRisk2](#schemaobrisk2)|true|The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Account Info.|

> Example responses

> 201 Response

```json
{
  "Data": {
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "ExpirationDateTime": "1970-01-01T00:00:00Z",
    "Permissions": [
      "ReadAccountsBasic"
    ],
    "Status": "Authorised",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z",
    "TransactionFromDateTime": "1970-01-01T00:00:00Z",
    "TransactionToDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "string",
    "Last": "string",
    "Next": "string",
    "Prev": "string",
    "Self": "string"
  },
  "Meta": {
    "FirstAvailableDateTime": "string",
    "LastAvailableDateTime": "string",
    "TotalPages": 0
  },
  "Risk": {}
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="create-account-access-consents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Account Access Consents Created|[OBReadConsentResponse1](#schemaobreadconsentresponse1)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|415|Unsupported Media Type|Unsupported Media Type|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|415|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Client-Credentials-Token ( Scopes: sandbox-uk-account-info-api-v1 accounts ) & Client-Id
</aside>

## Get Account Access Consents

> Code samples

```bash
curl https://example.com/account-access-consents/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Client-Id: ${API_KEY}" \
  -H 'sandbox-id: string'
```

`GET /account-access-consents/{consentId}`

Get Account Access Consents by Consent ID

<h3 id="get-account-access-consents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|consentId|path|string \| null|true|ConsentId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP.<br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:<br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|sandbox-id|header|string|true|The unique id of the sandbox to be used|

> Example responses

> 200 Response

```json
{
  "Data": {
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "ExpirationDateTime": "1970-01-01T00:00:00Z",
    "Permissions": [
      "ReadAccountsBasic"
    ],
    "Status": "Authorised",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z",
    "TransactionFromDateTime": "1970-01-01T00:00:00Z",
    "TransactionToDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "string",
    "Last": "string",
    "Next": "string",
    "Prev": "string",
    "Self": "string"
  },
  "Meta": {
    "FirstAvailableDateTime": "string",
    "LastAvailableDateTime": "string",
    "TotalPages": 0
  },
  "Risk": {}
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-account-access-consents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Account Access Consents Read|[OBReadConsentResponse1](#schemaobreadconsentresponse1)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Client-Credentials-Token ( Scopes: sandbox-uk-account-info-api-v1 accounts ) & Client-Id
</aside>

## Delete Account Access Consents

> Code samples

```bash
curl https://example.com/account-access-consents/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Client-Id: ${API_KEY}" \
  -H 'sandbox-id: string'
```

`DELETE /account-access-consents/{consentId}`

Delete Account Access Consents by Consent ID

<h3 id="delete-account-access-consents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|consentId|path|string \| null|true|ConsentId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP.<br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:<br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|sandbox-id|header|string|true|The unique id of the sandbox to be used|

> Example responses

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="delete-account-access-consents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Account Access Consents Deleted|None|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|204|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Client-Credentials-Token ( Scopes: sandbox-uk-account-info-api-v1 accounts ) & Client-Id
</aside>

<h1 id="account-and-transaction-api-specification---uk-accounts">Accounts</h1>

## Get Accounts

> Code samples

```bash
curl https://example.com/accounts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Client-Id: ${API_KEY}" \
  -H 'sandbox-id: string'
```

`GET /accounts`

Get Accounts

<h3 id="get-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP.<br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:<br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|sandbox-id|header|string|true|The unique id of the sandbox to be used|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Account": [
      {
        "Account": [
          {
            "Identification": "string",
            "Name": "string",
            "SchemeName": "[ \"UK.OBIE.BBAN\", \"UK.OBIE.IBAN\", \"UK.OBIE.PAN\", \"UK.OBIE.Paym\", \"UK.OBIE.SortCodeAccountNumber\" ]",
            "SecondaryIdentification": "string"
          }
        ],
        "AccountId": "string",
        "AccountSubType": "ChargeCard",
        "AccountType": "Business",
        "Currency": "string",
        "Description": "string",
        "Nickname": "string",
        "OpeningDate": "1970-01-01T00:00:00Z",
        "Servicer": {
          "Identification": "string",
          "SchemeName": "[ \"UK.OBIE.BICFI\" ]"
        }
      }
    ]
  },
  "Links": {
    "First": "string",
    "Last": "string",
    "Next": "string",
    "Prev": "string",
    "Self": "string"
  },
  "Meta": {
    "FirstAvailableDateTime": "string",
    "LastAvailableDateTime": "string",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Accounts Read|[OBReadAccount5](#schemaobreadaccount5)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization-Code-Token ( Scopes: sandbox-uk-account-info-api-v1 offline_access accounts offline_access ) & Client-Id
</aside>

## Get Accounts

> Code samples

```bash
curl https://example.com/accounts/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Client-Id: ${API_KEY}" \
  -H 'sandbox-id: string'
```

`GET /accounts/{accountId}`

Get Accounts by Account ID

<h3 id="get-accounts-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string \| null|true|AccountId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP.<br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:<br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|sandbox-id|header|string|true|The unique id of the sandbox to be used|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Account": [
      {
        "Account": [
          {
            "Identification": "string",
            "Name": "string",
            "SchemeName": "[ \"UK.OBIE.BBAN\", \"UK.OBIE.IBAN\", \"UK.OBIE.PAN\", \"UK.OBIE.Paym\", \"UK.OBIE.SortCodeAccountNumber\" ]",
            "SecondaryIdentification": "string"
          }
        ],
        "AccountId": "string",
        "AccountSubType": "ChargeCard",
        "AccountType": "Business",
        "Currency": "string",
        "Description": "string",
        "Nickname": "string",
        "OpeningDate": "1970-01-01T00:00:00Z",
        "Servicer": {
          "Identification": "string",
          "SchemeName": "[ \"UK.OBIE.BICFI\" ]"
        }
      }
    ]
  },
  "Links": {
    "First": "string",
    "Last": "string",
    "Next": "string",
    "Prev": "string",
    "Self": "string"
  },
  "Meta": {
    "FirstAvailableDateTime": "string",
    "LastAvailableDateTime": "string",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-accounts-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Accounts Read|[OBReadAccount5](#schemaobreadaccount5)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization-Code-Token ( Scopes: sandbox-uk-account-info-api-v1 offline_access accounts offline_access ) & Client-Id
</aside>

<h1 id="account-and-transaction-api-specification---uk-balances">Balances</h1>

## Get Balances

> Code samples

```bash
curl https://example.com/accounts/string/balances \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Client-Id: ${API_KEY}" \
  -H 'sandbox-id: string'
```

`GET /accounts/{accountId}/balances`

Get Balances by Account ID

<h3 id="get-balances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string \| null|true|AccountId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP.<br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:<br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|sandbox-id|header|string|true|The unique id of the sandbox to be used|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Balance": [
      {
        "AccountId": "string",
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "CreditDebitIndicator": "Credit",
        "CreditLine": [
          {
            "Amount": {
              "Amount": "string",
              "Currency": "string"
            },
            "Included": true,
            "Type": "Available"
          }
        ],
        "DateTime": "1970-01-01T00:00:00Z",
        "Type": "ClosingAvailable"
      }
    ]
  },
  "Links": {
    "First": "string",
    "Last": "string",
    "Next": "string",
    "Prev": "string",
    "Self": "string"
  },
  "Meta": {
    "FirstAvailableDateTime": "string",
    "LastAvailableDateTime": "string",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-balances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Balances Read|[OBReadBalance1](#schemaobreadbalance1)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization-Code-Token ( Scopes: sandbox-uk-account-info-api-v1 offline_access accounts offline_access ) & Client-Id
</aside>

<h1 id="account-and-transaction-api-specification---uk-beneficiaries">Beneficiaries</h1>

## Get Beneficiaries

> Code samples

```bash
curl https://example.com/accounts/string/beneficiaries \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Client-Id: ${API_KEY}" \
  -H 'sandbox-id: string'
```

`GET /accounts/{accountId}/beneficiaries`

Get Beneficiaries by Account ID

<h3 id="get-beneficiaries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string \| null|true|AccountId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP.<br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:<br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|sandbox-id|header|string|true|The unique id of the sandbox to be used|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Beneficiary": [
      {
        "AccountId": "string",
        "BeneficiaryType": "Trusted",
        "CreditorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "[ \"UK.OBIE.BBAN\", \"UK.OBIE.IBAN\", \"UK.OBIE.PAN\", \"UK.OBIE.Paym\", \"UK.OBIE.SortCodeAccountNumber\" ]",
          "SecondaryIdentification": "string"
        }
      }
    ]
  },
  "Links": {
    "First": "string",
    "Last": "string",
    "Next": "string",
    "Prev": "string",
    "Self": "string"
  },
  "Meta": {
    "FirstAvailableDateTime": "string",
    "LastAvailableDateTime": "string",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-beneficiaries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Beneficiaries Read|[OBReadBeneficiary5](#schemaobreadbeneficiary5)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization-Code-Token ( Scopes: sandbox-uk-account-info-api-v1 offline_access accounts offline_access ) & Client-Id
</aside>

<h1 id="account-and-transaction-api-specification---uk-parties">Parties</h1>

## Get Parties

> Code samples

```bash
curl https://example.com/accounts/string/parties \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Client-Id: ${API_KEY}" \
  -H 'sandbox-id: string'
```

`GET /accounts/{accountId}/parties`

Get Parties by Account ID

<h3 id="get-parties-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string \| null|true|AccountId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP.<br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:<br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|sandbox-id|header|string|true|The unique id of the sandbox to be used|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Party": [
      {
        "Name": "string",
        "PartyId": "string"
      }
    ]
  },
  "Links": {
    "First": "string",
    "Last": "string",
    "Next": "string",
    "Prev": "string",
    "Self": "string"
  },
  "Meta": {
    "FirstAvailableDateTime": "string",
    "LastAvailableDateTime": "string",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-parties-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Party Read|[OBReadParty3](#schemaobreadparty3)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization-Code-Token ( Scopes: sandbox-uk-account-info-api-v1 offline_access accounts offline_access ) & Client-Id
</aside>

## Get Party

> Code samples

```bash
curl https://example.com/accounts/string/party \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Client-Id: ${API_KEY}" \
  -H 'sandbox-id: string'
```

`GET /accounts/{accountId}/party`

Get Party by Account ID

<h3 id="get-party-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string \| null|true|AccountId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP.<br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:<br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|sandbox-id|header|string|true|The unique id of the sandbox to be used|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Party": {
      "Name": "string",
      "PartyId": "string"
    }
  },
  "Links": {
    "First": "string",
    "Last": "string",
    "Next": "string",
    "Prev": "string",
    "Self": "string"
  },
  "Meta": {
    "FirstAvailableDateTime": "string",
    "LastAvailableDateTime": "string",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-party-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Party Read|[OBReadParty2](#schemaobreadparty2)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization-Code-Token ( Scopes: sandbox-uk-account-info-api-v1 offline_access accounts offline_access ) & Client-Id
</aside>

## Get Party

> Code samples

```bash
curl https://example.com/party \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Client-Id: ${API_KEY}" \
  -H 'sandbox-id: string'
```

`GET /party`

Get Party

<h3 id="get-party-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP.<br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:<br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|sandbox-id|header|string|true|The unique id of the sandbox to be used|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Party": {
      "Name": "string",
      "PartyId": "string"
    }
  },
  "Links": {
    "First": "string",
    "Last": "string",
    "Next": "string",
    "Prev": "string",
    "Self": "string"
  },
  "Meta": {
    "FirstAvailableDateTime": "string",
    "LastAvailableDateTime": "string",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-party-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Party Read|[OBReadParty2](#schemaobreadparty2)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization-Code-Token ( Scopes: sandbox-uk-account-info-api-v1 offline_access accounts offline_access ) & Client-Id
</aside>

<h1 id="account-and-transaction-api-specification---uk-scheduledpayments">ScheduledPayments</h1>

## Get Scheduled Payments

> Code samples

```bash
curl https://example.com/accounts/string/scheduled-payments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Client-Id: ${API_KEY}" \
  -H 'sandbox-id: string'
```

`GET /accounts/{accountId}/scheduled-payments`

Get Scheduled Payments by Account ID

<h3 id="get-scheduled-payments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string \| null|true|AccountId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP.<br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:<br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|sandbox-id|header|string|true|The unique id of the sandbox to be used|

> Example responses

> 200 Response

```json
{
  "Data": {
    "ScheduledPayment": [
      {
        "AccountId": "string",
        "CreditorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "[ \"UK.OBIE.BBAN\", \"UK.OBIE.IBAN\", \"UK.OBIE.PAN\", \"UK.OBIE.Paym\", \"UK.OBIE.SortCodeAccountNumber\" ]",
          "SecondaryIdentification": "string"
        },
        "DebtorReference": "string",
        "InstructedAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "Reference": "string",
        "ScheduledPaymentDateTime": "1970-01-01T00:00:00Z",
        "ScheduledPaymentId": "string",
        "ScheduledType": "Arrival"
      }
    ]
  },
  "Links": {
    "First": "string",
    "Last": "string",
    "Next": "string",
    "Prev": "string",
    "Self": "string"
  },
  "Meta": {
    "FirstAvailableDateTime": "string",
    "LastAvailableDateTime": "string",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-scheduled-payments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Scheduled Payments Read|[OBReadScheduledPayment3](#schemaobreadscheduledpayment3)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization-Code-Token ( Scopes: sandbox-uk-account-info-api-v1 offline_access accounts offline_access ) & Client-Id
</aside>

<h1 id="account-and-transaction-api-specification---uk-standingorders">StandingOrders</h1>

## Get Standing Orders

> Code samples

```bash
curl https://example.com/accounts/string/standing-orders \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Client-Id: ${API_KEY}" \
  -H 'sandbox-id: string'
```

`GET /accounts/{accountId}/standing-orders`

Get Standing Orders by Account ID

<h3 id="get-standing-orders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string \| null|true|AccountId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP.<br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:<br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|sandbox-id|header|string|true|The unique id of the sandbox to be used|

> Example responses

> 200 Response

```json
{
  "Data": {
    "StandingOrder": [
      {
        "AccountId": "string",
        "CreditorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "[ \"UK.OBIE.BBAN\", \"UK.OBIE.IBAN\", \"UK.OBIE.PAN\", \"UK.OBIE.Paym\", \"UK.OBIE.SortCodeAccountNumber\" ]",
          "SecondaryIdentification": "string"
        },
        "FinalPaymentAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "FinalPaymentDateTime": "1970-01-01T00:00:00Z",
        "FirstPaymentAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "FirstPaymentDateTime": "1970-01-01T00:00:00Z",
        "Frequency": "string",
        "LastPaymentAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "LastPaymentDateTime": "1970-01-01T00:00:00Z",
        "NextPaymentAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "NextPaymentDateTime": "1970-01-01T00:00:00Z",
        "Reference": "string",
        "StandingOrderId": "string",
        "StandingOrderStatusCode": "Active"
      }
    ]
  },
  "Links": {
    "First": "string",
    "Last": "string",
    "Next": "string",
    "Prev": "string",
    "Self": "string"
  },
  "Meta": {
    "FirstAvailableDateTime": "string",
    "LastAvailableDateTime": "string",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-standing-orders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Standing Orders Read|[OBReadStandingOrder6](#schemaobreadstandingorder6)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization-Code-Token ( Scopes: sandbox-uk-account-info-api-v1 offline_access accounts offline_access ) & Client-Id
</aside>

<h1 id="account-and-transaction-api-specification---uk-statements">Statements</h1>

## Get Statements

> Code samples

```bash
curl https://example.com/accounts/string/statements \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Client-Id: ${API_KEY}" \
  -H 'sandbox-id: string'
```

`GET /accounts/{accountId}/statements`

Get Statements by Account ID

<h3 id="get-statements-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string \| null|true|AccountId|
|fromStatementDateTime|query|string(date-time) \| null|false|The UTC ISO 8601 Date Time to filter statements FROM NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.|
|toStatementDateTime|query|string(date-time) \| null|false|The UTC ISO 8601 Date Time to filter statements TO NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP.<br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:<br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|sandbox-id|header|string|true|The unique id of the sandbox to be used|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Statement": [
      {
        "AccountId": "string",
        "CreationDateTime": "1970-01-01T00:00:00Z",
        "EndDateTime": "1970-01-01T00:00:00Z",
        "StartDateTime": "1970-01-01T00:00:00Z",
        "StatementId": "string",
        "StatementReference": "string",
        "Type": "AccountClosure"
      }
    ]
  },
  "Links": {
    "First": "string",
    "Last": "string",
    "Next": "string",
    "Prev": "string",
    "Self": "string"
  },
  "Meta": {
    "FirstAvailableDateTime": "string",
    "LastAvailableDateTime": "string",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-statements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Statements Read|[OBReadStatement2](#schemaobreadstatement2)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization-Code-Token ( Scopes: sandbox-uk-account-info-api-v1 offline_access accounts offline_access ) & Client-Id
</aside>

## Get Statements

> Code samples

```bash
curl https://example.com/accounts/string/statements/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Client-Id: ${API_KEY}" \
  -H 'sandbox-id: string'
```

`GET /accounts/{accountId}/statements/{statementId}`

Get Statements by Account ID and Statement ID

<h3 id="get-statements-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string \| null|true|AccountId|
|statementId|path|string \| null|true|StatementId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP.<br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:<br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|sandbox-id|header|string|true|The unique id of the sandbox to be used|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Statement": [
      {
        "AccountId": "string",
        "CreationDateTime": "1970-01-01T00:00:00Z",
        "EndDateTime": "1970-01-01T00:00:00Z",
        "StartDateTime": "1970-01-01T00:00:00Z",
        "StatementId": "string",
        "StatementReference": "string",
        "Type": "AccountClosure"
      }
    ]
  },
  "Links": {
    "First": "string",
    "Last": "string",
    "Next": "string",
    "Prev": "string",
    "Self": "string"
  },
  "Meta": {
    "FirstAvailableDateTime": "string",
    "LastAvailableDateTime": "string",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-statements-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Statements Read|[OBReadStatement2](#schemaobreadstatement2)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization-Code-Token ( Scopes: sandbox-uk-account-info-api-v1 offline_access accounts offline_access ) & Client-Id
</aside>

## Get Statements

> Code samples

```bash
curl https://example.com/accounts/string/statements/string/file \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Client-Id: ${API_KEY}" \
  -H 'sandbox-id: string'
```

`GET /accounts/{accountId}/statements/{statementId}/file`

Get Statement PDF File by Account ID and Statement ID

<h3 id="get-statements-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string \| null|true|AccountId|
|statementId|path|string \| null|true|StatementId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP.<br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:<br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|sandbox-id|header|string|true|The unique id of the sandbox to be used|

<h3 id="get-statements-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Statements Read|Inline|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization-Code-Token ( Scopes: sandbox-uk-account-info-api-v1 offline_access accounts offline_access ) & Client-Id
</aside>

<h1 id="account-and-transaction-api-specification---uk-transactions">Transactions</h1>

## Get Transactions

> Code samples

```bash
curl https://example.com/accounts/string/statements/string/transactions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Client-Id: ${API_KEY}" \
  -H 'sandbox-id: string'
```

`GET /accounts/{accountId}/statements/{statementId}/transactions`

Get Transactions by Account ID and Statement ID

<h3 id="get-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string \| null|true|AccountId|
|statementId|path|string \| null|true|StatementId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP.<br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:<br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|sandbox-id|header|string|true|The unique id of the sandbox to be used|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Transaction": [
      {
        "AccountId": "string",
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "Balance": {
          "Amount": {
            "Amount": "string",
            "Currency": "string"
          },
          "CreditDebitIndicator": "Credit",
          "Type": "ClosingAvailable"
        },
        "BookingDateTime": "1970-01-01T00:00:00Z",
        "CreditDebitIndicator": "Credit",
        "CreditorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "[ \"UK.OBIE.BBAN\", \"UK.OBIE.IBAN\", \"UK.OBIE.PAN\", \"UK.OBIE.Paym\", \"UK.OBIE.SortCodeAccountNumber\" ]"
        },
        "DebtorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "[ \"UK.OBIE.BBAN\", \"UK.OBIE.IBAN\", \"UK.OBIE.PAN\", \"UK.OBIE.Paym\", \"UK.OBIE.SortCodeAccountNumber\" ]"
        },
        "ProprietaryBankTransactionCode": {
          "Code": "string",
          "Issuer": "string"
        },
        "Status": "Booked",
        "TransactionInformation": "string",
        "TransactionReference": "string",
        "ValueDateTime": "1970-01-01T00:00:00Z"
      }
    ]
  },
  "Links": {
    "First": "string",
    "Last": "string",
    "Next": "string",
    "Prev": "string",
    "Self": "string"
  },
  "Meta": {
    "FirstAvailableDateTime": "string",
    "LastAvailableDateTime": "string",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Transactions Read|[OBReadTransaction6](#schemaobreadtransaction6)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization-Code-Token ( Scopes: sandbox-uk-account-info-api-v1 offline_access accounts offline_access ) & Client-Id
</aside>

## Get Transactions

> Code samples

```bash
curl https://example.com/accounts/string/transactions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Client-Id: ${API_KEY}" \
  -H 'sandbox-id: string'
```

`GET /accounts/{accountId}/transactions`

Get Transactions by Account ID

<h3 id="get-transactions-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string \| null|true|AccountId|
|fromBookingDateTime|query|string(date-time) \| null|false|The UTC ISO 8601 Date Time to filter transactions FROM NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.|
|toBookingDateTime|query|string(date-time) \| null|false|The UTC ISO 8601 Date Time to filter transactions TO NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP.<br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:<br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|sandbox-id|header|string|true|The unique id of the sandbox to be used|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Transaction": [
      {
        "AccountId": "string",
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "Balance": {
          "Amount": {
            "Amount": "string",
            "Currency": "string"
          },
          "CreditDebitIndicator": "Credit",
          "Type": "ClosingAvailable"
        },
        "BookingDateTime": "1970-01-01T00:00:00Z",
        "CreditDebitIndicator": "Credit",
        "CreditorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "[ \"UK.OBIE.BBAN\", \"UK.OBIE.IBAN\", \"UK.OBIE.PAN\", \"UK.OBIE.Paym\", \"UK.OBIE.SortCodeAccountNumber\" ]"
        },
        "DebtorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "[ \"UK.OBIE.BBAN\", \"UK.OBIE.IBAN\", \"UK.OBIE.PAN\", \"UK.OBIE.Paym\", \"UK.OBIE.SortCodeAccountNumber\" ]"
        },
        "ProprietaryBankTransactionCode": {
          "Code": "string",
          "Issuer": "string"
        },
        "Status": "Booked",
        "TransactionInformation": "string",
        "TransactionReference": "string",
        "ValueDateTime": "1970-01-01T00:00:00Z"
      }
    ]
  },
  "Links": {
    "First": "string",
    "Last": "string",
    "Next": "string",
    "Prev": "string",
    "Self": "string"
  },
  "Meta": {
    "FirstAvailableDateTime": "string",
    "LastAvailableDateTime": "string",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-transactions-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Transactions Read|[OBReadTransaction6](#schemaobreadtransaction6)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization-Code-Token ( Scopes: sandbox-uk-account-info-api-v1 offline_access accounts offline_access ) & Client-Id
</aside>

<h1 id="account-and-transaction-api-specification---uk-sandbox">Sandbox</h1>

## Import Sandbox

> Code samples

```bash
curl https://example.com/sandbox \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Client-Id: ${API_KEY}" \
  -d '{
    "sandboxId": "string",
    "users": [
      {
        "accounts": [
          {
            "beneficiaries": [
              {
                "name": "string"
              }
            ],
            "info": {
              "accountSubType": "string",
              "accountType": "string",
              "alias": "string",
              "availableBalance": 0,
              "currency": "string",
              "description": "string",
              "iban": "string",
              "ledgerBalance": 0,
              "openingDate": "1970-01-01T00:00:00Z",
              "overdraftLimit": 0
            },
            "party": {
              "id": "string",
              "name": "string"
            },
            "scheduledPayments": [
              {
                "amount": 0,
                "description": "string",
                "executionDate": "1970-01-01T00:00:00Z",
                "senderReference": "string"
              }
            ],
            "standingOrders": [
              {
                "amount": 0,
                "description": "string",
                "finalPaymentDate": "1970-01-01T00:00:00Z",
                "firstPaymentDate": "1970-01-01T00:00:00Z",
                "frequency": "string",
                "lastPaymentDate": "1970-01-01T00:00:00Z",
                "nextPaymentDate": "1970-01-01T00:00:00Z",
                "status": "string"
              }
            ],
            "statements": [
              {
                "month": 0,
                "number": "string",
                "year": 0
              }
            ],
            "transactions": [
              {
                "accountingBalance": 0,
                "amount": 0,
                "bookingDateTime": "1970-01-01T00:00:00Z",
                "creditDebit": "string",
                "currency": "string",
                "description": "string",
                "reference": "string",
                "relatedAccount": "string",
                "relatedName": "string",
                "transactionCode": "string",
                "valueDateTime": "1970-01-01T00:00:00Z"
              }
            ]
          }
        ],
        "cards": [
          {
            "info": {
              "availableBalance": 0,
              "creditLimit": 0,
              "description": "string",
              "expiration": "string",
              "holderName": "string",
              "ledgerBalance": 0,
              "number": "string",
              "subType": "string",
              "type": "string"
            },
            "party": {
              "id": "string",
              "name": "string"
            },
            "statements": [
              {
                "month": 0,
                "number": "string",
                "year": 0
              }
            ],
            "transactions": [
              {
                "accountingBalance": 0,
                "amount": 0,
                "bookingDateTime": "1970-01-01T00:00:00Z",
                "creditDebit": "string",
                "currency": "string",
                "description": "string",
                "reference": "string",
                "relatedAccount": "string",
                "relatedName": "string",
                "transactionCode": "string",
                "valueDateTime": "1970-01-01T00:00:00Z"
              }
            ]
          }
        ],
        "retryCacheEntries": [
          {
            "cacheKey": "string",
            "count": 0,
            "expirationTimestamp": "1970-01-01T00:00:00Z"
          }
        ],
        "userId": "string"
      }
    ]
  }'
```

`PUT /sandbox`

Import Sandbox

> Body parameter

```json
{
  "sandboxId": "string",
  "users": [
    {
      "accounts": [
        {
          "beneficiaries": [
            {
              "name": "string"
            }
          ],
          "info": {
            "accountSubType": "string",
            "accountType": "string",
            "alias": "string",
            "availableBalance": 0,
            "currency": "string",
            "description": "string",
            "iban": "string",
            "ledgerBalance": 0,
            "openingDate": "1970-01-01T00:00:00Z",
            "overdraftLimit": 0
          },
          "party": {
            "id": "string",
            "name": "string"
          },
          "scheduledPayments": [
            {
              "amount": 0,
              "description": "string",
              "executionDate": "1970-01-01T00:00:00Z",
              "senderReference": "string"
            }
          ],
          "standingOrders": [
            {
              "amount": 0,
              "description": "string",
              "finalPaymentDate": "1970-01-01T00:00:00Z",
              "firstPaymentDate": "1970-01-01T00:00:00Z",
              "frequency": "string",
              "lastPaymentDate": "1970-01-01T00:00:00Z",
              "nextPaymentDate": "1970-01-01T00:00:00Z",
              "status": "string"
            }
          ],
          "statements": [
            {
              "month": 0,
              "number": "string",
              "year": 0
            }
          ],
          "transactions": [
            {
              "accountingBalance": 0,
              "amount": 0,
              "bookingDateTime": "1970-01-01T00:00:00Z",
              "creditDebit": "string",
              "currency": "string",
              "description": "string",
              "reference": "string",
              "relatedAccount": "string",
              "relatedName": "string",
              "transactionCode": "string",
              "valueDateTime": "1970-01-01T00:00:00Z"
            }
          ]
        }
      ],
      "cards": [
        {
          "info": {
            "availableBalance": 0,
            "creditLimit": 0,
            "description": "string",
            "expiration": "string",
            "holderName": "string",
            "ledgerBalance": 0,
            "number": "string",
            "subType": "string",
            "type": "string"
          },
          "party": {
            "id": "string",
            "name": "string"
          },
          "statements": [
            {
              "month": 0,
              "number": "string",
              "year": 0
            }
          ],
          "transactions": [
            {
              "accountingBalance": 0,
              "amount": 0,
              "bookingDateTime": "1970-01-01T00:00:00Z",
              "creditDebit": "string",
              "currency": "string",
              "description": "string",
              "reference": "string",
              "relatedAccount": "string",
              "relatedName": "string",
              "transactionCode": "string",
              "valueDateTime": "1970-01-01T00:00:00Z"
            }
          ]
        }
      ],
      "retryCacheEntries": [
        {
          "cacheKey": "string",
          "count": 0,
          "expirationTimestamp": "1970-01-01T00:00:00Z"
        }
      ],
      "userId": "string"
    }
  ]
}
```

<h3 id="import-sandbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Sandbox](#schemasandbox)|false|Sandbox|
|» sandboxId|body|string|true|Sandbox id|
|» users|body|[[SandboxUser](#schemasandboxuser)]|false|List of users|

> Example responses

> 400 Response

```json
{
  "errorMessage": "string"
}
```

> 500 Response

```json
{
  "errorMessage": "string"
}
```

<h3 id="import-sandbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|415|Unsupported Media Type|Unsupported Media Type|None|
|500|Internal Server Error|Internal Server Error|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|204|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|415|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization-Code-Token ( Scopes: sandbox-uk-account-info-api-v1 offline_access accounts offline_access ) & Client-Id
</aside>

## Create Sandbox

> Code samples

```bash
curl https://example.com/sandbox \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Client-Id: ${API_KEY}" \
  -d '{
    "sandboxId": "string"
  }'
```

`POST /sandbox`

Create Sandbox

> Body parameter

```json
{
  "sandboxId": "string"
}
```

<h3 id="create-sandbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SandboxRequest](#schemasandboxrequest)|false|SandboxRequest|
|» sandboxId|body|string|true|Sandbox Id|

> Example responses

> 201 Response

```json
{
  "sandboxId": "string",
  "users": [
    {
      "accounts": [
        {
          "beneficiaries": [
            {
              "name": "string"
            }
          ],
          "info": {
            "accountSubType": "string",
            "accountType": "string",
            "alias": "string",
            "availableBalance": 0,
            "currency": "string",
            "description": "string",
            "iban": "string",
            "ledgerBalance": 0,
            "openingDate": "1970-01-01T00:00:00Z",
            "overdraftLimit": 0
          },
          "party": {
            "id": "string",
            "name": "string"
          },
          "scheduledPayments": [
            {
              "amount": 0,
              "description": "string",
              "executionDate": "1970-01-01T00:00:00Z",
              "senderReference": "string"
            }
          ],
          "standingOrders": [
            {
              "amount": 0,
              "description": "string",
              "finalPaymentDate": "1970-01-01T00:00:00Z",
              "firstPaymentDate": "1970-01-01T00:00:00Z",
              "frequency": "string",
              "lastPaymentDate": "1970-01-01T00:00:00Z",
              "nextPaymentDate": "1970-01-01T00:00:00Z",
              "status": "string"
            }
          ],
          "statements": [
            {
              "month": 0,
              "number": "string",
              "year": 0
            }
          ],
          "transactions": [
            {
              "accountingBalance": 0,
              "amount": 0,
              "bookingDateTime": "1970-01-01T00:00:00Z",
              "creditDebit": "string",
              "currency": "string",
              "description": "string",
              "reference": "string",
              "relatedAccount": "string",
              "relatedName": "string",
              "transactionCode": "string",
              "valueDateTime": "1970-01-01T00:00:00Z"
            }
          ]
        }
      ],
      "cards": [
        {
          "info": {
            "availableBalance": 0,
            "creditLimit": 0,
            "description": "string",
            "expiration": "string",
            "holderName": "string",
            "ledgerBalance": 0,
            "number": "string",
            "subType": "string",
            "type": "string"
          },
          "party": {
            "id": "string",
            "name": "string"
          },
          "statements": [
            {
              "month": 0,
              "number": "string",
              "year": 0
            }
          ],
          "transactions": [
            {
              "accountingBalance": 0,
              "amount": 0,
              "bookingDateTime": "1970-01-01T00:00:00Z",
              "creditDebit": "string",
              "currency": "string",
              "description": "string",
              "reference": "string",
              "relatedAccount": "string",
              "relatedName": "string",
              "transactionCode": "string",
              "valueDateTime": "1970-01-01T00:00:00Z"
            }
          ]
        }
      ],
      "retryCacheEntries": [
        {
          "cacheKey": "string",
          "count": 0,
          "expirationTimestamp": "1970-01-01T00:00:00Z"
        }
      ],
      "userId": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "errorMessage": "string"
}
```

> 500 Response

```json
{
  "errorMessage": "string"
}
```

<h3 id="create-sandbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[Sandbox](#schemasandbox)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|415|Unsupported Media Type|Unsupported Media Type|None|
|500|Internal Server Error|Internal Server Error|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|415|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization-Code-Token ( Scopes: sandbox-uk-account-info-api-v1 offline_access accounts offline_access ) & Client-Id
</aside>

## Export Sandbox

> Code samples

```bash
curl https://example.com/sandbox/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Client-Id: ${API_KEY}"
```

`GET /sandbox/{sandboxId}`

Export Sandbox

<h3 id="export-sandbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sandboxId|path|string \| null|true|Sandbox Id|

> Example responses

> 200 Response

```json
{
  "sandboxId": "string",
  "users": [
    {
      "accounts": [
        {
          "beneficiaries": [
            {
              "name": "string"
            }
          ],
          "info": {
            "accountSubType": "string",
            "accountType": "string",
            "alias": "string",
            "availableBalance": 0,
            "currency": "string",
            "description": "string",
            "iban": "string",
            "ledgerBalance": 0,
            "openingDate": "1970-01-01T00:00:00Z",
            "overdraftLimit": 0
          },
          "party": {
            "id": "string",
            "name": "string"
          },
          "scheduledPayments": [
            {
              "amount": 0,
              "description": "string",
              "executionDate": "1970-01-01T00:00:00Z",
              "senderReference": "string"
            }
          ],
          "standingOrders": [
            {
              "amount": 0,
              "description": "string",
              "finalPaymentDate": "1970-01-01T00:00:00Z",
              "firstPaymentDate": "1970-01-01T00:00:00Z",
              "frequency": "string",
              "lastPaymentDate": "1970-01-01T00:00:00Z",
              "nextPaymentDate": "1970-01-01T00:00:00Z",
              "status": "string"
            }
          ],
          "statements": [
            {
              "month": 0,
              "number": "string",
              "year": 0
            }
          ],
          "transactions": [
            {
              "accountingBalance": 0,
              "amount": 0,
              "bookingDateTime": "1970-01-01T00:00:00Z",
              "creditDebit": "string",
              "currency": "string",
              "description": "string",
              "reference": "string",
              "relatedAccount": "string",
              "relatedName": "string",
              "transactionCode": "string",
              "valueDateTime": "1970-01-01T00:00:00Z"
            }
          ]
        }
      ],
      "cards": [
        {
          "info": {
            "availableBalance": 0,
            "creditLimit": 0,
            "description": "string",
            "expiration": "string",
            "holderName": "string",
            "ledgerBalance": 0,
            "number": "string",
            "subType": "string",
            "type": "string"
          },
          "party": {
            "id": "string",
            "name": "string"
          },
          "statements": [
            {
              "month": 0,
              "number": "string",
              "year": 0
            }
          ],
          "transactions": [
            {
              "accountingBalance": 0,
              "amount": 0,
              "bookingDateTime": "1970-01-01T00:00:00Z",
              "creditDebit": "string",
              "currency": "string",
              "description": "string",
              "reference": "string",
              "relatedAccount": "string",
              "relatedName": "string",
              "transactionCode": "string",
              "valueDateTime": "1970-01-01T00:00:00Z"
            }
          ]
        }
      ],
      "retryCacheEntries": [
        {
          "cacheKey": "string",
          "count": 0,
          "expirationTimestamp": "1970-01-01T00:00:00Z"
        }
      ],
      "userId": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "errorMessage": "string"
}
```

> 500 Response

```json
{
  "errorMessage": "string"
}
```

<h3 id="export-sandbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Sandbox](#schemasandbox)|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|500|Internal Server Error|Internal Server Error|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization-Code-Token ( Scopes: sandbox-uk-account-info-api-v1 offline_access accounts offline_access ) & Client-Id
</aside>

## Delete Sandbox

> Code samples

```bash
curl https://example.com/sandbox/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Client-Id: ${API_KEY}"
```

`DELETE /sandbox/{sandboxId}`

Delete Sandbox

<h3 id="delete-sandbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sandboxId|path|string \| null|true|Sandbox Id|

> Example responses

> 400 Response

```json
{
  "errorMessage": "string"
}
```

> 500 Response

```json
{
  "errorMessage": "string"
}
```

<h3 id="delete-sandbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|500|Internal Server Error|Internal Server Error|[ErrorResponse](#schemaerrorresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|204|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Authorization-Code-Token ( Scopes: sandbox-uk-account-info-api-v1 offline_access accounts offline_access ) & Client-Id
</aside>

# Schemas

<h2 id="tocS_ErrorCode">ErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaerrorcode"></a>
<a id="schema_ErrorCode"></a>
<a id="tocSerrorcode"></a>
<a id="tocserrorcode"></a>

```json
"UK.OBIE.Field.Expected"
```

This is Data Type gives a low level textual error code to help categorise an error response. The applicable HTTP response code is also given.

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "errorMessage": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorMessage|string \| null|false|none|none|

<h2 id="tocS_Links">Links</h2>
<!-- backwards compatibility -->
<a id="schemalinks"></a>
<a id="schema_Links"></a>
<a id="tocSlinks"></a>
<a id="tocslinks"></a>

```json
{
  "First": "string",
  "Last": "string",
  "Next": "string",
  "Prev": "string",
  "Self": "string"
}
```

Links relevant to the payload

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|First|string \| null|false|none|none|
|Last|string \| null|false|none|none|
|Next|string \| null|false|none|none|
|Prev|string \| null|false|none|none|
|Self|string|true|none|none|

<h2 id="tocS_Meta">Meta</h2>
<!-- backwards compatibility -->
<a id="schemameta"></a>
<a id="schema_Meta"></a>
<a id="tocSmeta"></a>
<a id="tocsmeta"></a>

```json
{
  "FirstAvailableDateTime": "string",
  "LastAvailableDateTime": "string",
  "TotalPages": 0
}
```

Meta Data relevant to the payload

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirstAvailableDateTime|string \| null|false|none|All dates in the JSON payloads are represented in ISO 8601 date-time format.<br>All date-time fields in responses must include the timezone.An example is below:<br>2017-04-05T10:43:07+00:00|
|LastAvailableDateTime|string \| null|false|none|All dates in the JSON payloads are represented in ISO 8601 date-time format.<br>All date-time fields in responses must include the timezone.An example is below:<br>2017-04-05T10:43:07+00:00|
|TotalPages|integer(int32) \| null|false|none|none|

<h2 id="tocS_OBAccount6">OBAccount6</h2>
<!-- backwards compatibility -->
<a id="schemaobaccount6"></a>
<a id="schema_OBAccount6"></a>
<a id="tocSobaccount6"></a>
<a id="tocsobaccount6"></a>

```json
{
  "Account": [
    {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "[ \"UK.OBIE.BBAN\", \"UK.OBIE.IBAN\", \"UK.OBIE.PAN\", \"UK.OBIE.Paym\", \"UK.OBIE.SortCodeAccountNumber\" ]",
      "SecondaryIdentification": "string"
    }
  ],
  "AccountId": "string",
  "AccountSubType": "ChargeCard",
  "AccountType": "Business",
  "Currency": "string",
  "Description": "string",
  "Nickname": "string",
  "OpeningDate": "1970-01-01T00:00:00Z",
  "Servicer": {
    "Identification": "string",
    "SchemeName": "[ \"UK.OBIE.BICFI\" ]"
  }
}
```

Unambiguous identification of the account to which credit and debit entries are made.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Account|[[OBCashAccount5](#schemaobcashaccount5)]|false|none|Provides the details to identify an account.|
|AccountId|string|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|AccountSubType|[OBExternalAccountSubType1Code](#schemaobexternalaccountsubtype1code)|true|none|none|
|AccountType|[OBExternalAccountType1Code](#schemaobexternalaccounttype1code)|true|none|none|
|Currency|string|true|none|Identification of the currency in which the account is held.  Usage: Currency should only be used in case one and the same account number covers several currencies and the initiating party needs to identify which currency needs to be used for settlement on the account.|
|Description|string \| null|false|none|Specifies the description of the account type.|
|Nickname|string \| null|false|none|The nickname of the account, assigned by the account owner in order to provide an additional means of identification of the account.|
|OpeningDate|string(date-time) \| null|false|none|Date on which the account and related basic services are effectively operational for the account owner.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00|
|Servicer|[OBBranchAndFinancialInstitutionIdentification5](#schemaobbranchandfinancialinstitutionidentification5)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|AccountSubType|ChargeCard|
|AccountSubType|CreditCard|
|AccountSubType|CurrentAccount|
|AccountSubType|EMoney|
|AccountSubType|Loan|
|AccountSubType|Mortgage|
|AccountSubType|PrePaidCard|
|AccountSubType|Savings|
|AccountType|Business|
|AccountType|Personal|

<h2 id="tocS_OBActiveOrHistoricCurrencyAndAmount">OBActiveOrHistoricCurrencyAndAmount</h2>
<!-- backwards compatibility -->
<a id="schemaobactiveorhistoriccurrencyandamount"></a>
<a id="schema_OBActiveOrHistoricCurrencyAndAmount"></a>
<a id="tocSobactiveorhistoriccurrencyandamount"></a>
<a id="tocsobactiveorhistoriccurrencyandamount"></a>

```json
{
  "Amount": "string",
  "Currency": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amount|string|true|none|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|Currency|string|true|none|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|

<h2 id="tocS_OBBalanceType1Code">OBBalanceType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobbalancetype1code"></a>
<a id="schema_OBBalanceType1Code"></a>
<a id="tocSobbalancetype1code"></a>
<a id="tocsobbalancetype1code"></a>

```json
"ClosingAvailable"
```

<h2 id="tocS_OBBeneficiary5">OBBeneficiary5</h2>
<!-- backwards compatibility -->
<a id="schemaobbeneficiary5"></a>
<a id="schema_OBBeneficiary5"></a>
<a id="tocSobbeneficiary5"></a>
<a id="tocsobbeneficiary5"></a>

```json
{
  "AccountId": "string",
  "BeneficiaryType": "Trusted",
  "CreditorAccount": {
    "Identification": "string",
    "Name": "string",
    "SchemeName": "[ \"UK.OBIE.BBAN\", \"UK.OBIE.IBAN\", \"UK.OBIE.PAN\", \"UK.OBIE.Paym\", \"UK.OBIE.SortCodeAccountNumber\" ]",
    "SecondaryIdentification": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|string \| null|false|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|BeneficiaryType|[OBBeneficiaryType1Code](#schemaobbeneficiarytype1code)|false|none|Specifies the Beneficiary Type.|
|CreditorAccount|[OBCashAccount5](#schemaobcashaccount5)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|BeneficiaryType|Trusted|
|BeneficiaryType|Ordinary|

<h2 id="tocS_OBBeneficiaryType1Code">OBBeneficiaryType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobbeneficiarytype1code"></a>
<a id="schema_OBBeneficiaryType1Code"></a>
<a id="tocSobbeneficiarytype1code"></a>
<a id="tocsobbeneficiarytype1code"></a>

```json
"Trusted"
```

Specifies the Beneficiary Type.

<h2 id="tocS_OBBranchAndFinancialInstitutionIdentification5">OBBranchAndFinancialInstitutionIdentification5</h2>
<!-- backwards compatibility -->
<a id="schemaobbranchandfinancialinstitutionidentification5"></a>
<a id="schema_OBBranchAndFinancialInstitutionIdentification5"></a>
<a id="tocSobbranchandfinancialinstitutionidentification5"></a>
<a id="tocsobbranchandfinancialinstitutionidentification5"></a>

```json
{
  "Identification": "string",
  "SchemeName": "[ \"UK.OBIE.BICFI\" ]"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Identification|string|true|none|Unique and unambiguous identification of the servicing institution.|
|SchemeName|string|true|none|Name of the identification scheme, in a coded form as published in an external list.|

<h2 id="tocS_OBCashAccount5">OBCashAccount5</h2>
<!-- backwards compatibility -->
<a id="schemaobcashaccount5"></a>
<a id="schema_OBCashAccount5"></a>
<a id="tocSobcashaccount5"></a>
<a id="tocsobcashaccount5"></a>

```json
{
  "Identification": "string",
  "Name": "string",
  "SchemeName": "[ \"UK.OBIE.BBAN\", \"UK.OBIE.IBAN\", \"UK.OBIE.PAN\", \"UK.OBIE.Paym\", \"UK.OBIE.SortCodeAccountNumber\" ]",
  "SecondaryIdentification": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Identification|string|true|none|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|Name|string \| null|false|none|The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.<br>Note, the account name is not the product name or the nickname of the account.|
|SchemeName|string|true|none|Name of the identification scheme, in a coded form as published in an external list.|
|SecondaryIdentification|string \| null|false|none|This is secondary identification of the account, as assigned by the account servicing institution.<br>This can be used by building societies to additionally identify accounts with a roll number(in addition to a sort code and account number combination).|

<h2 id="tocS_OBCashAccount6">OBCashAccount6</h2>
<!-- backwards compatibility -->
<a id="schemaobcashaccount6"></a>
<a id="schema_OBCashAccount6"></a>
<a id="tocSobcashaccount6"></a>
<a id="tocsobcashaccount6"></a>

```json
{
  "Identification": "string",
  "Name": "string",
  "SchemeName": "[ \"UK.OBIE.BBAN\", \"UK.OBIE.IBAN\", \"UK.OBIE.PAN\", \"UK.OBIE.Paym\", \"UK.OBIE.SortCodeAccountNumber\" ]"
}
```

Unambiguous identification of the account of the creditor, in the case of a debit transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Identification|string \| null|false|none|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|Name|string \| null|false|none|The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.<br>Note, the account name is not the product name or the nickname of the account.|
|SchemeName|string \| null|false|none|Name of the identification scheme, in a coded form as published in an external list.|

<h2 id="tocS_OBCashBalance1">OBCashBalance1</h2>
<!-- backwards compatibility -->
<a id="schemaobcashbalance1"></a>
<a id="schema_OBCashBalance1"></a>
<a id="tocSobcashbalance1"></a>
<a id="tocsobcashbalance1"></a>

```json
{
  "AccountId": "string",
  "Amount": {
    "Amount": "string",
    "Currency": "string"
  },
  "CreditDebitIndicator": "Credit",
  "CreditLine": [
    {
      "Amount": {
        "Amount": "string",
        "Currency": "string"
      },
      "Included": true,
      "Type": "Available"
    }
  ],
  "DateTime": "1970-01-01T00:00:00Z",
  "Type": "ClosingAvailable"
}
```

Set of elements used to define the balance details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|string|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|Amount|[OBActiveOrHistoricCurrencyAndAmount](#schemaobactiveorhistoriccurrencyandamount)|true|none|none|
|CreditDebitIndicator|[OBCreditDebitCode](#schemaobcreditdebitcode)|true|none|none|
|CreditLine|[[OBCreditLine1](#schemaobcreditline1)]|false|none|Set of elements used to provide details on the credit line.|
|DateTime|string(date-time)|true|none|Indicates the date (and time) of the balance.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00|
|Type|[OBBalanceType1Code](#schemaobbalancetype1code)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|CreditDebitIndicator|Credit|
|CreditDebitIndicator|Debit|
|Type|ClosingAvailable|
|Type|ClosingBooked|
|Type|ClosingCleared|
|Type|Expected|
|Type|ForwardAvailable|
|Type|Information|
|Type|InterimAvailable|
|Type|InterimBooked|
|Type|InterimCleared|
|Type|OpeningAvailable|
|Type|OpeningBooked|
|Type|OpeningCleared|
|Type|PreviouslyClosedBooked|

<h2 id="tocS_OBCreditDebitCode">OBCreditDebitCode</h2>
<!-- backwards compatibility -->
<a id="schemaobcreditdebitcode"></a>
<a id="schema_OBCreditDebitCode"></a>
<a id="tocSobcreditdebitcode"></a>
<a id="tocsobcreditdebitcode"></a>

```json
"Credit"
```

<h2 id="tocS_OBCreditLine1">OBCreditLine1</h2>
<!-- backwards compatibility -->
<a id="schemaobcreditline1"></a>
<a id="schema_OBCreditLine1"></a>
<a id="tocSobcreditline1"></a>
<a id="tocsobcreditline1"></a>

```json
{
  "Amount": {
    "Amount": "string",
    "Currency": "string"
  },
  "Included": true,
  "Type": "Available"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amount|[OBActiveOrHistoricCurrencyAndAmount](#schemaobactiveorhistoriccurrencyandamount)|false|none|none|
|Included|boolean|true|none|Indicates whether or not the credit line is included in the balance of the account.<br>Usage: If not present, credit line is not included in the balance amount of the account.|
|Type|[OBExternalLimitType1Code](#schemaobexternallimittype1code)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Type|Available|
|Type|Credit|
|Type|Emergency|
|Type|Pre-Agreed|
|Type|Temporary|

<h2 id="tocS_OBEntryStatus1Code">OBEntryStatus1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobentrystatus1code"></a>
<a id="schema_OBEntryStatus1Code"></a>
<a id="tocSobentrystatus1code"></a>
<a id="tocsobentrystatus1code"></a>

```json
"Booked"
```

<h2 id="tocS_OBError1">OBError1</h2>
<!-- backwards compatibility -->
<a id="schemaoberror1"></a>
<a id="schema_OBError1"></a>
<a id="tocSoberror1"></a>
<a id="tocsoberror1"></a>

```json
{
  "ErrorCode": "UK.OBIE.Field.Expected",
  "Message": "string",
  "Path": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ErrorCode|[ErrorCode](#schemaerrorcode)|true|none|This is Data Type gives a low level textual error code to help categorise an error response. The applicable HTTP response code is also given.|
|Message|string|true|none|A description of the error that occurred. e.g., 'A mandatory field isn't supplied' or 'RequestedExecutionDateTime must be in future'OBIE doesn't standardise this field|
|Path|string \| null|false|none|Recommended but optional reference to the JSON Path of the field with error, e.g., Data.Initiation.InstructedAmount.Currency|

#### Enumerated Values

|Property|Value|
|---|---|
|ErrorCode|UK.OBIE.Field.Expected|
|ErrorCode|UK.OBIE.Field.Invalid|
|ErrorCode|UK.OBIE.Field.InvalidDate|
|ErrorCode|UK.OBIE.Field.Missing|
|ErrorCode|UK.OBIE.Field.Unexpected|
|ErrorCode|UK.OBIE.Header.Invalid|
|ErrorCode|UK.OBIE.Header.Missing|
|ErrorCode|UK.OBIE.Resource.ConsentMismatch|
|ErrorCode|UK.OBIE.Resource.InvalidConsentStatus|
|ErrorCode|UK.OBIE.Resource.InvalidFormat|
|ErrorCode|UK.OBIE.Resource.NotFound|
|ErrorCode|UK.OBIE.Rules.AfterCutOffDateTime|
|ErrorCode|UK.OBIE.Rules.DuplicateReference|
|ErrorCode|UK.OBIE.Signature.Invalid|
|ErrorCode|UK.OBIE.Signature.InvalidClaim|
|ErrorCode|UK.OBIE.Signature.MissingClaim|
|ErrorCode|UK.OBIE.Signature.Malformed|
|ErrorCode|UK.OBIE.Signature.Missing|
|ErrorCode|UK.OBIE.Signature.Unexpected|
|ErrorCode|UK.OBIE.Unsupported.AccountIdentifier|
|ErrorCode|UK.OBIE.Unsupported.AccountSecondaryIdentifier|
|ErrorCode|UK.OBIE.Unsupported.Currency|
|ErrorCode|UK.OBIE.Unsupported.EventType|
|ErrorCode|UK.OBIE.Unsupported.Frequency|
|ErrorCode|UK.OBIE.Unsupported.LocalInstrument|
|ErrorCode|UK.OBIE.Unsupported.Scheme|
|ErrorCode|UK.OBIE.Reauthenticate|
|ErrorCode|UK.OBIE.Rules.ResourceAlreadyExists|
|ErrorCode|UK.OBIE.UnexpectedError|

<h2 id="tocS_OBErrorResponse1">OBErrorResponse1</h2>
<!-- backwards compatibility -->
<a id="schemaoberrorresponse1"></a>
<a id="schema_OBErrorResponse1"></a>
<a id="tocSoberrorresponse1"></a>
<a id="tocsoberrorresponse1"></a>

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Expected",
      "Message": "string",
      "Path": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

An array of detail error codes, and messages, and URLs to documentation to help remediation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|string|true|none|High level textual error code, to help categorize the errors.|
|Errors|[[OBError1](#schemaoberror1)]|true|none|Gets or Sets Errors|
|Id|string \| null|false|none|A unique reference for the error instance, for audit purposes, in case of unknown/unclassified errors.|
|Message|string|true|none|Brief Error message, e.g., 'There is something wrong with the request parameters provided'|

<h2 id="tocS_OBExternalAccountSubType1Code">OBExternalAccountSubType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalaccountsubtype1code"></a>
<a id="schema_OBExternalAccountSubType1Code"></a>
<a id="tocSobexternalaccountsubtype1code"></a>
<a id="tocsobexternalaccountsubtype1code"></a>

```json
"ChargeCard"
```

<h2 id="tocS_OBExternalAccountType1Code">OBExternalAccountType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalaccounttype1code"></a>
<a id="schema_OBExternalAccountType1Code"></a>
<a id="tocSobexternalaccounttype1code"></a>
<a id="tocsobexternalaccounttype1code"></a>

```json
"Business"
```

<h2 id="tocS_OBExternalLimitType1Code">OBExternalLimitType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternallimittype1code"></a>
<a id="schema_OBExternalLimitType1Code"></a>
<a id="tocSobexternallimittype1code"></a>
<a id="tocsobexternallimittype1code"></a>

```json
"Available"
```

<h2 id="tocS_OBExternalPermissions1Code">OBExternalPermissions1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalpermissions1code"></a>
<a id="schema_OBExternalPermissions1Code"></a>
<a id="tocSobexternalpermissions1code"></a>
<a id="tocsobexternalpermissions1code"></a>

```json
"ReadAccountsBasic"
```

Specifies the Open Banking account access data types. This is a list of the data clusters being consented by the PSU, and requested for authorisation with the ASPSP.

<h2 id="tocS_OBExternalRequestStatus1Code">OBExternalRequestStatus1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalrequeststatus1code"></a>
<a id="schema_OBExternalRequestStatus1Code"></a>
<a id="tocSobexternalrequeststatus1code"></a>
<a id="tocsobexternalrequeststatus1code"></a>

```json
"Authorised"
```

Specifies the status of consent resource in code form.

<h2 id="tocS_OBExternalScheduleType1Code">OBExternalScheduleType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalscheduletype1code"></a>
<a id="schema_OBExternalScheduleType1Code"></a>
<a id="tocSobexternalscheduletype1code"></a>
<a id="tocsobexternalscheduletype1code"></a>

```json
"Arrival"
```

<h2 id="tocS_OBExternalStandingOrderStatus1Code">OBExternalStandingOrderStatus1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalstandingorderstatus1code"></a>
<a id="schema_OBExternalStandingOrderStatus1Code"></a>
<a id="tocSobexternalstandingorderstatus1code"></a>
<a id="tocsobexternalstandingorderstatus1code"></a>

```json
"Active"
```

<h2 id="tocS_OBExternalStatementType1Code">OBExternalStatementType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalstatementtype1code"></a>
<a id="schema_OBExternalStatementType1Code"></a>
<a id="tocSobexternalstatementtype1code"></a>
<a id="tocsobexternalstatementtype1code"></a>

```json
"AccountClosure"
```

<h2 id="tocS_OBParty2">OBParty2</h2>
<!-- backwards compatibility -->
<a id="schemaobparty2"></a>
<a id="schema_OBParty2"></a>
<a id="tocSobparty2"></a>
<a id="tocsobparty2"></a>

```json
{
  "Name": "string",
  "PartyId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|string \| null|false|none|Name by which a party is known and which is usually used to identify that party.|
|PartyId|string|true|none|A unique and immutable identifier used to identify the customer resource. This identifier has no meaning to the account owner.|

<h2 id="tocS_OBReadAccount5">OBReadAccount5</h2>
<!-- backwards compatibility -->
<a id="schemaobreadaccount5"></a>
<a id="schema_OBReadAccount5"></a>
<a id="tocSobreadaccount5"></a>
<a id="tocsobreadaccount5"></a>

```json
{
  "Data": {
    "Account": [
      {
        "Account": [
          {
            "Identification": "string",
            "Name": "string",
            "SchemeName": "[ \"UK.OBIE.BBAN\", \"UK.OBIE.IBAN\", \"UK.OBIE.PAN\", \"UK.OBIE.Paym\", \"UK.OBIE.SortCodeAccountNumber\" ]",
            "SecondaryIdentification": "string"
          }
        ],
        "AccountId": "string",
        "AccountSubType": "ChargeCard",
        "AccountType": "Business",
        "Currency": "string",
        "Description": "string",
        "Nickname": "string",
        "OpeningDate": "1970-01-01T00:00:00Z",
        "Servicer": {
          "Identification": "string",
          "SchemeName": "[ \"UK.OBIE.BICFI\" ]"
        }
      }
    ]
  },
  "Links": {
    "First": "string",
    "Last": "string",
    "Next": "string",
    "Prev": "string",
    "Self": "string"
  },
  "Meta": {
    "FirstAvailableDateTime": "string",
    "LastAvailableDateTime": "string",
    "TotalPages": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|[OBReadDataAccount5](#schemaobreaddataaccount5)|true|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

<h2 id="tocS_OBReadBalance1">OBReadBalance1</h2>
<!-- backwards compatibility -->
<a id="schemaobreadbalance1"></a>
<a id="schema_OBReadBalance1"></a>
<a id="tocSobreadbalance1"></a>
<a id="tocsobreadbalance1"></a>

```json
{
  "Data": {
    "Balance": [
      {
        "AccountId": "string",
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "CreditDebitIndicator": "Credit",
        "CreditLine": [
          {
            "Amount": {
              "Amount": "string",
              "Currency": "string"
            },
            "Included": true,
            "Type": "Available"
          }
        ],
        "DateTime": "1970-01-01T00:00:00Z",
        "Type": "ClosingAvailable"
      }
    ]
  },
  "Links": {
    "First": "string",
    "Last": "string",
    "Next": "string",
    "Prev": "string",
    "Self": "string"
  },
  "Meta": {
    "FirstAvailableDateTime": "string",
    "LastAvailableDateTime": "string",
    "TotalPages": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|[OBReadDataBalance1](#schemaobreaddatabalance1)|true|none|none|
|Links|[Links](#schemalinks)|true|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|true|none|Meta Data relevant to the payload|

<h2 id="tocS_OBReadBeneficiary5">OBReadBeneficiary5</h2>
<!-- backwards compatibility -->
<a id="schemaobreadbeneficiary5"></a>
<a id="schema_OBReadBeneficiary5"></a>
<a id="tocSobreadbeneficiary5"></a>
<a id="tocsobreadbeneficiary5"></a>

```json
{
  "Data": {
    "Beneficiary": [
      {
        "AccountId": "string",
        "BeneficiaryType": "Trusted",
        "CreditorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "[ \"UK.OBIE.BBAN\", \"UK.OBIE.IBAN\", \"UK.OBIE.PAN\", \"UK.OBIE.Paym\", \"UK.OBIE.SortCodeAccountNumber\" ]",
          "SecondaryIdentification": "string"
        }
      }
    ]
  },
  "Links": {
    "First": "string",
    "Last": "string",
    "Next": "string",
    "Prev": "string",
    "Self": "string"
  },
  "Meta": {
    "FirstAvailableDateTime": "string",
    "LastAvailableDateTime": "string",
    "TotalPages": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|[OBReadDataBeneficiary5](#schemaobreaddatabeneficiary5)|true|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

<h2 id="tocS_OBReadConsent1">OBReadConsent1</h2>
<!-- backwards compatibility -->
<a id="schemaobreadconsent1"></a>
<a id="schema_OBReadConsent1"></a>
<a id="tocSobreadconsent1"></a>
<a id="tocsobreadconsent1"></a>

```json
{
  "Data": {
    "ExpirationDateTime": "1970-01-01T00:00:00Z",
    "Permissions": [
      "ReadAccountsBasic"
    ],
    "TransactionFromDateTime": "1970-01-01T00:00:00Z",
    "TransactionToDateTime": "1970-01-01T00:00:00Z"
  },
  "Risk": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|[OBReadData1](#schemaobreaddata1)|true|none|none|
|Risk|[OBRisk2](#schemaobrisk2)|true|none|The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Account Info.|

<h2 id="tocS_OBReadConsentResponse1">OBReadConsentResponse1</h2>
<!-- backwards compatibility -->
<a id="schemaobreadconsentresponse1"></a>
<a id="schema_OBReadConsentResponse1"></a>
<a id="tocSobreadconsentresponse1"></a>
<a id="tocsobreadconsentresponse1"></a>

```json
{
  "Data": {
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "ExpirationDateTime": "1970-01-01T00:00:00Z",
    "Permissions": [
      "ReadAccountsBasic"
    ],
    "Status": "Authorised",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z",
    "TransactionFromDateTime": "1970-01-01T00:00:00Z",
    "TransactionToDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "string",
    "Last": "string",
    "Next": "string",
    "Prev": "string",
    "Self": "string"
  },
  "Meta": {
    "FirstAvailableDateTime": "string",
    "LastAvailableDateTime": "string",
    "TotalPages": 0
  },
  "Risk": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|[OBReadDataConsentResponse1](#schemaobreaddataconsentresponse1)|true|none|none|
|Links|[Links](#schemalinks)|true|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|true|none|Meta Data relevant to the payload|
|Risk|[OBRisk2](#schemaobrisk2)|true|none|The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Account Info.|

<h2 id="tocS_OBReadData1">OBReadData1</h2>
<!-- backwards compatibility -->
<a id="schemaobreaddata1"></a>
<a id="schema_OBReadData1"></a>
<a id="tocSobreaddata1"></a>
<a id="tocsobreaddata1"></a>

```json
{
  "ExpirationDateTime": "1970-01-01T00:00:00Z",
  "Permissions": [
    "ReadAccountsBasic"
  ],
  "TransactionFromDateTime": "1970-01-01T00:00:00Z",
  "TransactionToDateTime": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExpirationDateTime|string(date-time) \| null|false|none|Specified date and time the permissions will expire. If this is not populated, the permissions will be open ended. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00|
|Permissions|[[OBExternalPermissions1Code](#schemaobexternalpermissions1code)]|true|none|Specifies the Open Banking account access data types. This is a list of the data clusters being consented by the PSU, and requested for authorisation with the ASPSP.|
|TransactionFromDateTime|string(date-time) \| null|false|none|Specified start date and time for the transaction query period. If this is not populated, the start date will be open ended, and data will be returned from the earliest available transaction. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00|
|TransactionToDateTime|string(date-time) \| null|false|none|Specified end date and time for the transaction query period. If this is not populated, the end date will be open ended, and data will be returned to the latest available transaction. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00|

#### Enumerated Values

|Property|Value|
|---|---|
|Permissions|ReadAccountsBasic|
|Permissions|ReadAccountsDetail|
|Permissions|ReadBalances|
|Permissions|ReadBeneficiariesBasic|
|Permissions|ReadBeneficiariesDetail|
|Permissions|ReadDirectDebits|
|Permissions|ReadOffers|
|Permissions|ReadPAN|
|Permissions|ReadParty|
|Permissions|ReadPartyPSU|
|Permissions|ReadProducts|
|Permissions|ReadScheduledPaymentsBasic|
|Permissions|ReadScheduledPaymentsDetail|
|Permissions|ReadStandingOrdersBasic|
|Permissions|ReadStandingOrdersDetail|
|Permissions|ReadStatementsBasic|
|Permissions|ReadStatementsDetail|
|Permissions|ReadTransactionsBasic|
|Permissions|ReadTransactionsCredits|
|Permissions|ReadTransactionsDebits|
|Permissions|ReadTransactionsDetail|

<h2 id="tocS_OBReadDataAccount5">OBReadDataAccount5</h2>
<!-- backwards compatibility -->
<a id="schemaobreaddataaccount5"></a>
<a id="schema_OBReadDataAccount5"></a>
<a id="tocSobreaddataaccount5"></a>
<a id="tocsobreaddataaccount5"></a>

```json
{
  "Account": [
    {
      "Account": [
        {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "[ \"UK.OBIE.BBAN\", \"UK.OBIE.IBAN\", \"UK.OBIE.PAN\", \"UK.OBIE.Paym\", \"UK.OBIE.SortCodeAccountNumber\" ]",
          "SecondaryIdentification": "string"
        }
      ],
      "AccountId": "string",
      "AccountSubType": "ChargeCard",
      "AccountType": "Business",
      "Currency": "string",
      "Description": "string",
      "Nickname": "string",
      "OpeningDate": "1970-01-01T00:00:00Z",
      "Servicer": {
        "Identification": "string",
        "SchemeName": "[ \"UK.OBIE.BICFI\" ]"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Account|[[OBAccount6](#schemaobaccount6)]|false|none|Unambiguous identification of the account to which credit and debit entries are made.|

<h2 id="tocS_OBReadDataBalance1">OBReadDataBalance1</h2>
<!-- backwards compatibility -->
<a id="schemaobreaddatabalance1"></a>
<a id="schema_OBReadDataBalance1"></a>
<a id="tocSobreaddatabalance1"></a>
<a id="tocsobreaddatabalance1"></a>

```json
{
  "Balance": [
    {
      "AccountId": "string",
      "Amount": {
        "Amount": "string",
        "Currency": "string"
      },
      "CreditDebitIndicator": "Credit",
      "CreditLine": [
        {
          "Amount": {
            "Amount": "string",
            "Currency": "string"
          },
          "Included": true,
          "Type": "Available"
        }
      ],
      "DateTime": "1970-01-01T00:00:00Z",
      "Type": "ClosingAvailable"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Balance|[[OBCashBalance1](#schemaobcashbalance1)]|true|none|Set of elements used to define the balance details.|

<h2 id="tocS_OBReadDataBeneficiary5">OBReadDataBeneficiary5</h2>
<!-- backwards compatibility -->
<a id="schemaobreaddatabeneficiary5"></a>
<a id="schema_OBReadDataBeneficiary5"></a>
<a id="tocSobreaddatabeneficiary5"></a>
<a id="tocsobreaddatabeneficiary5"></a>

```json
{
  "Beneficiary": [
    {
      "AccountId": "string",
      "BeneficiaryType": "Trusted",
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "[ \"UK.OBIE.BBAN\", \"UK.OBIE.IBAN\", \"UK.OBIE.PAN\", \"UK.OBIE.Paym\", \"UK.OBIE.SortCodeAccountNumber\" ]",
        "SecondaryIdentification": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Beneficiary|[[OBBeneficiary5](#schemaobbeneficiary5)]|false|none|none|

<h2 id="tocS_OBReadDataConsentResponse1">OBReadDataConsentResponse1</h2>
<!-- backwards compatibility -->
<a id="schemaobreaddataconsentresponse1"></a>
<a id="schema_OBReadDataConsentResponse1"></a>
<a id="tocSobreaddataconsentresponse1"></a>
<a id="tocsobreaddataconsentresponse1"></a>

```json
{
  "ConsentId": "string",
  "CreationDateTime": "1970-01-01T00:00:00Z",
  "ExpirationDateTime": "1970-01-01T00:00:00Z",
  "Permissions": [
    "ReadAccountsBasic"
  ],
  "Status": "Authorised",
  "StatusUpdateDateTime": "1970-01-01T00:00:00Z",
  "TransactionFromDateTime": "1970-01-01T00:00:00Z",
  "TransactionToDateTime": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConsentId|string|true|none|Unique identification as assigned to identify the account access consent resource.|
|CreationDateTime|string(date-time)|true|none|Date and time at which the resource was created. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00|
|ExpirationDateTime|string(date-time) \| null|false|none|Specified date and time the permissions will expire. If this is not populated, the permissions will be open ended. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00|
|Permissions|[[OBExternalPermissions1Code](#schemaobexternalpermissions1code)]|true|none|Specifies the Open Banking account access data types. This is a list of the data clusters being consented by the PSU, and requested for authorisation with the ASPSP.|
|Status|[OBExternalRequestStatus1Code](#schemaobexternalrequeststatus1code)|true|none|Specifies the status of consent resource in code form.|
|StatusUpdateDateTime|string(date-time)|true|none|Date and time at which the resource status was updated. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00|
|TransactionFromDateTime|string(date-time) \| null|false|none|Specified start date and time for the transaction query period. If this is not populated, the start date will be open ended, and data will be returned from the earliest available transaction. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00|
|TransactionToDateTime|string(date-time) \| null|false|none|Specified end date and time for the transaction query period. If this is not populated, the end date will be open ended, and data will be returned to the latest available transaction. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00|

#### Enumerated Values

|Property|Value|
|---|---|
|Permissions|ReadAccountsBasic|
|Permissions|ReadAccountsDetail|
|Permissions|ReadBalances|
|Permissions|ReadBeneficiariesBasic|
|Permissions|ReadBeneficiariesDetail|
|Permissions|ReadDirectDebits|
|Permissions|ReadOffers|
|Permissions|ReadPAN|
|Permissions|ReadParty|
|Permissions|ReadPartyPSU|
|Permissions|ReadProducts|
|Permissions|ReadScheduledPaymentsBasic|
|Permissions|ReadScheduledPaymentsDetail|
|Permissions|ReadStandingOrdersBasic|
|Permissions|ReadStandingOrdersDetail|
|Permissions|ReadStatementsBasic|
|Permissions|ReadStatementsDetail|
|Permissions|ReadTransactionsBasic|
|Permissions|ReadTransactionsCredits|
|Permissions|ReadTransactionsDebits|
|Permissions|ReadTransactionsDetail|
|Status|Authorised|
|Status|AwaitingAuthorisation|
|Status|Rejected|
|Status|Revoked|

<h2 id="tocS_OBReadDataParty2">OBReadDataParty2</h2>
<!-- backwards compatibility -->
<a id="schemaobreaddataparty2"></a>
<a id="schema_OBReadDataParty2"></a>
<a id="tocSobreaddataparty2"></a>
<a id="tocsobreaddataparty2"></a>

```json
{
  "Party": {
    "Name": "string",
    "PartyId": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Party|[OBParty2](#schemaobparty2)|false|none|none|

<h2 id="tocS_OBReadDataParty3">OBReadDataParty3</h2>
<!-- backwards compatibility -->
<a id="schemaobreaddataparty3"></a>
<a id="schema_OBReadDataParty3"></a>
<a id="tocSobreaddataparty3"></a>
<a id="tocsobreaddataparty3"></a>

```json
{
  "Party": [
    {
      "Name": "string",
      "PartyId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Party|[[OBParty2](#schemaobparty2)]|false|none|none|

<h2 id="tocS_OBReadDataScheduledPayment3">OBReadDataScheduledPayment3</h2>
<!-- backwards compatibility -->
<a id="schemaobreaddatascheduledpayment3"></a>
<a id="schema_OBReadDataScheduledPayment3"></a>
<a id="tocSobreaddatascheduledpayment3"></a>
<a id="tocsobreaddatascheduledpayment3"></a>

```json
{
  "ScheduledPayment": [
    {
      "AccountId": "string",
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "[ \"UK.OBIE.BBAN\", \"UK.OBIE.IBAN\", \"UK.OBIE.PAN\", \"UK.OBIE.Paym\", \"UK.OBIE.SortCodeAccountNumber\" ]",
        "SecondaryIdentification": "string"
      },
      "DebtorReference": "string",
      "InstructedAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "Reference": "string",
      "ScheduledPaymentDateTime": "1970-01-01T00:00:00Z",
      "ScheduledPaymentId": "string",
      "ScheduledType": "Arrival"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ScheduledPayment|[[OBScheduledPayment3](#schemaobscheduledpayment3)]|false|none|none|

<h2 id="tocS_OBReadDataStandingOrder5">OBReadDataStandingOrder5</h2>
<!-- backwards compatibility -->
<a id="schemaobreaddatastandingorder5"></a>
<a id="schema_OBReadDataStandingOrder5"></a>
<a id="tocSobreaddatastandingorder5"></a>
<a id="tocsobreaddatastandingorder5"></a>

```json
{
  "StandingOrder": [
    {
      "AccountId": "string",
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "[ \"UK.OBIE.BBAN\", \"UK.OBIE.IBAN\", \"UK.OBIE.PAN\", \"UK.OBIE.Paym\", \"UK.OBIE.SortCodeAccountNumber\" ]",
        "SecondaryIdentification": "string"
      },
      "FinalPaymentAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "FinalPaymentDateTime": "1970-01-01T00:00:00Z",
      "FirstPaymentAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "FirstPaymentDateTime": "1970-01-01T00:00:00Z",
      "Frequency": "string",
      "LastPaymentAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "LastPaymentDateTime": "1970-01-01T00:00:00Z",
      "NextPaymentAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "NextPaymentDateTime": "1970-01-01T00:00:00Z",
      "Reference": "string",
      "StandingOrderId": "string",
      "StandingOrderStatusCode": "Active"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StandingOrder|[[OBStandingOrder5](#schemaobstandingorder5)]|false|none|none|

<h2 id="tocS_OBReadDataStatement2">OBReadDataStatement2</h2>
<!-- backwards compatibility -->
<a id="schemaobreaddatastatement2"></a>
<a id="schema_OBReadDataStatement2"></a>
<a id="tocSobreaddatastatement2"></a>
<a id="tocsobreaddatastatement2"></a>

```json
{
  "Statement": [
    {
      "AccountId": "string",
      "CreationDateTime": "1970-01-01T00:00:00Z",
      "EndDateTime": "1970-01-01T00:00:00Z",
      "StartDateTime": "1970-01-01T00:00:00Z",
      "StatementId": "string",
      "StatementReference": "string",
      "Type": "AccountClosure"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Statement|[[OBStatement2](#schemaobstatement2)]|false|none|Provides further details on a statement resource.|

<h2 id="tocS_OBReadDataTransaction6">OBReadDataTransaction6</h2>
<!-- backwards compatibility -->
<a id="schemaobreaddatatransaction6"></a>
<a id="schema_OBReadDataTransaction6"></a>
<a id="tocSobreaddatatransaction6"></a>
<a id="tocsobreaddatatransaction6"></a>

```json
{
  "Transaction": [
    {
      "AccountId": "string",
      "Amount": {
        "Amount": "string",
        "Currency": "string"
      },
      "Balance": {
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "CreditDebitIndicator": "Credit",
        "Type": "ClosingAvailable"
      },
      "BookingDateTime": "1970-01-01T00:00:00Z",
      "CreditDebitIndicator": "Credit",
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "[ \"UK.OBIE.BBAN\", \"UK.OBIE.IBAN\", \"UK.OBIE.PAN\", \"UK.OBIE.Paym\", \"UK.OBIE.SortCodeAccountNumber\" ]"
      },
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "[ \"UK.OBIE.BBAN\", \"UK.OBIE.IBAN\", \"UK.OBIE.PAN\", \"UK.OBIE.Paym\", \"UK.OBIE.SortCodeAccountNumber\" ]"
      },
      "ProprietaryBankTransactionCode": {
        "Code": "string",
        "Issuer": "string"
      },
      "Status": "Booked",
      "TransactionInformation": "string",
      "TransactionReference": "string",
      "ValueDateTime": "1970-01-01T00:00:00Z"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Transaction|[[OBTransaction6](#schemaobtransaction6)]|false|none|Provides further details on an entry in the report.|

<h2 id="tocS_OBReadParty2">OBReadParty2</h2>
<!-- backwards compatibility -->
<a id="schemaobreadparty2"></a>
<a id="schema_OBReadParty2"></a>
<a id="tocSobreadparty2"></a>
<a id="tocsobreadparty2"></a>

```json
{
  "Data": {
    "Party": {
      "Name": "string",
      "PartyId": "string"
    }
  },
  "Links": {
    "First": "string",
    "Last": "string",
    "Next": "string",
    "Prev": "string",
    "Self": "string"
  },
  "Meta": {
    "FirstAvailableDateTime": "string",
    "LastAvailableDateTime": "string",
    "TotalPages": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|[OBReadDataParty2](#schemaobreaddataparty2)|true|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

<h2 id="tocS_OBReadParty3">OBReadParty3</h2>
<!-- backwards compatibility -->
<a id="schemaobreadparty3"></a>
<a id="schema_OBReadParty3"></a>
<a id="tocSobreadparty3"></a>
<a id="tocsobreadparty3"></a>

```json
{
  "Data": {
    "Party": [
      {
        "Name": "string",
        "PartyId": "string"
      }
    ]
  },
  "Links": {
    "First": "string",
    "Last": "string",
    "Next": "string",
    "Prev": "string",
    "Self": "string"
  },
  "Meta": {
    "FirstAvailableDateTime": "string",
    "LastAvailableDateTime": "string",
    "TotalPages": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|[OBReadDataParty3](#schemaobreaddataparty3)|true|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

<h2 id="tocS_OBReadScheduledPayment3">OBReadScheduledPayment3</h2>
<!-- backwards compatibility -->
<a id="schemaobreadscheduledpayment3"></a>
<a id="schema_OBReadScheduledPayment3"></a>
<a id="tocSobreadscheduledpayment3"></a>
<a id="tocsobreadscheduledpayment3"></a>

```json
{
  "Data": {
    "ScheduledPayment": [
      {
        "AccountId": "string",
        "CreditorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "[ \"UK.OBIE.BBAN\", \"UK.OBIE.IBAN\", \"UK.OBIE.PAN\", \"UK.OBIE.Paym\", \"UK.OBIE.SortCodeAccountNumber\" ]",
          "SecondaryIdentification": "string"
        },
        "DebtorReference": "string",
        "InstructedAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "Reference": "string",
        "ScheduledPaymentDateTime": "1970-01-01T00:00:00Z",
        "ScheduledPaymentId": "string",
        "ScheduledType": "Arrival"
      }
    ]
  },
  "Links": {
    "First": "string",
    "Last": "string",
    "Next": "string",
    "Prev": "string",
    "Self": "string"
  },
  "Meta": {
    "FirstAvailableDateTime": "string",
    "LastAvailableDateTime": "string",
    "TotalPages": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|[OBReadDataScheduledPayment3](#schemaobreaddatascheduledpayment3)|true|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

<h2 id="tocS_OBReadStandingOrder6">OBReadStandingOrder6</h2>
<!-- backwards compatibility -->
<a id="schemaobreadstandingorder6"></a>
<a id="schema_OBReadStandingOrder6"></a>
<a id="tocSobreadstandingorder6"></a>
<a id="tocsobreadstandingorder6"></a>

```json
{
  "Data": {
    "StandingOrder": [
      {
        "AccountId": "string",
        "CreditorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "[ \"UK.OBIE.BBAN\", \"UK.OBIE.IBAN\", \"UK.OBIE.PAN\", \"UK.OBIE.Paym\", \"UK.OBIE.SortCodeAccountNumber\" ]",
          "SecondaryIdentification": "string"
        },
        "FinalPaymentAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "FinalPaymentDateTime": "1970-01-01T00:00:00Z",
        "FirstPaymentAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "FirstPaymentDateTime": "1970-01-01T00:00:00Z",
        "Frequency": "string",
        "LastPaymentAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "LastPaymentDateTime": "1970-01-01T00:00:00Z",
        "NextPaymentAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "NextPaymentDateTime": "1970-01-01T00:00:00Z",
        "Reference": "string",
        "StandingOrderId": "string",
        "StandingOrderStatusCode": "Active"
      }
    ]
  },
  "Links": {
    "First": "string",
    "Last": "string",
    "Next": "string",
    "Prev": "string",
    "Self": "string"
  },
  "Meta": {
    "FirstAvailableDateTime": "string",
    "LastAvailableDateTime": "string",
    "TotalPages": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|[OBReadDataStandingOrder5](#schemaobreaddatastandingorder5)|true|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

<h2 id="tocS_OBReadStatement2">OBReadStatement2</h2>
<!-- backwards compatibility -->
<a id="schemaobreadstatement2"></a>
<a id="schema_OBReadStatement2"></a>
<a id="tocSobreadstatement2"></a>
<a id="tocsobreadstatement2"></a>

```json
{
  "Data": {
    "Statement": [
      {
        "AccountId": "string",
        "CreationDateTime": "1970-01-01T00:00:00Z",
        "EndDateTime": "1970-01-01T00:00:00Z",
        "StartDateTime": "1970-01-01T00:00:00Z",
        "StatementId": "string",
        "StatementReference": "string",
        "Type": "AccountClosure"
      }
    ]
  },
  "Links": {
    "First": "string",
    "Last": "string",
    "Next": "string",
    "Prev": "string",
    "Self": "string"
  },
  "Meta": {
    "FirstAvailableDateTime": "string",
    "LastAvailableDateTime": "string",
    "TotalPages": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|[OBReadDataStatement2](#schemaobreaddatastatement2)|true|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

<h2 id="tocS_OBReadTransaction6">OBReadTransaction6</h2>
<!-- backwards compatibility -->
<a id="schemaobreadtransaction6"></a>
<a id="schema_OBReadTransaction6"></a>
<a id="tocSobreadtransaction6"></a>
<a id="tocsobreadtransaction6"></a>

```json
{
  "Data": {
    "Transaction": [
      {
        "AccountId": "string",
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "Balance": {
          "Amount": {
            "Amount": "string",
            "Currency": "string"
          },
          "CreditDebitIndicator": "Credit",
          "Type": "ClosingAvailable"
        },
        "BookingDateTime": "1970-01-01T00:00:00Z",
        "CreditDebitIndicator": "Credit",
        "CreditorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "[ \"UK.OBIE.BBAN\", \"UK.OBIE.IBAN\", \"UK.OBIE.PAN\", \"UK.OBIE.Paym\", \"UK.OBIE.SortCodeAccountNumber\" ]"
        },
        "DebtorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "[ \"UK.OBIE.BBAN\", \"UK.OBIE.IBAN\", \"UK.OBIE.PAN\", \"UK.OBIE.Paym\", \"UK.OBIE.SortCodeAccountNumber\" ]"
        },
        "ProprietaryBankTransactionCode": {
          "Code": "string",
          "Issuer": "string"
        },
        "Status": "Booked",
        "TransactionInformation": "string",
        "TransactionReference": "string",
        "ValueDateTime": "1970-01-01T00:00:00Z"
      }
    ]
  },
  "Links": {
    "First": "string",
    "Last": "string",
    "Next": "string",
    "Prev": "string",
    "Self": "string"
  },
  "Meta": {
    "FirstAvailableDateTime": "string",
    "LastAvailableDateTime": "string",
    "TotalPages": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|[OBReadDataTransaction6](#schemaobreaddatatransaction6)|true|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

<h2 id="tocS_OBRisk2">OBRisk2</h2>
<!-- backwards compatibility -->
<a id="schemaobrisk2"></a>
<a id="schema_OBRisk2"></a>
<a id="tocSobrisk2"></a>
<a id="tocsobrisk2"></a>

```json
{}
```

The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Account Info.

<h2 id="tocS_OBScheduledPayment3">OBScheduledPayment3</h2>
<!-- backwards compatibility -->
<a id="schemaobscheduledpayment3"></a>
<a id="schema_OBScheduledPayment3"></a>
<a id="tocSobscheduledpayment3"></a>
<a id="tocsobscheduledpayment3"></a>

```json
{
  "AccountId": "string",
  "CreditorAccount": {
    "Identification": "string",
    "Name": "string",
    "SchemeName": "[ \"UK.OBIE.BBAN\", \"UK.OBIE.IBAN\", \"UK.OBIE.PAN\", \"UK.OBIE.Paym\", \"UK.OBIE.SortCodeAccountNumber\" ]",
    "SecondaryIdentification": "string"
  },
  "DebtorReference": "string",
  "InstructedAmount": {
    "Amount": "string",
    "Currency": "string"
  },
  "Reference": "string",
  "ScheduledPaymentDateTime": "1970-01-01T00:00:00Z",
  "ScheduledPaymentId": "string",
  "ScheduledType": "Arrival"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|string|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|CreditorAccount|[OBCashAccount5](#schemaobcashaccount5)|false|none|none|
|DebtorReference|string \| null|false|none|A reference value provided by the PSU to the PISP while setting up the scheduled payment.|
|InstructedAmount|[OBActiveOrHistoricCurrencyAndAmount](#schemaobactiveorhistoriccurrencyandamount)|true|none|none|
|Reference|string \| null|false|none|Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.<br>Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.<br>If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.|
|ScheduledPaymentDateTime|string(date-time)|true|none|The date on which the scheduled payment will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.<br>All date-time fields in responses must include the timezone.An example is below:<br>2017-04-05T10:43:07+00:00|
|ScheduledPaymentId|string \| null|false|none|A unique and immutable identifier used to identify the scheduled payment resource. This identifier has no meaning to the account owner.|
|ScheduledType|[OBExternalScheduleType1Code](#schemaobexternalscheduletype1code)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ScheduledType|Arrival|
|ScheduledType|Execution|

<h2 id="tocS_OBStandingOrder5">OBStandingOrder5</h2>
<!-- backwards compatibility -->
<a id="schemaobstandingorder5"></a>
<a id="schema_OBStandingOrder5"></a>
<a id="tocSobstandingorder5"></a>
<a id="tocsobstandingorder5"></a>

```json
{
  "AccountId": "string",
  "CreditorAccount": {
    "Identification": "string",
    "Name": "string",
    "SchemeName": "[ \"UK.OBIE.BBAN\", \"UK.OBIE.IBAN\", \"UK.OBIE.PAN\", \"UK.OBIE.Paym\", \"UK.OBIE.SortCodeAccountNumber\" ]",
    "SecondaryIdentification": "string"
  },
  "FinalPaymentAmount": {
    "Amount": "string",
    "Currency": "string"
  },
  "FinalPaymentDateTime": "1970-01-01T00:00:00Z",
  "FirstPaymentAmount": {
    "Amount": "string",
    "Currency": "string"
  },
  "FirstPaymentDateTime": "1970-01-01T00:00:00Z",
  "Frequency": "string",
  "LastPaymentAmount": {
    "Amount": "string",
    "Currency": "string"
  },
  "LastPaymentDateTime": "1970-01-01T00:00:00Z",
  "NextPaymentAmount": {
    "Amount": "string",
    "Currency": "string"
  },
  "NextPaymentDateTime": "1970-01-01T00:00:00Z",
  "Reference": "string",
  "StandingOrderId": "string",
  "StandingOrderStatusCode": "Active"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|string|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|CreditorAccount|[OBCashAccount5](#schemaobcashaccount5)|false|none|none|
|FinalPaymentAmount|[OBActiveOrHistoricCurrencyAndAmount](#schemaobactiveorhistoriccurrencyandamount)|false|none|none|
|FinalPaymentDateTime|string(date-time) \| null|false|none|The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.<br>All date-time fields in responses must include the timezone.An example is below:<br>2017-04-05T10:43:07+00:00|
|FirstPaymentAmount|[OBActiveOrHistoricCurrencyAndAmount](#schemaobactiveorhistoriccurrencyandamount)|false|none|none|
|FirstPaymentDateTime|string(date-time) \| null|false|none|The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.<br>All date-time fields in responses must include the timezone.An example is below:<br>2017-04-05T10:43:07+00:00|
|Frequency|string|true|none|Individual Definitions:<br>IntrvlMnthDay - An interval specified in months(between 01, 02, 03, 04, 06, 12, 24), specifying the day within the month(01 to 31)<br>Full Regular Expression:<br>^(IntrvlMnthDay:(0[1,2,3,4,6]\|12\|24):(0[1-9]\|[12] [0-9]\|3[01]))$|
|LastPaymentAmount|[OBActiveOrHistoricCurrencyAndAmount](#schemaobactiveorhistoriccurrencyandamount)|false|none|none|
|LastPaymentDateTime|string(date-time) \| null|false|none|The date on which the last (most recent) payment for a Standing Order schedule was made.All dates in the JSON payloads are represented in ISO 8601 date-time format.<br>All date-time fields in responses must include the timezone.An example is below:<br>2017-04-05T10:43:07+00:00|
|NextPaymentAmount|[OBActiveOrHistoricCurrencyAndAmount](#schemaobactiveorhistoriccurrencyandamount)|false|none|none|
|NextPaymentDateTime|string(date-time) \| null|false|none|The date on which the next payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.<br>All date-time fields in responses must include the timezone.An example is below:<br>2017-04-05T10:43:07+00:00|
|Reference|string \| null|false|none|Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.<br>Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.<br>If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.|
|StandingOrderId|string \| null|false|none|A unique and immutable identifier used to identify the standing order resource. This identifier has no meaning to the account owner.|
|StandingOrderStatusCode|[OBExternalStandingOrderStatus1Code](#schemaobexternalstandingorderstatus1code)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|StandingOrderStatusCode|Active|
|StandingOrderStatusCode|Inactive|

<h2 id="tocS_OBStatement2">OBStatement2</h2>
<!-- backwards compatibility -->
<a id="schemaobstatement2"></a>
<a id="schema_OBStatement2"></a>
<a id="tocSobstatement2"></a>
<a id="tocsobstatement2"></a>

```json
{
  "AccountId": "string",
  "CreationDateTime": "1970-01-01T00:00:00Z",
  "EndDateTime": "1970-01-01T00:00:00Z",
  "StartDateTime": "1970-01-01T00:00:00Z",
  "StatementId": "string",
  "StatementReference": "string",
  "Type": "AccountClosure"
}
```

Provides further details on a statement resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|string|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|CreationDateTime|string(date-time)|true|none|Date and time at which the statement period starts.All dates in the JSON payloads are represented in ISO 8601 date-time format.<br>All date-time fields in responses must include the timezone.An example is below:<br>2017-04-05T10:43:07+00:00|
|EndDateTime|string(date-time)|true|none|Date and time at which the statement period starts.All dates in the JSON payloads are represented in ISO 8601 date-time format.<br>All date-time fields in responses must include the timezone.An example is below:<br>2017-04-05T10:43:07+00:00|
|StartDateTime|string(date-time)|true|none|Date and time at which the statement period starts.All dates in the JSON payloads are represented in ISO 8601 date-time format.<br>All date-time fields in responses must include the timezone.An example is below:<br>2017-04-05T10:43:07+00:00|
|StatementId|string \| null|false|none|Unique identifier for the statement resource within an servicing institution. This identifier is both unique and immutable.|
|StatementReference|string \| null|false|none|Unique reference for the statement. This reference may be optionally populated if available.|
|Type|[OBExternalStatementType1Code](#schemaobexternalstatementtype1code)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Type|AccountClosure|
|Type|AccountOpening|
|Type|Annual|
|Type|Interim|
|Type|RegularPeriodic|

<h2 id="tocS_OBTransaction6">OBTransaction6</h2>
<!-- backwards compatibility -->
<a id="schemaobtransaction6"></a>
<a id="schema_OBTransaction6"></a>
<a id="tocSobtransaction6"></a>
<a id="tocsobtransaction6"></a>

```json
{
  "AccountId": "string",
  "Amount": {
    "Amount": "string",
    "Currency": "string"
  },
  "Balance": {
    "Amount": {
      "Amount": "string",
      "Currency": "string"
    },
    "CreditDebitIndicator": "Credit",
    "Type": "ClosingAvailable"
  },
  "BookingDateTime": "1970-01-01T00:00:00Z",
  "CreditDebitIndicator": "Credit",
  "CreditorAccount": {
    "Identification": "string",
    "Name": "string",
    "SchemeName": "[ \"UK.OBIE.BBAN\", \"UK.OBIE.IBAN\", \"UK.OBIE.PAN\", \"UK.OBIE.Paym\", \"UK.OBIE.SortCodeAccountNumber\" ]"
  },
  "DebtorAccount": {
    "Identification": "string",
    "Name": "string",
    "SchemeName": "[ \"UK.OBIE.BBAN\", \"UK.OBIE.IBAN\", \"UK.OBIE.PAN\", \"UK.OBIE.Paym\", \"UK.OBIE.SortCodeAccountNumber\" ]"
  },
  "ProprietaryBankTransactionCode": {
    "Code": "string",
    "Issuer": "string"
  },
  "Status": "Booked",
  "TransactionInformation": "string",
  "TransactionReference": "string",
  "ValueDateTime": "1970-01-01T00:00:00Z"
}
```

Provides further details on an entry in the report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|string|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|Amount|[OBActiveOrHistoricCurrencyAndAmount](#schemaobactiveorhistoriccurrencyandamount)|true|none|none|
|Balance|[OBTransactionCashBalance](#schemaobtransactioncashbalance)|false|none|Set of elements used to define the balance as a numerical representation of the net increases and decreases in an account after a transaction entry is applied to the account.|
|BookingDateTime|string(date-time)|true|none|Date and time when a transaction entry is posted to an account on the account servicer's books.<br>Usage: Booking date is the expected booking date, unless the status is booked, in which case it is the actual booking date.All dates in the JSON payloads are represented in ISO 8601 date-time format.<br>All date-time fields in responses must include the timezone.An example is below:<br>2017-04-05T10:43:07+00:00|
|CreditDebitIndicator|[OBCreditDebitCode](#schemaobcreditdebitcode)|true|none|none|
|CreditorAccount|[OBCashAccount6](#schemaobcashaccount6)|false|none|Unambiguous identification of the account of the creditor, in the case of a debit transaction.|
|DebtorAccount|[OBCashAccount6](#schemaobcashaccount6)|false|none|Unambiguous identification of the account of the creditor, in the case of a debit transaction.|
|ProprietaryBankTransactionCode|[ProprietaryBankTransactionCodeStructure1](#schemaproprietarybanktransactioncodestructure1)|false|none|Set of elements to fully identify a proprietary bank transaction code.|
|Status|[OBEntryStatus1Code](#schemaobentrystatus1code)|true|none|none|
|TransactionInformation|string \| null|false|none|Further details of the transaction.<br>This is the transaction narrative, which is unstructured text.|
|TransactionReference|string \| null|false|none|Unique reference for the transaction. This reference is optionally populated, and may as an example be the FPID in the Faster Payments context.|
|ValueDateTime|string(date-time) \| null|false|none|Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry.<br>Usage: If transaction entry status is pending and value date is present, then the value date refers to an expected/requested value date.<br>For transaction entries subject to availability/float and for which availability information is provided, the value date must not be used.In this case the availability component identifies the number of availability days.All dates in the JSON payloads are represented in ISO 8601 date-time format.<br>All date-time fields in responses must include the timezone.An example is below:<br>2017-04-05T10:43:07+00:00|

#### Enumerated Values

|Property|Value|
|---|---|
|CreditDebitIndicator|Credit|
|CreditDebitIndicator|Debit|
|Status|Booked|
|Status|Pending|

<h2 id="tocS_OBTransactionCashBalance">OBTransactionCashBalance</h2>
<!-- backwards compatibility -->
<a id="schemaobtransactioncashbalance"></a>
<a id="schema_OBTransactionCashBalance"></a>
<a id="tocSobtransactioncashbalance"></a>
<a id="tocsobtransactioncashbalance"></a>

```json
{
  "Amount": {
    "Amount": "string",
    "Currency": "string"
  },
  "CreditDebitIndicator": "Credit",
  "Type": "ClosingAvailable"
}
```

Set of elements used to define the balance as a numerical representation of the net increases and decreases in an account after a transaction entry is applied to the account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amount|[OBActiveOrHistoricCurrencyAndAmount](#schemaobactiveorhistoriccurrencyandamount)|true|none|none|
|CreditDebitIndicator|[OBCreditDebitCode](#schemaobcreditdebitcode)|true|none|none|
|Type|[OBBalanceType1Code](#schemaobbalancetype1code)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|CreditDebitIndicator|Credit|
|CreditDebitIndicator|Debit|
|Type|ClosingAvailable|
|Type|ClosingBooked|
|Type|ClosingCleared|
|Type|Expected|
|Type|ForwardAvailable|
|Type|Information|
|Type|InterimAvailable|
|Type|InterimBooked|
|Type|InterimCleared|
|Type|OpeningAvailable|
|Type|OpeningBooked|
|Type|OpeningCleared|
|Type|PreviouslyClosedBooked|

<h2 id="tocS_ProprietaryBankTransactionCodeStructure1">ProprietaryBankTransactionCodeStructure1</h2>
<!-- backwards compatibility -->
<a id="schemaproprietarybanktransactioncodestructure1"></a>
<a id="schema_ProprietaryBankTransactionCodeStructure1"></a>
<a id="tocSproprietarybanktransactioncodestructure1"></a>
<a id="tocsproprietarybanktransactioncodestructure1"></a>

```json
{
  "Code": "string",
  "Issuer": "string"
}
```

Set of elements to fully identify a proprietary bank transaction code.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|string|true|none|Proprietary bank transaction code to identify the underlying transaction.|
|Issuer|string \| null|false|none|Identification of the issuer of the proprietary bank transaction code.|

<h2 id="tocS_Sandbox">Sandbox</h2>
<!-- backwards compatibility -->
<a id="schemasandbox"></a>
<a id="schema_Sandbox"></a>
<a id="tocSsandbox"></a>
<a id="tocssandbox"></a>

```json
{
  "sandboxId": "string",
  "users": [
    {
      "accounts": [
        {
          "beneficiaries": [
            {
              "name": "string"
            }
          ],
          "info": {
            "accountSubType": "string",
            "accountType": "string",
            "alias": "string",
            "availableBalance": 0,
            "currency": "string",
            "description": "string",
            "iban": "string",
            "ledgerBalance": 0,
            "openingDate": "1970-01-01T00:00:00Z",
            "overdraftLimit": 0
          },
          "party": {
            "id": "string",
            "name": "string"
          },
          "scheduledPayments": [
            {
              "amount": 0,
              "description": "string",
              "executionDate": "1970-01-01T00:00:00Z",
              "senderReference": "string"
            }
          ],
          "standingOrders": [
            {
              "amount": 0,
              "description": "string",
              "finalPaymentDate": "1970-01-01T00:00:00Z",
              "firstPaymentDate": "1970-01-01T00:00:00Z",
              "frequency": "string",
              "lastPaymentDate": "1970-01-01T00:00:00Z",
              "nextPaymentDate": "1970-01-01T00:00:00Z",
              "status": "string"
            }
          ],
          "statements": [
            {
              "month": 0,
              "number": "string",
              "year": 0
            }
          ],
          "transactions": [
            {
              "accountingBalance": 0,
              "amount": 0,
              "bookingDateTime": "1970-01-01T00:00:00Z",
              "creditDebit": "string",
              "currency": "string",
              "description": "string",
              "reference": "string",
              "relatedAccount": "string",
              "relatedName": "string",
              "transactionCode": "string",
              "valueDateTime": "1970-01-01T00:00:00Z"
            }
          ]
        }
      ],
      "cards": [
        {
          "info": {
            "availableBalance": 0,
            "creditLimit": 0,
            "description": "string",
            "expiration": "string",
            "holderName": "string",
            "ledgerBalance": 0,
            "number": "string",
            "subType": "string",
            "type": "string"
          },
          "party": {
            "id": "string",
            "name": "string"
          },
          "statements": [
            {
              "month": 0,
              "number": "string",
              "year": 0
            }
          ],
          "transactions": [
            {
              "accountingBalance": 0,
              "amount": 0,
              "bookingDateTime": "1970-01-01T00:00:00Z",
              "creditDebit": "string",
              "currency": "string",
              "description": "string",
              "reference": "string",
              "relatedAccount": "string",
              "relatedName": "string",
              "transactionCode": "string",
              "valueDateTime": "1970-01-01T00:00:00Z"
            }
          ]
        }
      ],
      "retryCacheEntries": [
        {
          "cacheKey": "string",
          "count": 0,
          "expirationTimestamp": "1970-01-01T00:00:00Z"
        }
      ],
      "userId": "string"
    }
  ]
}
```

Sandbox model

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sandboxId|string|true|none|Sandbox id|
|users|[[SandboxUser](#schemasandboxuser)]|false|none|List of users|

<h2 id="tocS_SandboxBankAccount">SandboxBankAccount</h2>
<!-- backwards compatibility -->
<a id="schemasandboxbankaccount"></a>
<a id="schema_SandboxBankAccount"></a>
<a id="tocSsandboxbankaccount"></a>
<a id="tocssandboxbankaccount"></a>

```json
{
  "beneficiaries": [
    {
      "name": "string"
    }
  ],
  "info": {
    "accountSubType": "string",
    "accountType": "string",
    "alias": "string",
    "availableBalance": 0,
    "currency": "string",
    "description": "string",
    "iban": "string",
    "ledgerBalance": 0,
    "openingDate": "1970-01-01T00:00:00Z",
    "overdraftLimit": 0
  },
  "party": {
    "id": "string",
    "name": "string"
  },
  "scheduledPayments": [
    {
      "amount": 0,
      "description": "string",
      "executionDate": "1970-01-01T00:00:00Z",
      "senderReference": "string"
    }
  ],
  "standingOrders": [
    {
      "amount": 0,
      "description": "string",
      "finalPaymentDate": "1970-01-01T00:00:00Z",
      "firstPaymentDate": "1970-01-01T00:00:00Z",
      "frequency": "string",
      "lastPaymentDate": "1970-01-01T00:00:00Z",
      "nextPaymentDate": "1970-01-01T00:00:00Z",
      "status": "string"
    }
  ],
  "statements": [
    {
      "month": 0,
      "number": "string",
      "year": 0
    }
  ],
  "transactions": [
    {
      "accountingBalance": 0,
      "amount": 0,
      "bookingDateTime": "1970-01-01T00:00:00Z",
      "creditDebit": "string",
      "currency": "string",
      "description": "string",
      "reference": "string",
      "relatedAccount": "string",
      "relatedName": "string",
      "transactionCode": "string",
      "valueDateTime": "1970-01-01T00:00:00Z"
    }
  ]
}
```

Sandbox bank account

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|beneficiaries|[[SandboxBeneficiary](#schemasandboxbeneficiary)]|false|none|List of account's beneficiaries|
|info|[SandboxBankAccountInfo](#schemasandboxbankaccountinfo)|false|none|General account information|
|party|[SandboxParty](#schemasandboxparty)|false|none|Connected party information|
|scheduledPayments|[[SandboxScheduledPayment](#schemasandboxscheduledpayment)]|false|none|List of account's scheduled payments|
|standingOrders|[[SandboxStandingOrder](#schemasandboxstandingorder)]|false|none|List of account's standing orders|
|statements|[[SandboxStatement](#schemasandboxstatement)]|false|none|List of account's statements|
|transactions|[[SandboxTransaction](#schemasandboxtransaction)]|false|none|List of account's transactions|

<h2 id="tocS_SandboxBankAccountInfo">SandboxBankAccountInfo</h2>
<!-- backwards compatibility -->
<a id="schemasandboxbankaccountinfo"></a>
<a id="schema_SandboxBankAccountInfo"></a>
<a id="tocSsandboxbankaccountinfo"></a>
<a id="tocssandboxbankaccountinfo"></a>

```json
{
  "accountSubType": "string",
  "accountType": "string",
  "alias": "string",
  "availableBalance": 0,
  "currency": "string",
  "description": "string",
  "iban": "string",
  "ledgerBalance": 0,
  "openingDate": "1970-01-01T00:00:00Z",
  "overdraftLimit": 0
}
```

General account information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountSubType|string|true|none|Account's sub-type (ChargeCard, CreditCard, CurrentAccount ...)|
|accountType|string|true|none|Account's type (Business, Personal)|
|alias|string \| null|false|none|Account's alias|
|availableBalance|number(double) \| null|false|none|Account's available balance|
|currency|string|true|none|Currency (EUR, USD ...)|
|description|string \| null|false|none|Account's description|
|iban|string|true|none|Account's IBAN|
|ledgerBalance|number(double) \| null|false|none|Account's ledger balance|
|openingDate|string(date-time) \| null|false|none|Account's opening date|
|overdraftLimit|number(double) \| null|false|none|Account's overdraft limit|

<h2 id="tocS_SandboxBeneficiary">SandboxBeneficiary</h2>
<!-- backwards compatibility -->
<a id="schemasandboxbeneficiary"></a>
<a id="schema_SandboxBeneficiary"></a>
<a id="tocSsandboxbeneficiary"></a>
<a id="tocssandboxbeneficiary"></a>

```json
{
  "name": "string"
}
```

Beneficiary information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|Beneficiary name|

<h2 id="tocS_SandboxCard">SandboxCard</h2>
<!-- backwards compatibility -->
<a id="schemasandboxcard"></a>
<a id="schema_SandboxCard"></a>
<a id="tocSsandboxcard"></a>
<a id="tocssandboxcard"></a>

```json
{
  "info": {
    "availableBalance": 0,
    "creditLimit": 0,
    "description": "string",
    "expiration": "string",
    "holderName": "string",
    "ledgerBalance": 0,
    "number": "string",
    "subType": "string",
    "type": "string"
  },
  "party": {
    "id": "string",
    "name": "string"
  },
  "statements": [
    {
      "month": 0,
      "number": "string",
      "year": 0
    }
  ],
  "transactions": [
    {
      "accountingBalance": 0,
      "amount": 0,
      "bookingDateTime": "1970-01-01T00:00:00Z",
      "creditDebit": "string",
      "currency": "string",
      "description": "string",
      "reference": "string",
      "relatedAccount": "string",
      "relatedName": "string",
      "transactionCode": "string",
      "valueDateTime": "1970-01-01T00:00:00Z"
    }
  ]
}
```

Sandbox card

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|info|[SandboxCardInfo](#schemasandboxcardinfo)|false|none|Sandbox card information|
|party|[SandboxParty](#schemasandboxparty)|false|none|Connected party information|
|statements|[[SandboxStatement](#schemasandboxstatement)]|false|none|Card statements|
|transactions|[[SandboxTransaction](#schemasandboxtransaction)]|false|none|Card transactions|

<h2 id="tocS_SandboxCardInfo">SandboxCardInfo</h2>
<!-- backwards compatibility -->
<a id="schemasandboxcardinfo"></a>
<a id="schema_SandboxCardInfo"></a>
<a id="tocSsandboxcardinfo"></a>
<a id="tocssandboxcardinfo"></a>

```json
{
  "availableBalance": 0,
  "creditLimit": 0,
  "description": "string",
  "expiration": "string",
  "holderName": "string",
  "ledgerBalance": 0,
  "number": "string",
  "subType": "string",
  "type": "string"
}
```

Sandbox card information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availableBalance|number(double) \| null|false|none|Available balance|
|creditLimit|number(double) \| null|false|none|Credit limit ( applicable to credit cards )|
|description|string \| null|false|none|Description|
|expiration|string|true|none|Expiration date (05/2022)|
|holderName|string|true|none|Holder name|
|ledgerBalance|number(double) \| null|false|none|Ledger balance|
|number|string|true|none|Card number|
|subType|string \| null|false|none|Sub type|
|type|string \| null|false|none|Type|

<h2 id="tocS_SandboxParty">SandboxParty</h2>
<!-- backwards compatibility -->
<a id="schemasandboxparty"></a>
<a id="schema_SandboxParty"></a>
<a id="tocSsandboxparty"></a>
<a id="tocssandboxparty"></a>

```json
{
  "id": "string",
  "name": "string"
}
```

Connected party information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string \| null|false|none|Party id|
|name|string \| null|false|none|Name|

<h2 id="tocS_SandboxRequest">SandboxRequest</h2>
<!-- backwards compatibility -->
<a id="schemasandboxrequest"></a>
<a id="schema_SandboxRequest"></a>
<a id="tocSsandboxrequest"></a>
<a id="tocssandboxrequest"></a>

```json
{
  "sandboxId": "string"
}
```

Request to create a new sandbox

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sandboxId|string|true|none|Sandbox Id|

<h2 id="tocS_SandboxRetryCacheEntry">SandboxRetryCacheEntry</h2>
<!-- backwards compatibility -->
<a id="schemasandboxretrycacheentry"></a>
<a id="schema_SandboxRetryCacheEntry"></a>
<a id="tocSsandboxretrycacheentry"></a>
<a id="tocssandboxretrycacheentry"></a>

```json
{
  "cacheKey": "string",
  "count": 0,
  "expirationTimestamp": "1970-01-01T00:00:00Z"
}
```

Keeps the number of calls without x-fapi-customer-ip-address header present

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cacheKey|string \| null|false|none|Cache key|
|count|integer(int32)|false|none|Number of retries ( up to 4 )|
|expirationTimestamp|string(date-time)|false|none|Expiration timestamp of the entry|

<h2 id="tocS_SandboxScheduledPayment">SandboxScheduledPayment</h2>
<!-- backwards compatibility -->
<a id="schemasandboxscheduledpayment"></a>
<a id="schema_SandboxScheduledPayment"></a>
<a id="tocSsandboxscheduledpayment"></a>
<a id="tocssandboxscheduledpayment"></a>

```json
{
  "amount": 0,
  "description": "string",
  "executionDate": "1970-01-01T00:00:00Z",
  "senderReference": "string"
}
```

Scheduled payment information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number(double)|false|none|Amount|
|description|string \| null|false|none|Scheduled payment's short description|
|executionDate|string(date-time) \| null|false|none|Scheduled payment's execution date|
|senderReference|string \| null|false|none|Debtor / Sender reference|

<h2 id="tocS_SandboxStandingOrder">SandboxStandingOrder</h2>
<!-- backwards compatibility -->
<a id="schemasandboxstandingorder"></a>
<a id="schema_SandboxStandingOrder"></a>
<a id="tocSsandboxstandingorder"></a>
<a id="tocssandboxstandingorder"></a>

```json
{
  "amount": 0,
  "description": "string",
  "finalPaymentDate": "1970-01-01T00:00:00Z",
  "firstPaymentDate": "1970-01-01T00:00:00Z",
  "frequency": "string",
  "lastPaymentDate": "1970-01-01T00:00:00Z",
  "nextPaymentDate": "1970-01-01T00:00:00Z",
  "status": "string"
}
```

Standing order information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number(double)|false|none|Standing order amount|
|description|string \| null|false|none|Standing order short description|
|finalPaymentDate|string(date-time) \| null|false|none|Standing order final collection date|
|firstPaymentDate|string(date-time) \| null|false|none|Standing order first collection date|
|frequency|string|true|none|Standing order frequency|
|lastPaymentDate|string(date-time) \| null|false|none|Standing order last executed payment date|
|nextPaymentDate|string(date-time) \| null|false|none|Standing order next collection date|
|status|string \| null|false|none|Standing order status (Active, Inactive)|

<h2 id="tocS_SandboxStatement">SandboxStatement</h2>
<!-- backwards compatibility -->
<a id="schemasandboxstatement"></a>
<a id="schema_SandboxStatement"></a>
<a id="tocSsandboxstatement"></a>
<a id="tocssandboxstatement"></a>

```json
{
  "month": 0,
  "number": "string",
  "year": 0
}
```

Statement information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|month|integer(int32)|false|none|Statement month|
|number|string \| null|false|none|Statement number|
|year|integer(int32)|false|none|Statement year|

<h2 id="tocS_SandboxTransaction">SandboxTransaction</h2>
<!-- backwards compatibility -->
<a id="schemasandboxtransaction"></a>
<a id="schema_SandboxTransaction"></a>
<a id="tocSsandboxtransaction"></a>
<a id="tocssandboxtransaction"></a>

```json
{
  "accountingBalance": 0,
  "amount": 0,
  "bookingDateTime": "1970-01-01T00:00:00Z",
  "creditDebit": "string",
  "currency": "string",
  "description": "string",
  "reference": "string",
  "relatedAccount": "string",
  "relatedName": "string",
  "transactionCode": "string",
  "valueDateTime": "1970-01-01T00:00:00Z"
}
```

Transaction information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountingBalance|number(double)|false|none|Balance|
|amount|number(double)|false|none|Amount|
|bookingDateTime|string(date-time)|false|none|Booking date time|
|creditDebit|string \| null|false|none|Credit / Debit indicator|
|currency|string \| null|false|none|Currency (EUR, USD ...)|
|description|string \| null|false|none|Description|
|reference|string \| null|false|none|Transaction reference|
|relatedAccount|string \| null|false|none|Related account|
|relatedName|string \| null|false|none|Related account|
|transactionCode|string \| null|false|none|Transaction code|
|valueDateTime|string(date-time) \| null|false|none|Valeur|

<h2 id="tocS_SandboxUser">SandboxUser</h2>
<!-- backwards compatibility -->
<a id="schemasandboxuser"></a>
<a id="schema_SandboxUser"></a>
<a id="tocSsandboxuser"></a>
<a id="tocssandboxuser"></a>

```json
{
  "accounts": [
    {
      "beneficiaries": [
        {
          "name": "string"
        }
      ],
      "info": {
        "accountSubType": "string",
        "accountType": "string",
        "alias": "string",
        "availableBalance": 0,
        "currency": "string",
        "description": "string",
        "iban": "string",
        "ledgerBalance": 0,
        "openingDate": "1970-01-01T00:00:00Z",
        "overdraftLimit": 0
      },
      "party": {
        "id": "string",
        "name": "string"
      },
      "scheduledPayments": [
        {
          "amount": 0,
          "description": "string",
          "executionDate": "1970-01-01T00:00:00Z",
          "senderReference": "string"
        }
      ],
      "standingOrders": [
        {
          "amount": 0,
          "description": "string",
          "finalPaymentDate": "1970-01-01T00:00:00Z",
          "firstPaymentDate": "1970-01-01T00:00:00Z",
          "frequency": "string",
          "lastPaymentDate": "1970-01-01T00:00:00Z",
          "nextPaymentDate": "1970-01-01T00:00:00Z",
          "status": "string"
        }
      ],
      "statements": [
        {
          "month": 0,
          "number": "string",
          "year": 0
        }
      ],
      "transactions": [
        {
          "accountingBalance": 0,
          "amount": 0,
          "bookingDateTime": "1970-01-01T00:00:00Z",
          "creditDebit": "string",
          "currency": "string",
          "description": "string",
          "reference": "string",
          "relatedAccount": "string",
          "relatedName": "string",
          "transactionCode": "string",
          "valueDateTime": "1970-01-01T00:00:00Z"
        }
      ]
    }
  ],
  "cards": [
    {
      "info": {
        "availableBalance": 0,
        "creditLimit": 0,
        "description": "string",
        "expiration": "string",
        "holderName": "string",
        "ledgerBalance": 0,
        "number": "string",
        "subType": "string",
        "type": "string"
      },
      "party": {
        "id": "string",
        "name": "string"
      },
      "statements": [
        {
          "month": 0,
          "number": "string",
          "year": 0
        }
      ],
      "transactions": [
        {
          "accountingBalance": 0,
          "amount": 0,
          "bookingDateTime": "1970-01-01T00:00:00Z",
          "creditDebit": "string",
          "currency": "string",
          "description": "string",
          "reference": "string",
          "relatedAccount": "string",
          "relatedName": "string",
          "transactionCode": "string",
          "valueDateTime": "1970-01-01T00:00:00Z"
        }
      ]
    }
  ],
  "retryCacheEntries": [
    {
      "cacheKey": "string",
      "count": 0,
      "expirationTimestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "userId": "string"
}
```

User data

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accounts|[[SandboxBankAccount](#schemasandboxbankaccount)]|false|none|List of accounts|
|cards|[[SandboxCard](#schemasandboxcard)]|false|none|List of cards|
|retryCacheEntries|[[SandboxRetryCacheEntry](#schemasandboxretrycacheentry)]|false|none|Retry cache entries|
|userId|string \| null|false|none|Connected user id|
