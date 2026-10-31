<h1 id="wikipathways-webservices">WikiPathways Webservices v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://webservice.wikipathways.org">https://webservice.wikipathways.org</a>

<h1 id="wikipathways-webservices-all-functions">All functions</h1>

## post/createPathway

> Code samples

```bash
curl 'https://example.com/createPathway?gpml=string&auth=string&username=string' \
  -X POST
```

`POST /createPathway`

createPathwayCreate a new pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.

<h3 id="postcreatepathway-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|gpml|query|string|true|The GPML code for the new pathway|
|auth|query|string|true|The authentication info|
|username|query|string|true|The user name|
|format|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|
|format|html|
|format|dump|
|format|jpg|
|format|pdf|

<h3 id="postcreatepathway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|everything ok|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/findPathwaysByText

> Code samples

```bash
curl 'https://example.com/findPathwaysByText?query=string'
```

`GET /findPathwaysByText`

findPathwaysByText

<h3 id="getfindpathwaysbytext-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|The query, e.g. 'apoptosis'|
|species|query|string|false|Optional, limit the query by species. Leave|
|format|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|
|format|html|
|format|dump|
|format|jpg|
|format|pdf|

<h3 id="getfindpathwaysbytext-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|everything ok|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/findPathwaysByXref

> Code samples

```bash
curl 'https://example.com/findPathwaysByXref?ids='
```

`GET /findPathwaysByXref`

findPathwaysByXref

<h3 id="getfindpathwaysbyxref-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|[object]|true|string|
|codes|query|[object]|false|string|
|format|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|
|format|html|
|format|dump|
|format|jpg|
|format|pdf|

<h3 id="getfindpathwaysbyxref-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|everything ok|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/getColoredPathway

> Code samples

```bash
curl 'https://example.com/getColoredPathway?pwId=string&revision=string&graphId=&color=&fileType=string'
```

`GET /getColoredPathway`

getColoredPathwayGet a colored image version of the pathway.

<h3 id="getgetcoloredpathway-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pwId|query|string|true|The pathway identifier|
|revision|query|string|true|The revision of the pathway (use '0' for most recent)|
|graphId|query|[object]|true|string|
|color|query|[object]|true|string|
|fileType|query|string|true|The image type (One of 'svg', 'pdf' or 'png').|
|format|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|
|format|html|
|format|dump|
|format|jpg|
|format|pdf|

<h3 id="getgetcoloredpathway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|everything ok|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/getCurationTagHistory

> Code samples

```bash
curl 'https://example.com/getCurationTagHistory?pwId=string'
```

`GET /getCurationTagHistory`

getCurationTagHistory

<h3 id="getgetcurationtaghistory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pwId|query|string|true|The pathway identifier|
|timestamp|query|string|false|Only include history from after the given date|
|format|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|
|format|html|
|format|dump|
|format|jpg|
|format|pdf|

<h3 id="getgetcurationtaghistory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|everything ok|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/getCurationTags

> Code samples

```bash
curl 'https://example.com/getCurationTags?pwId=string'
```

`GET /getCurationTags`

getCurationTagsGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.

<h3 id="getgetcurationtags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pwId|query|string|true|The pathway identifier|
|format|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|
|format|html|
|format|dump|
|format|jpg|
|format|pdf|

<h3 id="getgetcurationtags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|everything ok|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/getCurationTagsByName

> Code samples

```bash
curl 'https://example.com/getCurationTagsByName?tagName=string'
```

`GET /getCurationTagsByName`

getCurationTagsByNameGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.

<h3 id="getgetcurationtagsbyname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tagName|query|string|true|The tag name|
|format|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|
|format|html|
|format|dump|
|format|jpg|
|format|pdf|

<h3 id="getgetcurationtagsbyname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|everything ok|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/removeCurationTag

> Code samples

```bash
curl 'https://example.com/removeCurationTag?pwId=string&tagName=string&auth=string&username=string'
```

`GET /removeCurationTag`

removeCurationTagRemove a curation tag from a pathway.

<h3 id="getremovecurationtag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pwId|query|string|true|The pathway identifier|
|tagName|query|string|true|The name of the tag to apply|
|auth|query|string|true|The authentication data|
|username|query|string|true|The user name|
|format|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|
|format|html|
|format|dump|
|format|jpg|
|format|pdf|

<h3 id="getremovecurationtag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|everything ok|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/saveCurationTag

> Code samples

```bash
curl 'https://example.com/saveCurationTag?pwId=string&tagName=string&text=string&revision=0&auth=string&username=string'
```

`GET /saveCurationTag`

saveCurationTag

<h3 id="getsavecurationtag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pwId|query|string|true|The pathway identifier|
|tagName|query|string|true|The name of the tag to apply|
|text|query|string|true|string|
|revision|query|integer|true|The revision this tag applies to|
|auth|query|string|true|The authentication key|
|username|query|string|true|The user name|
|format|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|
|format|html|
|format|dump|
|format|jpg|
|format|pdf|

