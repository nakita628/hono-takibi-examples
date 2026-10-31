<h1 id="bc-data-catalogue-api">BC Data Catalogue API v3.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This API provides live access to the BC Data Catalogue. Further documentation on the API is available from http://docs.ckan.org/en/latest/ Confirm the version of the API available from the catalogue by requesting https://catalogue.data.gov.bc.ca/api/3/action/status_show. 

Please note that you may experience issues when submitting requests to the delivery or test environment if using this [OpenAPI specification](https://github.com/bcgov/api-specs) in other API console viewers.

Base URLs:

* <a href="https://catalogue.data.gov.bc.ca/api/3">https://catalogue.data.gov.bc.ca/api/3</a> - Production

* <a href="https://cat.data.gov.bc.ca/api/3">https://cat.data.gov.bc.ca/api/3</a> - Test

* <a href="https://cad.data.gov.bc.ca/api/3">https://cad.data.gov.bc.ca/api/3</a> - Delivery

<a href="https://www2.gov.bc.ca/gov/content?id=D1EE0A405E584363B205CD4353E02C88">Terms of service</a>
Email: <a href="mailto:data@gov.bc.ca">Data BC</a> 
Web: <a href="http://data.gov.bc.ca/">Data BC</a> 
License: <a href="https://www2.gov.bc.ca/gov/content?id=A519A56BC2BF44E4A008B33FCF527F61">Open Government License - British Columbia</a>

# Authentication

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://github.com/login/oauth/authorize](https://github.com/login/oauth/authorize)
    - Token URL = [https://github.com/login/oauth/access_token](https://github.com/login/oauth/access_token)

|Scope|Scope Description|
|---|---|
|admin:org|Fully manage organization, teams, and memberships.|
|admin:public_key|Fully manage public keys.|
|admin:repo_hook|Grants read, write, ping, and delete access to hooks in public or private repositories.|
|delete_repo|Grants access to delete adminable repositories.|
|gist|Grants write access to gists.|
|notifications|Grants read access to a user's notifications. repo also provides this access.|
|public_repo|Grants read/write access to code, commit statuses, and deployment statuses for public repositories and organizations.|
|read:org|Read-only access to organization, teams, and membership.|
|read:public_key|List and view details for public keys.|
|read:repo_hook|Grants read and ping access to hooks in public or private repositories.|
|repo|Grants read/write access to code, commit statuses, and deployment statuses for public and private repositories and organizations.|
|repo:status|Grants read/write access to public and private repository commit statuses. This scope is only necessary to grant other users or services access to private repository commit statuses without granting access to the code.|
|repo_deployment|Grants access to deployment statuses for public and private repositories. This scope is only necessary to grant other users or services access to deployment statuses, without granting access to the code.|
|user|Grants read/write access to profile info only. Note that this scope includes user:email and user:follow.|
|user:email|Grants read access to a user's email addresses.|
|user:follow|Grants access to follow or unfollow other users.|
|write:org|Publicize and unpublicize organization membership.|
|write:public_key|Create, list, and view details for public keys.|
|write:repo_hook|Grants read, write, and ping access to hooks in public or private repositories.|

* API Key (internalApiKey)
    - Parameter Name: **ckan_api_key**, in: header.

<h1 id="bc-data-catalogue-api-action">action</h1>

CKAN's Action API is a powerful, RPC-style API that exposes all of CKAN's core features to API clients.

<a href="http://docs.ckan.org/en/ckan-2.5.3/api/index.html">Find out more</a>

## Get the activity stream of an organization

> Code samples

```bash
curl https://example.com/action/organization_activity_list \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /action/organization_activity_list`

Return an organization's activity stream

<h3 id="get-the-activity-stream-of-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|The id or name of the organization|

<h3 id="get-the-activity-stream-of-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of an organization's activities|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
githubAccessCode ( Scopes: user user:email user:follow public_repo repo repo_deployment repo:status delete_repo notifications gist read:repo_hook write:repo_hook admin:repo_hook read:org write:org admin:org read:public_key write:public_key admin:public_key ), internalApiKey
</aside>

## Get the activity stream of an organization, HTML format

> Code samples

```bash
curl https://example.com/action/organization_activity_list_html \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /action/organization_activity_list_html`

Return an organization's activity stream as HTML

<h3 id="get-the-activity-stream-of-an-organization-html-format-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|The id or name of the organization|

<h3 id="get-the-activity-stream-of-an-organization-html-format-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of an organization's activities in HTML|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
githubAccessCode ( Scopes: user user:email user:follow public_repo repo repo_deployment repo:status delete_repo notifications gist read:repo_hook write:repo_hook admin:repo_hook read:org write:org admin:org read:public_key write:public_key admin:public_key ), internalApiKey
</aside>

## Get names of organizations that match a query string

> Code samples

```bash
curl https://example.com/action/organization_autocomplete \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /action/organization_autocomplete`

Return a list of organization names that contain a string

<h3 id="get-names-of-organizations-that-match-a-query-string-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|false|The string to search for|
|limit|query|integer|false|The maximum number of organizations to return (optional)|

<h3 id="get-names-of-organizations-that-match-a-query-string-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of organizations|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
githubAccessCode ( Scopes: user user:email user:follow public_repo repo repo_deployment repo:status delete_repo notifications gist read:repo_hook write:repo_hook admin:repo_hook read:org write:org admin:org read:public_key write:public_key admin:public_key ), internalApiKey
</aside>

## Get number of followers of an organization

> Code samples

```bash
curl https://example.com/action/organization_follower_count \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /action/organization_follower_count`

Return the number of followers of an organization

<h3 id="get-number-of-followers-of-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|The id or name of the organization|

<h3 id="get-number-of-followers-of-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Count of organization followers|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
githubAccessCode ( Scopes: user user:email user:follow public_repo repo repo_deployment repo:status delete_repo notifications gist read:repo_hook write:repo_hook admin:repo_hook read:org write:org admin:org read:public_key write:public_key admin:public_key ), internalApiKey
</aside>

## Get users following an organization

> Code samples

```bash
curl https://example.com/action/organization_follower_list \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /action/organization_follower_list`

Return a list of users that are following a given organization

<h3 id="get-users-following-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|The id or name of the organization|

<h3 id="get-users-following-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of organization followers|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
githubAccessCode ( Scopes: user user:email user:follow public_repo repo repo_deployment repo:status delete_repo notifications gist read:repo_hook write:repo_hook admin:repo_hook read:org write:org admin:org read:public_key write:public_key admin:public_key ), internalApiKey
</aside>

## Get names of all organizations

> Code samples

```bash
curl https://example.com/action/organization_list \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /action/organization_list`

Returns the names of all indexed organizations

<h3 id="get-names-of-all-organizations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer|false|The offset (index) of the first organizations to return|
|limit|query|integer|false|The number of organizations to be returned per page|

<h3 id="get-names-of-all-organizations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of organizations|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
githubAccessCode ( Scopes: user user:email user:follow public_repo repo repo_deployment repo:status delete_repo notifications gist read:repo_hook write:repo_hook admin:repo_hook read:org write:org admin:org read:public_key write:public_key admin:public_key ), internalApiKey
</aside>

## Get organizations that a user has a given permission for

> Code samples

```bash
curl https://example.com/action/organization_list_for_user \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /action/organization_list_for_user`

Return the organizations that the user has a given permission for

<h3 id="get-organizations-that-a-user-has-a-given-permission-for-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|permission|query|string|false|The permission the user has against the returned organization|

<h3 id="get-organizations-that-a-user-has-a-given-permission-for-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of organizations for given permission|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
githubAccessCode ( Scopes: user user:email user:follow public_repo repo repo_deployment repo:status delete_repo notifications gist read:repo_hook write:repo_hook admin:repo_hook read:org write:org admin:org read:public_key write:public_key admin:public_key ), internalApiKey
</aside>

## Get organization revisions

> Code samples

```bash
curl https://example.com/action/organization_revision_list \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /action/organization_revision_list`

Return an organization's revisions

<h3 id="get-organization-revisions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|The name or id of the organization|

<h3 id="get-organization-revisions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of an organization's revisions|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
githubAccessCode ( Scopes: user user:email user:follow public_repo repo repo_deployment repo:status delete_repo notifications gist read:repo_hook write:repo_hook admin:repo_hook read:org write:org admin:org read:public_key write:public_key admin:public_key ), internalApiKey
</aside>

## Get details of a specific organization

> Code samples

```bash
curl https://example.com/action/organization_show \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /action/organization_show`

Return the details of an organization

<h3 id="get-details-of-a-specific-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|The id or name of the organization|
|include_datasets|query|boolean|false|include a list of the organization's datasets|

<h3 id="get-details-of-a-specific-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List organization details|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
githubAccessCode ( Scopes: user user:email user:follow public_repo repo repo_deployment repo:status delete_repo notifications gist read:repo_hook write:repo_hook admin:repo_hook read:org write:org admin:org read:public_key write:public_key admin:public_key ), internalApiKey
</aside>

## Get the activity stream of a package (dataset)

> Code samples

```bash
curl https://example.com/action/package_activity_list \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /action/package_activity_list`

Returns a package's activity stream

<h3 id="get-the-activity-stream-of-a-package-dataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|The id or name of the package|
|offset|query|integer|false|Where to start getting activity items from|
|limit|query|integer|false|The maximum number of activities to return|

<h3 id="get-the-activity-stream-of-a-package-dataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of activities|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
githubAccessCode ( Scopes: user user:email user:follow public_repo repo repo_deployment repo:status delete_repo notifications gist read:repo_hook write:repo_hook admin:repo_hook read:org write:org admin:org read:public_key write:public_key admin:public_key ), internalApiKey
</aside>

## Get the activity stream of a package (dataset), HTML format

> Code samples

```bash
curl https://example.com/action/package_activity_list_html \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /action/package_activity_list_html`

The activity stream is rendered as a snippet of HTML meant to be included in an HTML pag, i.e it doesn't have any header or footer.

<h3 id="get-the-activity-stream-of-a-package-dataset-html-format-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|The id or name of the package|
|offset|query|integer|false|Where to start getting activity items from|
|limit|query|integer|false|The maximum number of activities to return|

<h3 id="get-the-activity-stream-of-a-package-dataset-html-format-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of activities rendered as HTML snippet|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
githubAccessCode ( Scopes: user user:email user:follow public_repo repo repo_deployment repo:status delete_repo notifications gist read:repo_hook write:repo_hook admin:repo_hook read:org write:org admin:org read:public_key write:public_key admin:public_key ), internalApiKey
</aside>

## Find packages (datasets) matching a query

> Code samples

```bash
curl https://example.com/action/package_autocomplete \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /action/package_autocomplete`

Return a list of datasets that match a string

<h3 id="find-packages-datasets-matching-a-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|false|The string to query|
|limit|query|integer|false|The maximum number of resource formats to return|

<h3 id="find-packages-datasets-matching-a-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of datasets that match a string|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
githubAccessCode ( Scopes: user user:email user:follow public_repo repo repo_deployment repo:status delete_repo notifications gist read:repo_hook write:repo_hook admin:repo_hook read:org write:org admin:org read:public_key write:public_key admin:public_key ), internalApiKey
</aside>

## Get a list of all packages (datasets)

> Code samples

```bash
curl https://example.com/action/package_list \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /action/package_list`

Returns the names of all indexed packages (datasets)

<h3 id="get-a-list-of-all-packages-datasets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer|false|The offset (index) of the first package to return|
|limit|query|integer|false|The number of packages to be returned per page|

<h3 id="get-a-list-of-all-packages-datasets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of packages|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
githubAccessCode ( Scopes: user user:email user:follow public_repo repo repo_deployment repo:status delete_repo notifications gist read:repo_hook write:repo_hook admin:repo_hook read:org write:org admin:org read:public_key write:public_key admin:public_key ), internalApiKey
</aside>

## Get package (dataset) relationships

> Code samples

```bash
curl https://example.com/action/package_relationships_list \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /action/package_relationships_list`

Return a dataset's relationships

<h3 id="get-package-dataset-relationships-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|The id or name of the first package|
|id2|query|string|false|The id or name of the second package|
|rel|query|string|false|relationship as string|

<h3 id="get-package-dataset-relationships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of dataset relationships|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
githubAccessCode ( Scopes: user user:email user:follow public_repo repo repo_deployment repo:status delete_repo notifications gist read:repo_hook write:repo_hook admin:repo_hook read:org write:org admin:org read:public_key write:public_key admin:public_key ), internalApiKey
</aside>

## Get list of revisions for a package (dataset)

> Code samples

```bash
curl https://example.com/action/package_revision_list \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /action/package_revision_list`

Return a dataset's revision as a list of dictionaries

<h3 id="get-list-of-revisions-for-a-package-dataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|The id or name of the dataset|

<h3 id="get-list-of-revisions-for-a-package-dataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of dataset revisions|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
githubAccessCode ( Scopes: user user:email user:follow public_repo repo repo_deployment repo:status delete_repo notifications gist read:repo_hook write:repo_hook admin:repo_hook read:org write:org admin:org read:public_key write:public_key admin:public_key ), internalApiKey
</aside>

## Find packages (datasets) matching query terms

> Code samples

```bash
curl https://example.com/action/package_search \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /action/package_search`

Searches for packages (datasets) matching the specified query terms

<h3 id="find-packages-datasets-matching-query-terms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|false|A query string|

<h3 id="find-packages-datasets-matching-query-terms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of packages|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
githubAccessCode ( Scopes: user user:email user:follow public_repo repo repo_deployment repo:status delete_repo notifications gist read:repo_hook write:repo_hook admin:repo_hook read:org write:org admin:org read:public_key write:public_key admin:public_key ), internalApiKey
</aside>

## Get metadata about one specific package (dataset)

> Code samples

```bash
curl https://example.com/action/package_show \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /action/package_show`

Returns metadata about the package (dataset) corresponding to the specified unique name

<h3 id="get-metadata-about-one-specific-package-dataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|The package name|

<h3 id="get-metadata-about-one-specific-package-dataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A package metadata object|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
githubAccessCode ( Scopes: user user:email user:follow public_repo repo repo_deployment repo:status delete_repo notifications gist read:repo_hook write:repo_hook admin:repo_hook read:org write:org admin:org read:public_key write:public_key admin:public_key ), internalApiKey
</aside>

## Gets items related to a package (dataset)

> Code samples

```bash
curl https://example.com/action/related_list \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /action/related_list`

Returns a dataset's related items.

<h3 id="gets-items-related-to-a-package-dataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|id or name of the dataset (optional)|
|dataset|query|string|false|Dataset dictionary of the dataset (optional)|
|type_filter|query|string|false|The type of related item to show (optional)|
|sort|query|string|false|The order to sort the related items in|
|featured|query|string|false|whether or not to restrict the results to only featured items|

<h3 id="gets-items-related-to-a-package-dataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Search for related items|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
githubAccessCode ( Scopes: user user:email user:follow public_repo repo repo_deployment repo:status delete_repo notifications gist read:repo_hook write:repo_hook admin:repo_hook read:org write:org admin:org read:public_key write:public_key admin:public_key ), internalApiKey
</aside>

## Find resources

> Code samples

```bash
curl https://example.com/action/resource_search \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /action/resource_search`

Returns a dictionary with two fields ``count`` and ``results``.             The ``count`` field contains the total number of Resources                found without the limit or query parameters having an effect.             The ``results`` field is a list of dictized Resource objects.             The query parameter is a required field. It is a string in                the form ``{field}:{term}`` or a list of strings, each of the             same form. Within each string, ``{field}`` is a field or extra             field on the Resource domain object.

<h3 id="find-resources-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|The search criteria string or list of strings of the form ``{field}:{term1}``|
|fields|query|string|false|Depreciated|
|order_by|query|string|false|A field on the resource model that orders the results|
|offset|query|integer|false|Apply an offset to the query|
|limit|query|integer|false|Apply a limit to the query|

<h3 id="find-resources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Search for resources|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
githubAccessCode ( Scopes: user user:email user:follow public_repo repo repo_deployment repo:status delete_repo notifications gist read:repo_hook write:repo_hook admin:repo_hook read:org write:org admin:org read:public_key write:public_key admin:public_key ), internalApiKey
</aside>

## Get metadata for a specific resource

> Code samples

```bash
curl https://example.com/action/resource_show \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /action/resource_show`

Return the metadata of a resource

<h3 id="get-metadata-for-a-specific-resource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|The id of the resource|
|include_tracking|query|boolean|false|Add tracking information to dataset|

<h3 id="get-metadata-for-a-specific-resource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return metadata of a resource|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
githubAccessCode ( Scopes: user user:email user:follow public_repo repo repo_deployment repo:status delete_repo notifications gist read:repo_hook write:repo_hook admin:repo_hook read:org write:org admin:org read:public_key write:public_key admin:public_key ), internalApiKey
</aside>

## Get the site status

> Code samples

```bash
curl https://example.com/action/status_show \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /action/status_show`

Returns the site status

<h3 id="get-the-site-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns the site status, version, installed extensions|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
githubAccessCode ( Scopes: user user:email user:follow public_repo repo repo_deployment repo:status delete_repo notifications gist read:repo_hook write:repo_hook admin:repo_hook read:org write:org admin:org read:public_key write:public_key admin:public_key ), internalApiKey
</aside>

## Get a list of tags

> Code samples

```bash
curl https://example.com/action/tag_list \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /action/tag_list`

Returns the names of all indexed tags

<h3 id="get-a-list-of-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer|false|The offset (index) of the first tag to return|
|limit|query|integer|false|The number of tags to be returned per page|

<h3 id="get-a-list-of-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of tags|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
githubAccessCode ( Scopes: user user:email user:follow public_repo repo repo_deployment repo:status delete_repo notifications gist read:repo_hook write:repo_hook admin:repo_hook read:org write:org admin:org read:public_key write:public_key admin:public_key ), internalApiKey
</aside>