<h3 id="getsavecurationtag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|everything ok|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="wikipathways-webservices-search">Search</h1>

## get/findInteractions

> Code samples

```bash
curl 'https://example.com/findInteractions?query=string'
```

`GET /findInteractions`

findInteractionsFind interactions defined in WikiPathways pathways.

<h3 id="getfindinteractions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|The name of an entity to find interactions for (e.g. 'P53')|
|format|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|
|format|html|
|format|dump|
|format|jpg|
|format|pdf|

<h3 id="getfindinteractions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|everything ok|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/findPathwaysByLiterature

> Code samples

```bash
curl 'https://example.com/findPathwaysByLiterature?query=string'
```

`GET /findPathwaysByLiterature`

findPathwaysByLiterature

<h3 id="getfindpathwaysbyliterature-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|The query, can be a pubmed id, author name or title keyword.|
|format|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|
|format|html|
|format|dump|
|format|jpg|
|format|pdf|

<h3 id="getfindpathwaysbyliterature-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|everything ok|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="wikipathways-webservices-pathway-information">Pathway information</h1>

## get/getOntologyTermsByPathway

> Code samples

```bash
curl 'https://example.com/getOntologyTermsByPathway?pwId=string'
```

`GET /getOntologyTermsByPathway`

getOntologyTermsByPathway

<h3 id="getgetontologytermsbypathway-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pwId|query|string|true|The pathway identifier|
|format|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|
|format|html|
|format|dump|
|format|jpg|
|format|pdf|

<h3 id="getgetontologytermsbypathway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|everything ok|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/getPathway

> Code samples

```bash
curl 'https://example.com/getPathway?pwId=string'
```

`GET /getPathway`

getPathway

<h3 id="getgetpathway-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pwId|query|string|true|The pathway identifier|
|revision|query|integer|false|The revision number of the pathway (use 0 for most recent)|
|format|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|
|format|html|
|format|dump|
|format|jpg|
|format|pdf|

<h3 id="getgetpathway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|everything ok|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/getPathwayInfo

> Code samples

```bash
curl 'https://example.com/getPathwayInfo?pwId=string'
```

`GET /getPathwayInfo`

getPathwayInfoGet some general info about the pathway, such as the name, species, without downloading the GPML.

<h3 id="getgetpathwayinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pwId|query|string|true|The pathway identifier|
|format|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|
|format|html|
|format|dump|
|format|jpg|
|format|pdf|

<h3 id="getgetpathwayinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|everything ok|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="wikipathways-webservices-download">Download</h1>

## get/getPathwayAs

> Code samples

```bash
curl 'https://example.com/getPathwayAs?fileType=string&pwId=string'
```

`GET /getPathwayAs`

getPathwayAsDownload a pathway in the specified file format.

<h3 id="getgetpathwayas-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileType|query|string|true|The file type to convert to, e.g.|
|pwId|query|string|true|The pathway identifier|
|revision|query|integer|false|The revision number of the pathway (use 0 for most recent)|
|format|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|
|format|html|
|format|dump|
|format|jpg|
|format|pdf|

<h3 id="getgetpathwayas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|everything ok|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/getXrefList

> Code samples

```bash
curl 'https://example.com/getXrefList?pwId=string&code=string'
```

`GET /getXrefList`

getXrefList

<h3 id="getgetxreflist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pwId|query|string|true|The pathway identifier.|
|code|query|string|true|The database code to translate to (e.g. 'S' for UniProt).|
|format|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|
|format|html|
|format|dump|
|format|jpg|
|format|pdf|

<h3 id="getgetxreflist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|everything ok|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="wikipathways-webservices-history">History</h1>

## get/getPathwayHistory

> Code samples

```bash
curl 'https://example.com/getPathwayHistory?pwId=string&timestamp=string'
```

`GET /getPathwayHistory`

getPathwayHistoryGet the revision history of a pathway.

<h3 id="getgetpathwayhistory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pwId|query|string|true|The pathway identifier|
|timestamp|query|string|true|Limit by time, only history items after the given|
|format|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|
|format|html|
|format|dump|
|format|jpg|
|format|pdf|

<h3 id="getgetpathwayhistory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|everything ok|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/getRecentChanges

> Code samples

```bash
curl 'https://example.com/getRecentChanges?timestamp=string'
```

`GET /getRecentChanges`

getRecentChangesGet the recently changed pathways.<br>Note: the recent changes table only retains items for a limited time (2 months), so there is no guarantee that you will get all changes when the timestamp points to a date that is more than 2 months in the past.

<h3 id="getgetrecentchanges-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|timestamp|query|string|true|Get the changes after this time|
|format|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|
|format|html|
|format|dump|
|format|jpg|
|format|pdf|

<h3 id="getgetrecentchanges-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|everything ok|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="wikipathways-webservices-pathway-list">Pathway list</h1>

## get/getPathwaysByOntologyTerm

> Code samples

```bash
curl 'https://example.com/getPathwaysByOntologyTerm?term=string'
```

`GET /getPathwaysByOntologyTerm`

getPathwaysByOntologyTerm

<h3 id="getgetpathwaysbyontologyterm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|term|query|string|true|The Ontology term|
|format|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|
|format|html|
|format|dump|
|format|jpg|
|format|pdf|

<h3 id="getgetpathwaysbyontologyterm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|everything ok|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/getPathwaysByParentOntologyTerm

> Code samples

```bash
curl 'https://example.com/getPathwaysByParentOntologyTerm?term=string'
```

`GET /getPathwaysByParentOntologyTerm`

getPathwaysByParentOntologyTerm

<h3 id="getgetpathwaysbyparentontologyterm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|term|query|string|true|The Ontology term|
|format|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|
|format|html|
|format|dump|
|format|jpg|
|format|pdf|

<h3 id="getgetpathwaysbyparentontologyterm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|everything ok|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/listPathways

> Code samples

```bash
curl https://example.com/listPathways
```

`GET /listPathways`

listPathways

<h3 id="getlistpathways-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organism|query|string|false|The organism to filter by (optional)|
|format|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|
|format|html|
|format|dump|
|format|jpg|
|format|pdf|

<h3 id="getlistpathways-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|everything ok|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="wikipathways-webservices-user-management">User management</h1>

## get/getUserByOrcid

> Code samples

```bash
curl 'https://example.com/getUserByOrcid?orcid=string'
```

`GET /getUserByOrcid`

getUserByOrcid

<h3 id="getgetuserbyorcid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orcid|query|string|true|string|
|format|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|
|format|html|
|format|dump|
|format|jpg|
|format|pdf|

<h3 id="getgetuserbyorcid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|everything ok|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/login

> Code samples

```bash
curl 'https://example.com/login?name=string&pass=string'
```

`GET /login`

loginStart a logged in session, using an existing WikiPathways account. This function will return an authentication code that can be used to excecute methods that need authentication (e.g. updatePathway).

<h3 id="getlogin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|true|The usernameset_include_path(get_include_path().PATH_SEPARATOR.realpath('../includes').PATH_SEPARATOR.realpath('../').PATH_SEPARATOR);|
|pass|query|string|true|The password|
|format|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|
|format|html|
|format|dump|
|format|jpg|
|format|pdf|

<h3 id="getlogin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|everything ok|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="wikipathways-webservices-organism-list">Organism list</h1>

## get/listOrganisms

> Code samples

```bash
curl https://example.com/listOrganisms
```

`GET /listOrganisms`

listOrganisms

<h3 id="getlistorganisms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|
|format|html|
|format|dump|
|format|jpg|
|format|pdf|

<h3 id="getlistorganisms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|everything ok|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="wikipathways-webservices-write-createupdatedelete">Write (create/update/delete)</h1>

## get/removeOntologyTag

> Code samples

```bash
curl 'https://example.com/removeOntologyTag?pwId=string&termId=string&auth=string&user=string'
```

`GET /removeOntologyTag`

removeOntologyTag

<h3 id="getremoveontologytag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pwId|query|string|true|The pathway identifier|
|termId|query|string|true|The ontology term identifier in the ontology|
|auth|query|string|true|The authentication key|
|user|query|string|true|The username|
|format|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|
|format|html|
|format|dump|
|format|jpg|
|format|pdf|

<h3 id="getremoveontologytag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|everything ok|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/saveOntologyTag

> Code samples

```bash
curl 'https://example.com/saveOntologyTag?pwId=string&term=string&termId=string&auth=string&user=string'
```

`GET /saveOntologyTag`

saveOntologyTag

<h3 id="getsaveontologytag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pwId|query|string|true|The pathway identifier|
|term|query|string|true|The ontology term to apply|
|termId|query|string|true|The identifier of the term in the ontology|
|auth|query|string|true|The authentication key|
|user|query|string|true|The username|
|format|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|
|format|html|
|format|dump|
|format|jpg|
|format|pdf|

<h3 id="getsaveontologytag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|everything ok|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/updatePathway

> Code samples

```bash
curl 'https://example.com/updatePathway?pwId=string&description=string&gpml=string&revision=0&auth=string&username=string'
```

`GET /updatePathway`

updatePathwayUpdate a pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.

<h3 id="getupdatepathway-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pwId|query|string|true|The pathway identifier|
|description|query|string|true|A description of the modifications|
|gpml|query|string|true|The updated GPML code|
|revision|query|integer|true|The revision the GPML code is based on|
|auth|query|string|true|The authentication key|
|username|query|string|true|The username|
|format|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|xml|
|format|html|
|format|dump|
|format|jpg|
|format|pdf|

<h3 id="getupdatepathway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|everything ok|None|

<aside class="success">
This operation does not require authentication
</aside>
