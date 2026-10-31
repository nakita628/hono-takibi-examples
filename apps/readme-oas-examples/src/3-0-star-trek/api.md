<h1 id="stapi">STAPI v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="http://stapi.co/api/v1/rest">http://stapi.co/api/v1/rest</a>

<h1 id="stapi-animal">Animal</h1>

## get/animal

> Code samples

```bash
curl 'https://example.com/animal?uid=string' \
  -H 'Accept: application/json'
```

`GET /animal`

Retrival of a single animal

<h3 id="getanimal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|query|string|true|Animal unique ID|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "animal": {
    "uid": "string",
    "name": "string",
    "earthAnimal": true,
    "earthInsect": true,
    "avian": true,
    "canine": true,
    "feline": true
  }
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getanimal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AnimalFullResponse](#schemaanimalfullresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## get/animal/search

> Code samples

```bash
curl https://example.com/animal/search \
  -H 'Accept: application/json'
```

`GET /animal/search`

Pagination over animals

<h3 id="getanimalsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "animals": [
    {
      "uid": "string",
      "name": "string",
      "earthAnimal": true,
      "earthInsect": true,
      "avian": true,
      "canine": true,
      "feline": true
    }
  ]
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getanimalsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AnimalBaseResponse](#schemaanimalbaseresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/animal/search

> Code samples

```bash
curl https://example.com/animal/search \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'name=string&earthAnimal=true&earthInsect=true&avian=true&canine=true&feline=true'
```

`POST /animal/search`

Searching animals

> Body parameter

```yaml
name: string
earthAnimal: true
earthInsect: true
avian: true
canine: true
feline: true
```

<h3 id="postanimalsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|sort|query|string|false|Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC|
|apiKey|query|string|false|API key|
|body|body|object|false|none|
|» name|body|string|false|Animal name|
|» earthAnimal|body|boolean|false|Whether it should be an earth animal|
|» earthInsect|body|boolean|false|Whether it should be an earth insect|
|» avian|body|boolean|false|Whether it should be an avian|
|» canine|body|boolean|false|Whether it should be a canine|
|» feline|body|boolean|false|Whether it should be a feline|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "animals": [
    {
      "uid": "string",
      "name": "string",
      "earthAnimal": true,
      "earthInsect": true,
      "avian": true,
      "canine": true,
      "feline": true
    }
  ]
}
```

<h3 id="postanimalsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AnimalBaseResponse](#schemaanimalbaseresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="stapi-astronomicalobject">AstronomicalObject</h1>

## get/astronomicalObject

> Code samples

```bash
curl 'https://example.com/astronomicalObject?uid=string' \
  -H 'Accept: application/json'
```

`GET /astronomicalObject`

Retrival of a single astronomical object

<h3 id="getastronomicalobject-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|query|string|true|Astronomical object's unique ID|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "astronomicalObject": {
    "uid": "string",
    "name": "string",
    "astronomicalObjectType": "PLANET",
    "location": {
      "uid": "string",
      "name": "string",
      "astronomicalObjectType": "PLANET",
      "location": {
        "uid": "string",
        "name": "string"
      }
    },
    "astronomicalObjects": [
      {
        "uid": "string",
        "name": "string",
        "astronomicalObjectType": "PLANET",
        "location": {
          "uid": "string",
          "name": "string"
        }
      }
    ]
  }
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getastronomicalobject-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AstronomicalObjectFullResponse](#schemaastronomicalobjectfullresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## get/astronomicalObject/search

> Code samples

```bash
curl https://example.com/astronomicalObject/search \
  -H 'Accept: application/json'
```

`GET /astronomicalObject/search`

Pagination over astronomical objects

<h3 id="getastronomicalobjectsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "astronomicalObjects": [
    {
      "uid": "string",
      "name": "string",
      "astronomicalObjectType": "PLANET",
      "location": {
        "uid": "string",
        "name": "string"
      }
    }
  ]
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getastronomicalobjectsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AstronomicalObjectBaseResponse](#schemaastronomicalobjectbaseresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/astronomicalObject/search

> Code samples

```bash
curl https://example.com/astronomicalObject/search \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'name=string&astronomicalObjectType=string&locationUid=string'
```

`POST /astronomicalObject/search`

Searching astronomical objects

> Body parameter

```yaml
name: string
astronomicalObjectType: string
locationUid: string
```

<h3 id="postastronomicalobjectsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|sort|query|string|false|Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC|
|apiKey|query|string|false|API key|
|body|body|object|false|none|
|» name|body|string|false|Astronomical object name|
|» astronomicalObjectType|body|string|false|Type of astronomical object|
|» locationUid|body|string|false|Unique ID of astronomical object containing objects being searched|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "astronomicalObjects": [
    {
      "uid": "string",
      "name": "string",
      "astronomicalObjectType": "PLANET",
      "location": {
        "uid": "string",
        "name": "string"
      }
    }
  ]
}
```

<h3 id="postastronomicalobjectsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AstronomicalObjectBaseResponse](#schemaastronomicalobjectbaseresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="stapi-book">Book</h1>

## get/book

> Code samples

```bash
curl 'https://example.com/book?uid=string' \
  -H 'Accept: application/json'
```

`GET /book`

Retrival of a single book

<h3 id="getbook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|query|string|true|Book unique ID|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "book": {
    "uid": "string",
    "title": "string",
    "publishedYear": 0,
    "publishedMonth": 0,
    "publishedDay": 0,
    "numberOfPages": 0,
    "stardateFrom": 0,
    "stardateTo": 0,
    "yearFrom": 0,
    "yearTo": 0,
    "novel": true,
    "referenceBook": true,
    "biographyBook": true,
    "rolePlayingBook": true,
    "eBook": true,
    "anthology": true,
    "novelization": true,
    "audiobook": true,
    "audiobookAbridged": true,
    "audiobookPublishedYear": 0,
    "audiobookPublishedMonth": 0,
    "audiobookPublishedDay": 0,
    "audiobookRunTime": 0,
    "productionNumber": "string",
    "bookSeries": [
      {
        "uid": "string",
        "title": "string",
        "publishedYearFrom": 0,
        "publishedMonthFrom": 0,
        "publishedYearTo": 0,
        "publishedMonthTo": 0,
        "numberOfBooks": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "miniseries": true,
        "eBookSeries": true
      }
    ],
    "authors": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "artists": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "editors": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "audiobookNarrators": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "publishers": [
      {
        "uid": "string",
        "name": "string",
        "broadcaster": true,
        "collectibleCompany": true,
        "conglomerate": true,
        "digitalVisualEffectsCompany": true,
        "distributor": true,
        "gameCompany": true,
        "filmEquipmentCompany": true,
        "makeUpEffectsStudio": true,
        "mattePaintingCompany": true,
        "modelAndMiniatureEffectsCompany": true,
        "postProductionCompany": true,
        "productionCompany": true,
        "propCompany": true,
        "recordLabel": true,
        "specialEffectsCompany": true,
        "tvAndFilmProductionCompany": true,
        "videoGameCompany": true
      }
    ],
    "audiobookPublishers": [
      {
        "uid": "string",
        "name": "string",
        "broadcaster": true,
        "collectibleCompany": true,
        "conglomerate": true,
        "digitalVisualEffectsCompany": true,
        "distributor": true,
        "gameCompany": true,
        "filmEquipmentCompany": true,
        "makeUpEffectsStudio": true,
        "mattePaintingCompany": true,
        "modelAndMiniatureEffectsCompany": true,
        "postProductionCompany": true,
        "productionCompany": true,
        "propCompany": true,
        "recordLabel": true,
        "specialEffectsCompany": true,
        "tvAndFilmProductionCompany": true,
        "videoGameCompany": true
      }
    ],
    "characters": [
      {
        "uid": "string",
        "name": "string",
        "gender": "F",
        "yearOfBirth": 0,
        "monthOfBirth": 0,
        "dayOfBirth": 0,
        "placeOfBirth": "string",
        "yearOfDeath": 0,
        "monthOfDeath": 0,
        "dayOfDeath": 0,
        "placeOfDeath": "string",
        "height": 0,
        "weight": 0,
        "deceased": true,
        "bloodType": "B_NEGATIVE",
        "maritalStatus": "SINGLE",
        "serialNumber": "string",
        "hologramActivationDate": "string",
        "hologramStatus": "string",
        "hologramDateStatus": "string",
        "hologram": true,
        "fictionalCharacter": true,
        "mirror": true,
        "alternateReality": true
      }
    ],
    "references": [
      {
        "uid": "string",
        "referenceType": "ASIN",
        "referenceNumber": "string"
      }
    ],
    "audiobookReferences": [
      {
        "uid": "string",
        "referenceType": "ASIN",
        "referenceNumber": "string"
      }
    ],
    "bookCollections": [
      {
        "uid": "string",
        "title": "string",
        "publishedYear": 0,
        "publishedMonth": 0,
        "publishedDay": 0,
        "numberOfPages": 0,
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0
      }
    ]
  }
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getbook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BookFullResponse](#schemabookfullresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## get/book/search

> Code samples

```bash
curl https://example.com/book/search \
  -H 'Accept: application/json'
```

`GET /book/search`

Pagination over books

<h3 id="getbooksearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "books": [
    {
      "uid": "string",
      "title": "string",
      "publishedYear": 0,
      "publishedMonth": 0,
      "publishedDay": 0,
      "numberOfPages": 0,
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "novel": true,
      "referenceBook": true,
      "biographyBook": true,
      "rolePlayingBook": true,
      "eBook": true,
      "anthology": true,
      "novelization": true,
      "audiobook": true,
      "audiobookAbridged": true,
      "audiobookPublishedYear": 0,
      "audiobookPublishedMonth": 0,
      "audiobookPublishedDay": 0,
      "audiobookRunTime": 0,
      "productionNumber": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getbooksearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BookBaseResponse](#schemabookbaseresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/book/search

> Code samples

```bash
curl https://example.com/book/search \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'title=string&publishedYearFrom=0&publishedYearTo=0&numberOfPagesFrom=0&numberOfPagesTo=0&stardateFrom=0&stardateTo=0&yearFrom=0&yearTo=0&novel=true&referenceBook=true&biographyBook=true&rolePlayingBook=true&eBook=true&anthology=true&novelization=true&audiobook=true&audiobookAbridged=true&audiobookPublishedYearFrom=0&audiobookPublishedYearTo=0&audiobookRunTimeFrom=0&audiobookRunTimeTo=0'
```

`POST /book/search`

Searching books

> Body parameter

```yaml
title: string
publishedYearFrom: 0
publishedYearTo: 0
numberOfPagesFrom: 0
numberOfPagesTo: 0
stardateFrom: 0
stardateTo: 0
yearFrom: 0
yearTo: 0
novel: true
referenceBook: true
biographyBook: true
rolePlayingBook: true
eBook: true
anthology: true
novelization: true
audiobook: true
audiobookAbridged: true
audiobookPublishedYearFrom: 0
audiobookPublishedYearTo: 0
audiobookRunTimeFrom: 0
audiobookRunTimeTo: 0
```

<h3 id="postbooksearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|sort|query|string|false|Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC|
|apiKey|query|string|false|API key|
|body|body|object|false|none|
|» title|body|string|false|Book title|
|» publishedYearFrom|body|integer(int32)|false|Starting year the book was published|
|» publishedYearTo|body|integer(int32)|false|Ending year the book was published|
|» numberOfPagesFrom|body|integer(int32)|false|Minimal number of pages|
|» numberOfPagesTo|body|integer(int32)|false|Maximal number of pages|
|» stardateFrom|body|number(float)|false|Starting stardate of book story|
|» stardateTo|body|number(float)|false|Ending stardate of book story|
|» yearFrom|body|integer(int32)|false|Starting year of book story|
|» yearTo|body|integer(int32)|false|Ending year of book story|
|» novel|body|boolean|false|Whether it should be a novel|
|» referenceBook|body|boolean|false|Whether it should be a reference book|
|» biographyBook|body|boolean|false|Whether it should be a biography book|
|» rolePlayingBook|body|boolean|false|Whether it should be a role playing book|
|» eBook|body|boolean|false|Whether it should be an e-book|
|» anthology|body|boolean|false|Whether it should be an anthology|
|» novelization|body|boolean|false|Whether it should be novelization|
|» audiobook|body|boolean|false|Whether it should be an audiobook|
|» audiobookAbridged|body|boolean|false|Whether it should be an audiobook, abridged|
|» audiobookPublishedYearFrom|body|integer(int32)|false|Starting year the audiobook was published|
|» audiobookPublishedYearTo|body|integer(int32)|false|Ending year the audiobook was published|
|» audiobookRunTimeFrom|body|integer(int32)|false|Minimal audiobook run time, in minutes|
|» audiobookRunTimeTo|body|integer(int32)|false|Maximal audiobook run time, in minutes|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "books": [
    {
      "uid": "string",
      "title": "string",
      "publishedYear": 0,
      "publishedMonth": 0,
      "publishedDay": 0,
      "numberOfPages": 0,
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "novel": true,
      "referenceBook": true,
      "biographyBook": true,
      "rolePlayingBook": true,
      "eBook": true,
      "anthology": true,
      "novelization": true,
      "audiobook": true,
      "audiobookAbridged": true,
      "audiobookPublishedYear": 0,
      "audiobookPublishedMonth": 0,
      "audiobookPublishedDay": 0,
      "audiobookRunTime": 0,
      "productionNumber": "string"
    }
  ]
}
```

<h3 id="postbooksearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BookBaseResponse](#schemabookbaseresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="stapi-bookcollection">BookCollection</h1>

## get/bookCollection

> Code samples

```bash
curl 'https://example.com/bookCollection?uid=string' \
  -H 'Accept: application/json'
```

`GET /bookCollection`

Retrival of a single book collection

<h3 id="getbookcollection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|query|string|true|Book collection unique ID|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "bookCollection": {
    "uid": "string",
    "title": "string",
    "publishedYear": 0,
    "publishedMonth": 0,
    "publishedDay": 0,
    "numberOfPages": 0,
    "stardateFrom": 0,
    "stardateTo": 0,
    "yearFrom": 0,
    "yearTo": 0,
    "bookSeries": [
      {
        "uid": "string",
        "title": "string",
        "publishedYearFrom": 0,
        "publishedMonthFrom": 0,
        "publishedYearTo": 0,
        "publishedMonthTo": 0,
        "numberOfBooks": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "miniseries": true,
        "eBookSeries": true
      }
    ],
    "authors": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "artists": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "editors": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "publishers": [
      {
        "uid": "string",
        "name": "string",
        "broadcaster": true,
        "collectibleCompany": true,
        "conglomerate": true,
        "digitalVisualEffectsCompany": true,
        "distributor": true,
        "gameCompany": true,
        "filmEquipmentCompany": true,
        "makeUpEffectsStudio": true,
        "mattePaintingCompany": true,
        "modelAndMiniatureEffectsCompany": true,
        "postProductionCompany": true,
        "productionCompany": true,
        "propCompany": true,
        "recordLabel": true,
        "specialEffectsCompany": true,
        "tvAndFilmProductionCompany": true,
        "videoGameCompany": true
      }
    ],
    "characters": [
      {
        "uid": "string",
        "name": "string",
        "gender": "F",
        "yearOfBirth": 0,
        "monthOfBirth": 0,
        "dayOfBirth": 0,
        "placeOfBirth": "string",
        "yearOfDeath": 0,
        "monthOfDeath": 0,
        "dayOfDeath": 0,
        "placeOfDeath": "string",
        "height": 0,
        "weight": 0,
        "deceased": true,
        "bloodType": "B_NEGATIVE",
        "maritalStatus": "SINGLE",
        "serialNumber": "string",
        "hologramActivationDate": "string",
        "hologramStatus": "string",
        "hologramDateStatus": "string",
        "hologram": true,
        "fictionalCharacter": true,
        "mirror": true,
        "alternateReality": true
      }
    ],
    "references": [
      {
        "uid": "string",
        "referenceType": "ASIN",
        "referenceNumber": "string"
      }
    ],
    "books": [
      {
        "uid": "string",
        "title": "string",
        "publishedYear": 0,
        "publishedMonth": 0,
        "publishedDay": 0,
        "numberOfPages": 0,
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "novel": true,
        "referenceBook": true,
        "biographyBook": true,
        "rolePlayingBook": true,
        "eBook": true,
        "anthology": true,
        "novelization": true,
        "audiobook": true,
        "audiobookAbridged": true,
        "audiobookPublishedYear": 0,
        "audiobookPublishedMonth": 0,
        "audiobookPublishedDay": 0,
        "audiobookRunTime": 0,
        "productionNumber": "string"
      }
    ]
  }
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getbookcollection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BookCollectionFullResponse](#schemabookcollectionfullresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## get/bookCollection/search

> Code samples

```bash
curl https://example.com/bookCollection/search \
  -H 'Accept: application/json'
```

`GET /bookCollection/search`

Pagination over book collections

<h3 id="getbookcollectionsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "bookCollections": [
    {
      "uid": "string",
      "title": "string",
      "publishedYear": 0,
      "publishedMonth": 0,
      "publishedDay": 0,
      "numberOfPages": 0,
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0
    }
  ]
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getbookcollectionsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BookCollectionBaseResponse](#schemabookcollectionbaseresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/bookCollection/search

> Code samples

```bash
curl https://example.com/bookCollection/search \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'title=string&publishedYearFrom=0&publishedYearTo=0&numberOfPagesFrom=0&numberOfPagesTo=0&stardateFrom=0&stardateTo=0&yearFrom=0&yearTo=0'
```

`POST /bookCollection/search`

Searching book collections

> Body parameter

```yaml
title: string
publishedYearFrom: 0
publishedYearTo: 0
numberOfPagesFrom: 0
numberOfPagesTo: 0
stardateFrom: 0
stardateTo: 0
yearFrom: 0
yearTo: 0
```

<h3 id="postbookcollectionsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|sort|query|string|false|Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC|
|apiKey|query|string|false|API key|
|body|body|object|false|none|
|» title|body|string|false|Book collection title|
|» publishedYearFrom|body|integer(int32)|false|Starting year the book collection was published|
|» publishedYearTo|body|integer(int32)|false|Ending year the book collection was published|
|» numberOfPagesFrom|body|integer(int32)|false|Minimal number of pages|
|» numberOfPagesTo|body|integer(int32)|false|Maximal number of pages|
|» stardateFrom|body|number(float)|false|Starting stardate of book collection stories|
|» stardateTo|body|number(float)|false|Ending stardate of book collections stories|
|» yearFrom|body|integer(int32)|false|Starting year of book collection stories|
|» yearTo|body|integer(int32)|false|Ending year of book collections stories|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "bookCollections": [
    {
      "uid": "string",
      "title": "string",
      "publishedYear": 0,
      "publishedMonth": 0,
      "publishedDay": 0,
      "numberOfPages": 0,
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0
    }
  ]
}
```

<h3 id="postbookcollectionsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BookCollectionBaseResponse](#schemabookcollectionbaseresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="stapi-bookseries">BookSeries</h1>

## get/bookSeries

> Code samples

```bash
curl 'https://example.com/bookSeries?uid=string' \
  -H 'Accept: application/json'
```

`GET /bookSeries`

Retrival of a single book series

<h3 id="getbookseries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|query|string|true|Book series unique ID|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "bookSeries": {
    "uid": "string",
    "title": "string",
    "publishedYearFrom": 0,
    "publishedMonthFrom": 0,
    "publishedYearTo": 0,
    "publishedMonthTo": 0,
    "numberOfBooks": 0,
    "yearFrom": 0,
    "yearTo": 0,
    "miniseries": true,
    "eBookSeries": true,
    "parentSeries": [
      {
        "uid": "string",
        "title": "string",
        "publishedYearFrom": 0,
        "publishedMonthFrom": 0,
        "publishedYearTo": 0,
        "publishedMonthTo": 0,
        "numberOfBooks": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "miniseries": true,
        "eBookSeries": true
      }
    ],
    "childSeries": [
      {
        "uid": "string",
        "title": "string",
        "publishedYearFrom": 0,
        "publishedMonthFrom": 0,
        "publishedYearTo": 0,
        "publishedMonthTo": 0,
        "numberOfBooks": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "miniseries": true,
        "eBookSeries": true
      }
    ],
    "publishers": [
      {
        "uid": "string",
        "name": "string",
        "broadcaster": true,
        "collectibleCompany": true,
        "conglomerate": true,
        "digitalVisualEffectsCompany": true,
        "distributor": true,
        "gameCompany": true,
        "filmEquipmentCompany": true,
        "makeUpEffectsStudio": true,
        "mattePaintingCompany": true,
        "modelAndMiniatureEffectsCompany": true,
        "postProductionCompany": true,
        "productionCompany": true,
        "propCompany": true,
        "recordLabel": true,
        "specialEffectsCompany": true,
        "tvAndFilmProductionCompany": true,
        "videoGameCompany": true
      }
    ],
    "books": [
      {
        "uid": "string",
        "title": "string",
        "publishedYear": 0,
        "publishedMonth": 0,
        "publishedDay": 0,
        "numberOfPages": 0,
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "novel": true,
        "referenceBook": true,
        "biographyBook": true,
        "rolePlayingBook": true,
        "eBook": true,
        "anthology": true,
        "novelization": true,
        "audiobook": true,
        "audiobookAbridged": true,
        "audiobookPublishedYear": 0,
        "audiobookPublishedMonth": 0,
        "audiobookPublishedDay": 0,
        "audiobookRunTime": 0,
        "productionNumber": "string"
      }
    ]
  }
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getbookseries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BookSeriesFullResponse](#schemabookseriesfullresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## get/bookSeries/search

> Code samples

```bash
curl https://example.com/bookSeries/search \
  -H 'Accept: application/json'
```

`GET /bookSeries/search`

Pagination over book series

<h3 id="getbookseriessearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "bookSeries": [
    {
      "uid": "string",
      "title": "string",
      "publishedYearFrom": 0,
      "publishedMonthFrom": 0,
      "publishedYearTo": 0,
      "publishedMonthTo": 0,
      "numberOfBooks": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "miniseries": true,
      "eBookSeries": true
    }
  ]
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getbookseriessearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BookSeriesBaseResponse](#schemabookseriesbaseresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/bookSeries/search

> Code samples

```bash
curl https://example.com/bookSeries/search \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'title=string&publishedYearFrom=0&publishedYearTo=0&numberOfBooksFrom=0&numberOfBooksTo=0&yearFrom=0&yearTo=0&miniseries=true&eBookSeries=true'
```

`POST /bookSeries/search`

Searching book series

> Body parameter

```yaml
title: string
publishedYearFrom: 0
publishedYearTo: 0
numberOfBooksFrom: 0
numberOfBooksTo: 0
yearFrom: 0
yearTo: 0
miniseries: true
eBookSeries: true
```

<h3 id="postbookseriessearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|sort|query|string|false|Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC|
|apiKey|query|string|false|API key|
|body|body|object|false|none|
|» title|body|string|false|Book series title|
|» publishedYearFrom|body|integer(int32)|false|Starting year the book series was published|
|» publishedYearTo|body|integer(int32)|false|Ending year the book series was published|
|» numberOfBooksFrom|body|integer(int32)|false|Minimal number of books|
|» numberOfBooksTo|body|integer(int32)|false|Maximal number of books|
|» yearFrom|body|integer(int32)|false|Starting year of book series stories|
|» yearTo|body|integer(int32)|false|Ending year of book series stories|
|» miniseries|body|boolean|false|Whether it should be a miniseries|
|» eBookSeries|body|boolean|false|Whether it should be an e-book series|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "bookSeries": [
    {
      "uid": "string",
      "title": "string",
      "publishedYearFrom": 0,
      "publishedMonthFrom": 0,
      "publishedYearTo": 0,
      "publishedMonthTo": 0,
      "numberOfBooks": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "miniseries": true,
      "eBookSeries": true
    }
  ]
}
```

<h3 id="postbookseriessearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BookSeriesBaseResponse](#schemabookseriesbaseresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="stapi-character">Character</h1>

## get/character

> Code samples

```bash
curl 'https://example.com/character?uid=string' \
  -H 'Accept: application/json'
```

`GET /character`

Retrival of a single character

<h3 id="getcharacter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|query|string|true|Character unique ID|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "character": {
    "uid": "string",
    "name": "string",
    "gender": "F",
    "yearOfBirth": 0,
    "monthOfBirth": 0,
    "dayOfBirth": 0,
    "placeOfBirth": "string",
    "yearOfDeath": 0,
    "monthOfDeath": 0,
    "dayOfDeath": 0,
    "placeOfDeath": "string",
    "height": 0,
    "weight": 0,
    "deceased": true,
    "bloodType": "B_NEGATIVE",
    "maritalStatus": "SINGLE",
    "serialNumber": "string",
    "hologramActivationDate": "string",
    "hologramStatus": "string",
    "hologramDateStatus": "string",
    "hologram": true,
    "fictionalCharacter": true,
    "mirror": true,
    "alternateReality": true,
    "performers": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "animalPerformer": true,
        "disPerformer": true,
        "ds9Performer": true,
        "entPerformer": true,
        "filmPerformer": true,
        "standInPerformer": true,
        "stuntPerformer": true,
        "tasPerformer": true,
        "tngPerformer": true,
        "tosPerformer": true,
        "videoGamePerformer": true,
        "voicePerformer": true,
        "voyPerformer": true
      }
    ],
    "episodes": [
      {
        "uid": "string",
        "title": "string",
        "titleGerman": "string",
        "titleItalian": "string",
        "titleJapanese": "string",
        "series": {
          "uid": "string",
          "title": "string"
        },
        "season": {
          "uid": "string",
          "title": "string"
        },
        "seasonNumber": 0,
        "episodeNumber": 0,
        "productionSerialNumber": "string",
        "featureLength": true,
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "usAirDate": "1970-01-01",
        "finalScriptDate": "1970-01-01"
      }
    ],
    "movies": [
      {
        "uid": "string",
        "title": "string",
        "mainDirector": {
          "uid": "string",
          "name": "string"
        },
        "titleBulgarian": "string",
        "titleCatalan": "string",
        "titleChineseTraditional": "string",
        "titleGerman": "string",
        "titleItalian": "string",
        "titleJapanese": "string",
        "titlePolish": "string",
        "titleRussian": "string",
        "titleSerbian": "string",
        "titleSpanish": "string",
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "usReleaseDate": "1970-01-01"
      }
    ],
    "characterSpecies": [
      {
        "uid": "string",
        "name": "string",
        "numerator": 0,
        "denominator": 0
      }
    ],
    "characterRelations": [
      {
        "type": "string",
        "source": {
          "uid": "string",
          "name": "string"
        },
        "target": {
          "uid": "string",
          "name": "string"
        }
      }
    ],
    "titles": [
      {
        "uid": "string",
        "name": "string",
        "militaryRank": true,
        "fleetRank": true,
        "religiousTitle": true,
        "position": true,
        "mirror": true
      }
    ],
    "occupations": [
      {
        "uid": "string",
        "name": "string",
        "legalOccupation": true,
        "medicalOccupation": true,
        "scientificOccupation": true
      }
    ],
    "organizations": [
      {
        "uid": "string",
        "name": "string",
        "government": true,
        "intergovernmentalOrganization": true,
        "researchOrganization": true,
        "sportOrganization": true,
        "medicalOrganization": true,
        "militaryOrganization": true,
        "militaryUnit": true,
        "governmentAgency": true,
        "lawEnforcementAgency": true,
        "prisonOrPenalColony": true,
        "mirror": true,
        "alternateReality": true
      }
    ]
  }
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getcharacter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CharacterFullResponse](#schemacharacterfullresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## get/character/search

> Code samples

```bash
curl https://example.com/character/search \
  -H 'Accept: application/json'
```

`GET /character/search`

Pagination over characters

<h3 id="getcharactersearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "characters": [
    {
      "uid": "string",
      "name": "string",
      "gender": "F",
      "yearOfBirth": 0,
      "monthOfBirth": 0,
      "dayOfBirth": 0,
      "placeOfBirth": "string",
      "yearOfDeath": 0,
      "monthOfDeath": 0,
      "dayOfDeath": 0,
      "placeOfDeath": "string",
      "height": 0,
      "weight": 0,
      "deceased": true,
      "bloodType": "B_NEGATIVE",
      "maritalStatus": "SINGLE",
      "serialNumber": "string",
      "hologramActivationDate": "string",
      "hologramStatus": "string",
      "hologramDateStatus": "string",
      "hologram": true,
      "fictionalCharacter": true,
      "mirror": true,
      "alternateReality": true
    }
  ]
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getcharactersearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CharacterBaseResponse](#schemacharacterbaseresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/character/search

> Code samples

```bash
curl https://example.com/character/search \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'name=string&gender=string&deceased=true&hologram=true&fictionalCharacter=true&mirror=true&alternateReality=true'
```

`POST /character/search`

Searching characters

> Body parameter

```yaml
name: string
gender: string
deceased: true
hologram: true
fictionalCharacter: true
mirror: true
alternateReality: true
```

<h3 id="postcharactersearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|sort|query|string|false|Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC|
|apiKey|query|string|false|API key|
|body|body|object|false|none|
|» name|body|string|false|Character name|
|» gender|body|string|false|Character gender|
|» deceased|body|boolean|false|Whether it should be a deceased character|
|» hologram|body|boolean|false|Whether it should be a hologram|
|» fictionalCharacter|body|boolean|false|Whether it should be a fictional character (from universe point of view)|
|» mirror|body|boolean|false|Whether it should be a mirror universe character|
|» alternateReality|body|boolean|false|Whether it should be a alternate reality character|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "characters": [
    {
      "uid": "string",
      "name": "string",
      "gender": "F",
      "yearOfBirth": 0,
      "monthOfBirth": 0,
      "dayOfBirth": 0,
      "placeOfBirth": "string",
      "yearOfDeath": 0,
      "monthOfDeath": 0,
      "dayOfDeath": 0,
      "placeOfDeath": "string",
      "height": 0,
      "weight": 0,
      "deceased": true,
      "bloodType": "B_NEGATIVE",
      "maritalStatus": "SINGLE",
      "serialNumber": "string",
      "hologramActivationDate": "string",
      "hologramStatus": "string",
      "hologramDateStatus": "string",
      "hologram": true,
      "fictionalCharacter": true,
      "mirror": true,
      "alternateReality": true
    }
  ]
}
```

<h3 id="postcharactersearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CharacterBaseResponse](#schemacharacterbaseresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="stapi-comics">Comics</h1>

## get/comics

> Code samples

```bash
curl 'https://example.com/comics?uid=string' \
  -H 'Accept: application/json'
```

`GET /comics`

Retrival of a single comics

<h3 id="getcomics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|query|string|true|Comics unique ID|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "comics": {
    "uid": "string",
    "title": "string",
    "publishedYear": 0,
    "publishedMonth": 0,
    "publishedDay": 0,
    "coverYear": 0,
    "coverMonth": 0,
    "coverDay": 0,
    "numberOfPages": 0,
    "stardateFrom": 0,
    "stardateTo": 0,
    "yearFrom": 0,
    "yearTo": 0,
    "photonovel": true,
    "adaptation": true,
    "comicSeries": [
      {
        "uid": "string",
        "title": "string",
        "publishedYearFrom": 0,
        "publishedMonthFrom": 0,
        "publishedDayFrom": 0,
        "publishedYearTo": 0,
        "publishedMonthTo": 0,
        "publishedDayTo": 0,
        "numberOfIssues": 0,
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "miniseries": true,
        "photonovelSeries": true
      }
    ],
    "writers": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "artists": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "editors": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "staff": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "publishers": [
      {
        "uid": "string",
        "name": "string",
        "broadcaster": true,
        "collectibleCompany": true,
        "conglomerate": true,
        "digitalVisualEffectsCompany": true,
        "distributor": true,
        "gameCompany": true,
        "filmEquipmentCompany": true,
        "makeUpEffectsStudio": true,
        "mattePaintingCompany": true,
        "modelAndMiniatureEffectsCompany": true,
        "postProductionCompany": true,
        "productionCompany": true,
        "propCompany": true,
        "recordLabel": true,
        "specialEffectsCompany": true,
        "tvAndFilmProductionCompany": true,
        "videoGameCompany": true
      }
    ],
    "characters": [
      {
        "uid": "string",
        "name": "string",
        "gender": "F",
        "yearOfBirth": 0,
        "monthOfBirth": 0,
        "dayOfBirth": 0,
        "placeOfBirth": "string",
        "yearOfDeath": 0,
        "monthOfDeath": 0,
        "dayOfDeath": 0,
        "placeOfDeath": "string",
        "height": 0,
        "weight": 0,
        "deceased": true,
        "bloodType": "B_NEGATIVE",
        "maritalStatus": "SINGLE",
        "serialNumber": "string",
        "hologramActivationDate": "string",
        "hologramStatus": "string",
        "hologramDateStatus": "string",
        "hologram": true,
        "fictionalCharacter": true,
        "mirror": true,
        "alternateReality": true
      }
    ],
    "references": [
      {
        "uid": "string",
        "referenceType": "ASIN",
        "referenceNumber": "string"
      }
    ],
    "comicCollections": [
      {
        "uid": "string",
        "title": "string",
        "publishedYear": 0,
        "publishedMonth": 0,
        "publishedDay": 0,
        "coverYear": 0,
        "coverMonth": 0,
        "coverDay": 0,
        "numberOfPages": 0,
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "photonovel": true
      }
    ]
  }
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getcomics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ComicsFullResponse](#schemacomicsfullresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## get/comics/search

> Code samples

```bash
curl https://example.com/comics/search \
  -H 'Accept: application/json'
```

`GET /comics/search`

Pagination over comics

<h3 id="getcomicssearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "comics": [
    {
      "uid": "string",
      "title": "string",
      "publishedYear": 0,
      "publishedMonth": 0,
      "publishedDay": 0,
      "coverYear": 0,
      "coverMonth": 0,
      "coverDay": 0,
      "numberOfPages": 0,
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "photonovel": true,
      "adaptation": true
    }
  ]
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getcomicssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ComicsBaseResponse](#schemacomicsbaseresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/comics/search

> Code samples

```bash
curl https://example.com/comics/search \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'title=string&publishedYearFrom=0&publishedYearTo=0&numberOfPagesFrom=0&numberOfPagesTo=0&stardateFrom=0&stardateTo=0&yearFrom=0&yearTo=0&photonovel=true&adaptation=true'
```

`POST /comics/search`

Searching comics

> Body parameter

```yaml
title: string
publishedYearFrom: 0
publishedYearTo: 0
numberOfPagesFrom: 0
numberOfPagesTo: 0
stardateFrom: 0
stardateTo: 0
yearFrom: 0
yearTo: 0
photonovel: true
adaptation: true
```

<h3 id="postcomicssearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|sort|query|string|false|Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC|
|apiKey|query|string|false|API key|
|body|body|object|false|none|
|» title|body|string|false|Comics title|
|» publishedYearFrom|body|integer(int32)|false|Starting year the comics was published|
|» publishedYearTo|body|integer(int32)|false|Ending year the comics was published|
|» numberOfPagesFrom|body|integer(int32)|false|Minimal number of pages|
|» numberOfPagesTo|body|integer(int32)|false|Maximal number of pages|
|» stardateFrom|body|number(float)|false|Starting stardate of comics story|
|» stardateTo|body|number(float)|false|Ending stardate of comics story|
|» yearFrom|body|integer(int32)|false|Starting year of comics story|
|» yearTo|body|integer(int32)|false|Ending year of comics story|
|» photonovel|body|boolean|false|Whether it should be a photonovel|
|» adaptation|body|boolean|false|Whether it should be an adaptation of an episode or a movie|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "comics": [
    {
      "uid": "string",
      "title": "string",
      "publishedYear": 0,
      "publishedMonth": 0,
      "publishedDay": 0,
      "coverYear": 0,
      "coverMonth": 0,
      "coverDay": 0,
      "numberOfPages": 0,
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "photonovel": true,
      "adaptation": true
    }
  ]
}
```

<h3 id="postcomicssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ComicsBaseResponse](#schemacomicsbaseresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="stapi-comiccollection">ComicCollection</h1>

## get/comicCollection

> Code samples

```bash
curl 'https://example.com/comicCollection?uid=string' \
  -H 'Accept: application/json'
```

`GET /comicCollection`

Retrival of a single comic collection

<h3 id="getcomiccollection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|query|string|true|Comic collection unique ID|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "comicCollection": {
    "uid": "string",
    "title": "string",
    "publishedYear": 0,
    "publishedMonth": 0,
    "publishedDay": 0,
    "coverYear": 0,
    "coverMonth": 0,
    "coverDay": 0,
    "numberOfPages": 0,
    "stardateFrom": 0,
    "stardateTo": 0,
    "yearFrom": 0,
    "yearTo": 0,
    "photonovel": true,
    "comicSeries": [
      {
        "uid": "string",
        "title": "string",
        "publishedYearFrom": 0,
        "publishedMonthFrom": 0,
        "publishedDayFrom": 0,
        "publishedYearTo": 0,
        "publishedMonthTo": 0,
        "publishedDayTo": 0,
        "numberOfIssues": 0,
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "miniseries": true,
        "photonovelSeries": true
      }
    ],
    "writers": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "artists": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "editors": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "staff": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "publishers": [
      {
        "uid": "string",
        "name": "string",
        "broadcaster": true,
        "collectibleCompany": true,
        "conglomerate": true,
        "digitalVisualEffectsCompany": true,
        "distributor": true,
        "gameCompany": true,
        "filmEquipmentCompany": true,
        "makeUpEffectsStudio": true,
        "mattePaintingCompany": true,
        "modelAndMiniatureEffectsCompany": true,
        "postProductionCompany": true,
        "productionCompany": true,
        "propCompany": true,
        "recordLabel": true,
        "specialEffectsCompany": true,
        "tvAndFilmProductionCompany": true,
        "videoGameCompany": true
      }
    ],
    "characters": [
      {
        "uid": "string",
        "name": "string",
        "gender": "F",
        "yearOfBirth": 0,
        "monthOfBirth": 0,
        "dayOfBirth": 0,
        "placeOfBirth": "string",
        "yearOfDeath": 0,
        "monthOfDeath": 0,
        "dayOfDeath": 0,
        "placeOfDeath": "string",
        "height": 0,
        "weight": 0,
        "deceased": true,
        "bloodType": "B_NEGATIVE",
        "maritalStatus": "SINGLE",
        "serialNumber": "string",
        "hologramActivationDate": "string",
        "hologramStatus": "string",
        "hologramDateStatus": "string",
        "hologram": true,
        "fictionalCharacter": true,
        "mirror": true,
        "alternateReality": true
      }
    ],
    "references": [
      {
        "uid": "string",
        "referenceType": "ASIN",
        "referenceNumber": "string"
      }
    ],
    "comics": [
      {
        "uid": "string",
        "title": "string",
        "publishedYear": 0,
        "publishedMonth": 0,
        "publishedDay": 0,
        "coverYear": 0,
        "coverMonth": 0,
        "coverDay": 0,
        "numberOfPages": 0,
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "photonovel": true,
        "adaptation": true
      }
    ]
  }
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getcomiccollection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ComicCollectionFullResponse](#schemacomiccollectionfullresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## get/comicCollection/search

> Code samples

```bash
curl https://example.com/comicCollection/search \
  -H 'Accept: application/json'
```

`GET /comicCollection/search`

Pagination over comic collections

<h3 id="getcomiccollectionsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "comicCollections": [
    {
      "uid": "string",
      "title": "string",
      "publishedYear": 0,
      "publishedMonth": 0,
      "publishedDay": 0,
      "coverYear": 0,
      "coverMonth": 0,
      "coverDay": 0,
      "numberOfPages": 0,
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "photonovel": true
    }
  ]
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getcomiccollectionsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ComicCollectionBaseResponse](#schemacomiccollectionbaseresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/comicCollection/search

> Code samples

```bash
curl https://example.com/comicCollection/search \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'title=string&publishedYearFrom=0&publishedYearTo=0&numberOfPagesFrom=0&numberOfPagesTo=0&stardateFrom=0&stardateTo=0&yearFrom=0&yearTo=0&photonovel=true'
```

`POST /comicCollection/search`

Searching comic collections

> Body parameter

```yaml
title: string
publishedYearFrom: 0
publishedYearTo: 0
numberOfPagesFrom: 0
numberOfPagesTo: 0
stardateFrom: 0
stardateTo: 0
yearFrom: 0
yearTo: 0
photonovel: true
```

<h3 id="postcomiccollectionsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|sort|query|string|false|Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC|
|apiKey|query|string|false|API key|
|body|body|object|false|none|
|» title|body|string|false|Comic collection title|
|» publishedYearFrom|body|integer(int32)|false|Starting year the comic collection was published|
|» publishedYearTo|body|integer(int32)|false|Ending year the comic collection was published|
|» numberOfPagesFrom|body|integer(int32)|false|Minimal number of pages|
|» numberOfPagesTo|body|integer(int32)|false|Maximal number of pages|
|» stardateFrom|body|number(float)|false|Starting stardate of comic collection stories|
|» stardateTo|body|number(float)|false|Ending stardate of comic collections stories|
|» yearFrom|body|integer(int32)|false|Starting year of comic collection stories|
|» yearTo|body|integer(int32)|false|Ending year of comic collections stories|
|» photonovel|body|boolean|false|Whether it should be an photonovel collection|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "comicCollections": [
    {
      "uid": "string",
      "title": "string",
      "publishedYear": 0,
      "publishedMonth": 0,
      "publishedDay": 0,
      "coverYear": 0,
      "coverMonth": 0,
      "coverDay": 0,
      "numberOfPages": 0,
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "photonovel": true
    }
  ]
}
```

<h3 id="postcomiccollectionsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ComicCollectionBaseResponse](#schemacomiccollectionbaseresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="stapi-comicseries">ComicSeries</h1>

## get/comicSeries

> Code samples

```bash
curl 'https://example.com/comicSeries?uid=string' \
  -H 'Accept: application/json'
```

`GET /comicSeries`

Retrival of a single comic series

<h3 id="getcomicseries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|query|string|true|Comic series unique ID|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "comicSeries": {
    "uid": "string",
    "title": "string",
    "publishedYearFrom": 0,
    "publishedMonthFrom": 0,
    "publishedDayFrom": 0,
    "publishedYearTo": 0,
    "publishedMonthTo": 0,
    "publishedDayTo": 0,
    "numberOfIssues": 0,
    "stardateFrom": 0,
    "stardateTo": 0,
    "yearFrom": 0,
    "yearTo": 0,
    "miniseries": true,
    "photonovelSeries": true,
    "parentSeries": [
      {
        "uid": "string",
        "title": "string",
        "publishedYearFrom": 0,
        "publishedMonthFrom": 0,
        "publishedDayFrom": 0,
        "publishedYearTo": 0,
        "publishedMonthTo": 0,
        "publishedDayTo": 0,
        "numberOfIssues": 0,
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "miniseries": true,
        "photonovelSeries": true
      }
    ],
    "childSeries": [
      {
        "uid": "string",
        "title": "string",
        "publishedYearFrom": 0,
        "publishedMonthFrom": 0,
        "publishedDayFrom": 0,
        "publishedYearTo": 0,
        "publishedMonthTo": 0,
        "publishedDayTo": 0,
        "numberOfIssues": 0,
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "miniseries": true,
        "photonovelSeries": true
      }
    ],
    "publishers": [
      {
        "uid": "string",
        "name": "string",
        "broadcaster": true,
        "collectibleCompany": true,
        "conglomerate": true,
        "digitalVisualEffectsCompany": true,
        "distributor": true,
        "gameCompany": true,
        "filmEquipmentCompany": true,
        "makeUpEffectsStudio": true,
        "mattePaintingCompany": true,
        "modelAndMiniatureEffectsCompany": true,
        "postProductionCompany": true,
        "productionCompany": true,
        "propCompany": true,
        "recordLabel": true,
        "specialEffectsCompany": true,
        "tvAndFilmProductionCompany": true,
        "videoGameCompany": true
      }
    ],
    "comics": [
      {
        "uid": "string",
        "title": "string",
        "publishedYear": 0,
        "publishedMonth": 0,
        "publishedDay": 0,
        "coverYear": 0,
        "coverMonth": 0,
        "coverDay": 0,
        "numberOfPages": 0,
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "photonovel": true,
        "adaptation": true
      }
    ]
  }
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getcomicseries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ComicSeriesFullResponse](#schemacomicseriesfullresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## get/comicSeries/search

> Code samples

```bash
curl https://example.com/comicSeries/search \
  -H 'Accept: application/json'
```

`GET /comicSeries/search`

Pagination over comic series

<h3 id="getcomicseriessearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "comicSeries": [
    {
      "uid": "string",
      "title": "string",
      "publishedYearFrom": 0,
      "publishedMonthFrom": 0,
      "publishedDayFrom": 0,
      "publishedYearTo": 0,
      "publishedMonthTo": 0,
      "publishedDayTo": 0,
      "numberOfIssues": 0,
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "miniseries": true,
      "photonovelSeries": true
    }
  ]
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getcomicseriessearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ComicSeriesBaseResponse](#schemacomicseriesbaseresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/comicSeries/search

> Code samples

```bash
curl https://example.com/comicSeries/search \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'title=string&publishedYearFrom=0&publishedYearTo=0&numberOfIssuesFrom=0&numberOfIssuesTo=0&stardateFrom=0&stardateTo=0&yearFrom=0&yearTo=0&miniseries=true&photonovelSeries=true'
```

`POST /comicSeries/search`

Searching comic series

> Body parameter

```yaml
title: string
publishedYearFrom: 0
publishedYearTo: 0
numberOfIssuesFrom: 0
numberOfIssuesTo: 0
stardateFrom: 0
stardateTo: 0
yearFrom: 0
yearTo: 0
miniseries: true
photonovelSeries: true
```

<h3 id="postcomicseriessearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|sort|query|string|false|Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC|
|apiKey|query|string|false|API key|
|body|body|object|false|none|
|» title|body|string|false|Comic series title|
|» publishedYearFrom|body|integer(int32)|false|Starting year the comic series was published|
|» publishedYearTo|body|integer(int32)|false|Ending year the comic series was published|
|» numberOfIssuesFrom|body|integer(int32)|false|Minimal number of issues|
|» numberOfIssuesTo|body|integer(int32)|false|Maximal number of issues|
|» stardateFrom|body|number(float)|false|Starting stardate of comic series stories|
|» stardateTo|body|number(float)|false|Starting stardate of comic series stories|
|» yearFrom|body|integer(int32)|false|Starting year of comic series stories|
|» yearTo|body|integer(int32)|false|Ending year of comic series stories|
|» miniseries|body|boolean|false|Whether it should be a miniseries|
|» photonovelSeries|body|boolean|false|Whether it should be photonovel series|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "comicSeries": [
    {
      "uid": "string",
      "title": "string",
      "publishedYearFrom": 0,
      "publishedMonthFrom": 0,
      "publishedDayFrom": 0,
      "publishedYearTo": 0,
      "publishedMonthTo": 0,
      "publishedDayTo": 0,
      "numberOfIssues": 0,
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "miniseries": true,
      "photonovelSeries": true
    }
  ]
}
```

<h3 id="postcomicseriessearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ComicSeriesBaseResponse](#schemacomicseriesbaseresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="stapi-comicstrip">ComicStrip</h1>

## get/comicStrip

> Code samples

```bash
curl 'https://example.com/comicStrip?uid=string' \
  -H 'Accept: application/json'
```

`GET /comicStrip`

Retrival of a single comic strip

<h3 id="getcomicstrip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|query|string|true|Comic strip unique ID|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "comicStrip": {
    "uid": "string",
    "title": "string",
    "periodical": "string",
    "publishedYearFrom": 0,
    "publishedMonthFrom": 0,
    "publishedDayFrom": 0,
    "publishedYearTo": 0,
    "publishedMonthTo": 0,
    "publishedDayTo": 0,
    "numberOfPages": 0,
    "yearFrom": 0,
    "yearTo": 0,
    "comicSeries": [
      {
        "uid": "string",
        "title": "string",
        "publishedYearFrom": 0,
        "publishedMonthFrom": 0,
        "publishedDayFrom": 0,
        "publishedYearTo": 0,
        "publishedMonthTo": 0,
        "publishedDayTo": 0,
        "numberOfIssues": 0,
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "miniseries": true,
        "photonovelSeries": true
      }
    ],
    "writers": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "artists": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "characters": [
      {
        "uid": "string",
        "name": "string",
        "gender": "F",
        "yearOfBirth": 0,
        "monthOfBirth": 0,
        "dayOfBirth": 0,
        "placeOfBirth": "string",
        "yearOfDeath": 0,
        "monthOfDeath": 0,
        "dayOfDeath": 0,
        "placeOfDeath": "string",
        "height": 0,
        "weight": 0,
        "deceased": true,
        "bloodType": "B_NEGATIVE",
        "maritalStatus": "SINGLE",
        "serialNumber": "string",
        "hologramActivationDate": "string",
        "hologramStatus": "string",
        "hologramDateStatus": "string",
        "hologram": true,
        "fictionalCharacter": true,
        "mirror": true,
        "alternateReality": true
      }
    ]
  }
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getcomicstrip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ComicStripFullResponse](#schemacomicstripfullresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## get/comicStrip/search

> Code samples

```bash
curl https://example.com/comicStrip/search \
  -H 'Accept: application/json'
```

`GET /comicStrip/search`

Pagination over comic strips

<h3 id="getcomicstripsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "comicStrips": [
    {
      "uid": "string",
      "title": "string",
      "periodical": "string",
      "publishedYearFrom": 0,
      "publishedMonthFrom": 0,
      "publishedDayFrom": 0,
      "publishedYearTo": 0,
      "publishedMonthTo": 0,
      "publishedDayTo": 0,
      "numberOfPages": 0,
      "yearFrom": 0,
      "yearTo": 0
    }
  ]
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getcomicstripsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ComicStripBaseResponse](#schemacomicstripbaseresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/comicStrip/search

> Code samples

```bash
curl https://example.com/comicStrip/search \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'title=string&publishedYearFrom=0&publishedYearTo=0&numberOfPagesFrom=0&numberOfPagesTo=0&yearFrom=0&yearTo=0'
```

`POST /comicStrip/search`

Searching comic strips

> Body parameter

```yaml
title: string
publishedYearFrom: 0
publishedYearTo: 0
numberOfPagesFrom: 0
numberOfPagesTo: 0
yearFrom: 0
yearTo: 0
```

<h3 id="postcomicstripsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|sort|query|string|false|Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC|
|apiKey|query|string|false|API key|
|body|body|object|false|none|
|» title|body|string|false|Comic strip title|
|» publishedYearFrom|body|integer(int32)|false|Starting year the comic strip was published|
|» publishedYearTo|body|integer(int32)|false|Ending year the comic strip was published|
|» numberOfPagesFrom|body|integer(int32)|false|Minimal number of pages|
|» numberOfPagesTo|body|integer(int32)|false|Maximal number of pages|
|» yearFrom|body|integer(int32)|false|Starting year of comic strip story|
|» yearTo|body|integer(int32)|false|Ending year of comic strip story|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "comicStrips": [
    {
      "uid": "string",
      "title": "string",
      "periodical": "string",
      "publishedYearFrom": 0,
      "publishedMonthFrom": 0,
      "publishedDayFrom": 0,
      "publishedYearTo": 0,
      "publishedMonthTo": 0,
      "publishedDayTo": 0,
      "numberOfPages": 0,
      "yearFrom": 0,
      "yearTo": 0
    }
  ]
}
```

<h3 id="postcomicstripsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ComicStripBaseResponse](#schemacomicstripbaseresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="stapi-company">Company</h1>

## get/company

> Code samples

```bash
curl 'https://example.com/company?uid=string' \
  -H 'Accept: application/json'
```

`GET /company`

Retrival of a single company

<h3 id="getcompany-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|query|string|true|Company unique ID|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "company": {
    "uid": "string",
    "name": "string",
    "broadcaster": true,
    "collectibleCompany": true,
    "conglomerate": true,
    "digitalVisualEffectsCompany": true,
    "distributor": true,
    "gameCompany": true,
    "filmEquipmentCompany": true,
    "makeUpEffectsStudio": true,
    "mattePaintingCompany": true,
    "modelAndMiniatureEffectsCompany": true,
    "postProductionCompany": true,
    "productionCompany": true,
    "propCompany": true,
    "recordLabel": true,
    "specialEffectsCompany": true,
    "tvAndFilmProductionCompany": true,
    "videoGameCompany": true
  }
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getcompany-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CompanyFullResponse](#schemacompanyfullresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## get/company/search

> Code samples

```bash
curl https://example.com/company/search \
  -H 'Accept: application/json'
```

`GET /company/search`

Pagination over companies

<h3 id="getcompanysearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "companies": [
    {
      "uid": "string",
      "name": "string",
      "broadcaster": true,
      "collectibleCompany": true,
      "conglomerate": true,
      "digitalVisualEffectsCompany": true,
      "distributor": true,
      "gameCompany": true,
      "filmEquipmentCompany": true,
      "makeUpEffectsStudio": true,
      "mattePaintingCompany": true,
      "modelAndMiniatureEffectsCompany": true,
      "postProductionCompany": true,
      "productionCompany": true,
      "propCompany": true,
      "recordLabel": true,
      "specialEffectsCompany": true,
      "tvAndFilmProductionCompany": true,
      "videoGameCompany": true
    }
  ]
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getcompanysearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CompanyBaseResponse](#schemacompanybaseresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/company/search

> Code samples

```bash
curl https://example.com/company/search \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'name=string&broadcaster=true&collectibleCompany=true&conglomerate=true&digitalVisualEffectsCompany=true&distributor=true&gameCompany=true&filmEquipmentCompany=true&makeUpEffectsStudio=true&mattePaintingCompany=true&modelAndMiniatureEffectsCompany=true&postProductionCompany=true&productionCompany=true&propCompany=true&recordLabel=true&specialEffectsCompany=true&tvAndFilmProductionCompany=true&videoGameCompany=true'
```

`POST /company/search`

Searching companies

> Body parameter

```yaml
name: string
broadcaster: true
collectibleCompany: true
conglomerate: true
digitalVisualEffectsCompany: true
distributor: true
gameCompany: true
filmEquipmentCompany: true
makeUpEffectsStudio: true
mattePaintingCompany: true
modelAndMiniatureEffectsCompany: true
postProductionCompany: true
productionCompany: true
propCompany: true
recordLabel: true
specialEffectsCompany: true
tvAndFilmProductionCompany: true
videoGameCompany: true
```

<h3 id="postcompanysearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|sort|query|string|false|Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC|
|apiKey|query|string|false|API key|
|body|body|object|false|none|
|» name|body|string|false|Company name|
|» broadcaster|body|boolean|false|Whether it should be a broadcaster|
|» collectibleCompany|body|boolean|false|Whether it should be a collectible company|
|» conglomerate|body|boolean|false|Whether it should be a conglomerate|
|» digitalVisualEffectsCompany|body|boolean|false|Whether it should be a digital visual effects company|
|» distributor|body|boolean|false|Whether it should be a distributor|
|» gameCompany|body|boolean|false|Whether it should be a game company|
|» filmEquipmentCompany|body|boolean|false|Whether it should be a film equipment company|
|» makeUpEffectsStudio|body|boolean|false|Whether it should be a make-up effects studio|
|» mattePaintingCompany|body|boolean|false|Whether it should be a matte painting company|
|» modelAndMiniatureEffectsCompany|body|boolean|false|Whether it should be a model and miniature effects company|
|» postProductionCompany|body|boolean|false|Whether it should be a post-production company|
|» productionCompany|body|boolean|false|Whether it should be a production company|
|» propCompany|body|boolean|false|Whether it should be a prop company|
|» recordLabel|body|boolean|false|Whether it should be a record label|
|» specialEffectsCompany|body|boolean|false|Whether it should be a special effects company|
|» tvAndFilmProductionCompany|body|boolean|false|Whether it should be a TV and film production company|
|» videoGameCompany|body|boolean|false|Whether it should be a video game company|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "companies": [
    {
      "uid": "string",
      "name": "string",
      "broadcaster": true,
      "collectibleCompany": true,
      "conglomerate": true,
      "digitalVisualEffectsCompany": true,
      "distributor": true,
      "gameCompany": true,
      "filmEquipmentCompany": true,
      "makeUpEffectsStudio": true,
      "mattePaintingCompany": true,
      "modelAndMiniatureEffectsCompany": true,
      "postProductionCompany": true,
      "productionCompany": true,
      "propCompany": true,
      "recordLabel": true,
      "specialEffectsCompany": true,
      "tvAndFilmProductionCompany": true,
      "videoGameCompany": true
    }
  ]
}
```

<h3 id="postcompanysearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CompanyBaseResponse](#schemacompanybaseresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="stapi-conflict">Conflict</h1>

## get/conflict

> Code samples

```bash
curl 'https://example.com/conflict?uid=string' \
  -H 'Accept: application/json'
```

`GET /conflict`

Retrival of a single conflict

<h3 id="getconflict-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|query|string|true|Conflict unique ID|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "conflict": {
    "uid": "string",
    "name": "string",
    "yearFrom": 0,
    "yearTo": 0,
    "earthConflict": true,
    "federationWar": true,
    "klingonWar": true,
    "dominionWarBattle": true,
    "alternateReality": true,
    "locations": [
      {
        "uid": "string",
        "name": "string",
        "earthlyLocation": true,
        "fictionalLocation": true,
        "religiousLocation": true,
        "geographicalLocation": true,
        "bodyOfWater": true,
        "country": true,
        "subnationalEntity": true,
        "settlement": true,
        "usSettlement": true,
        "bajoranSettlement": true,
        "colony": true,
        "landform": true,
        "landmark": true,
        "road": true,
        "structure": true,
        "shipyard": true,
        "buildingInterior": true,
        "establishment": true,
        "medicalEstablishment": true,
        "ds9Establishment": true,
        "school": true,
        "mirror": true,
        "alternateReality": true
      }
    ],
    "firstSideBelligerents": [
      {
        "uid": "string",
        "name": "string",
        "government": true,
        "intergovernmentalOrganization": true,
        "researchOrganization": true,
        "sportOrganization": true,
        "medicalOrganization": true,
        "militaryOrganization": true,
        "militaryUnit": true,
        "governmentAgency": true,
        "lawEnforcementAgency": true,
        "prisonOrPenalColony": true,
        "mirror": true,
        "alternateReality": true
      }
    ],
    "firstSideCommanders": [
      {
        "uid": "string",
        "name": "string",
        "gender": "F",
        "yearOfBirth": 0,
        "monthOfBirth": 0,
        "dayOfBirth": 0,
        "placeOfBirth": "string",
        "yearOfDeath": 0,
        "monthOfDeath": 0,
        "dayOfDeath": 0,
        "placeOfDeath": "string",
        "height": 0,
        "weight": 0,
        "deceased": true,
        "bloodType": "B_NEGATIVE",
        "maritalStatus": "SINGLE",
        "serialNumber": "string",
        "hologramActivationDate": "string",
        "hologramStatus": "string",
        "hologramDateStatus": "string",
        "hologram": true,
        "fictionalCharacter": true,
        "mirror": true,
        "alternateReality": true
      }
    ],
    "secondSideBelligerents": [
      {
        "uid": "string",
        "name": "string",
        "government": true,
        "intergovernmentalOrganization": true,
        "researchOrganization": true,
        "sportOrganization": true,
        "medicalOrganization": true,
        "militaryOrganization": true,
        "militaryUnit": true,
        "governmentAgency": true,
        "lawEnforcementAgency": true,
        "prisonOrPenalColony": true,
        "mirror": true,
        "alternateReality": true
      }
    ],
    "secondSideCommanders": [
      {
        "uid": "string",
        "name": "string",
        "gender": "F",
        "yearOfBirth": 0,
        "monthOfBirth": 0,
        "dayOfBirth": 0,
        "placeOfBirth": "string",
        "yearOfDeath": 0,
        "monthOfDeath": 0,
        "dayOfDeath": 0,
        "placeOfDeath": "string",
        "height": 0,
        "weight": 0,
        "deceased": true,
        "bloodType": "B_NEGATIVE",
        "maritalStatus": "SINGLE",
        "serialNumber": "string",
        "hologramActivationDate": "string",
        "hologramStatus": "string",
        "hologramDateStatus": "string",
        "hologram": true,
        "fictionalCharacter": true,
        "mirror": true,
        "alternateReality": true
      }
    ]
  }
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getconflict-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ConflictFullResponse](#schemaconflictfullresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## get/conflict/search

> Code samples

```bash
curl https://example.com/conflict/search \
  -H 'Accept: application/json'
```

`GET /conflict/search`

Pagination over conflicts

<h3 id="getconflictsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "conflicts": [
    {
      "uid": "string",
      "name": "string",
      "yearFrom": 0,
      "yearTo": 0,
      "earthConflict": true,
      "federationWar": true,
      "klingonWar": true,
      "dominionWarBattle": true,
      "alternateReality": true
    }
  ]
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getconflictsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ConflictBaseResponse](#schemaconflictbaseresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/conflict/search

> Code samples

```bash
curl https://example.com/conflict/search \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'name=string&yearFrom=0&yearTo=0&earthConflict=true&federationWar=true&klingonWar=true&dominionWarBattle=true&alternateReality=true'
```

`POST /conflict/search`

Searching conflicts

> Body parameter

```yaml
name: string
yearFrom: 0
yearTo: 0
earthConflict: true
federationWar: true
klingonWar: true
dominionWarBattle: true
alternateReality: true
```

<h3 id="postconflictsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|sort|query|string|false|Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC|
|apiKey|query|string|false|API key|
|body|body|object|false|none|
|» name|body|string|false|Conflict name|
|» yearFrom|body|integer(int32)|false|Starting year of the conflict|
|» yearTo|body|integer(int32)|false|Ending year of the conflict|
|» earthConflict|body|boolean|false|Whether it should be an Earth conflict|
|» federationWar|body|boolean|false|Whether this conflict should be a part of war involving Federation|
|» klingonWar|body|boolean|false|Whether this conflict should be a part of war involving the Klingons|
|» dominionWarBattle|body|boolean|false|Whether this conflict should be a Dominion war battle|
|» alternateReality|body|boolean|false|Whether this conflict should be from alternate reality|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "conflicts": [
    {
      "uid": "string",
      "name": "string",
      "yearFrom": 0,
      "yearTo": 0,
      "earthConflict": true,
      "federationWar": true,
      "klingonWar": true,
      "dominionWarBattle": true,
      "alternateReality": true
    }
  ]
}
```

<h3 id="postconflictsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ConflictBaseResponse](#schemaconflictbaseresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="stapi-element">Element</h1>

## get/element

> Code samples

```bash
curl 'https://example.com/element?uid=string' \
  -H 'Accept: application/json'
```

`GET /element`

Retrival of a single element

<h3 id="getelement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|query|string|true|Element unique ID|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "element": {
    "uid": "string",
    "name": "string",
    "symbol": "string",
    "atomicNumber": 0,
    "atomicWeight": 0,
    "transuranium": true,
    "gammaSeries": true,
    "hypersonicSeries": true,
    "megaSeries": true,
    "omegaSeries": true,
    "transonicSeries": true,
    "worldSeries": true
  }
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getelement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ElementFullResponse](#schemaelementfullresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## get/element/search

> Code samples

```bash
curl https://example.com/element/search \
  -H 'Accept: application/json'
```

`GET /element/search`

Pagination over elements

<h3 id="getelementsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "elements": [
    {
      "uid": "string",
      "name": "string",
      "symbol": "string",
      "atomicNumber": 0,
      "atomicWeight": 0,
      "transuranium": true,
      "gammaSeries": true,
      "hypersonicSeries": true,
      "megaSeries": true,
      "omegaSeries": true,
      "transonicSeries": true,
      "worldSeries": true
    }
  ]
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getelementsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ElementBaseResponse](#schemaelementbaseresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/element/search

> Code samples

```bash
curl https://example.com/element/search \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'name=string&symbol=string&transuranium=true&gammaSeries=true&hypersonicSeries=true&megaSeries=true&omegaSeries=true&transonicSeries=true&worldSeries=true'
```

`POST /element/search`

Searching elements

> Body parameter

```yaml
name: string
symbol: string
transuranium: true
gammaSeries: true
hypersonicSeries: true
megaSeries: true
omegaSeries: true
transonicSeries: true
worldSeries: true
```

<h3 id="postelementsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|sort|query|string|false|Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC|
|apiKey|query|string|false|API key|
|body|body|object|false|none|
|» name|body|string|false|Element name|
|» symbol|body|string|false|Element symbol|
|» transuranium|body|boolean|false|Whether it should be a transuranium|
|» gammaSeries|body|boolean|false|Whether it should belong to Gamma series|
|» hypersonicSeries|body|boolean|false|Whether it should belong to Hypersonic series|
|» megaSeries|body|boolean|false|Whether it should belong to Mega series|
|» omegaSeries|body|boolean|false|Whether it should belong to Omega series|
|» transonicSeries|body|boolean|false|Whether it should belong to Transonic series|
|» worldSeries|body|boolean|false|Whether it should belong to World series|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "elements": [
    {
      "uid": "string",
      "name": "string",
      "symbol": "string",
      "atomicNumber": 0,
      "atomicWeight": 0,
      "transuranium": true,
      "gammaSeries": true,
      "hypersonicSeries": true,
      "megaSeries": true,
      "omegaSeries": true,
      "transonicSeries": true,
      "worldSeries": true
    }
  ]
}
```

<h3 id="postelementsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ElementBaseResponse](#schemaelementbaseresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="stapi-episode">Episode</h1>

## get/episode

> Code samples

```bash
curl 'https://example.com/episode?uid=string' \
  -H 'Accept: application/json'
```

`GET /episode`

Retrival of a single episode

<h3 id="getepisode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|query|string|true|Episode unique ID|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "episode": {
    "uid": "string",
    "title": "string",
    "titleGerman": "string",
    "titleItalian": "string",
    "titleJapanese": "string",
    "series": {
      "uid": "string",
      "title": "string",
      "abbreviation": "string",
      "productionStartYear": 0,
      "productionEndYear": 0,
      "originalRunStartDate": "1970-01-01",
      "originalRunEndDate": "1970-01-01",
      "seasonsCount": 0,
      "episodesCount": 0,
      "featureLengthEpisodesCount": 0,
      "productionCompany": {
        "uid": "string",
        "name": "string"
      },
      "originalBroadcaster": {
        "uid": "string",
        "name": "string"
      }
    },
    "season": {
      "uid": "string",
      "title": "string",
      "series": {
        "uid": "string",
        "title": "string"
      },
      "seasonNumber": 0,
      "numberOfEpisodes": 0
    },
    "seasonNumber": 0,
    "episodeNumber": 0,
    "productionSerialNumber": "string",
    "featureLength": true,
    "stardateFrom": 0,
    "stardateTo": 0,
    "yearFrom": 0,
    "yearTo": 0,
    "usAirDate": "1970-01-01",
    "finalScriptDate": "1970-01-01",
    "writers": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "teleplayAuthors": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "storyAuthors": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "directors": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "performers": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "animalPerformer": true,
        "disPerformer": true,
        "ds9Performer": true,
        "entPerformer": true,
        "filmPerformer": true,
        "standInPerformer": true,
        "stuntPerformer": true,
        "tasPerformer": true,
        "tngPerformer": true,
        "tosPerformer": true,
        "videoGamePerformer": true,
        "voicePerformer": true,
        "voyPerformer": true
      }
    ],
    "stuntPerformers": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "animalPerformer": true,
        "disPerformer": true,
        "ds9Performer": true,
        "entPerformer": true,
        "filmPerformer": true,
        "standInPerformer": true,
        "stuntPerformer": true,
        "tasPerformer": true,
        "tngPerformer": true,
        "tosPerformer": true,
        "videoGamePerformer": true,
        "voicePerformer": true,
        "voyPerformer": true
      }
    ],
    "standInPerformers": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "animalPerformer": true,
        "disPerformer": true,
        "ds9Performer": true,
        "entPerformer": true,
        "filmPerformer": true,
        "standInPerformer": true,
        "stuntPerformer": true,
        "tasPerformer": true,
        "tngPerformer": true,
        "tosPerformer": true,
        "videoGamePerformer": true,
        "voicePerformer": true,
        "voyPerformer": true
      }
    ],
    "characters": [
      {
        "uid": "string",
        "name": "string",
        "gender": "F",
        "yearOfBirth": 0,
        "monthOfBirth": 0,
        "dayOfBirth": 0,
        "placeOfBirth": "string",
        "yearOfDeath": 0,
        "monthOfDeath": 0,
        "dayOfDeath": 0,
        "placeOfDeath": "string",
        "height": 0,
        "weight": 0,
        "deceased": true,
        "bloodType": "B_NEGATIVE",
        "maritalStatus": "SINGLE",
        "serialNumber": "string",
        "hologramActivationDate": "string",
        "hologramStatus": "string",
        "hologramDateStatus": "string",
        "hologram": true,
        "fictionalCharacter": true,
        "mirror": true,
        "alternateReality": true
      }
    ]
  }
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getepisode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EpisodeFullResponse](#schemaepisodefullresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## get/episode/search

> Code samples

```bash
curl https://example.com/episode/search \
  -H 'Accept: application/json'
```

`GET /episode/search`

Pagination over episodes

<h3 id="getepisodesearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "episodes": [
    {
      "uid": "string",
      "title": "string",
      "titleGerman": "string",
      "titleItalian": "string",
      "titleJapanese": "string",
      "series": {
        "uid": "string",
        "title": "string"
      },
      "season": {
        "uid": "string",
        "title": "string"
      },
      "seasonNumber": 0,
      "episodeNumber": 0,
      "productionSerialNumber": "string",
      "featureLength": true,
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "usAirDate": "1970-01-01",
      "finalScriptDate": "1970-01-01"
    }
  ]
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getepisodesearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EpisodeBaseResponse](#schemaepisodebaseresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/episode/search

> Code samples

```bash
curl https://example.com/episode/search \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'title=string&seasonNumberFrom=0&seasonNumberTo=0&episodeNumberFrom=0&episodeNumberTo=0&productionSerialNumber=string&featureLength=true&stardateFrom=0&stardateTo=0&yearFrom=0&yearTo=0&usAirDateFrom=1970-01-01&usAirDateTo=1970-01-01&finalScriptDateFrom=1970-01-01&finalScriptDateTo=1970-01-01'
```

`POST /episode/search`

Searching episodes

> Body parameter

```yaml
title: string
seasonNumberFrom: 0
seasonNumberTo: 0
episodeNumberFrom: 0
episodeNumberTo: 0
productionSerialNumber: string
featureLength: true
stardateFrom: 0
stardateTo: 0
yearFrom: 0
yearTo: 0
usAirDateFrom: "1970-01-01"
usAirDateTo: "1970-01-01"
finalScriptDateFrom: "1970-01-01"
finalScriptDateTo: "1970-01-01"
```

<h3 id="postepisodesearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|sort|query|string|false|Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC|
|apiKey|query|string|false|API key|
|body|body|object|false|none|
|» title|body|string|false|Episode title|
|» seasonNumberFrom|body|integer(int32)|false|Minimal season number|
|» seasonNumberTo|body|integer(int32)|false|Maximal season number|
|» episodeNumberFrom|body|integer(int32)|false|Minimal episode number in season|
|» episodeNumberTo|body|integer(int32)|false|Maximal episode number in season|
|» productionSerialNumber|body|string|false|Production serial number|
|» featureLength|body|boolean|false|Whether it should be a feature length episode|
|» stardateFrom|body|number(float)|false|Starting stardate of episode story|
|» stardateTo|body|number(float)|false|Ending stardate of episode story|
|» yearFrom|body|integer(int32)|false|Starting year of episode story|
|» yearTo|body|integer(int32)|false|Ending year of episode story|
|» usAirDateFrom|body|string(date)|false|Minimal date the episode was first aired in the United States|
|» usAirDateTo|body|string(date)|false|Maximal date the episode was first aired in the United States|
|» finalScriptDateFrom|body|string(date)|false|Minimal date the episode script was completed|
|» finalScriptDateTo|body|string(date)|false|Maximal date the episode script was completed|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "episodes": [
    {
      "uid": "string",
      "title": "string",
      "titleGerman": "string",
      "titleItalian": "string",
      "titleJapanese": "string",
      "series": {
        "uid": "string",
        "title": "string"
      },
      "season": {
        "uid": "string",
        "title": "string"
      },
      "seasonNumber": 0,
      "episodeNumber": 0,
      "productionSerialNumber": "string",
      "featureLength": true,
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "usAirDate": "1970-01-01",
      "finalScriptDate": "1970-01-01"
    }
  ]
}
```

<h3 id="postepisodesearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EpisodeBaseResponse](#schemaepisodebaseresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="stapi-food">Food</h1>

## get/food

> Code samples

```bash
curl 'https://example.com/food?uid=string' \
  -H 'Accept: application/json'
```

`GET /food`

Retrival of a single food

<h3 id="getfood-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|query|string|true|Food unique ID|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "food": {
    "uid": "string",
    "name": "string",
    "earthlyOrigin": true,
    "dessert": true,
    "fruit": true,
    "herbOrSpice": true,
    "sauce": true,
    "soup": true,
    "beverage": true,
    "alcoholicBeverage": true,
    "juice": true,
    "tea": true
  }
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getfood-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[FoodFullResponse](#schemafoodfullresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## get/food/search

> Code samples

```bash
curl https://example.com/food/search \
  -H 'Accept: application/json'
```

`GET /food/search`

Pagination over foods

<h3 id="getfoodsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "foods": [
    {
      "uid": "string",
      "name": "string",
      "earthlyOrigin": true,
      "dessert": true,
      "fruit": true,
      "herbOrSpice": true,
      "sauce": true,
      "soup": true,
      "beverage": true,
      "alcoholicBeverage": true,
      "juice": true,
      "tea": true
    }
  ]
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getfoodsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[FoodBaseResponse](#schemafoodbaseresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/food/search

> Code samples

```bash
curl https://example.com/food/search \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'name=string&earthlyOrigin=true&dessert=true&fruit=true&herbOrSpice=true&sauce=true&soup=true&beverage=true&alcoholicBeverage=true&juice=true&tea=true'
```

`POST /food/search`

Searching foods

> Body parameter

```yaml
name: string
earthlyOrigin: true
dessert: true
fruit: true
herbOrSpice: true
sauce: true
soup: true
beverage: true
alcoholicBeverage: true
juice: true
tea: true
```

<h3 id="postfoodsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|sort|query|string|false|Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC|
|apiKey|query|string|false|API key|
|body|body|object|false|none|
|» name|body|string|false|Food name|
|» earthlyOrigin|body|boolean|false|Whether it should be of earthly origin|
|» dessert|body|boolean|false|Whether it should be a dessert|
|» fruit|body|boolean|false|Whether it should be a fruit|
|» herbOrSpice|body|boolean|false|Whether it should be an herb or a spice|
|» sauce|body|boolean|false|Whether it should be a sauce|
|» soup|body|boolean|false|Whether it should be a soup|
|» beverage|body|boolean|false|Whether it should be a beverage|
|» alcoholicBeverage|body|boolean|false|Whether it should be an alcoholic beverage|
|» juice|body|boolean|false|Whether it should be a juice|
|» tea|body|boolean|false|Whether it should be a tea|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "foods": [
    {
      "uid": "string",
      "name": "string",
      "earthlyOrigin": true,
      "dessert": true,
      "fruit": true,
      "herbOrSpice": true,
      "sauce": true,
      "soup": true,
      "beverage": true,
      "alcoholicBeverage": true,
      "juice": true,
      "tea": true
    }
  ]
}
```

<h3 id="postfoodsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[FoodBaseResponse](#schemafoodbaseresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="stapi-literature">Literature</h1>

## get/literature

> Code samples

```bash
curl 'https://example.com/literature?uid=string' \
  -H 'Accept: application/json'
```

`GET /literature`

Retrival of a single literature

<h3 id="getliterature-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|query|string|true|Literature unique ID|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "literature": {
    "uid": "string",
    "title": "string",
    "earthlyOrigin": true,
    "shakespeareanWork": true,
    "report": true,
    "scientificLiterature": true,
    "technicalManual": true,
    "religiousLiterature": true
  }
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getliterature-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LiteratureFullResponse](#schemaliteraturefullresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## get/literature/search

> Code samples

```bash
curl https://example.com/literature/search \
  -H 'Accept: application/json'
```

`GET /literature/search`

Pagination over literature

<h3 id="getliteraturesearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "literature": [
    {
      "uid": "string",
      "title": "string",
      "earthlyOrigin": true,
      "shakespeareanWork": true,
      "report": true,
      "scientificLiterature": true,
      "technicalManual": true,
      "religiousLiterature": true
    }
  ]
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getliteraturesearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LiteratureBaseResponse](#schemaliteraturebaseresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/literature/search

> Code samples

```bash
curl https://example.com/literature/search \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'title=string&earthlyOrigin=true&shakespeareanWork=true&report=true&scientificLiterature=true&technicalManual=true&religiousLiterature=true'
```

`POST /literature/search`

Searching literature

> Body parameter

```yaml
title: string
earthlyOrigin: true
shakespeareanWork: true
report: true
scientificLiterature: true
technicalManual: true
religiousLiterature: true
```

<h3 id="postliteraturesearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|sort|query|string|false|Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC|
|apiKey|query|string|false|API key|
|body|body|object|false|none|
|» title|body|string|false|Literature title|
|» earthlyOrigin|body|boolean|false|Whether it should be of earthly origin|
|» shakespeareanWork|body|boolean|false|Whether it should be a Shakespearean work|
|» report|body|boolean|false|Whether it should be a report|
|» scientificLiterature|body|boolean|false|Whether it should be a scientific literature|
|» technicalManual|body|boolean|false|Whether it should be a technical manual|
|» religiousLiterature|body|boolean|false|Whether it should be a religious literature|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "literature": [
    {
      "uid": "string",
      "title": "string",
      "earthlyOrigin": true,
      "shakespeareanWork": true,
      "report": true,
      "scientificLiterature": true,
      "technicalManual": true,
      "religiousLiterature": true
    }
  ]
}
```

<h3 id="postliteraturesearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LiteratureBaseResponse](#schemaliteraturebaseresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="stapi-location">Location</h1>

## get/location

> Code samples

```bash
curl 'https://example.com/location?uid=string' \
  -H 'Accept: application/json'
```

`GET /location`

Retrival of a single location

<h3 id="getlocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|query|string|true|Location unique ID|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "location": {
    "uid": "string",
    "name": "string",
    "earthlyLocation": true,
    "fictionalLocation": true,
    "religiousLocation": true,
    "geographicalLocation": true,
    "bodyOfWater": true,
    "country": true,
    "subnationalEntity": true,
    "settlement": true,
    "usSettlement": true,
    "bajoranSettlement": true,
    "colony": true,
    "landform": true,
    "landmark": true,
    "road": true,
    "structure": true,
    "shipyard": true,
    "buildingInterior": true,
    "establishment": true,
    "medicalEstablishment": true,
    "ds9Establishment": true,
    "school": true,
    "mirror": true,
    "alternateReality": true
  }
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getlocation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LocationFullResponse](#schemalocationfullresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## get/location/search

> Code samples

```bash
curl https://example.com/location/search \
  -H 'Accept: application/json'
```

`GET /location/search`

Pagination over locations

<h3 id="getlocationsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "locations": [
    {
      "uid": "string",
      "name": "string",
      "earthlyLocation": true,
      "fictionalLocation": true,
      "religiousLocation": true,
      "geographicalLocation": true,
      "bodyOfWater": true,
      "country": true,
      "subnationalEntity": true,
      "settlement": true,
      "usSettlement": true,
      "bajoranSettlement": true,
      "colony": true,
      "landform": true,
      "landmark": true,
      "road": true,
      "structure": true,
      "shipyard": true,
      "buildingInterior": true,
      "establishment": true,
      "medicalEstablishment": true,
      "ds9Establishment": true,
      "school": true,
      "mirror": true,
      "alternateReality": true
    }
  ]
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getlocationsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LocationBaseResponse](#schemalocationbaseresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/location/search

> Code samples

```bash
curl https://example.com/location/search \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'name=string&earthlyLocation=true&fictionalLocation=true&religiousLocation=true&geographicalLocation=true&bodyOfWater=true&country=true&subnationalEntity=true&settlement=true&usSettlement=true&bajoranSettlement=true&colony=true&landform=true&landmark=true&road=true&structure=true&shipyard=true&buildingInterior=true&establishment=true&medicalEstablishment=true&ds9Establishment=true&school=true&mirror=true&alternateReality=true'
```

`POST /location/search`

Searching locations

> Body parameter

```yaml
name: string
earthlyLocation: true
fictionalLocation: true
religiousLocation: true
geographicalLocation: true
bodyOfWater: true
country: true
subnationalEntity: true
settlement: true
usSettlement: true
bajoranSettlement: true
colony: true
landform: true
landmark: true
road: true
structure: true
shipyard: true
buildingInterior: true
establishment: true
medicalEstablishment: true
ds9Establishment: true
school: true
mirror: true
alternateReality: true
```

<h3 id="postlocationsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|sort|query|string|false|Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC|
|apiKey|query|string|false|API key|
|body|body|object|false|none|
|» name|body|string|false|Location name|
|» earthlyLocation|body|boolean|false|Whether it should be an earthly location|
|» fictionalLocation|body|boolean|false|Whether it should be a fictional location|
|» religiousLocation|body|boolean|false|Whether it should be a religious location|
|» geographicalLocation|body|boolean|false|Whether it should be a geographical location|
|» bodyOfWater|body|boolean|false|Whether it should be a body of water|
|» country|body|boolean|false|Whether it should be a country|
|» subnationalEntity|body|boolean|false|Whether it should be a subnational entity|
|» settlement|body|boolean|false|Whether it should be a settlement|
|» usSettlement|body|boolean|false|Whether it should be a US settlement|
|» bajoranSettlement|body|boolean|false|Whether it should be a Bajoran settlement|
|» colony|body|boolean|false|Whether it should be a colony|
|» landform|body|boolean|false|Whether it should be a landform|
|» landmark|body|boolean|false|Whether it should be a landmark|
|» road|body|boolean|false|Whether it should be a road|
|» structure|body|boolean|false|Whether it should be a structure|
|» shipyard|body|boolean|false|Whether it should be a shipyard|
|» buildingInterior|body|boolean|false|Whether it should be a building interior|
|» establishment|body|boolean|false|Whether it should be a establishment|
|» medicalEstablishment|body|boolean|false|Whether it should be a medical establishment|
|» ds9Establishment|body|boolean|false|Whether it should be a DS9 establishment|
|» school|body|boolean|false|Whether it should be a school|
|» mirror|body|boolean|false|Whether this location should be from mirror universe|
|» alternateReality|body|boolean|false|Whether this location should be from alternate reality|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "locations": [
    {
      "uid": "string",
      "name": "string",
      "earthlyLocation": true,
      "fictionalLocation": true,
      "religiousLocation": true,
      "geographicalLocation": true,
      "bodyOfWater": true,
      "country": true,
      "subnationalEntity": true,
      "settlement": true,
      "usSettlement": true,
      "bajoranSettlement": true,
      "colony": true,
      "landform": true,
      "landmark": true,
      "road": true,
      "structure": true,
      "shipyard": true,
      "buildingInterior": true,
      "establishment": true,
      "medicalEstablishment": true,
      "ds9Establishment": true,
      "school": true,
      "mirror": true,
      "alternateReality": true
    }
  ]
}
```

<h3 id="postlocationsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LocationBaseResponse](#schemalocationbaseresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="stapi-magazine">Magazine</h1>

## get/magazine

> Code samples

```bash
curl 'https://example.com/magazine?uid=string' \
  -H 'Accept: application/json'
```

`GET /magazine`

Retrival of a single magazine

<h3 id="getmagazine-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|query|string|true|Magazine unique ID|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "magazine": {
    "uid": "string",
    "title": "string",
    "publishedYear": 0,
    "publishedMonth": 0,
    "publishedDay": 0,
    "coverYear": 0,
    "coverMonth": 0,
    "coverDay": 0,
    "numberOfPages": 0,
    "issueNumber": "string",
    "magazineSeries": [
      {
        "uid": "string",
        "title": "string",
        "publishedYearFrom": 0,
        "publishedMonthFrom": 0,
        "publishedYearTo": 0,
        "publishedMonthTo": 0,
        "numberOfIssues": 0
      }
    ],
    "editors": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "publishers": [
      {
        "uid": "string",
        "name": "string",
        "broadcaster": true,
        "collectibleCompany": true,
        "conglomerate": true,
        "digitalVisualEffectsCompany": true,
        "distributor": true,
        "gameCompany": true,
        "filmEquipmentCompany": true,
        "makeUpEffectsStudio": true,
        "mattePaintingCompany": true,
        "modelAndMiniatureEffectsCompany": true,
        "postProductionCompany": true,
        "productionCompany": true,
        "propCompany": true,
        "recordLabel": true,
        "specialEffectsCompany": true,
        "tvAndFilmProductionCompany": true,
        "videoGameCompany": true
      }
    ]
  }
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getmagazine-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MagazineFullResponse](#schemamagazinefullresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## get/magazine/search

> Code samples

```bash
curl https://example.com/magazine/search \
  -H 'Accept: application/json'
```

`GET /magazine/search`

Pagination over magazines

<h3 id="getmagazinesearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "magazines": [
    {
      "uid": "string",
      "title": "string",
      "publishedYear": 0,
      "publishedMonth": 0,
      "publishedDay": 0,
      "coverYear": 0,
      "coverMonth": 0,
      "coverDay": 0,
      "numberOfPages": 0,
      "issueNumber": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getmagazinesearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MagazineBaseResponse](#schemamagazinebaseresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/magazine/search

> Code samples

```bash
curl https://example.com/magazine/search \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'title=string&publishedYearFrom=0&publishedYearTo=0&numberOfPagesFrom=0&numberOfPagesTo=0'
```

`POST /magazine/search`

Searching magazines

> Body parameter

```yaml
title: string
publishedYearFrom: 0
publishedYearTo: 0
numberOfPagesFrom: 0
numberOfPagesTo: 0
```

<h3 id="postmagazinesearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|sort|query|string|false|Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC|
|apiKey|query|string|false|API key|
|body|body|object|false|none|
|» title|body|string|false|Magazine title|
|» publishedYearFrom|body|integer(int32)|false|Starting year the magazine was published|
|» publishedYearTo|body|integer(int32)|false|Ending year the magazine was published|
|» numberOfPagesFrom|body|integer(int32)|false|Minimal number of pages|
|» numberOfPagesTo|body|integer(int32)|false|Maximal number of pages|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "magazines": [
    {
      "uid": "string",
      "title": "string",
      "publishedYear": 0,
      "publishedMonth": 0,
      "publishedDay": 0,
      "coverYear": 0,
      "coverMonth": 0,
      "coverDay": 0,
      "numberOfPages": 0,
      "issueNumber": "string"
    }
  ]
}
```

<h3 id="postmagazinesearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MagazineBaseResponse](#schemamagazinebaseresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="stapi-magazineseries">MagazineSeries</h1>

## get/magazineSeries

> Code samples

```bash
curl 'https://example.com/magazineSeries?uid=string' \
  -H 'Accept: application/json'
```

`GET /magazineSeries`

Retrival of a single magazine series

<h3 id="getmagazineseries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|query|string|true|Magazine series unique ID|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "magazineSeries": {
    "uid": "string",
    "title": "string",
    "publishedYearFrom": 0,
    "publishedMonthFrom": 0,
    "publishedYearTo": 0,
    "publishedMonthTo": 0,
    "numberOfIssues": 0,
    "publishers": [
      {
        "uid": "string",
        "name": "string",
        "broadcaster": true,
        "collectibleCompany": true,
        "conglomerate": true,
        "digitalVisualEffectsCompany": true,
        "distributor": true,
        "gameCompany": true,
        "filmEquipmentCompany": true,
        "makeUpEffectsStudio": true,
        "mattePaintingCompany": true,
        "modelAndMiniatureEffectsCompany": true,
        "postProductionCompany": true,
        "productionCompany": true,
        "propCompany": true,
        "recordLabel": true,
        "specialEffectsCompany": true,
        "tvAndFilmProductionCompany": true,
        "videoGameCompany": true
      }
    ],
    "editors": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "magazines": [
      {
        "uid": "string",
        "title": "string",
        "publishedYear": 0,
        "publishedMonth": 0,
        "publishedDay": 0,
        "coverYear": 0,
        "coverMonth": 0,
        "coverDay": 0,
        "numberOfPages": 0,
        "issueNumber": "string"
      }
    ]
  }
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getmagazineseries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MagazineSeriesFullResponse](#schemamagazineseriesfullresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## get/magazineSeries/search

> Code samples

```bash
curl https://example.com/magazineSeries/search \
  -H 'Accept: application/json'
```

`GET /magazineSeries/search`

Pagination over magazine series

<h3 id="getmagazineseriessearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "magazineSeries": [
    {
      "uid": "string",
      "title": "string",
      "publishedYearFrom": 0,
      "publishedMonthFrom": 0,
      "publishedYearTo": 0,
      "publishedMonthTo": 0,
      "numberOfIssues": 0
    }
  ]
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getmagazineseriessearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MagazineSeriesBaseResponse](#schemamagazineseriesbaseresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/magazineSeries/search

> Code samples

```bash
curl https://example.com/magazineSeries/search \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'title=string&publishedYearFrom=0&publishedYearTo=0&numberOfIssuesFrom=0&numberOfIssuesTo=0'
```

`POST /magazineSeries/search`

Searching magazine series

> Body parameter

```yaml
title: string
publishedYearFrom: 0
publishedYearTo: 0
numberOfIssuesFrom: 0
numberOfIssuesTo: 0
```

<h3 id="postmagazineseriessearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|sort|query|string|false|Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC|
|apiKey|query|string|false|API key|
|body|body|object|false|none|
|» title|body|string|false|Magazine series title|
|» publishedYearFrom|body|integer(int32)|false|Starting year the magazine series was published|
|» publishedYearTo|body|integer(int32)|false|Ending year the magazine series was published|
|» numberOfIssuesFrom|body|integer(int32)|false|Minimal number of issues|
|» numberOfIssuesTo|body|integer(int32)|false|Maximal number of issues|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "magazineSeries": [
    {
      "uid": "string",
      "title": "string",
      "publishedYearFrom": 0,
      "publishedMonthFrom": 0,
      "publishedYearTo": 0,
      "publishedMonthTo": 0,
      "numberOfIssues": 0
    }
  ]
}
```

<h3 id="postmagazineseriessearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MagazineSeriesBaseResponse](#schemamagazineseriesbaseresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="stapi-material">Material</h1>

## get/material

> Code samples

```bash
curl 'https://example.com/material?uid=string' \
  -H 'Accept: application/json'
```

`GET /material`

Retrival of a single material

<h3 id="getmaterial-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|query|string|true|Material unique ID|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "material": {
    "uid": "string",
    "name": "string",
    "chemicalCompound": true,
    "biochemicalCompound": true,
    "drug": true,
    "poisonousSubstance": true,
    "explosive": true,
    "gemstone": true,
    "alloyOrComposite": true,
    "fuel": true,
    "mineral": true,
    "preciousMaterial": true
  }
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getmaterial-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MaterialFullResponse](#schemamaterialfullresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## get/material/search

> Code samples

```bash
curl https://example.com/material/search \
  -H 'Accept: application/json'
```

`GET /material/search`

Pagination over materials

<h3 id="getmaterialsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "materials": [
    {
      "uid": "string",
      "name": "string",
      "chemicalCompound": true,
      "biochemicalCompound": true,
      "drug": true,
      "poisonousSubstance": true,
      "explosive": true,
      "gemstone": true,
      "alloyOrComposite": true,
      "fuel": true,
      "mineral": true,
      "preciousMaterial": true
    }
  ]
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getmaterialsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MaterialBaseResponse](#schemamaterialbaseresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/material/search

> Code samples

```bash
curl https://example.com/material/search \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'name=string&chemicalCompound=true&biochemicalCompound=true&drug=true&poisonousSubstance=true&explosive=true&gemstone=true&alloyOrComposite=true&fuel=true&mineral=true&preciousMaterial=true'
```

`POST /material/search`

Searching materials

> Body parameter

```yaml
name: string
chemicalCompound: true
biochemicalCompound: true
drug: true
poisonousSubstance: true
explosive: true
gemstone: true
alloyOrComposite: true
fuel: true
mineral: true
preciousMaterial: true
```

<h3 id="postmaterialsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|sort|query|string|false|Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC|
|apiKey|query|string|false|API key|
|body|body|object|false|none|
|» name|body|string|false|Material name|
|» chemicalCompound|body|boolean|false|Whether it should be a chemical compound|
|» biochemicalCompound|body|boolean|false|Whether it should be a biochemical compound|
|» drug|body|boolean|false|Whether it should be a drug|
|» poisonousSubstance|body|boolean|false|Whether it should be a poisonous substance|
|» explosive|body|boolean|false|Whether it should be an explosive|
|» gemstone|body|boolean|false|Whether it should be a gemstone|
|» alloyOrComposite|body|boolean|false|Whether it should be an alloy or a composite|
|» fuel|body|boolean|false|Whether it should be a fuel|
|» mineral|body|boolean|false|Whether it should be a mineral|
|» preciousMaterial|body|boolean|false|Whether it should be a precious material|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "materials": [
    {
      "uid": "string",
      "name": "string",
      "chemicalCompound": true,
      "biochemicalCompound": true,
      "drug": true,
      "poisonousSubstance": true,
      "explosive": true,
      "gemstone": true,
      "alloyOrComposite": true,
      "fuel": true,
      "mineral": true,
      "preciousMaterial": true
    }
  ]
}
```

<h3 id="postmaterialsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MaterialBaseResponse](#schemamaterialbaseresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="stapi-medicalcondition">MedicalCondition</h1>

## get/medicalCondition

> Code samples

```bash
curl 'https://example.com/medicalCondition?uid=string' \
  -H 'Accept: application/json'
```

`GET /medicalCondition`

Retrival of a single medical condition

<h3 id="getmedicalcondition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|query|string|true|Medical condition unique ID|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "medicalCondition": {
    "uid": "string",
    "name": "string",
    "psychologicalCondition": true
  }
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getmedicalcondition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MedicalConditionFullResponse](#schemamedicalconditionfullresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## get/medicalCondition/search

> Code samples

```bash
curl https://example.com/medicalCondition/search \
  -H 'Accept: application/json'
```

`GET /medicalCondition/search`

Pagination over medical conditions

<h3 id="getmedicalconditionsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "medicalConditions": [
    {
      "uid": "string",
      "name": "string",
      "psychologicalCondition": true
    }
  ]
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getmedicalconditionsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MedicalConditionBaseResponse](#schemamedicalconditionbaseresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/medicalCondition/search

> Code samples

```bash
curl https://example.com/medicalCondition/search \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'name=string&psychologicalCondition=true'
```

`POST /medicalCondition/search`

Searching medical conditions

> Body parameter

```yaml
name: string
psychologicalCondition: true
```

<h3 id="postmedicalconditionsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|sort|query|string|false|Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC|
|apiKey|query|string|false|API key|
|body|body|object|false|none|
|» name|body|string|false|Medical condition name|
|» psychologicalCondition|body|boolean|false|Whether it should be a psychological condition|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "medicalConditions": [
    {
      "uid": "string",
      "name": "string",
      "psychologicalCondition": true
    }
  ]
}
```

<h3 id="postmedicalconditionsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MedicalConditionBaseResponse](#schemamedicalconditionbaseresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="stapi-movie">Movie</h1>

## get/movie

> Code samples

```bash
curl 'https://example.com/movie?uid=string' \
  -H 'Accept: application/json'
```

`GET /movie`

Retrival of a single movie

<h3 id="getmovie-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|query|string|true|Movie unique ID|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "movie": {
    "uid": "string",
    "title": "string",
    "mainDirector": {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "artDepartment": true,
      "artDirector": true,
      "productionDesigner": true,
      "cameraAndElectricalDepartment": true,
      "cinematographer": true,
      "castingDepartment": true,
      "costumeDepartment": true,
      "costumeDesigner": true,
      "director": true,
      "assistantOrSecondUnitDirector": true,
      "exhibitAndAttractionStaff": true,
      "filmEditor": true,
      "linguist": true,
      "locationStaff": true,
      "makeupStaff": true,
      "musicDepartment": true,
      "composer": true,
      "personalAssistant": true,
      "producer": true,
      "productionAssociate": true,
      "productionStaff": true,
      "publicationStaff": true,
      "scienceConsultant": true,
      "soundDepartment": true,
      "specialAndVisualEffectsStaff": true,
      "author": true,
      "audioAuthor": true,
      "calendarArtist": true,
      "comicArtist": true,
      "comicAuthor": true,
      "comicColorArtist": true,
      "comicInteriorArtist": true,
      "comicInkArtist": true,
      "comicPencilArtist": true,
      "comicLetterArtist": true,
      "comicStripArtist": true,
      "gameArtist": true,
      "gameAuthor": true,
      "novelArtist": true,
      "novelAuthor": true,
      "referenceArtist": true,
      "referenceAuthor": true,
      "publicationArtist": true,
      "publicationDesigner": true,
      "publicationEditor": true,
      "publicityArtist": true,
      "cbsDigitalStaff": true,
      "ilmProductionStaff": true,
      "specialFeaturesStaff": true,
      "storyEditor": true,
      "studioExecutive": true,
      "stuntDepartment": true,
      "transportationDepartment": true,
      "videoGameProductionStaff": true,
      "writer": true
    },
    "titleBulgarian": "string",
    "titleCatalan": "string",
    "titleChineseTraditional": "string",
    "titleGerman": "string",
    "titleItalian": "string",
    "titleJapanese": "string",
    "titlePolish": "string",
    "titleRussian": "string",
    "titleSerbian": "string",
    "titleSpanish": "string",
    "stardateFrom": 0,
    "stardateTo": 0,
    "yearFrom": 0,
    "yearTo": 0,
    "usReleaseDate": "1970-01-01",
    "writers": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "screenplayAuthors": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "storyAuthors": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "directors": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "producers": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "staff": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "performers": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "animalPerformer": true,
        "disPerformer": true,
        "ds9Performer": true,
        "entPerformer": true,
        "filmPerformer": true,
        "standInPerformer": true,
        "stuntPerformer": true,
        "tasPerformer": true,
        "tngPerformer": true,
        "tosPerformer": true,
        "videoGamePerformer": true,
        "voicePerformer": true,
        "voyPerformer": true
      }
    ],
    "stuntPerformers": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "animalPerformer": true,
        "disPerformer": true,
        "ds9Performer": true,
        "entPerformer": true,
        "filmPerformer": true,
        "standInPerformer": true,
        "stuntPerformer": true,
        "tasPerformer": true,
        "tngPerformer": true,
        "tosPerformer": true,
        "videoGamePerformer": true,
        "voicePerformer": true,
        "voyPerformer": true
      }
    ],
    "standInPerformers": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "animalPerformer": true,
        "disPerformer": true,
        "ds9Performer": true,
        "entPerformer": true,
        "filmPerformer": true,
        "standInPerformer": true,
        "stuntPerformer": true,
        "tasPerformer": true,
        "tngPerformer": true,
        "tosPerformer": true,
        "videoGamePerformer": true,
        "voicePerformer": true,
        "voyPerformer": true
      }
    ],
    "characters": [
      {
        "uid": "string",
        "name": "string",
        "gender": "F",
        "yearOfBirth": 0,
        "monthOfBirth": 0,
        "dayOfBirth": 0,
        "placeOfBirth": "string",
        "yearOfDeath": 0,
        "monthOfDeath": 0,
        "dayOfDeath": 0,
        "placeOfDeath": "string",
        "height": 0,
        "weight": 0,
        "deceased": true,
        "bloodType": "B_NEGATIVE",
        "maritalStatus": "SINGLE",
        "serialNumber": "string",
        "hologramActivationDate": "string",
        "hologramStatus": "string",
        "hologramDateStatus": "string",
        "hologram": true,
        "fictionalCharacter": true,
        "mirror": true,
        "alternateReality": true
      }
    ]
  }
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getmovie-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MovieFullResponse](#schemamoviefullresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## get/movie/search

> Code samples

```bash
curl https://example.com/movie/search \
  -H 'Accept: application/json'
```

`GET /movie/search`

Pagination over movies

<h3 id="getmoviesearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "movies": [
    {
      "uid": "string",
      "title": "string",
      "mainDirector": {
        "uid": "string",
        "name": "string"
      },
      "titleBulgarian": "string",
      "titleCatalan": "string",
      "titleChineseTraditional": "string",
      "titleGerman": "string",
      "titleItalian": "string",
      "titleJapanese": "string",
      "titlePolish": "string",
      "titleRussian": "string",
      "titleSerbian": "string",
      "titleSpanish": "string",
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "usReleaseDate": "1970-01-01"
    }
  ]
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getmoviesearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MovieBaseResponse](#schemamoviebaseresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/movie/search

> Code samples

```bash
curl https://example.com/movie/search \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'title=string&stardateFrom=0&stardateTo=0&yearFrom=0&yearTo=0&usReleaseDateFrom=1970-01-01&usReleaseDateTo=1970-01-01'
```

`POST /movie/search`

Searching movies

> Body parameter

```yaml
title: string
stardateFrom: 0
stardateTo: 0
yearFrom: 0
yearTo: 0
usReleaseDateFrom: "1970-01-01"
usReleaseDateTo: "1970-01-01"
```

<h3 id="postmoviesearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|sort|query|string|false|Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC|
|apiKey|query|string|false|API key|
|body|body|object|false|none|
|» title|body|string|false|Movie title|
|» stardateFrom|body|number(float)|false|Starting stardate of movie story|
|» stardateTo|body|number(float)|false|Ending stardate of movie story|
|» yearFrom|body|integer(int32)|false|Starting year of movie story|
|» yearTo|body|integer(int32)|false|Ending year of movie story|
|» usReleaseDateFrom|body|string(date)|false|Minimal date the movie was first released in the United States|
|» usReleaseDateTo|body|string(date)|false|Maximal date the movie was first released in the United States|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "movies": [
    {
      "uid": "string",
      "title": "string",
      "mainDirector": {
        "uid": "string",
        "name": "string"
      },
      "titleBulgarian": "string",
      "titleCatalan": "string",
      "titleChineseTraditional": "string",
      "titleGerman": "string",
      "titleItalian": "string",
      "titleJapanese": "string",
      "titlePolish": "string",
      "titleRussian": "string",
      "titleSerbian": "string",
      "titleSpanish": "string",
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "usReleaseDate": "1970-01-01"
    }
  ]
}
```

<h3 id="postmoviesearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MovieBaseResponse](#schemamoviebaseresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="stapi-occupation">Occupation</h1>

## get/occupation

> Code samples

```bash
curl 'https://example.com/occupation?uid=string' \
  -H 'Accept: application/json'
```

`GET /occupation`

Retrival of a single occupation

<h3 id="getoccupation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|query|string|true|Occupation unique ID|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "occupation": {
    "uid": "string",
    "name": "string",
    "legalOccupation": true,
    "medicalOccupation": true,
    "scientificOccupation": true,
    "characters": [
      {
        "uid": "string",
        "name": "string",
        "gender": "F",
        "yearOfBirth": 0,
        "monthOfBirth": 0,
        "dayOfBirth": 0,
        "placeOfBirth": "string",
        "yearOfDeath": 0,
        "monthOfDeath": 0,
        "dayOfDeath": 0,
        "placeOfDeath": "string",
        "height": 0,
        "weight": 0,
        "deceased": true,
        "bloodType": "B_NEGATIVE",
        "maritalStatus": "SINGLE",
        "serialNumber": "string",
        "hologramActivationDate": "string",
        "hologramStatus": "string",
        "hologramDateStatus": "string",
        "hologram": true,
        "fictionalCharacter": true,
        "mirror": true,
        "alternateReality": true
      }
    ]
  }
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getoccupation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[OccupationFullResponse](#schemaoccupationfullresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## get/occupation/search

> Code samples

```bash
curl https://example.com/occupation/search \
  -H 'Accept: application/json'
```

`GET /occupation/search`

Pagination over occupations

<h3 id="getoccupationsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "occupations": [
    {
      "uid": "string",
      "name": "string",
      "legalOccupation": true,
      "medicalOccupation": true,
      "scientificOccupation": true
    }
  ]
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getoccupationsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[OccupationBaseResponse](#schemaoccupationbaseresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/occupation/search

> Code samples

```bash
curl https://example.com/occupation/search \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'name=string&legalOccupation=true&medicalOccupation=true&scientificOccupation=true'
```

`POST /occupation/search`

Searching occupations

> Body parameter

```yaml
name: string
legalOccupation: true
medicalOccupation: true
scientificOccupation: true
```

<h3 id="postoccupationsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|sort|query|string|false|Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC|
|apiKey|query|string|false|API key|
|body|body|object|false|none|
|» name|body|string|false|Occupation name|
|» legalOccupation|body|boolean|false|Whether it should be a legal occupation|
|» medicalOccupation|body|boolean|false|Whether it should be a medical occupation|
|» scientificOccupation|body|boolean|false|Whether it should be a scientific occupation|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "occupations": [
    {
      "uid": "string",
      "name": "string",
      "legalOccupation": true,
      "medicalOccupation": true,
      "scientificOccupation": true
    }
  ]
}
```

<h3 id="postoccupationsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[OccupationBaseResponse](#schemaoccupationbaseresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="stapi-organization">Organization</h1>

## get/organization

> Code samples

```bash
curl 'https://example.com/organization?uid=string' \
  -H 'Accept: application/json'
```

`GET /organization`

Retrival of a single organization

<h3 id="getorganization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|query|string|true|Organization unique ID|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "organization": {
    "uid": "string",
    "name": "string",
    "government": true,
    "intergovernmentalOrganization": true,
    "researchOrganization": true,
    "sportOrganization": true,
    "medicalOrganization": true,
    "militaryOrganization": true,
    "militaryUnit": true,
    "governmentAgency": true,
    "lawEnforcementAgency": true,
    "prisonOrPenalColony": true,
    "mirror": true,
    "alternateReality": true,
    "characters": [
      {
        "uid": "string",
        "name": "string",
        "gender": "F",
        "yearOfBirth": 0,
        "monthOfBirth": 0,
        "dayOfBirth": 0,
        "placeOfBirth": "string",
        "yearOfDeath": 0,
        "monthOfDeath": 0,
        "dayOfDeath": 0,
        "placeOfDeath": "string",
        "height": 0,
        "weight": 0,
        "deceased": true,
        "bloodType": "B_NEGATIVE",
        "maritalStatus": "SINGLE",
        "serialNumber": "string",
        "hologramActivationDate": "string",
        "hologramStatus": "string",
        "hologramDateStatus": "string",
        "hologram": true,
        "fictionalCharacter": true,
        "mirror": true,
        "alternateReality": true
      }
    ]
  }
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getorganization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[OrganizationFullResponse](#schemaorganizationfullresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## get/organization/search

> Code samples

```bash
curl https://example.com/organization/search \
  -H 'Accept: application/json'
```

`GET /organization/search`

Pagination over organizations

<h3 id="getorganizationsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "organizations": [
    {
      "uid": "string",
      "name": "string",
      "government": true,
      "intergovernmentalOrganization": true,
      "researchOrganization": true,
      "sportOrganization": true,
      "medicalOrganization": true,
      "militaryOrganization": true,
      "militaryUnit": true,
      "governmentAgency": true,
      "lawEnforcementAgency": true,
      "prisonOrPenalColony": true,
      "mirror": true,
      "alternateReality": true
    }
  ]
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getorganizationsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[OrganizationBaseResponse](#schemaorganizationbaseresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/organization/search

> Code samples

```bash
curl https://example.com/organization/search \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'name=string&government=true&intergovernmentalOrganization=true&researchOrganization=true&sportOrganization=true&medicalOrganization=true&militaryOrganization=true&militaryUnit=true&governmentAgency=true&lawEnforcementAgency=true&prisonOrPenalColony=true&mirror=true&alternateReality=true'
```

`POST /organization/search`

Searching organizations

> Body parameter

```yaml
name: string
government: true
intergovernmentalOrganization: true
researchOrganization: true
sportOrganization: true
medicalOrganization: true
militaryOrganization: true
militaryUnit: true
governmentAgency: true
lawEnforcementAgency: true
prisonOrPenalColony: true
mirror: true
alternateReality: true
```

<h3 id="postorganizationsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|sort|query|string|false|Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC|
|apiKey|query|string|false|API key|
|body|body|object|false|none|
|» name|body|string|false|Organization name|
|» government|body|boolean|false|Whether it should be a government|
|» intergovernmentalOrganization|body|boolean|false|Whether it should be an intergovernmental organization|
|» researchOrganization|body|boolean|false|Whether it should be a research organization|
|» sportOrganization|body|boolean|false|Whether it should be a sport organization|
|» medicalOrganization|body|boolean|false|Whether it should be a medical organization|
|» militaryOrganization|body|boolean|false|Whether it should be a military organization|
|» militaryUnit|body|boolean|false|Whether it should be a military unit|
|» governmentAgency|body|boolean|false|Whether it should be a government agency|
|» lawEnforcementAgency|body|boolean|false|Whether it should be a law enforcement agency|
|» prisonOrPenalColony|body|boolean|false|Whether it should be a prison or penal colony|
|» mirror|body|boolean|false|Whether this organization should be from mirror universe|
|» alternateReality|body|boolean|false|Whether this organization should be from alternate reality|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "organizations": [
    {
      "uid": "string",
      "name": "string",
      "government": true,
      "intergovernmentalOrganization": true,
      "researchOrganization": true,
      "sportOrganization": true,
      "medicalOrganization": true,
      "militaryOrganization": true,
      "militaryUnit": true,
      "governmentAgency": true,
      "lawEnforcementAgency": true,
      "prisonOrPenalColony": true,
      "mirror": true,
      "alternateReality": true
    }
  ]
}
```

<h3 id="postorganizationsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[OrganizationBaseResponse](#schemaorganizationbaseresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="stapi-performer">Performer</h1>

## get/performer

> Code samples

```bash
curl 'https://example.com/performer?uid=string' \
  -H 'Accept: application/json'
```

`GET /performer`

Retrival of a single performer

<h3 id="getperformer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|query|string|true|Performer unique ID|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "performer": {
    "uid": "string",
    "name": "string",
    "birthName": "string",
    "gender": "F",
    "dateOfBirth": "1970-01-01",
    "placeOfBirth": "string",
    "dateOfDeath": "1970-01-01",
    "placeOfDeath": "string",
    "animalPerformer": true,
    "disPerformer": true,
    "ds9Performer": true,
    "entPerformer": true,
    "filmPerformer": true,
    "standInPerformer": true,
    "stuntPerformer": true,
    "tasPerformer": true,
    "tngPerformer": true,
    "tosPerformer": true,
    "videoGamePerformer": true,
    "voicePerformer": true,
    "voyPerformer": true,
    "episodesPerformances": [
      {
        "uid": "string",
        "title": "string",
        "titleGerman": "string",
        "titleItalian": "string",
        "titleJapanese": "string",
        "series": {
          "uid": "string",
          "title": "string"
        },
        "season": {
          "uid": "string",
          "title": "string"
        },
        "seasonNumber": 0,
        "episodeNumber": 0,
        "productionSerialNumber": "string",
        "featureLength": true,
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "usAirDate": "1970-01-01",
        "finalScriptDate": "1970-01-01"
      }
    ],
    "episodesStuntPerformances": [
      {
        "uid": "string",
        "title": "string",
        "titleGerman": "string",
        "titleItalian": "string",
        "titleJapanese": "string",
        "series": {
          "uid": "string",
          "title": "string"
        },
        "season": {
          "uid": "string",
          "title": "string"
        },
        "seasonNumber": 0,
        "episodeNumber": 0,
        "productionSerialNumber": "string",
        "featureLength": true,
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "usAirDate": "1970-01-01",
        "finalScriptDate": "1970-01-01"
      }
    ],
    "episodesStandInPerformances": [
      {
        "uid": "string",
        "title": "string",
        "titleGerman": "string",
        "titleItalian": "string",
        "titleJapanese": "string",
        "series": {
          "uid": "string",
          "title": "string"
        },
        "season": {
          "uid": "string",
          "title": "string"
        },
        "seasonNumber": 0,
        "episodeNumber": 0,
        "productionSerialNumber": "string",
        "featureLength": true,
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "usAirDate": "1970-01-01",
        "finalScriptDate": "1970-01-01"
      }
    ],
    "moviesPerformances": [
      {
        "uid": "string",
        "title": "string",
        "mainDirector": {
          "uid": "string",
          "name": "string"
        },
        "titleBulgarian": "string",
        "titleCatalan": "string",
        "titleChineseTraditional": "string",
        "titleGerman": "string",
        "titleItalian": "string",
        "titleJapanese": "string",
        "titlePolish": "string",
        "titleRussian": "string",
        "titleSerbian": "string",
        "titleSpanish": "string",
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "usReleaseDate": "1970-01-01"
      }
    ],
    "moviesStuntPerformances": [
      {
        "uid": "string",
        "title": "string",
        "mainDirector": {
          "uid": "string",
          "name": "string"
        },
        "titleBulgarian": "string",
        "titleCatalan": "string",
        "titleChineseTraditional": "string",
        "titleGerman": "string",
        "titleItalian": "string",
        "titleJapanese": "string",
        "titlePolish": "string",
        "titleRussian": "string",
        "titleSerbian": "string",
        "titleSpanish": "string",
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "usReleaseDate": "1970-01-01"
      }
    ],
    "moviesStandInPerformances": [
      {
        "uid": "string",
        "title": "string",
        "mainDirector": {
          "uid": "string",
          "name": "string"
        },
        "titleBulgarian": "string",
        "titleCatalan": "string",
        "titleChineseTraditional": "string",
        "titleGerman": "string",
        "titleItalian": "string",
        "titleJapanese": "string",
        "titlePolish": "string",
        "titleRussian": "string",
        "titleSerbian": "string",
        "titleSpanish": "string",
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "usReleaseDate": "1970-01-01"
      }
    ],
    "characters": [
      {
        "uid": "string",
        "name": "string",
        "gender": "F",
        "yearOfBirth": 0,
        "monthOfBirth": 0,
        "dayOfBirth": 0,
        "placeOfBirth": "string",
        "yearOfDeath": 0,
        "monthOfDeath": 0,
        "dayOfDeath": 0,
        "placeOfDeath": "string",
        "height": 0,
        "weight": 0,
        "deceased": true,
        "bloodType": "B_NEGATIVE",
        "maritalStatus": "SINGLE",
        "serialNumber": "string",
        "hologramActivationDate": "string",
        "hologramStatus": "string",
        "hologramDateStatus": "string",
        "hologram": true,
        "fictionalCharacter": true,
        "mirror": true,
        "alternateReality": true
      }
    ]
  }
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getperformer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PerformerFullResponse](#schemaperformerfullresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## get/performer/search

> Code samples

```bash
curl https://example.com/performer/search \
  -H 'Accept: application/json'
```

`GET /performer/search`

Pagination over performers

<h3 id="getperformersearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "performers": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "animalPerformer": true,
      "disPerformer": true,
      "ds9Performer": true,
      "entPerformer": true,
      "filmPerformer": true,
      "standInPerformer": true,
      "stuntPerformer": true,
      "tasPerformer": true,
      "tngPerformer": true,
      "tosPerformer": true,
      "videoGamePerformer": true,
      "voicePerformer": true,
      "voyPerformer": true
    }
  ]
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getperformersearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PerformerBaseResponse](#schemaperformerbaseresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/performer/search

> Code samples

```bash
curl https://example.com/performer/search \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'name=string&birthName=string&gender=string&dateOfBirthFrom=1970-01-01&dateOfBirthTo=1970-01-01&placeOfBirth=string&dateOfDeathFrom=1970-01-01&dateOfDeathTo=1970-01-01&placeOfDeath=string&animalPerformer=true&disPerformer=true&ds9Performer=true&entPerformer=true&filmPerformer=true&standInPerformer=true&stuntPerformer=true&tasPerformer=true&tngPerformer=true&tosPerformer=true&videoGamePerformer=true&voicePerformer=true&voyPerformer=true'
```

`POST /performer/search`

Searching performers

> Body parameter

```yaml
name: string
birthName: string
gender: string
dateOfBirthFrom: "1970-01-01"
dateOfBirthTo: "1970-01-01"
placeOfBirth: string
dateOfDeathFrom: "1970-01-01"
dateOfDeathTo: "1970-01-01"
placeOfDeath: string
animalPerformer: true
disPerformer: true
ds9Performer: true
entPerformer: true
filmPerformer: true
standInPerformer: true
stuntPerformer: true
tasPerformer: true
tngPerformer: true
tosPerformer: true
videoGamePerformer: true
voicePerformer: true
voyPerformer: true
```

<h3 id="postperformersearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|sort|query|string|false|Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC|
|apiKey|query|string|false|API key|
|body|body|object|false|none|
|» name|body|string|false|Performer name|
|» birthName|body|string|false|Performer birth name|
|» gender|body|string|false|Performer gender|
|» dateOfBirthFrom|body|string(date)|false|Minimal date the performer was born|
|» dateOfBirthTo|body|string(date)|false|Maximal date the performer was born|
|» placeOfBirth|body|string|false|Place the performer was born|
|» dateOfDeathFrom|body|string(date)|false|Minimal date the performer died|
|» dateOfDeathTo|body|string(date)|false|Maximal date the performer died|
|» placeOfDeath|body|string|false|Place the performer died|
|» animalPerformer|body|boolean|false|Whether it should be an animal performer|
|» disPerformer|body|boolean|false|Whether it should be a performer that appeared in Star Trek: Discovery|
|» ds9Performer|body|boolean|false|Whether it should be a performer that appeared in Star Trek: Deep Space Nine|
|» entPerformer|body|boolean|false|Whether it should be a performer that appeared in Star Trek: Enterprise|
|» filmPerformer|body|boolean|false|Whether it should be a performer that appeared in a Star Trek movie|
|» standInPerformer|body|boolean|false|Whether it should be a stand-in performer|
|» stuntPerformer|body|boolean|false|Whether it should be a stunt performer|
|» tasPerformer|body|boolean|false|Whether it should be a performer that appeared in Star Trek: The Animated Series|
|» tngPerformer|body|boolean|false|Whether it should be a performer that appeared in Star Trek: The Next Generation|
|» tosPerformer|body|boolean|false|Whether it should be a performer that appeared in Star Trek: The Original Series|
|» videoGamePerformer|body|boolean|false|Whether it should be a video game performer|
|» voicePerformer|body|boolean|false|Whether it should be a voice performer|
|» voyPerformer|body|boolean|false|Whether it should be a performer that appeared in Star Trek: Voyager|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "performers": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "animalPerformer": true,
      "disPerformer": true,
      "ds9Performer": true,
      "entPerformer": true,
      "filmPerformer": true,
      "standInPerformer": true,
      "stuntPerformer": true,
      "tasPerformer": true,
      "tngPerformer": true,
      "tosPerformer": true,
      "videoGamePerformer": true,
      "voicePerformer": true,
      "voyPerformer": true
    }
  ]
}
```

<h3 id="postperformersearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PerformerBaseResponse](#schemaperformerbaseresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="stapi-season">Season</h1>

## get/season

> Code samples

```bash
curl 'https://example.com/season?uid=string' \
  -H 'Accept: application/json'
```

`GET /season`

Retrival of a single season

<h3 id="getseason-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|query|string|true|Season unique ID|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "season": {
    "uid": "string",
    "title": "string",
    "series": {
      "uid": "string",
      "title": "string",
      "abbreviation": "string",
      "productionStartYear": 0,
      "productionEndYear": 0,
      "originalRunStartDate": "1970-01-01",
      "originalRunEndDate": "1970-01-01",
      "seasonsCount": 0,
      "episodesCount": 0,
      "featureLengthEpisodesCount": 0,
      "productionCompany": {
        "uid": "string",
        "name": "string"
      },
      "originalBroadcaster": {
        "uid": "string",
        "name": "string"
      }
    },
    "seasonNumber": 0,
    "numberOfEpisodes": 0,
    "episodes": [
      {
        "uid": "string",
        "title": "string",
        "titleGerman": "string",
        "titleItalian": "string",
        "titleJapanese": "string",
        "series": {
          "uid": "string",
          "title": "string"
        },
        "season": {
          "uid": "string",
          "title": "string"
        },
        "seasonNumber": 0,
        "episodeNumber": 0,
        "productionSerialNumber": "string",
        "featureLength": true,
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "usAirDate": "1970-01-01",
        "finalScriptDate": "1970-01-01"
      }
    ]
  }
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getseason-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SeasonFullResponse](#schemaseasonfullresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## get/season/search

> Code samples

```bash
curl https://example.com/season/search \
  -H 'Accept: application/json'
```

`GET /season/search`

Pagination over seasons

<h3 id="getseasonsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "seasons": [
    {
      "uid": "string",
      "title": "string",
      "series": {
        "uid": "string",
        "title": "string"
      },
      "seasonNumber": 0,
      "numberOfEpisodes": 0
    }
  ]
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getseasonsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SeasonBaseResponse](#schemaseasonbaseresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/season/search

> Code samples

```bash
curl https://example.com/season/search \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'title=string&seasonNumberFrom=0&seasonNumberTo=0&numberOfEpisodesFrom=0&numberOfEpisodesTo=0'
```

`POST /season/search`

Searching seasons

> Body parameter

```yaml
title: string
seasonNumberFrom: 0
seasonNumberTo: 0
numberOfEpisodesFrom: 0
numberOfEpisodesTo: 0
```

<h3 id="postseasonsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|sort|query|string|false|Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC|
|apiKey|query|string|false|API key|
|body|body|object|false|none|
|» title|body|string|false|Season title|
|» seasonNumberFrom|body|integer(int32)|false|Minimal season number|
|» seasonNumberTo|body|integer(int32)|false|Maximal season number|
|» numberOfEpisodesFrom|body|integer(int32)|false|Minimal number of episodes in season|
|» numberOfEpisodesTo|body|integer(int32)|false|Maximal number of episodes in season|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "seasons": [
    {
      "uid": "string",
      "title": "string",
      "series": {
        "uid": "string",
        "title": "string"
      },
      "seasonNumber": 0,
      "numberOfEpisodes": 0
    }
  ]
}
```

<h3 id="postseasonsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SeasonBaseResponse](#schemaseasonbaseresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="stapi-series">Series</h1>

## get/series

> Code samples

```bash
curl 'https://example.com/series?uid=string' \
  -H 'Accept: application/json'
```

`GET /series`

Retrival of a single series

<h3 id="getseries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|query|string|true|Series unique ID|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "series": {
    "uid": "string",
    "title": "string",
    "abbreviation": "string",
    "productionStartYear": 0,
    "productionEndYear": 0,
    "originalRunStartDate": "1970-01-01",
    "originalRunEndDate": "1970-01-01",
    "seasonsCount": 0,
    "episodesCount": 0,
    "featureLengthEpisodesCount": 0,
    "productionCompany": {
      "uid": "string",
      "name": "string",
      "broadcaster": true,
      "collectibleCompany": true,
      "conglomerate": true,
      "digitalVisualEffectsCompany": true,
      "distributor": true,
      "gameCompany": true,
      "filmEquipmentCompany": true,
      "makeUpEffectsStudio": true,
      "mattePaintingCompany": true,
      "modelAndMiniatureEffectsCompany": true,
      "postProductionCompany": true,
      "productionCompany": true,
      "propCompany": true,
      "recordLabel": true,
      "specialEffectsCompany": true,
      "tvAndFilmProductionCompany": true,
      "videoGameCompany": true
    },
    "originalBroadcaster": {
      "uid": "string",
      "name": "string",
      "broadcaster": true,
      "collectibleCompany": true,
      "conglomerate": true,
      "digitalVisualEffectsCompany": true,
      "distributor": true,
      "gameCompany": true,
      "filmEquipmentCompany": true,
      "makeUpEffectsStudio": true,
      "mattePaintingCompany": true,
      "modelAndMiniatureEffectsCompany": true,
      "postProductionCompany": true,
      "productionCompany": true,
      "propCompany": true,
      "recordLabel": true,
      "specialEffectsCompany": true,
      "tvAndFilmProductionCompany": true,
      "videoGameCompany": true
    },
    "episodes": [
      {
        "uid": "string",
        "title": "string",
        "titleGerman": "string",
        "titleItalian": "string",
        "titleJapanese": "string",
        "series": {
          "uid": "string",
          "title": "string"
        },
        "season": {
          "uid": "string",
          "title": "string"
        },
        "seasonNumber": 0,
        "episodeNumber": 0,
        "productionSerialNumber": "string",
        "featureLength": true,
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "usAirDate": "1970-01-01",
        "finalScriptDate": "1970-01-01"
      }
    ],
    "seasons": [
      {
        "uid": "string",
        "title": "string",
        "series": {
          "uid": "string",
          "title": "string"
        },
        "seasonNumber": 0,
        "numberOfEpisodes": 0
      }
    ]
  }
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getseries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SeriesFullResponse](#schemaseriesfullresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## get/series/search

> Code samples

```bash
curl https://example.com/series/search \
  -H 'Accept: application/json'
```

`GET /series/search`

Pagination over series

<h3 id="getseriessearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "series": [
    {
      "uid": "string",
      "title": "string",
      "abbreviation": "string",
      "productionStartYear": 0,
      "productionEndYear": 0,
      "originalRunStartDate": "1970-01-01",
      "originalRunEndDate": "1970-01-01",
      "seasonsCount": 0,
      "episodesCount": 0,
      "featureLengthEpisodesCount": 0,
      "productionCompany": {
        "uid": "string",
        "name": "string"
      },
      "originalBroadcaster": {
        "uid": "string",
        "name": "string"
      }
    }
  ]
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getseriessearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SeriesBaseResponse](#schemaseriesbaseresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/series/search

> Code samples

```bash
curl https://example.com/series/search \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'title=string&abbreviation=string&productionStartYearFrom=0&productionStartYearTo=0&productionEndYearFrom=0&productionEndYearTo=0&originalRunStartDateFrom=1970-01-01&originalRunStartDateTo=1970-01-01&originalRunEndDateFrom=1970-01-01&originalRunEndDateTo=1970-01-01'
```

`POST /series/search`

Searching series

> Body parameter

```yaml
title: string
abbreviation: string
productionStartYearFrom: 0
productionStartYearTo: 0
productionEndYearFrom: 0
productionEndYearTo: 0
originalRunStartDateFrom: "1970-01-01"
originalRunStartDateTo: "1970-01-01"
originalRunEndDateFrom: "1970-01-01"
originalRunEndDateTo: "1970-01-01"
```

<h3 id="postseriessearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|sort|query|string|false|Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC|
|apiKey|query|string|false|API key|
|body|body|object|false|none|
|» title|body|string|false|Series title|
|» abbreviation|body|string|false|Series abbreviation|
|» productionStartYearFrom|body|integer(int32)|false|Minimal year the series production started|
|» productionStartYearTo|body|integer(int32)|false|Maximal year the series production started|
|» productionEndYearFrom|body|integer(int32)|false|Minimal year the series production ended|
|» productionEndYearTo|body|integer(int32)|false|Maximal year the series production ended|
|» originalRunStartDateFrom|body|string(date)|false|Minimal date the series originally ran from|
|» originalRunStartDateTo|body|string(date)|false|Maximal date the series originally ran from|
|» originalRunEndDateFrom|body|string(date)|false|Minimal date the series originally ran to|
|» originalRunEndDateTo|body|string(date)|false|Maximal date the series originally ran to|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "series": [
    {
      "uid": "string",
      "title": "string",
      "abbreviation": "string",
      "productionStartYear": 0,
      "productionEndYear": 0,
      "originalRunStartDate": "1970-01-01",
      "originalRunEndDate": "1970-01-01",
      "seasonsCount": 0,
      "episodesCount": 0,
      "featureLengthEpisodesCount": 0,
      "productionCompany": {
        "uid": "string",
        "name": "string"
      },
      "originalBroadcaster": {
        "uid": "string",
        "name": "string"
      }
    }
  ]
}
```

<h3 id="postseriessearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SeriesBaseResponse](#schemaseriesbaseresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="stapi-soundtrack">Soundtrack</h1>

## get/soundtrack

> Code samples

```bash
curl 'https://example.com/soundtrack?uid=string' \
  -H 'Accept: application/json'
```

`GET /soundtrack`

Retrival of a single soundtrack

<h3 id="getsoundtrack-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|query|string|true|Soundtrack unique ID|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "soundtrack": {
    "uid": "string",
    "title": "string",
    "releaseDate": "1970-01-01",
    "length": 0,
    "labels": [
      {
        "uid": "string",
        "name": "string",
        "broadcaster": true,
        "collectibleCompany": true,
        "conglomerate": true,
        "digitalVisualEffectsCompany": true,
        "distributor": true,
        "gameCompany": true,
        "filmEquipmentCompany": true,
        "makeUpEffectsStudio": true,
        "mattePaintingCompany": true,
        "modelAndMiniatureEffectsCompany": true,
        "postProductionCompany": true,
        "productionCompany": true,
        "propCompany": true,
        "recordLabel": true,
        "specialEffectsCompany": true,
        "tvAndFilmProductionCompany": true,
        "videoGameCompany": true
      }
    ],
    "composers": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "contributors": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "orchestrators": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "references": [
      {
        "uid": "string",
        "referenceType": "ASIN",
        "referenceNumber": "string"
      }
    ]
  }
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getsoundtrack-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SoundtrackFullResponse](#schemasoundtrackfullresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## get/soundtrack/search

> Code samples

```bash
curl https://example.com/soundtrack/search \
  -H 'Accept: application/json'
```

`GET /soundtrack/search`

Pagination over soundtracks

<h3 id="getsoundtracksearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "soundtracks": [
    {
      "uid": "string",
      "title": "string",
      "releaseDate": "1970-01-01",
      "length": 0
    }
  ]
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getsoundtracksearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SoundtrackBaseResponse](#schemasoundtrackbaseresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/soundtrack/search

> Code samples

```bash
curl https://example.com/soundtrack/search \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'title=string&releaseDateFrom=1970-01-01&releaseDateTo=1970-01-01&lengthFrom=0&lengthTo=0'
```

`POST /soundtrack/search`

Searching soundtracks

> Body parameter

```yaml
title: string
releaseDateFrom: "1970-01-01"
releaseDateTo: "1970-01-01"
lengthFrom: 0
lengthTo: 0
```

<h3 id="postsoundtracksearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|sort|query|string|false|Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC|
|apiKey|query|string|false|API key|
|body|body|object|false|none|
|» title|body|string|false|Soundtrack title|
|» releaseDateFrom|body|string(date)|false|Minimal release date|
|» releaseDateTo|body|string(date)|false|Maximal release date|
|» lengthFrom|body|integer(int32)|false|Minimal length, in seconds|
|» lengthTo|body|integer(int32)|false|Maximal length, in seconds|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "soundtracks": [
    {
      "uid": "string",
      "title": "string",
      "releaseDate": "1970-01-01",
      "length": 0
    }
  ]
}
```

<h3 id="postsoundtracksearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SoundtrackBaseResponse](#schemasoundtrackbaseresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="stapi-spacecraft">Spacecraft</h1>

## get/spacecraft

> Code samples

```bash
curl 'https://example.com/spacecraft?uid=string' \
  -H 'Accept: application/json'
```

`GET /spacecraft`

Retrival of a single spacecraft

<h3 id="getspacecraft-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|query|string|true|Spacecraft unique ID|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "spacecraft": {
    "uid": "string",
    "name": "string",
    "registry": "string",
    "status": "string",
    "dateStatus": "string",
    "spacecraftClass": {
      "uid": "string",
      "name": "string",
      "numberOfDecks": 0,
      "warpCapable": true,
      "alternateReality": true,
      "activeFrom": "string",
      "activeTo": "string",
      "species": {
        "uid": "string",
        "name": "string"
      },
      "owner": {
        "uid": "string",
        "name": "string"
      },
      "operator": {
        "uid": "string",
        "name": "string"
      },
      "affiliation": {
        "uid": "string",
        "name": "string"
      }
    },
    "owner": {
      "uid": "string",
      "name": "string",
      "government": true,
      "intergovernmentalOrganization": true,
      "researchOrganization": true,
      "sportOrganization": true,
      "medicalOrganization": true,
      "militaryOrganization": true,
      "militaryUnit": true,
      "governmentAgency": true,
      "lawEnforcementAgency": true,
      "prisonOrPenalColony": true,
      "mirror": true,
      "alternateReality": true
    },
    "operator": {
      "uid": "string",
      "name": "string",
      "government": true,
      "intergovernmentalOrganization": true,
      "researchOrganization": true,
      "sportOrganization": true,
      "medicalOrganization": true,
      "militaryOrganization": true,
      "militaryUnit": true,
      "governmentAgency": true,
      "lawEnforcementAgency": true,
      "prisonOrPenalColony": true,
      "mirror": true,
      "alternateReality": true
    },
    "spacecraftTypes": [
      {
        "uid": "string",
        "name": "string"
      }
    ]
  }
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getspacecraft-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SpacecraftFullResponse](#schemaspacecraftfullresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## get/spacecraft/search

> Code samples

```bash
curl https://example.com/spacecraft/search \
  -H 'Accept: application/json'
```

`GET /spacecraft/search`

Pagination over spacecrafts

<h3 id="getspacecraftsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "spacecrafts": [
    {
      "uid": "string",
      "name": "string",
      "registry": "string",
      "status": "string",
      "dateStatus": "string",
      "spacecraftClass": {
        "uid": "string",
        "name": "string"
      },
      "owner": {
        "uid": "string",
        "name": "string"
      },
      "operator": {
        "uid": "string",
        "name": "string"
      }
    }
  ]
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getspacecraftsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SpacecraftBaseResponse](#schemaspacecraftbaseresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/spacecraft/search

> Code samples

```bash
curl https://example.com/spacecraft/search \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'name=string'
```

`POST /spacecraft/search`

Searching spacecrafts

> Body parameter

```yaml
name: string
```

<h3 id="postspacecraftsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|sort|query|string|false|Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC|
|apiKey|query|string|false|API key|
|body|body|object|false|none|
|» name|body|string|false|Spacecraft name|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "spacecrafts": [
    {
      "uid": "string",
      "name": "string",
      "registry": "string",
      "status": "string",
      "dateStatus": "string",
      "spacecraftClass": {
        "uid": "string",
        "name": "string"
      },
      "owner": {
        "uid": "string",
        "name": "string"
      },
      "operator": {
        "uid": "string",
        "name": "string"
      }
    }
  ]
}
```

<h3 id="postspacecraftsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SpacecraftBaseResponse](#schemaspacecraftbaseresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="stapi-spacecraftclass">SpacecraftClass</h1>

## get/spacecraftClass

> Code samples

```bash
curl 'https://example.com/spacecraftClass?uid=string' \
  -H 'Accept: application/json'
```

`GET /spacecraftClass`

Retrival of a single spacecraft class

<h3 id="getspacecraftclass-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|query|string|true|SpacecraftClass unique ID|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "spacecraftClass": {
    "uid": "string",
    "name": "string",
    "numberOfDecks": 0,
    "warpCapable": true,
    "alternateReality": true,
    "activeFrom": "string",
    "activeTo": "string",
    "species": {
      "uid": "string",
      "name": "string"
    },
    "owner": {
      "uid": "string",
      "name": "string",
      "government": true,
      "intergovernmentalOrganization": true,
      "researchOrganization": true,
      "sportOrganization": true,
      "medicalOrganization": true,
      "militaryOrganization": true,
      "militaryUnit": true,
      "governmentAgency": true,
      "lawEnforcementAgency": true,
      "prisonOrPenalColony": true,
      "mirror": true,
      "alternateReality": true
    },
    "operator": {
      "uid": "string",
      "name": "string",
      "government": true,
      "intergovernmentalOrganization": true,
      "researchOrganization": true,
      "sportOrganization": true,
      "medicalOrganization": true,
      "militaryOrganization": true,
      "militaryUnit": true,
      "governmentAgency": true,
      "lawEnforcementAgency": true,
      "prisonOrPenalColony": true,
      "mirror": true,
      "alternateReality": true
    },
    "affiliation": {
      "uid": "string",
      "name": "string",
      "government": true,
      "intergovernmentalOrganization": true,
      "researchOrganization": true,
      "sportOrganization": true,
      "medicalOrganization": true,
      "militaryOrganization": true,
      "militaryUnit": true,
      "governmentAgency": true,
      "lawEnforcementAgency": true,
      "prisonOrPenalColony": true,
      "mirror": true,
      "alternateReality": true
    },
    "spacecraftTypes": [
      {
        "uid": "string",
        "name": "string"
      }
    ],
    "spacecrafts": [
      {
        "uid": "string",
        "name": "string",
        "registry": "string",
        "status": "string",
        "dateStatus": "string",
        "spacecraftClass": {
          "uid": "string",
          "name": "string"
        },
        "owner": {
          "uid": "string",
          "name": "string"
        },
        "operator": {
          "uid": "string",
          "name": "string"
        }
      }
    ]
  }
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getspacecraftclass-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SpacecraftClassFullResponse](#schemaspacecraftclassfullresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## get/spacecraftClass/search

> Code samples

```bash
curl https://example.com/spacecraftClass/search \
  -H 'Accept: application/json'
```

`GET /spacecraftClass/search`

Pagination over spacecraft classes

<h3 id="getspacecraftclasssearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "spacecraftClasses": [
    {
      "uid": "string",
      "name": "string",
      "numberOfDecks": 0,
      "warpCapable": true,
      "alternateReality": true,
      "activeFrom": "string",
      "activeTo": "string",
      "species": {
        "uid": "string",
        "name": "string"
      },
      "owner": {
        "uid": "string",
        "name": "string"
      },
      "operator": {
        "uid": "string",
        "name": "string"
      },
      "affiliation": {
        "uid": "string",
        "name": "string"
      }
    }
  ]
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getspacecraftclasssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SpacecraftClassBaseResponse](#schemaspacecraftclassbaseresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/spacecraftClass/search

> Code samples

```bash
curl https://example.com/spacecraftClass/search \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'name=string&warpCapableSpecies=true&alternateReality=true'
```

`POST /spacecraftClass/search`

Searching spacecraft classes

> Body parameter

```yaml
name: string
warpCapableSpecies: true
alternateReality: true
```

<h3 id="postspacecraftclasssearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|sort|query|string|false|Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC|
|apiKey|query|string|false|API key|
|body|body|object|false|none|
|» name|body|string|false|Spacecraft class name|
|» warpCapableSpecies|body|boolean|false|Whether it should be a warp-capable spacecraft class|
|» alternateReality|body|boolean|false|Whether this spacecraft class should be from alternate reality|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "spacecraftClasses": [
    {
      "uid": "string",
      "name": "string",
      "numberOfDecks": 0,
      "warpCapable": true,
      "alternateReality": true,
      "activeFrom": "string",
      "activeTo": "string",
      "species": {
        "uid": "string",
        "name": "string"
      },
      "owner": {
        "uid": "string",
        "name": "string"
      },
      "operator": {
        "uid": "string",
        "name": "string"
      },
      "affiliation": {
        "uid": "string",
        "name": "string"
      }
    }
  ]
}
```

<h3 id="postspacecraftclasssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SpacecraftClassBaseResponse](#schemaspacecraftclassbaseresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="stapi-species">Species</h1>

## get/species

> Code samples

```bash
curl 'https://example.com/species?uid=string' \
  -H 'Accept: application/json'
```

`GET /species`

Retrival of a single species

<h3 id="getspecies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|query|string|true|Species unique ID|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "species": {
    "uid": "string",
    "name": "string",
    "homeworld": {
      "uid": "string",
      "name": "string",
      "astronomicalObjectType": "PLANET",
      "location": {
        "uid": "string",
        "name": "string"
      }
    },
    "quadrant": {
      "uid": "string",
      "name": "string",
      "astronomicalObjectType": "PLANET",
      "location": {
        "uid": "string",
        "name": "string"
      }
    },
    "extinctSpecies": true,
    "warpCapableSpecies": true,
    "extraGalacticSpecies": true,
    "humanoidSpecies": true,
    "reptilianSpecies": true,
    "nonCorporealSpecies": true,
    "shapeshiftingSpecies": true,
    "spaceborneSpecies": true,
    "telepathicSpecies": true,
    "transDimensionalSpecies": true,
    "unnamedSpecies": true,
    "alternateReality": true,
    "characters": [
      {
        "uid": "string",
        "name": "string",
        "gender": "F",
        "yearOfBirth": 0,
        "monthOfBirth": 0,
        "dayOfBirth": 0,
        "placeOfBirth": "string",
        "yearOfDeath": 0,
        "monthOfDeath": 0,
        "dayOfDeath": 0,
        "placeOfDeath": "string",
        "height": 0,
        "weight": 0,
        "deceased": true,
        "bloodType": "B_NEGATIVE",
        "maritalStatus": "SINGLE",
        "serialNumber": "string",
        "hologramActivationDate": "string",
        "hologramStatus": "string",
        "hologramDateStatus": "string",
        "hologram": true,
        "fictionalCharacter": true,
        "mirror": true,
        "alternateReality": true
      }
    ]
  }
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getspecies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SpeciesFullResponse](#schemaspeciesfullresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## get/species/search

> Code samples

```bash
curl https://example.com/species/search \
  -H 'Accept: application/json'
```

`GET /species/search`

Pagination over species

<h3 id="getspeciessearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "species": [
    {
      "uid": "string",
      "name": "string",
      "homeworld": {
        "uid": "string",
        "name": "string"
      },
      "quadrant": {
        "uid": "string",
        "name": "string"
      },
      "extinctSpecies": true,
      "warpCapableSpecies": true,
      "extraGalacticSpecies": true,
      "humanoidSpecies": true,
      "reptilianSpecies": true,
      "nonCorporealSpecies": true,
      "shapeshiftingSpecies": true,
      "spaceborneSpecies": true,
      "telepathicSpecies": true,
      "transDimensionalSpecies": true,
      "unnamedSpecies": true,
      "alternateReality": true
    }
  ]
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getspeciessearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SpeciesBaseResponse](#schemaspeciesbaseresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/species/search

> Code samples

```bash
curl https://example.com/species/search \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'name=string&extinctSpecies=true&warpCapableSpecies=true&extraGalacticSpecies=true&humanoidSpecies=true&reptilianSpecies=true&nonCorporealSpecies=true&shapeshiftingSpecies=true&spaceborneSpecies=true&telepathicSpecies=true&transDimensionalSpecies=true&unnamedSpecies=true&alternateReality=true'
```

`POST /species/search`

Searching species

> Body parameter

```yaml
name: string
extinctSpecies: true
warpCapableSpecies: true
extraGalacticSpecies: true
humanoidSpecies: true
reptilianSpecies: true
nonCorporealSpecies: true
shapeshiftingSpecies: true
spaceborneSpecies: true
telepathicSpecies: true
transDimensionalSpecies: true
unnamedSpecies: true
alternateReality: true
```

<h3 id="postspeciessearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|sort|query|string|false|Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC|
|apiKey|query|string|false|API key|
|body|body|object|false|none|
|» name|body|string|false|Species name|
|» extinctSpecies|body|boolean|false|Whether it should be an extinct species|
|» warpCapableSpecies|body|boolean|false|Whether it should be a warp-capable species|
|» extraGalacticSpecies|body|boolean|false|Whether it should be an extra-galactic species|
|» humanoidSpecies|body|boolean|false|Whether it should be a humanoid species|
|» reptilianSpecies|body|boolean|false|Whether it should be a reptilian species|
|» nonCorporealSpecies|body|boolean|false|Whether it should be a non-corporeal species|
|» shapeshiftingSpecies|body|boolean|false|Whether it should be a shapeshifting species|
|» spaceborneSpecies|body|boolean|false|Whether it should be a spaceborne species|
|» telepathicSpecies|body|boolean|false|Whether it should be a telepathic species|
|» transDimensionalSpecies|body|boolean|false|Whether it should be a trans-dimensional species|
|» unnamedSpecies|body|boolean|false|Whether it should be a unnamed species|
|» alternateReality|body|boolean|false|Whether this species should be from alternate reality|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "species": [
    {
      "uid": "string",
      "name": "string",
      "homeworld": {
        "uid": "string",
        "name": "string"
      },
      "quadrant": {
        "uid": "string",
        "name": "string"
      },
      "extinctSpecies": true,
      "warpCapableSpecies": true,
      "extraGalacticSpecies": true,
      "humanoidSpecies": true,
      "reptilianSpecies": true,
      "nonCorporealSpecies": true,
      "shapeshiftingSpecies": true,
      "spaceborneSpecies": true,
      "telepathicSpecies": true,
      "transDimensionalSpecies": true,
      "unnamedSpecies": true,
      "alternateReality": true
    }
  ]
}
```

<h3 id="postspeciessearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SpeciesBaseResponse](#schemaspeciesbaseresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="stapi-staff">Staff</h1>

## get/staff

> Code samples

```bash
curl 'https://example.com/staff?uid=string' \
  -H 'Accept: application/json'
```

`GET /staff`

Retrival of a single staff

<h3 id="getstaff-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|query|string|true|Staff unique ID|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "staff": {
    "uid": "string",
    "name": "string",
    "birthName": "string",
    "gender": "F",
    "dateOfBirth": "1970-01-01",
    "placeOfBirth": "string",
    "dateOfDeath": "1970-01-01",
    "placeOfDeath": "string",
    "artDepartment": true,
    "artDirector": true,
    "productionDesigner": true,
    "cameraAndElectricalDepartment": true,
    "cinematographer": true,
    "castingDepartment": true,
    "costumeDepartment": true,
    "costumeDesigner": true,
    "director": true,
    "assistantOrSecondUnitDirector": true,
    "exhibitAndAttractionStaff": true,
    "filmEditor": true,
    "linguist": true,
    "locationStaff": true,
    "makeupStaff": true,
    "musicDepartment": true,
    "composer": true,
    "personalAssistant": true,
    "producer": true,
    "productionAssociate": true,
    "productionStaff": true,
    "publicationStaff": true,
    "scienceConsultant": true,
    "soundDepartment": true,
    "specialAndVisualEffectsStaff": true,
    "author": true,
    "audioAuthor": true,
    "calendarArtist": true,
    "comicArtist": true,
    "comicAuthor": true,
    "comicColorArtist": true,
    "comicInteriorArtist": true,
    "comicInkArtist": true,
    "comicPencilArtist": true,
    "comicLetterArtist": true,
    "comicStripArtist": true,
    "gameArtist": true,
    "gameAuthor": true,
    "novelArtist": true,
    "novelAuthor": true,
    "referenceArtist": true,
    "referenceAuthor": true,
    "publicationArtist": true,
    "publicationDesigner": true,
    "publicationEditor": true,
    "publicityArtist": true,
    "cbsDigitalStaff": true,
    "ilmProductionStaff": true,
    "specialFeaturesStaff": true,
    "storyEditor": true,
    "studioExecutive": true,
    "stuntDepartment": true,
    "transportationDepartment": true,
    "videoGameProductionStaff": true,
    "writer": true,
    "writtenEpisodes": [
      {
        "uid": "string",
        "title": "string",
        "titleGerman": "string",
        "titleItalian": "string",
        "titleJapanese": "string",
        "series": {
          "uid": "string",
          "title": "string"
        },
        "season": {
          "uid": "string",
          "title": "string"
        },
        "seasonNumber": 0,
        "episodeNumber": 0,
        "productionSerialNumber": "string",
        "featureLength": true,
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "usAirDate": "1970-01-01",
        "finalScriptDate": "1970-01-01"
      }
    ],
    "teleplayAuthoredEpisodes": [
      {
        "uid": "string",
        "title": "string",
        "titleGerman": "string",
        "titleItalian": "string",
        "titleJapanese": "string",
        "series": {
          "uid": "string",
          "title": "string"
        },
        "season": {
          "uid": "string",
          "title": "string"
        },
        "seasonNumber": 0,
        "episodeNumber": 0,
        "productionSerialNumber": "string",
        "featureLength": true,
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "usAirDate": "1970-01-01",
        "finalScriptDate": "1970-01-01"
      }
    ],
    "storyAuthoredEpisodes": [
      {
        "uid": "string",
        "title": "string",
        "titleGerman": "string",
        "titleItalian": "string",
        "titleJapanese": "string",
        "series": {
          "uid": "string",
          "title": "string"
        },
        "season": {
          "uid": "string",
          "title": "string"
        },
        "seasonNumber": 0,
        "episodeNumber": 0,
        "productionSerialNumber": "string",
        "featureLength": true,
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "usAirDate": "1970-01-01",
        "finalScriptDate": "1970-01-01"
      }
    ],
    "directedEpisodes": [
      {
        "uid": "string",
        "title": "string",
        "titleGerman": "string",
        "titleItalian": "string",
        "titleJapanese": "string",
        "series": {
          "uid": "string",
          "title": "string"
        },
        "season": {
          "uid": "string",
          "title": "string"
        },
        "seasonNumber": 0,
        "episodeNumber": 0,
        "productionSerialNumber": "string",
        "featureLength": true,
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "usAirDate": "1970-01-01",
        "finalScriptDate": "1970-01-01"
      }
    ],
    "episodes": [
      {
        "uid": "string",
        "title": "string",
        "titleGerman": "string",
        "titleItalian": "string",
        "titleJapanese": "string",
        "series": {
          "uid": "string",
          "title": "string"
        },
        "season": {
          "uid": "string",
          "title": "string"
        },
        "seasonNumber": 0,
        "episodeNumber": 0,
        "productionSerialNumber": "string",
        "featureLength": true,
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "usAirDate": "1970-01-01",
        "finalScriptDate": "1970-01-01"
      }
    ],
    "writtenMovies": [
      {
        "uid": "string",
        "title": "string",
        "mainDirector": {
          "uid": "string",
          "name": "string"
        },
        "titleBulgarian": "string",
        "titleCatalan": "string",
        "titleChineseTraditional": "string",
        "titleGerman": "string",
        "titleItalian": "string",
        "titleJapanese": "string",
        "titlePolish": "string",
        "titleRussian": "string",
        "titleSerbian": "string",
        "titleSpanish": "string",
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "usReleaseDate": "1970-01-01"
      }
    ],
    "screenplayAuthoredMovies": [
      {
        "uid": "string",
        "title": "string",
        "mainDirector": {
          "uid": "string",
          "name": "string"
        },
        "titleBulgarian": "string",
        "titleCatalan": "string",
        "titleChineseTraditional": "string",
        "titleGerman": "string",
        "titleItalian": "string",
        "titleJapanese": "string",
        "titlePolish": "string",
        "titleRussian": "string",
        "titleSerbian": "string",
        "titleSpanish": "string",
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "usReleaseDate": "1970-01-01"
      }
    ],
    "storyAuthoredMovies": [
      {
        "uid": "string",
        "title": "string",
        "mainDirector": {
          "uid": "string",
          "name": "string"
        },
        "titleBulgarian": "string",
        "titleCatalan": "string",
        "titleChineseTraditional": "string",
        "titleGerman": "string",
        "titleItalian": "string",
        "titleJapanese": "string",
        "titlePolish": "string",
        "titleRussian": "string",
        "titleSerbian": "string",
        "titleSpanish": "string",
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "usReleaseDate": "1970-01-01"
      }
    ],
    "directedMovies": [
      {
        "uid": "string",
        "title": "string",
        "mainDirector": {
          "uid": "string",
          "name": "string"
        },
        "titleBulgarian": "string",
        "titleCatalan": "string",
        "titleChineseTraditional": "string",
        "titleGerman": "string",
        "titleItalian": "string",
        "titleJapanese": "string",
        "titlePolish": "string",
        "titleRussian": "string",
        "titleSerbian": "string",
        "titleSpanish": "string",
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "usReleaseDate": "1970-01-01"
      }
    ],
    "producedMovies": [
      {
        "uid": "string",
        "title": "string",
        "mainDirector": {
          "uid": "string",
          "name": "string"
        },
        "titleBulgarian": "string",
        "titleCatalan": "string",
        "titleChineseTraditional": "string",
        "titleGerman": "string",
        "titleItalian": "string",
        "titleJapanese": "string",
        "titlePolish": "string",
        "titleRussian": "string",
        "titleSerbian": "string",
        "titleSpanish": "string",
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "usReleaseDate": "1970-01-01"
      }
    ],
    "movies": [
      {
        "uid": "string",
        "title": "string",
        "mainDirector": {
          "uid": "string",
          "name": "string"
        },
        "titleBulgarian": "string",
        "titleCatalan": "string",
        "titleChineseTraditional": "string",
        "titleGerman": "string",
        "titleItalian": "string",
        "titleJapanese": "string",
        "titlePolish": "string",
        "titleRussian": "string",
        "titleSerbian": "string",
        "titleSpanish": "string",
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "usReleaseDate": "1970-01-01"
      }
    ]
  }
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getstaff-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[StaffFullResponse](#schemastafffullresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## get/staff/search

> Code samples

```bash
curl https://example.com/staff/search \
  -H 'Accept: application/json'
```

`GET /staff/search`

Pagination over staff

<h3 id="getstaffsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "staff": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "artDepartment": true,
      "artDirector": true,
      "productionDesigner": true,
      "cameraAndElectricalDepartment": true,
      "cinematographer": true,
      "castingDepartment": true,
      "costumeDepartment": true,
      "costumeDesigner": true,
      "director": true,
      "assistantOrSecondUnitDirector": true,
      "exhibitAndAttractionStaff": true,
      "filmEditor": true,
      "linguist": true,
      "locationStaff": true,
      "makeupStaff": true,
      "musicDepartment": true,
      "composer": true,
      "personalAssistant": true,
      "producer": true,
      "productionAssociate": true,
      "productionStaff": true,
      "publicationStaff": true,
      "scienceConsultant": true,
      "soundDepartment": true,
      "specialAndVisualEffectsStaff": true,
      "author": true,
      "audioAuthor": true,
      "calendarArtist": true,
      "comicArtist": true,
      "comicAuthor": true,
      "comicColorArtist": true,
      "comicInteriorArtist": true,
      "comicInkArtist": true,
      "comicPencilArtist": true,
      "comicLetterArtist": true,
      "comicStripArtist": true,
      "gameArtist": true,
      "gameAuthor": true,
      "novelArtist": true,
      "novelAuthor": true,
      "referenceArtist": true,
      "referenceAuthor": true,
      "publicationArtist": true,
      "publicationDesigner": true,
      "publicationEditor": true,
      "publicityArtist": true,
      "cbsDigitalStaff": true,
      "ilmProductionStaff": true,
      "specialFeaturesStaff": true,
      "storyEditor": true,
      "studioExecutive": true,
      "stuntDepartment": true,
      "transportationDepartment": true,
      "videoGameProductionStaff": true,
      "writer": true
    }
  ]
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getstaffsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[StaffBaseResponse](#schemastaffbaseresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/staff/search

> Code samples

```bash
curl https://example.com/staff/search \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'name=string&birthName=string&gender=string&dateOfBirthFrom=1970-01-01&dateOfBirthTo=1970-01-01&placeOfBirth=string&dateOfDeathFrom=1970-01-01&dateOfDeathTo=1970-01-01&placeOfDeath=string&artDepartment=true&artDirector=true&productionDesigner=true&cameraAndElectricalDepartment=true&cinematographer=true&castingDepartment=true&costumeDepartment=true&costumeDesigner=true&director=true&assistantOrSecondUnitDirector=true&exhibitAndAttractionStaff=true&filmEditor=true&linguist=true&locationStaff=true&makeupStaff=true&musicDepartment=true&composer=true&personalAssistant=true&producer=true&productionAssociate=true&productionStaff=true&publicationStaff=true&scienceConsultant=true&soundDepartment=true&specialAndVisualEffectsStaff=true&author=true&audioAuthor=true&calendarArtist=true&comicArtist=true&comicAuthor=true&comicColorArtist=true&comicInteriorArtist=true&comicInkArtist=true&comicPencilArtist=true&comicLetterArtist=true&comicStripArtist=true&gameArtist=true&gameAuthor=true&novelArtist=true&novelAuthor=true&referenceArtist=true&referenceAuthor=true&publicationArtist=true&publicationDesigner=true&publicationEditor=true&publicityArtist=true&cbsDigitalStaff=true&ilmProductionStaff=true&specialFeaturesStaff=true&storyEditor=true&studioExecutive=true&stuntDepartment=true&transportationDepartment=true&videoGameProductionStaff=true&writer=true'
```

`POST /staff/search`

Searching staff

> Body parameter

```yaml
name: string
birthName: string
gender: string
dateOfBirthFrom: "1970-01-01"
dateOfBirthTo: "1970-01-01"
placeOfBirth: string
dateOfDeathFrom: "1970-01-01"
dateOfDeathTo: "1970-01-01"
placeOfDeath: string
artDepartment: true
artDirector: true
productionDesigner: true
cameraAndElectricalDepartment: true
cinematographer: true
castingDepartment: true
costumeDepartment: true
costumeDesigner: true
director: true
assistantOrSecondUnitDirector: true
exhibitAndAttractionStaff: true
filmEditor: true
linguist: true
locationStaff: true
makeupStaff: true
musicDepartment: true
composer: true
personalAssistant: true
producer: true
productionAssociate: true
productionStaff: true
publicationStaff: true
scienceConsultant: true
soundDepartment: true
specialAndVisualEffectsStaff: true
author: true
audioAuthor: true
calendarArtist: true
comicArtist: true
comicAuthor: true
comicColorArtist: true
comicInteriorArtist: true
comicInkArtist: true
comicPencilArtist: true
comicLetterArtist: true
comicStripArtist: true
gameArtist: true
gameAuthor: true
novelArtist: true
novelAuthor: true
referenceArtist: true
referenceAuthor: true
publicationArtist: true
publicationDesigner: true
publicationEditor: true
publicityArtist: true
cbsDigitalStaff: true
ilmProductionStaff: true
specialFeaturesStaff: true
storyEditor: true
studioExecutive: true
stuntDepartment: true
transportationDepartment: true
videoGameProductionStaff: true
writer: true
```

<h3 id="poststaffsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|sort|query|string|false|Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC|
|apiKey|query|string|false|API key|
|body|body|object|false|none|
|» name|body|string|false|Staff name|
|» birthName|body|string|false|Staff birth name|
|» gender|body|string|false|Staff gender|
|» dateOfBirthFrom|body|string(date)|false|Minimal date the staff was born|
|» dateOfBirthTo|body|string(date)|false|Maximal date the staff was born|
|» placeOfBirth|body|string|false|Place the staff was born|
|» dateOfDeathFrom|body|string(date)|false|Minimal date the staff died|
|» dateOfDeathTo|body|string(date)|false|Maximal date the staff died|
|» placeOfDeath|body|string|false|Place the staff died|
|» artDepartment|body|boolean|false|Whether this person should be from art department|
|» artDirector|body|boolean|false|Whether this person should be an art director|
|» productionDesigner|body|boolean|false|Whether this person should be a production designer|
|» cameraAndElectricalDepartment|body|boolean|false|Whether this person should be from camera and electrical department|
|» cinematographer|body|boolean|false|Whether this person should be a cinematographer|
|» castingDepartment|body|boolean|false|Whether this person should be from casting department|
|» costumeDepartment|body|boolean|false|Whether this person should be from costume department|
|» costumeDesigner|body|boolean|false|Whether this person should be a custume designer|
|» director|body|boolean|false|Whether this person should be a director|
|» assistantOrSecondUnitDirector|body|boolean|false|Whether this person should be an assistant or secound unit director director|
|» exhibitAndAttractionStaff|body|boolean|false|Whether this person should be an exhibit and attraction staff|
|» filmEditor|body|boolean|false|Whether this person should be a film editor|
|» linguist|body|boolean|false|Whether this person should be a linguist|
|» locationStaff|body|boolean|false|Whether this person should be a location staff|
|» makeupStaff|body|boolean|false|Whether this person should be a make-up staff|
|» musicDepartment|body|boolean|false|Whether this person should be from music department|
|» composer|body|boolean|false|Whether this person should be a composer|
|» personalAssistant|body|boolean|false|Whether this person should be a personal assistant|
|» producer|body|boolean|false|Whether this person should be a producer|
|» productionAssociate|body|boolean|false|Whether this person should be a production associate|
|» productionStaff|body|boolean|false|Whether this person should be a production staff|
|» publicationStaff|body|boolean|false|Whether this person should be a publication staff|
|» scienceConsultant|body|boolean|false|Whether this person should be a science consultant|
|» soundDepartment|body|boolean|false|Whether this person should be from sound department|
|» specialAndVisualEffectsStaff|body|boolean|false|Whether this person should be a special and visual effects staff|
|» author|body|boolean|false|Whether this person should be an author|
|» audioAuthor|body|boolean|false|Whether this person should be an audio author|
|» calendarArtist|body|boolean|false|Whether this person should be a calendar artist|
|» comicArtist|body|boolean|false|Whether this person should be a comic artist|
|» comicAuthor|body|boolean|false|Whether this person should be a comic author|
|» comicColorArtist|body|boolean|false|Whether this person should be a comic color artist|
|» comicInteriorArtist|body|boolean|false|Whether this person should be a comic interior artist|
|» comicInkArtist|body|boolean|false|Whether this person should be a comic ink artist|
|» comicPencilArtist|body|boolean|false|Whether this person should be a comic pencil artist|
|» comicLetterArtist|body|boolean|false|Whether this person should be a comic letter artist|
|» comicStripArtist|body|boolean|false|Whether this person should be a comic strip artist|
|» gameArtist|body|boolean|false|Whether this person should be a game artist|
|» gameAuthor|body|boolean|false|Whether this person should be a game author|
|» novelArtist|body|boolean|false|Whether this person should be a novel artist|
|» novelAuthor|body|boolean|false|Whether this person should be a novel author|
|» referenceArtist|body|boolean|false|Whether this person should be a reference artist|
|» referenceAuthor|body|boolean|false|Whether this person should be a reference author|
|» publicationArtist|body|boolean|false|Whether this person should be a publication artist|
|» publicationDesigner|body|boolean|false|Whether this person should be a publication designer|
|» publicationEditor|body|boolean|false|Whether this person should be a publication editor|
|» publicityArtist|body|boolean|false|Whether this person should be a publicity artist|
|» cbsDigitalStaff|body|boolean|false|Whether this person should be a part of CBS digital staff|
|» ilmProductionStaff|body|boolean|false|Whether this person should be a part of ILM production staff|
|» specialFeaturesStaff|body|boolean|false|Whether this person should be a special features artist|
|» storyEditor|body|boolean|false|Whether this person should be a story editor|
|» studioExecutive|body|boolean|false|Whether this person should be a studio executive|
|» stuntDepartment|body|boolean|false|Whether this person should be from stunt department|
|» transportationDepartment|body|boolean|false|Whether this person should be from transportation department|
|» videoGameProductionStaff|body|boolean|false|Whether this person is video game production staff|
|» writer|body|boolean|false|Whether this person should be a writer|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "staff": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "artDepartment": true,
      "artDirector": true,
      "productionDesigner": true,
      "cameraAndElectricalDepartment": true,
      "cinematographer": true,
      "castingDepartment": true,
      "costumeDepartment": true,
      "costumeDesigner": true,
      "director": true,
      "assistantOrSecondUnitDirector": true,
      "exhibitAndAttractionStaff": true,
      "filmEditor": true,
      "linguist": true,
      "locationStaff": true,
      "makeupStaff": true,
      "musicDepartment": true,
      "composer": true,
      "personalAssistant": true,
      "producer": true,
      "productionAssociate": true,
      "productionStaff": true,
      "publicationStaff": true,
      "scienceConsultant": true,
      "soundDepartment": true,
      "specialAndVisualEffectsStaff": true,
      "author": true,
      "audioAuthor": true,
      "calendarArtist": true,
      "comicArtist": true,
      "comicAuthor": true,
      "comicColorArtist": true,
      "comicInteriorArtist": true,
      "comicInkArtist": true,
      "comicPencilArtist": true,
      "comicLetterArtist": true,
      "comicStripArtist": true,
      "gameArtist": true,
      "gameAuthor": true,
      "novelArtist": true,
      "novelAuthor": true,
      "referenceArtist": true,
      "referenceAuthor": true,
      "publicationArtist": true,
      "publicationDesigner": true,
      "publicationEditor": true,
      "publicityArtist": true,
      "cbsDigitalStaff": true,
      "ilmProductionStaff": true,
      "specialFeaturesStaff": true,
      "storyEditor": true,
      "studioExecutive": true,
      "stuntDepartment": true,
      "transportationDepartment": true,
      "videoGameProductionStaff": true,
      "writer": true
    }
  ]
}
```

<h3 id="poststaffsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[StaffBaseResponse](#schemastaffbaseresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="stapi-technology">Technology</h1>

## get/technology

> Code samples

```bash
curl 'https://example.com/technology?uid=string' \
  -H 'Accept: application/json'
```

`GET /technology`

Retrival of a single technology

<h3 id="gettechnology-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|query|string|true|Technology unique ID|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "technology": {
    "uid": "string",
    "name": "string",
    "borgTechnology": true,
    "borgComponent": true,
    "communicationsTechnology": true,
    "computerTechnology": true,
    "computerProgramming": true,
    "subroutine": true,
    "database": true,
    "energyTechnology": true,
    "fictionalTechnology": true,
    "holographicTechnology": true,
    "identificationTechnology": true,
    "lifeSupportTechnology": true,
    "sensorTechnology": true,
    "shieldTechnology": true,
    "tool": true,
    "culinaryTool": true,
    "engineeringTool": true,
    "householdTool": true,
    "medicalEquipment": true,
    "transporterTechnology": true
  }
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="gettechnology-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TechnologyFullResponse](#schematechnologyfullresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## get/technology/search

> Code samples

```bash
curl https://example.com/technology/search \
  -H 'Accept: application/json'
```

`GET /technology/search`

Pagination over technology

<h3 id="gettechnologysearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "technology": [
    {
      "uid": "string",
      "name": "string",
      "borgTechnology": true,
      "borgComponent": true,
      "communicationsTechnology": true,
      "computerTechnology": true,
      "computerProgramming": true,
      "subroutine": true,
      "database": true,
      "energyTechnology": true,
      "fictionalTechnology": true,
      "holographicTechnology": true,
      "identificationTechnology": true,
      "lifeSupportTechnology": true,
      "sensorTechnology": true,
      "shieldTechnology": true,
      "tool": true,
      "culinaryTool": true,
      "engineeringTool": true,
      "householdTool": true,
      "medicalEquipment": true,
      "transporterTechnology": true
    }
  ]
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="gettechnologysearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TechnologyBaseResponse](#schematechnologybaseresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/technology/search

> Code samples

```bash
curl https://example.com/technology/search \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'name=string&borgTechnology=true&borgComponent=true&communicationsTechnology=true&computerTechnology=true&computerProgramming=true&subroutine=true&database=true&energyTechnology=true&fictionalTechnology=true&holographicTechnology=true&identificationTechnology=true&lifeSupportTechnology=true&sensorTechnology=true&shieldTechnology=true&tool=true&culinaryTool=true&engineeringTool=true&householdTool=true&medicalEquipment=true&transporterTechnology=true'
```

`POST /technology/search`

Searching technology

> Body parameter

```yaml
name: string
borgTechnology: true
borgComponent: true
communicationsTechnology: true
computerTechnology: true
computerProgramming: true
subroutine: true
database: true
energyTechnology: true
fictionalTechnology: true
holographicTechnology: true
identificationTechnology: true
lifeSupportTechnology: true
sensorTechnology: true
shieldTechnology: true
tool: true
culinaryTool: true
engineeringTool: true
householdTool: true
medicalEquipment: true
transporterTechnology: true
```

<h3 id="posttechnologysearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|sort|query|string|false|Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC|
|apiKey|query|string|false|API key|
|body|body|object|false|none|
|» name|body|string|false|Technology name|
|» borgTechnology|body|boolean|false|Whether it should be a Borg technology|
|» borgComponent|body|boolean|false|Whether it should be a Borg component|
|» communicationsTechnology|body|boolean|false|Whether it should be a communications technology|
|» computerTechnology|body|boolean|false|Whether it should be a computer technology|
|» computerProgramming|body|boolean|false|Whether it should be a technology related to computer programming|
|» subroutine|body|boolean|false|Whether it should be a subroutine|
|» database|body|boolean|false|Whether it should be a database|
|» energyTechnology|body|boolean|false|Whether it should be a energy technology|
|» fictionalTechnology|body|boolean|false|Whether it should be a fictional technology|
|» holographicTechnology|body|boolean|false|Whether it should be a holographic technology|
|» identificationTechnology|body|boolean|false|Whether it should be a identification technology|
|» lifeSupportTechnology|body|boolean|false|Whether it should be a life support technology|
|» sensorTechnology|body|boolean|false|Whether it should be a sensor technology|
|» shieldTechnology|body|boolean|false|Whether it should be a shield technology|
|» tool|body|boolean|false|Whether it should be a tool|
|» culinaryTool|body|boolean|false|Whether it should be a culinary tool|
|» engineeringTool|body|boolean|false|Whether it should be a engineering tool|
|» householdTool|body|boolean|false|Whether it should be a household tool|
|» medicalEquipment|body|boolean|false|Whether it should be a medical equipment|
|» transporterTechnology|body|boolean|false|Whether it's a transporter technology|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "technology": [
    {
      "uid": "string",
      "name": "string",
      "borgTechnology": true,
      "borgComponent": true,
      "communicationsTechnology": true,
      "computerTechnology": true,
      "computerProgramming": true,
      "subroutine": true,
      "database": true,
      "energyTechnology": true,
      "fictionalTechnology": true,
      "holographicTechnology": true,
      "identificationTechnology": true,
      "lifeSupportTechnology": true,
      "sensorTechnology": true,
      "shieldTechnology": true,
      "tool": true,
      "culinaryTool": true,
      "engineeringTool": true,
      "householdTool": true,
      "medicalEquipment": true,
      "transporterTechnology": true
    }
  ]
}
```

<h3 id="posttechnologysearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TechnologyBaseResponse](#schematechnologybaseresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="stapi-title">Title</h1>

## get/title

> Code samples

```bash
curl 'https://example.com/title?uid=string' \
  -H 'Accept: application/json'
```

`GET /title`

Retrival of a single title

<h3 id="gettitle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|query|string|true|Title unique ID|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "title": {
    "uid": "string",
    "name": "string",
    "militaryRank": true,
    "fleetRank": true,
    "religiousTitle": true,
    "position": true,
    "mirror": true,
    "characters": [
      {
        "uid": "string",
        "name": "string",
        "gender": "F",
        "yearOfBirth": 0,
        "monthOfBirth": 0,
        "dayOfBirth": 0,
        "placeOfBirth": "string",
        "yearOfDeath": 0,
        "monthOfDeath": 0,
        "dayOfDeath": 0,
        "placeOfDeath": "string",
        "height": 0,
        "weight": 0,
        "deceased": true,
        "bloodType": "B_NEGATIVE",
        "maritalStatus": "SINGLE",
        "serialNumber": "string",
        "hologramActivationDate": "string",
        "hologramStatus": "string",
        "hologramDateStatus": "string",
        "hologram": true,
        "fictionalCharacter": true,
        "mirror": true,
        "alternateReality": true
      }
    ]
  }
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="gettitle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TitleFullResponse](#schematitlefullresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## get/title/search

> Code samples

```bash
curl https://example.com/title/search \
  -H 'Accept: application/json'
```

`GET /title/search`

Pagination over titles

<h3 id="gettitlesearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "titles": [
    {
      "uid": "string",
      "name": "string",
      "militaryRank": true,
      "fleetRank": true,
      "religiousTitle": true,
      "position": true,
      "mirror": true
    }
  ]
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="gettitlesearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TitleBaseResponse](#schematitlebaseresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/title/search

> Code samples

```bash
curl https://example.com/title/search \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'name=string&militaryRank=true&fleetRank=true&religiousTitle=true&position=true&mirror=true'
```

`POST /title/search`

Searching titles

> Body parameter

```yaml
name: string
militaryRank: true
fleetRank: true
religiousTitle: true
position: true
mirror: true
```

<h3 id="posttitlesearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|sort|query|string|false|Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC|
|apiKey|query|string|false|API key|
|body|body|object|false|none|
|» name|body|string|false|Title name|
|» militaryRank|body|boolean|false|Whether it should be a military rank|
|» fleetRank|body|boolean|false|Whether it should be a fleet rank|
|» religiousTitle|body|boolean|false|Whether it should be a religious title|
|» position|body|boolean|false|Whether it should be a position|
|» mirror|body|boolean|false|Whether this title should be from mirror universe|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "titles": [
    {
      "uid": "string",
      "name": "string",
      "militaryRank": true,
      "fleetRank": true,
      "religiousTitle": true,
      "position": true,
      "mirror": true
    }
  ]
}
```

<h3 id="posttitlesearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TitleBaseResponse](#schematitlebaseresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="stapi-tradingcard">TradingCard</h1>

## get/tradingCard

> Code samples

```bash
curl 'https://example.com/tradingCard?uid=string' \
  -H 'Accept: application/json'
```

`GET /tradingCard`

Retrival of a single trading card

<h3 id="gettradingcard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|query|string|true|Trading card unique ID|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "tradingCard": {
    "uid": "string",
    "name": "string",
    "tradingCardSet": {
      "uid": "string",
      "name": "string",
      "releaseYear": 0,
      "releaseMonth": 0,
      "releaseDay": 0,
      "cardsPerPack": 0,
      "packsPerBox": 0,
      "boxesPerCase": 0,
      "productionRun": 0,
      "productionRunUnit": "BOX",
      "cardWidth": 0,
      "cardHeight": 0
    },
    "tradingCardDeck": {
      "uid": "string",
      "name": "string",
      "frequency": "string",
      "tradingCardSet": {
        "uid": "string",
        "name": "string"
      }
    },
    "number": "string",
    "releaseYear": 0,
    "productionRun": 0
  }
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="gettradingcard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TradingCardFullResponse](#schematradingcardfullresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## get/tradingCard/search

> Code samples

```bash
curl https://example.com/tradingCard/search \
  -H 'Accept: application/json'
```

`GET /tradingCard/search`

Pagination over trading cards

<h3 id="gettradingcardsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "tradingCards": [
    {
      "uid": "string",
      "name": "string",
      "number": "string",
      "releaseYear": 0,
      "productionRun": 0,
      "tradingCardSet": {
        "uid": "string",
        "name": "string"
      },
      "tradingCardDeck": {
        "uid": "string",
        "name": "string"
      }
    }
  ]
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="gettradingcardsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TradingCardBaseResponse](#schematradingcardbaseresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/tradingCard/search

> Code samples

```bash
curl https://example.com/tradingCard/search \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'name=string&tradingCardDeckUid=string&tradingCardSetUid=string'
```

`POST /tradingCard/search`

Searching trading cards

> Body parameter

```yaml
name: string
tradingCardDeckUid: string
tradingCardSetUid: string
```

<h3 id="posttradingcardsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|sort|query|string|false|Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC|
|apiKey|query|string|false|API key|
|body|body|object|false|none|
|» name|body|string|false|Trading card name|
|» tradingCardDeckUid|body|string|false|UID of trading card deck|
|» tradingCardSetUid|body|string|false|UID of trading card set|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "tradingCards": [
    {
      "uid": "string",
      "name": "string",
      "number": "string",
      "releaseYear": 0,
      "productionRun": 0,
      "tradingCardSet": {
        "uid": "string",
        "name": "string"
      },
      "tradingCardDeck": {
        "uid": "string",
        "name": "string"
      }
    }
  ]
}
```

<h3 id="posttradingcardsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TradingCardBaseResponse](#schematradingcardbaseresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="stapi-tradingcarddeck">TradingCardDeck</h1>

## get/tradingCardDeck

> Code samples

```bash
curl 'https://example.com/tradingCardDeck?uid=string' \
  -H 'Accept: application/json'
```

`GET /tradingCardDeck`

Retrival of a single trading card deck

<h3 id="gettradingcarddeck-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|query|string|true|trading card deck unique ID|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "tradingCardDeck": {
    "uid": "string",
    "name": "string",
    "frequency": "string",
    "tradingCardSet": {
      "uid": "string",
      "name": "string"
    },
    "tradingCards": [
      {
        "uid": "string",
        "name": "string",
        "number": "string",
        "releaseYear": 0,
        "productionRun": 0,
        "tradingCardSet": {
          "uid": "string",
          "name": "string"
        },
        "tradingCardDeck": {
          "uid": "string",
          "name": "string"
        }
      }
    ]
  }
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="gettradingcarddeck-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TradingCardDeckFullResponse](#schematradingcarddeckfullresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## get/tradingCardDeck/search

> Code samples

```bash
curl https://example.com/tradingCardDeck/search \
  -H 'Accept: application/json'
```

`GET /tradingCardDeck/search`

Pagination over trading card decks

<h3 id="gettradingcarddecksearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "tradingCardDecks": [
    {
      "uid": "string",
      "name": "string",
      "frequency": "string",
      "tradingCardSet": {
        "uid": "string",
        "name": "string"
      }
    }
  ]
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="gettradingcarddecksearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TradingCardDeckBaseResponse](#schematradingcarddeckbaseresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/tradingCardDeck/search

> Code samples

```bash
curl https://example.com/tradingCardDeck/search \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'name=string&tradingCardSetUid=string'
```

`POST /tradingCardDeck/search`

Searching trading card decks

> Body parameter

```yaml
name: string
tradingCardSetUid: string
```

<h3 id="posttradingcarddecksearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|sort|query|string|false|Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC|
|apiKey|query|string|false|API key|
|body|body|object|false|none|
|» name|body|string|false|Trading card deck name|
|» tradingCardSetUid|body|string|false|UID of trading card set|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "tradingCardDecks": [
    {
      "uid": "string",
      "name": "string",
      "frequency": "string",
      "tradingCardSet": {
        "uid": "string",
        "name": "string"
      }
    }
  ]
}
```

<h3 id="posttradingcarddecksearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TradingCardDeckBaseResponse](#schematradingcarddeckbaseresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="stapi-tradingcardset">TradingCardSet</h1>

## get/tradingCardSet

> Code samples

```bash
curl 'https://example.com/tradingCardSet?uid=string' \
  -H 'Accept: application/json'
```

`GET /tradingCardSet`

Retrival of a single trading card set

<h3 id="gettradingcardset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|query|string|true|Trading card set unique ID|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "tradingCardSet": {
    "uid": "string",
    "name": "string",
    "releaseYear": 0,
    "releaseMonth": 0,
    "releaseDay": 0,
    "cardsPerPack": 0,
    "packsPerBox": 0,
    "boxesPerCase": 0,
    "productionRun": 0,
    "productionRunUnit": "BOX",
    "cardWidth": 0,
    "cardHeight": 0,
    "manufacturers": [
      {
        "uid": "string",
        "name": "string",
        "broadcaster": true,
        "collectibleCompany": true,
        "conglomerate": true,
        "digitalVisualEffectsCompany": true,
        "distributor": true,
        "gameCompany": true,
        "filmEquipmentCompany": true,
        "makeUpEffectsStudio": true,
        "mattePaintingCompany": true,
        "modelAndMiniatureEffectsCompany": true,
        "postProductionCompany": true,
        "productionCompany": true,
        "propCompany": true,
        "recordLabel": true,
        "specialEffectsCompany": true,
        "tvAndFilmProductionCompany": true,
        "videoGameCompany": true
      }
    ],
    "tradingCardDecks": [
      {
        "uid": "string",
        "name": "string",
        "frequency": "string",
        "tradingCardSet": {
          "uid": "string",
          "name": "string"
        }
      }
    ],
    "tradingCards": [
      {
        "uid": "string",
        "name": "string",
        "number": "string",
        "releaseYear": 0,
        "productionRun": 0,
        "tradingCardSet": {
          "uid": "string",
          "name": "string"
        },
        "tradingCardDeck": {
          "uid": "string",
          "name": "string"
        }
      }
    ],
    "countriesOfOrigin": [
      {
        "uid": "string",
        "name": "string",
        "iso31661Alpha2Code": "string"
      }
    ]
  }
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="gettradingcardset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TradingCardSetFullResponse](#schematradingcardsetfullresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## get/tradingCardSet/search

> Code samples

```bash
curl https://example.com/tradingCardSet/search \
  -H 'Accept: application/json'
```

`GET /tradingCardSet/search`

Pagination over trading card sets

<h3 id="gettradingcardsetsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "tradingCardSets": [
    {
      "uid": "string",
      "name": "string",
      "releaseYear": 0,
      "releaseMonth": 0,
      "releaseDay": 0,
      "cardsPerPack": 0,
      "packsPerBox": 0,
      "boxesPerCase": 0,
      "productionRun": 0,
      "productionRunUnit": "BOX",
      "cardWidth": 0,
      "cardHeight": 0
    }
  ]
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="gettradingcardsetsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TradingCardSetBaseResponse](#schematradingcardsetbaseresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/tradingCardSet/search

> Code samples

```bash
curl https://example.com/tradingCardSet/search \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'name=string&releaseYearFrom=0&releaseYearTo=0&cardsPerPackFrom=0&cardsPerPackTo=0&packsPerBoxFrom=0&packsPerBoxTo=0&boxesPerCaseFrom=0&boxesPerCaseTo=0&productionRunFrom=0&productionRunTo=0&productionRunUnit=string&cardWidthFrom=0&cardWidthTo=0&cardHeightFrom=0&cardHeightTo=0'
```

`POST /tradingCardSet/search`

Searching trading card sets

> Body parameter

```yaml
name: string
releaseYearFrom: 0
releaseYearTo: 0
cardsPerPackFrom: 0
cardsPerPackTo: 0
packsPerBoxFrom: 0
packsPerBoxTo: 0
boxesPerCaseFrom: 0
boxesPerCaseTo: 0
productionRunFrom: 0
productionRunTo: 0
productionRunUnit: string
cardWidthFrom: 0
cardWidthTo: 0
cardHeightFrom: 0
cardHeightTo: 0
```

<h3 id="posttradingcardsetsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|sort|query|string|false|Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC|
|apiKey|query|string|false|API key|
|body|body|object|false|none|
|» name|body|string|false|Trading card set name|
|» releaseYearFrom|body|integer(int32)|false|Starting year the trading card set was released|
|» releaseYearTo|body|integer(int32)|false|Ending year the trading card set was released|
|» cardsPerPackFrom|body|integer(int32)|false|Minimal number of cards per deck|
|» cardsPerPackTo|body|integer(int32)|false|Minimal number of cards per deck|
|» packsPerBoxFrom|body|integer(int32)|false|Minimal number of packs per box|
|» packsPerBoxTo|body|integer(int32)|false|Minimal number of packs per box|
|» boxesPerCaseFrom|body|integer(int32)|false|Minimal number of boxes per case|
|» boxesPerCaseTo|body|integer(int32)|false|Minimal number of boxes per case|
|» productionRunFrom|body|integer(int32)|false|Minimal production run|
|» productionRunTo|body|integer(int32)|false|Minimal production run|
|» productionRunUnit|body|string|false|Production run unit|
|» cardWidthFrom|body|number(double)|false|Minimal card width, in inches|
|» cardWidthTo|body|number(double)|false|Minimal card width, in inches|
|» cardHeightFrom|body|number(double)|false|Minimal card height, in inches|
|» cardHeightTo|body|number(double)|false|Minimal card height, in inches|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "tradingCardSets": [
    {
      "uid": "string",
      "name": "string",
      "releaseYear": 0,
      "releaseMonth": 0,
      "releaseDay": 0,
      "cardsPerPack": 0,
      "packsPerBox": 0,
      "boxesPerCase": 0,
      "productionRun": 0,
      "productionRunUnit": "BOX",
      "cardWidth": 0,
      "cardHeight": 0
    }
  ]
}
```

<h3 id="posttradingcardsetsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TradingCardSetBaseResponse](#schematradingcardsetbaseresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="stapi-videogame">VideoGame</h1>

## get/videoGame

> Code samples

```bash
curl 'https://example.com/videoGame?uid=string' \
  -H 'Accept: application/json'
```

`GET /videoGame`

Retrival of a single video game

<h3 id="getvideogame-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|query|string|true|VideoGame unique ID|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "videoGame": {
    "uid": "string",
    "title": "string",
    "releaseDate": "1970-01-01",
    "stardateFrom": 0,
    "stardateTo": 0,
    "yearFrom": 0,
    "yearTo": 0,
    "systemRequirements": "string",
    "publishers": [
      {
        "uid": "string",
        "name": "string",
        "broadcaster": true,
        "collectibleCompany": true,
        "conglomerate": true,
        "digitalVisualEffectsCompany": true,
        "distributor": true,
        "gameCompany": true,
        "filmEquipmentCompany": true,
        "makeUpEffectsStudio": true,
        "mattePaintingCompany": true,
        "modelAndMiniatureEffectsCompany": true,
        "postProductionCompany": true,
        "productionCompany": true,
        "propCompany": true,
        "recordLabel": true,
        "specialEffectsCompany": true,
        "tvAndFilmProductionCompany": true,
        "videoGameCompany": true
      }
    ],
    "developers": [
      {
        "uid": "string",
        "name": "string",
        "broadcaster": true,
        "collectibleCompany": true,
        "conglomerate": true,
        "digitalVisualEffectsCompany": true,
        "distributor": true,
        "gameCompany": true,
        "filmEquipmentCompany": true,
        "makeUpEffectsStudio": true,
        "mattePaintingCompany": true,
        "modelAndMiniatureEffectsCompany": true,
        "postProductionCompany": true,
        "productionCompany": true,
        "propCompany": true,
        "recordLabel": true,
        "specialEffectsCompany": true,
        "tvAndFilmProductionCompany": true,
        "videoGameCompany": true
      }
    ],
    "platforms": [
      {
        "uid": "string",
        "name": "string"
      }
    ],
    "genres": [
      {
        "uid": "string",
        "name": "string"
      }
    ],
    "ratings": [
      {
        "uid": "string",
        "contentRatingSystem": "BBFC",
        "rating": "string"
      }
    ],
    "references": [
      {
        "uid": "string",
        "referenceType": "ASIN",
        "referenceNumber": "string"
      }
    ]
  }
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getvideogame-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[VideoGameFullResponse](#schemavideogamefullresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## get/videoGame/search

> Code samples

```bash
curl https://example.com/videoGame/search \
  -H 'Accept: application/json'
```

`GET /videoGame/search`

Pagination over video games

<h3 id="getvideogamesearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "videoGames": [
    {
      "uid": "string",
      "title": "string",
      "releaseDate": "1970-01-01",
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "systemRequirements": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getvideogamesearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[VideoGameBaseResponse](#schemavideogamebaseresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/videoGame/search

> Code samples

```bash
curl https://example.com/videoGame/search \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'title=string&releaseDateFrom=1970-01-01&releaseDateTo=1970-01-01'
```

`POST /videoGame/search`

Searching video games

> Body parameter

```yaml
title: string
releaseDateFrom: "1970-01-01"
releaseDateTo: "1970-01-01"
```

<h3 id="postvideogamesearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|sort|query|string|false|Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC|
|apiKey|query|string|false|API key|
|body|body|object|false|none|
|» title|body|string|false|Video game title|
|» releaseDateFrom|body|string(date)|false|Minimal date the video game was first released|
|» releaseDateTo|body|string(date)|false|Minimal date the video game was first released|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "videoGames": [
    {
      "uid": "string",
      "title": "string",
      "releaseDate": "1970-01-01",
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "systemRequirements": "string"
    }
  ]
}
```

<h3 id="postvideogamesearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[VideoGameBaseResponse](#schemavideogamebaseresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="stapi-videorelease">VideoRelease</h1>

## get/videoRelease

> Code samples

```bash
curl 'https://example.com/videoRelease?uid=string' \
  -H 'Accept: application/json'
```

`GET /videoRelease`

Retrival of a single video release

<h3 id="getvideorelease-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|query|string|true|Video release unique ID|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "videoRelease": {
    "uid": "string",
    "title": "string",
    "series": {
      "uid": "string",
      "title": "string",
      "abbreviation": "string",
      "productionStartYear": 0,
      "productionEndYear": 0,
      "originalRunStartDate": "1970-01-01",
      "originalRunEndDate": "1970-01-01",
      "seasonsCount": 0,
      "episodesCount": 0,
      "featureLengthEpisodesCount": 0,
      "productionCompany": {
        "uid": "string",
        "name": "string"
      },
      "originalBroadcaster": {
        "uid": "string",
        "name": "string"
      }
    },
    "season": {
      "uid": "string",
      "title": "string",
      "series": {
        "uid": "string",
        "title": "string"
      },
      "seasonNumber": 0,
      "numberOfEpisodes": 0
    },
    "format": "SUPER_8",
    "numberOfEpisodes": 0,
    "numberOfFeatureLengthEpisodes": 0,
    "numberOfDataCarriers": 0,
    "runTime": 0,
    "yearFrom": 0,
    "yearTo": 0,
    "regionFreeReleaseDate": "1970-01-01",
    "region1AReleaseDate": "1970-01-01",
    "region1SlimlineReleaseDate": "1970-01-01",
    "region2BReleaseDate": "1970-01-01",
    "region2SlimlineReleaseDate": "1970-01-01",
    "region4AReleaseDate": "1970-01-01",
    "region4SlimlineReleaseDate": "1970-01-01",
    "amazonDigitalRelease": true,
    "dailymotionDigitalRelease": true,
    "googlePlayDigitalRelease": true,
    "iTunesDigitalRelease": true,
    "ultraVioletDigitalRelease": true,
    "vimeoDigitalRelease": true,
    "vuduDigitalRelease": true,
    "xboxSmartGlassDigitalRelease": true,
    "youTubeDigitalRelease": true,
    "netflixDigitalRelease": true,
    "references": [
      {
        "uid": "string",
        "referenceType": "ASIN",
        "referenceNumber": "string"
      }
    ],
    "ratings": [
      {
        "uid": "string",
        "contentRatingSystem": "BBFC",
        "rating": "string"
      }
    ],
    "languages": [
      {
        "uid": "string",
        "name": "string",
        "iso6391Code": "string"
      }
    ],
    "languagesSubtitles": [
      {
        "uid": "string",
        "name": "string",
        "iso6391Code": "string"
      }
    ],
    "languagesDubbed": [
      {
        "uid": "string",
        "name": "string",
        "iso6391Code": "string"
      }
    ]
  }
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getvideorelease-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[VideoReleaseFullResponse](#schemavideoreleasefullresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## get/videoRelease/search

> Code samples

```bash
curl https://example.com/videoRelease/search \
  -H 'Accept: application/json'
```

`GET /videoRelease/search`

Pagination over video releases

<h3 id="getvideoreleasesearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "videoReleases": [
    {
      "uid": "string",
      "title": "string",
      "series": {
        "uid": "string",
        "title": "string"
      },
      "season": {
        "uid": "string",
        "title": "string"
      },
      "format": "SUPER_8",
      "numberOfEpisodes": 0,
      "numberOfFeatureLengthEpisodes": 0,
      "numberOfDataCarriers": 0,
      "runTime": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "regionFreeReleaseDate": "1970-01-01",
      "region1AReleaseDate": "1970-01-01",
      "region1SlimlineReleaseDate": "1970-01-01",
      "region2BReleaseDate": "1970-01-01",
      "region2SlimlineReleaseDate": "1970-01-01",
      "region4AReleaseDate": "1970-01-01",
      "region4SlimlineReleaseDate": "1970-01-01",
      "amazonDigitalRelease": true,
      "dailymotionDigitalRelease": true,
      "googlePlayDigitalRelease": true,
      "iTunesDigitalRelease": true,
      "ultraVioletDigitalRelease": true,
      "vimeoDigitalRelease": true,
      "vuduDigitalRelease": true,
      "xboxSmartGlassDigitalRelease": true,
      "youTubeDigitalRelease": true,
      "netflixDigitalRelease": true
    }
  ]
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getvideoreleasesearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[VideoReleaseBaseResponse](#schemavideoreleasebaseresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/videoRelease/search

> Code samples

```bash
curl https://example.com/videoRelease/search \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'title=string&yearFrom=0&yearTo=0&runTimeFrom=0&runTimeTo=0'
```

`POST /videoRelease/search`

Searching video releases

> Body parameter

```yaml
title: string
yearFrom: 0
yearTo: 0
runTimeFrom: 0
runTimeTo: 0
```

<h3 id="postvideoreleasesearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|sort|query|string|false|Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC|
|apiKey|query|string|false|API key|
|body|body|object|false|none|
|» title|body|string|false|Video release title|
|» yearFrom|body|integer(int32)|false|Starting year of video release story|
|» yearTo|body|integer(int32)|false|Ending year of video release story|
|» runTimeFrom|body|integer(int32)|false|Minimal run time, in minutes|
|» runTimeTo|body|integer(int32)|false|Minimal run time, in minutes|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "videoReleases": [
    {
      "uid": "string",
      "title": "string",
      "series": {
        "uid": "string",
        "title": "string"
      },
      "season": {
        "uid": "string",
        "title": "string"
      },
      "format": "SUPER_8",
      "numberOfEpisodes": 0,
      "numberOfFeatureLengthEpisodes": 0,
      "numberOfDataCarriers": 0,
      "runTime": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "regionFreeReleaseDate": "1970-01-01",
      "region1AReleaseDate": "1970-01-01",
      "region1SlimlineReleaseDate": "1970-01-01",
      "region2BReleaseDate": "1970-01-01",
      "region2SlimlineReleaseDate": "1970-01-01",
      "region4AReleaseDate": "1970-01-01",
      "region4SlimlineReleaseDate": "1970-01-01",
      "amazonDigitalRelease": true,
      "dailymotionDigitalRelease": true,
      "googlePlayDigitalRelease": true,
      "iTunesDigitalRelease": true,
      "ultraVioletDigitalRelease": true,
      "vimeoDigitalRelease": true,
      "vuduDigitalRelease": true,
      "xboxSmartGlassDigitalRelease": true,
      "youTubeDigitalRelease": true,
      "netflixDigitalRelease": true
    }
  ]
}
```

<h3 id="postvideoreleasesearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[VideoReleaseBaseResponse](#schemavideoreleasebaseresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="stapi-weapon">Weapon</h1>

## get/weapon

> Code samples

```bash
curl 'https://example.com/weapon?uid=string' \
  -H 'Accept: application/json'
```

`GET /weapon`

Retrival of a single weapon

<h3 id="getweapon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uid|query|string|true|Weapon unique ID|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "weapon": {
    "uid": "string",
    "name": "string",
    "handHeldWeapon": true,
    "laserTechnology": true,
    "plasmaTechnology": true,
    "photonicTechnology": true,
    "phaserTechnology": true,
    "mirror": true,
    "alternateReality": true
  }
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getweapon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[WeaponFullResponse](#schemaweaponfullresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## get/weapon/search

> Code samples

```bash
curl https://example.com/weapon/search \
  -H 'Accept: application/json'
```

`GET /weapon/search`

Pagination over weapons

<h3 id="getweaponsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|apiKey|query|string|false|API key|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "weapons": [
    {
      "uid": "string",
      "name": "string",
      "handHeldWeapon": true,
      "laserTechnology": true,
      "plasmaTechnology": true,
      "photonicTechnology": true,
      "phaserTechnology": true,
      "mirror": true,
      "alternateReality": true
    }
  ]
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="getweaponsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[WeaponBaseResponse](#schemaweaponbaseresponse)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="success">
This operation does not require authentication
</aside>

## post/weapon/search

> Code samples

```bash
curl https://example.com/weapon/search \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'name=string&handHeldWeapon=true&laserTechnology=true&plasmaTechnology=true&photonicTechnology=true&phaserTechnology=true&mirror=true&alternateReality=true'
```

`POST /weapon/search`

Searching weapons

> Body parameter

```yaml
name: string
handHeldWeapon: true
laserTechnology: true
plasmaTechnology: true
photonicTechnology: true
phaserTechnology: true
mirror: true
alternateReality: true
```

<h3 id="postweaponsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageNumber|query|integer(int32)|false|Zero-based page number|
|pageSize|query|integer(int32)|false|Page size|
|sort|query|string|false|Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC|
|apiKey|query|string|false|API key|
|body|body|object|false|none|
|» name|body|string|false|Weapon name|
|» handHeldWeapon|body|boolean|false|Whether it should be a hand-help weapon|
|» laserTechnology|body|boolean|false|Whether it should be a laser technology|
|» plasmaTechnology|body|boolean|false|Whether it should be a plasma technology|
|» photonicTechnology|body|boolean|false|Whether it should be a photonic technology|
|» phaserTechnology|body|boolean|false|Whether it should be a phaser technology|
|» mirror|body|boolean|false|Whether this weapon should be from mirror universe|
|» alternateReality|body|boolean|false|Whether this weapon should be from alternate reality|

> Example responses

> 200 Response

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "weapons": [
    {
      "uid": "string",
      "name": "string",
      "handHeldWeapon": true,
      "laserTechnology": true,
      "plasmaTechnology": true,
      "photonicTechnology": true,
      "phaserTechnology": true,
      "mirror": true,
      "alternateReality": true
    }
  ]
}
```

<h3 id="postweaponsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[WeaponBaseResponse](#schemaweaponbaseresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AnimalHeader">AnimalHeader</h2>
<!-- backwards compatibility -->
<a id="schemaanimalheader"></a>
<a id="schema_AnimalHeader"></a>
<a id="tocSanimalheader"></a>
<a id="tocsanimalheader"></a>

```json
{
  "uid": "string",
  "name": "string"
}
```

Header animal, embedded in other objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Animal unique ID|
|name|string|true|none|Animal name|

<h2 id="tocS_AnimalBase">AnimalBase</h2>
<!-- backwards compatibility -->
<a id="schemaanimalbase"></a>
<a id="schema_AnimalBase"></a>
<a id="tocSanimalbase"></a>
<a id="tocsanimalbase"></a>

```json
{
  "uid": "string",
  "name": "string",
  "earthAnimal": true,
  "earthInsect": true,
  "avian": true,
  "canine": true,
  "feline": true
}
```

Base animal, returned in search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Animal unique ID|
|name|string|true|none|Animal name|
|earthAnimal|boolean|false|none|Whether it's an earth animal|
|earthInsect|boolean|false|none|Whether it's an earth insect|
|avian|boolean|false|none|Whether it's an avian|
|canine|boolean|false|none|Whether it's a canine|
|feline|boolean|false|none|Whether it's a feline|

<h2 id="tocS_AnimalFull">AnimalFull</h2>
<!-- backwards compatibility -->
<a id="schemaanimalfull"></a>
<a id="schema_AnimalFull"></a>
<a id="tocSanimalfull"></a>
<a id="tocsanimalfull"></a>

```json
{
  "uid": "string",
  "name": "string",
  "earthAnimal": true,
  "earthInsect": true,
  "avian": true,
  "canine": true,
  "feline": true
}
```

Full animal, returned when queried using UID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Animal unique ID|
|name|string|true|none|Animal name|
|earthAnimal|boolean|false|none|Whether it's an earth animal|
|earthInsect|boolean|false|none|Whether it's an earth insect|
|avian|boolean|false|none|Whether it's an avian|
|canine|boolean|false|none|Whether it's a canine|
|feline|boolean|false|none|Whether it's a feline|

<h2 id="tocS_AnimalBaseResponse">AnimalBaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemaanimalbaseresponse"></a>
<a id="schema_AnimalBaseResponse"></a>
<a id="tocSanimalbaseresponse"></a>
<a id="tocsanimalbaseresponse"></a>

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "animals": [
    {
      "uid": "string",
      "name": "string",
      "earthAnimal": true,
      "earthInsect": true,
      "avian": true,
      "canine": true,
      "feline": true
    }
  ]
}
```

Response object for animals search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|[ResponsePage](#schemaresponsepage)|false|none|Object describing response page|
|sort|[ResponseSort](#schemaresponsesort)|false|none|Response sort|
|animals|[[AnimalBase](#schemaanimalbase)]|false|none|List of animals matching given criteria|

<h2 id="tocS_AnimalFullResponse">AnimalFullResponse</h2>
<!-- backwards compatibility -->
<a id="schemaanimalfullresponse"></a>
<a id="schema_AnimalFullResponse"></a>
<a id="tocSanimalfullresponse"></a>
<a id="tocsanimalfullresponse"></a>

```json
{
  "animal": {
    "uid": "string",
    "name": "string",
    "earthAnimal": true,
    "earthInsect": true,
    "avian": true,
    "canine": true,
    "feline": true
  }
}
```

Response object for single animal query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|animal|[AnimalFull](#schemaanimalfull)|false|none|Full animal, returned when queried using UID|

<h2 id="tocS_AstronomicalObjectHeader">AstronomicalObjectHeader</h2>
<!-- backwards compatibility -->
<a id="schemaastronomicalobjectheader"></a>
<a id="schema_AstronomicalObjectHeader"></a>
<a id="tocSastronomicalobjectheader"></a>
<a id="tocsastronomicalobjectheader"></a>

```json
{
  "uid": "string",
  "name": "string"
}
```

Header astronomical object, embedded in other objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Astronomical object's unique ID|
|name|string|true|none|Astronomical object name|

<h2 id="tocS_AstronomicalObjectBase">AstronomicalObjectBase</h2>
<!-- backwards compatibility -->
<a id="schemaastronomicalobjectbase"></a>
<a id="schema_AstronomicalObjectBase"></a>
<a id="tocSastronomicalobjectbase"></a>
<a id="tocsastronomicalobjectbase"></a>

```json
{
  "uid": "string",
  "name": "string",
  "astronomicalObjectType": "PLANET",
  "location": {
    "uid": "string",
    "name": "string"
  }
}
```

Base astronomical object, returned in search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Astronomical object's unique ID|
|name|string|true|none|Astronomical object name|
|astronomicalObjectType|[AstronomicalObjectType](#schemaastronomicalobjecttype)|true|none|Astronomical object type|
|location|[AstronomicalObjectHeader](#schemaastronomicalobjectheader)|false|none|Header astronomical object, embedded in other objects|

#### Enumerated Values

|Property|Value|
|---|---|
|astronomicalObjectType|PLANET|
|astronomicalObjectType|D_CLASS_PLANET|
|astronomicalObjectType|H_CLASS_PLANET|
|astronomicalObjectType|GAS_GIANT_PLANET|
|astronomicalObjectType|K_CLASS_PLANET|
|astronomicalObjectType|L_CLASS_PLANET|
|astronomicalObjectType|M_CLASS_PLANET|
|astronomicalObjectType|Y_CLASS_PLANET|
|astronomicalObjectType|ROGUE_PLANET|
|astronomicalObjectType|ARTIFICIAL_PLANET|
|astronomicalObjectType|ASTEROID|
|astronomicalObjectType|ASTEROIDAL_MOON|
|astronomicalObjectType|ASTEROID_BELT|
|astronomicalObjectType|CLUSTER|
|astronomicalObjectType|COMET|
|astronomicalObjectType|CONSTELLATION|
|astronomicalObjectType|GALAXY|
|astronomicalObjectType|MOON|
|astronomicalObjectType|M_CLASS_MOON|
|astronomicalObjectType|NEBULA|
|astronomicalObjectType|PLANETOID|
|astronomicalObjectType|D_CLASS_PLANETOID|
|astronomicalObjectType|QUASAR|
|astronomicalObjectType|STAR|
|astronomicalObjectType|STAR_SYSTEM|
|astronomicalObjectType|SECTOR|
|astronomicalObjectType|REGION|

<h2 id="tocS_AstronomicalObjectFull">AstronomicalObjectFull</h2>
<!-- backwards compatibility -->
<a id="schemaastronomicalobjectfull"></a>
<a id="schema_AstronomicalObjectFull"></a>
<a id="tocSastronomicalobjectfull"></a>
<a id="tocsastronomicalobjectfull"></a>

```json
{
  "uid": "string",
  "name": "string",
  "astronomicalObjectType": "PLANET",
  "location": {
    "uid": "string",
    "name": "string",
    "astronomicalObjectType": "PLANET",
    "location": {
      "uid": "string",
      "name": "string"
    }
  },
  "astronomicalObjects": [
    {
      "uid": "string",
      "name": "string",
      "astronomicalObjectType": "PLANET",
      "location": {
        "uid": "string",
        "name": "string"
      }
    }
  ]
}
```

Full astronomical object, returned when queried using UID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Astronomical object's unique ID|
|name|string|true|none|Astronomical object name|
|astronomicalObjectType|[AstronomicalObjectType](#schemaastronomicalobjecttype)|true|none|Astronomical object type|
|location|[AstronomicalObjectBase](#schemaastronomicalobjectbase)|false|none|Base astronomical object, returned in search results|
|astronomicalObjects|[[AstronomicalObjectBase](#schemaastronomicalobjectbase)]|false|none|Astronomical objects located in this astronomical object, like planets in a star system|

#### Enumerated Values

|Property|Value|
|---|---|
|astronomicalObjectType|PLANET|
|astronomicalObjectType|D_CLASS_PLANET|
|astronomicalObjectType|H_CLASS_PLANET|
|astronomicalObjectType|GAS_GIANT_PLANET|
|astronomicalObjectType|K_CLASS_PLANET|
|astronomicalObjectType|L_CLASS_PLANET|
|astronomicalObjectType|M_CLASS_PLANET|
|astronomicalObjectType|Y_CLASS_PLANET|
|astronomicalObjectType|ROGUE_PLANET|
|astronomicalObjectType|ARTIFICIAL_PLANET|
|astronomicalObjectType|ASTEROID|
|astronomicalObjectType|ASTEROIDAL_MOON|
|astronomicalObjectType|ASTEROID_BELT|
|astronomicalObjectType|CLUSTER|
|astronomicalObjectType|COMET|
|astronomicalObjectType|CONSTELLATION|
|astronomicalObjectType|GALAXY|
|astronomicalObjectType|MOON|
|astronomicalObjectType|M_CLASS_MOON|
|astronomicalObjectType|NEBULA|
|astronomicalObjectType|PLANETOID|
|astronomicalObjectType|D_CLASS_PLANETOID|
|astronomicalObjectType|QUASAR|
|astronomicalObjectType|STAR|
|astronomicalObjectType|STAR_SYSTEM|
|astronomicalObjectType|SECTOR|
|astronomicalObjectType|REGION|

<h2 id="tocS_AstronomicalObjectBaseResponse">AstronomicalObjectBaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemaastronomicalobjectbaseresponse"></a>
<a id="schema_AstronomicalObjectBaseResponse"></a>
<a id="tocSastronomicalobjectbaseresponse"></a>
<a id="tocsastronomicalobjectbaseresponse"></a>

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "astronomicalObjects": [
    {
      "uid": "string",
      "name": "string",
      "astronomicalObjectType": "PLANET",
      "location": {
        "uid": "string",
        "name": "string"
      }
    }
  ]
}
```

Response object for astronomical objects search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|[ResponsePage](#schemaresponsepage)|false|none|Object describing response page|
|sort|[ResponseSort](#schemaresponsesort)|false|none|Response sort|
|astronomicalObjects|[[AstronomicalObjectBase](#schemaastronomicalobjectbase)]|false|none|List of astronomical objects matching given criteria|

<h2 id="tocS_AstronomicalObjectFullResponse">AstronomicalObjectFullResponse</h2>
<!-- backwards compatibility -->
<a id="schemaastronomicalobjectfullresponse"></a>
<a id="schema_AstronomicalObjectFullResponse"></a>
<a id="tocSastronomicalobjectfullresponse"></a>
<a id="tocsastronomicalobjectfullresponse"></a>

```json
{
  "astronomicalObject": {
    "uid": "string",
    "name": "string",
    "astronomicalObjectType": "PLANET",
    "location": {
      "uid": "string",
      "name": "string",
      "astronomicalObjectType": "PLANET",
      "location": {
        "uid": "string",
        "name": "string"
      }
    },
    "astronomicalObjects": [
      {
        "uid": "string",
        "name": "string",
        "astronomicalObjectType": "PLANET",
        "location": {
          "uid": "string",
          "name": "string"
        }
      }
    ]
  }
}
```

Response object for single astronomical object query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|astronomicalObject|[AstronomicalObjectFull](#schemaastronomicalobjectfull)|false|none|Full astronomical object, returned when queried using UID|

<h2 id="tocS_AstronomicalObjectType">AstronomicalObjectType</h2>
<!-- backwards compatibility -->
<a id="schemaastronomicalobjecttype"></a>
<a id="schema_AstronomicalObjectType"></a>
<a id="tocSastronomicalobjecttype"></a>
<a id="tocsastronomicalobjecttype"></a>

```json
"PLANET"
```

Astronomical object type

<h2 id="tocS_BloodType">BloodType</h2>
<!-- backwards compatibility -->
<a id="schemabloodtype"></a>
<a id="schema_BloodType"></a>
<a id="tocSbloodtype"></a>
<a id="tocsbloodtype"></a>

```json
"B_NEGATIVE"
```

Blood type

<h2 id="tocS_BookHeader">BookHeader</h2>
<!-- backwards compatibility -->
<a id="schemabookheader"></a>
<a id="schema_BookHeader"></a>
<a id="tocSbookheader"></a>
<a id="tocsbookheader"></a>

```json
{
  "uid": "string",
  "title": "string"
}
```

Header book, embedded in other objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Book unique ID|
|title|string|true|none|Book title|

<h2 id="tocS_BookBase">BookBase</h2>
<!-- backwards compatibility -->
<a id="schemabookbase"></a>
<a id="schema_BookBase"></a>
<a id="tocSbookbase"></a>
<a id="tocsbookbase"></a>

```json
{
  "uid": "string",
  "title": "string",
  "publishedYear": 0,
  "publishedMonth": 0,
  "publishedDay": 0,
  "numberOfPages": 0,
  "stardateFrom": 0,
  "stardateTo": 0,
  "yearFrom": 0,
  "yearTo": 0,
  "novel": true,
  "referenceBook": true,
  "biographyBook": true,
  "rolePlayingBook": true,
  "eBook": true,
  "anthology": true,
  "novelization": true,
  "audiobook": true,
  "audiobookAbridged": true,
  "audiobookPublishedYear": 0,
  "audiobookPublishedMonth": 0,
  "audiobookPublishedDay": 0,
  "audiobookRunTime": 0,
  "productionNumber": "string"
}
```

Base book, returned in search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Book unique ID|
|title|string|true|none|Book title|
|publishedYear|integer|false|none|Year the book was published|
|publishedMonth|integer|false|none|Month the book was published|
|publishedDay|integer|false|none|Day the book was published|
|numberOfPages|integer|false|none|Number of pages|
|stardateFrom|number(float)|false|none|Starting stardate of book story|
|stardateTo|number(float)|false|none|Ending stardate of book story|
|yearFrom|integer|false|none|Starting year of book story|
|yearTo|integer|false|none|Ending year of book story|
|novel|boolean|true|none|Whether it's a novel|
|referenceBook|boolean|true|none|Whether it's a reference book|
|biographyBook|boolean|true|none|Whether it's a biography book|
|rolePlayingBook|boolean|true|none|Whether it's a role playing book|
|eBook|boolean|true|none|Whether it's an eBook|
|anthology|boolean|true|none|Whether it's an anthology|
|novelization|boolean|true|none|Whether it's a novelization|
|audiobook|boolean|true|none|Whether it's an audiobook, or has been release as an audiobook in addition to other form|
|audiobookAbridged|boolean|true|none|If it's an audiobook, whether it's been abridged|
|audiobookPublishedYear|integer|false|none|Year the audiobook was published|
|audiobookPublishedMonth|integer|false|none|Month the audiobook was published|
|audiobookPublishedDay|integer|false|none|Day the audiobook was published|
|audiobookRunTime|integer|false|none|Audiobook run time, in minutes|
|productionNumber|string|false|none|Book's production number|

<h2 id="tocS_BookFull">BookFull</h2>
<!-- backwards compatibility -->
<a id="schemabookfull"></a>
<a id="schema_BookFull"></a>
<a id="tocSbookfull"></a>
<a id="tocsbookfull"></a>

```json
{
  "uid": "string",
  "title": "string",
  "publishedYear": 0,
  "publishedMonth": 0,
  "publishedDay": 0,
  "numberOfPages": 0,
  "stardateFrom": 0,
  "stardateTo": 0,
  "yearFrom": 0,
  "yearTo": 0,
  "novel": true,
  "referenceBook": true,
  "biographyBook": true,
  "rolePlayingBook": true,
  "eBook": true,
  "anthology": true,
  "novelization": true,
  "audiobook": true,
  "audiobookAbridged": true,
  "audiobookPublishedYear": 0,
  "audiobookPublishedMonth": 0,
  "audiobookPublishedDay": 0,
  "audiobookRunTime": 0,
  "productionNumber": "string",
  "bookSeries": [
    {
      "uid": "string",
      "title": "string",
      "publishedYearFrom": 0,
      "publishedMonthFrom": 0,
      "publishedYearTo": 0,
      "publishedMonthTo": 0,
      "numberOfBooks": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "miniseries": true,
      "eBookSeries": true
    }
  ],
  "authors": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "artDepartment": true,
      "artDirector": true,
      "productionDesigner": true,
      "cameraAndElectricalDepartment": true,
      "cinematographer": true,
      "castingDepartment": true,
      "costumeDepartment": true,
      "costumeDesigner": true,
      "director": true,
      "assistantOrSecondUnitDirector": true,
      "exhibitAndAttractionStaff": true,
      "filmEditor": true,
      "linguist": true,
      "locationStaff": true,
      "makeupStaff": true,
      "musicDepartment": true,
      "composer": true,
      "personalAssistant": true,
      "producer": true,
      "productionAssociate": true,
      "productionStaff": true,
      "publicationStaff": true,
      "scienceConsultant": true,
      "soundDepartment": true,
      "specialAndVisualEffectsStaff": true,
      "author": true,
      "audioAuthor": true,
      "calendarArtist": true,
      "comicArtist": true,
      "comicAuthor": true,
      "comicColorArtist": true,
      "comicInteriorArtist": true,
      "comicInkArtist": true,
      "comicPencilArtist": true,
      "comicLetterArtist": true,
      "comicStripArtist": true,
      "gameArtist": true,
      "gameAuthor": true,
      "novelArtist": true,
      "novelAuthor": true,
      "referenceArtist": true,
      "referenceAuthor": true,
      "publicationArtist": true,
      "publicationDesigner": true,
      "publicationEditor": true,
      "publicityArtist": true,
      "cbsDigitalStaff": true,
      "ilmProductionStaff": true,
      "specialFeaturesStaff": true,
      "storyEditor": true,
      "studioExecutive": true,
      "stuntDepartment": true,
      "transportationDepartment": true,
      "videoGameProductionStaff": true,
      "writer": true
    }
  ],
  "artists": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "artDepartment": true,
      "artDirector": true,
      "productionDesigner": true,
      "cameraAndElectricalDepartment": true,
      "cinematographer": true,
      "castingDepartment": true,
      "costumeDepartment": true,
      "costumeDesigner": true,
      "director": true,
      "assistantOrSecondUnitDirector": true,
      "exhibitAndAttractionStaff": true,
      "filmEditor": true,
      "linguist": true,
      "locationStaff": true,
      "makeupStaff": true,
      "musicDepartment": true,
      "composer": true,
      "personalAssistant": true,
      "producer": true,
      "productionAssociate": true,
      "productionStaff": true,
      "publicationStaff": true,
      "scienceConsultant": true,
      "soundDepartment": true,
      "specialAndVisualEffectsStaff": true,
      "author": true,
      "audioAuthor": true,
      "calendarArtist": true,
      "comicArtist": true,
      "comicAuthor": true,
      "comicColorArtist": true,
      "comicInteriorArtist": true,
      "comicInkArtist": true,
      "comicPencilArtist": true,
      "comicLetterArtist": true,
      "comicStripArtist": true,
      "gameArtist": true,
      "gameAuthor": true,
      "novelArtist": true,
      "novelAuthor": true,
      "referenceArtist": true,
      "referenceAuthor": true,
      "publicationArtist": true,
      "publicationDesigner": true,
      "publicationEditor": true,
      "publicityArtist": true,
      "cbsDigitalStaff": true,
      "ilmProductionStaff": true,
      "specialFeaturesStaff": true,
      "storyEditor": true,
      "studioExecutive": true,
      "stuntDepartment": true,
      "transportationDepartment": true,
      "videoGameProductionStaff": true,
      "writer": true
    }
  ],
  "editors": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "artDepartment": true,
      "artDirector": true,
      "productionDesigner": true,
      "cameraAndElectricalDepartment": true,
      "cinematographer": true,
      "castingDepartment": true,
      "costumeDepartment": true,
      "costumeDesigner": true,
      "director": true,
      "assistantOrSecondUnitDirector": true,
      "exhibitAndAttractionStaff": true,
      "filmEditor": true,
      "linguist": true,
      "locationStaff": true,
      "makeupStaff": true,
      "musicDepartment": true,
      "composer": true,
      "personalAssistant": true,
      "producer": true,
      "productionAssociate": true,
      "productionStaff": true,
      "publicationStaff": true,
      "scienceConsultant": true,
      "soundDepartment": true,
      "specialAndVisualEffectsStaff": true,
      "author": true,
      "audioAuthor": true,
      "calendarArtist": true,
      "comicArtist": true,
      "comicAuthor": true,
      "comicColorArtist": true,
      "comicInteriorArtist": true,
      "comicInkArtist": true,
      "comicPencilArtist": true,
      "comicLetterArtist": true,
      "comicStripArtist": true,
      "gameArtist": true,
      "gameAuthor": true,
      "novelArtist": true,
      "novelAuthor": true,
      "referenceArtist": true,
      "referenceAuthor": true,
      "publicationArtist": true,
      "publicationDesigner": true,
      "publicationEditor": true,
      "publicityArtist": true,
      "cbsDigitalStaff": true,
      "ilmProductionStaff": true,
      "specialFeaturesStaff": true,
      "storyEditor": true,
      "studioExecutive": true,
      "stuntDepartment": true,
      "transportationDepartment": true,
      "videoGameProductionStaff": true,
      "writer": true
    }
  ],
  "audiobookNarrators": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "artDepartment": true,
      "artDirector": true,
      "productionDesigner": true,
      "cameraAndElectricalDepartment": true,
      "cinematographer": true,
      "castingDepartment": true,
      "costumeDepartment": true,
      "costumeDesigner": true,
      "director": true,
      "assistantOrSecondUnitDirector": true,
      "exhibitAndAttractionStaff": true,
      "filmEditor": true,
      "linguist": true,
      "locationStaff": true,
      "makeupStaff": true,
      "musicDepartment": true,
      "composer": true,
      "personalAssistant": true,
      "producer": true,
      "productionAssociate": true,
      "productionStaff": true,
      "publicationStaff": true,
      "scienceConsultant": true,
      "soundDepartment": true,
      "specialAndVisualEffectsStaff": true,
      "author": true,
      "audioAuthor": true,
      "calendarArtist": true,
      "comicArtist": true,
      "comicAuthor": true,
      "comicColorArtist": true,
      "comicInteriorArtist": true,
      "comicInkArtist": true,
      "comicPencilArtist": true,
      "comicLetterArtist": true,
      "comicStripArtist": true,
      "gameArtist": true,
      "gameAuthor": true,
      "novelArtist": true,
      "novelAuthor": true,
      "referenceArtist": true,
      "referenceAuthor": true,
      "publicationArtist": true,
      "publicationDesigner": true,
      "publicationEditor": true,
      "publicityArtist": true,
      "cbsDigitalStaff": true,
      "ilmProductionStaff": true,
      "specialFeaturesStaff": true,
      "storyEditor": true,
      "studioExecutive": true,
      "stuntDepartment": true,
      "transportationDepartment": true,
      "videoGameProductionStaff": true,
      "writer": true
    }
  ],
  "publishers": [
    {
      "uid": "string",
      "name": "string",
      "broadcaster": true,
      "collectibleCompany": true,
      "conglomerate": true,
      "digitalVisualEffectsCompany": true,
      "distributor": true,
      "gameCompany": true,
      "filmEquipmentCompany": true,
      "makeUpEffectsStudio": true,
      "mattePaintingCompany": true,
      "modelAndMiniatureEffectsCompany": true,
      "postProductionCompany": true,
      "productionCompany": true,
      "propCompany": true,
      "recordLabel": true,
      "specialEffectsCompany": true,
      "tvAndFilmProductionCompany": true,
      "videoGameCompany": true
    }
  ],
  "audiobookPublishers": [
    {
      "uid": "string",
      "name": "string",
      "broadcaster": true,
      "collectibleCompany": true,
      "conglomerate": true,
      "digitalVisualEffectsCompany": true,
      "distributor": true,
      "gameCompany": true,
      "filmEquipmentCompany": true,
      "makeUpEffectsStudio": true,
      "mattePaintingCompany": true,
      "modelAndMiniatureEffectsCompany": true,
      "postProductionCompany": true,
      "productionCompany": true,
      "propCompany": true,
      "recordLabel": true,
      "specialEffectsCompany": true,
      "tvAndFilmProductionCompany": true,
      "videoGameCompany": true
    }
  ],
  "characters": [
    {
      "uid": "string",
      "name": "string",
      "gender": "F",
      "yearOfBirth": 0,
      "monthOfBirth": 0,
      "dayOfBirth": 0,
      "placeOfBirth": "string",
      "yearOfDeath": 0,
      "monthOfDeath": 0,
      "dayOfDeath": 0,
      "placeOfDeath": "string",
      "height": 0,
      "weight": 0,
      "deceased": true,
      "bloodType": "B_NEGATIVE",
      "maritalStatus": "SINGLE",
      "serialNumber": "string",
      "hologramActivationDate": "string",
      "hologramStatus": "string",
      "hologramDateStatus": "string",
      "hologram": true,
      "fictionalCharacter": true,
      "mirror": true,
      "alternateReality": true
    }
  ],
  "references": [
    {
      "uid": "string",
      "referenceType": "ASIN",
      "referenceNumber": "string"
    }
  ],
  "audiobookReferences": [
    {
      "uid": "string",
      "referenceType": "ASIN",
      "referenceNumber": "string"
    }
  ],
  "bookCollections": [
    {
      "uid": "string",
      "title": "string",
      "publishedYear": 0,
      "publishedMonth": 0,
      "publishedDay": 0,
      "numberOfPages": 0,
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0
    }
  ]
}
```

Full book, returned when queried using UID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Book unique ID|
|title|string|true|none|Book title|
|publishedYear|integer|false|none|Year the book was published|
|publishedMonth|integer|false|none|Month the book was published|
|publishedDay|integer|false|none|Day the book was published|
|numberOfPages|integer|false|none|Number of pages|
|stardateFrom|number(float)|false|none|Starting stardate of book story|
|stardateTo|number(float)|false|none|Ending stardate of book story|
|yearFrom|integer|false|none|Starting year of book story|
|yearTo|integer|false|none|Ending year of book story|
|novel|boolean|true|none|Whether it's a novel|
|referenceBook|boolean|true|none|Whether it's a reference book|
|biographyBook|boolean|true|none|Whether it's a biography book|
|rolePlayingBook|boolean|true|none|Whether it's a role playing book|
|eBook|boolean|true|none|Whether it's an e-book|
|anthology|boolean|true|none|Whether it's an anthology|
|novelization|boolean|true|none|Whether it's a novelization|
|audiobook|boolean|true|none|Whether it's an audiobook, or has been release as an audiobook in addition to other form|
|audiobookAbridged|boolean|true|none|If it's an audiobook, whether it's been abridged|
|audiobookPublishedYear|integer|false|none|Year the audiobook was published|
|audiobookPublishedMonth|integer|false|none|Month the audiobook was published|
|audiobookPublishedDay|integer|false|none|Day the audiobook was published|
|audiobookRunTime|integer|false|none|Audiobook run time, in minutes|
|productionNumber|string|false|none|Book production number|
|bookSeries|[[BookSeriesBase](#schemabookseriesbase)]|false|none|Book series this book is included in|
|authors|[[StaffBase](#schemastaffbase)]|false|none|Authors of the book|
|artists|[[StaffBase](#schemastaffbase)]|false|none|Artists involved in the book|
|editors|[[StaffBase](#schemastaffbase)]|false|none|Editors involved in the book|
|audiobookNarrators|[[StaffBase](#schemastaffbase)]|false|none|Audiobook narrators|
|publishers|[[CompanyBase](#schemacompanybase)]|false|none|Book publishers|
|audiobookPublishers|[[CompanyBase](#schemacompanybase)]|false|none|Audiobook publishers|
|characters|[[CharacterBase](#schemacharacterbase)]|false|none|Characters appearing the book|
|references|[[Reference](#schemareference)]|false|none|References|
|audiobookReferences|[[Reference](#schemareference)]|false|none|Audiobook references|
|bookCollections|[[BookCollectionBase](#schemabookcollectionbase)]|false|none|Book collections this book is included in|

<h2 id="tocS_BookBaseResponse">BookBaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemabookbaseresponse"></a>
<a id="schema_BookBaseResponse"></a>
<a id="tocSbookbaseresponse"></a>
<a id="tocsbookbaseresponse"></a>

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "books": [
    {
      "uid": "string",
      "title": "string",
      "publishedYear": 0,
      "publishedMonth": 0,
      "publishedDay": 0,
      "numberOfPages": 0,
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "novel": true,
      "referenceBook": true,
      "biographyBook": true,
      "rolePlayingBook": true,
      "eBook": true,
      "anthology": true,
      "novelization": true,
      "audiobook": true,
      "audiobookAbridged": true,
      "audiobookPublishedYear": 0,
      "audiobookPublishedMonth": 0,
      "audiobookPublishedDay": 0,
      "audiobookRunTime": 0,
      "productionNumber": "string"
    }
  ]
}
```

Response object for books search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|[ResponsePage](#schemaresponsepage)|false|none|Object describing response page|
|sort|[ResponseSort](#schemaresponsesort)|false|none|Response sort|
|books|[[BookBase](#schemabookbase)]|false|none|List of books matching given criteria|

<h2 id="tocS_BookFullResponse">BookFullResponse</h2>
<!-- backwards compatibility -->
<a id="schemabookfullresponse"></a>
<a id="schema_BookFullResponse"></a>
<a id="tocSbookfullresponse"></a>
<a id="tocsbookfullresponse"></a>

```json
{
  "book": {
    "uid": "string",
    "title": "string",
    "publishedYear": 0,
    "publishedMonth": 0,
    "publishedDay": 0,
    "numberOfPages": 0,
    "stardateFrom": 0,
    "stardateTo": 0,
    "yearFrom": 0,
    "yearTo": 0,
    "novel": true,
    "referenceBook": true,
    "biographyBook": true,
    "rolePlayingBook": true,
    "eBook": true,
    "anthology": true,
    "novelization": true,
    "audiobook": true,
    "audiobookAbridged": true,
    "audiobookPublishedYear": 0,
    "audiobookPublishedMonth": 0,
    "audiobookPublishedDay": 0,
    "audiobookRunTime": 0,
    "productionNumber": "string",
    "bookSeries": [
      {
        "uid": "string",
        "title": "string",
        "publishedYearFrom": 0,
        "publishedMonthFrom": 0,
        "publishedYearTo": 0,
        "publishedMonthTo": 0,
        "numberOfBooks": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "miniseries": true,
        "eBookSeries": true
      }
    ],
    "authors": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "artists": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "editors": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "audiobookNarrators": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "publishers": [
      {
        "uid": "string",
        "name": "string",
        "broadcaster": true,
        "collectibleCompany": true,
        "conglomerate": true,
        "digitalVisualEffectsCompany": true,
        "distributor": true,
        "gameCompany": true,
        "filmEquipmentCompany": true,
        "makeUpEffectsStudio": true,
        "mattePaintingCompany": true,
        "modelAndMiniatureEffectsCompany": true,
        "postProductionCompany": true,
        "productionCompany": true,
        "propCompany": true,
        "recordLabel": true,
        "specialEffectsCompany": true,
        "tvAndFilmProductionCompany": true,
        "videoGameCompany": true
      }
    ],
    "audiobookPublishers": [
      {
        "uid": "string",
        "name": "string",
        "broadcaster": true,
        "collectibleCompany": true,
        "conglomerate": true,
        "digitalVisualEffectsCompany": true,
        "distributor": true,
        "gameCompany": true,
        "filmEquipmentCompany": true,
        "makeUpEffectsStudio": true,
        "mattePaintingCompany": true,
        "modelAndMiniatureEffectsCompany": true,
        "postProductionCompany": true,
        "productionCompany": true,
        "propCompany": true,
        "recordLabel": true,
        "specialEffectsCompany": true,
        "tvAndFilmProductionCompany": true,
        "videoGameCompany": true
      }
    ],
    "characters": [
      {
        "uid": "string",
        "name": "string",
        "gender": "F",
        "yearOfBirth": 0,
        "monthOfBirth": 0,
        "dayOfBirth": 0,
        "placeOfBirth": "string",
        "yearOfDeath": 0,
        "monthOfDeath": 0,
        "dayOfDeath": 0,
        "placeOfDeath": "string",
        "height": 0,
        "weight": 0,
        "deceased": true,
        "bloodType": "B_NEGATIVE",
        "maritalStatus": "SINGLE",
        "serialNumber": "string",
        "hologramActivationDate": "string",
        "hologramStatus": "string",
        "hologramDateStatus": "string",
        "hologram": true,
        "fictionalCharacter": true,
        "mirror": true,
        "alternateReality": true
      }
    ],
    "references": [
      {
        "uid": "string",
        "referenceType": "ASIN",
        "referenceNumber": "string"
      }
    ],
    "audiobookReferences": [
      {
        "uid": "string",
        "referenceType": "ASIN",
        "referenceNumber": "string"
      }
    ],
    "bookCollections": [
      {
        "uid": "string",
        "title": "string",
        "publishedYear": 0,
        "publishedMonth": 0,
        "publishedDay": 0,
        "numberOfPages": 0,
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0
      }
    ]
  }
}
```

Response object for single book query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|book|[BookFull](#schemabookfull)|false|none|Full book, returned when queried using UID|

<h2 id="tocS_BookCollectionHeader">BookCollectionHeader</h2>
<!-- backwards compatibility -->
<a id="schemabookcollectionheader"></a>
<a id="schema_BookCollectionHeader"></a>
<a id="tocSbookcollectionheader"></a>
<a id="tocsbookcollectionheader"></a>

```json
{
  "uid": "string",
  "title": "string"
}
```

Header book collection, embedded in other objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|false|none|Book collection unique ID|
|title|string|false|none|Book collection title|

<h2 id="tocS_BookCollectionBase">BookCollectionBase</h2>
<!-- backwards compatibility -->
<a id="schemabookcollectionbase"></a>
<a id="schema_BookCollectionBase"></a>
<a id="tocSbookcollectionbase"></a>
<a id="tocsbookcollectionbase"></a>

```json
{
  "uid": "string",
  "title": "string",
  "publishedYear": 0,
  "publishedMonth": 0,
  "publishedDay": 0,
  "numberOfPages": 0,
  "stardateFrom": 0,
  "stardateTo": 0,
  "yearFrom": 0,
  "yearTo": 0
}
```

Base book collection, returned in search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|false|none|Book collection unique ID|
|title|string|false|none|Book collection title|
|publishedYear|integer|false|none|Year the book collection was published|
|publishedMonth|integer|false|none|Month the book collection was published|
|publishedDay|integer|false|none|Day the book collection was published|
|numberOfPages|integer|false|none|Number of pages|
|stardateFrom|number(float)|false|none|Starting stardate of book collection stories|
|stardateTo|number(float)|false|none|Ending stardate of book collection stories|
|yearFrom|integer|false|none|Starting year of book collection stories|
|yearTo|integer|false|none|Ending year of book collection stories|

<h2 id="tocS_BookCollectionFull">BookCollectionFull</h2>
<!-- backwards compatibility -->
<a id="schemabookcollectionfull"></a>
<a id="schema_BookCollectionFull"></a>
<a id="tocSbookcollectionfull"></a>
<a id="tocsbookcollectionfull"></a>

```json
{
  "uid": "string",
  "title": "string",
  "publishedYear": 0,
  "publishedMonth": 0,
  "publishedDay": 0,
  "numberOfPages": 0,
  "stardateFrom": 0,
  "stardateTo": 0,
  "yearFrom": 0,
  "yearTo": 0,
  "bookSeries": [
    {
      "uid": "string",
      "title": "string",
      "publishedYearFrom": 0,
      "publishedMonthFrom": 0,
      "publishedYearTo": 0,
      "publishedMonthTo": 0,
      "numberOfBooks": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "miniseries": true,
      "eBookSeries": true
    }
  ],
  "authors": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "artDepartment": true,
      "artDirector": true,
      "productionDesigner": true,
      "cameraAndElectricalDepartment": true,
      "cinematographer": true,
      "castingDepartment": true,
      "costumeDepartment": true,
      "costumeDesigner": true,
      "director": true,
      "assistantOrSecondUnitDirector": true,
      "exhibitAndAttractionStaff": true,
      "filmEditor": true,
      "linguist": true,
      "locationStaff": true,
      "makeupStaff": true,
      "musicDepartment": true,
      "composer": true,
      "personalAssistant": true,
      "producer": true,
      "productionAssociate": true,
      "productionStaff": true,
      "publicationStaff": true,
      "scienceConsultant": true,
      "soundDepartment": true,
      "specialAndVisualEffectsStaff": true,
      "author": true,
      "audioAuthor": true,
      "calendarArtist": true,
      "comicArtist": true,
      "comicAuthor": true,
      "comicColorArtist": true,
      "comicInteriorArtist": true,
      "comicInkArtist": true,
      "comicPencilArtist": true,
      "comicLetterArtist": true,
      "comicStripArtist": true,
      "gameArtist": true,
      "gameAuthor": true,
      "novelArtist": true,
      "novelAuthor": true,
      "referenceArtist": true,
      "referenceAuthor": true,
      "publicationArtist": true,
      "publicationDesigner": true,
      "publicationEditor": true,
      "publicityArtist": true,
      "cbsDigitalStaff": true,
      "ilmProductionStaff": true,
      "specialFeaturesStaff": true,
      "storyEditor": true,
      "studioExecutive": true,
      "stuntDepartment": true,
      "transportationDepartment": true,
      "videoGameProductionStaff": true,
      "writer": true
    }
  ],
  "artists": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "artDepartment": true,
      "artDirector": true,
      "productionDesigner": true,
      "cameraAndElectricalDepartment": true,
      "cinematographer": true,
      "castingDepartment": true,
      "costumeDepartment": true,
      "costumeDesigner": true,
      "director": true,
      "assistantOrSecondUnitDirector": true,
      "exhibitAndAttractionStaff": true,
      "filmEditor": true,
      "linguist": true,
      "locationStaff": true,
      "makeupStaff": true,
      "musicDepartment": true,
      "composer": true,
      "personalAssistant": true,
      "producer": true,
      "productionAssociate": true,
      "productionStaff": true,
      "publicationStaff": true,
      "scienceConsultant": true,
      "soundDepartment": true,
      "specialAndVisualEffectsStaff": true,
      "author": true,
      "audioAuthor": true,
      "calendarArtist": true,
      "comicArtist": true,
      "comicAuthor": true,
      "comicColorArtist": true,
      "comicInteriorArtist": true,
      "comicInkArtist": true,
      "comicPencilArtist": true,
      "comicLetterArtist": true,
      "comicStripArtist": true,
      "gameArtist": true,
      "gameAuthor": true,
      "novelArtist": true,
      "novelAuthor": true,
      "referenceArtist": true,
      "referenceAuthor": true,
      "publicationArtist": true,
      "publicationDesigner": true,
      "publicationEditor": true,
      "publicityArtist": true,
      "cbsDigitalStaff": true,
      "ilmProductionStaff": true,
      "specialFeaturesStaff": true,
      "storyEditor": true,
      "studioExecutive": true,
      "stuntDepartment": true,
      "transportationDepartment": true,
      "videoGameProductionStaff": true,
      "writer": true
    }
  ],
  "editors": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "artDepartment": true,
      "artDirector": true,
      "productionDesigner": true,
      "cameraAndElectricalDepartment": true,
      "cinematographer": true,
      "castingDepartment": true,
      "costumeDepartment": true,
      "costumeDesigner": true,
      "director": true,
      "assistantOrSecondUnitDirector": true,
      "exhibitAndAttractionStaff": true,
      "filmEditor": true,
      "linguist": true,
      "locationStaff": true,
      "makeupStaff": true,
      "musicDepartment": true,
      "composer": true,
      "personalAssistant": true,
      "producer": true,
      "productionAssociate": true,
      "productionStaff": true,
      "publicationStaff": true,
      "scienceConsultant": true,
      "soundDepartment": true,
      "specialAndVisualEffectsStaff": true,
      "author": true,
      "audioAuthor": true,
      "calendarArtist": true,
      "comicArtist": true,
      "comicAuthor": true,
      "comicColorArtist": true,
      "comicInteriorArtist": true,
      "comicInkArtist": true,
      "comicPencilArtist": true,
      "comicLetterArtist": true,
      "comicStripArtist": true,
      "gameArtist": true,
      "gameAuthor": true,
      "novelArtist": true,
      "novelAuthor": true,
      "referenceArtist": true,
      "referenceAuthor": true,
      "publicationArtist": true,
      "publicationDesigner": true,
      "publicationEditor": true,
      "publicityArtist": true,
      "cbsDigitalStaff": true,
      "ilmProductionStaff": true,
      "specialFeaturesStaff": true,
      "storyEditor": true,
      "studioExecutive": true,
      "stuntDepartment": true,
      "transportationDepartment": true,
      "videoGameProductionStaff": true,
      "writer": true
    }
  ],
  "publishers": [
    {
      "uid": "string",
      "name": "string",
      "broadcaster": true,
      "collectibleCompany": true,
      "conglomerate": true,
      "digitalVisualEffectsCompany": true,
      "distributor": true,
      "gameCompany": true,
      "filmEquipmentCompany": true,
      "makeUpEffectsStudio": true,
      "mattePaintingCompany": true,
      "modelAndMiniatureEffectsCompany": true,
      "postProductionCompany": true,
      "productionCompany": true,
      "propCompany": true,
      "recordLabel": true,
      "specialEffectsCompany": true,
      "tvAndFilmProductionCompany": true,
      "videoGameCompany": true
    }
  ],
  "characters": [
    {
      "uid": "string",
      "name": "string",
      "gender": "F",
      "yearOfBirth": 0,
      "monthOfBirth": 0,
      "dayOfBirth": 0,
      "placeOfBirth": "string",
      "yearOfDeath": 0,
      "monthOfDeath": 0,
      "dayOfDeath": 0,
      "placeOfDeath": "string",
      "height": 0,
      "weight": 0,
      "deceased": true,
      "bloodType": "B_NEGATIVE",
      "maritalStatus": "SINGLE",
      "serialNumber": "string",
      "hologramActivationDate": "string",
      "hologramStatus": "string",
      "hologramDateStatus": "string",
      "hologram": true,
      "fictionalCharacter": true,
      "mirror": true,
      "alternateReality": true
    }
  ],
  "references": [
    {
      "uid": "string",
      "referenceType": "ASIN",
      "referenceNumber": "string"
    }
  ],
  "books": [
    {
      "uid": "string",
      "title": "string",
      "publishedYear": 0,
      "publishedMonth": 0,
      "publishedDay": 0,
      "numberOfPages": 0,
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "novel": true,
      "referenceBook": true,
      "biographyBook": true,
      "rolePlayingBook": true,
      "eBook": true,
      "anthology": true,
      "novelization": true,
      "audiobook": true,
      "audiobookAbridged": true,
      "audiobookPublishedYear": 0,
      "audiobookPublishedMonth": 0,
      "audiobookPublishedDay": 0,
      "audiobookRunTime": 0,
      "productionNumber": "string"
    }
  ]
}
```

Full book collection, returned when queried using UID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|false|none|Book collection unique ID|
|title|string|false|none|Book collection title|
|publishedYear|integer|false|none|Year the book collection was published|
|publishedMonth|integer|false|none|Month the book collection was published|
|publishedDay|integer|false|none|Day the book collection was published|
|numberOfPages|integer|false|none|Number of pages|
|stardateFrom|number(float)|false|none|Starting stardate of book collection stories|
|stardateTo|number(float)|false|none|Ending stardate of book collection stories|
|yearFrom|integer|false|none|Starting year of book collection stories|
|yearTo|integer|false|none|Ending year of book collection stories|
|bookSeries|[[BookSeriesBase](#schemabookseriesbase)]|false|none|Book series this book collection is included in|
|authors|[[StaffBase](#schemastaffbase)]|false|none|Authors of the book collection|
|artists|[[StaffBase](#schemastaffbase)]|false|none|Artists involved in the book collection|
|editors|[[StaffBase](#schemastaffbase)]|false|none|Editors involved in the book collection|
|publishers|[[CompanyBase](#schemacompanybase)]|false|none|Book collection publishers|
|characters|[[CharacterBase](#schemacharacterbase)]|false|none|Characters appearing in the book collection|
|references|[[Reference](#schemareference)]|false|none|References|
|books|[[BookBase](#schemabookbase)]|false|none|Books included in this book collection|

<h2 id="tocS_BookCollectionBaseResponse">BookCollectionBaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemabookcollectionbaseresponse"></a>
<a id="schema_BookCollectionBaseResponse"></a>
<a id="tocSbookcollectionbaseresponse"></a>
<a id="tocsbookcollectionbaseresponse"></a>

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "bookCollections": [
    {
      "uid": "string",
      "title": "string",
      "publishedYear": 0,
      "publishedMonth": 0,
      "publishedDay": 0,
      "numberOfPages": 0,
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0
    }
  ]
}
```

Response object for book collections search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|[ResponsePage](#schemaresponsepage)|false|none|Object describing response page|
|sort|[ResponseSort](#schemaresponsesort)|false|none|Response sort|
|bookCollections|[[BookCollectionBase](#schemabookcollectionbase)]|false|none|List of book collections matching given criteria|

<h2 id="tocS_BookCollectionFullResponse">BookCollectionFullResponse</h2>
<!-- backwards compatibility -->
<a id="schemabookcollectionfullresponse"></a>
<a id="schema_BookCollectionFullResponse"></a>
<a id="tocSbookcollectionfullresponse"></a>
<a id="tocsbookcollectionfullresponse"></a>

```json
{
  "bookCollection": {
    "uid": "string",
    "title": "string",
    "publishedYear": 0,
    "publishedMonth": 0,
    "publishedDay": 0,
    "numberOfPages": 0,
    "stardateFrom": 0,
    "stardateTo": 0,
    "yearFrom": 0,
    "yearTo": 0,
    "bookSeries": [
      {
        "uid": "string",
        "title": "string",
        "publishedYearFrom": 0,
        "publishedMonthFrom": 0,
        "publishedYearTo": 0,
        "publishedMonthTo": 0,
        "numberOfBooks": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "miniseries": true,
        "eBookSeries": true
      }
    ],
    "authors": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "artists": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "editors": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "publishers": [
      {
        "uid": "string",
        "name": "string",
        "broadcaster": true,
        "collectibleCompany": true,
        "conglomerate": true,
        "digitalVisualEffectsCompany": true,
        "distributor": true,
        "gameCompany": true,
        "filmEquipmentCompany": true,
        "makeUpEffectsStudio": true,
        "mattePaintingCompany": true,
        "modelAndMiniatureEffectsCompany": true,
        "postProductionCompany": true,
        "productionCompany": true,
        "propCompany": true,
        "recordLabel": true,
        "specialEffectsCompany": true,
        "tvAndFilmProductionCompany": true,
        "videoGameCompany": true
      }
    ],
    "characters": [
      {
        "uid": "string",
        "name": "string",
        "gender": "F",
        "yearOfBirth": 0,
        "monthOfBirth": 0,
        "dayOfBirth": 0,
        "placeOfBirth": "string",
        "yearOfDeath": 0,
        "monthOfDeath": 0,
        "dayOfDeath": 0,
        "placeOfDeath": "string",
        "height": 0,
        "weight": 0,
        "deceased": true,
        "bloodType": "B_NEGATIVE",
        "maritalStatus": "SINGLE",
        "serialNumber": "string",
        "hologramActivationDate": "string",
        "hologramStatus": "string",
        "hologramDateStatus": "string",
        "hologram": true,
        "fictionalCharacter": true,
        "mirror": true,
        "alternateReality": true
      }
    ],
    "references": [
      {
        "uid": "string",
        "referenceType": "ASIN",
        "referenceNumber": "string"
      }
    ],
    "books": [
      {
        "uid": "string",
        "title": "string",
        "publishedYear": 0,
        "publishedMonth": 0,
        "publishedDay": 0,
        "numberOfPages": 0,
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "novel": true,
        "referenceBook": true,
        "biographyBook": true,
        "rolePlayingBook": true,
        "eBook": true,
        "anthology": true,
        "novelization": true,
        "audiobook": true,
        "audiobookAbridged": true,
        "audiobookPublishedYear": 0,
        "audiobookPublishedMonth": 0,
        "audiobookPublishedDay": 0,
        "audiobookRunTime": 0,
        "productionNumber": "string"
      }
    ]
  }
}
```

Response object for single book collection query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bookCollection|[BookCollectionFull](#schemabookcollectionfull)|false|none|Full book collection, returned when queried using UID|

<h2 id="tocS_BookSeriesHeader">BookSeriesHeader</h2>
<!-- backwards compatibility -->
<a id="schemabookseriesheader"></a>
<a id="schema_BookSeriesHeader"></a>
<a id="tocSbookseriesheader"></a>
<a id="tocsbookseriesheader"></a>

```json
{
  "uid": "string",
  "title": "string"
}
```

Header book series, embedded in other objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|false|none|Book series unique ID|
|title|string|false|none|Book series title|

<h2 id="tocS_BookSeriesBase">BookSeriesBase</h2>
<!-- backwards compatibility -->
<a id="schemabookseriesbase"></a>
<a id="schema_BookSeriesBase"></a>
<a id="tocSbookseriesbase"></a>
<a id="tocsbookseriesbase"></a>

```json
{
  "uid": "string",
  "title": "string",
  "publishedYearFrom": 0,
  "publishedMonthFrom": 0,
  "publishedYearTo": 0,
  "publishedMonthTo": 0,
  "numberOfBooks": 0,
  "yearFrom": 0,
  "yearTo": 0,
  "miniseries": true,
  "eBookSeries": true
}
```

Base book series, returned in search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Book series unique ID|
|title|string|true|none|Book series title|
|publishedYearFrom|integer|false|none|Year from which the book series was published|
|publishedMonthFrom|integer|false|none|Month from which the book series was published|
|publishedYearTo|integer|false|none|Year to which the book series was published|
|publishedMonthTo|integer|false|none|Month to which the book series was published|
|numberOfBooks|integer|false|none|Number of pages|
|yearFrom|integer|false|none|Starting year of book series stories|
|yearTo|integer|false|none|Ending year of book series stories|
|miniseries|boolean|false|none|Whether it's a miniseries|
|eBookSeries|boolean|false|none|Whether it's a e-book series|

<h2 id="tocS_BookSeriesFull">BookSeriesFull</h2>
<!-- backwards compatibility -->
<a id="schemabookseriesfull"></a>
<a id="schema_BookSeriesFull"></a>
<a id="tocSbookseriesfull"></a>
<a id="tocsbookseriesfull"></a>

```json
{
  "uid": "string",
  "title": "string",
  "publishedYearFrom": 0,
  "publishedMonthFrom": 0,
  "publishedYearTo": 0,
  "publishedMonthTo": 0,
  "numberOfBooks": 0,
  "yearFrom": 0,
  "yearTo": 0,
  "miniseries": true,
  "eBookSeries": true,
  "parentSeries": [
    {
      "uid": "string",
      "title": "string",
      "publishedYearFrom": 0,
      "publishedMonthFrom": 0,
      "publishedYearTo": 0,
      "publishedMonthTo": 0,
      "numberOfBooks": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "miniseries": true,
      "eBookSeries": true
    }
  ],
  "childSeries": [
    {
      "uid": "string",
      "title": "string",
      "publishedYearFrom": 0,
      "publishedMonthFrom": 0,
      "publishedYearTo": 0,
      "publishedMonthTo": 0,
      "numberOfBooks": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "miniseries": true,
      "eBookSeries": true
    }
  ],
  "publishers": [
    {
      "uid": "string",
      "name": "string",
      "broadcaster": true,
      "collectibleCompany": true,
      "conglomerate": true,
      "digitalVisualEffectsCompany": true,
      "distributor": true,
      "gameCompany": true,
      "filmEquipmentCompany": true,
      "makeUpEffectsStudio": true,
      "mattePaintingCompany": true,
      "modelAndMiniatureEffectsCompany": true,
      "postProductionCompany": true,
      "productionCompany": true,
      "propCompany": true,
      "recordLabel": true,
      "specialEffectsCompany": true,
      "tvAndFilmProductionCompany": true,
      "videoGameCompany": true
    }
  ],
  "books": [
    {
      "uid": "string",
      "title": "string",
      "publishedYear": 0,
      "publishedMonth": 0,
      "publishedDay": 0,
      "numberOfPages": 0,
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "novel": true,
      "referenceBook": true,
      "biographyBook": true,
      "rolePlayingBook": true,
      "eBook": true,
      "anthology": true,
      "novelization": true,
      "audiobook": true,
      "audiobookAbridged": true,
      "audiobookPublishedYear": 0,
      "audiobookPublishedMonth": 0,
      "audiobookPublishedDay": 0,
      "audiobookRunTime": 0,
      "productionNumber": "string"
    }
  ]
}
```

Full book series, returned when queried using UID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Book series unique ID|
|title|string|true|none|Book series title|
|publishedYearFrom|integer|false|none|Year from which the book series was published|
|publishedMonthFrom|integer|false|none|Month from which the book series was published|
|publishedYearTo|integer|false|none|Year to which the book series was published|
|publishedMonthTo|integer|false|none|Month to which the book series was published|
|numberOfBooks|integer|false|none|Number of books in book series|
|yearFrom|integer|false|none|Starting year of book series stories|
|yearTo|integer|false|none|Ending year of book series stories|
|miniseries|boolean|false|none|Whether it's a miniseries|
|eBookSeries|boolean|false|none|Whether it's a e-book series|
|parentSeries|[[BookSeriesBase](#schemabookseriesbase)]|false|none|Book series this book series is included in|
|childSeries|[[BookSeriesBase](#schemabookseriesbase)]|false|none|Child book series included in this book series|
|publishers|[[CompanyBase](#schemacompanybase)]|false|none|Companies that published this book series|
|books|[[BookBase](#schemabookbase)]|false|none|Books included in this book series|

<h2 id="tocS_BookSeriesBaseResponse">BookSeriesBaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemabookseriesbaseresponse"></a>
<a id="schema_BookSeriesBaseResponse"></a>
<a id="tocSbookseriesbaseresponse"></a>
<a id="tocsbookseriesbaseresponse"></a>

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "bookSeries": [
    {
      "uid": "string",
      "title": "string",
      "publishedYearFrom": 0,
      "publishedMonthFrom": 0,
      "publishedYearTo": 0,
      "publishedMonthTo": 0,
      "numberOfBooks": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "miniseries": true,
      "eBookSeries": true
    }
  ]
}
```

Response object for book series search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|[ResponsePage](#schemaresponsepage)|false|none|Object describing response page|
|sort|[ResponseSort](#schemaresponsesort)|false|none|Response sort|
|bookSeries|[[BookSeriesBase](#schemabookseriesbase)]|false|none|List of book series matching given criteria|

<h2 id="tocS_BookSeriesFullResponse">BookSeriesFullResponse</h2>
<!-- backwards compatibility -->
<a id="schemabookseriesfullresponse"></a>
<a id="schema_BookSeriesFullResponse"></a>
<a id="tocSbookseriesfullresponse"></a>
<a id="tocsbookseriesfullresponse"></a>

```json
{
  "bookSeries": {
    "uid": "string",
    "title": "string",
    "publishedYearFrom": 0,
    "publishedMonthFrom": 0,
    "publishedYearTo": 0,
    "publishedMonthTo": 0,
    "numberOfBooks": 0,
    "yearFrom": 0,
    "yearTo": 0,
    "miniseries": true,
    "eBookSeries": true,
    "parentSeries": [
      {
        "uid": "string",
        "title": "string",
        "publishedYearFrom": 0,
        "publishedMonthFrom": 0,
        "publishedYearTo": 0,
        "publishedMonthTo": 0,
        "numberOfBooks": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "miniseries": true,
        "eBookSeries": true
      }
    ],
    "childSeries": [
      {
        "uid": "string",
        "title": "string",
        "publishedYearFrom": 0,
        "publishedMonthFrom": 0,
        "publishedYearTo": 0,
        "publishedMonthTo": 0,
        "numberOfBooks": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "miniseries": true,
        "eBookSeries": true
      }
    ],
    "publishers": [
      {
        "uid": "string",
        "name": "string",
        "broadcaster": true,
        "collectibleCompany": true,
        "conglomerate": true,
        "digitalVisualEffectsCompany": true,
        "distributor": true,
        "gameCompany": true,
        "filmEquipmentCompany": true,
        "makeUpEffectsStudio": true,
        "mattePaintingCompany": true,
        "modelAndMiniatureEffectsCompany": true,
        "postProductionCompany": true,
        "productionCompany": true,
        "propCompany": true,
        "recordLabel": true,
        "specialEffectsCompany": true,
        "tvAndFilmProductionCompany": true,
        "videoGameCompany": true
      }
    ],
    "books": [
      {
        "uid": "string",
        "title": "string",
        "publishedYear": 0,
        "publishedMonth": 0,
        "publishedDay": 0,
        "numberOfPages": 0,
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "novel": true,
        "referenceBook": true,
        "biographyBook": true,
        "rolePlayingBook": true,
        "eBook": true,
        "anthology": true,
        "novelization": true,
        "audiobook": true,
        "audiobookAbridged": true,
        "audiobookPublishedYear": 0,
        "audiobookPublishedMonth": 0,
        "audiobookPublishedDay": 0,
        "audiobookRunTime": 0,
        "productionNumber": "string"
      }
    ]
  }
}
```

Response object for single book series query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bookSeries|[BookSeriesFull](#schemabookseriesfull)|false|none|Full book series, returned when queried using UID|

<h2 id="tocS_CharacterHeader">CharacterHeader</h2>
<!-- backwards compatibility -->
<a id="schemacharacterheader"></a>
<a id="schema_CharacterHeader"></a>
<a id="tocScharacterheader"></a>
<a id="tocscharacterheader"></a>

```json
{
  "uid": "string",
  "name": "string"
}
```

Header character, embedded in other objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Character unique ID|
|name|string|true|none|Character name|

<h2 id="tocS_CharacterBase">CharacterBase</h2>
<!-- backwards compatibility -->
<a id="schemacharacterbase"></a>
<a id="schema_CharacterBase"></a>
<a id="tocScharacterbase"></a>
<a id="tocscharacterbase"></a>

```json
{
  "uid": "string",
  "name": "string",
  "gender": "F",
  "yearOfBirth": 0,
  "monthOfBirth": 0,
  "dayOfBirth": 0,
  "placeOfBirth": "string",
  "yearOfDeath": 0,
  "monthOfDeath": 0,
  "dayOfDeath": 0,
  "placeOfDeath": "string",
  "height": 0,
  "weight": 0,
  "deceased": true,
  "bloodType": "B_NEGATIVE",
  "maritalStatus": "SINGLE",
  "serialNumber": "string",
  "hologramActivationDate": "string",
  "hologramStatus": "string",
  "hologramDateStatus": "string",
  "hologram": true,
  "fictionalCharacter": true,
  "mirror": true,
  "alternateReality": true
}
```

Base character, returned in search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Character unique ID|
|name|string|true|none|Character name|
|gender|[Gender](#schemagender)|false|none|Gender|
|yearOfBirth|integer|false|none|Year the character was born|
|monthOfBirth|integer|false|none|Month the character was born|
|dayOfBirth|integer|false|none|Day the character was born|
|placeOfBirth|string|false|none|Place of birth|
|yearOfDeath|integer|false|none|Year the character died|
|monthOfDeath|integer|false|none|Month the character died|
|dayOfDeath|integer|false|none|Day the character died|
|placeOfDeath|string|false|none|Place of death|
|height|integer|false|none|Height in centimeters|
|weight|integer|false|none|Weight in kilograms|
|deceased|boolean|false|none|Whether this character is deceased|
|bloodType|[BloodType](#schemabloodtype)|false|none|Blood type|
|maritalStatus|[MaritalStatus](#schemamaritalstatus)|false|none|Marital status|
|serialNumber|string|false|none|Serial number|
|hologramActivationDate|string|false|none|Hologram activation date|
|hologramStatus|string|false|none|Hologram status|
|hologramDateStatus|string|false|none|Hologram date status|
|hologram|boolean|false|none|Whether this character is a hologram|
|fictionalCharacter|boolean|false|none|Whether this character is a fictional character (from universe point of view)|
|mirror|boolean|false|none|Whether this character is from mirror universe|
|alternateReality|boolean|false|none|Whether this character is from alternate reality|

#### Enumerated Values

|Property|Value|
|---|---|
|gender|F|
|gender|M|
|bloodType|B_NEGATIVE|
|bloodType|O_NEGATIVE|
|bloodType|T_NEGATIVE|
|maritalStatus|SINGLE|
|maritalStatus|ENGAGED|
|maritalStatus|MARRIED|
|maritalStatus|DIVORCED|
|maritalStatus|REMARRIED|
|maritalStatus|SEPARATED|
|maritalStatus|WIDOWED|
|maritalStatus|CAPTAINS_WOMAN|

<h2 id="tocS_CharacterFull">CharacterFull</h2>
<!-- backwards compatibility -->
<a id="schemacharacterfull"></a>
<a id="schema_CharacterFull"></a>
<a id="tocScharacterfull"></a>
<a id="tocscharacterfull"></a>

```json
{
  "uid": "string",
  "name": "string",
  "gender": "F",
  "yearOfBirth": 0,
  "monthOfBirth": 0,
  "dayOfBirth": 0,
  "placeOfBirth": "string",
  "yearOfDeath": 0,
  "monthOfDeath": 0,
  "dayOfDeath": 0,
  "placeOfDeath": "string",
  "height": 0,
  "weight": 0,
  "deceased": true,
  "bloodType": "B_NEGATIVE",
  "maritalStatus": "SINGLE",
  "serialNumber": "string",
  "hologramActivationDate": "string",
  "hologramStatus": "string",
  "hologramDateStatus": "string",
  "hologram": true,
  "fictionalCharacter": true,
  "mirror": true,
  "alternateReality": true,
  "performers": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "animalPerformer": true,
      "disPerformer": true,
      "ds9Performer": true,
      "entPerformer": true,
      "filmPerformer": true,
      "standInPerformer": true,
      "stuntPerformer": true,
      "tasPerformer": true,
      "tngPerformer": true,
      "tosPerformer": true,
      "videoGamePerformer": true,
      "voicePerformer": true,
      "voyPerformer": true
    }
  ],
  "episodes": [
    {
      "uid": "string",
      "title": "string",
      "titleGerman": "string",
      "titleItalian": "string",
      "titleJapanese": "string",
      "series": {
        "uid": "string",
        "title": "string"
      },
      "season": {
        "uid": "string",
        "title": "string"
      },
      "seasonNumber": 0,
      "episodeNumber": 0,
      "productionSerialNumber": "string",
      "featureLength": true,
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "usAirDate": "1970-01-01",
      "finalScriptDate": "1970-01-01"
    }
  ],
  "movies": [
    {
      "uid": "string",
      "title": "string",
      "mainDirector": {
        "uid": "string",
        "name": "string"
      },
      "titleBulgarian": "string",
      "titleCatalan": "string",
      "titleChineseTraditional": "string",
      "titleGerman": "string",
      "titleItalian": "string",
      "titleJapanese": "string",
      "titlePolish": "string",
      "titleRussian": "string",
      "titleSerbian": "string",
      "titleSpanish": "string",
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "usReleaseDate": "1970-01-01"
    }
  ],
  "characterSpecies": [
    {
      "uid": "string",
      "name": "string",
      "numerator": 0,
      "denominator": 0
    }
  ],
  "characterRelations": [
    {
      "type": "string",
      "source": {
        "uid": "string",
        "name": "string"
      },
      "target": {
        "uid": "string",
        "name": "string"
      }
    }
  ],
  "titles": [
    {
      "uid": "string",
      "name": "string",
      "militaryRank": true,
      "fleetRank": true,
      "religiousTitle": true,
      "position": true,
      "mirror": true
    }
  ],
  "occupations": [
    {
      "uid": "string",
      "name": "string",
      "legalOccupation": true,
      "medicalOccupation": true,
      "scientificOccupation": true
    }
  ],
  "organizations": [
    {
      "uid": "string",
      "name": "string",
      "government": true,
      "intergovernmentalOrganization": true,
      "researchOrganization": true,
      "sportOrganization": true,
      "medicalOrganization": true,
      "militaryOrganization": true,
      "militaryUnit": true,
      "governmentAgency": true,
      "lawEnforcementAgency": true,
      "prisonOrPenalColony": true,
      "mirror": true,
      "alternateReality": true
    }
  ]
}
```

Full character, returned when queried using UID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Character unique ID|
|name|string|true|none|Character name|
|gender|[Gender](#schemagender)|false|none|Gender|
|yearOfBirth|integer|false|none|Year the character was born|
|monthOfBirth|integer|false|none|Month the character was born|
|dayOfBirth|integer|false|none|Day the character was born|
|placeOfBirth|string|false|none|Place of birth|
|yearOfDeath|integer|false|none|Year the character died|
|monthOfDeath|integer|false|none|Month the character died|
|dayOfDeath|integer|false|none|Day the character died|
|placeOfDeath|string|false|none|Place of death|
|height|integer|false|none|Height in centimeters|
|weight|integer|false|none|Weight in kilograms|
|deceased|boolean|false|none|Whether this character is deceased|
|bloodType|[BloodType](#schemabloodtype)|false|none|Blood type|
|maritalStatus|[MaritalStatus](#schemamaritalstatus)|false|none|Marital status|
|serialNumber|string|false|none|Serial number|
|hologramActivationDate|string|false|none|Hologram activation date|
|hologramStatus|string|false|none|Hologram status|
|hologramDateStatus|string|false|none|Hologram date status|
|hologram|boolean|false|none|Whether this character is a hologram|
|fictionalCharacter|boolean|false|none|Whether this character is a fictional character (from universe point of view)|
|mirror|boolean|false|none|Whether this character is from mirror universe|
|alternateReality|boolean|false|none|Whether this character is from alternate reality|
|performers|[[PerformerBase](#schemaperformerbase)]|false|none|Performers who played this character|
|episodes|[[EpisodeBase](#schemaepisodebase)]|false|none|Episodes in which this character appeared|
|movies|[[MovieBase](#schemamoviebase)]|false|none|Movies in which this character appeared|
|characterSpecies|[[CharacterSpecies](#schemacharacterspecies)]|false|none|Species this character belongs to|
|characterRelations|[[CharacterRelation](#schemacharacterrelation)]|false|none|Relations with other characters|
|titles|[[TitleBase](#schematitlebase)]|false|none|Titles this character holds|
|occupations|[[OccupationBase](#schemaoccupationbase)]|false|none|Occupations of this character|
|organizations|[[OrganizationBase](#schemaorganizationbase)]|false|none|Organizations this character has affiliation with|

#### Enumerated Values

|Property|Value|
|---|---|
|gender|F|
|gender|M|
|bloodType|B_NEGATIVE|
|bloodType|O_NEGATIVE|
|bloodType|T_NEGATIVE|
|maritalStatus|SINGLE|
|maritalStatus|ENGAGED|
|maritalStatus|MARRIED|
|maritalStatus|DIVORCED|
|maritalStatus|REMARRIED|
|maritalStatus|SEPARATED|
|maritalStatus|WIDOWED|
|maritalStatus|CAPTAINS_WOMAN|

<h2 id="tocS_CharacterBaseResponse">CharacterBaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemacharacterbaseresponse"></a>
<a id="schema_CharacterBaseResponse"></a>
<a id="tocScharacterbaseresponse"></a>
<a id="tocscharacterbaseresponse"></a>

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "characters": [
    {
      "uid": "string",
      "name": "string",
      "gender": "F",
      "yearOfBirth": 0,
      "monthOfBirth": 0,
      "dayOfBirth": 0,
      "placeOfBirth": "string",
      "yearOfDeath": 0,
      "monthOfDeath": 0,
      "dayOfDeath": 0,
      "placeOfDeath": "string",
      "height": 0,
      "weight": 0,
      "deceased": true,
      "bloodType": "B_NEGATIVE",
      "maritalStatus": "SINGLE",
      "serialNumber": "string",
      "hologramActivationDate": "string",
      "hologramStatus": "string",
      "hologramDateStatus": "string",
      "hologram": true,
      "fictionalCharacter": true,
      "mirror": true,
      "alternateReality": true
    }
  ]
}
```

Response object for characters search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|[ResponsePage](#schemaresponsepage)|false|none|Object describing response page|
|sort|[ResponseSort](#schemaresponsesort)|false|none|Response sort|
|characters|[[CharacterBase](#schemacharacterbase)]|false|none|List of characters matching given criteria|

<h2 id="tocS_CharacterFullResponse">CharacterFullResponse</h2>
<!-- backwards compatibility -->
<a id="schemacharacterfullresponse"></a>
<a id="schema_CharacterFullResponse"></a>
<a id="tocScharacterfullresponse"></a>
<a id="tocscharacterfullresponse"></a>

```json
{
  "character": {
    "uid": "string",
    "name": "string",
    "gender": "F",
    "yearOfBirth": 0,
    "monthOfBirth": 0,
    "dayOfBirth": 0,
    "placeOfBirth": "string",
    "yearOfDeath": 0,
    "monthOfDeath": 0,
    "dayOfDeath": 0,
    "placeOfDeath": "string",
    "height": 0,
    "weight": 0,
    "deceased": true,
    "bloodType": "B_NEGATIVE",
    "maritalStatus": "SINGLE",
    "serialNumber": "string",
    "hologramActivationDate": "string",
    "hologramStatus": "string",
    "hologramDateStatus": "string",
    "hologram": true,
    "fictionalCharacter": true,
    "mirror": true,
    "alternateReality": true,
    "performers": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "animalPerformer": true,
        "disPerformer": true,
        "ds9Performer": true,
        "entPerformer": true,
        "filmPerformer": true,
        "standInPerformer": true,
        "stuntPerformer": true,
        "tasPerformer": true,
        "tngPerformer": true,
        "tosPerformer": true,
        "videoGamePerformer": true,
        "voicePerformer": true,
        "voyPerformer": true
      }
    ],
    "episodes": [
      {
        "uid": "string",
        "title": "string",
        "titleGerman": "string",
        "titleItalian": "string",
        "titleJapanese": "string",
        "series": {
          "uid": "string",
          "title": "string"
        },
        "season": {
          "uid": "string",
          "title": "string"
        },
        "seasonNumber": 0,
        "episodeNumber": 0,
        "productionSerialNumber": "string",
        "featureLength": true,
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "usAirDate": "1970-01-01",
        "finalScriptDate": "1970-01-01"
      }
    ],
    "movies": [
      {
        "uid": "string",
        "title": "string",
        "mainDirector": {
          "uid": "string",
          "name": "string"
        },
        "titleBulgarian": "string",
        "titleCatalan": "string",
        "titleChineseTraditional": "string",
        "titleGerman": "string",
        "titleItalian": "string",
        "titleJapanese": "string",
        "titlePolish": "string",
        "titleRussian": "string",
        "titleSerbian": "string",
        "titleSpanish": "string",
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "usReleaseDate": "1970-01-01"
      }
    ],
    "characterSpecies": [
      {
        "uid": "string",
        "name": "string",
        "numerator": 0,
        "denominator": 0
      }
    ],
    "characterRelations": [
      {
        "type": "string",
        "source": {
          "uid": "string",
          "name": "string"
        },
        "target": {
          "uid": "string",
          "name": "string"
        }
      }
    ],
    "titles": [
      {
        "uid": "string",
        "name": "string",
        "militaryRank": true,
        "fleetRank": true,
        "religiousTitle": true,
        "position": true,
        "mirror": true
      }
    ],
    "occupations": [
      {
        "uid": "string",
        "name": "string",
        "legalOccupation": true,
        "medicalOccupation": true,
        "scientificOccupation": true
      }
    ],
    "organizations": [
      {
        "uid": "string",
        "name": "string",
        "government": true,
        "intergovernmentalOrganization": true,
        "researchOrganization": true,
        "sportOrganization": true,
        "medicalOrganization": true,
        "militaryOrganization": true,
        "militaryUnit": true,
        "governmentAgency": true,
        "lawEnforcementAgency": true,
        "prisonOrPenalColony": true,
        "mirror": true,
        "alternateReality": true
      }
    ]
  }
}
```

Response object for single character query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|character|[CharacterFull](#schemacharacterfull)|false|none|Full character, returned when queried using UID|

<h2 id="tocS_CharacterRelation">CharacterRelation</h2>
<!-- backwards compatibility -->
<a id="schemacharacterrelation"></a>
<a id="schema_CharacterRelation"></a>
<a id="tocScharacterrelation"></a>
<a id="tocscharacterrelation"></a>

```json
{
  "type": "string",
  "source": {
    "uid": "string",
    "name": "string"
  },
  "target": {
    "uid": "string",
    "name": "string"
  }
}
```

Relation between characters

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Relation type|
|source|[CharacterHeader](#schemacharacterheader)|false|none|Header character, embedded in other objects|
|target|[CharacterHeader](#schemacharacterheader)|false|none|Header character, embedded in other objects|

<h2 id="tocS_CharacterSpecies">CharacterSpecies</h2>
<!-- backwards compatibility -->
<a id="schemacharacterspecies"></a>
<a id="schema_CharacterSpecies"></a>
<a id="tocScharacterspecies"></a>
<a id="tocscharacterspecies"></a>

```json
{
  "uid": "string",
  "name": "string",
  "numerator": 0,
  "denominator": 0
}
```

Species a character belongs to

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|false|none|Entity unique ID|
|name|string|false|none|Species name|
|numerator|integer|false|none|Numerator|
|denominator|integer|false|none|Denominator|

<h2 id="tocS_ComicsHeader">ComicsHeader</h2>
<!-- backwards compatibility -->
<a id="schemacomicsheader"></a>
<a id="schema_ComicsHeader"></a>
<a id="tocScomicsheader"></a>
<a id="tocscomicsheader"></a>

```json
{
  "uid": "string",
  "title": "string"
}
```

Header comics, embedded in other objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Comics unique ID|
|title|string|true|none|Comics title|

<h2 id="tocS_ComicsBase">ComicsBase</h2>
<!-- backwards compatibility -->
<a id="schemacomicsbase"></a>
<a id="schema_ComicsBase"></a>
<a id="tocScomicsbase"></a>
<a id="tocscomicsbase"></a>

```json
{
  "uid": "string",
  "title": "string",
  "publishedYear": 0,
  "publishedMonth": 0,
  "publishedDay": 0,
  "coverYear": 0,
  "coverMonth": 0,
  "coverDay": 0,
  "numberOfPages": 0,
  "stardateFrom": 0,
  "stardateTo": 0,
  "yearFrom": 0,
  "yearTo": 0,
  "photonovel": true,
  "adaptation": true
}
```

Base comics, returned in search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Comics unique ID|
|title|string|true|none|Comics title|
|publishedYear|integer|false|none|Year the comics was published|
|publishedMonth|integer|false|none|Month the comics was published|
|publishedDay|integer|false|none|Day the comics was published|
|coverYear|integer|false|none|Cover publication year|
|coverMonth|integer|false|none|Cover publication month|
|coverDay|integer|false|none|Cover publication day|
|numberOfPages|integer|false|none|Number of pages|
|stardateFrom|number(float)|false|none|Starting stardate of comic story|
|stardateTo|number(float)|false|none|Ending stardate of comic story|
|yearFrom|integer|false|none|Starting year of comic story|
|yearTo|integer|false|none|Ending year of comic story|
|photonovel|boolean|false|none|Whether it's a photonovel|
|adaptation|boolean|false|none|Whether it's an adaptation of an episode or a movie|

<h2 id="tocS_ComicsFull">ComicsFull</h2>
<!-- backwards compatibility -->
<a id="schemacomicsfull"></a>
<a id="schema_ComicsFull"></a>
<a id="tocScomicsfull"></a>
<a id="tocscomicsfull"></a>

```json
{
  "uid": "string",
  "title": "string",
  "publishedYear": 0,
  "publishedMonth": 0,
  "publishedDay": 0,
  "coverYear": 0,
  "coverMonth": 0,
  "coverDay": 0,
  "numberOfPages": 0,
  "stardateFrom": 0,
  "stardateTo": 0,
  "yearFrom": 0,
  "yearTo": 0,
  "photonovel": true,
  "adaptation": true,
  "comicSeries": [
    {
      "uid": "string",
      "title": "string",
      "publishedYearFrom": 0,
      "publishedMonthFrom": 0,
      "publishedDayFrom": 0,
      "publishedYearTo": 0,
      "publishedMonthTo": 0,
      "publishedDayTo": 0,
      "numberOfIssues": 0,
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "miniseries": true,
      "photonovelSeries": true
    }
  ],
  "writers": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "artDepartment": true,
      "artDirector": true,
      "productionDesigner": true,
      "cameraAndElectricalDepartment": true,
      "cinematographer": true,
      "castingDepartment": true,
      "costumeDepartment": true,
      "costumeDesigner": true,
      "director": true,
      "assistantOrSecondUnitDirector": true,
      "exhibitAndAttractionStaff": true,
      "filmEditor": true,
      "linguist": true,
      "locationStaff": true,
      "makeupStaff": true,
      "musicDepartment": true,
      "composer": true,
      "personalAssistant": true,
      "producer": true,
      "productionAssociate": true,
      "productionStaff": true,
      "publicationStaff": true,
      "scienceConsultant": true,
      "soundDepartment": true,
      "specialAndVisualEffectsStaff": true,
      "author": true,
      "audioAuthor": true,
      "calendarArtist": true,
      "comicArtist": true,
      "comicAuthor": true,
      "comicColorArtist": true,
      "comicInteriorArtist": true,
      "comicInkArtist": true,
      "comicPencilArtist": true,
      "comicLetterArtist": true,
      "comicStripArtist": true,
      "gameArtist": true,
      "gameAuthor": true,
      "novelArtist": true,
      "novelAuthor": true,
      "referenceArtist": true,
      "referenceAuthor": true,
      "publicationArtist": true,
      "publicationDesigner": true,
      "publicationEditor": true,
      "publicityArtist": true,
      "cbsDigitalStaff": true,
      "ilmProductionStaff": true,
      "specialFeaturesStaff": true,
      "storyEditor": true,
      "studioExecutive": true,
      "stuntDepartment": true,
      "transportationDepartment": true,
      "videoGameProductionStaff": true,
      "writer": true
    }
  ],
  "artists": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "artDepartment": true,
      "artDirector": true,
      "productionDesigner": true,
      "cameraAndElectricalDepartment": true,
      "cinematographer": true,
      "castingDepartment": true,
      "costumeDepartment": true,
      "costumeDesigner": true,
      "director": true,
      "assistantOrSecondUnitDirector": true,
      "exhibitAndAttractionStaff": true,
      "filmEditor": true,
      "linguist": true,
      "locationStaff": true,
      "makeupStaff": true,
      "musicDepartment": true,
      "composer": true,
      "personalAssistant": true,
      "producer": true,
      "productionAssociate": true,
      "productionStaff": true,
      "publicationStaff": true,
      "scienceConsultant": true,
      "soundDepartment": true,
      "specialAndVisualEffectsStaff": true,
      "author": true,
      "audioAuthor": true,
      "calendarArtist": true,
      "comicArtist": true,
      "comicAuthor": true,
      "comicColorArtist": true,
      "comicInteriorArtist": true,
      "comicInkArtist": true,
      "comicPencilArtist": true,
      "comicLetterArtist": true,
      "comicStripArtist": true,
      "gameArtist": true,
      "gameAuthor": true,
      "novelArtist": true,
      "novelAuthor": true,
      "referenceArtist": true,
      "referenceAuthor": true,
      "publicationArtist": true,
      "publicationDesigner": true,
      "publicationEditor": true,
      "publicityArtist": true,
      "cbsDigitalStaff": true,
      "ilmProductionStaff": true,
      "specialFeaturesStaff": true,
      "storyEditor": true,
      "studioExecutive": true,
      "stuntDepartment": true,
      "transportationDepartment": true,
      "videoGameProductionStaff": true,
      "writer": true
    }
  ],
  "editors": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "artDepartment": true,
      "artDirector": true,
      "productionDesigner": true,
      "cameraAndElectricalDepartment": true,
      "cinematographer": true,
      "castingDepartment": true,
      "costumeDepartment": true,
      "costumeDesigner": true,
      "director": true,
      "assistantOrSecondUnitDirector": true,
      "exhibitAndAttractionStaff": true,
      "filmEditor": true,
      "linguist": true,
      "locationStaff": true,
      "makeupStaff": true,
      "musicDepartment": true,
      "composer": true,
      "personalAssistant": true,
      "producer": true,
      "productionAssociate": true,
      "productionStaff": true,
      "publicationStaff": true,
      "scienceConsultant": true,
      "soundDepartment": true,
      "specialAndVisualEffectsStaff": true,
      "author": true,
      "audioAuthor": true,
      "calendarArtist": true,
      "comicArtist": true,
      "comicAuthor": true,
      "comicColorArtist": true,
      "comicInteriorArtist": true,
      "comicInkArtist": true,
      "comicPencilArtist": true,
      "comicLetterArtist": true,
      "comicStripArtist": true,
      "gameArtist": true,
      "gameAuthor": true,
      "novelArtist": true,
      "novelAuthor": true,
      "referenceArtist": true,
      "referenceAuthor": true,
      "publicationArtist": true,
      "publicationDesigner": true,
      "publicationEditor": true,
      "publicityArtist": true,
      "cbsDigitalStaff": true,
      "ilmProductionStaff": true,
      "specialFeaturesStaff": true,
      "storyEditor": true,
      "studioExecutive": true,
      "stuntDepartment": true,
      "transportationDepartment": true,
      "videoGameProductionStaff": true,
      "writer": true
    }
  ],
  "staff": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "artDepartment": true,
      "artDirector": true,
      "productionDesigner": true,
      "cameraAndElectricalDepartment": true,
      "cinematographer": true,
      "castingDepartment": true,
      "costumeDepartment": true,
      "costumeDesigner": true,
      "director": true,
      "assistantOrSecondUnitDirector": true,
      "exhibitAndAttractionStaff": true,
      "filmEditor": true,
      "linguist": true,
      "locationStaff": true,
      "makeupStaff": true,
      "musicDepartment": true,
      "composer": true,
      "personalAssistant": true,
      "producer": true,
      "productionAssociate": true,
      "productionStaff": true,
      "publicationStaff": true,
      "scienceConsultant": true,
      "soundDepartment": true,
      "specialAndVisualEffectsStaff": true,
      "author": true,
      "audioAuthor": true,
      "calendarArtist": true,
      "comicArtist": true,
      "comicAuthor": true,
      "comicColorArtist": true,
      "comicInteriorArtist": true,
      "comicInkArtist": true,
      "comicPencilArtist": true,
      "comicLetterArtist": true,
      "comicStripArtist": true,
      "gameArtist": true,
      "gameAuthor": true,
      "novelArtist": true,
      "novelAuthor": true,
      "referenceArtist": true,
      "referenceAuthor": true,
      "publicationArtist": true,
      "publicationDesigner": true,
      "publicationEditor": true,
      "publicityArtist": true,
      "cbsDigitalStaff": true,
      "ilmProductionStaff": true,
      "specialFeaturesStaff": true,
      "storyEditor": true,
      "studioExecutive": true,
      "stuntDepartment": true,
      "transportationDepartment": true,
      "videoGameProductionStaff": true,
      "writer": true
    }
  ],
  "publishers": [
    {
      "uid": "string",
      "name": "string",
      "broadcaster": true,
      "collectibleCompany": true,
      "conglomerate": true,
      "digitalVisualEffectsCompany": true,
      "distributor": true,
      "gameCompany": true,
      "filmEquipmentCompany": true,
      "makeUpEffectsStudio": true,
      "mattePaintingCompany": true,
      "modelAndMiniatureEffectsCompany": true,
      "postProductionCompany": true,
      "productionCompany": true,
      "propCompany": true,
      "recordLabel": true,
      "specialEffectsCompany": true,
      "tvAndFilmProductionCompany": true,
      "videoGameCompany": true
    }
  ],
  "characters": [
    {
      "uid": "string",
      "name": "string",
      "gender": "F",
      "yearOfBirth": 0,
      "monthOfBirth": 0,
      "dayOfBirth": 0,
      "placeOfBirth": "string",
      "yearOfDeath": 0,
      "monthOfDeath": 0,
      "dayOfDeath": 0,
      "placeOfDeath": "string",
      "height": 0,
      "weight": 0,
      "deceased": true,
      "bloodType": "B_NEGATIVE",
      "maritalStatus": "SINGLE",
      "serialNumber": "string",
      "hologramActivationDate": "string",
      "hologramStatus": "string",
      "hologramDateStatus": "string",
      "hologram": true,
      "fictionalCharacter": true,
      "mirror": true,
      "alternateReality": true
    }
  ],
  "references": [
    {
      "uid": "string",
      "referenceType": "ASIN",
      "referenceNumber": "string"
    }
  ],
  "comicCollections": [
    {
      "uid": "string",
      "title": "string",
      "publishedYear": 0,
      "publishedMonth": 0,
      "publishedDay": 0,
      "coverYear": 0,
      "coverMonth": 0,
      "coverDay": 0,
      "numberOfPages": 0,
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "photonovel": true
    }
  ]
}
```

Full comics, returned when queried using UID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Comics unique ID|
|title|string|true|none|Comics title|
|publishedYear|integer|false|none|Year the comics was published|
|publishedMonth|integer|false|none|Month the comics was published|
|publishedDay|integer|false|none|Day the comics was published|
|coverYear|integer|false|none|Cover publication year|
|coverMonth|integer|false|none|Cover publication month|
|coverDay|integer|false|none|Cover publication day|
|numberOfPages|integer|false|none|Number of pages|
|stardateFrom|number(float)|false|none|Starting stardate of comic story|
|stardateTo|number(float)|false|none|Ending stardate of comic story|
|yearFrom|integer|false|none|Starting year of comic  story|
|yearTo|integer|false|none|Ending year of comic story|
|photonovel|boolean|false|none|Whether it's a photonovel|
|adaptation|boolean|false|none|Whether it's an adaptation of an episode or a movie|
|comicSeries|[[ComicSeriesBase](#schemacomicseriesbase)]|false|none|Comic series this comics is included in|
|writers|[[StaffBase](#schemastaffbase)]|false|none|Writers involved in the comics|
|artists|[[StaffBase](#schemastaffbase)]|false|none|Artists involved in the comics|
|editors|[[StaffBase](#schemastaffbase)]|false|none|Editors involved in the comics|
|staff|[[StaffBase](#schemastaffbase)]|false|none|Other staff involved in the comics|
|publishers|[[CompanyBase](#schemacompanybase)]|false|none|Comics publishers|
|characters|[[CharacterBase](#schemacharacterbase)]|false|none|Characters appearing in the comics|
|references|[[Reference](#schemareference)]|false|none|References|
|comicCollections|[[ComicCollectionBase](#schemacomiccollectionbase)]|false|none|Comic collections this comics is included in|

<h2 id="tocS_ComicsBaseResponse">ComicsBaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemacomicsbaseresponse"></a>
<a id="schema_ComicsBaseResponse"></a>
<a id="tocScomicsbaseresponse"></a>
<a id="tocscomicsbaseresponse"></a>

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "comics": [
    {
      "uid": "string",
      "title": "string",
      "publishedYear": 0,
      "publishedMonth": 0,
      "publishedDay": 0,
      "coverYear": 0,
      "coverMonth": 0,
      "coverDay": 0,
      "numberOfPages": 0,
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "photonovel": true,
      "adaptation": true
    }
  ]
}
```

Response object for comics search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|[ResponsePage](#schemaresponsepage)|false|none|Object describing response page|
|sort|[ResponseSort](#schemaresponsesort)|false|none|Response sort|
|comics|[[ComicsBase](#schemacomicsbase)]|false|none|List of comics matching given criteria|

<h2 id="tocS_ComicsFullResponse">ComicsFullResponse</h2>
<!-- backwards compatibility -->
<a id="schemacomicsfullresponse"></a>
<a id="schema_ComicsFullResponse"></a>
<a id="tocScomicsfullresponse"></a>
<a id="tocscomicsfullresponse"></a>

```json
{
  "comics": {
    "uid": "string",
    "title": "string",
    "publishedYear": 0,
    "publishedMonth": 0,
    "publishedDay": 0,
    "coverYear": 0,
    "coverMonth": 0,
    "coverDay": 0,
    "numberOfPages": 0,
    "stardateFrom": 0,
    "stardateTo": 0,
    "yearFrom": 0,
    "yearTo": 0,
    "photonovel": true,
    "adaptation": true,
    "comicSeries": [
      {
        "uid": "string",
        "title": "string",
        "publishedYearFrom": 0,
        "publishedMonthFrom": 0,
        "publishedDayFrom": 0,
        "publishedYearTo": 0,
        "publishedMonthTo": 0,
        "publishedDayTo": 0,
        "numberOfIssues": 0,
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "miniseries": true,
        "photonovelSeries": true
      }
    ],
    "writers": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "artists": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "editors": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "staff": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "publishers": [
      {
        "uid": "string",
        "name": "string",
        "broadcaster": true,
        "collectibleCompany": true,
        "conglomerate": true,
        "digitalVisualEffectsCompany": true,
        "distributor": true,
        "gameCompany": true,
        "filmEquipmentCompany": true,
        "makeUpEffectsStudio": true,
        "mattePaintingCompany": true,
        "modelAndMiniatureEffectsCompany": true,
        "postProductionCompany": true,
        "productionCompany": true,
        "propCompany": true,
        "recordLabel": true,
        "specialEffectsCompany": true,
        "tvAndFilmProductionCompany": true,
        "videoGameCompany": true
      }
    ],
    "characters": [
      {
        "uid": "string",
        "name": "string",
        "gender": "F",
        "yearOfBirth": 0,
        "monthOfBirth": 0,
        "dayOfBirth": 0,
        "placeOfBirth": "string",
        "yearOfDeath": 0,
        "monthOfDeath": 0,
        "dayOfDeath": 0,
        "placeOfDeath": "string",
        "height": 0,
        "weight": 0,
        "deceased": true,
        "bloodType": "B_NEGATIVE",
        "maritalStatus": "SINGLE",
        "serialNumber": "string",
        "hologramActivationDate": "string",
        "hologramStatus": "string",
        "hologramDateStatus": "string",
        "hologram": true,
        "fictionalCharacter": true,
        "mirror": true,
        "alternateReality": true
      }
    ],
    "references": [
      {
        "uid": "string",
        "referenceType": "ASIN",
        "referenceNumber": "string"
      }
    ],
    "comicCollections": [
      {
        "uid": "string",
        "title": "string",
        "publishedYear": 0,
        "publishedMonth": 0,
        "publishedDay": 0,
        "coverYear": 0,
        "coverMonth": 0,
        "coverDay": 0,
        "numberOfPages": 0,
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "photonovel": true
      }
    ]
  }
}
```

Response object for single comics query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comics|[ComicsFull](#schemacomicsfull)|false|none|Full comics, returned when queried using UID|

<h2 id="tocS_ComicCollectionHeader">ComicCollectionHeader</h2>
<!-- backwards compatibility -->
<a id="schemacomiccollectionheader"></a>
<a id="schema_ComicCollectionHeader"></a>
<a id="tocScomiccollectionheader"></a>
<a id="tocscomiccollectionheader"></a>

```json
{
  "uid": "string",
  "title": "string"
}
```

Header comic collection, embedded in other objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Comic collection unique ID|
|title|string|true|none|Comic collection title|

<h2 id="tocS_ComicCollectionBase">ComicCollectionBase</h2>
<!-- backwards compatibility -->
<a id="schemacomiccollectionbase"></a>
<a id="schema_ComicCollectionBase"></a>
<a id="tocScomiccollectionbase"></a>
<a id="tocscomiccollectionbase"></a>

```json
{
  "uid": "string",
  "title": "string",
  "publishedYear": 0,
  "publishedMonth": 0,
  "publishedDay": 0,
  "coverYear": 0,
  "coverMonth": 0,
  "coverDay": 0,
  "numberOfPages": 0,
  "stardateFrom": 0,
  "stardateTo": 0,
  "yearFrom": 0,
  "yearTo": 0,
  "photonovel": true
}
```

Base comic collection, returned in search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Comic collection unique ID|
|title|string|true|none|Comic collection title|
|publishedYear|integer|false|none|Year the comic collection was published|
|publishedMonth|integer|false|none|Month the comic collection was published|
|publishedDay|integer|false|none|Day the comic collection was published|
|coverYear|integer|false|none|Cover publication year|
|coverMonth|integer|false|none|Cover publication month|
|coverDay|integer|false|none|Cover publication day|
|numberOfPages|integer|false|none|Number of pages|
|stardateFrom|number(float)|false|none|Starting stardate of comic collection stories|
|stardateTo|number(float)|false|none|Ending stardate of comic collection stories|
|yearFrom|integer|false|none|Starting year of comic collection stories|
|yearTo|integer|false|none|Ending year of comic collection stories|
|photonovel|boolean|false|none|Whether it's a photonovel collection|

<h2 id="tocS_ComicCollectionFull">ComicCollectionFull</h2>
<!-- backwards compatibility -->
<a id="schemacomiccollectionfull"></a>
<a id="schema_ComicCollectionFull"></a>
<a id="tocScomiccollectionfull"></a>
<a id="tocscomiccollectionfull"></a>

```json
{
  "uid": "string",
  "title": "string",
  "publishedYear": 0,
  "publishedMonth": 0,
  "publishedDay": 0,
  "coverYear": 0,
  "coverMonth": 0,
  "coverDay": 0,
  "numberOfPages": 0,
  "stardateFrom": 0,
  "stardateTo": 0,
  "yearFrom": 0,
  "yearTo": 0,
  "photonovel": true,
  "comicSeries": [
    {
      "uid": "string",
      "title": "string",
      "publishedYearFrom": 0,
      "publishedMonthFrom": 0,
      "publishedDayFrom": 0,
      "publishedYearTo": 0,
      "publishedMonthTo": 0,
      "publishedDayTo": 0,
      "numberOfIssues": 0,
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "miniseries": true,
      "photonovelSeries": true
    }
  ],
  "writers": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "artDepartment": true,
      "artDirector": true,
      "productionDesigner": true,
      "cameraAndElectricalDepartment": true,
      "cinematographer": true,
      "castingDepartment": true,
      "costumeDepartment": true,
      "costumeDesigner": true,
      "director": true,
      "assistantOrSecondUnitDirector": true,
      "exhibitAndAttractionStaff": true,
      "filmEditor": true,
      "linguist": true,
      "locationStaff": true,
      "makeupStaff": true,
      "musicDepartment": true,
      "composer": true,
      "personalAssistant": true,
      "producer": true,
      "productionAssociate": true,
      "productionStaff": true,
      "publicationStaff": true,
      "scienceConsultant": true,
      "soundDepartment": true,
      "specialAndVisualEffectsStaff": true,
      "author": true,
      "audioAuthor": true,
      "calendarArtist": true,
      "comicArtist": true,
      "comicAuthor": true,
      "comicColorArtist": true,
      "comicInteriorArtist": true,
      "comicInkArtist": true,
      "comicPencilArtist": true,
      "comicLetterArtist": true,
      "comicStripArtist": true,
      "gameArtist": true,
      "gameAuthor": true,
      "novelArtist": true,
      "novelAuthor": true,
      "referenceArtist": true,
      "referenceAuthor": true,
      "publicationArtist": true,
      "publicationDesigner": true,
      "publicationEditor": true,
      "publicityArtist": true,
      "cbsDigitalStaff": true,
      "ilmProductionStaff": true,
      "specialFeaturesStaff": true,
      "storyEditor": true,
      "studioExecutive": true,
      "stuntDepartment": true,
      "transportationDepartment": true,
      "videoGameProductionStaff": true,
      "writer": true
    }
  ],
  "artists": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "artDepartment": true,
      "artDirector": true,
      "productionDesigner": true,
      "cameraAndElectricalDepartment": true,
      "cinematographer": true,
      "castingDepartment": true,
      "costumeDepartment": true,
      "costumeDesigner": true,
      "director": true,
      "assistantOrSecondUnitDirector": true,
      "exhibitAndAttractionStaff": true,
      "filmEditor": true,
      "linguist": true,
      "locationStaff": true,
      "makeupStaff": true,
      "musicDepartment": true,
      "composer": true,
      "personalAssistant": true,
      "producer": true,
      "productionAssociate": true,
      "productionStaff": true,
      "publicationStaff": true,
      "scienceConsultant": true,
      "soundDepartment": true,
      "specialAndVisualEffectsStaff": true,
      "author": true,
      "audioAuthor": true,
      "calendarArtist": true,
      "comicArtist": true,
      "comicAuthor": true,
      "comicColorArtist": true,
      "comicInteriorArtist": true,
      "comicInkArtist": true,
      "comicPencilArtist": true,
      "comicLetterArtist": true,
      "comicStripArtist": true,
      "gameArtist": true,
      "gameAuthor": true,
      "novelArtist": true,
      "novelAuthor": true,
      "referenceArtist": true,
      "referenceAuthor": true,
      "publicationArtist": true,
      "publicationDesigner": true,
      "publicationEditor": true,
      "publicityArtist": true,
      "cbsDigitalStaff": true,
      "ilmProductionStaff": true,
      "specialFeaturesStaff": true,
      "storyEditor": true,
      "studioExecutive": true,
      "stuntDepartment": true,
      "transportationDepartment": true,
      "videoGameProductionStaff": true,
      "writer": true
    }
  ],
  "editors": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "artDepartment": true,
      "artDirector": true,
      "productionDesigner": true,
      "cameraAndElectricalDepartment": true,
      "cinematographer": true,
      "castingDepartment": true,
      "costumeDepartment": true,
      "costumeDesigner": true,
      "director": true,
      "assistantOrSecondUnitDirector": true,
      "exhibitAndAttractionStaff": true,
      "filmEditor": true,
      "linguist": true,
      "locationStaff": true,
      "makeupStaff": true,
      "musicDepartment": true,
      "composer": true,
      "personalAssistant": true,
      "producer": true,
      "productionAssociate": true,
      "productionStaff": true,
      "publicationStaff": true,
      "scienceConsultant": true,
      "soundDepartment": true,
      "specialAndVisualEffectsStaff": true,
      "author": true,
      "audioAuthor": true,
      "calendarArtist": true,
      "comicArtist": true,
      "comicAuthor": true,
      "comicColorArtist": true,
      "comicInteriorArtist": true,
      "comicInkArtist": true,
      "comicPencilArtist": true,
      "comicLetterArtist": true,
      "comicStripArtist": true,
      "gameArtist": true,
      "gameAuthor": true,
      "novelArtist": true,
      "novelAuthor": true,
      "referenceArtist": true,
      "referenceAuthor": true,
      "publicationArtist": true,
      "publicationDesigner": true,
      "publicationEditor": true,
      "publicityArtist": true,
      "cbsDigitalStaff": true,
      "ilmProductionStaff": true,
      "specialFeaturesStaff": true,
      "storyEditor": true,
      "studioExecutive": true,
      "stuntDepartment": true,
      "transportationDepartment": true,
      "videoGameProductionStaff": true,
      "writer": true
    }
  ],
  "staff": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "artDepartment": true,
      "artDirector": true,
      "productionDesigner": true,
      "cameraAndElectricalDepartment": true,
      "cinematographer": true,
      "castingDepartment": true,
      "costumeDepartment": true,
      "costumeDesigner": true,
      "director": true,
      "assistantOrSecondUnitDirector": true,
      "exhibitAndAttractionStaff": true,
      "filmEditor": true,
      "linguist": true,
      "locationStaff": true,
      "makeupStaff": true,
      "musicDepartment": true,
      "composer": true,
      "personalAssistant": true,
      "producer": true,
      "productionAssociate": true,
      "productionStaff": true,
      "publicationStaff": true,
      "scienceConsultant": true,
      "soundDepartment": true,
      "specialAndVisualEffectsStaff": true,
      "author": true,
      "audioAuthor": true,
      "calendarArtist": true,
      "comicArtist": true,
      "comicAuthor": true,
      "comicColorArtist": true,
      "comicInteriorArtist": true,
      "comicInkArtist": true,
      "comicPencilArtist": true,
      "comicLetterArtist": true,
      "comicStripArtist": true,
      "gameArtist": true,
      "gameAuthor": true,
      "novelArtist": true,
      "novelAuthor": true,
      "referenceArtist": true,
      "referenceAuthor": true,
      "publicationArtist": true,
      "publicationDesigner": true,
      "publicationEditor": true,
      "publicityArtist": true,
      "cbsDigitalStaff": true,
      "ilmProductionStaff": true,
      "specialFeaturesStaff": true,
      "storyEditor": true,
      "studioExecutive": true,
      "stuntDepartment": true,
      "transportationDepartment": true,
      "videoGameProductionStaff": true,
      "writer": true
    }
  ],
  "publishers": [
    {
      "uid": "string",
      "name": "string",
      "broadcaster": true,
      "collectibleCompany": true,
      "conglomerate": true,
      "digitalVisualEffectsCompany": true,
      "distributor": true,
      "gameCompany": true,
      "filmEquipmentCompany": true,
      "makeUpEffectsStudio": true,
      "mattePaintingCompany": true,
      "modelAndMiniatureEffectsCompany": true,
      "postProductionCompany": true,
      "productionCompany": true,
      "propCompany": true,
      "recordLabel": true,
      "specialEffectsCompany": true,
      "tvAndFilmProductionCompany": true,
      "videoGameCompany": true
    }
  ],
  "characters": [
    {
      "uid": "string",
      "name": "string",
      "gender": "F",
      "yearOfBirth": 0,
      "monthOfBirth": 0,
      "dayOfBirth": 0,
      "placeOfBirth": "string",
      "yearOfDeath": 0,
      "monthOfDeath": 0,
      "dayOfDeath": 0,
      "placeOfDeath": "string",
      "height": 0,
      "weight": 0,
      "deceased": true,
      "bloodType": "B_NEGATIVE",
      "maritalStatus": "SINGLE",
      "serialNumber": "string",
      "hologramActivationDate": "string",
      "hologramStatus": "string",
      "hologramDateStatus": "string",
      "hologram": true,
      "fictionalCharacter": true,
      "mirror": true,
      "alternateReality": true
    }
  ],
  "references": [
    {
      "uid": "string",
      "referenceType": "ASIN",
      "referenceNumber": "string"
    }
  ],
  "comics": [
    {
      "uid": "string",
      "title": "string",
      "publishedYear": 0,
      "publishedMonth": 0,
      "publishedDay": 0,
      "coverYear": 0,
      "coverMonth": 0,
      "coverDay": 0,
      "numberOfPages": 0,
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "photonovel": true,
      "adaptation": true
    }
  ]
}
```

Full comic collection, returned when queried using UID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Comic collection unique ID|
|title|string|true|none|Comic collection title|
|publishedYear|integer|false|none|Year the comic collection was published|
|publishedMonth|integer|false|none|Month the comic collection was published|
|publishedDay|integer|false|none|Day the comic collection was published|
|coverYear|integer|false|none|Cover publication year|
|coverMonth|integer|false|none|Cover publication month|
|coverDay|integer|false|none|Cover publication day|
|numberOfPages|integer|false|none|Number of pages|
|stardateFrom|number(float)|false|none|Starting stardate of comic collection stories|
|stardateTo|number(float)|false|none|Ending stardate of comic collection stories|
|yearFrom|integer|false|none|Starting year of comic collection stories|
|yearTo|integer|false|none|Ending year of comic collection stories|
|photonovel|boolean|false|none|Whether it's a photonovel collection|
|comicSeries|[[ComicSeriesBase](#schemacomicseriesbase)]|false|none|Comic series this comic collection is included in|
|writers|[[StaffBase](#schemastaffbase)]|false|none|Writers involved in the comic collection|
|artists|[[StaffBase](#schemastaffbase)]|false|none|Artists involved in the comic collection|
|editors|[[StaffBase](#schemastaffbase)]|false|none|Editors involved in the comic collection|
|staff|[[StaffBase](#schemastaffbase)]|false|none|Other staff involved in the comic collection|
|publishers|[[CompanyBase](#schemacompanybase)]|false|none|Comic collection publishers|
|characters|[[CharacterBase](#schemacharacterbase)]|false|none|Characters appearing in the comic collection|
|references|[[Reference](#schemareference)]|false|none|References|
|comics|[[ComicsBase](#schemacomicsbase)]|false|none|Comics included in this comic collection|

<h2 id="tocS_ComicCollectionBaseResponse">ComicCollectionBaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemacomiccollectionbaseresponse"></a>
<a id="schema_ComicCollectionBaseResponse"></a>
<a id="tocScomiccollectionbaseresponse"></a>
<a id="tocscomiccollectionbaseresponse"></a>

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "comicCollections": [
    {
      "uid": "string",
      "title": "string",
      "publishedYear": 0,
      "publishedMonth": 0,
      "publishedDay": 0,
      "coverYear": 0,
      "coverMonth": 0,
      "coverDay": 0,
      "numberOfPages": 0,
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "photonovel": true
    }
  ]
}
```

Response object for comic collections search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|[ResponsePage](#schemaresponsepage)|false|none|Object describing response page|
|sort|[ResponseSort](#schemaresponsesort)|false|none|Response sort|
|comicCollections|[[ComicCollectionBase](#schemacomiccollectionbase)]|false|none|List of comic collections matching given criteria|

<h2 id="tocS_ComicCollectionFullResponse">ComicCollectionFullResponse</h2>
<!-- backwards compatibility -->
<a id="schemacomiccollectionfullresponse"></a>
<a id="schema_ComicCollectionFullResponse"></a>
<a id="tocScomiccollectionfullresponse"></a>
<a id="tocscomiccollectionfullresponse"></a>

```json
{
  "comicCollection": {
    "uid": "string",
    "title": "string",
    "publishedYear": 0,
    "publishedMonth": 0,
    "publishedDay": 0,
    "coverYear": 0,
    "coverMonth": 0,
    "coverDay": 0,
    "numberOfPages": 0,
    "stardateFrom": 0,
    "stardateTo": 0,
    "yearFrom": 0,
    "yearTo": 0,
    "photonovel": true,
    "comicSeries": [
      {
        "uid": "string",
        "title": "string",
        "publishedYearFrom": 0,
        "publishedMonthFrom": 0,
        "publishedDayFrom": 0,
        "publishedYearTo": 0,
        "publishedMonthTo": 0,
        "publishedDayTo": 0,
        "numberOfIssues": 0,
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "miniseries": true,
        "photonovelSeries": true
      }
    ],
    "writers": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "artists": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "editors": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "staff": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "publishers": [
      {
        "uid": "string",
        "name": "string",
        "broadcaster": true,
        "collectibleCompany": true,
        "conglomerate": true,
        "digitalVisualEffectsCompany": true,
        "distributor": true,
        "gameCompany": true,
        "filmEquipmentCompany": true,
        "makeUpEffectsStudio": true,
        "mattePaintingCompany": true,
        "modelAndMiniatureEffectsCompany": true,
        "postProductionCompany": true,
        "productionCompany": true,
        "propCompany": true,
        "recordLabel": true,
        "specialEffectsCompany": true,
        "tvAndFilmProductionCompany": true,
        "videoGameCompany": true
      }
    ],
    "characters": [
      {
        "uid": "string",
        "name": "string",
        "gender": "F",
        "yearOfBirth": 0,
        "monthOfBirth": 0,
        "dayOfBirth": 0,
        "placeOfBirth": "string",
        "yearOfDeath": 0,
        "monthOfDeath": 0,
        "dayOfDeath": 0,
        "placeOfDeath": "string",
        "height": 0,
        "weight": 0,
        "deceased": true,
        "bloodType": "B_NEGATIVE",
        "maritalStatus": "SINGLE",
        "serialNumber": "string",
        "hologramActivationDate": "string",
        "hologramStatus": "string",
        "hologramDateStatus": "string",
        "hologram": true,
        "fictionalCharacter": true,
        "mirror": true,
        "alternateReality": true
      }
    ],
    "references": [
      {
        "uid": "string",
        "referenceType": "ASIN",
        "referenceNumber": "string"
      }
    ],
    "comics": [
      {
        "uid": "string",
        "title": "string",
        "publishedYear": 0,
        "publishedMonth": 0,
        "publishedDay": 0,
        "coverYear": 0,
        "coverMonth": 0,
        "coverDay": 0,
        "numberOfPages": 0,
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "photonovel": true,
        "adaptation": true
      }
    ]
  }
}
```

Response object for single comic collection query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comicCollection|[ComicCollectionFull](#schemacomiccollectionfull)|false|none|Full comic collection, returned when queried using UID|

<h2 id="tocS_ComicSeriesHeader">ComicSeriesHeader</h2>
<!-- backwards compatibility -->
<a id="schemacomicseriesheader"></a>
<a id="schema_ComicSeriesHeader"></a>
<a id="tocScomicseriesheader"></a>
<a id="tocscomicseriesheader"></a>

```json
{
  "uid": "string",
  "title": "string"
}
```

Header book series, embedded in other objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Comic series unique ID|
|title|string|true|none|Comic series title|

<h2 id="tocS_ComicSeriesBase">ComicSeriesBase</h2>
<!-- backwards compatibility -->
<a id="schemacomicseriesbase"></a>
<a id="schema_ComicSeriesBase"></a>
<a id="tocScomicseriesbase"></a>
<a id="tocscomicseriesbase"></a>

```json
{
  "uid": "string",
  "title": "string",
  "publishedYearFrom": 0,
  "publishedMonthFrom": 0,
  "publishedDayFrom": 0,
  "publishedYearTo": 0,
  "publishedMonthTo": 0,
  "publishedDayTo": 0,
  "numberOfIssues": 0,
  "stardateFrom": 0,
  "stardateTo": 0,
  "yearFrom": 0,
  "yearTo": 0,
  "miniseries": true,
  "photonovelSeries": true
}
```

Base comic series, returned in search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Comic series unique ID|
|title|string|true|none|Comic series title|
|publishedYearFrom|integer|false|none|Year from which the comic series was published|
|publishedMonthFrom|integer|false|none|Month from which the comic series was published|
|publishedDayFrom|integer|false|none|Day from which the comic series was published|
|publishedYearTo|integer|false|none|Year to which the comic series was published|
|publishedMonthTo|integer|false|none|Month to which the comic series was published|
|publishedDayTo|integer|false|none|Day to which the comic series was published|
|numberOfIssues|integer|false|none|Number of issues|
|stardateFrom|number(float)|false|none|Starting stardate of comic series stories|
|stardateTo|number(float)|false|none|Ending stardate of comic series stories|
|yearFrom|integer|false|none|Starting year of comic series stories|
|yearTo|integer|false|none|Ending year of comic series stories|
|miniseries|boolean|false|none|Whether it's a miniseries|
|photonovelSeries|boolean|false|none|Whether it's a photonovel series|

<h2 id="tocS_ComicSeriesFull">ComicSeriesFull</h2>
<!-- backwards compatibility -->
<a id="schemacomicseriesfull"></a>
<a id="schema_ComicSeriesFull"></a>
<a id="tocScomicseriesfull"></a>
<a id="tocscomicseriesfull"></a>

```json
{
  "uid": "string",
  "title": "string",
  "publishedYearFrom": 0,
  "publishedMonthFrom": 0,
  "publishedDayFrom": 0,
  "publishedYearTo": 0,
  "publishedMonthTo": 0,
  "publishedDayTo": 0,
  "numberOfIssues": 0,
  "stardateFrom": 0,
  "stardateTo": 0,
  "yearFrom": 0,
  "yearTo": 0,
  "miniseries": true,
  "photonovelSeries": true,
  "parentSeries": [
    {
      "uid": "string",
      "title": "string",
      "publishedYearFrom": 0,
      "publishedMonthFrom": 0,
      "publishedDayFrom": 0,
      "publishedYearTo": 0,
      "publishedMonthTo": 0,
      "publishedDayTo": 0,
      "numberOfIssues": 0,
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "miniseries": true,
      "photonovelSeries": true
    }
  ],
  "childSeries": [
    {
      "uid": "string",
      "title": "string",
      "publishedYearFrom": 0,
      "publishedMonthFrom": 0,
      "publishedDayFrom": 0,
      "publishedYearTo": 0,
      "publishedMonthTo": 0,
      "publishedDayTo": 0,
      "numberOfIssues": 0,
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "miniseries": true,
      "photonovelSeries": true
    }
  ],
  "publishers": [
    {
      "uid": "string",
      "name": "string",
      "broadcaster": true,
      "collectibleCompany": true,
      "conglomerate": true,
      "digitalVisualEffectsCompany": true,
      "distributor": true,
      "gameCompany": true,
      "filmEquipmentCompany": true,
      "makeUpEffectsStudio": true,
      "mattePaintingCompany": true,
      "modelAndMiniatureEffectsCompany": true,
      "postProductionCompany": true,
      "productionCompany": true,
      "propCompany": true,
      "recordLabel": true,
      "specialEffectsCompany": true,
      "tvAndFilmProductionCompany": true,
      "videoGameCompany": true
    }
  ],
  "comics": [
    {
      "uid": "string",
      "title": "string",
      "publishedYear": 0,
      "publishedMonth": 0,
      "publishedDay": 0,
      "coverYear": 0,
      "coverMonth": 0,
      "coverDay": 0,
      "numberOfPages": 0,
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "photonovel": true,
      "adaptation": true
    }
  ]
}
```

Full comic series, returned when queried using UID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Comic series unique ID|
|title|string|true|none|Comic series title|
|publishedYearFrom|integer|false|none|Year from which the comic series was published|
|publishedMonthFrom|integer|false|none|Month from which the comic series was published|
|publishedDayFrom|integer|false|none|Day from which the comic series was published|
|publishedYearTo|integer|false|none|Year to which the comic series was published|
|publishedMonthTo|integer|false|none|Month to which the comic series was published|
|publishedDayTo|integer|false|none|Day to which the comic series was published|
|numberOfIssues|integer|false|none|Number of issues|
|stardateFrom|number(float)|false|none|Starting stardate of comic series stories|
|stardateTo|number(float)|false|none|Ending stardate of comic series stories|
|yearFrom|integer|false|none|Starting year of comic series stories|
|yearTo|integer|false|none|Ending year of comic series stories|
|miniseries|boolean|false|none|Whether it's a miniseries|
|photonovelSeries|boolean|false|none|Whether it's a photonovel series|
|parentSeries|[[ComicSeriesBase](#schemacomicseriesbase)]|false|none|Comic series this comic series is included in|
|childSeries|[[ComicSeriesBase](#schemacomicseriesbase)]|false|none|Child comic series included in this comic series|
|publishers|[[CompanyBase](#schemacompanybase)]|false|none|Companies that published this comic series|
|comics|[[ComicsBase](#schemacomicsbase)]|false|none|Comics included in this comic series|

<h2 id="tocS_ComicSeriesBaseResponse">ComicSeriesBaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemacomicseriesbaseresponse"></a>
<a id="schema_ComicSeriesBaseResponse"></a>
<a id="tocScomicseriesbaseresponse"></a>
<a id="tocscomicseriesbaseresponse"></a>

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "comicSeries": [
    {
      "uid": "string",
      "title": "string",
      "publishedYearFrom": 0,
      "publishedMonthFrom": 0,
      "publishedDayFrom": 0,
      "publishedYearTo": 0,
      "publishedMonthTo": 0,
      "publishedDayTo": 0,
      "numberOfIssues": 0,
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "miniseries": true,
      "photonovelSeries": true
    }
  ]
}
```

Response object for comic series search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|[ResponsePage](#schemaresponsepage)|false|none|Object describing response page|
|sort|[ResponseSort](#schemaresponsesort)|false|none|Response sort|
|comicSeries|[[ComicSeriesBase](#schemacomicseriesbase)]|false|none|List of comic series matching given criteria|

<h2 id="tocS_ComicSeriesFullResponse">ComicSeriesFullResponse</h2>
<!-- backwards compatibility -->
<a id="schemacomicseriesfullresponse"></a>
<a id="schema_ComicSeriesFullResponse"></a>
<a id="tocScomicseriesfullresponse"></a>
<a id="tocscomicseriesfullresponse"></a>

```json
{
  "comicSeries": {
    "uid": "string",
    "title": "string",
    "publishedYearFrom": 0,
    "publishedMonthFrom": 0,
    "publishedDayFrom": 0,
    "publishedYearTo": 0,
    "publishedMonthTo": 0,
    "publishedDayTo": 0,
    "numberOfIssues": 0,
    "stardateFrom": 0,
    "stardateTo": 0,
    "yearFrom": 0,
    "yearTo": 0,
    "miniseries": true,
    "photonovelSeries": true,
    "parentSeries": [
      {
        "uid": "string",
        "title": "string",
        "publishedYearFrom": 0,
        "publishedMonthFrom": 0,
        "publishedDayFrom": 0,
        "publishedYearTo": 0,
        "publishedMonthTo": 0,
        "publishedDayTo": 0,
        "numberOfIssues": 0,
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "miniseries": true,
        "photonovelSeries": true
      }
    ],
    "childSeries": [
      {
        "uid": "string",
        "title": "string",
        "publishedYearFrom": 0,
        "publishedMonthFrom": 0,
        "publishedDayFrom": 0,
        "publishedYearTo": 0,
        "publishedMonthTo": 0,
        "publishedDayTo": 0,
        "numberOfIssues": 0,
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "miniseries": true,
        "photonovelSeries": true
      }
    ],
    "publishers": [
      {
        "uid": "string",
        "name": "string",
        "broadcaster": true,
        "collectibleCompany": true,
        "conglomerate": true,
        "digitalVisualEffectsCompany": true,
        "distributor": true,
        "gameCompany": true,
        "filmEquipmentCompany": true,
        "makeUpEffectsStudio": true,
        "mattePaintingCompany": true,
        "modelAndMiniatureEffectsCompany": true,
        "postProductionCompany": true,
        "productionCompany": true,
        "propCompany": true,
        "recordLabel": true,
        "specialEffectsCompany": true,
        "tvAndFilmProductionCompany": true,
        "videoGameCompany": true
      }
    ],
    "comics": [
      {
        "uid": "string",
        "title": "string",
        "publishedYear": 0,
        "publishedMonth": 0,
        "publishedDay": 0,
        "coverYear": 0,
        "coverMonth": 0,
        "coverDay": 0,
        "numberOfPages": 0,
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "photonovel": true,
        "adaptation": true
      }
    ]
  }
}
```

Response object for single comic series query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comicSeries|[ComicSeriesFull](#schemacomicseriesfull)|false|none|Full comic series, returned when queried using UID|

<h2 id="tocS_ComicStripHeader">ComicStripHeader</h2>
<!-- backwards compatibility -->
<a id="schemacomicstripheader"></a>
<a id="schema_ComicStripHeader"></a>
<a id="tocScomicstripheader"></a>
<a id="tocscomicstripheader"></a>

```json
{
  "uid": "string",
  "title": "string"
}
```

Header comic strip, embedded in other objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Comic strip unique ID|
|title|string|true|none|Comic strip title|

<h2 id="tocS_ComicStripBase">ComicStripBase</h2>
<!-- backwards compatibility -->
<a id="schemacomicstripbase"></a>
<a id="schema_ComicStripBase"></a>
<a id="tocScomicstripbase"></a>
<a id="tocscomicstripbase"></a>

```json
{
  "uid": "string",
  "title": "string",
  "periodical": "string",
  "publishedYearFrom": 0,
  "publishedMonthFrom": 0,
  "publishedDayFrom": 0,
  "publishedYearTo": 0,
  "publishedMonthTo": 0,
  "publishedDayTo": 0,
  "numberOfPages": 0,
  "yearFrom": 0,
  "yearTo": 0
}
```

Base comic strip, returned in search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Comic strip unique ID|
|title|string|true|none|Comic strip title|
|periodical|string|false|none|Title of the periodical the comic strip was published in|
|publishedYearFrom|integer|false|none|Year from which the comic strip was published|
|publishedMonthFrom|integer|false|none|Month from which the comic strip was published|
|publishedDayFrom|integer|false|none|Day from which the comic strip was published|
|publishedYearTo|integer|false|none|Year to which the comic strip was published|
|publishedMonthTo|integer|false|none|Month to which the comic strip was published|
|publishedDayTo|integer|false|none|Day to which the comic strip was published|
|numberOfPages|integer|false|none|Number of pages|
|yearFrom|integer|false|none|Starting year of comic strip story|
|yearTo|integer|false|none|Ending year of comic strip story|

<h2 id="tocS_ComicStripFull">ComicStripFull</h2>
<!-- backwards compatibility -->
<a id="schemacomicstripfull"></a>
<a id="schema_ComicStripFull"></a>
<a id="tocScomicstripfull"></a>
<a id="tocscomicstripfull"></a>

```json
{
  "uid": "string",
  "title": "string",
  "periodical": "string",
  "publishedYearFrom": 0,
  "publishedMonthFrom": 0,
  "publishedDayFrom": 0,
  "publishedYearTo": 0,
  "publishedMonthTo": 0,
  "publishedDayTo": 0,
  "numberOfPages": 0,
  "yearFrom": 0,
  "yearTo": 0,
  "comicSeries": [
    {
      "uid": "string",
      "title": "string",
      "publishedYearFrom": 0,
      "publishedMonthFrom": 0,
      "publishedDayFrom": 0,
      "publishedYearTo": 0,
      "publishedMonthTo": 0,
      "publishedDayTo": 0,
      "numberOfIssues": 0,
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "miniseries": true,
      "photonovelSeries": true
    }
  ],
  "writers": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "artDepartment": true,
      "artDirector": true,
      "productionDesigner": true,
      "cameraAndElectricalDepartment": true,
      "cinematographer": true,
      "castingDepartment": true,
      "costumeDepartment": true,
      "costumeDesigner": true,
      "director": true,
      "assistantOrSecondUnitDirector": true,
      "exhibitAndAttractionStaff": true,
      "filmEditor": true,
      "linguist": true,
      "locationStaff": true,
      "makeupStaff": true,
      "musicDepartment": true,
      "composer": true,
      "personalAssistant": true,
      "producer": true,
      "productionAssociate": true,
      "productionStaff": true,
      "publicationStaff": true,
      "scienceConsultant": true,
      "soundDepartment": true,
      "specialAndVisualEffectsStaff": true,
      "author": true,
      "audioAuthor": true,
      "calendarArtist": true,
      "comicArtist": true,
      "comicAuthor": true,
      "comicColorArtist": true,
      "comicInteriorArtist": true,
      "comicInkArtist": true,
      "comicPencilArtist": true,
      "comicLetterArtist": true,
      "comicStripArtist": true,
      "gameArtist": true,
      "gameAuthor": true,
      "novelArtist": true,
      "novelAuthor": true,
      "referenceArtist": true,
      "referenceAuthor": true,
      "publicationArtist": true,
      "publicationDesigner": true,
      "publicationEditor": true,
      "publicityArtist": true,
      "cbsDigitalStaff": true,
      "ilmProductionStaff": true,
      "specialFeaturesStaff": true,
      "storyEditor": true,
      "studioExecutive": true,
      "stuntDepartment": true,
      "transportationDepartment": true,
      "videoGameProductionStaff": true,
      "writer": true
    }
  ],
  "artists": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "artDepartment": true,
      "artDirector": true,
      "productionDesigner": true,
      "cameraAndElectricalDepartment": true,
      "cinematographer": true,
      "castingDepartment": true,
      "costumeDepartment": true,
      "costumeDesigner": true,
      "director": true,
      "assistantOrSecondUnitDirector": true,
      "exhibitAndAttractionStaff": true,
      "filmEditor": true,
      "linguist": true,
      "locationStaff": true,
      "makeupStaff": true,
      "musicDepartment": true,
      "composer": true,
      "personalAssistant": true,
      "producer": true,
      "productionAssociate": true,
      "productionStaff": true,
      "publicationStaff": true,
      "scienceConsultant": true,
      "soundDepartment": true,
      "specialAndVisualEffectsStaff": true,
      "author": true,
      "audioAuthor": true,
      "calendarArtist": true,
      "comicArtist": true,
      "comicAuthor": true,
      "comicColorArtist": true,
      "comicInteriorArtist": true,
      "comicInkArtist": true,
      "comicPencilArtist": true,
      "comicLetterArtist": true,
      "comicStripArtist": true,
      "gameArtist": true,
      "gameAuthor": true,
      "novelArtist": true,
      "novelAuthor": true,
      "referenceArtist": true,
      "referenceAuthor": true,
      "publicationArtist": true,
      "publicationDesigner": true,
      "publicationEditor": true,
      "publicityArtist": true,
      "cbsDigitalStaff": true,
      "ilmProductionStaff": true,
      "specialFeaturesStaff": true,
      "storyEditor": true,
      "studioExecutive": true,
      "stuntDepartment": true,
      "transportationDepartment": true,
      "videoGameProductionStaff": true,
      "writer": true
    }
  ],
  "characters": [
    {
      "uid": "string",
      "name": "string",
      "gender": "F",
      "yearOfBirth": 0,
      "monthOfBirth": 0,
      "dayOfBirth": 0,
      "placeOfBirth": "string",
      "yearOfDeath": 0,
      "monthOfDeath": 0,
      "dayOfDeath": 0,
      "placeOfDeath": "string",
      "height": 0,
      "weight": 0,
      "deceased": true,
      "bloodType": "B_NEGATIVE",
      "maritalStatus": "SINGLE",
      "serialNumber": "string",
      "hologramActivationDate": "string",
      "hologramStatus": "string",
      "hologramDateStatus": "string",
      "hologram": true,
      "fictionalCharacter": true,
      "mirror": true,
      "alternateReality": true
    }
  ]
}
```

Full comic strip, returned when queried using UID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Comic strip unique ID|
|title|string|true|none|Comic strip title|
|periodical|string|false|none|Title of the periodical the comic strip was published in|
|publishedYearFrom|integer|false|none|Year from which the comic strip was published|
|publishedMonthFrom|integer|false|none|Month from which the comic strip was published|
|publishedDayFrom|integer|false|none|Day from which the comic strip was published|
|publishedYearTo|integer|false|none|Year to which the comic strip was published|
|publishedMonthTo|integer|false|none|Month to which the comic strip was published|
|publishedDayTo|integer|false|none|Day to which the comic strip was published|
|numberOfPages|integer|false|none|Number of pages|
|yearFrom|integer|false|none|Starting year of comic strip stories|
|yearTo|integer|false|none|Ending year of comic strip stories|
|comicSeries|[[ComicSeriesBase](#schemacomicseriesbase)]|false|none|Comic series this comic strip is included in|
|writers|[[StaffBase](#schemastaffbase)]|false|none|Writers involved in the comic strip|
|artists|[[StaffBase](#schemastaffbase)]|false|none|Artists involved in the comic strip|
|characters|[[CharacterBase](#schemacharacterbase)]|false|none|Characters appearing in the comic strip|

<h2 id="tocS_ComicStripBaseResponse">ComicStripBaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemacomicstripbaseresponse"></a>
<a id="schema_ComicStripBaseResponse"></a>
<a id="tocScomicstripbaseresponse"></a>
<a id="tocscomicstripbaseresponse"></a>

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "comicStrips": [
    {
      "uid": "string",
      "title": "string",
      "periodical": "string",
      "publishedYearFrom": 0,
      "publishedMonthFrom": 0,
      "publishedDayFrom": 0,
      "publishedYearTo": 0,
      "publishedMonthTo": 0,
      "publishedDayTo": 0,
      "numberOfPages": 0,
      "yearFrom": 0,
      "yearTo": 0
    }
  ]
}
```

Response object for comic strip search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|[ResponsePage](#schemaresponsepage)|false|none|Object describing response page|
|sort|[ResponseSort](#schemaresponsesort)|false|none|Response sort|
|comicStrips|[[ComicStripBase](#schemacomicstripbase)]|false|none|List of comic strips matching given criteria|

<h2 id="tocS_ComicStripFullResponse">ComicStripFullResponse</h2>
<!-- backwards compatibility -->
<a id="schemacomicstripfullresponse"></a>
<a id="schema_ComicStripFullResponse"></a>
<a id="tocScomicstripfullresponse"></a>
<a id="tocscomicstripfullresponse"></a>

```json
{
  "comicStrip": {
    "uid": "string",
    "title": "string",
    "periodical": "string",
    "publishedYearFrom": 0,
    "publishedMonthFrom": 0,
    "publishedDayFrom": 0,
    "publishedYearTo": 0,
    "publishedMonthTo": 0,
    "publishedDayTo": 0,
    "numberOfPages": 0,
    "yearFrom": 0,
    "yearTo": 0,
    "comicSeries": [
      {
        "uid": "string",
        "title": "string",
        "publishedYearFrom": 0,
        "publishedMonthFrom": 0,
        "publishedDayFrom": 0,
        "publishedYearTo": 0,
        "publishedMonthTo": 0,
        "publishedDayTo": 0,
        "numberOfIssues": 0,
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "miniseries": true,
        "photonovelSeries": true
      }
    ],
    "writers": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "artists": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "characters": [
      {
        "uid": "string",
        "name": "string",
        "gender": "F",
        "yearOfBirth": 0,
        "monthOfBirth": 0,
        "dayOfBirth": 0,
        "placeOfBirth": "string",
        "yearOfDeath": 0,
        "monthOfDeath": 0,
        "dayOfDeath": 0,
        "placeOfDeath": "string",
        "height": 0,
        "weight": 0,
        "deceased": true,
        "bloodType": "B_NEGATIVE",
        "maritalStatus": "SINGLE",
        "serialNumber": "string",
        "hologramActivationDate": "string",
        "hologramStatus": "string",
        "hologramDateStatus": "string",
        "hologram": true,
        "fictionalCharacter": true,
        "mirror": true,
        "alternateReality": true
      }
    ]
  }
}
```

Response object for single comic strip query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comicStrip|[ComicStripFull](#schemacomicstripfull)|false|none|Full comic strip, returned when queried using UID|

<h2 id="tocS_CompanyBase">CompanyBase</h2>
<!-- backwards compatibility -->
<a id="schemacompanybase"></a>
<a id="schema_CompanyBase"></a>
<a id="tocScompanybase"></a>
<a id="tocscompanybase"></a>

```json
{
  "uid": "string",
  "name": "string",
  "broadcaster": true,
  "collectibleCompany": true,
  "conglomerate": true,
  "digitalVisualEffectsCompany": true,
  "distributor": true,
  "gameCompany": true,
  "filmEquipmentCompany": true,
  "makeUpEffectsStudio": true,
  "mattePaintingCompany": true,
  "modelAndMiniatureEffectsCompany": true,
  "postProductionCompany": true,
  "productionCompany": true,
  "propCompany": true,
  "recordLabel": true,
  "specialEffectsCompany": true,
  "tvAndFilmProductionCompany": true,
  "videoGameCompany": true
}
```

Base company, returned in search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Company unique ID|
|name|string|true|none|Company name|
|broadcaster|boolean|false|none|Whether it's a broadcaster|
|collectibleCompany|boolean|false|none|Whether it's a collectible company|
|conglomerate|boolean|false|none|Whether it's a conglomerate|
|digitalVisualEffectsCompany|boolean|false|none|Whether it's a digital visual effects company|
|distributor|boolean|false|none|Whether it's a distributor|
|gameCompany|boolean|false|none|Whether it's a game company|
|filmEquipmentCompany|boolean|false|none|Whether it's a film equipment company|
|makeUpEffectsStudio|boolean|false|none|Whether it's a make-up effects studio|
|mattePaintingCompany|boolean|false|none|Whether it's a matte painting company|
|modelAndMiniatureEffectsCompany|boolean|false|none|Whether it's a model and miniature effects company|
|postProductionCompany|boolean|false|none|Whether it's a post-production company|
|productionCompany|boolean|false|none|Whether it's a production company|
|propCompany|boolean|false|none|Whether it's a prop company|
|recordLabel|boolean|false|none|Whether it's a record label|
|specialEffectsCompany|boolean|false|none|Whether it's a special effects company|
|tvAndFilmProductionCompany|boolean|false|none|Whether it's a TV and film production company|
|videoGameCompany|boolean|false|none|Whether it's a video game company|

<h2 id="tocS_CompanyFull">CompanyFull</h2>
<!-- backwards compatibility -->
<a id="schemacompanyfull"></a>
<a id="schema_CompanyFull"></a>
<a id="tocScompanyfull"></a>
<a id="tocscompanyfull"></a>

```json
{
  "uid": "string",
  "name": "string",
  "broadcaster": true,
  "collectibleCompany": true,
  "conglomerate": true,
  "digitalVisualEffectsCompany": true,
  "distributor": true,
  "gameCompany": true,
  "filmEquipmentCompany": true,
  "makeUpEffectsStudio": true,
  "mattePaintingCompany": true,
  "modelAndMiniatureEffectsCompany": true,
  "postProductionCompany": true,
  "productionCompany": true,
  "propCompany": true,
  "recordLabel": true,
  "specialEffectsCompany": true,
  "tvAndFilmProductionCompany": true,
  "videoGameCompany": true
}
```

Full company, returned when queried using UID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Company unique ID|
|name|string|true|none|Company name|
|broadcaster|boolean|false|none|Whether it's a broadcaster|
|collectibleCompany|boolean|false|none|Whether it's a collectible company|
|conglomerate|boolean|false|none|Whether it's a conglomerate|
|digitalVisualEffectsCompany|boolean|false|none|Whether it's a digital visual effects company|
|distributor|boolean|false|none|Whether it's a distributor|
|gameCompany|boolean|false|none|Whether it's a game company|
|filmEquipmentCompany|boolean|false|none|Whether it's a film equipment company|
|makeUpEffectsStudio|boolean|false|none|Whether it's a make-up effects studio|
|mattePaintingCompany|boolean|false|none|Whether it's a matte painting company|
|modelAndMiniatureEffectsCompany|boolean|false|none|Whether it's a model and miniature effects company|
|postProductionCompany|boolean|false|none|Whether it's a post-production company|
|productionCompany|boolean|false|none|Whether it's a production company|
|propCompany|boolean|false|none|Whether it's a prop company|
|recordLabel|boolean|false|none|Whether it's a record label|
|specialEffectsCompany|boolean|false|none|Whether it's a special effects company|
|tvAndFilmProductionCompany|boolean|false|none|Whether it's a TV and film production company|
|videoGameCompany|boolean|false|none|Whether it's a video game company|

<h2 id="tocS_CompanyHeader">CompanyHeader</h2>
<!-- backwards compatibility -->
<a id="schemacompanyheader"></a>
<a id="schema_CompanyHeader"></a>
<a id="tocScompanyheader"></a>
<a id="tocscompanyheader"></a>

```json
{
  "uid": "string",
  "name": "string"
}
```

Header company, embedded in other objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Company unique ID|
|name|string|true|none|Company title|

<h2 id="tocS_CompanyBaseResponse">CompanyBaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemacompanybaseresponse"></a>
<a id="schema_CompanyBaseResponse"></a>
<a id="tocScompanybaseresponse"></a>
<a id="tocscompanybaseresponse"></a>

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "companies": [
    {
      "uid": "string",
      "name": "string",
      "broadcaster": true,
      "collectibleCompany": true,
      "conglomerate": true,
      "digitalVisualEffectsCompany": true,
      "distributor": true,
      "gameCompany": true,
      "filmEquipmentCompany": true,
      "makeUpEffectsStudio": true,
      "mattePaintingCompany": true,
      "modelAndMiniatureEffectsCompany": true,
      "postProductionCompany": true,
      "productionCompany": true,
      "propCompany": true,
      "recordLabel": true,
      "specialEffectsCompany": true,
      "tvAndFilmProductionCompany": true,
      "videoGameCompany": true
    }
  ]
}
```

Response object for companies search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|[ResponsePage](#schemaresponsepage)|false|none|Object describing response page|
|sort|[ResponseSort](#schemaresponsesort)|false|none|Response sort|
|companies|[[CompanyBase](#schemacompanybase)]|false|none|List of companies matching given criteria|

<h2 id="tocS_CompanyFullResponse">CompanyFullResponse</h2>
<!-- backwards compatibility -->
<a id="schemacompanyfullresponse"></a>
<a id="schema_CompanyFullResponse"></a>
<a id="tocScompanyfullresponse"></a>
<a id="tocscompanyfullresponse"></a>

```json
{
  "company": {
    "uid": "string",
    "name": "string",
    "broadcaster": true,
    "collectibleCompany": true,
    "conglomerate": true,
    "digitalVisualEffectsCompany": true,
    "distributor": true,
    "gameCompany": true,
    "filmEquipmentCompany": true,
    "makeUpEffectsStudio": true,
    "mattePaintingCompany": true,
    "modelAndMiniatureEffectsCompany": true,
    "postProductionCompany": true,
    "productionCompany": true,
    "propCompany": true,
    "recordLabel": true,
    "specialEffectsCompany": true,
    "tvAndFilmProductionCompany": true,
    "videoGameCompany": true
  }
}
```

Response object for single company query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company|[CompanyFull](#schemacompanyfull)|false|none|Full company, returned when queried using UID|

<h2 id="tocS_ConflictBase">ConflictBase</h2>
<!-- backwards compatibility -->
<a id="schemaconflictbase"></a>
<a id="schema_ConflictBase"></a>
<a id="tocSconflictbase"></a>
<a id="tocsconflictbase"></a>

```json
{
  "uid": "string",
  "name": "string",
  "yearFrom": 0,
  "yearTo": 0,
  "earthConflict": true,
  "federationWar": true,
  "klingonWar": true,
  "dominionWarBattle": true,
  "alternateReality": true
}
```

Base conflict, returned in search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Conflict unique ID|
|name|string|true|none|Conflict name|
|yearFrom|integer|false|none|Starting year of the conflict|
|yearTo|integer|false|none|Ending year of the conflict|
|earthConflict|boolean|false|none|Whether it was an Earth conflict|
|federationWar|boolean|false|none|Whether this conflict is part of war involving Federation|
|klingonWar|boolean|false|none|Whether this conflict is part of war involving the Klingons|
|dominionWarBattle|boolean|false|none|Whether this conflict is a Dominion war battle|
|alternateReality|boolean|false|none|Whether this conflict is from alternate reality|

<h2 id="tocS_ConflictFull">ConflictFull</h2>
<!-- backwards compatibility -->
<a id="schemaconflictfull"></a>
<a id="schema_ConflictFull"></a>
<a id="tocSconflictfull"></a>
<a id="tocsconflictfull"></a>

```json
{
  "uid": "string",
  "name": "string",
  "yearFrom": 0,
  "yearTo": 0,
  "earthConflict": true,
  "federationWar": true,
  "klingonWar": true,
  "dominionWarBattle": true,
  "alternateReality": true,
  "locations": [
    {
      "uid": "string",
      "name": "string",
      "earthlyLocation": true,
      "fictionalLocation": true,
      "religiousLocation": true,
      "geographicalLocation": true,
      "bodyOfWater": true,
      "country": true,
      "subnationalEntity": true,
      "settlement": true,
      "usSettlement": true,
      "bajoranSettlement": true,
      "colony": true,
      "landform": true,
      "landmark": true,
      "road": true,
      "structure": true,
      "shipyard": true,
      "buildingInterior": true,
      "establishment": true,
      "medicalEstablishment": true,
      "ds9Establishment": true,
      "school": true,
      "mirror": true,
      "alternateReality": true
    }
  ],
  "firstSideBelligerents": [
    {
      "uid": "string",
      "name": "string",
      "government": true,
      "intergovernmentalOrganization": true,
      "researchOrganization": true,
      "sportOrganization": true,
      "medicalOrganization": true,
      "militaryOrganization": true,
      "militaryUnit": true,
      "governmentAgency": true,
      "lawEnforcementAgency": true,
      "prisonOrPenalColony": true,
      "mirror": true,
      "alternateReality": true
    }
  ],
  "firstSideCommanders": [
    {
      "uid": "string",
      "name": "string",
      "gender": "F",
      "yearOfBirth": 0,
      "monthOfBirth": 0,
      "dayOfBirth": 0,
      "placeOfBirth": "string",
      "yearOfDeath": 0,
      "monthOfDeath": 0,
      "dayOfDeath": 0,
      "placeOfDeath": "string",
      "height": 0,
      "weight": 0,
      "deceased": true,
      "bloodType": "B_NEGATIVE",
      "maritalStatus": "SINGLE",
      "serialNumber": "string",
      "hologramActivationDate": "string",
      "hologramStatus": "string",
      "hologramDateStatus": "string",
      "hologram": true,
      "fictionalCharacter": true,
      "mirror": true,
      "alternateReality": true
    }
  ],
  "secondSideBelligerents": [
    {
      "uid": "string",
      "name": "string",
      "government": true,
      "intergovernmentalOrganization": true,
      "researchOrganization": true,
      "sportOrganization": true,
      "medicalOrganization": true,
      "militaryOrganization": true,
      "militaryUnit": true,
      "governmentAgency": true,
      "lawEnforcementAgency": true,
      "prisonOrPenalColony": true,
      "mirror": true,
      "alternateReality": true
    }
  ],
  "secondSideCommanders": [
    {
      "uid": "string",
      "name": "string",
      "gender": "F",
      "yearOfBirth": 0,
      "monthOfBirth": 0,
      "dayOfBirth": 0,
      "placeOfBirth": "string",
      "yearOfDeath": 0,
      "monthOfDeath": 0,
      "dayOfDeath": 0,
      "placeOfDeath": "string",
      "height": 0,
      "weight": 0,
      "deceased": true,
      "bloodType": "B_NEGATIVE",
      "maritalStatus": "SINGLE",
      "serialNumber": "string",
      "hologramActivationDate": "string",
      "hologramStatus": "string",
      "hologramDateStatus": "string",
      "hologram": true,
      "fictionalCharacter": true,
      "mirror": true,
      "alternateReality": true
    }
  ]
}
```

Base conflict, returned in search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Conflict unique ID|
|name|string|true|none|Conflict name|
|yearFrom|integer|false|none|Starting year of the conflict|
|yearTo|integer|false|none|Ending year of the conflict|
|earthConflict|boolean|false|none|Whether it is an Earth conflict|
|federationWar|boolean|false|none|Whether this conflict is a part of war involving Federation|
|klingonWar|boolean|false|none|Whether this conflict is a part of war involving the Klingons|
|dominionWarBattle|boolean|false|none|Whether this conflict is a Dominion war battle|
|alternateReality|boolean|false|none|Whether this conflict is from alternate reality|
|locations|[[LocationBase](#schemalocationbase)]|false|none|Locations this conflict occurred at|
|firstSideBelligerents|[[OrganizationBase](#schemaorganizationbase)]|false|none|Organization involved in conflict on first side|
|firstSideCommanders|[[CharacterBase](#schemacharacterbase)]|false|none|Commanders involved in conflict on first side|
|secondSideBelligerents|[[OrganizationBase](#schemaorganizationbase)]|false|none|Organization involved in conflict on second side|
|secondSideCommanders|[[CharacterBase](#schemacharacterbase)]|false|none|Commanders involved in conflict on second side|

<h2 id="tocS_ConflictHeader">ConflictHeader</h2>
<!-- backwards compatibility -->
<a id="schemaconflictheader"></a>
<a id="schema_ConflictHeader"></a>
<a id="tocSconflictheader"></a>
<a id="tocsconflictheader"></a>

```json
{
  "uid": "string",
  "name": "string"
}
```

Header conflict, embedded in other objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Conflict unique ID|
|name|string|true|none|Conflict name|

<h2 id="tocS_ConflictBaseResponse">ConflictBaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconflictbaseresponse"></a>
<a id="schema_ConflictBaseResponse"></a>
<a id="tocSconflictbaseresponse"></a>
<a id="tocsconflictbaseresponse"></a>

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "conflicts": [
    {
      "uid": "string",
      "name": "string",
      "yearFrom": 0,
      "yearTo": 0,
      "earthConflict": true,
      "federationWar": true,
      "klingonWar": true,
      "dominionWarBattle": true,
      "alternateReality": true
    }
  ]
}
```

Response object for conflicts search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|[ResponsePage](#schemaresponsepage)|false|none|Object describing response page|
|sort|[ResponseSort](#schemaresponsesort)|false|none|Response sort|
|conflicts|[[ConflictBase](#schemaconflictbase)]|false|none|List of conflicts matching given criteria|

<h2 id="tocS_ConflictFullResponse">ConflictFullResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconflictfullresponse"></a>
<a id="schema_ConflictFullResponse"></a>
<a id="tocSconflictfullresponse"></a>
<a id="tocsconflictfullresponse"></a>

```json
{
  "conflict": {
    "uid": "string",
    "name": "string",
    "yearFrom": 0,
    "yearTo": 0,
    "earthConflict": true,
    "federationWar": true,
    "klingonWar": true,
    "dominionWarBattle": true,
    "alternateReality": true,
    "locations": [
      {
        "uid": "string",
        "name": "string",
        "earthlyLocation": true,
        "fictionalLocation": true,
        "religiousLocation": true,
        "geographicalLocation": true,
        "bodyOfWater": true,
        "country": true,
        "subnationalEntity": true,
        "settlement": true,
        "usSettlement": true,
        "bajoranSettlement": true,
        "colony": true,
        "landform": true,
        "landmark": true,
        "road": true,
        "structure": true,
        "shipyard": true,
        "buildingInterior": true,
        "establishment": true,
        "medicalEstablishment": true,
        "ds9Establishment": true,
        "school": true,
        "mirror": true,
        "alternateReality": true
      }
    ],
    "firstSideBelligerents": [
      {
        "uid": "string",
        "name": "string",
        "government": true,
        "intergovernmentalOrganization": true,
        "researchOrganization": true,
        "sportOrganization": true,
        "medicalOrganization": true,
        "militaryOrganization": true,
        "militaryUnit": true,
        "governmentAgency": true,
        "lawEnforcementAgency": true,
        "prisonOrPenalColony": true,
        "mirror": true,
        "alternateReality": true
      }
    ],
    "firstSideCommanders": [
      {
        "uid": "string",
        "name": "string",
        "gender": "F",
        "yearOfBirth": 0,
        "monthOfBirth": 0,
        "dayOfBirth": 0,
        "placeOfBirth": "string",
        "yearOfDeath": 0,
        "monthOfDeath": 0,
        "dayOfDeath": 0,
        "placeOfDeath": "string",
        "height": 0,
        "weight": 0,
        "deceased": true,
        "bloodType": "B_NEGATIVE",
        "maritalStatus": "SINGLE",
        "serialNumber": "string",
        "hologramActivationDate": "string",
        "hologramStatus": "string",
        "hologramDateStatus": "string",
        "hologram": true,
        "fictionalCharacter": true,
        "mirror": true,
        "alternateReality": true
      }
    ],
    "secondSideBelligerents": [
      {
        "uid": "string",
        "name": "string",
        "government": true,
        "intergovernmentalOrganization": true,
        "researchOrganization": true,
        "sportOrganization": true,
        "medicalOrganization": true,
        "militaryOrganization": true,
        "militaryUnit": true,
        "governmentAgency": true,
        "lawEnforcementAgency": true,
        "prisonOrPenalColony": true,
        "mirror": true,
        "alternateReality": true
      }
    ],
    "secondSideCommanders": [
      {
        "uid": "string",
        "name": "string",
        "gender": "F",
        "yearOfBirth": 0,
        "monthOfBirth": 0,
        "dayOfBirth": 0,
        "placeOfBirth": "string",
        "yearOfDeath": 0,
        "monthOfDeath": 0,
        "dayOfDeath": 0,
        "placeOfDeath": "string",
        "height": 0,
        "weight": 0,
        "deceased": true,
        "bloodType": "B_NEGATIVE",
        "maritalStatus": "SINGLE",
        "serialNumber": "string",
        "hologramActivationDate": "string",
        "hologramStatus": "string",
        "hologramDateStatus": "string",
        "hologram": true,
        "fictionalCharacter": true,
        "mirror": true,
        "alternateReality": true
      }
    ]
  }
}
```

Response object for single conflict query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conflict|[ConflictFull](#schemaconflictfull)|false|none|Base conflict, returned in search results|

<h2 id="tocS_ContentLanguage">ContentLanguage</h2>
<!-- backwards compatibility -->
<a id="schemacontentlanguage"></a>
<a id="schema_ContentLanguage"></a>
<a id="tocScontentlanguage"></a>
<a id="tocscontentlanguage"></a>

```json
{
  "uid": "string",
  "name": "string",
  "iso6391Code": "string"
}
```

Rating of video release, etc.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|false|none|Language unique ID|
|name|string|false|none|Language name|
|iso6391Code|string|false|none|ISO 639-1 code|

<h2 id="tocS_ContentRatingSystem">ContentRatingSystem</h2>
<!-- backwards compatibility -->
<a id="schemacontentratingsystem"></a>
<a id="schema_ContentRatingSystem"></a>
<a id="tocScontentratingsystem"></a>
<a id="tocscontentratingsystem"></a>

```json
"BBFC"
```

Content rating system

<h2 id="tocS_ContentRating">ContentRating</h2>
<!-- backwards compatibility -->
<a id="schemacontentrating"></a>
<a id="schema_ContentRating"></a>
<a id="tocScontentrating"></a>
<a id="tocscontentrating"></a>

```json
{
  "uid": "string",
  "contentRatingSystem": "BBFC",
  "rating": "string"
}
```

Rating of video release, etc.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|false|none|Rating unique ID|
|contentRatingSystem|[ContentRatingSystem](#schemacontentratingsystem)|false|none|Content rating system|
|rating|string|false|none|Rating within specified content rating system|

#### Enumerated Values

|Property|Value|
|---|---|
|contentRatingSystem|BBFC|
|contentRatingSystem|OFLC|
|contentRatingSystem|OFLCNZ|
|contentRatingSystem|DJCTQ|
|contentRatingSystem|MDA|
|contentRatingSystem|MPAA|
|contentRatingSystem|CHVRS|
|contentRatingSystem|RCQ|
|contentRatingSystem|IFCO|
|contentRatingSystem|FSK|
|contentRatingSystem|NICAM|
|contentRatingSystem|MCCYP|
|contentRatingSystem|EIRIN|
|contentRatingSystem|HK|
|contentRatingSystem|CBFC|
|contentRatingSystem|NMHH|
|contentRatingSystem|VRC|
|contentRatingSystem|RSAC|
|contentRatingSystem|ESRB|
|contentRatingSystem|ELSPA|
|contentRatingSystem|PEGI|
|contentRatingSystem|USK|
|contentRatingSystem|SELL|
|contentRatingSystem|ADESE|
|contentRatingSystem|GSRR|
|contentRatingSystem|ITUNES|

<h2 id="tocS_Country">Country</h2>
<!-- backwards compatibility -->
<a id="schemacountry"></a>
<a id="schema_Country"></a>
<a id="tocScountry"></a>
<a id="tocscountry"></a>

```json
{
  "uid": "string",
  "name": "string",
  "iso31661Alpha2Code": "string"
}
```

Real-world country

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|false|none|Country unique ID|
|name|string|false|none|Country name|
|iso31661Alpha2Code|string|false|none|ISO 3166-1 alpha-2 code|

<h2 id="tocS_ElementHeader">ElementHeader</h2>
<!-- backwards compatibility -->
<a id="schemaelementheader"></a>
<a id="schema_ElementHeader"></a>
<a id="tocSelementheader"></a>
<a id="tocselementheader"></a>

```json
{
  "uid": "string",
  "name": "string"
}
```

Header element, embedded in other objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Element unique ID|
|name|string|true|none|Element name|

<h2 id="tocS_ElementBase">ElementBase</h2>
<!-- backwards compatibility -->
<a id="schemaelementbase"></a>
<a id="schema_ElementBase"></a>
<a id="tocSelementbase"></a>
<a id="tocselementbase"></a>

```json
{
  "uid": "string",
  "name": "string",
  "symbol": "string",
  "atomicNumber": 0,
  "atomicWeight": 0,
  "transuranium": true,
  "gammaSeries": true,
  "hypersonicSeries": true,
  "megaSeries": true,
  "omegaSeries": true,
  "transonicSeries": true,
  "worldSeries": true
}
```

Base element, returned in search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Element unique ID|
|name|string|true|none|Element name|
|symbol|string|false|none|Element symbol|
|atomicNumber|integer|false|none|Element atomic number|
|atomicWeight|integer|false|none|Element atomic weight|
|transuranium|boolean|false|none|Whether it's a transuranium|
|gammaSeries|boolean|false|none|Whether it belongs to Gamma series|
|hypersonicSeries|boolean|false|none|Whether it belongs to Hypersonic series|
|megaSeries|boolean|false|none|Whether it belongs to Mega series|
|omegaSeries|boolean|false|none|Whether it belongs to Omega series|
|transonicSeries|boolean|false|none|Whether it belongs to Transonic series|
|worldSeries|boolean|false|none|Whether it belongs to World series|

<h2 id="tocS_ElementFull">ElementFull</h2>
<!-- backwards compatibility -->
<a id="schemaelementfull"></a>
<a id="schema_ElementFull"></a>
<a id="tocSelementfull"></a>
<a id="tocselementfull"></a>

```json
{
  "uid": "string",
  "name": "string",
  "symbol": "string",
  "atomicNumber": 0,
  "atomicWeight": 0,
  "transuranium": true,
  "gammaSeries": true,
  "hypersonicSeries": true,
  "megaSeries": true,
  "omegaSeries": true,
  "transonicSeries": true,
  "worldSeries": true
}
```

Full element, returned when queried using UID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Element unique ID|
|name|string|true|none|Element name|
|symbol|string|false|none|Element symbol|
|atomicNumber|integer|false|none|Element atomic number|
|atomicWeight|integer|false|none|Element atomic weight|
|transuranium|boolean|false|none|Whether it's a transuranium|
|gammaSeries|boolean|false|none|Whether it belongs to Gamma series|
|hypersonicSeries|boolean|false|none|Whether it belongs to Hypersonic series|
|megaSeries|boolean|false|none|Whether it belongs to Mega series|
|omegaSeries|boolean|false|none|Whether it belongs to Omega series|
|transonicSeries|boolean|false|none|Whether it belongs to Transonic series|
|worldSeries|boolean|false|none|Whether it belongs to World series|

<h2 id="tocS_ElementBaseResponse">ElementBaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemaelementbaseresponse"></a>
<a id="schema_ElementBaseResponse"></a>
<a id="tocSelementbaseresponse"></a>
<a id="tocselementbaseresponse"></a>

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "elements": [
    {
      "uid": "string",
      "name": "string",
      "symbol": "string",
      "atomicNumber": 0,
      "atomicWeight": 0,
      "transuranium": true,
      "gammaSeries": true,
      "hypersonicSeries": true,
      "megaSeries": true,
      "omegaSeries": true,
      "transonicSeries": true,
      "worldSeries": true
    }
  ]
}
```

Response object for elements search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|[ResponsePage](#schemaresponsepage)|false|none|Object describing response page|
|sort|[ResponseSort](#schemaresponsesort)|false|none|Response sort|
|elements|[[ElementBase](#schemaelementbase)]|false|none|List of elements matching given criteria|

<h2 id="tocS_ElementFullResponse">ElementFullResponse</h2>
<!-- backwards compatibility -->
<a id="schemaelementfullresponse"></a>
<a id="schema_ElementFullResponse"></a>
<a id="tocSelementfullresponse"></a>
<a id="tocselementfullresponse"></a>

```json
{
  "element": {
    "uid": "string",
    "name": "string",
    "symbol": "string",
    "atomicNumber": 0,
    "atomicWeight": 0,
    "transuranium": true,
    "gammaSeries": true,
    "hypersonicSeries": true,
    "megaSeries": true,
    "omegaSeries": true,
    "transonicSeries": true,
    "worldSeries": true
  }
}
```

Response object for single element query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|element|[ElementFull](#schemaelementfull)|false|none|Full element, returned when queried using UID|

<h2 id="tocS_EpisodeHeader">EpisodeHeader</h2>
<!-- backwards compatibility -->
<a id="schemaepisodeheader"></a>
<a id="schema_EpisodeHeader"></a>
<a id="tocSepisodeheader"></a>
<a id="tocsepisodeheader"></a>

```json
{
  "uid": "string",
  "title": "string"
}
```

Header episode, embedded in other objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Episode unique ID|
|title|string|true|none|Episode title|

<h2 id="tocS_EpisodeBase">EpisodeBase</h2>
<!-- backwards compatibility -->
<a id="schemaepisodebase"></a>
<a id="schema_EpisodeBase"></a>
<a id="tocSepisodebase"></a>
<a id="tocsepisodebase"></a>

```json
{
  "uid": "string",
  "title": "string",
  "titleGerman": "string",
  "titleItalian": "string",
  "titleJapanese": "string",
  "series": {
    "uid": "string",
    "title": "string"
  },
  "season": {
    "uid": "string",
    "title": "string"
  },
  "seasonNumber": 0,
  "episodeNumber": 0,
  "productionSerialNumber": "string",
  "featureLength": true,
  "stardateFrom": 0,
  "stardateTo": 0,
  "yearFrom": 0,
  "yearTo": 0,
  "usAirDate": "1970-01-01",
  "finalScriptDate": "1970-01-01"
}
```

Base episode, returned in search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Episode unique ID|
|title|string|true|none|Episode title|
|titleGerman|string|false|none|Episode title in German|
|titleItalian|string|false|none|Episode title in Italian|
|titleJapanese|string|false|none|Episode title in Japanese|
|series|[SeriesHeader](#schemaseriesheader)|false|none|Header series, embedded in other objects|
|season|[SeasonHeader](#schemaseasonheader)|false|none|Header season, embedded in other objects|
|seasonNumber|integer|false|none|Season number|
|episodeNumber|integer|false|none|Episode number in season|
|productionSerialNumber|string|false|none|Production serial number|
|featureLength|boolean|false|none|Whether it's a feature length episode|
|stardateFrom|number(float)|false|none|Starting stardate of episode story|
|stardateTo|number(float)|false|none|Ending stardate of episode story|
|yearFrom|integer|false|none|Starting year of episode story|
|yearTo|integer|false|none|Ending year of episode story|
|usAirDate|string(date)|false|none|Date the episode was first aired in the United States|
|finalScriptDate|string(date)|false|none|Date the episode script was completed|

<h2 id="tocS_EpisodeFull">EpisodeFull</h2>
<!-- backwards compatibility -->
<a id="schemaepisodefull"></a>
<a id="schema_EpisodeFull"></a>
<a id="tocSepisodefull"></a>
<a id="tocsepisodefull"></a>

```json
{
  "uid": "string",
  "title": "string",
  "titleGerman": "string",
  "titleItalian": "string",
  "titleJapanese": "string",
  "series": {
    "uid": "string",
    "title": "string",
    "abbreviation": "string",
    "productionStartYear": 0,
    "productionEndYear": 0,
    "originalRunStartDate": "1970-01-01",
    "originalRunEndDate": "1970-01-01",
    "seasonsCount": 0,
    "episodesCount": 0,
    "featureLengthEpisodesCount": 0,
    "productionCompany": {
      "uid": "string",
      "name": "string"
    },
    "originalBroadcaster": {
      "uid": "string",
      "name": "string"
    }
  },
  "season": {
    "uid": "string",
    "title": "string",
    "series": {
      "uid": "string",
      "title": "string"
    },
    "seasonNumber": 0,
    "numberOfEpisodes": 0
  },
  "seasonNumber": 0,
  "episodeNumber": 0,
  "productionSerialNumber": "string",
  "featureLength": true,
  "stardateFrom": 0,
  "stardateTo": 0,
  "yearFrom": 0,
  "yearTo": 0,
  "usAirDate": "1970-01-01",
  "finalScriptDate": "1970-01-01",
  "writers": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "artDepartment": true,
      "artDirector": true,
      "productionDesigner": true,
      "cameraAndElectricalDepartment": true,
      "cinematographer": true,
      "castingDepartment": true,
      "costumeDepartment": true,
      "costumeDesigner": true,
      "director": true,
      "assistantOrSecondUnitDirector": true,
      "exhibitAndAttractionStaff": true,
      "filmEditor": true,
      "linguist": true,
      "locationStaff": true,
      "makeupStaff": true,
      "musicDepartment": true,
      "composer": true,
      "personalAssistant": true,
      "producer": true,
      "productionAssociate": true,
      "productionStaff": true,
      "publicationStaff": true,
      "scienceConsultant": true,
      "soundDepartment": true,
      "specialAndVisualEffectsStaff": true,
      "author": true,
      "audioAuthor": true,
      "calendarArtist": true,
      "comicArtist": true,
      "comicAuthor": true,
      "comicColorArtist": true,
      "comicInteriorArtist": true,
      "comicInkArtist": true,
      "comicPencilArtist": true,
      "comicLetterArtist": true,
      "comicStripArtist": true,
      "gameArtist": true,
      "gameAuthor": true,
      "novelArtist": true,
      "novelAuthor": true,
      "referenceArtist": true,
      "referenceAuthor": true,
      "publicationArtist": true,
      "publicationDesigner": true,
      "publicationEditor": true,
      "publicityArtist": true,
      "cbsDigitalStaff": true,
      "ilmProductionStaff": true,
      "specialFeaturesStaff": true,
      "storyEditor": true,
      "studioExecutive": true,
      "stuntDepartment": true,
      "transportationDepartment": true,
      "videoGameProductionStaff": true,
      "writer": true
    }
  ],
  "teleplayAuthors": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "artDepartment": true,
      "artDirector": true,
      "productionDesigner": true,
      "cameraAndElectricalDepartment": true,
      "cinematographer": true,
      "castingDepartment": true,
      "costumeDepartment": true,
      "costumeDesigner": true,
      "director": true,
      "assistantOrSecondUnitDirector": true,
      "exhibitAndAttractionStaff": true,
      "filmEditor": true,
      "linguist": true,
      "locationStaff": true,
      "makeupStaff": true,
      "musicDepartment": true,
      "composer": true,
      "personalAssistant": true,
      "producer": true,
      "productionAssociate": true,
      "productionStaff": true,
      "publicationStaff": true,
      "scienceConsultant": true,
      "soundDepartment": true,
      "specialAndVisualEffectsStaff": true,
      "author": true,
      "audioAuthor": true,
      "calendarArtist": true,
      "comicArtist": true,
      "comicAuthor": true,
      "comicColorArtist": true,
      "comicInteriorArtist": true,
      "comicInkArtist": true,
      "comicPencilArtist": true,
      "comicLetterArtist": true,
      "comicStripArtist": true,
      "gameArtist": true,
      "gameAuthor": true,
      "novelArtist": true,
      "novelAuthor": true,
      "referenceArtist": true,
      "referenceAuthor": true,
      "publicationArtist": true,
      "publicationDesigner": true,
      "publicationEditor": true,
      "publicityArtist": true,
      "cbsDigitalStaff": true,
      "ilmProductionStaff": true,
      "specialFeaturesStaff": true,
      "storyEditor": true,
      "studioExecutive": true,
      "stuntDepartment": true,
      "transportationDepartment": true,
      "videoGameProductionStaff": true,
      "writer": true
    }
  ],
  "storyAuthors": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "artDepartment": true,
      "artDirector": true,
      "productionDesigner": true,
      "cameraAndElectricalDepartment": true,
      "cinematographer": true,
      "castingDepartment": true,
      "costumeDepartment": true,
      "costumeDesigner": true,
      "director": true,
      "assistantOrSecondUnitDirector": true,
      "exhibitAndAttractionStaff": true,
      "filmEditor": true,
      "linguist": true,
      "locationStaff": true,
      "makeupStaff": true,
      "musicDepartment": true,
      "composer": true,
      "personalAssistant": true,
      "producer": true,
      "productionAssociate": true,
      "productionStaff": true,
      "publicationStaff": true,
      "scienceConsultant": true,
      "soundDepartment": true,
      "specialAndVisualEffectsStaff": true,
      "author": true,
      "audioAuthor": true,
      "calendarArtist": true,
      "comicArtist": true,
      "comicAuthor": true,
      "comicColorArtist": true,
      "comicInteriorArtist": true,
      "comicInkArtist": true,
      "comicPencilArtist": true,
      "comicLetterArtist": true,
      "comicStripArtist": true,
      "gameArtist": true,
      "gameAuthor": true,
      "novelArtist": true,
      "novelAuthor": true,
      "referenceArtist": true,
      "referenceAuthor": true,
      "publicationArtist": true,
      "publicationDesigner": true,
      "publicationEditor": true,
      "publicityArtist": true,
      "cbsDigitalStaff": true,
      "ilmProductionStaff": true,
      "specialFeaturesStaff": true,
      "storyEditor": true,
      "studioExecutive": true,
      "stuntDepartment": true,
      "transportationDepartment": true,
      "videoGameProductionStaff": true,
      "writer": true
    }
  ],
  "directors": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "artDepartment": true,
      "artDirector": true,
      "productionDesigner": true,
      "cameraAndElectricalDepartment": true,
      "cinematographer": true,
      "castingDepartment": true,
      "costumeDepartment": true,
      "costumeDesigner": true,
      "director": true,
      "assistantOrSecondUnitDirector": true,
      "exhibitAndAttractionStaff": true,
      "filmEditor": true,
      "linguist": true,
      "locationStaff": true,
      "makeupStaff": true,
      "musicDepartment": true,
      "composer": true,
      "personalAssistant": true,
      "producer": true,
      "productionAssociate": true,
      "productionStaff": true,
      "publicationStaff": true,
      "scienceConsultant": true,
      "soundDepartment": true,
      "specialAndVisualEffectsStaff": true,
      "author": true,
      "audioAuthor": true,
      "calendarArtist": true,
      "comicArtist": true,
      "comicAuthor": true,
      "comicColorArtist": true,
      "comicInteriorArtist": true,
      "comicInkArtist": true,
      "comicPencilArtist": true,
      "comicLetterArtist": true,
      "comicStripArtist": true,
      "gameArtist": true,
      "gameAuthor": true,
      "novelArtist": true,
      "novelAuthor": true,
      "referenceArtist": true,
      "referenceAuthor": true,
      "publicationArtist": true,
      "publicationDesigner": true,
      "publicationEditor": true,
      "publicityArtist": true,
      "cbsDigitalStaff": true,
      "ilmProductionStaff": true,
      "specialFeaturesStaff": true,
      "storyEditor": true,
      "studioExecutive": true,
      "stuntDepartment": true,
      "transportationDepartment": true,
      "videoGameProductionStaff": true,
      "writer": true
    }
  ],
  "performers": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "animalPerformer": true,
      "disPerformer": true,
      "ds9Performer": true,
      "entPerformer": true,
      "filmPerformer": true,
      "standInPerformer": true,
      "stuntPerformer": true,
      "tasPerformer": true,
      "tngPerformer": true,
      "tosPerformer": true,
      "videoGamePerformer": true,
      "voicePerformer": true,
      "voyPerformer": true
    }
  ],
  "stuntPerformers": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "animalPerformer": true,
      "disPerformer": true,
      "ds9Performer": true,
      "entPerformer": true,
      "filmPerformer": true,
      "standInPerformer": true,
      "stuntPerformer": true,
      "tasPerformer": true,
      "tngPerformer": true,
      "tosPerformer": true,
      "videoGamePerformer": true,
      "voicePerformer": true,
      "voyPerformer": true
    }
  ],
  "standInPerformers": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "animalPerformer": true,
      "disPerformer": true,
      "ds9Performer": true,
      "entPerformer": true,
      "filmPerformer": true,
      "standInPerformer": true,
      "stuntPerformer": true,
      "tasPerformer": true,
      "tngPerformer": true,
      "tosPerformer": true,
      "videoGamePerformer": true,
      "voicePerformer": true,
      "voyPerformer": true
    }
  ],
  "characters": [
    {
      "uid": "string",
      "name": "string",
      "gender": "F",
      "yearOfBirth": 0,
      "monthOfBirth": 0,
      "dayOfBirth": 0,
      "placeOfBirth": "string",
      "yearOfDeath": 0,
      "monthOfDeath": 0,
      "dayOfDeath": 0,
      "placeOfDeath": "string",
      "height": 0,
      "weight": 0,
      "deceased": true,
      "bloodType": "B_NEGATIVE",
      "maritalStatus": "SINGLE",
      "serialNumber": "string",
      "hologramActivationDate": "string",
      "hologramStatus": "string",
      "hologramDateStatus": "string",
      "hologram": true,
      "fictionalCharacter": true,
      "mirror": true,
      "alternateReality": true
    }
  ]
}
```

Full episode, returned when queried using UID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Episode unique ID|
|title|string|true|none|Episode title|
|titleGerman|string|false|none|Episode title in German|
|titleItalian|string|false|none|Episode title in Italian|
|titleJapanese|string|false|none|Episode title in Japanese|
|series|[SeriesBase](#schemaseriesbase)|false|none|Base series, returned in search results|
|season|[SeasonBase](#schemaseasonbase)|false|none|Base season, returned in search results|
|seasonNumber|integer|false|none|Season number|
|episodeNumber|integer|false|none|Episode number in season|
|productionSerialNumber|string|false|none|Production serial number|
|featureLength|boolean|false|none|Whether it's a feature length episode|
|stardateFrom|number(float)|false|none|Starting stardate of episode story|
|stardateTo|number(float)|false|none|Ending stardate of episode story|
|yearFrom|integer|false|none|Starting year of episode story|
|yearTo|integer|false|none|Ending year of episode story|
|usAirDate|string(date)|false|none|Date the episode was first aired in the United States|
|finalScriptDate|string(date)|false|none|Date the episode script was completed|
|writers|[[StaffBase](#schemastaffbase)]|false|none|Writers involved in the episode|
|teleplayAuthors|[[StaffBase](#schemastaffbase)]|false|none|Teleplay authors involved in the episode|
|storyAuthors|[[StaffBase](#schemastaffbase)]|false|none|Story authors involved in the episode|
|directors|[[StaffBase](#schemastaffbase)]|false|none|Directors authors involved in the episode|
|performers|[[PerformerBase](#schemaperformerbase)]|false|none|Performers appearing in the episode|
|stuntPerformers|[[PerformerBase](#schemaperformerbase)]|false|none|Stunt performers appearing in the episode|
|standInPerformers|[[PerformerBase](#schemaperformerbase)]|false|none|Stand-in performers appearing in the episode|
|characters|[[CharacterBase](#schemacharacterbase)]|false|none|Characters appearing in the episode|

<h2 id="tocS_EpisodeBaseResponse">EpisodeBaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemaepisodebaseresponse"></a>
<a id="schema_EpisodeBaseResponse"></a>
<a id="tocSepisodebaseresponse"></a>
<a id="tocsepisodebaseresponse"></a>

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "episodes": [
    {
      "uid": "string",
      "title": "string",
      "titleGerman": "string",
      "titleItalian": "string",
      "titleJapanese": "string",
      "series": {
        "uid": "string",
        "title": "string"
      },
      "season": {
        "uid": "string",
        "title": "string"
      },
      "seasonNumber": 0,
      "episodeNumber": 0,
      "productionSerialNumber": "string",
      "featureLength": true,
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "usAirDate": "1970-01-01",
      "finalScriptDate": "1970-01-01"
    }
  ]
}
```

Response object for episodes search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|[ResponsePage](#schemaresponsepage)|false|none|Object describing response page|
|sort|[ResponseSort](#schemaresponsesort)|false|none|Response sort|
|episodes|[[EpisodeBase](#schemaepisodebase)]|false|none|List of episodes matching given criteria|

<h2 id="tocS_EpisodeFullResponse">EpisodeFullResponse</h2>
<!-- backwards compatibility -->
<a id="schemaepisodefullresponse"></a>
<a id="schema_EpisodeFullResponse"></a>
<a id="tocSepisodefullresponse"></a>
<a id="tocsepisodefullresponse"></a>

```json
{
  "episode": {
    "uid": "string",
    "title": "string",
    "titleGerman": "string",
    "titleItalian": "string",
    "titleJapanese": "string",
    "series": {
      "uid": "string",
      "title": "string",
      "abbreviation": "string",
      "productionStartYear": 0,
      "productionEndYear": 0,
      "originalRunStartDate": "1970-01-01",
      "originalRunEndDate": "1970-01-01",
      "seasonsCount": 0,
      "episodesCount": 0,
      "featureLengthEpisodesCount": 0,
      "productionCompany": {
        "uid": "string",
        "name": "string"
      },
      "originalBroadcaster": {
        "uid": "string",
        "name": "string"
      }
    },
    "season": {
      "uid": "string",
      "title": "string",
      "series": {
        "uid": "string",
        "title": "string"
      },
      "seasonNumber": 0,
      "numberOfEpisodes": 0
    },
    "seasonNumber": 0,
    "episodeNumber": 0,
    "productionSerialNumber": "string",
    "featureLength": true,
    "stardateFrom": 0,
    "stardateTo": 0,
    "yearFrom": 0,
    "yearTo": 0,
    "usAirDate": "1970-01-01",
    "finalScriptDate": "1970-01-01",
    "writers": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "teleplayAuthors": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "storyAuthors": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "directors": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "performers": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "animalPerformer": true,
        "disPerformer": true,
        "ds9Performer": true,
        "entPerformer": true,
        "filmPerformer": true,
        "standInPerformer": true,
        "stuntPerformer": true,
        "tasPerformer": true,
        "tngPerformer": true,
        "tosPerformer": true,
        "videoGamePerformer": true,
        "voicePerformer": true,
        "voyPerformer": true
      }
    ],
    "stuntPerformers": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "animalPerformer": true,
        "disPerformer": true,
        "ds9Performer": true,
        "entPerformer": true,
        "filmPerformer": true,
        "standInPerformer": true,
        "stuntPerformer": true,
        "tasPerformer": true,
        "tngPerformer": true,
        "tosPerformer": true,
        "videoGamePerformer": true,
        "voicePerformer": true,
        "voyPerformer": true
      }
    ],
    "standInPerformers": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "animalPerformer": true,
        "disPerformer": true,
        "ds9Performer": true,
        "entPerformer": true,
        "filmPerformer": true,
        "standInPerformer": true,
        "stuntPerformer": true,
        "tasPerformer": true,
        "tngPerformer": true,
        "tosPerformer": true,
        "videoGamePerformer": true,
        "voicePerformer": true,
        "voyPerformer": true
      }
    ],
    "characters": [
      {
        "uid": "string",
        "name": "string",
        "gender": "F",
        "yearOfBirth": 0,
        "monthOfBirth": 0,
        "dayOfBirth": 0,
        "placeOfBirth": "string",
        "yearOfDeath": 0,
        "monthOfDeath": 0,
        "dayOfDeath": 0,
        "placeOfDeath": "string",
        "height": 0,
        "weight": 0,
        "deceased": true,
        "bloodType": "B_NEGATIVE",
        "maritalStatus": "SINGLE",
        "serialNumber": "string",
        "hologramActivationDate": "string",
        "hologramStatus": "string",
        "hologramDateStatus": "string",
        "hologram": true,
        "fictionalCharacter": true,
        "mirror": true,
        "alternateReality": true
      }
    ]
  }
}
```

Response object for single episode query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|episode|[EpisodeFull](#schemaepisodefull)|false|none|Full episode, returned when queried using UID|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "code": "string",
  "message": "string"
}
```

Error object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|Error code|
|message|string|false|none|Error message|

<h2 id="tocS_FoodHeader">FoodHeader</h2>
<!-- backwards compatibility -->
<a id="schemafoodheader"></a>
<a id="schema_FoodHeader"></a>
<a id="tocSfoodheader"></a>
<a id="tocsfoodheader"></a>

```json
{
  "uid": "string",
  "name": "string"
}
```

Header food, embedded in other objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Food unique ID|
|name|string|true|none|Food name|

<h2 id="tocS_FoodBase">FoodBase</h2>
<!-- backwards compatibility -->
<a id="schemafoodbase"></a>
<a id="schema_FoodBase"></a>
<a id="tocSfoodbase"></a>
<a id="tocsfoodbase"></a>

```json
{
  "uid": "string",
  "name": "string",
  "earthlyOrigin": true,
  "dessert": true,
  "fruit": true,
  "herbOrSpice": true,
  "sauce": true,
  "soup": true,
  "beverage": true,
  "alcoholicBeverage": true,
  "juice": true,
  "tea": true
}
```

Base food, returned in search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Food unique ID|
|name|string|true|none|Food name|
|earthlyOrigin|boolean|false|none|Whether it's of earthly origin|
|dessert|boolean|false|none|Whether it's a dessert|
|fruit|boolean|false|none|Whether it's a fruit|
|herbOrSpice|boolean|false|none|Whether it's a herb or a spice|
|sauce|boolean|false|none|Whether it's a sauce|
|soup|boolean|false|none|Whether it's a soup|
|beverage|boolean|false|none|Whether it's a beverage|
|alcoholicBeverage|boolean|false|none|Whether it's an alcoholic beverage|
|juice|boolean|false|none|Whether it's a juice|
|tea|boolean|false|none|Whether it's a tea|

<h2 id="tocS_FoodFull">FoodFull</h2>
<!-- backwards compatibility -->
<a id="schemafoodfull"></a>
<a id="schema_FoodFull"></a>
<a id="tocSfoodfull"></a>
<a id="tocsfoodfull"></a>

```json
{
  "uid": "string",
  "name": "string",
  "earthlyOrigin": true,
  "dessert": true,
  "fruit": true,
  "herbOrSpice": true,
  "sauce": true,
  "soup": true,
  "beverage": true,
  "alcoholicBeverage": true,
  "juice": true,
  "tea": true
}
```

Full food, returned when queried using UID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Food unique ID|
|name|string|true|none|Food name|
|earthlyOrigin|boolean|false|none|Whether it's of earthly origin|
|dessert|boolean|false|none|Whether it's a dessert|
|fruit|boolean|false|none|Whether it's a fruit|
|herbOrSpice|boolean|false|none|Whether it's an herb or a spice|
|sauce|boolean|false|none|Whether it's a sauce|
|soup|boolean|false|none|Whether it's a soup|
|beverage|boolean|false|none|Whether it's a beverage|
|alcoholicBeverage|boolean|false|none|Whether it's an alcoholic beverage|
|juice|boolean|false|none|Whether it's a juice|
|tea|boolean|false|none|Whether it's a tea|

<h2 id="tocS_FoodBaseResponse">FoodBaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemafoodbaseresponse"></a>
<a id="schema_FoodBaseResponse"></a>
<a id="tocSfoodbaseresponse"></a>
<a id="tocsfoodbaseresponse"></a>

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "foods": [
    {
      "uid": "string",
      "name": "string",
      "earthlyOrigin": true,
      "dessert": true,
      "fruit": true,
      "herbOrSpice": true,
      "sauce": true,
      "soup": true,
      "beverage": true,
      "alcoholicBeverage": true,
      "juice": true,
      "tea": true
    }
  ]
}
```

Response object for foods search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|[ResponsePage](#schemaresponsepage)|false|none|Object describing response page|
|sort|[ResponseSort](#schemaresponsesort)|false|none|Response sort|
|foods|[[FoodBase](#schemafoodbase)]|false|none|List of foods matching given criteria|

<h2 id="tocS_FoodFullResponse">FoodFullResponse</h2>
<!-- backwards compatibility -->
<a id="schemafoodfullresponse"></a>
<a id="schema_FoodFullResponse"></a>
<a id="tocSfoodfullresponse"></a>
<a id="tocsfoodfullresponse"></a>

```json
{
  "food": {
    "uid": "string",
    "name": "string",
    "earthlyOrigin": true,
    "dessert": true,
    "fruit": true,
    "herbOrSpice": true,
    "sauce": true,
    "soup": true,
    "beverage": true,
    "alcoholicBeverage": true,
    "juice": true,
    "tea": true
  }
}
```

Response object for single food query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|food|[FoodFull](#schemafoodfull)|false|none|Full food, returned when queried using UID|

<h2 id="tocS_Gender">Gender</h2>
<!-- backwards compatibility -->
<a id="schemagender"></a>
<a id="schema_Gender"></a>
<a id="tocSgender"></a>
<a id="tocsgender"></a>

```json
"F"
```

Gender

<h2 id="tocS_Genre">Genre</h2>
<!-- backwards compatibility -->
<a id="schemagenre"></a>
<a id="schema_Genre"></a>
<a id="tocSgenre"></a>
<a id="tocsgenre"></a>

```json
{
  "uid": "string",
  "name": "string"
}
```

Genre of video games

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|false|none|Genre unique ID|
|name|string|false|none|Genre name|

<h2 id="tocS_LiteratureHeader">LiteratureHeader</h2>
<!-- backwards compatibility -->
<a id="schemaliteratureheader"></a>
<a id="schema_LiteratureHeader"></a>
<a id="tocSliteratureheader"></a>
<a id="tocsliteratureheader"></a>

```json
{
  "uid": "string",
  "title": "string"
}
```

Header literature, embedded in other objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Literature unique ID|
|title|string|true|none|Literature title|

<h2 id="tocS_LiteratureBase">LiteratureBase</h2>
<!-- backwards compatibility -->
<a id="schemaliteraturebase"></a>
<a id="schema_LiteratureBase"></a>
<a id="tocSliteraturebase"></a>
<a id="tocsliteraturebase"></a>

```json
{
  "uid": "string",
  "title": "string",
  "earthlyOrigin": true,
  "shakespeareanWork": true,
  "report": true,
  "scientificLiterature": true,
  "technicalManual": true,
  "religiousLiterature": true
}
```

Base literature, returned in search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Literature unique ID|
|title|string|true|none|Literature title|
|earthlyOrigin|boolean|false|none|Whether it's of earthly origin|
|shakespeareanWork|boolean|false|none|Whether it's a Shakespearean work|
|report|boolean|false|none|Whether it's a report|
|scientificLiterature|boolean|false|none|Whether it's a scientific literature|
|technicalManual|boolean|false|none|Whether it's a technical manual|
|religiousLiterature|boolean|false|none|Whether it's a religious literature|

<h2 id="tocS_LiteratureFull">LiteratureFull</h2>
<!-- backwards compatibility -->
<a id="schemaliteraturefull"></a>
<a id="schema_LiteratureFull"></a>
<a id="tocSliteraturefull"></a>
<a id="tocsliteraturefull"></a>

```json
{
  "uid": "string",
  "title": "string",
  "earthlyOrigin": true,
  "shakespeareanWork": true,
  "report": true,
  "scientificLiterature": true,
  "technicalManual": true,
  "religiousLiterature": true
}
```

Full literature, returned when queried using UID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Literature unique ID|
|title|string|true|none|Literature title|
|earthlyOrigin|boolean|false|none|Whether it's of earthly origin|
|shakespeareanWork|boolean|false|none|Whether it's a Shakespearean work|
|report|boolean|false|none|Whether it's a report|
|scientificLiterature|boolean|false|none|Whether it's a scientific literature|
|technicalManual|boolean|false|none|Whether it's a technical manual|
|religiousLiterature|boolean|false|none|Whether it's a religious literature|

<h2 id="tocS_LiteratureBaseResponse">LiteratureBaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemaliteraturebaseresponse"></a>
<a id="schema_LiteratureBaseResponse"></a>
<a id="tocSliteraturebaseresponse"></a>
<a id="tocsliteraturebaseresponse"></a>

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "literature": [
    {
      "uid": "string",
      "title": "string",
      "earthlyOrigin": true,
      "shakespeareanWork": true,
      "report": true,
      "scientificLiterature": true,
      "technicalManual": true,
      "religiousLiterature": true
    }
  ]
}
```

Response object for literature search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|[ResponsePage](#schemaresponsepage)|false|none|Object describing response page|
|sort|[ResponseSort](#schemaresponsesort)|false|none|Response sort|
|literature|[[LiteratureBase](#schemaliteraturebase)]|false|none|List of literature matching given criteria|

<h2 id="tocS_LiteratureFullResponse">LiteratureFullResponse</h2>
<!-- backwards compatibility -->
<a id="schemaliteraturefullresponse"></a>
<a id="schema_LiteratureFullResponse"></a>
<a id="tocSliteraturefullresponse"></a>
<a id="tocsliteraturefullresponse"></a>

```json
{
  "literature": {
    "uid": "string",
    "title": "string",
    "earthlyOrigin": true,
    "shakespeareanWork": true,
    "report": true,
    "scientificLiterature": true,
    "technicalManual": true,
    "religiousLiterature": true
  }
}
```

Response object for single literature query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|literature|[LiteratureFull](#schemaliteraturefull)|false|none|Full literature, returned when queried using UID|

<h2 id="tocS_LocationHeader">LocationHeader</h2>
<!-- backwards compatibility -->
<a id="schemalocationheader"></a>
<a id="schema_LocationHeader"></a>
<a id="tocSlocationheader"></a>
<a id="tocslocationheader"></a>

```json
{
  "uid": "string",
  "name": "string"
}
```

Header location, embedded in other objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Location unique ID|
|name|string|true|none|Location name|

<h2 id="tocS_LocationBase">LocationBase</h2>
<!-- backwards compatibility -->
<a id="schemalocationbase"></a>
<a id="schema_LocationBase"></a>
<a id="tocSlocationbase"></a>
<a id="tocslocationbase"></a>

```json
{
  "uid": "string",
  "name": "string",
  "earthlyLocation": true,
  "fictionalLocation": true,
  "religiousLocation": true,
  "geographicalLocation": true,
  "bodyOfWater": true,
  "country": true,
  "subnationalEntity": true,
  "settlement": true,
  "usSettlement": true,
  "bajoranSettlement": true,
  "colony": true,
  "landform": true,
  "landmark": true,
  "road": true,
  "structure": true,
  "shipyard": true,
  "buildingInterior": true,
  "establishment": true,
  "medicalEstablishment": true,
  "ds9Establishment": true,
  "school": true,
  "mirror": true,
  "alternateReality": true
}
```

Base location, returned in search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Location unique ID|
|name|string|true|none|Location name|
|earthlyLocation|boolean|false|none|Whether it's an earthly location|
|fictionalLocation|boolean|false|none|Whether it's a fictional location|
|religiousLocation|boolean|false|none|Whether it's a religious location|
|geographicalLocation|boolean|false|none|Whether it's a geographical location|
|bodyOfWater|boolean|false|none|Whether it's a body of water|
|country|boolean|false|none|Whether it's a country|
|subnationalEntity|boolean|false|none|Whether it's a subnational entity|
|settlement|boolean|false|none|Whether it's a settlement|
|usSettlement|boolean|false|none|Whether it's a US settlement|
|bajoranSettlement|boolean|false|none|Whether it's a Bajoran settlement|
|colony|boolean|false|none|Whether it's a colony|
|landform|boolean|false|none|Whether it's a landform|
|landmark|boolean|false|none|Whether it's a landmark|
|road|boolean|false|none|Whether it's a road|
|structure|boolean|false|none|Whether it's a structure|
|shipyard|boolean|false|none|Whether it's a shipyard|
|buildingInterior|boolean|false|none|Whether it's a building interior|
|establishment|boolean|false|none|Whether it's a establishment|
|medicalEstablishment|boolean|false|none|Whether it's a medical establishment|
|ds9Establishment|boolean|false|none|Whether it's a DS9 establishment|
|school|boolean|false|none|Whether it's a school|
|mirror|boolean|false|none|Whether this location is from mirror universe|
|alternateReality|boolean|false|none|Whether this location is from alternate reality|

<h2 id="tocS_LocationFull">LocationFull</h2>
<!-- backwards compatibility -->
<a id="schemalocationfull"></a>
<a id="schema_LocationFull"></a>
<a id="tocSlocationfull"></a>
<a id="tocslocationfull"></a>

```json
{
  "uid": "string",
  "name": "string",
  "earthlyLocation": true,
  "fictionalLocation": true,
  "religiousLocation": true,
  "geographicalLocation": true,
  "bodyOfWater": true,
  "country": true,
  "subnationalEntity": true,
  "settlement": true,
  "usSettlement": true,
  "bajoranSettlement": true,
  "colony": true,
  "landform": true,
  "landmark": true,
  "road": true,
  "structure": true,
  "shipyard": true,
  "buildingInterior": true,
  "establishment": true,
  "medicalEstablishment": true,
  "ds9Establishment": true,
  "school": true,
  "mirror": true,
  "alternateReality": true
}
```

Full location, returned when queried using UID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Location unique ID|
|name|string|true|none|Location name|
|earthlyLocation|boolean|false|none|Whether it's an earthly location|
|fictionalLocation|boolean|false|none|Whether it's a fictional location|
|religiousLocation|boolean|false|none|Whether it's a religious location|
|geographicalLocation|boolean|false|none|Whether it's a geographical location|
|bodyOfWater|boolean|false|none|Whether it's a body of water|
|country|boolean|false|none|Whether it's a country|
|subnationalEntity|boolean|false|none|Whether it's a subnational entity|
|settlement|boolean|false|none|Whether it's a settlement|
|usSettlement|boolean|false|none|Whether it's a US settlement|
|bajoranSettlement|boolean|false|none|Whether it's a Bajoran settlement|
|colony|boolean|false|none|Whether it's a colony|
|landform|boolean|false|none|Whether it's a landform|
|landmark|boolean|false|none|Whether it's a landmark|
|road|boolean|false|none|Whether it's a road|
|structure|boolean|false|none|Whether it's a structure|
|shipyard|boolean|false|none|Whether it's a shipyard|
|buildingInterior|boolean|false|none|Whether it's a building interior|
|establishment|boolean|false|none|Whether it's a establishment|
|medicalEstablishment|boolean|false|none|Whether it's a medical establishment|
|ds9Establishment|boolean|false|none|Whether it's a DS9 establishment|
|school|boolean|false|none|Whether it's a school|
|mirror|boolean|false|none|Whether this location is from mirror universe|
|alternateReality|boolean|false|none|Whether this location is from alternate reality|

<h2 id="tocS_LocationBaseResponse">LocationBaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemalocationbaseresponse"></a>
<a id="schema_LocationBaseResponse"></a>
<a id="tocSlocationbaseresponse"></a>
<a id="tocslocationbaseresponse"></a>

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "locations": [
    {
      "uid": "string",
      "name": "string",
      "earthlyLocation": true,
      "fictionalLocation": true,
      "religiousLocation": true,
      "geographicalLocation": true,
      "bodyOfWater": true,
      "country": true,
      "subnationalEntity": true,
      "settlement": true,
      "usSettlement": true,
      "bajoranSettlement": true,
      "colony": true,
      "landform": true,
      "landmark": true,
      "road": true,
      "structure": true,
      "shipyard": true,
      "buildingInterior": true,
      "establishment": true,
      "medicalEstablishment": true,
      "ds9Establishment": true,
      "school": true,
      "mirror": true,
      "alternateReality": true
    }
  ]
}
```

Response object for locations search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|[ResponsePage](#schemaresponsepage)|false|none|Object describing response page|
|sort|[ResponseSort](#schemaresponsesort)|false|none|Response sort|
|locations|[[LocationBase](#schemalocationbase)]|false|none|List of locations matching given criteria|

<h2 id="tocS_LocationFullResponse">LocationFullResponse</h2>
<!-- backwards compatibility -->
<a id="schemalocationfullresponse"></a>
<a id="schema_LocationFullResponse"></a>
<a id="tocSlocationfullresponse"></a>
<a id="tocslocationfullresponse"></a>

```json
{
  "location": {
    "uid": "string",
    "name": "string",
    "earthlyLocation": true,
    "fictionalLocation": true,
    "religiousLocation": true,
    "geographicalLocation": true,
    "bodyOfWater": true,
    "country": true,
    "subnationalEntity": true,
    "settlement": true,
    "usSettlement": true,
    "bajoranSettlement": true,
    "colony": true,
    "landform": true,
    "landmark": true,
    "road": true,
    "structure": true,
    "shipyard": true,
    "buildingInterior": true,
    "establishment": true,
    "medicalEstablishment": true,
    "ds9Establishment": true,
    "school": true,
    "mirror": true,
    "alternateReality": true
  }
}
```

Response object for single location query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|[LocationFull](#schemalocationfull)|false|none|Full location, returned when queried using UID|

<h2 id="tocS_MagazineHeader">MagazineHeader</h2>
<!-- backwards compatibility -->
<a id="schemamagazineheader"></a>
<a id="schema_MagazineHeader"></a>
<a id="tocSmagazineheader"></a>
<a id="tocsmagazineheader"></a>

```json
{
  "uid": "string",
  "title": "string"
}
```

Header magazine, embedded in other objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Magazine unique ID|
|title|string|true|none|Magazine title|

<h2 id="tocS_MagazineBase">MagazineBase</h2>
<!-- backwards compatibility -->
<a id="schemamagazinebase"></a>
<a id="schema_MagazineBase"></a>
<a id="tocSmagazinebase"></a>
<a id="tocsmagazinebase"></a>

```json
{
  "uid": "string",
  "title": "string",
  "publishedYear": 0,
  "publishedMonth": 0,
  "publishedDay": 0,
  "coverYear": 0,
  "coverMonth": 0,
  "coverDay": 0,
  "numberOfPages": 0,
  "issueNumber": "string"
}
```

Base magazine, returned in search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Magazine unique ID|
|title|string|true|none|Magazine title|
|publishedYear|integer|false|none|Year the magazine was published|
|publishedMonth|integer|false|none|Month the magazine was published|
|publishedDay|integer|false|none|Day the magazine was published|
|coverYear|integer|false|none|Cover publication year|
|coverMonth|integer|false|none|Cover publication month|
|coverDay|integer|false|none|Cover publication day|
|numberOfPages|integer|false|none|Number of pages|
|issueNumber|string|false|none|Magazine issue number|

<h2 id="tocS_MagazineFull">MagazineFull</h2>
<!-- backwards compatibility -->
<a id="schemamagazinefull"></a>
<a id="schema_MagazineFull"></a>
<a id="tocSmagazinefull"></a>
<a id="tocsmagazinefull"></a>

```json
{
  "uid": "string",
  "title": "string",
  "publishedYear": 0,
  "publishedMonth": 0,
  "publishedDay": 0,
  "coverYear": 0,
  "coverMonth": 0,
  "coverDay": 0,
  "numberOfPages": 0,
  "issueNumber": "string",
  "magazineSeries": [
    {
      "uid": "string",
      "title": "string",
      "publishedYearFrom": 0,
      "publishedMonthFrom": 0,
      "publishedYearTo": 0,
      "publishedMonthTo": 0,
      "numberOfIssues": 0
    }
  ],
  "editors": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "artDepartment": true,
      "artDirector": true,
      "productionDesigner": true,
      "cameraAndElectricalDepartment": true,
      "cinematographer": true,
      "castingDepartment": true,
      "costumeDepartment": true,
      "costumeDesigner": true,
      "director": true,
      "assistantOrSecondUnitDirector": true,
      "exhibitAndAttractionStaff": true,
      "filmEditor": true,
      "linguist": true,
      "locationStaff": true,
      "makeupStaff": true,
      "musicDepartment": true,
      "composer": true,
      "personalAssistant": true,
      "producer": true,
      "productionAssociate": true,
      "productionStaff": true,
      "publicationStaff": true,
      "scienceConsultant": true,
      "soundDepartment": true,
      "specialAndVisualEffectsStaff": true,
      "author": true,
      "audioAuthor": true,
      "calendarArtist": true,
      "comicArtist": true,
      "comicAuthor": true,
      "comicColorArtist": true,
      "comicInteriorArtist": true,
      "comicInkArtist": true,
      "comicPencilArtist": true,
      "comicLetterArtist": true,
      "comicStripArtist": true,
      "gameArtist": true,
      "gameAuthor": true,
      "novelArtist": true,
      "novelAuthor": true,
      "referenceArtist": true,
      "referenceAuthor": true,
      "publicationArtist": true,
      "publicationDesigner": true,
      "publicationEditor": true,
      "publicityArtist": true,
      "cbsDigitalStaff": true,
      "ilmProductionStaff": true,
      "specialFeaturesStaff": true,
      "storyEditor": true,
      "studioExecutive": true,
      "stuntDepartment": true,
      "transportationDepartment": true,
      "videoGameProductionStaff": true,
      "writer": true
    }
  ],
  "publishers": [
    {
      "uid": "string",
      "name": "string",
      "broadcaster": true,
      "collectibleCompany": true,
      "conglomerate": true,
      "digitalVisualEffectsCompany": true,
      "distributor": true,
      "gameCompany": true,
      "filmEquipmentCompany": true,
      "makeUpEffectsStudio": true,
      "mattePaintingCompany": true,
      "modelAndMiniatureEffectsCompany": true,
      "postProductionCompany": true,
      "productionCompany": true,
      "propCompany": true,
      "recordLabel": true,
      "specialEffectsCompany": true,
      "tvAndFilmProductionCompany": true,
      "videoGameCompany": true
    }
  ]
}
```

Full magazine, returned when queried using UID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Magazine unique ID|
|title|string|true|none|Magazine title|
|publishedYear|integer|false|none|Year the magazine was published|
|publishedMonth|integer|false|none|Month the magazine was published|
|publishedDay|integer|false|none|Day the magazine was published|
|coverYear|integer|false|none|Cover publication year|
|coverMonth|integer|false|none|Cover publication month|
|coverDay|integer|false|none|Cover publication day|
|numberOfPages|integer|false|none|Number of pages|
|issueNumber|string|false|none|Magazine issue number|
|magazineSeries|[[MagazineSeriesBase](#schemamagazineseriesbase)]|false|none|Magazine series this magazine is included in|
|editors|[[StaffBase](#schemastaffbase)]|false|none|Editors involved in the magazine|
|publishers|[[CompanyBase](#schemacompanybase)]|false|none|Magazine publishers|

<h2 id="tocS_MagazineBaseResponse">MagazineBaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemamagazinebaseresponse"></a>
<a id="schema_MagazineBaseResponse"></a>
<a id="tocSmagazinebaseresponse"></a>
<a id="tocsmagazinebaseresponse"></a>

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "magazines": [
    {
      "uid": "string",
      "title": "string",
      "publishedYear": 0,
      "publishedMonth": 0,
      "publishedDay": 0,
      "coverYear": 0,
      "coverMonth": 0,
      "coverDay": 0,
      "numberOfPages": 0,
      "issueNumber": "string"
    }
  ]
}
```

Response object for magazine search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|[ResponsePage](#schemaresponsepage)|false|none|Object describing response page|
|sort|[ResponseSort](#schemaresponsesort)|false|none|Response sort|
|magazines|[[MagazineBase](#schemamagazinebase)]|false|none|List of magazines matching given criteria|

<h2 id="tocS_MagazineFullResponse">MagazineFullResponse</h2>
<!-- backwards compatibility -->
<a id="schemamagazinefullresponse"></a>
<a id="schema_MagazineFullResponse"></a>
<a id="tocSmagazinefullresponse"></a>
<a id="tocsmagazinefullresponse"></a>

```json
{
  "magazine": {
    "uid": "string",
    "title": "string",
    "publishedYear": 0,
    "publishedMonth": 0,
    "publishedDay": 0,
    "coverYear": 0,
    "coverMonth": 0,
    "coverDay": 0,
    "numberOfPages": 0,
    "issueNumber": "string",
    "magazineSeries": [
      {
        "uid": "string",
        "title": "string",
        "publishedYearFrom": 0,
        "publishedMonthFrom": 0,
        "publishedYearTo": 0,
        "publishedMonthTo": 0,
        "numberOfIssues": 0
      }
    ],
    "editors": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "publishers": [
      {
        "uid": "string",
        "name": "string",
        "broadcaster": true,
        "collectibleCompany": true,
        "conglomerate": true,
        "digitalVisualEffectsCompany": true,
        "distributor": true,
        "gameCompany": true,
        "filmEquipmentCompany": true,
        "makeUpEffectsStudio": true,
        "mattePaintingCompany": true,
        "modelAndMiniatureEffectsCompany": true,
        "postProductionCompany": true,
        "productionCompany": true,
        "propCompany": true,
        "recordLabel": true,
        "specialEffectsCompany": true,
        "tvAndFilmProductionCompany": true,
        "videoGameCompany": true
      }
    ]
  }
}
```

Response object for single magazine query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|magazine|[MagazineFull](#schemamagazinefull)|false|none|Full magazine, returned when queried using UID|

<h2 id="tocS_MagazineSeriesHeader">MagazineSeriesHeader</h2>
<!-- backwards compatibility -->
<a id="schemamagazineseriesheader"></a>
<a id="schema_MagazineSeriesHeader"></a>
<a id="tocSmagazineseriesheader"></a>
<a id="tocsmagazineseriesheader"></a>

```json
{
  "uid": "string",
  "title": "string"
}
```

Header book series, embedded in other objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Magazine series unique ID|
|title|string|true|none|Magazine series title|

<h2 id="tocS_MagazineSeriesBase">MagazineSeriesBase</h2>
<!-- backwards compatibility -->
<a id="schemamagazineseriesbase"></a>
<a id="schema_MagazineSeriesBase"></a>
<a id="tocSmagazineseriesbase"></a>
<a id="tocsmagazineseriesbase"></a>

```json
{
  "uid": "string",
  "title": "string",
  "publishedYearFrom": 0,
  "publishedMonthFrom": 0,
  "publishedYearTo": 0,
  "publishedMonthTo": 0,
  "numberOfIssues": 0
}
```

Base magazine series, returned in search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Magazine series unique ID|
|title|string|true|none|Magazine series title|
|publishedYearFrom|integer|false|none|Year from which the magazine series was published|
|publishedMonthFrom|integer|false|none|Month from which the magazine series was published|
|publishedYearTo|integer|false|none|Year to which the magazine series was published|
|publishedMonthTo|integer|false|none|Month to which the magazine series was published|
|numberOfIssues|integer|false|none|Number of issues|

<h2 id="tocS_MagazineSeriesFull">MagazineSeriesFull</h2>
<!-- backwards compatibility -->
<a id="schemamagazineseriesfull"></a>
<a id="schema_MagazineSeriesFull"></a>
<a id="tocSmagazineseriesfull"></a>
<a id="tocsmagazineseriesfull"></a>

```json
{
  "uid": "string",
  "title": "string",
  "publishedYearFrom": 0,
  "publishedMonthFrom": 0,
  "publishedYearTo": 0,
  "publishedMonthTo": 0,
  "numberOfIssues": 0,
  "publishers": [
    {
      "uid": "string",
      "name": "string",
      "broadcaster": true,
      "collectibleCompany": true,
      "conglomerate": true,
      "digitalVisualEffectsCompany": true,
      "distributor": true,
      "gameCompany": true,
      "filmEquipmentCompany": true,
      "makeUpEffectsStudio": true,
      "mattePaintingCompany": true,
      "modelAndMiniatureEffectsCompany": true,
      "postProductionCompany": true,
      "productionCompany": true,
      "propCompany": true,
      "recordLabel": true,
      "specialEffectsCompany": true,
      "tvAndFilmProductionCompany": true,
      "videoGameCompany": true
    }
  ],
  "editors": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "artDepartment": true,
      "artDirector": true,
      "productionDesigner": true,
      "cameraAndElectricalDepartment": true,
      "cinematographer": true,
      "castingDepartment": true,
      "costumeDepartment": true,
      "costumeDesigner": true,
      "director": true,
      "assistantOrSecondUnitDirector": true,
      "exhibitAndAttractionStaff": true,
      "filmEditor": true,
      "linguist": true,
      "locationStaff": true,
      "makeupStaff": true,
      "musicDepartment": true,
      "composer": true,
      "personalAssistant": true,
      "producer": true,
      "productionAssociate": true,
      "productionStaff": true,
      "publicationStaff": true,
      "scienceConsultant": true,
      "soundDepartment": true,
      "specialAndVisualEffectsStaff": true,
      "author": true,
      "audioAuthor": true,
      "calendarArtist": true,
      "comicArtist": true,
      "comicAuthor": true,
      "comicColorArtist": true,
      "comicInteriorArtist": true,
      "comicInkArtist": true,
      "comicPencilArtist": true,
      "comicLetterArtist": true,
      "comicStripArtist": true,
      "gameArtist": true,
      "gameAuthor": true,
      "novelArtist": true,
      "novelAuthor": true,
      "referenceArtist": true,
      "referenceAuthor": true,
      "publicationArtist": true,
      "publicationDesigner": true,
      "publicationEditor": true,
      "publicityArtist": true,
      "cbsDigitalStaff": true,
      "ilmProductionStaff": true,
      "specialFeaturesStaff": true,
      "storyEditor": true,
      "studioExecutive": true,
      "stuntDepartment": true,
      "transportationDepartment": true,
      "videoGameProductionStaff": true,
      "writer": true
    }
  ],
  "magazines": [
    {
      "uid": "string",
      "title": "string",
      "publishedYear": 0,
      "publishedMonth": 0,
      "publishedDay": 0,
      "coverYear": 0,
      "coverMonth": 0,
      "coverDay": 0,
      "numberOfPages": 0,
      "issueNumber": "string"
    }
  ]
}
```

Full magazine series, returned when queried using UID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Magazine series unique ID|
|title|string|true|none|Magazine series title|
|publishedYearFrom|integer|false|none|Year from which the magazine series was published|
|publishedMonthFrom|integer|false|none|Month from which the magazine series was published|
|publishedYearTo|integer|false|none|Year to which the magazine series was published|
|publishedMonthTo|integer|false|none|Month to which the magazine series was published|
|numberOfIssues|integer|false|none|Number of issues|
|publishers|[[CompanyBase](#schemacompanybase)]|false|none|Companies that published this magazine series|
|editors|[[StaffBase](#schemastaffbase)]|false|none|Editors involved in the magazine series|
|magazines|[[MagazineBase](#schemamagazinebase)]|false|none|Magazines included in this magazine series|

<h2 id="tocS_MagazineSeriesBaseResponse">MagazineSeriesBaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemamagazineseriesbaseresponse"></a>
<a id="schema_MagazineSeriesBaseResponse"></a>
<a id="tocSmagazineseriesbaseresponse"></a>
<a id="tocsmagazineseriesbaseresponse"></a>

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "magazineSeries": [
    {
      "uid": "string",
      "title": "string",
      "publishedYearFrom": 0,
      "publishedMonthFrom": 0,
      "publishedYearTo": 0,
      "publishedMonthTo": 0,
      "numberOfIssues": 0
    }
  ]
}
```

Response object for magazine series search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|[ResponsePage](#schemaresponsepage)|false|none|Object describing response page|
|sort|[ResponseSort](#schemaresponsesort)|false|none|Response sort|
|magazineSeries|[[MagazineSeriesBase](#schemamagazineseriesbase)]|false|none|List of magazine series matching given criteria|

<h2 id="tocS_MagazineSeriesFullResponse">MagazineSeriesFullResponse</h2>
<!-- backwards compatibility -->
<a id="schemamagazineseriesfullresponse"></a>
<a id="schema_MagazineSeriesFullResponse"></a>
<a id="tocSmagazineseriesfullresponse"></a>
<a id="tocsmagazineseriesfullresponse"></a>

```json
{
  "magazineSeries": {
    "uid": "string",
    "title": "string",
    "publishedYearFrom": 0,
    "publishedMonthFrom": 0,
    "publishedYearTo": 0,
    "publishedMonthTo": 0,
    "numberOfIssues": 0,
    "publishers": [
      {
        "uid": "string",
        "name": "string",
        "broadcaster": true,
        "collectibleCompany": true,
        "conglomerate": true,
        "digitalVisualEffectsCompany": true,
        "distributor": true,
        "gameCompany": true,
        "filmEquipmentCompany": true,
        "makeUpEffectsStudio": true,
        "mattePaintingCompany": true,
        "modelAndMiniatureEffectsCompany": true,
        "postProductionCompany": true,
        "productionCompany": true,
        "propCompany": true,
        "recordLabel": true,
        "specialEffectsCompany": true,
        "tvAndFilmProductionCompany": true,
        "videoGameCompany": true
      }
    ],
    "editors": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "magazines": [
      {
        "uid": "string",
        "title": "string",
        "publishedYear": 0,
        "publishedMonth": 0,
        "publishedDay": 0,
        "coverYear": 0,
        "coverMonth": 0,
        "coverDay": 0,
        "numberOfPages": 0,
        "issueNumber": "string"
      }
    ]
  }
}
```

Response object for single magazine series query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|magazineSeries|[MagazineSeriesFull](#schemamagazineseriesfull)|false|none|Full magazine series, returned when queried using UID|

<h2 id="tocS_MaritalStatus">MaritalStatus</h2>
<!-- backwards compatibility -->
<a id="schemamaritalstatus"></a>
<a id="schema_MaritalStatus"></a>
<a id="tocSmaritalstatus"></a>
<a id="tocsmaritalstatus"></a>

```json
"SINGLE"
```

Marital status

<h2 id="tocS_MaterialHeader">MaterialHeader</h2>
<!-- backwards compatibility -->
<a id="schemamaterialheader"></a>
<a id="schema_MaterialHeader"></a>
<a id="tocSmaterialheader"></a>
<a id="tocsmaterialheader"></a>

```json
{
  "uid": "string",
  "name": "string"
}
```

Header material, embedded in other objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Material unique ID|
|name|string|true|none|Material name|

<h2 id="tocS_MaterialBase">MaterialBase</h2>
<!-- backwards compatibility -->
<a id="schemamaterialbase"></a>
<a id="schema_MaterialBase"></a>
<a id="tocSmaterialbase"></a>
<a id="tocsmaterialbase"></a>

```json
{
  "uid": "string",
  "name": "string",
  "chemicalCompound": true,
  "biochemicalCompound": true,
  "drug": true,
  "poisonousSubstance": true,
  "explosive": true,
  "gemstone": true,
  "alloyOrComposite": true,
  "fuel": true,
  "mineral": true,
  "preciousMaterial": true
}
```

Base material, returned in search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Material unique ID|
|name|string|true|none|Material name|
|chemicalCompound|boolean|false|none|Whether it's a chemical compound|
|biochemicalCompound|boolean|false|none|Whether it's a biochemical compound|
|drug|boolean|false|none|Whether it's a drug|
|poisonousSubstance|boolean|false|none|Whether it's a poisonous substance|
|explosive|boolean|false|none|Whether it's an explosive|
|gemstone|boolean|false|none|Whether it's a gemstone|
|alloyOrComposite|boolean|false|none|Whether it's an alloy or a composite|
|fuel|boolean|false|none|Whether it's a fuel|
|mineral|boolean|false|none|Whether it's a mineral|
|preciousMaterial|boolean|false|none|Whether it's a precious material|

<h2 id="tocS_MaterialFull">MaterialFull</h2>
<!-- backwards compatibility -->
<a id="schemamaterialfull"></a>
<a id="schema_MaterialFull"></a>
<a id="tocSmaterialfull"></a>
<a id="tocsmaterialfull"></a>

```json
{
  "uid": "string",
  "name": "string",
  "chemicalCompound": true,
  "biochemicalCompound": true,
  "drug": true,
  "poisonousSubstance": true,
  "explosive": true,
  "gemstone": true,
  "alloyOrComposite": true,
  "fuel": true,
  "mineral": true,
  "preciousMaterial": true
}
```

Full material, returned when queried using UID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Material unique ID|
|name|string|true|none|Material name|
|chemicalCompound|boolean|false|none|Whether it's a chemical compound|
|biochemicalCompound|boolean|false|none|Whether it's a biochemical compound|
|drug|boolean|false|none|Whether it's a drug|
|poisonousSubstance|boolean|false|none|Whether it's a poisonous substance|
|explosive|boolean|false|none|Whether it's an explosive|
|gemstone|boolean|false|none|Whether it's a gemstone|
|alloyOrComposite|boolean|false|none|Whether it's an alloy or a composite|
|fuel|boolean|false|none|Whether it's a fuel|
|mineral|boolean|false|none|Whether it's a mineral|
|preciousMaterial|boolean|false|none|Whether it's a precious material|

<h2 id="tocS_MaterialBaseResponse">MaterialBaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemamaterialbaseresponse"></a>
<a id="schema_MaterialBaseResponse"></a>
<a id="tocSmaterialbaseresponse"></a>
<a id="tocsmaterialbaseresponse"></a>

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "materials": [
    {
      "uid": "string",
      "name": "string",
      "chemicalCompound": true,
      "biochemicalCompound": true,
      "drug": true,
      "poisonousSubstance": true,
      "explosive": true,
      "gemstone": true,
      "alloyOrComposite": true,
      "fuel": true,
      "mineral": true,
      "preciousMaterial": true
    }
  ]
}
```

Response object for materials search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|[ResponsePage](#schemaresponsepage)|false|none|Object describing response page|
|sort|[ResponseSort](#schemaresponsesort)|false|none|Response sort|
|materials|[[MaterialBase](#schemamaterialbase)]|false|none|List of materials matching given criteria|

<h2 id="tocS_MaterialFullResponse">MaterialFullResponse</h2>
<!-- backwards compatibility -->
<a id="schemamaterialfullresponse"></a>
<a id="schema_MaterialFullResponse"></a>
<a id="tocSmaterialfullresponse"></a>
<a id="tocsmaterialfullresponse"></a>

```json
{
  "material": {
    "uid": "string",
    "name": "string",
    "chemicalCompound": true,
    "biochemicalCompound": true,
    "drug": true,
    "poisonousSubstance": true,
    "explosive": true,
    "gemstone": true,
    "alloyOrComposite": true,
    "fuel": true,
    "mineral": true,
    "preciousMaterial": true
  }
}
```

Response object for single material query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|material|[MaterialFull](#schemamaterialfull)|false|none|Full material, returned when queried using UID|

<h2 id="tocS_MedicalConditionHeader">MedicalConditionHeader</h2>
<!-- backwards compatibility -->
<a id="schemamedicalconditionheader"></a>
<a id="schema_MedicalConditionHeader"></a>
<a id="tocSmedicalconditionheader"></a>
<a id="tocsmedicalconditionheader"></a>

```json
{
  "uid": "string",
  "name": "string"
}
```

Header medical condition, embedded in other objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Medical condition unique ID|
|name|string|true|none|Medical condition name|

<h2 id="tocS_MedicalConditionBase">MedicalConditionBase</h2>
<!-- backwards compatibility -->
<a id="schemamedicalconditionbase"></a>
<a id="schema_MedicalConditionBase"></a>
<a id="tocSmedicalconditionbase"></a>
<a id="tocsmedicalconditionbase"></a>

```json
{
  "uid": "string",
  "name": "string",
  "psychologicalCondition": true
}
```

Base medical condition, returned in search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Medical condition unique ID|
|name|string|true|none|Medical condition name|
|psychologicalCondition|boolean|false|none|Whether it's a psychological condition|

<h2 id="tocS_MedicalConditionFull">MedicalConditionFull</h2>
<!-- backwards compatibility -->
<a id="schemamedicalconditionfull"></a>
<a id="schema_MedicalConditionFull"></a>
<a id="tocSmedicalconditionfull"></a>
<a id="tocsmedicalconditionfull"></a>

```json
{
  "uid": "string",
  "name": "string",
  "psychologicalCondition": true
}
```

Full medical condition, returned when queried using UID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Medical condition unique ID|
|name|string|true|none|Medical condition name|
|psychologicalCondition|boolean|false|none|Whether it's a psychological condition|

<h2 id="tocS_MedicalConditionBaseResponse">MedicalConditionBaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemamedicalconditionbaseresponse"></a>
<a id="schema_MedicalConditionBaseResponse"></a>
<a id="tocSmedicalconditionbaseresponse"></a>
<a id="tocsmedicalconditionbaseresponse"></a>

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "medicalConditions": [
    {
      "uid": "string",
      "name": "string",
      "psychologicalCondition": true
    }
  ]
}
```

Response object for medical conditions search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|[ResponsePage](#schemaresponsepage)|false|none|Object describing response page|
|sort|[ResponseSort](#schemaresponsesort)|false|none|Response sort|
|medicalConditions|[[MedicalConditionBase](#schemamedicalconditionbase)]|false|none|List of medical conditions matching given criteria|

<h2 id="tocS_MedicalConditionFullResponse">MedicalConditionFullResponse</h2>
<!-- backwards compatibility -->
<a id="schemamedicalconditionfullresponse"></a>
<a id="schema_MedicalConditionFullResponse"></a>
<a id="tocSmedicalconditionfullresponse"></a>
<a id="tocsmedicalconditionfullresponse"></a>

```json
{
  "medicalCondition": {
    "uid": "string",
    "name": "string",
    "psychologicalCondition": true
  }
}
```

Response object for single medical condition query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|medicalCondition|[MedicalConditionFull](#schemamedicalconditionfull)|false|none|Full medical condition, returned when queried using UID|

<h2 id="tocS_MovieHeader">MovieHeader</h2>
<!-- backwards compatibility -->
<a id="schemamovieheader"></a>
<a id="schema_MovieHeader"></a>
<a id="tocSmovieheader"></a>
<a id="tocsmovieheader"></a>

```json
{
  "uid": "string",
  "title": "string"
}
```

Header movie, embedded in other objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Movie unique ID|
|title|string|true|none|Movie title|

<h2 id="tocS_MovieBase">MovieBase</h2>
<!-- backwards compatibility -->
<a id="schemamoviebase"></a>
<a id="schema_MovieBase"></a>
<a id="tocSmoviebase"></a>
<a id="tocsmoviebase"></a>

```json
{
  "uid": "string",
  "title": "string",
  "mainDirector": {
    "uid": "string",
    "name": "string"
  },
  "titleBulgarian": "string",
  "titleCatalan": "string",
  "titleChineseTraditional": "string",
  "titleGerman": "string",
  "titleItalian": "string",
  "titleJapanese": "string",
  "titlePolish": "string",
  "titleRussian": "string",
  "titleSerbian": "string",
  "titleSpanish": "string",
  "stardateFrom": 0,
  "stardateTo": 0,
  "yearFrom": 0,
  "yearTo": 0,
  "usReleaseDate": "1970-01-01"
}
```

Base movie, returned in search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Movie unique ID|
|title|string|true|none|Movie title|
|mainDirector|[StaffHeader](#schemastaffheader)|false|none|Header staff, embedded in other objects|
|titleBulgarian|string|false|none|Movie title in Bulgarian|
|titleCatalan|string|false|none|Movie title in Catalan|
|titleChineseTraditional|string|false|none|Movie title in Chinese traditional|
|titleGerman|string|false|none|Movie title in German|
|titleItalian|string|false|none|Movie title in Italian|
|titleJapanese|string|false|none|Movie title in Japanese|
|titlePolish|string|false|none|Movie title in Polish|
|titleRussian|string|false|none|Movie title in Russian|
|titleSerbian|string|false|none|Movie title in Serbian|
|titleSpanish|string|false|none|Movie title in Spanish|
|stardateFrom|number(float)|false|none|Starting stardate of movie story|
|stardateTo|number(float)|false|none|Ending stardate of movie story|
|yearFrom|integer|false|none|Starting year of movie story|
|yearTo|integer|false|none|Ending year of movie story|
|usReleaseDate|string(date)|false|none|Date the movie was first released in the United States|

<h2 id="tocS_MovieFull">MovieFull</h2>
<!-- backwards compatibility -->
<a id="schemamoviefull"></a>
<a id="schema_MovieFull"></a>
<a id="tocSmoviefull"></a>
<a id="tocsmoviefull"></a>

```json
{
  "uid": "string",
  "title": "string",
  "mainDirector": {
    "uid": "string",
    "name": "string",
    "birthName": "string",
    "gender": "F",
    "dateOfBirth": "1970-01-01",
    "placeOfBirth": "string",
    "dateOfDeath": "1970-01-01",
    "placeOfDeath": "string",
    "artDepartment": true,
    "artDirector": true,
    "productionDesigner": true,
    "cameraAndElectricalDepartment": true,
    "cinematographer": true,
    "castingDepartment": true,
    "costumeDepartment": true,
    "costumeDesigner": true,
    "director": true,
    "assistantOrSecondUnitDirector": true,
    "exhibitAndAttractionStaff": true,
    "filmEditor": true,
    "linguist": true,
    "locationStaff": true,
    "makeupStaff": true,
    "musicDepartment": true,
    "composer": true,
    "personalAssistant": true,
    "producer": true,
    "productionAssociate": true,
    "productionStaff": true,
    "publicationStaff": true,
    "scienceConsultant": true,
    "soundDepartment": true,
    "specialAndVisualEffectsStaff": true,
    "author": true,
    "audioAuthor": true,
    "calendarArtist": true,
    "comicArtist": true,
    "comicAuthor": true,
    "comicColorArtist": true,
    "comicInteriorArtist": true,
    "comicInkArtist": true,
    "comicPencilArtist": true,
    "comicLetterArtist": true,
    "comicStripArtist": true,
    "gameArtist": true,
    "gameAuthor": true,
    "novelArtist": true,
    "novelAuthor": true,
    "referenceArtist": true,
    "referenceAuthor": true,
    "publicationArtist": true,
    "publicationDesigner": true,
    "publicationEditor": true,
    "publicityArtist": true,
    "cbsDigitalStaff": true,
    "ilmProductionStaff": true,
    "specialFeaturesStaff": true,
    "storyEditor": true,
    "studioExecutive": true,
    "stuntDepartment": true,
    "transportationDepartment": true,
    "videoGameProductionStaff": true,
    "writer": true
  },
  "titleBulgarian": "string",
  "titleCatalan": "string",
  "titleChineseTraditional": "string",
  "titleGerman": "string",
  "titleItalian": "string",
  "titleJapanese": "string",
  "titlePolish": "string",
  "titleRussian": "string",
  "titleSerbian": "string",
  "titleSpanish": "string",
  "stardateFrom": 0,
  "stardateTo": 0,
  "yearFrom": 0,
  "yearTo": 0,
  "usReleaseDate": "1970-01-01",
  "writers": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "artDepartment": true,
      "artDirector": true,
      "productionDesigner": true,
      "cameraAndElectricalDepartment": true,
      "cinematographer": true,
      "castingDepartment": true,
      "costumeDepartment": true,
      "costumeDesigner": true,
      "director": true,
      "assistantOrSecondUnitDirector": true,
      "exhibitAndAttractionStaff": true,
      "filmEditor": true,
      "linguist": true,
      "locationStaff": true,
      "makeupStaff": true,
      "musicDepartment": true,
      "composer": true,
      "personalAssistant": true,
      "producer": true,
      "productionAssociate": true,
      "productionStaff": true,
      "publicationStaff": true,
      "scienceConsultant": true,
      "soundDepartment": true,
      "specialAndVisualEffectsStaff": true,
      "author": true,
      "audioAuthor": true,
      "calendarArtist": true,
      "comicArtist": true,
      "comicAuthor": true,
      "comicColorArtist": true,
      "comicInteriorArtist": true,
      "comicInkArtist": true,
      "comicPencilArtist": true,
      "comicLetterArtist": true,
      "comicStripArtist": true,
      "gameArtist": true,
      "gameAuthor": true,
      "novelArtist": true,
      "novelAuthor": true,
      "referenceArtist": true,
      "referenceAuthor": true,
      "publicationArtist": true,
      "publicationDesigner": true,
      "publicationEditor": true,
      "publicityArtist": true,
      "cbsDigitalStaff": true,
      "ilmProductionStaff": true,
      "specialFeaturesStaff": true,
      "storyEditor": true,
      "studioExecutive": true,
      "stuntDepartment": true,
      "transportationDepartment": true,
      "videoGameProductionStaff": true,
      "writer": true
    }
  ],
  "screenplayAuthors": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "artDepartment": true,
      "artDirector": true,
      "productionDesigner": true,
      "cameraAndElectricalDepartment": true,
      "cinematographer": true,
      "castingDepartment": true,
      "costumeDepartment": true,
      "costumeDesigner": true,
      "director": true,
      "assistantOrSecondUnitDirector": true,
      "exhibitAndAttractionStaff": true,
      "filmEditor": true,
      "linguist": true,
      "locationStaff": true,
      "makeupStaff": true,
      "musicDepartment": true,
      "composer": true,
      "personalAssistant": true,
      "producer": true,
      "productionAssociate": true,
      "productionStaff": true,
      "publicationStaff": true,
      "scienceConsultant": true,
      "soundDepartment": true,
      "specialAndVisualEffectsStaff": true,
      "author": true,
      "audioAuthor": true,
      "calendarArtist": true,
      "comicArtist": true,
      "comicAuthor": true,
      "comicColorArtist": true,
      "comicInteriorArtist": true,
      "comicInkArtist": true,
      "comicPencilArtist": true,
      "comicLetterArtist": true,
      "comicStripArtist": true,
      "gameArtist": true,
      "gameAuthor": true,
      "novelArtist": true,
      "novelAuthor": true,
      "referenceArtist": true,
      "referenceAuthor": true,
      "publicationArtist": true,
      "publicationDesigner": true,
      "publicationEditor": true,
      "publicityArtist": true,
      "cbsDigitalStaff": true,
      "ilmProductionStaff": true,
      "specialFeaturesStaff": true,
      "storyEditor": true,
      "studioExecutive": true,
      "stuntDepartment": true,
      "transportationDepartment": true,
      "videoGameProductionStaff": true,
      "writer": true
    }
  ],
  "storyAuthors": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "artDepartment": true,
      "artDirector": true,
      "productionDesigner": true,
      "cameraAndElectricalDepartment": true,
      "cinematographer": true,
      "castingDepartment": true,
      "costumeDepartment": true,
      "costumeDesigner": true,
      "director": true,
      "assistantOrSecondUnitDirector": true,
      "exhibitAndAttractionStaff": true,
      "filmEditor": true,
      "linguist": true,
      "locationStaff": true,
      "makeupStaff": true,
      "musicDepartment": true,
      "composer": true,
      "personalAssistant": true,
      "producer": true,
      "productionAssociate": true,
      "productionStaff": true,
      "publicationStaff": true,
      "scienceConsultant": true,
      "soundDepartment": true,
      "specialAndVisualEffectsStaff": true,
      "author": true,
      "audioAuthor": true,
      "calendarArtist": true,
      "comicArtist": true,
      "comicAuthor": true,
      "comicColorArtist": true,
      "comicInteriorArtist": true,
      "comicInkArtist": true,
      "comicPencilArtist": true,
      "comicLetterArtist": true,
      "comicStripArtist": true,
      "gameArtist": true,
      "gameAuthor": true,
      "novelArtist": true,
      "novelAuthor": true,
      "referenceArtist": true,
      "referenceAuthor": true,
      "publicationArtist": true,
      "publicationDesigner": true,
      "publicationEditor": true,
      "publicityArtist": true,
      "cbsDigitalStaff": true,
      "ilmProductionStaff": true,
      "specialFeaturesStaff": true,
      "storyEditor": true,
      "studioExecutive": true,
      "stuntDepartment": true,
      "transportationDepartment": true,
      "videoGameProductionStaff": true,
      "writer": true
    }
  ],
  "directors": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "artDepartment": true,
      "artDirector": true,
      "productionDesigner": true,
      "cameraAndElectricalDepartment": true,
      "cinematographer": true,
      "castingDepartment": true,
      "costumeDepartment": true,
      "costumeDesigner": true,
      "director": true,
      "assistantOrSecondUnitDirector": true,
      "exhibitAndAttractionStaff": true,
      "filmEditor": true,
      "linguist": true,
      "locationStaff": true,
      "makeupStaff": true,
      "musicDepartment": true,
      "composer": true,
      "personalAssistant": true,
      "producer": true,
      "productionAssociate": true,
      "productionStaff": true,
      "publicationStaff": true,
      "scienceConsultant": true,
      "soundDepartment": true,
      "specialAndVisualEffectsStaff": true,
      "author": true,
      "audioAuthor": true,
      "calendarArtist": true,
      "comicArtist": true,
      "comicAuthor": true,
      "comicColorArtist": true,
      "comicInteriorArtist": true,
      "comicInkArtist": true,
      "comicPencilArtist": true,
      "comicLetterArtist": true,
      "comicStripArtist": true,
      "gameArtist": true,
      "gameAuthor": true,
      "novelArtist": true,
      "novelAuthor": true,
      "referenceArtist": true,
      "referenceAuthor": true,
      "publicationArtist": true,
      "publicationDesigner": true,
      "publicationEditor": true,
      "publicityArtist": true,
      "cbsDigitalStaff": true,
      "ilmProductionStaff": true,
      "specialFeaturesStaff": true,
      "storyEditor": true,
      "studioExecutive": true,
      "stuntDepartment": true,
      "transportationDepartment": true,
      "videoGameProductionStaff": true,
      "writer": true
    }
  ],
  "producers": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "artDepartment": true,
      "artDirector": true,
      "productionDesigner": true,
      "cameraAndElectricalDepartment": true,
      "cinematographer": true,
      "castingDepartment": true,
      "costumeDepartment": true,
      "costumeDesigner": true,
      "director": true,
      "assistantOrSecondUnitDirector": true,
      "exhibitAndAttractionStaff": true,
      "filmEditor": true,
      "linguist": true,
      "locationStaff": true,
      "makeupStaff": true,
      "musicDepartment": true,
      "composer": true,
      "personalAssistant": true,
      "producer": true,
      "productionAssociate": true,
      "productionStaff": true,
      "publicationStaff": true,
      "scienceConsultant": true,
      "soundDepartment": true,
      "specialAndVisualEffectsStaff": true,
      "author": true,
      "audioAuthor": true,
      "calendarArtist": true,
      "comicArtist": true,
      "comicAuthor": true,
      "comicColorArtist": true,
      "comicInteriorArtist": true,
      "comicInkArtist": true,
      "comicPencilArtist": true,
      "comicLetterArtist": true,
      "comicStripArtist": true,
      "gameArtist": true,
      "gameAuthor": true,
      "novelArtist": true,
      "novelAuthor": true,
      "referenceArtist": true,
      "referenceAuthor": true,
      "publicationArtist": true,
      "publicationDesigner": true,
      "publicationEditor": true,
      "publicityArtist": true,
      "cbsDigitalStaff": true,
      "ilmProductionStaff": true,
      "specialFeaturesStaff": true,
      "storyEditor": true,
      "studioExecutive": true,
      "stuntDepartment": true,
      "transportationDepartment": true,
      "videoGameProductionStaff": true,
      "writer": true
    }
  ],
  "staff": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "artDepartment": true,
      "artDirector": true,
      "productionDesigner": true,
      "cameraAndElectricalDepartment": true,
      "cinematographer": true,
      "castingDepartment": true,
      "costumeDepartment": true,
      "costumeDesigner": true,
      "director": true,
      "assistantOrSecondUnitDirector": true,
      "exhibitAndAttractionStaff": true,
      "filmEditor": true,
      "linguist": true,
      "locationStaff": true,
      "makeupStaff": true,
      "musicDepartment": true,
      "composer": true,
      "personalAssistant": true,
      "producer": true,
      "productionAssociate": true,
      "productionStaff": true,
      "publicationStaff": true,
      "scienceConsultant": true,
      "soundDepartment": true,
      "specialAndVisualEffectsStaff": true,
      "author": true,
      "audioAuthor": true,
      "calendarArtist": true,
      "comicArtist": true,
      "comicAuthor": true,
      "comicColorArtist": true,
      "comicInteriorArtist": true,
      "comicInkArtist": true,
      "comicPencilArtist": true,
      "comicLetterArtist": true,
      "comicStripArtist": true,
      "gameArtist": true,
      "gameAuthor": true,
      "novelArtist": true,
      "novelAuthor": true,
      "referenceArtist": true,
      "referenceAuthor": true,
      "publicationArtist": true,
      "publicationDesigner": true,
      "publicationEditor": true,
      "publicityArtist": true,
      "cbsDigitalStaff": true,
      "ilmProductionStaff": true,
      "specialFeaturesStaff": true,
      "storyEditor": true,
      "studioExecutive": true,
      "stuntDepartment": true,
      "transportationDepartment": true,
      "videoGameProductionStaff": true,
      "writer": true
    }
  ],
  "performers": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "animalPerformer": true,
      "disPerformer": true,
      "ds9Performer": true,
      "entPerformer": true,
      "filmPerformer": true,
      "standInPerformer": true,
      "stuntPerformer": true,
      "tasPerformer": true,
      "tngPerformer": true,
      "tosPerformer": true,
      "videoGamePerformer": true,
      "voicePerformer": true,
      "voyPerformer": true
    }
  ],
  "stuntPerformers": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "animalPerformer": true,
      "disPerformer": true,
      "ds9Performer": true,
      "entPerformer": true,
      "filmPerformer": true,
      "standInPerformer": true,
      "stuntPerformer": true,
      "tasPerformer": true,
      "tngPerformer": true,
      "tosPerformer": true,
      "videoGamePerformer": true,
      "voicePerformer": true,
      "voyPerformer": true
    }
  ],
  "standInPerformers": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "animalPerformer": true,
      "disPerformer": true,
      "ds9Performer": true,
      "entPerformer": true,
      "filmPerformer": true,
      "standInPerformer": true,
      "stuntPerformer": true,
      "tasPerformer": true,
      "tngPerformer": true,
      "tosPerformer": true,
      "videoGamePerformer": true,
      "voicePerformer": true,
      "voyPerformer": true
    }
  ],
  "characters": [
    {
      "uid": "string",
      "name": "string",
      "gender": "F",
      "yearOfBirth": 0,
      "monthOfBirth": 0,
      "dayOfBirth": 0,
      "placeOfBirth": "string",
      "yearOfDeath": 0,
      "monthOfDeath": 0,
      "dayOfDeath": 0,
      "placeOfDeath": "string",
      "height": 0,
      "weight": 0,
      "deceased": true,
      "bloodType": "B_NEGATIVE",
      "maritalStatus": "SINGLE",
      "serialNumber": "string",
      "hologramActivationDate": "string",
      "hologramStatus": "string",
      "hologramDateStatus": "string",
      "hologram": true,
      "fictionalCharacter": true,
      "mirror": true,
      "alternateReality": true
    }
  ]
}
```

Full movie, returned when queried using UID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Movie unique ID|
|title|string|true|none|Movie title|
|mainDirector|[StaffBase](#schemastaffbase)|false|none|Base staff, returned in search results|
|titleBulgarian|string|false|none|Movie title in Bulgarian|
|titleCatalan|string|false|none|Movie title in Catalan|
|titleChineseTraditional|string|false|none|Movie title in Chinese traditional|
|titleGerman|string|false|none|Movie title in German|
|titleItalian|string|false|none|Movie title in Italian|
|titleJapanese|string|false|none|Movie title in Japanese|
|titlePolish|string|false|none|Movie title in Polish|
|titleRussian|string|false|none|Movie title in Russian|
|titleSerbian|string|false|none|Movie title in Serbian|
|titleSpanish|string|false|none|Movie title in Spanish|
|stardateFrom|number(float)|false|none|Starting stardate of movie story|
|stardateTo|number(float)|false|none|Ending stardate of movie story|
|yearFrom|integer|false|none|Starting year of movie story|
|yearTo|integer|false|none|Ending year of movie story|
|usReleaseDate|string(date)|false|none|Date the movie was first released in the United States|
|writers|[[StaffBase](#schemastaffbase)]|false|none|Writers involved in the movie|
|screenplayAuthors|[[StaffBase](#schemastaffbase)]|false|none|Screenplay authors involved in the movie|
|storyAuthors|[[StaffBase](#schemastaffbase)]|false|none|Story authors authors involved in the movie|
|directors|[[StaffBase](#schemastaffbase)]|false|none|Directors authors involved in the movie|
|producers|[[StaffBase](#schemastaffbase)]|false|none|Producers authors involved in the movie|
|staff|[[StaffBase](#schemastaffbase)]|false|none|Other staff involved in the movie|
|performers|[[PerformerBase](#schemaperformerbase)]|false|none|Performers appearing in the movie|
|stuntPerformers|[[PerformerBase](#schemaperformerbase)]|false|none|Stunt performers appearing in the movie|
|standInPerformers|[[PerformerBase](#schemaperformerbase)]|false|none|Stand-in performers appearing in the movie|
|characters|[[CharacterBase](#schemacharacterbase)]|false|none|Characters appearing in the movie|

<h2 id="tocS_MovieBaseResponse">MovieBaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemamoviebaseresponse"></a>
<a id="schema_MovieBaseResponse"></a>
<a id="tocSmoviebaseresponse"></a>
<a id="tocsmoviebaseresponse"></a>

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "movies": [
    {
      "uid": "string",
      "title": "string",
      "mainDirector": {
        "uid": "string",
        "name": "string"
      },
      "titleBulgarian": "string",
      "titleCatalan": "string",
      "titleChineseTraditional": "string",
      "titleGerman": "string",
      "titleItalian": "string",
      "titleJapanese": "string",
      "titlePolish": "string",
      "titleRussian": "string",
      "titleSerbian": "string",
      "titleSpanish": "string",
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "usReleaseDate": "1970-01-01"
    }
  ]
}
```

Response object for movies search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|[ResponsePage](#schemaresponsepage)|false|none|Object describing response page|
|sort|[ResponseSort](#schemaresponsesort)|false|none|Response sort|
|movies|[[MovieBase](#schemamoviebase)]|false|none|List of movies matching given criteria|

<h2 id="tocS_MovieFullResponse">MovieFullResponse</h2>
<!-- backwards compatibility -->
<a id="schemamoviefullresponse"></a>
<a id="schema_MovieFullResponse"></a>
<a id="tocSmoviefullresponse"></a>
<a id="tocsmoviefullresponse"></a>

```json
{
  "movie": {
    "uid": "string",
    "title": "string",
    "mainDirector": {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "artDepartment": true,
      "artDirector": true,
      "productionDesigner": true,
      "cameraAndElectricalDepartment": true,
      "cinematographer": true,
      "castingDepartment": true,
      "costumeDepartment": true,
      "costumeDesigner": true,
      "director": true,
      "assistantOrSecondUnitDirector": true,
      "exhibitAndAttractionStaff": true,
      "filmEditor": true,
      "linguist": true,
      "locationStaff": true,
      "makeupStaff": true,
      "musicDepartment": true,
      "composer": true,
      "personalAssistant": true,
      "producer": true,
      "productionAssociate": true,
      "productionStaff": true,
      "publicationStaff": true,
      "scienceConsultant": true,
      "soundDepartment": true,
      "specialAndVisualEffectsStaff": true,
      "author": true,
      "audioAuthor": true,
      "calendarArtist": true,
      "comicArtist": true,
      "comicAuthor": true,
      "comicColorArtist": true,
      "comicInteriorArtist": true,
      "comicInkArtist": true,
      "comicPencilArtist": true,
      "comicLetterArtist": true,
      "comicStripArtist": true,
      "gameArtist": true,
      "gameAuthor": true,
      "novelArtist": true,
      "novelAuthor": true,
      "referenceArtist": true,
      "referenceAuthor": true,
      "publicationArtist": true,
      "publicationDesigner": true,
      "publicationEditor": true,
      "publicityArtist": true,
      "cbsDigitalStaff": true,
      "ilmProductionStaff": true,
      "specialFeaturesStaff": true,
      "storyEditor": true,
      "studioExecutive": true,
      "stuntDepartment": true,
      "transportationDepartment": true,
      "videoGameProductionStaff": true,
      "writer": true
    },
    "titleBulgarian": "string",
    "titleCatalan": "string",
    "titleChineseTraditional": "string",
    "titleGerman": "string",
    "titleItalian": "string",
    "titleJapanese": "string",
    "titlePolish": "string",
    "titleRussian": "string",
    "titleSerbian": "string",
    "titleSpanish": "string",
    "stardateFrom": 0,
    "stardateTo": 0,
    "yearFrom": 0,
    "yearTo": 0,
    "usReleaseDate": "1970-01-01",
    "writers": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "screenplayAuthors": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "storyAuthors": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "directors": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "producers": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "staff": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "performers": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "animalPerformer": true,
        "disPerformer": true,
        "ds9Performer": true,
        "entPerformer": true,
        "filmPerformer": true,
        "standInPerformer": true,
        "stuntPerformer": true,
        "tasPerformer": true,
        "tngPerformer": true,
        "tosPerformer": true,
        "videoGamePerformer": true,
        "voicePerformer": true,
        "voyPerformer": true
      }
    ],
    "stuntPerformers": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "animalPerformer": true,
        "disPerformer": true,
        "ds9Performer": true,
        "entPerformer": true,
        "filmPerformer": true,
        "standInPerformer": true,
        "stuntPerformer": true,
        "tasPerformer": true,
        "tngPerformer": true,
        "tosPerformer": true,
        "videoGamePerformer": true,
        "voicePerformer": true,
        "voyPerformer": true
      }
    ],
    "standInPerformers": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "animalPerformer": true,
        "disPerformer": true,
        "ds9Performer": true,
        "entPerformer": true,
        "filmPerformer": true,
        "standInPerformer": true,
        "stuntPerformer": true,
        "tasPerformer": true,
        "tngPerformer": true,
        "tosPerformer": true,
        "videoGamePerformer": true,
        "voicePerformer": true,
        "voyPerformer": true
      }
    ],
    "characters": [
      {
        "uid": "string",
        "name": "string",
        "gender": "F",
        "yearOfBirth": 0,
        "monthOfBirth": 0,
        "dayOfBirth": 0,
        "placeOfBirth": "string",
        "yearOfDeath": 0,
        "monthOfDeath": 0,
        "dayOfDeath": 0,
        "placeOfDeath": "string",
        "height": 0,
        "weight": 0,
        "deceased": true,
        "bloodType": "B_NEGATIVE",
        "maritalStatus": "SINGLE",
        "serialNumber": "string",
        "hologramActivationDate": "string",
        "hologramStatus": "string",
        "hologramDateStatus": "string",
        "hologram": true,
        "fictionalCharacter": true,
        "mirror": true,
        "alternateReality": true
      }
    ]
  }
}
```

Response object for single movie query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|movie|[MovieFull](#schemamoviefull)|false|none|Full movie, returned when queried using UID|

<h2 id="tocS_OccupationHeader">OccupationHeader</h2>
<!-- backwards compatibility -->
<a id="schemaoccupationheader"></a>
<a id="schema_OccupationHeader"></a>
<a id="tocSoccupationheader"></a>
<a id="tocsoccupationheader"></a>

```json
{
  "uid": "string",
  "name": "string"
}
```

Header occupation, embedded in other objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Occupation unique ID|
|name|string|true|none|Occupation name|

<h2 id="tocS_OccupationBase">OccupationBase</h2>
<!-- backwards compatibility -->
<a id="schemaoccupationbase"></a>
<a id="schema_OccupationBase"></a>
<a id="tocSoccupationbase"></a>
<a id="tocsoccupationbase"></a>

```json
{
  "uid": "string",
  "name": "string",
  "legalOccupation": true,
  "medicalOccupation": true,
  "scientificOccupation": true
}
```

Base occupations, returned in search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Occupation unique ID|
|name|string|true|none|Occupation name|
|legalOccupation|boolean|false|none|Whether it's a legal occupation|
|medicalOccupation|boolean|false|none|Whether it's a medical occupation|
|scientificOccupation|boolean|false|none|Whether it's a scientific occupation|

<h2 id="tocS_OccupationFull">OccupationFull</h2>
<!-- backwards compatibility -->
<a id="schemaoccupationfull"></a>
<a id="schema_OccupationFull"></a>
<a id="tocSoccupationfull"></a>
<a id="tocsoccupationfull"></a>

```json
{
  "uid": "string",
  "name": "string",
  "legalOccupation": true,
  "medicalOccupation": true,
  "scientificOccupation": true,
  "characters": [
    {
      "uid": "string",
      "name": "string",
      "gender": "F",
      "yearOfBirth": 0,
      "monthOfBirth": 0,
      "dayOfBirth": 0,
      "placeOfBirth": "string",
      "yearOfDeath": 0,
      "monthOfDeath": 0,
      "dayOfDeath": 0,
      "placeOfDeath": "string",
      "height": 0,
      "weight": 0,
      "deceased": true,
      "bloodType": "B_NEGATIVE",
      "maritalStatus": "SINGLE",
      "serialNumber": "string",
      "hologramActivationDate": "string",
      "hologramStatus": "string",
      "hologramDateStatus": "string",
      "hologram": true,
      "fictionalCharacter": true,
      "mirror": true,
      "alternateReality": true
    }
  ]
}
```

Full occupation, returned when queried using UID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Occupation unique ID|
|name|string|true|none|Occupation name|
|legalOccupation|boolean|false|none|Whether it's a legal occupation|
|medicalOccupation|boolean|false|none|Whether it's a medical occupation|
|scientificOccupation|boolean|false|none|Whether it's a scientific occupation|
|characters|[[CharacterBase](#schemacharacterbase)]|false|none|Characters with this occupation|

<h2 id="tocS_OccupationBaseResponse">OccupationBaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemaoccupationbaseresponse"></a>
<a id="schema_OccupationBaseResponse"></a>
<a id="tocSoccupationbaseresponse"></a>
<a id="tocsoccupationbaseresponse"></a>

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "occupations": [
    {
      "uid": "string",
      "name": "string",
      "legalOccupation": true,
      "medicalOccupation": true,
      "scientificOccupation": true
    }
  ]
}
```

Response object for occupations search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|[ResponsePage](#schemaresponsepage)|false|none|Object describing response page|
|sort|[ResponseSort](#schemaresponsesort)|false|none|Response sort|
|occupations|[[OccupationBase](#schemaoccupationbase)]|false|none|List of occupations matching given criteria|

<h2 id="tocS_OccupationFullResponse">OccupationFullResponse</h2>
<!-- backwards compatibility -->
<a id="schemaoccupationfullresponse"></a>
<a id="schema_OccupationFullResponse"></a>
<a id="tocSoccupationfullresponse"></a>
<a id="tocsoccupationfullresponse"></a>

```json
{
  "occupation": {
    "uid": "string",
    "name": "string",
    "legalOccupation": true,
    "medicalOccupation": true,
    "scientificOccupation": true,
    "characters": [
      {
        "uid": "string",
        "name": "string",
        "gender": "F",
        "yearOfBirth": 0,
        "monthOfBirth": 0,
        "dayOfBirth": 0,
        "placeOfBirth": "string",
        "yearOfDeath": 0,
        "monthOfDeath": 0,
        "dayOfDeath": 0,
        "placeOfDeath": "string",
        "height": 0,
        "weight": 0,
        "deceased": true,
        "bloodType": "B_NEGATIVE",
        "maritalStatus": "SINGLE",
        "serialNumber": "string",
        "hologramActivationDate": "string",
        "hologramStatus": "string",
        "hologramDateStatus": "string",
        "hologram": true,
        "fictionalCharacter": true,
        "mirror": true,
        "alternateReality": true
      }
    ]
  }
}
```

Response object for single occupation query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|occupation|[OccupationFull](#schemaoccupationfull)|false|none|Full occupation, returned when queried using UID|

<h2 id="tocS_OrganizationHeader">OrganizationHeader</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationheader"></a>
<a id="schema_OrganizationHeader"></a>
<a id="tocSorganizationheader"></a>
<a id="tocsorganizationheader"></a>

```json
{
  "uid": "string",
  "name": "string"
}
```

Header organization, embedded in other objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Organization unique ID|
|name|string|true|none|Organization name|

<h2 id="tocS_OrganizationBase">OrganizationBase</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationbase"></a>
<a id="schema_OrganizationBase"></a>
<a id="tocSorganizationbase"></a>
<a id="tocsorganizationbase"></a>

```json
{
  "uid": "string",
  "name": "string",
  "government": true,
  "intergovernmentalOrganization": true,
  "researchOrganization": true,
  "sportOrganization": true,
  "medicalOrganization": true,
  "militaryOrganization": true,
  "militaryUnit": true,
  "governmentAgency": true,
  "lawEnforcementAgency": true,
  "prisonOrPenalColony": true,
  "mirror": true,
  "alternateReality": true
}
```

Base organization, returned in search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Organization unique ID|
|name|string|true|none|Organization name|
|government|boolean|false|none|Whether it's a government|
|intergovernmentalOrganization|boolean|false|none|Whether it's an intergovernmental organization|
|researchOrganization|boolean|false|none|Whether it's a research organization|
|sportOrganization|boolean|false|none|Whether it's a sport organization|
|medicalOrganization|boolean|false|none|Whether it's a medical organization|
|militaryOrganization|boolean|false|none|Whether it's a military organization|
|militaryUnit|boolean|false|none|Whether it's a military unit|
|governmentAgency|boolean|false|none|Whether it's a government agency|
|lawEnforcementAgency|boolean|false|none|Whether it's a law enforcement agency|
|prisonOrPenalColony|boolean|false|none|Whether it's a prison or penal colony|
|mirror|boolean|false|none|Whether this organization is from mirror universe|
|alternateReality|boolean|false|none|Whether this location is from alternate reality|

<h2 id="tocS_OrganizationFull">OrganizationFull</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationfull"></a>
<a id="schema_OrganizationFull"></a>
<a id="tocSorganizationfull"></a>
<a id="tocsorganizationfull"></a>

```json
{
  "uid": "string",
  "name": "string",
  "government": true,
  "intergovernmentalOrganization": true,
  "researchOrganization": true,
  "sportOrganization": true,
  "medicalOrganization": true,
  "militaryOrganization": true,
  "militaryUnit": true,
  "governmentAgency": true,
  "lawEnforcementAgency": true,
  "prisonOrPenalColony": true,
  "mirror": true,
  "alternateReality": true,
  "characters": [
    {
      "uid": "string",
      "name": "string",
      "gender": "F",
      "yearOfBirth": 0,
      "monthOfBirth": 0,
      "dayOfBirth": 0,
      "placeOfBirth": "string",
      "yearOfDeath": 0,
      "monthOfDeath": 0,
      "dayOfDeath": 0,
      "placeOfDeath": "string",
      "height": 0,
      "weight": 0,
      "deceased": true,
      "bloodType": "B_NEGATIVE",
      "maritalStatus": "SINGLE",
      "serialNumber": "string",
      "hologramActivationDate": "string",
      "hologramStatus": "string",
      "hologramDateStatus": "string",
      "hologram": true,
      "fictionalCharacter": true,
      "mirror": true,
      "alternateReality": true
    }
  ]
}
```

Full organization, returned when queried using UID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Organization unique ID|
|name|string|true|none|Organization name|
|government|boolean|false|none|Whether it's a government|
|intergovernmentalOrganization|boolean|false|none|Whether it's an intergovernmental organization|
|researchOrganization|boolean|false|none|Whether it's a research organization|
|sportOrganization|boolean|false|none|Whether it's a sport organization|
|medicalOrganization|boolean|false|none|Whether it's a medical organization|
|militaryOrganization|boolean|false|none|Whether it's a military organization|
|militaryUnit|boolean|false|none|Whether it's a military unit|
|governmentAgency|boolean|false|none|Whether it's a government agency|
|lawEnforcementAgency|boolean|false|none|Whether it's a law enforcement agency|
|prisonOrPenalColony|boolean|false|none|Whether it's a prison or penal colony|
|mirror|boolean|false|none|Whether this organization is from mirror universe|
|alternateReality|boolean|false|none|Whether this organization is from alternate reality|
|characters|[[CharacterBase](#schemacharacterbase)]|false|none|Characters belonging to this organization|

<h2 id="tocS_OrganizationBaseResponse">OrganizationBaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationbaseresponse"></a>
<a id="schema_OrganizationBaseResponse"></a>
<a id="tocSorganizationbaseresponse"></a>
<a id="tocsorganizationbaseresponse"></a>

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "organizations": [
    {
      "uid": "string",
      "name": "string",
      "government": true,
      "intergovernmentalOrganization": true,
      "researchOrganization": true,
      "sportOrganization": true,
      "medicalOrganization": true,
      "militaryOrganization": true,
      "militaryUnit": true,
      "governmentAgency": true,
      "lawEnforcementAgency": true,
      "prisonOrPenalColony": true,
      "mirror": true,
      "alternateReality": true
    }
  ]
}
```

Response object for organizations search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|[ResponsePage](#schemaresponsepage)|false|none|Object describing response page|
|sort|[ResponseSort](#schemaresponsesort)|false|none|Response sort|
|organizations|[[OrganizationBase](#schemaorganizationbase)]|false|none|List of organizations matching given criteria|

<h2 id="tocS_OrganizationFullResponse">OrganizationFullResponse</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationfullresponse"></a>
<a id="schema_OrganizationFullResponse"></a>
<a id="tocSorganizationfullresponse"></a>
<a id="tocsorganizationfullresponse"></a>

```json
{
  "organization": {
    "uid": "string",
    "name": "string",
    "government": true,
    "intergovernmentalOrganization": true,
    "researchOrganization": true,
    "sportOrganization": true,
    "medicalOrganization": true,
    "militaryOrganization": true,
    "militaryUnit": true,
    "governmentAgency": true,
    "lawEnforcementAgency": true,
    "prisonOrPenalColony": true,
    "mirror": true,
    "alternateReality": true,
    "characters": [
      {
        "uid": "string",
        "name": "string",
        "gender": "F",
        "yearOfBirth": 0,
        "monthOfBirth": 0,
        "dayOfBirth": 0,
        "placeOfBirth": "string",
        "yearOfDeath": 0,
        "monthOfDeath": 0,
        "dayOfDeath": 0,
        "placeOfDeath": "string",
        "height": 0,
        "weight": 0,
        "deceased": true,
        "bloodType": "B_NEGATIVE",
        "maritalStatus": "SINGLE",
        "serialNumber": "string",
        "hologramActivationDate": "string",
        "hologramStatus": "string",
        "hologramDateStatus": "string",
        "hologram": true,
        "fictionalCharacter": true,
        "mirror": true,
        "alternateReality": true
      }
    ]
  }
}
```

Response object for single organization query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|organization|[OrganizationFull](#schemaorganizationfull)|false|none|Full organization, returned when queried using UID|

<h2 id="tocS_PerformerHeader">PerformerHeader</h2>
<!-- backwards compatibility -->
<a id="schemaperformerheader"></a>
<a id="schema_PerformerHeader"></a>
<a id="tocSperformerheader"></a>
<a id="tocsperformerheader"></a>

```json
{
  "uid": "string",
  "name": "string"
}
```

Header performer, embedded in other objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Performer unique ID|
|name|string|true|none|Performer name|

<h2 id="tocS_PerformerBase">PerformerBase</h2>
<!-- backwards compatibility -->
<a id="schemaperformerbase"></a>
<a id="schema_PerformerBase"></a>
<a id="tocSperformerbase"></a>
<a id="tocsperformerbase"></a>

```json
{
  "uid": "string",
  "name": "string",
  "birthName": "string",
  "gender": "F",
  "dateOfBirth": "1970-01-01",
  "placeOfBirth": "string",
  "dateOfDeath": "1970-01-01",
  "placeOfDeath": "string",
  "animalPerformer": true,
  "disPerformer": true,
  "ds9Performer": true,
  "entPerformer": true,
  "filmPerformer": true,
  "standInPerformer": true,
  "stuntPerformer": true,
  "tasPerformer": true,
  "tngPerformer": true,
  "tosPerformer": true,
  "videoGamePerformer": true,
  "voicePerformer": true,
  "voyPerformer": true
}
```

Base performer, returned in search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Performer unique ID|
|name|string|true|none|Performer name|
|birthName|string|false|none|Performer birth name|
|gender|[Gender](#schemagender)|false|none|Gender|
|dateOfBirth|string(date)|false|none|Date the performer was born|
|placeOfBirth|string|false|none|Place the performer was born|
|dateOfDeath|string(date)|false|none|Date the performer died|
|placeOfDeath|string|false|none|Place the performer died|
|animalPerformer|boolean|false|none|Whether it's an animal performer|
|disPerformer|boolean|false|none|Whether it's a performer that appeared in Star Trek: Discovery|
|ds9Performer|boolean|false|none|Whether it's a performer that appeared in Star Trek: Deep Space Nine|
|entPerformer|boolean|false|none|Whether it's a performer that appeared in Star Trek: Enterprise|
|filmPerformer|boolean|false|none|Whether it's a performer that appeared in a Star Trek movie|
|standInPerformer|boolean|false|none|Whether it's a stand-in performer|
|stuntPerformer|boolean|false|none|Whether it's a stunt performer|
|tasPerformer|boolean|false|none|Whether it's a performer that appeared in Star Trek: The Animated Series|
|tngPerformer|boolean|false|none|Whether it's a performer that appeared in Star Trek: The Next Generation|
|tosPerformer|boolean|false|none|Whether it's a performer that appeared in Star Trek: The Original Series|
|videoGamePerformer|boolean|false|none|Whether it's a video game performer|
|voicePerformer|boolean|false|none|Whether it's a voice performer|
|voyPerformer|boolean|false|none|Whether it's a performer that appeared in Star Trek: Voyager|

#### Enumerated Values

|Property|Value|
|---|---|
|gender|F|
|gender|M|

<h2 id="tocS_PerformerFull">PerformerFull</h2>
<!-- backwards compatibility -->
<a id="schemaperformerfull"></a>
<a id="schema_PerformerFull"></a>
<a id="tocSperformerfull"></a>
<a id="tocsperformerfull"></a>

```json
{
  "uid": "string",
  "name": "string",
  "birthName": "string",
  "gender": "F",
  "dateOfBirth": "1970-01-01",
  "placeOfBirth": "string",
  "dateOfDeath": "1970-01-01",
  "placeOfDeath": "string",
  "animalPerformer": true,
  "disPerformer": true,
  "ds9Performer": true,
  "entPerformer": true,
  "filmPerformer": true,
  "standInPerformer": true,
  "stuntPerformer": true,
  "tasPerformer": true,
  "tngPerformer": true,
  "tosPerformer": true,
  "videoGamePerformer": true,
  "voicePerformer": true,
  "voyPerformer": true,
  "episodesPerformances": [
    {
      "uid": "string",
      "title": "string",
      "titleGerman": "string",
      "titleItalian": "string",
      "titleJapanese": "string",
      "series": {
        "uid": "string",
        "title": "string"
      },
      "season": {
        "uid": "string",
        "title": "string"
      },
      "seasonNumber": 0,
      "episodeNumber": 0,
      "productionSerialNumber": "string",
      "featureLength": true,
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "usAirDate": "1970-01-01",
      "finalScriptDate": "1970-01-01"
    }
  ],
  "episodesStuntPerformances": [
    {
      "uid": "string",
      "title": "string",
      "titleGerman": "string",
      "titleItalian": "string",
      "titleJapanese": "string",
      "series": {
        "uid": "string",
        "title": "string"
      },
      "season": {
        "uid": "string",
        "title": "string"
      },
      "seasonNumber": 0,
      "episodeNumber": 0,
      "productionSerialNumber": "string",
      "featureLength": true,
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "usAirDate": "1970-01-01",
      "finalScriptDate": "1970-01-01"
    }
  ],
  "episodesStandInPerformances": [
    {
      "uid": "string",
      "title": "string",
      "titleGerman": "string",
      "titleItalian": "string",
      "titleJapanese": "string",
      "series": {
        "uid": "string",
        "title": "string"
      },
      "season": {
        "uid": "string",
        "title": "string"
      },
      "seasonNumber": 0,
      "episodeNumber": 0,
      "productionSerialNumber": "string",
      "featureLength": true,
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "usAirDate": "1970-01-01",
      "finalScriptDate": "1970-01-01"
    }
  ],
  "moviesPerformances": [
    {
      "uid": "string",
      "title": "string",
      "mainDirector": {
        "uid": "string",
        "name": "string"
      },
      "titleBulgarian": "string",
      "titleCatalan": "string",
      "titleChineseTraditional": "string",
      "titleGerman": "string",
      "titleItalian": "string",
      "titleJapanese": "string",
      "titlePolish": "string",
      "titleRussian": "string",
      "titleSerbian": "string",
      "titleSpanish": "string",
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "usReleaseDate": "1970-01-01"
    }
  ],
  "moviesStuntPerformances": [
    {
      "uid": "string",
      "title": "string",
      "mainDirector": {
        "uid": "string",
        "name": "string"
      },
      "titleBulgarian": "string",
      "titleCatalan": "string",
      "titleChineseTraditional": "string",
      "titleGerman": "string",
      "titleItalian": "string",
      "titleJapanese": "string",
      "titlePolish": "string",
      "titleRussian": "string",
      "titleSerbian": "string",
      "titleSpanish": "string",
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "usReleaseDate": "1970-01-01"
    }
  ],
  "moviesStandInPerformances": [
    {
      "uid": "string",
      "title": "string",
      "mainDirector": {
        "uid": "string",
        "name": "string"
      },
      "titleBulgarian": "string",
      "titleCatalan": "string",
      "titleChineseTraditional": "string",
      "titleGerman": "string",
      "titleItalian": "string",
      "titleJapanese": "string",
      "titlePolish": "string",
      "titleRussian": "string",
      "titleSerbian": "string",
      "titleSpanish": "string",
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "usReleaseDate": "1970-01-01"
    }
  ],
  "characters": [
    {
      "uid": "string",
      "name": "string",
      "gender": "F",
      "yearOfBirth": 0,
      "monthOfBirth": 0,
      "dayOfBirth": 0,
      "placeOfBirth": "string",
      "yearOfDeath": 0,
      "monthOfDeath": 0,
      "dayOfDeath": 0,
      "placeOfDeath": "string",
      "height": 0,
      "weight": 0,
      "deceased": true,
      "bloodType": "B_NEGATIVE",
      "maritalStatus": "SINGLE",
      "serialNumber": "string",
      "hologramActivationDate": "string",
      "hologramStatus": "string",
      "hologramDateStatus": "string",
      "hologram": true,
      "fictionalCharacter": true,
      "mirror": true,
      "alternateReality": true
    }
  ]
}
```

Full performer, returned when queried using UID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Performer unique ID|
|name|string|true|none|Performer name|
|birthName|string|false|none|Performer birth name|
|gender|[Gender](#schemagender)|false|none|Gender|
|dateOfBirth|string(date)|false|none|Date the performer was born|
|placeOfBirth|string|false|none|Place the performer was born|
|dateOfDeath|string(date)|false|none|Date the performer died|
|placeOfDeath|string|false|none|Place the performer died|
|animalPerformer|boolean|false|none|Whether it's an animal performer|
|disPerformer|boolean|false|none|Whether it's a performer that appeared in Star Trek: Discovery|
|ds9Performer|boolean|false|none|Whether it's a performer that appeared in Star Trek: Deep Space Nine|
|entPerformer|boolean|false|none|Whether it's a performer that appeared in Star Trek: Enterprise|
|filmPerformer|boolean|false|none|Whether it's a performer that appeared in a Star Trek movie|
|standInPerformer|boolean|false|none|Whether it's a stand-in performer|
|stuntPerformer|boolean|false|none|Whether it's a stunt performer|
|tasPerformer|boolean|false|none|Whether it's a performer that appeared in Star Trek: The Animated Series|
|tngPerformer|boolean|false|none|Whether it's a performer that appeared in Star Trek: The Next Generation|
|tosPerformer|boolean|false|none|Whether it's a performer that appeared in Star Trek: The Original Series|
|videoGamePerformer|boolean|false|none|Whether it's a video game performer|
|voicePerformer|boolean|false|none|Whether it's a voice performer|
|voyPerformer|boolean|false|none|Whether it's a performer that appeared in Star Trek: Voyager|
|episodesPerformances|[[EpisodeBase](#schemaepisodebase)]|false|none|Episodes in which this person appeared as a performer|
|episodesStuntPerformances|[[EpisodeBase](#schemaepisodebase)]|false|none|Episodes in which this person appeared as a stunt performer|
|episodesStandInPerformances|[[EpisodeBase](#schemaepisodebase)]|false|none|Episodes in which this person appeared as a stand-in performer|
|moviesPerformances|[[MovieBase](#schemamoviebase)]|false|none|Movies in which this person appeared as a performer|
|moviesStuntPerformances|[[MovieBase](#schemamoviebase)]|false|none|Movies in which this person appeared as a stunt performer|
|moviesStandInPerformances|[[MovieBase](#schemamoviebase)]|false|none|Movies in which this person appeared as a stand-in performer|
|characters|[[CharacterBase](#schemacharacterbase)]|false|none|Characters played by this performer|

#### Enumerated Values

|Property|Value|
|---|---|
|gender|F|
|gender|M|

<h2 id="tocS_PerformerBaseResponse">PerformerBaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemaperformerbaseresponse"></a>
<a id="schema_PerformerBaseResponse"></a>
<a id="tocSperformerbaseresponse"></a>
<a id="tocsperformerbaseresponse"></a>

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "performers": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "animalPerformer": true,
      "disPerformer": true,
      "ds9Performer": true,
      "entPerformer": true,
      "filmPerformer": true,
      "standInPerformer": true,
      "stuntPerformer": true,
      "tasPerformer": true,
      "tngPerformer": true,
      "tosPerformer": true,
      "videoGamePerformer": true,
      "voicePerformer": true,
      "voyPerformer": true
    }
  ]
}
```

Response object for performers search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|[ResponsePage](#schemaresponsepage)|false|none|Object describing response page|
|sort|[ResponseSort](#schemaresponsesort)|false|none|Response sort|
|performers|[[PerformerBase](#schemaperformerbase)]|false|none|List of performers matching given criteria|

<h2 id="tocS_PerformerFullResponse">PerformerFullResponse</h2>
<!-- backwards compatibility -->
<a id="schemaperformerfullresponse"></a>
<a id="schema_PerformerFullResponse"></a>
<a id="tocSperformerfullresponse"></a>
<a id="tocsperformerfullresponse"></a>

```json
{
  "performer": {
    "uid": "string",
    "name": "string",
    "birthName": "string",
    "gender": "F",
    "dateOfBirth": "1970-01-01",
    "placeOfBirth": "string",
    "dateOfDeath": "1970-01-01",
    "placeOfDeath": "string",
    "animalPerformer": true,
    "disPerformer": true,
    "ds9Performer": true,
    "entPerformer": true,
    "filmPerformer": true,
    "standInPerformer": true,
    "stuntPerformer": true,
    "tasPerformer": true,
    "tngPerformer": true,
    "tosPerformer": true,
    "videoGamePerformer": true,
    "voicePerformer": true,
    "voyPerformer": true,
    "episodesPerformances": [
      {
        "uid": "string",
        "title": "string",
        "titleGerman": "string",
        "titleItalian": "string",
        "titleJapanese": "string",
        "series": {
          "uid": "string",
          "title": "string"
        },
        "season": {
          "uid": "string",
          "title": "string"
        },
        "seasonNumber": 0,
        "episodeNumber": 0,
        "productionSerialNumber": "string",
        "featureLength": true,
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "usAirDate": "1970-01-01",
        "finalScriptDate": "1970-01-01"
      }
    ],
    "episodesStuntPerformances": [
      {
        "uid": "string",
        "title": "string",
        "titleGerman": "string",
        "titleItalian": "string",
        "titleJapanese": "string",
        "series": {
          "uid": "string",
          "title": "string"
        },
        "season": {
          "uid": "string",
          "title": "string"
        },
        "seasonNumber": 0,
        "episodeNumber": 0,
        "productionSerialNumber": "string",
        "featureLength": true,
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "usAirDate": "1970-01-01",
        "finalScriptDate": "1970-01-01"
      }
    ],
    "episodesStandInPerformances": [
      {
        "uid": "string",
        "title": "string",
        "titleGerman": "string",
        "titleItalian": "string",
        "titleJapanese": "string",
        "series": {
          "uid": "string",
          "title": "string"
        },
        "season": {
          "uid": "string",
          "title": "string"
        },
        "seasonNumber": 0,
        "episodeNumber": 0,
        "productionSerialNumber": "string",
        "featureLength": true,
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "usAirDate": "1970-01-01",
        "finalScriptDate": "1970-01-01"
      }
    ],
    "moviesPerformances": [
      {
        "uid": "string",
        "title": "string",
        "mainDirector": {
          "uid": "string",
          "name": "string"
        },
        "titleBulgarian": "string",
        "titleCatalan": "string",
        "titleChineseTraditional": "string",
        "titleGerman": "string",
        "titleItalian": "string",
        "titleJapanese": "string",
        "titlePolish": "string",
        "titleRussian": "string",
        "titleSerbian": "string",
        "titleSpanish": "string",
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "usReleaseDate": "1970-01-01"
      }
    ],
    "moviesStuntPerformances": [
      {
        "uid": "string",
        "title": "string",
        "mainDirector": {
          "uid": "string",
          "name": "string"
        },
        "titleBulgarian": "string",
        "titleCatalan": "string",
        "titleChineseTraditional": "string",
        "titleGerman": "string",
        "titleItalian": "string",
        "titleJapanese": "string",
        "titlePolish": "string",
        "titleRussian": "string",
        "titleSerbian": "string",
        "titleSpanish": "string",
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "usReleaseDate": "1970-01-01"
      }
    ],
    "moviesStandInPerformances": [
      {
        "uid": "string",
        "title": "string",
        "mainDirector": {
          "uid": "string",
          "name": "string"
        },
        "titleBulgarian": "string",
        "titleCatalan": "string",
        "titleChineseTraditional": "string",
        "titleGerman": "string",
        "titleItalian": "string",
        "titleJapanese": "string",
        "titlePolish": "string",
        "titleRussian": "string",
        "titleSerbian": "string",
        "titleSpanish": "string",
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "usReleaseDate": "1970-01-01"
      }
    ],
    "characters": [
      {
        "uid": "string",
        "name": "string",
        "gender": "F",
        "yearOfBirth": 0,
        "monthOfBirth": 0,
        "dayOfBirth": 0,
        "placeOfBirth": "string",
        "yearOfDeath": 0,
        "monthOfDeath": 0,
        "dayOfDeath": 0,
        "placeOfDeath": "string",
        "height": 0,
        "weight": 0,
        "deceased": true,
        "bloodType": "B_NEGATIVE",
        "maritalStatus": "SINGLE",
        "serialNumber": "string",
        "hologramActivationDate": "string",
        "hologramStatus": "string",
        "hologramDateStatus": "string",
        "hologram": true,
        "fictionalCharacter": true,
        "mirror": true,
        "alternateReality": true
      }
    ]
  }
}
```

Response object for single performer query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|performer|[PerformerFull](#schemaperformerfull)|false|none|Full performer, returned when queried using UID|

<h2 id="tocS_Platform">Platform</h2>
<!-- backwards compatibility -->
<a id="schemaplatform"></a>
<a id="schema_Platform"></a>
<a id="tocSplatform"></a>
<a id="tocsplatform"></a>

```json
{
  "uid": "string",
  "name": "string"
}
```

Platform of video games

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|false|none|Platform unique ID|
|name|string|false|none|Platform name|

<h2 id="tocS_ProductionRunUnit">ProductionRunUnit</h2>
<!-- backwards compatibility -->
<a id="schemaproductionrununit"></a>
<a id="schema_ProductionRunUnit"></a>
<a id="tocSproductionrununit"></a>
<a id="tocsproductionrununit"></a>

```json
"BOX"
```

Production run unit

<h2 id="tocS_Reference">Reference</h2>
<!-- backwards compatibility -->
<a id="schemareference"></a>
<a id="schema_Reference"></a>
<a id="tocSreference"></a>
<a id="tocsreference"></a>

```json
{
  "uid": "string",
  "referenceType": "ASIN",
  "referenceNumber": "string"
}
```

Reference of book, comics, video release, etc.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|false|none|Reference unique ID|
|referenceType|[ReferenceType](#schemareferencetype)|false|none|Reference type|
|referenceNumber|string|false|none|Reference number|

#### Enumerated Values

|Property|Value|
|---|---|
|referenceType|ASIN|
|referenceType|ISBN|

<h2 id="tocS_ReferenceType">ReferenceType</h2>
<!-- backwards compatibility -->
<a id="schemareferencetype"></a>
<a id="schema_ReferenceType"></a>
<a id="tocSreferencetype"></a>
<a id="tocsreferencetype"></a>

```json
"ASIN"
```

Reference type

<h2 id="tocS_ResponsePage">ResponsePage</h2>
<!-- backwards compatibility -->
<a id="schemaresponsepage"></a>
<a id="schema_ResponsePage"></a>
<a id="tocSresponsepage"></a>
<a id="tocsresponsepage"></a>

```json
{
  "pageNumber": 0,
  "pageSize": 0,
  "numberOfElements": 0,
  "totalElements": 0,
  "totalPages": 0,
  "firstPage": true,
  "lastPage": true
}
```

Object describing response page

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pageNumber|integer(int32)|false|none|Zero-based page number|
|pageSize|integer(int32)|false|none|Page size|
|numberOfElements|integer(int32)|false|none|Number of elements in page|
|totalElements|integer(int32)|false|none|Total elements found|
|totalPages|integer(int32)|false|none|Total pages found|
|firstPage|boolean|false|none|Whether it is the first page|
|lastPage|boolean|false|none|Whether it is the last page|

<h2 id="tocS_ResponseSort">ResponseSort</h2>
<!-- backwards compatibility -->
<a id="schemaresponsesort"></a>
<a id="schema_ResponseSort"></a>
<a id="tocSresponsesort"></a>
<a id="tocsresponsesort"></a>

```json
{
  "clauses": [
    {
      "name": "string",
      "direction": "ASC",
      "clauseOrder": 0
    }
  ]
}
```

Response sort

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clauses|[[ResponseSortClause](#schemaresponsesortclause)]|false|none|List of response sort rules|

<h2 id="tocS_ResponseSortClause">ResponseSortClause</h2>
<!-- backwards compatibility -->
<a id="schemaresponsesortclause"></a>
<a id="schema_ResponseSortClause"></a>
<a id="tocSresponsesortclause"></a>
<a id="tocsresponsesortclause"></a>

```json
{
  "name": "string",
  "direction": "ASC",
  "clauseOrder": 0
}
```

Single response sort clause

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Field name results are sorted by|
|direction|[ResponseSortDirection](#schemaresponsesortdirection)|true|none|Sort direction|
|clauseOrder|integer|true|none|Order in which this clause was applied|

#### Enumerated Values

|Property|Value|
|---|---|
|direction|ASC|
|direction|DESC|

<h2 id="tocS_ResponseSortDirection">ResponseSortDirection</h2>
<!-- backwards compatibility -->
<a id="schemaresponsesortdirection"></a>
<a id="schema_ResponseSortDirection"></a>
<a id="tocSresponsesortdirection"></a>
<a id="tocsresponsesortdirection"></a>

```json
"ASC"
```

Sort direction

<h2 id="tocS_SeasonHeader">SeasonHeader</h2>
<!-- backwards compatibility -->
<a id="schemaseasonheader"></a>
<a id="schema_SeasonHeader"></a>
<a id="tocSseasonheader"></a>
<a id="tocsseasonheader"></a>

```json
{
  "uid": "string",
  "title": "string"
}
```

Header season, embedded in other objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Season unique ID|
|title|string|true|none|Season title|

<h2 id="tocS_SeasonBase">SeasonBase</h2>
<!-- backwards compatibility -->
<a id="schemaseasonbase"></a>
<a id="schema_SeasonBase"></a>
<a id="tocSseasonbase"></a>
<a id="tocsseasonbase"></a>

```json
{
  "uid": "string",
  "title": "string",
  "series": {
    "uid": "string",
    "title": "string"
  },
  "seasonNumber": 0,
  "numberOfEpisodes": 0
}
```

Base season, returned in search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Season unique ID|
|title|string|true|none|Season title|
|series|[SeriesHeader](#schemaseriesheader)|false|none|Header series, embedded in other objects|
|seasonNumber|integer|false|none|Season number in series|
|numberOfEpisodes|integer|false|none|Number of episodes in this season|

<h2 id="tocS_SeasonFull">SeasonFull</h2>
<!-- backwards compatibility -->
<a id="schemaseasonfull"></a>
<a id="schema_SeasonFull"></a>
<a id="tocSseasonfull"></a>
<a id="tocsseasonfull"></a>

```json
{
  "uid": "string",
  "title": "string",
  "series": {
    "uid": "string",
    "title": "string",
    "abbreviation": "string",
    "productionStartYear": 0,
    "productionEndYear": 0,
    "originalRunStartDate": "1970-01-01",
    "originalRunEndDate": "1970-01-01",
    "seasonsCount": 0,
    "episodesCount": 0,
    "featureLengthEpisodesCount": 0,
    "productionCompany": {
      "uid": "string",
      "name": "string"
    },
    "originalBroadcaster": {
      "uid": "string",
      "name": "string"
    }
  },
  "seasonNumber": 0,
  "numberOfEpisodes": 0,
  "episodes": [
    {
      "uid": "string",
      "title": "string",
      "titleGerman": "string",
      "titleItalian": "string",
      "titleJapanese": "string",
      "series": {
        "uid": "string",
        "title": "string"
      },
      "season": {
        "uid": "string",
        "title": "string"
      },
      "seasonNumber": 0,
      "episodeNumber": 0,
      "productionSerialNumber": "string",
      "featureLength": true,
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "usAirDate": "1970-01-01",
      "finalScriptDate": "1970-01-01"
    }
  ]
}
```

Full location, returned when queried using UID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Season unique ID|
|title|string|true|none|Season title|
|series|[SeriesBase](#schemaseriesbase)|false|none|Base series, returned in search results|
|seasonNumber|integer|false|none|Season number in series|
|numberOfEpisodes|integer|false|none|Number of episodes in this season|
|episodes|[[EpisodeBase](#schemaepisodebase)]|false|none|Episodes in this season|

<h2 id="tocS_SeasonBaseResponse">SeasonBaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemaseasonbaseresponse"></a>
<a id="schema_SeasonBaseResponse"></a>
<a id="tocSseasonbaseresponse"></a>
<a id="tocsseasonbaseresponse"></a>

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "seasons": [
    {
      "uid": "string",
      "title": "string",
      "series": {
        "uid": "string",
        "title": "string"
      },
      "seasonNumber": 0,
      "numberOfEpisodes": 0
    }
  ]
}
```

Response object for seasons search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|[ResponsePage](#schemaresponsepage)|false|none|Object describing response page|
|sort|[ResponseSort](#schemaresponsesort)|false|none|Response sort|
|seasons|[[SeasonBase](#schemaseasonbase)]|false|none|List of seasons matching given criteria|

<h2 id="tocS_SeasonFullResponse">SeasonFullResponse</h2>
<!-- backwards compatibility -->
<a id="schemaseasonfullresponse"></a>
<a id="schema_SeasonFullResponse"></a>
<a id="tocSseasonfullresponse"></a>
<a id="tocsseasonfullresponse"></a>

```json
{
  "season": {
    "uid": "string",
    "title": "string",
    "series": {
      "uid": "string",
      "title": "string",
      "abbreviation": "string",
      "productionStartYear": 0,
      "productionEndYear": 0,
      "originalRunStartDate": "1970-01-01",
      "originalRunEndDate": "1970-01-01",
      "seasonsCount": 0,
      "episodesCount": 0,
      "featureLengthEpisodesCount": 0,
      "productionCompany": {
        "uid": "string",
        "name": "string"
      },
      "originalBroadcaster": {
        "uid": "string",
        "name": "string"
      }
    },
    "seasonNumber": 0,
    "numberOfEpisodes": 0,
    "episodes": [
      {
        "uid": "string",
        "title": "string",
        "titleGerman": "string",
        "titleItalian": "string",
        "titleJapanese": "string",
        "series": {
          "uid": "string",
          "title": "string"
        },
        "season": {
          "uid": "string",
          "title": "string"
        },
        "seasonNumber": 0,
        "episodeNumber": 0,
        "productionSerialNumber": "string",
        "featureLength": true,
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "usAirDate": "1970-01-01",
        "finalScriptDate": "1970-01-01"
      }
    ]
  }
}
```

Response object for single season query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|season|[SeasonFull](#schemaseasonfull)|false|none|Full location, returned when queried using UID|

<h2 id="tocS_SeriesHeader">SeriesHeader</h2>
<!-- backwards compatibility -->
<a id="schemaseriesheader"></a>
<a id="schema_SeriesHeader"></a>
<a id="tocSseriesheader"></a>
<a id="tocsseriesheader"></a>

```json
{
  "uid": "string",
  "title": "string"
}
```

Header series, embedded in other objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Series unique ID|
|title|string|true|none|Series title|

<h2 id="tocS_SeriesBase">SeriesBase</h2>
<!-- backwards compatibility -->
<a id="schemaseriesbase"></a>
<a id="schema_SeriesBase"></a>
<a id="tocSseriesbase"></a>
<a id="tocsseriesbase"></a>

```json
{
  "uid": "string",
  "title": "string",
  "abbreviation": "string",
  "productionStartYear": 0,
  "productionEndYear": 0,
  "originalRunStartDate": "1970-01-01",
  "originalRunEndDate": "1970-01-01",
  "seasonsCount": 0,
  "episodesCount": 0,
  "featureLengthEpisodesCount": 0,
  "productionCompany": {
    "uid": "string",
    "name": "string"
  },
  "originalBroadcaster": {
    "uid": "string",
    "name": "string"
  }
}
```

Base series, returned in search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Series unique ID|
|title|string|true|none|Series title|
|abbreviation|string|true|none|Series abbreviation|
|productionStartYear|integer|false|none|Year the series production started|
|productionEndYear|integer|false|none|Year the series production ended|
|originalRunStartDate|string(date)|false|none|Date the series originally ran from|
|originalRunEndDate|string(date)|false|none|Date the series originally ran to|
|seasonsCount|integer|false|none|Number of seasons|
|episodesCount|integer|false|none|Number of episodes|
|featureLengthEpisodesCount|integer|false|none|Number of feature length episodes|
|productionCompany|[CompanyHeader](#schemacompanyheader)|false|none|Header company, embedded in other objects|
|originalBroadcaster|[CompanyHeader](#schemacompanyheader)|false|none|Header company, embedded in other objects|

<h2 id="tocS_SeriesFull">SeriesFull</h2>
<!-- backwards compatibility -->
<a id="schemaseriesfull"></a>
<a id="schema_SeriesFull"></a>
<a id="tocSseriesfull"></a>
<a id="tocsseriesfull"></a>

```json
{
  "uid": "string",
  "title": "string",
  "abbreviation": "string",
  "productionStartYear": 0,
  "productionEndYear": 0,
  "originalRunStartDate": "1970-01-01",
  "originalRunEndDate": "1970-01-01",
  "seasonsCount": 0,
  "episodesCount": 0,
  "featureLengthEpisodesCount": 0,
  "productionCompany": {
    "uid": "string",
    "name": "string",
    "broadcaster": true,
    "collectibleCompany": true,
    "conglomerate": true,
    "digitalVisualEffectsCompany": true,
    "distributor": true,
    "gameCompany": true,
    "filmEquipmentCompany": true,
    "makeUpEffectsStudio": true,
    "mattePaintingCompany": true,
    "modelAndMiniatureEffectsCompany": true,
    "postProductionCompany": true,
    "productionCompany": true,
    "propCompany": true,
    "recordLabel": true,
    "specialEffectsCompany": true,
    "tvAndFilmProductionCompany": true,
    "videoGameCompany": true
  },
  "originalBroadcaster": {
    "uid": "string",
    "name": "string",
    "broadcaster": true,
    "collectibleCompany": true,
    "conglomerate": true,
    "digitalVisualEffectsCompany": true,
    "distributor": true,
    "gameCompany": true,
    "filmEquipmentCompany": true,
    "makeUpEffectsStudio": true,
    "mattePaintingCompany": true,
    "modelAndMiniatureEffectsCompany": true,
    "postProductionCompany": true,
    "productionCompany": true,
    "propCompany": true,
    "recordLabel": true,
    "specialEffectsCompany": true,
    "tvAndFilmProductionCompany": true,
    "videoGameCompany": true
  },
  "episodes": [
    {
      "uid": "string",
      "title": "string",
      "titleGerman": "string",
      "titleItalian": "string",
      "titleJapanese": "string",
      "series": {
        "uid": "string",
        "title": "string"
      },
      "season": {
        "uid": "string",
        "title": "string"
      },
      "seasonNumber": 0,
      "episodeNumber": 0,
      "productionSerialNumber": "string",
      "featureLength": true,
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "usAirDate": "1970-01-01",
      "finalScriptDate": "1970-01-01"
    }
  ],
  "seasons": [
    {
      "uid": "string",
      "title": "string",
      "series": {
        "uid": "string",
        "title": "string"
      },
      "seasonNumber": 0,
      "numberOfEpisodes": 0
    }
  ]
}
```

Full series, returned when queried using UID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Series unique ID|
|title|string|true|none|Series title|
|abbreviation|string|true|none|Series abbreviation|
|productionStartYear|integer|false|none|Year the series production started|
|productionEndYear|integer|false|none|Year the series production ended|
|originalRunStartDate|string(date)|false|none|Date the series originally ran from|
|originalRunEndDate|string(date)|false|none|Date the series originally ran to|
|seasonsCount|integer|false|none|Number of seasons|
|episodesCount|integer|false|none|Number of episodes|
|featureLengthEpisodesCount|integer|false|none|Number of feature length episodes|
|productionCompany|[CompanyBase](#schemacompanybase)|false|none|Base company, returned in search results|
|originalBroadcaster|[CompanyBase](#schemacompanybase)|false|none|Base company, returned in search results|
|episodes|[[EpisodeBase](#schemaepisodebase)]|false|none|Episodes in the series|
|seasons|[[SeasonBase](#schemaseasonbase)]|false|none|Seasons in the series|

<h2 id="tocS_SeriesBaseResponse">SeriesBaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemaseriesbaseresponse"></a>
<a id="schema_SeriesBaseResponse"></a>
<a id="tocSseriesbaseresponse"></a>
<a id="tocsseriesbaseresponse"></a>

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "series": [
    {
      "uid": "string",
      "title": "string",
      "abbreviation": "string",
      "productionStartYear": 0,
      "productionEndYear": 0,
      "originalRunStartDate": "1970-01-01",
      "originalRunEndDate": "1970-01-01",
      "seasonsCount": 0,
      "episodesCount": 0,
      "featureLengthEpisodesCount": 0,
      "productionCompany": {
        "uid": "string",
        "name": "string"
      },
      "originalBroadcaster": {
        "uid": "string",
        "name": "string"
      }
    }
  ]
}
```

Response object for series search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|[ResponsePage](#schemaresponsepage)|false|none|Object describing response page|
|sort|[ResponseSort](#schemaresponsesort)|false|none|Response sort|
|series|[[SeriesBase](#schemaseriesbase)]|false|none|List of series matching given criteria|

<h2 id="tocS_SeriesFullResponse">SeriesFullResponse</h2>
<!-- backwards compatibility -->
<a id="schemaseriesfullresponse"></a>
<a id="schema_SeriesFullResponse"></a>
<a id="tocSseriesfullresponse"></a>
<a id="tocsseriesfullresponse"></a>

```json
{
  "series": {
    "uid": "string",
    "title": "string",
    "abbreviation": "string",
    "productionStartYear": 0,
    "productionEndYear": 0,
    "originalRunStartDate": "1970-01-01",
    "originalRunEndDate": "1970-01-01",
    "seasonsCount": 0,
    "episodesCount": 0,
    "featureLengthEpisodesCount": 0,
    "productionCompany": {
      "uid": "string",
      "name": "string",
      "broadcaster": true,
      "collectibleCompany": true,
      "conglomerate": true,
      "digitalVisualEffectsCompany": true,
      "distributor": true,
      "gameCompany": true,
      "filmEquipmentCompany": true,
      "makeUpEffectsStudio": true,
      "mattePaintingCompany": true,
      "modelAndMiniatureEffectsCompany": true,
      "postProductionCompany": true,
      "productionCompany": true,
      "propCompany": true,
      "recordLabel": true,
      "specialEffectsCompany": true,
      "tvAndFilmProductionCompany": true,
      "videoGameCompany": true
    },
    "originalBroadcaster": {
      "uid": "string",
      "name": "string",
      "broadcaster": true,
      "collectibleCompany": true,
      "conglomerate": true,
      "digitalVisualEffectsCompany": true,
      "distributor": true,
      "gameCompany": true,
      "filmEquipmentCompany": true,
      "makeUpEffectsStudio": true,
      "mattePaintingCompany": true,
      "modelAndMiniatureEffectsCompany": true,
      "postProductionCompany": true,
      "productionCompany": true,
      "propCompany": true,
      "recordLabel": true,
      "specialEffectsCompany": true,
      "tvAndFilmProductionCompany": true,
      "videoGameCompany": true
    },
    "episodes": [
      {
        "uid": "string",
        "title": "string",
        "titleGerman": "string",
        "titleItalian": "string",
        "titleJapanese": "string",
        "series": {
          "uid": "string",
          "title": "string"
        },
        "season": {
          "uid": "string",
          "title": "string"
        },
        "seasonNumber": 0,
        "episodeNumber": 0,
        "productionSerialNumber": "string",
        "featureLength": true,
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "usAirDate": "1970-01-01",
        "finalScriptDate": "1970-01-01"
      }
    ],
    "seasons": [
      {
        "uid": "string",
        "title": "string",
        "series": {
          "uid": "string",
          "title": "string"
        },
        "seasonNumber": 0,
        "numberOfEpisodes": 0
      }
    ]
  }
}
```

Response object for single series query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|series|[SeriesFull](#schemaseriesfull)|false|none|Full series, returned when queried using UID|

<h2 id="tocS_SoundtrackHeader">SoundtrackHeader</h2>
<!-- backwards compatibility -->
<a id="schemasoundtrackheader"></a>
<a id="schema_SoundtrackHeader"></a>
<a id="tocSsoundtrackheader"></a>
<a id="tocssoundtrackheader"></a>

```json
{
  "uid": "string",
  "title": "string"
}
```

Header soundtrack, embedded in other objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Soundtrack unique ID|
|title|string|true|none|Soundtrack title|

<h2 id="tocS_SoundtrackBase">SoundtrackBase</h2>
<!-- backwards compatibility -->
<a id="schemasoundtrackbase"></a>
<a id="schema_SoundtrackBase"></a>
<a id="tocSsoundtrackbase"></a>
<a id="tocssoundtrackbase"></a>

```json
{
  "uid": "string",
  "title": "string",
  "releaseDate": "1970-01-01",
  "length": 0
}
```

Base soundtrack, returned in search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Soundtrack unique ID|
|title|string|true|none|Soundtrack title|
|releaseDate|string(date)|false|none|Release date|
|length|integer|false|none|Length, in seconds|

<h2 id="tocS_SoundtrackFull">SoundtrackFull</h2>
<!-- backwards compatibility -->
<a id="schemasoundtrackfull"></a>
<a id="schema_SoundtrackFull"></a>
<a id="tocSsoundtrackfull"></a>
<a id="tocssoundtrackfull"></a>

```json
{
  "uid": "string",
  "title": "string",
  "releaseDate": "1970-01-01",
  "length": 0,
  "labels": [
    {
      "uid": "string",
      "name": "string",
      "broadcaster": true,
      "collectibleCompany": true,
      "conglomerate": true,
      "digitalVisualEffectsCompany": true,
      "distributor": true,
      "gameCompany": true,
      "filmEquipmentCompany": true,
      "makeUpEffectsStudio": true,
      "mattePaintingCompany": true,
      "modelAndMiniatureEffectsCompany": true,
      "postProductionCompany": true,
      "productionCompany": true,
      "propCompany": true,
      "recordLabel": true,
      "specialEffectsCompany": true,
      "tvAndFilmProductionCompany": true,
      "videoGameCompany": true
    }
  ],
  "composers": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "artDepartment": true,
      "artDirector": true,
      "productionDesigner": true,
      "cameraAndElectricalDepartment": true,
      "cinematographer": true,
      "castingDepartment": true,
      "costumeDepartment": true,
      "costumeDesigner": true,
      "director": true,
      "assistantOrSecondUnitDirector": true,
      "exhibitAndAttractionStaff": true,
      "filmEditor": true,
      "linguist": true,
      "locationStaff": true,
      "makeupStaff": true,
      "musicDepartment": true,
      "composer": true,
      "personalAssistant": true,
      "producer": true,
      "productionAssociate": true,
      "productionStaff": true,
      "publicationStaff": true,
      "scienceConsultant": true,
      "soundDepartment": true,
      "specialAndVisualEffectsStaff": true,
      "author": true,
      "audioAuthor": true,
      "calendarArtist": true,
      "comicArtist": true,
      "comicAuthor": true,
      "comicColorArtist": true,
      "comicInteriorArtist": true,
      "comicInkArtist": true,
      "comicPencilArtist": true,
      "comicLetterArtist": true,
      "comicStripArtist": true,
      "gameArtist": true,
      "gameAuthor": true,
      "novelArtist": true,
      "novelAuthor": true,
      "referenceArtist": true,
      "referenceAuthor": true,
      "publicationArtist": true,
      "publicationDesigner": true,
      "publicationEditor": true,
      "publicityArtist": true,
      "cbsDigitalStaff": true,
      "ilmProductionStaff": true,
      "specialFeaturesStaff": true,
      "storyEditor": true,
      "studioExecutive": true,
      "stuntDepartment": true,
      "transportationDepartment": true,
      "videoGameProductionStaff": true,
      "writer": true
    }
  ],
  "contributors": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "artDepartment": true,
      "artDirector": true,
      "productionDesigner": true,
      "cameraAndElectricalDepartment": true,
      "cinematographer": true,
      "castingDepartment": true,
      "costumeDepartment": true,
      "costumeDesigner": true,
      "director": true,
      "assistantOrSecondUnitDirector": true,
      "exhibitAndAttractionStaff": true,
      "filmEditor": true,
      "linguist": true,
      "locationStaff": true,
      "makeupStaff": true,
      "musicDepartment": true,
      "composer": true,
      "personalAssistant": true,
      "producer": true,
      "productionAssociate": true,
      "productionStaff": true,
      "publicationStaff": true,
      "scienceConsultant": true,
      "soundDepartment": true,
      "specialAndVisualEffectsStaff": true,
      "author": true,
      "audioAuthor": true,
      "calendarArtist": true,
      "comicArtist": true,
      "comicAuthor": true,
      "comicColorArtist": true,
      "comicInteriorArtist": true,
      "comicInkArtist": true,
      "comicPencilArtist": true,
      "comicLetterArtist": true,
      "comicStripArtist": true,
      "gameArtist": true,
      "gameAuthor": true,
      "novelArtist": true,
      "novelAuthor": true,
      "referenceArtist": true,
      "referenceAuthor": true,
      "publicationArtist": true,
      "publicationDesigner": true,
      "publicationEditor": true,
      "publicityArtist": true,
      "cbsDigitalStaff": true,
      "ilmProductionStaff": true,
      "specialFeaturesStaff": true,
      "storyEditor": true,
      "studioExecutive": true,
      "stuntDepartment": true,
      "transportationDepartment": true,
      "videoGameProductionStaff": true,
      "writer": true
    }
  ],
  "orchestrators": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "artDepartment": true,
      "artDirector": true,
      "productionDesigner": true,
      "cameraAndElectricalDepartment": true,
      "cinematographer": true,
      "castingDepartment": true,
      "costumeDepartment": true,
      "costumeDesigner": true,
      "director": true,
      "assistantOrSecondUnitDirector": true,
      "exhibitAndAttractionStaff": true,
      "filmEditor": true,
      "linguist": true,
      "locationStaff": true,
      "makeupStaff": true,
      "musicDepartment": true,
      "composer": true,
      "personalAssistant": true,
      "producer": true,
      "productionAssociate": true,
      "productionStaff": true,
      "publicationStaff": true,
      "scienceConsultant": true,
      "soundDepartment": true,
      "specialAndVisualEffectsStaff": true,
      "author": true,
      "audioAuthor": true,
      "calendarArtist": true,
      "comicArtist": true,
      "comicAuthor": true,
      "comicColorArtist": true,
      "comicInteriorArtist": true,
      "comicInkArtist": true,
      "comicPencilArtist": true,
      "comicLetterArtist": true,
      "comicStripArtist": true,
      "gameArtist": true,
      "gameAuthor": true,
      "novelArtist": true,
      "novelAuthor": true,
      "referenceArtist": true,
      "referenceAuthor": true,
      "publicationArtist": true,
      "publicationDesigner": true,
      "publicationEditor": true,
      "publicityArtist": true,
      "cbsDigitalStaff": true,
      "ilmProductionStaff": true,
      "specialFeaturesStaff": true,
      "storyEditor": true,
      "studioExecutive": true,
      "stuntDepartment": true,
      "transportationDepartment": true,
      "videoGameProductionStaff": true,
      "writer": true
    }
  ],
  "references": [
    {
      "uid": "string",
      "referenceType": "ASIN",
      "referenceNumber": "string"
    }
  ]
}
```

Full soundtrack, returned when queried using UID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Soundtrack unique ID|
|title|string|true|none|Soundtrack title|
|releaseDate|string(date)|false|none|Release date|
|length|integer|false|none|Length, in seconds|
|labels|[[CompanyBase](#schemacompanybase)]|false|none|Labels this soundtrack was relesed by|
|composers|[[StaffBase](#schemastaffbase)]|false|none|Composers|
|contributors|[[StaffBase](#schemastaffbase)]|false|none|Other musicians that contributed to this soundtrack|
|orchestrators|[[StaffBase](#schemastaffbase)]|false|none|Orchestrators|
|references|[[Reference](#schemareference)]|false|none|References|

<h2 id="tocS_SoundtrackBaseResponse">SoundtrackBaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemasoundtrackbaseresponse"></a>
<a id="schema_SoundtrackBaseResponse"></a>
<a id="tocSsoundtrackbaseresponse"></a>
<a id="tocssoundtrackbaseresponse"></a>

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "soundtracks": [
    {
      "uid": "string",
      "title": "string",
      "releaseDate": "1970-01-01",
      "length": 0
    }
  ]
}
```

Response object for soundtracks search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|[ResponsePage](#schemaresponsepage)|false|none|Object describing response page|
|sort|[ResponseSort](#schemaresponsesort)|false|none|Response sort|
|soundtracks|[[SoundtrackBase](#schemasoundtrackbase)]|false|none|List of soundtracks matching given criteria|

<h2 id="tocS_SoundtrackFullResponse">SoundtrackFullResponse</h2>
<!-- backwards compatibility -->
<a id="schemasoundtrackfullresponse"></a>
<a id="schema_SoundtrackFullResponse"></a>
<a id="tocSsoundtrackfullresponse"></a>
<a id="tocssoundtrackfullresponse"></a>

```json
{
  "soundtrack": {
    "uid": "string",
    "title": "string",
    "releaseDate": "1970-01-01",
    "length": 0,
    "labels": [
      {
        "uid": "string",
        "name": "string",
        "broadcaster": true,
        "collectibleCompany": true,
        "conglomerate": true,
        "digitalVisualEffectsCompany": true,
        "distributor": true,
        "gameCompany": true,
        "filmEquipmentCompany": true,
        "makeUpEffectsStudio": true,
        "mattePaintingCompany": true,
        "modelAndMiniatureEffectsCompany": true,
        "postProductionCompany": true,
        "productionCompany": true,
        "propCompany": true,
        "recordLabel": true,
        "specialEffectsCompany": true,
        "tvAndFilmProductionCompany": true,
        "videoGameCompany": true
      }
    ],
    "composers": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "contributors": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "orchestrators": [
      {
        "uid": "string",
        "name": "string",
        "birthName": "string",
        "gender": "F",
        "dateOfBirth": "1970-01-01",
        "placeOfBirth": "string",
        "dateOfDeath": "1970-01-01",
        "placeOfDeath": "string",
        "artDepartment": true,
        "artDirector": true,
        "productionDesigner": true,
        "cameraAndElectricalDepartment": true,
        "cinematographer": true,
        "castingDepartment": true,
        "costumeDepartment": true,
        "costumeDesigner": true,
        "director": true,
        "assistantOrSecondUnitDirector": true,
        "exhibitAndAttractionStaff": true,
        "filmEditor": true,
        "linguist": true,
        "locationStaff": true,
        "makeupStaff": true,
        "musicDepartment": true,
        "composer": true,
        "personalAssistant": true,
        "producer": true,
        "productionAssociate": true,
        "productionStaff": true,
        "publicationStaff": true,
        "scienceConsultant": true,
        "soundDepartment": true,
        "specialAndVisualEffectsStaff": true,
        "author": true,
        "audioAuthor": true,
        "calendarArtist": true,
        "comicArtist": true,
        "comicAuthor": true,
        "comicColorArtist": true,
        "comicInteriorArtist": true,
        "comicInkArtist": true,
        "comicPencilArtist": true,
        "comicLetterArtist": true,
        "comicStripArtist": true,
        "gameArtist": true,
        "gameAuthor": true,
        "novelArtist": true,
        "novelAuthor": true,
        "referenceArtist": true,
        "referenceAuthor": true,
        "publicationArtist": true,
        "publicationDesigner": true,
        "publicationEditor": true,
        "publicityArtist": true,
        "cbsDigitalStaff": true,
        "ilmProductionStaff": true,
        "specialFeaturesStaff": true,
        "storyEditor": true,
        "studioExecutive": true,
        "stuntDepartment": true,
        "transportationDepartment": true,
        "videoGameProductionStaff": true,
        "writer": true
      }
    ],
    "references": [
      {
        "uid": "string",
        "referenceType": "ASIN",
        "referenceNumber": "string"
      }
    ]
  }
}
```

Response object for single soundtrack query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|soundtrack|[SoundtrackFull](#schemasoundtrackfull)|false|none|Full soundtrack, returned when queried using UID|

<h2 id="tocS_SpacecraftHeader">SpacecraftHeader</h2>
<!-- backwards compatibility -->
<a id="schemaspacecraftheader"></a>
<a id="schema_SpacecraftHeader"></a>
<a id="tocSspacecraftheader"></a>
<a id="tocsspacecraftheader"></a>

```json
{
  "uid": "string",
  "name": "string"
}
```

Header spacecraft, embedded in other objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Spacecraft unique ID|
|name|string|true|none|Spacecraft name|

<h2 id="tocS_SpacecraftBase">SpacecraftBase</h2>
<!-- backwards compatibility -->
<a id="schemaspacecraftbase"></a>
<a id="schema_SpacecraftBase"></a>
<a id="tocSspacecraftbase"></a>
<a id="tocsspacecraftbase"></a>

```json
{
  "uid": "string",
  "name": "string",
  "registry": "string",
  "status": "string",
  "dateStatus": "string",
  "spacecraftClass": {
    "uid": "string",
    "name": "string"
  },
  "owner": {
    "uid": "string",
    "name": "string"
  },
  "operator": {
    "uid": "string",
    "name": "string"
  }
}
```

Base spacecraft, returned in search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Spacecraft unique ID|
|name|string|true|none|Spacecraft name|
|registry|string|false|none|Spacecraft registry|
|status|string|false|none|Status of a spacecraft (in prime reality, if spacecraft was in more than one realities)|
|dateStatus|string|false|none|Date the spacecraft status was last known|
|spacecraftClass|[SpacecraftClassHeader](#schemaspacecraftclassheader)|false|none|Header spacecraft class, embedded in other objects|
|owner|[OrganizationHeader](#schemaorganizationheader)|false|none|Header organization, embedded in other objects|
|operator|[OrganizationHeader](#schemaorganizationheader)|false|none|Header organization, embedded in other objects|

<h2 id="tocS_SpacecraftFull">SpacecraftFull</h2>
<!-- backwards compatibility -->
<a id="schemaspacecraftfull"></a>
<a id="schema_SpacecraftFull"></a>
<a id="tocSspacecraftfull"></a>
<a id="tocsspacecraftfull"></a>

```json
{
  "uid": "string",
  "name": "string",
  "registry": "string",
  "status": "string",
  "dateStatus": "string",
  "spacecraftClass": {
    "uid": "string",
    "name": "string",
    "numberOfDecks": 0,
    "warpCapable": true,
    "alternateReality": true,
    "activeFrom": "string",
    "activeTo": "string",
    "species": {
      "uid": "string",
      "name": "string"
    },
    "owner": {
      "uid": "string",
      "name": "string"
    },
    "operator": {
      "uid": "string",
      "name": "string"
    },
    "affiliation": {
      "uid": "string",
      "name": "string"
    }
  },
  "owner": {
    "uid": "string",
    "name": "string",
    "government": true,
    "intergovernmentalOrganization": true,
    "researchOrganization": true,
    "sportOrganization": true,
    "medicalOrganization": true,
    "militaryOrganization": true,
    "militaryUnit": true,
    "governmentAgency": true,
    "lawEnforcementAgency": true,
    "prisonOrPenalColony": true,
    "mirror": true,
    "alternateReality": true
  },
  "operator": {
    "uid": "string",
    "name": "string",
    "government": true,
    "intergovernmentalOrganization": true,
    "researchOrganization": true,
    "sportOrganization": true,
    "medicalOrganization": true,
    "militaryOrganization": true,
    "militaryUnit": true,
    "governmentAgency": true,
    "lawEnforcementAgency": true,
    "prisonOrPenalColony": true,
    "mirror": true,
    "alternateReality": true
  },
  "spacecraftTypes": [
    {
      "uid": "string",
      "name": "string"
    }
  ]
}
```

Full spacecraft, returned when queried using UID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Spacecraft unique ID|
|name|string|true|none|Spacecraft name|
|registry|string|false|none|Spacecraft registry|
|status|string|false|none|Status of a spacecraft (in prime reality, if spacecraft was in more than one realities)|
|dateStatus|string|false|none|Date the spacecraft status was last known|
|spacecraftClass|[SpacecraftClassBase](#schemaspacecraftclassbase)|false|none|Base spacecraft class, returned in search results|
|owner|[OrganizationBase](#schemaorganizationbase)|false|none|Base organization, returned in search results|
|operator|[OrganizationBase](#schemaorganizationbase)|false|none|Base organization, returned in search results|
|spacecraftTypes|[[SpacecraftType](#schemaspacecrafttype)]|false|none|Spacecraft types|

<h2 id="tocS_SpacecraftBaseResponse">SpacecraftBaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemaspacecraftbaseresponse"></a>
<a id="schema_SpacecraftBaseResponse"></a>
<a id="tocSspacecraftbaseresponse"></a>
<a id="tocsspacecraftbaseresponse"></a>

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "spacecrafts": [
    {
      "uid": "string",
      "name": "string",
      "registry": "string",
      "status": "string",
      "dateStatus": "string",
      "spacecraftClass": {
        "uid": "string",
        "name": "string"
      },
      "owner": {
        "uid": "string",
        "name": "string"
      },
      "operator": {
        "uid": "string",
        "name": "string"
      }
    }
  ]
}
```

Response object for spacecrafts search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|[ResponsePage](#schemaresponsepage)|false|none|Object describing response page|
|sort|[ResponseSort](#schemaresponsesort)|false|none|Response sort|
|spacecrafts|[[SpacecraftBase](#schemaspacecraftbase)]|false|none|List of spacecrafts matching given criteria|

<h2 id="tocS_SpacecraftFullResponse">SpacecraftFullResponse</h2>
<!-- backwards compatibility -->
<a id="schemaspacecraftfullresponse"></a>
<a id="schema_SpacecraftFullResponse"></a>
<a id="tocSspacecraftfullresponse"></a>
<a id="tocsspacecraftfullresponse"></a>

```json
{
  "spacecraft": {
    "uid": "string",
    "name": "string",
    "registry": "string",
    "status": "string",
    "dateStatus": "string",
    "spacecraftClass": {
      "uid": "string",
      "name": "string",
      "numberOfDecks": 0,
      "warpCapable": true,
      "alternateReality": true,
      "activeFrom": "string",
      "activeTo": "string",
      "species": {
        "uid": "string",
        "name": "string"
      },
      "owner": {
        "uid": "string",
        "name": "string"
      },
      "operator": {
        "uid": "string",
        "name": "string"
      },
      "affiliation": {
        "uid": "string",
        "name": "string"
      }
    },
    "owner": {
      "uid": "string",
      "name": "string",
      "government": true,
      "intergovernmentalOrganization": true,
      "researchOrganization": true,
      "sportOrganization": true,
      "medicalOrganization": true,
      "militaryOrganization": true,
      "militaryUnit": true,
      "governmentAgency": true,
      "lawEnforcementAgency": true,
      "prisonOrPenalColony": true,
      "mirror": true,
      "alternateReality": true
    },
    "operator": {
      "uid": "string",
      "name": "string",
      "government": true,
      "intergovernmentalOrganization": true,
      "researchOrganization": true,
      "sportOrganization": true,
      "medicalOrganization": true,
      "militaryOrganization": true,
      "militaryUnit": true,
      "governmentAgency": true,
      "lawEnforcementAgency": true,
      "prisonOrPenalColony": true,
      "mirror": true,
      "alternateReality": true
    },
    "spacecraftTypes": [
      {
        "uid": "string",
        "name": "string"
      }
    ]
  }
}
```

Response object for single spacecraft query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|spacecraft|[SpacecraftFull](#schemaspacecraftfull)|false|none|Full spacecraft, returned when queried using UID|

<h2 id="tocS_SpacecraftClassHeader">SpacecraftClassHeader</h2>
<!-- backwards compatibility -->
<a id="schemaspacecraftclassheader"></a>
<a id="schema_SpacecraftClassHeader"></a>
<a id="tocSspacecraftclassheader"></a>
<a id="tocsspacecraftclassheader"></a>

```json
{
  "uid": "string",
  "name": "string"
}
```

Header spacecraft class, embedded in other objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Spacecraft class unique ID|
|name|string|true|none|Spacecraft class name|

<h2 id="tocS_SpacecraftClassBase">SpacecraftClassBase</h2>
<!-- backwards compatibility -->
<a id="schemaspacecraftclassbase"></a>
<a id="schema_SpacecraftClassBase"></a>
<a id="tocSspacecraftclassbase"></a>
<a id="tocsspacecraftclassbase"></a>

```json
{
  "uid": "string",
  "name": "string",
  "numberOfDecks": 0,
  "warpCapable": true,
  "alternateReality": true,
  "activeFrom": "string",
  "activeTo": "string",
  "species": {
    "uid": "string",
    "name": "string"
  },
  "owner": {
    "uid": "string",
    "name": "string"
  },
  "operator": {
    "uid": "string",
    "name": "string"
  },
  "affiliation": {
    "uid": "string",
    "name": "string"
  }
}
```

Base spacecraft class, returned in search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Spacecraft class unique ID|
|name|string|true|none|Spacecraft class name|
|numberOfDecks|integer|false|none|Number of decks|
|warpCapable|boolean|false|none|Whether it's a warp-capable spacecraft class|
|alternateReality|boolean|false|none|Whether this spacecraft class is from alternate reality|
|activeFrom|string|false|none|Starting period when this spacecraft class was in use|
|activeTo|string|false|none|Ending period when this spacecraft class was in use|
|species|[SpeciesHeader](#schemaspeciesheader)|false|none|Header species, embedded in other objects|
|owner|[OrganizationHeader](#schemaorganizationheader)|false|none|Header organization, embedded in other objects|
|operator|[OrganizationHeader](#schemaorganizationheader)|false|none|Header organization, embedded in other objects|
|affiliation|[OrganizationHeader](#schemaorganizationheader)|false|none|Header organization, embedded in other objects|

<h2 id="tocS_SpacecraftClassFull">SpacecraftClassFull</h2>
<!-- backwards compatibility -->
<a id="schemaspacecraftclassfull"></a>
<a id="schema_SpacecraftClassFull"></a>
<a id="tocSspacecraftclassfull"></a>
<a id="tocsspacecraftclassfull"></a>

```json
{
  "uid": "string",
  "name": "string",
  "numberOfDecks": 0,
  "warpCapable": true,
  "alternateReality": true,
  "activeFrom": "string",
  "activeTo": "string",
  "species": {
    "uid": "string",
    "name": "string"
  },
  "owner": {
    "uid": "string",
    "name": "string",
    "government": true,
    "intergovernmentalOrganization": true,
    "researchOrganization": true,
    "sportOrganization": true,
    "medicalOrganization": true,
    "militaryOrganization": true,
    "militaryUnit": true,
    "governmentAgency": true,
    "lawEnforcementAgency": true,
    "prisonOrPenalColony": true,
    "mirror": true,
    "alternateReality": true
  },
  "operator": {
    "uid": "string",
    "name": "string",
    "government": true,
    "intergovernmentalOrganization": true,
    "researchOrganization": true,
    "sportOrganization": true,
    "medicalOrganization": true,
    "militaryOrganization": true,
    "militaryUnit": true,
    "governmentAgency": true,
    "lawEnforcementAgency": true,
    "prisonOrPenalColony": true,
    "mirror": true,
    "alternateReality": true
  },
  "affiliation": {
    "uid": "string",
    "name": "string",
    "government": true,
    "intergovernmentalOrganization": true,
    "researchOrganization": true,
    "sportOrganization": true,
    "medicalOrganization": true,
    "militaryOrganization": true,
    "militaryUnit": true,
    "governmentAgency": true,
    "lawEnforcementAgency": true,
    "prisonOrPenalColony": true,
    "mirror": true,
    "alternateReality": true
  },
  "spacecraftTypes": [
    {
      "uid": "string",
      "name": "string"
    }
  ],
  "spacecrafts": [
    {
      "uid": "string",
      "name": "string",
      "registry": "string",
      "status": "string",
      "dateStatus": "string",
      "spacecraftClass": {
        "uid": "string",
        "name": "string"
      },
      "owner": {
        "uid": "string",
        "name": "string"
      },
      "operator": {
        "uid": "string",
        "name": "string"
      }
    }
  ]
}
```

Full spacecraft class, returned when queried using UID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Spacecraft class unique ID|
|name|string|true|none|Spacecraft class name|
|numberOfDecks|integer|false|none|Number of decks|
|warpCapable|boolean|false|none|Whether it's a warp-capable spacecraft class|
|alternateReality|boolean|false|none|Whether this spacecraft class is from alternate reality|
|activeFrom|string|false|none|Starting period when this spacecraft class was in use|
|activeTo|string|false|none|Ending period when this spacecraft class was in use|
|species|[SpeciesHeader](#schemaspeciesheader)|false|none|Header species, embedded in other objects|
|owner|[OrganizationBase](#schemaorganizationbase)|false|none|Base organization, returned in search results|
|operator|[OrganizationBase](#schemaorganizationbase)|false|none|Base organization, returned in search results|
|affiliation|[OrganizationBase](#schemaorganizationbase)|false|none|Base organization, returned in search results|
|spacecraftTypes|[[SpacecraftType](#schemaspacecrafttype)]|false|none|Spacecraft types|
|spacecrafts|[[SpacecraftBase](#schemaspacecraftbase)]|false|none|Spacecrafts|

<h2 id="tocS_SpacecraftClassBaseResponse">SpacecraftClassBaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemaspacecraftclassbaseresponse"></a>
<a id="schema_SpacecraftClassBaseResponse"></a>
<a id="tocSspacecraftclassbaseresponse"></a>
<a id="tocsspacecraftclassbaseresponse"></a>

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "spacecraftClasses": [
    {
      "uid": "string",
      "name": "string",
      "numberOfDecks": 0,
      "warpCapable": true,
      "alternateReality": true,
      "activeFrom": "string",
      "activeTo": "string",
      "species": {
        "uid": "string",
        "name": "string"
      },
      "owner": {
        "uid": "string",
        "name": "string"
      },
      "operator": {
        "uid": "string",
        "name": "string"
      },
      "affiliation": {
        "uid": "string",
        "name": "string"
      }
    }
  ]
}
```

Response object for spacecraft classes search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|[ResponsePage](#schemaresponsepage)|false|none|Object describing response page|
|sort|[ResponseSort](#schemaresponsesort)|false|none|Response sort|
|spacecraftClasses|[[SpacecraftClassBase](#schemaspacecraftclassbase)]|false|none|List of spacecraft classes matching given criteria|

<h2 id="tocS_SpacecraftClassFullResponse">SpacecraftClassFullResponse</h2>
<!-- backwards compatibility -->
<a id="schemaspacecraftclassfullresponse"></a>
<a id="schema_SpacecraftClassFullResponse"></a>
<a id="tocSspacecraftclassfullresponse"></a>
<a id="tocsspacecraftclassfullresponse"></a>

```json
{
  "spacecraftClass": {
    "uid": "string",
    "name": "string",
    "numberOfDecks": 0,
    "warpCapable": true,
    "alternateReality": true,
    "activeFrom": "string",
    "activeTo": "string",
    "species": {
      "uid": "string",
      "name": "string"
    },
    "owner": {
      "uid": "string",
      "name": "string",
      "government": true,
      "intergovernmentalOrganization": true,
      "researchOrganization": true,
      "sportOrganization": true,
      "medicalOrganization": true,
      "militaryOrganization": true,
      "militaryUnit": true,
      "governmentAgency": true,
      "lawEnforcementAgency": true,
      "prisonOrPenalColony": true,
      "mirror": true,
      "alternateReality": true
    },
    "operator": {
      "uid": "string",
      "name": "string",
      "government": true,
      "intergovernmentalOrganization": true,
      "researchOrganization": true,
      "sportOrganization": true,
      "medicalOrganization": true,
      "militaryOrganization": true,
      "militaryUnit": true,
      "governmentAgency": true,
      "lawEnforcementAgency": true,
      "prisonOrPenalColony": true,
      "mirror": true,
      "alternateReality": true
    },
    "affiliation": {
      "uid": "string",
      "name": "string",
      "government": true,
      "intergovernmentalOrganization": true,
      "researchOrganization": true,
      "sportOrganization": true,
      "medicalOrganization": true,
      "militaryOrganization": true,
      "militaryUnit": true,
      "governmentAgency": true,
      "lawEnforcementAgency": true,
      "prisonOrPenalColony": true,
      "mirror": true,
      "alternateReality": true
    },
    "spacecraftTypes": [
      {
        "uid": "string",
        "name": "string"
      }
    ],
    "spacecrafts": [
      {
        "uid": "string",
        "name": "string",
        "registry": "string",
        "status": "string",
        "dateStatus": "string",
        "spacecraftClass": {
          "uid": "string",
          "name": "string"
        },
        "owner": {
          "uid": "string",
          "name": "string"
        },
        "operator": {
          "uid": "string",
          "name": "string"
        }
      }
    ]
  }
}
```

Response object for single spacecraft class query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|spacecraftClass|[SpacecraftClassFull](#schemaspacecraftclassfull)|false|none|Full spacecraft class, returned when queried using UID|

<h2 id="tocS_SpacecraftType">SpacecraftType</h2>
<!-- backwards compatibility -->
<a id="schemaspacecrafttype"></a>
<a id="schema_SpacecraftType"></a>
<a id="tocSspacecrafttype"></a>
<a id="tocsspacecrafttype"></a>

```json
{
  "uid": "string",
  "name": "string"
}
```

Rating of video release, etc.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|false|none|Spacecraft type unique ID|
|name|string|false|none|Spacecraft type name|

<h2 id="tocS_SpeciesHeader">SpeciesHeader</h2>
<!-- backwards compatibility -->
<a id="schemaspeciesheader"></a>
<a id="schema_SpeciesHeader"></a>
<a id="tocSspeciesheader"></a>
<a id="tocsspeciesheader"></a>

```json
{
  "uid": "string",
  "name": "string"
}
```

Header species, embedded in other objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Species unique ID|
|name|string|true|none|Species name|

<h2 id="tocS_SpeciesBase">SpeciesBase</h2>
<!-- backwards compatibility -->
<a id="schemaspeciesbase"></a>
<a id="schema_SpeciesBase"></a>
<a id="tocSspeciesbase"></a>
<a id="tocsspeciesbase"></a>

```json
{
  "uid": "string",
  "name": "string",
  "homeworld": {
    "uid": "string",
    "name": "string"
  },
  "quadrant": {
    "uid": "string",
    "name": "string"
  },
  "extinctSpecies": true,
  "warpCapableSpecies": true,
  "extraGalacticSpecies": true,
  "humanoidSpecies": true,
  "reptilianSpecies": true,
  "nonCorporealSpecies": true,
  "shapeshiftingSpecies": true,
  "spaceborneSpecies": true,
  "telepathicSpecies": true,
  "transDimensionalSpecies": true,
  "unnamedSpecies": true,
  "alternateReality": true
}
```

Base species, returned in search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Species unique ID|
|name|string|true|none|Species name|
|homeworld|[AstronomicalObjectHeader](#schemaastronomicalobjectheader)|false|none|Header astronomical object, embedded in other objects|
|quadrant|[AstronomicalObjectHeader](#schemaastronomicalobjectheader)|false|none|Header astronomical object, embedded in other objects|
|extinctSpecies|boolean|false|none|Whether it's an extinct species|
|warpCapableSpecies|boolean|false|none|Whether it's a warp-capable species|
|extraGalacticSpecies|boolean|false|none|Whether it's an extra-galactic species|
|humanoidSpecies|boolean|false|none|Whether it's a humanoid species|
|reptilianSpecies|boolean|false|none|Whether it's a reptilian species|
|nonCorporealSpecies|boolean|false|none|Whether it's a non-corporeal species|
|shapeshiftingSpecies|boolean|false|none|Whether it's a shapeshifting species|
|spaceborneSpecies|boolean|false|none|Whether it's a spaceborne species|
|telepathicSpecies|boolean|false|none|Whether it's a telepathic species|
|transDimensionalSpecies|boolean|false|none|Whether it's a trans-dimensional species|
|unnamedSpecies|boolean|false|none|Whether it's a unnamed species|
|alternateReality|boolean|false|none|Whether this species is from alternate reality|

<h2 id="tocS_SpeciesFull">SpeciesFull</h2>
<!-- backwards compatibility -->
<a id="schemaspeciesfull"></a>
<a id="schema_SpeciesFull"></a>
<a id="tocSspeciesfull"></a>
<a id="tocsspeciesfull"></a>

```json
{
  "uid": "string",
  "name": "string",
  "homeworld": {
    "uid": "string",
    "name": "string",
    "astronomicalObjectType": "PLANET",
    "location": {
      "uid": "string",
      "name": "string"
    }
  },
  "quadrant": {
    "uid": "string",
    "name": "string",
    "astronomicalObjectType": "PLANET",
    "location": {
      "uid": "string",
      "name": "string"
    }
  },
  "extinctSpecies": true,
  "warpCapableSpecies": true,
  "extraGalacticSpecies": true,
  "humanoidSpecies": true,
  "reptilianSpecies": true,
  "nonCorporealSpecies": true,
  "shapeshiftingSpecies": true,
  "spaceborneSpecies": true,
  "telepathicSpecies": true,
  "transDimensionalSpecies": true,
  "unnamedSpecies": true,
  "alternateReality": true,
  "characters": [
    {
      "uid": "string",
      "name": "string",
      "gender": "F",
      "yearOfBirth": 0,
      "monthOfBirth": 0,
      "dayOfBirth": 0,
      "placeOfBirth": "string",
      "yearOfDeath": 0,
      "monthOfDeath": 0,
      "dayOfDeath": 0,
      "placeOfDeath": "string",
      "height": 0,
      "weight": 0,
      "deceased": true,
      "bloodType": "B_NEGATIVE",
      "maritalStatus": "SINGLE",
      "serialNumber": "string",
      "hologramActivationDate": "string",
      "hologramStatus": "string",
      "hologramDateStatus": "string",
      "hologram": true,
      "fictionalCharacter": true,
      "mirror": true,
      "alternateReality": true
    }
  ]
}
```

Full species, returned when queried using UID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Species unique ID|
|name|string|true|none|Species name|
|homeworld|[AstronomicalObjectBase](#schemaastronomicalobjectbase)|false|none|Base astronomical object, returned in search results|
|quadrant|[AstronomicalObjectBase](#schemaastronomicalobjectbase)|false|none|Base astronomical object, returned in search results|
|extinctSpecies|boolean|false|none|Whether it's an extinct species|
|warpCapableSpecies|boolean|false|none|Whether it's a warp-capable species|
|extraGalacticSpecies|boolean|false|none|Whether it's an extra-galactic species|
|humanoidSpecies|boolean|false|none|Whether it's a humanoid species|
|reptilianSpecies|boolean|false|none|Whether it's a reptilian species|
|nonCorporealSpecies|boolean|false|none|Whether it's a non-corporeal species|
|shapeshiftingSpecies|boolean|false|none|Whether it's a shapeshifting species|
|spaceborneSpecies|boolean|false|none|Whether it's a spaceborne species|
|telepathicSpecies|boolean|false|none|Whether it's a telepathic species|
|transDimensionalSpecies|boolean|false|none|Whether it's a trans-dimensional species|
|unnamedSpecies|boolean|false|none|Whether it's a unnamed species|
|alternateReality|boolean|false|none|Whether this species is from alternate reality|
|characters|[[CharacterBase](#schemacharacterbase)]|false|none|Characters belonging to the species|

<h2 id="tocS_SpeciesBaseResponse">SpeciesBaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemaspeciesbaseresponse"></a>
<a id="schema_SpeciesBaseResponse"></a>
<a id="tocSspeciesbaseresponse"></a>
<a id="tocsspeciesbaseresponse"></a>

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "species": [
    {
      "uid": "string",
      "name": "string",
      "homeworld": {
        "uid": "string",
        "name": "string"
      },
      "quadrant": {
        "uid": "string",
        "name": "string"
      },
      "extinctSpecies": true,
      "warpCapableSpecies": true,
      "extraGalacticSpecies": true,
      "humanoidSpecies": true,
      "reptilianSpecies": true,
      "nonCorporealSpecies": true,
      "shapeshiftingSpecies": true,
      "spaceborneSpecies": true,
      "telepathicSpecies": true,
      "transDimensionalSpecies": true,
      "unnamedSpecies": true,
      "alternateReality": true
    }
  ]
}
```

Response object for species search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|[ResponsePage](#schemaresponsepage)|false|none|Object describing response page|
|sort|[ResponseSort](#schemaresponsesort)|false|none|Response sort|
|species|[[SpeciesBase](#schemaspeciesbase)]|false|none|List of species matching given criteria|

<h2 id="tocS_SpeciesFullResponse">SpeciesFullResponse</h2>
<!-- backwards compatibility -->
<a id="schemaspeciesfullresponse"></a>
<a id="schema_SpeciesFullResponse"></a>
<a id="tocSspeciesfullresponse"></a>
<a id="tocsspeciesfullresponse"></a>

```json
{
  "species": {
    "uid": "string",
    "name": "string",
    "homeworld": {
      "uid": "string",
      "name": "string",
      "astronomicalObjectType": "PLANET",
      "location": {
        "uid": "string",
        "name": "string"
      }
    },
    "quadrant": {
      "uid": "string",
      "name": "string",
      "astronomicalObjectType": "PLANET",
      "location": {
        "uid": "string",
        "name": "string"
      }
    },
    "extinctSpecies": true,
    "warpCapableSpecies": true,
    "extraGalacticSpecies": true,
    "humanoidSpecies": true,
    "reptilianSpecies": true,
    "nonCorporealSpecies": true,
    "shapeshiftingSpecies": true,
    "spaceborneSpecies": true,
    "telepathicSpecies": true,
    "transDimensionalSpecies": true,
    "unnamedSpecies": true,
    "alternateReality": true,
    "characters": [
      {
        "uid": "string",
        "name": "string",
        "gender": "F",
        "yearOfBirth": 0,
        "monthOfBirth": 0,
        "dayOfBirth": 0,
        "placeOfBirth": "string",
        "yearOfDeath": 0,
        "monthOfDeath": 0,
        "dayOfDeath": 0,
        "placeOfDeath": "string",
        "height": 0,
        "weight": 0,
        "deceased": true,
        "bloodType": "B_NEGATIVE",
        "maritalStatus": "SINGLE",
        "serialNumber": "string",
        "hologramActivationDate": "string",
        "hologramStatus": "string",
        "hologramDateStatus": "string",
        "hologram": true,
        "fictionalCharacter": true,
        "mirror": true,
        "alternateReality": true
      }
    ]
  }
}
```

Response object for single species query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|species|[SpeciesFull](#schemaspeciesfull)|false|none|Full species, returned when queried using UID|

<h2 id="tocS_StaffHeader">StaffHeader</h2>
<!-- backwards compatibility -->
<a id="schemastaffheader"></a>
<a id="schema_StaffHeader"></a>
<a id="tocSstaffheader"></a>
<a id="tocsstaffheader"></a>

```json
{
  "uid": "string",
  "name": "string"
}
```

Header staff, embedded in other objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Staff unique ID|
|name|string|true|none|Staff name|

<h2 id="tocS_StaffBase">StaffBase</h2>
<!-- backwards compatibility -->
<a id="schemastaffbase"></a>
<a id="schema_StaffBase"></a>
<a id="tocSstaffbase"></a>
<a id="tocsstaffbase"></a>

```json
{
  "uid": "string",
  "name": "string",
  "birthName": "string",
  "gender": "F",
  "dateOfBirth": "1970-01-01",
  "placeOfBirth": "string",
  "dateOfDeath": "1970-01-01",
  "placeOfDeath": "string",
  "artDepartment": true,
  "artDirector": true,
  "productionDesigner": true,
  "cameraAndElectricalDepartment": true,
  "cinematographer": true,
  "castingDepartment": true,
  "costumeDepartment": true,
  "costumeDesigner": true,
  "director": true,
  "assistantOrSecondUnitDirector": true,
  "exhibitAndAttractionStaff": true,
  "filmEditor": true,
  "linguist": true,
  "locationStaff": true,
  "makeupStaff": true,
  "musicDepartment": true,
  "composer": true,
  "personalAssistant": true,
  "producer": true,
  "productionAssociate": true,
  "productionStaff": true,
  "publicationStaff": true,
  "scienceConsultant": true,
  "soundDepartment": true,
  "specialAndVisualEffectsStaff": true,
  "author": true,
  "audioAuthor": true,
  "calendarArtist": true,
  "comicArtist": true,
  "comicAuthor": true,
  "comicColorArtist": true,
  "comicInteriorArtist": true,
  "comicInkArtist": true,
  "comicPencilArtist": true,
  "comicLetterArtist": true,
  "comicStripArtist": true,
  "gameArtist": true,
  "gameAuthor": true,
  "novelArtist": true,
  "novelAuthor": true,
  "referenceArtist": true,
  "referenceAuthor": true,
  "publicationArtist": true,
  "publicationDesigner": true,
  "publicationEditor": true,
  "publicityArtist": true,
  "cbsDigitalStaff": true,
  "ilmProductionStaff": true,
  "specialFeaturesStaff": true,
  "storyEditor": true,
  "studioExecutive": true,
  "stuntDepartment": true,
  "transportationDepartment": true,
  "videoGameProductionStaff": true,
  "writer": true
}
```

Base staff, returned in search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Staff unique ID|
|name|string|true|none|Staff name|
|birthName|string|false|none|Staff birth name|
|gender|[Gender](#schemagender)|false|none|Gender|
|dateOfBirth|string(date)|false|none|Date the staff was born|
|placeOfBirth|string|false|none|Place the staff was born|
|dateOfDeath|string(date)|false|none|Date the staff died|
|placeOfDeath|string|false|none|Place the staff died|
|artDepartment|boolean|false|none|Whether this person if from art department|
|artDirector|boolean|false|none|Whether this person is an art director|
|productionDesigner|boolean|false|none|Whether this person is a production designer|
|cameraAndElectricalDepartment|boolean|false|none|Whether this person is from camera and electrical department|
|cinematographer|boolean|false|none|Whether this person is a cinematographer|
|castingDepartment|boolean|false|none|Whether this person is from casting department|
|costumeDepartment|boolean|false|none|Whether this person is from costume department|
|costumeDesigner|boolean|false|none|Whether this person is a custume designer|
|director|boolean|false|none|Whether this person is a director|
|assistantOrSecondUnitDirector|boolean|false|none|Whether this person is an assistant or secound unit director director|
|exhibitAndAttractionStaff|boolean|false|none|Whether this person is an exhibit and tttraction staff|
|filmEditor|boolean|false|none|Whether this person is a film editor|
|linguist|boolean|false|none|Whether this person is a linguist|
|locationStaff|boolean|false|none|Whether this person is a location staff|
|makeupStaff|boolean|false|none|Whether this person is a make-up staff|
|musicDepartment|boolean|false|none|Whether this person is from music department|
|composer|boolean|false|none|Whether this person is a composer|
|personalAssistant|boolean|false|none|Whether this person is a personal assistant|
|producer|boolean|false|none|Whether this person is a producer|
|productionAssociate|boolean|false|none|Whether this person is a production associate|
|productionStaff|boolean|false|none|Whether this person is a production staff|
|publicationStaff|boolean|false|none|Whether this person is a publication staff|
|scienceConsultant|boolean|false|none|Whether this person is a science consultant|
|soundDepartment|boolean|false|none|Whether this person is from sound department|
|specialAndVisualEffectsStaff|boolean|false|none|Whether this person is a special and visual effects staff|
|author|boolean|false|none|Whether this person is an author|
|audioAuthor|boolean|false|none|Whether this person is an audio author|
|calendarArtist|boolean|false|none|Whether this person is a calendar artist|
|comicArtist|boolean|false|none|Whether this person is a comic artist|
|comicAuthor|boolean|false|none|Whether this person is a comic author|
|comicColorArtist|boolean|false|none|Whether this person is a comic color artist|
|comicInteriorArtist|boolean|false|none|Whether this person is a comic interior artist|
|comicInkArtist|boolean|false|none|Whether this person is a comic ink artist|
|comicPencilArtist|boolean|false|none|Whether this person is a comic pencil artist|
|comicLetterArtist|boolean|false|none|Whether this person is a comic letter artist|
|comicStripArtist|boolean|false|none|Whether this person is a comic strip artist|
|gameArtist|boolean|false|none|Whether this person is a game artist|
|gameAuthor|boolean|false|none|Whether this person is a game author|
|novelArtist|boolean|false|none|Whether this person is a novel artist|
|novelAuthor|boolean|false|none|Whether this person is a novel author|
|referenceArtist|boolean|false|none|Whether this person is a reference artist|
|referenceAuthor|boolean|false|none|Whether this person is a reference author|
|publicationArtist|boolean|false|none|Whether this person is a publication artist|
|publicationDesigner|boolean|false|none|Whether this person is a publication designer|
|publicationEditor|boolean|false|none|Whether this person is a publication editor|
|publicityArtist|boolean|false|none|Whether this person is a publication artist|
|cbsDigitalStaff|boolean|false|none|Whether this person is a part of CBS digital staff|
|ilmProductionStaff|boolean|false|none|Whether this person is a part of ILM production staff|
|specialFeaturesStaff|boolean|false|none|Whether this person is a special features artist|
|storyEditor|boolean|false|none|Whether this person is a story editor|
|studioExecutive|boolean|false|none|Whether this person is a studio executive|
|stuntDepartment|boolean|false|none|Whether this person is from stunt department|
|transportationDepartment|boolean|false|none|Whether this person is from transportation department|
|videoGameProductionStaff|boolean|false|none|Whether this person is video game production staff|
|writer|boolean|false|none|Whether this person is a writer|

#### Enumerated Values

|Property|Value|
|---|---|
|gender|F|
|gender|M|

<h2 id="tocS_StaffFull">StaffFull</h2>
<!-- backwards compatibility -->
<a id="schemastafffull"></a>
<a id="schema_StaffFull"></a>
<a id="tocSstafffull"></a>
<a id="tocsstafffull"></a>

```json
{
  "uid": "string",
  "name": "string",
  "birthName": "string",
  "gender": "F",
  "dateOfBirth": "1970-01-01",
  "placeOfBirth": "string",
  "dateOfDeath": "1970-01-01",
  "placeOfDeath": "string",
  "artDepartment": true,
  "artDirector": true,
  "productionDesigner": true,
  "cameraAndElectricalDepartment": true,
  "cinematographer": true,
  "castingDepartment": true,
  "costumeDepartment": true,
  "costumeDesigner": true,
  "director": true,
  "assistantOrSecondUnitDirector": true,
  "exhibitAndAttractionStaff": true,
  "filmEditor": true,
  "linguist": true,
  "locationStaff": true,
  "makeupStaff": true,
  "musicDepartment": true,
  "composer": true,
  "personalAssistant": true,
  "producer": true,
  "productionAssociate": true,
  "productionStaff": true,
  "publicationStaff": true,
  "scienceConsultant": true,
  "soundDepartment": true,
  "specialAndVisualEffectsStaff": true,
  "author": true,
  "audioAuthor": true,
  "calendarArtist": true,
  "comicArtist": true,
  "comicAuthor": true,
  "comicColorArtist": true,
  "comicInteriorArtist": true,
  "comicInkArtist": true,
  "comicPencilArtist": true,
  "comicLetterArtist": true,
  "comicStripArtist": true,
  "gameArtist": true,
  "gameAuthor": true,
  "novelArtist": true,
  "novelAuthor": true,
  "referenceArtist": true,
  "referenceAuthor": true,
  "publicationArtist": true,
  "publicationDesigner": true,
  "publicationEditor": true,
  "publicityArtist": true,
  "cbsDigitalStaff": true,
  "ilmProductionStaff": true,
  "specialFeaturesStaff": true,
  "storyEditor": true,
  "studioExecutive": true,
  "stuntDepartment": true,
  "transportationDepartment": true,
  "videoGameProductionStaff": true,
  "writer": true,
  "writtenEpisodes": [
    {
      "uid": "string",
      "title": "string",
      "titleGerman": "string",
      "titleItalian": "string",
      "titleJapanese": "string",
      "series": {
        "uid": "string",
        "title": "string"
      },
      "season": {
        "uid": "string",
        "title": "string"
      },
      "seasonNumber": 0,
      "episodeNumber": 0,
      "productionSerialNumber": "string",
      "featureLength": true,
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "usAirDate": "1970-01-01",
      "finalScriptDate": "1970-01-01"
    }
  ],
  "teleplayAuthoredEpisodes": [
    {
      "uid": "string",
      "title": "string",
      "titleGerman": "string",
      "titleItalian": "string",
      "titleJapanese": "string",
      "series": {
        "uid": "string",
        "title": "string"
      },
      "season": {
        "uid": "string",
        "title": "string"
      },
      "seasonNumber": 0,
      "episodeNumber": 0,
      "productionSerialNumber": "string",
      "featureLength": true,
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "usAirDate": "1970-01-01",
      "finalScriptDate": "1970-01-01"
    }
  ],
  "storyAuthoredEpisodes": [
    {
      "uid": "string",
      "title": "string",
      "titleGerman": "string",
      "titleItalian": "string",
      "titleJapanese": "string",
      "series": {
        "uid": "string",
        "title": "string"
      },
      "season": {
        "uid": "string",
        "title": "string"
      },
      "seasonNumber": 0,
      "episodeNumber": 0,
      "productionSerialNumber": "string",
      "featureLength": true,
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "usAirDate": "1970-01-01",
      "finalScriptDate": "1970-01-01"
    }
  ],
  "directedEpisodes": [
    {
      "uid": "string",
      "title": "string",
      "titleGerman": "string",
      "titleItalian": "string",
      "titleJapanese": "string",
      "series": {
        "uid": "string",
        "title": "string"
      },
      "season": {
        "uid": "string",
        "title": "string"
      },
      "seasonNumber": 0,
      "episodeNumber": 0,
      "productionSerialNumber": "string",
      "featureLength": true,
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "usAirDate": "1970-01-01",
      "finalScriptDate": "1970-01-01"
    }
  ],
  "episodes": [
    {
      "uid": "string",
      "title": "string",
      "titleGerman": "string",
      "titleItalian": "string",
      "titleJapanese": "string",
      "series": {
        "uid": "string",
        "title": "string"
      },
      "season": {
        "uid": "string",
        "title": "string"
      },
      "seasonNumber": 0,
      "episodeNumber": 0,
      "productionSerialNumber": "string",
      "featureLength": true,
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "usAirDate": "1970-01-01",
      "finalScriptDate": "1970-01-01"
    }
  ],
  "writtenMovies": [
    {
      "uid": "string",
      "title": "string",
      "mainDirector": {
        "uid": "string",
        "name": "string"
      },
      "titleBulgarian": "string",
      "titleCatalan": "string",
      "titleChineseTraditional": "string",
      "titleGerman": "string",
      "titleItalian": "string",
      "titleJapanese": "string",
      "titlePolish": "string",
      "titleRussian": "string",
      "titleSerbian": "string",
      "titleSpanish": "string",
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "usReleaseDate": "1970-01-01"
    }
  ],
  "screenplayAuthoredMovies": [
    {
      "uid": "string",
      "title": "string",
      "mainDirector": {
        "uid": "string",
        "name": "string"
      },
      "titleBulgarian": "string",
      "titleCatalan": "string",
      "titleChineseTraditional": "string",
      "titleGerman": "string",
      "titleItalian": "string",
      "titleJapanese": "string",
      "titlePolish": "string",
      "titleRussian": "string",
      "titleSerbian": "string",
      "titleSpanish": "string",
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "usReleaseDate": "1970-01-01"
    }
  ],
  "storyAuthoredMovies": [
    {
      "uid": "string",
      "title": "string",
      "mainDirector": {
        "uid": "string",
        "name": "string"
      },
      "titleBulgarian": "string",
      "titleCatalan": "string",
      "titleChineseTraditional": "string",
      "titleGerman": "string",
      "titleItalian": "string",
      "titleJapanese": "string",
      "titlePolish": "string",
      "titleRussian": "string",
      "titleSerbian": "string",
      "titleSpanish": "string",
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "usReleaseDate": "1970-01-01"
    }
  ],
  "directedMovies": [
    {
      "uid": "string",
      "title": "string",
      "mainDirector": {
        "uid": "string",
        "name": "string"
      },
      "titleBulgarian": "string",
      "titleCatalan": "string",
      "titleChineseTraditional": "string",
      "titleGerman": "string",
      "titleItalian": "string",
      "titleJapanese": "string",
      "titlePolish": "string",
      "titleRussian": "string",
      "titleSerbian": "string",
      "titleSpanish": "string",
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "usReleaseDate": "1970-01-01"
    }
  ],
  "producedMovies": [
    {
      "uid": "string",
      "title": "string",
      "mainDirector": {
        "uid": "string",
        "name": "string"
      },
      "titleBulgarian": "string",
      "titleCatalan": "string",
      "titleChineseTraditional": "string",
      "titleGerman": "string",
      "titleItalian": "string",
      "titleJapanese": "string",
      "titlePolish": "string",
      "titleRussian": "string",
      "titleSerbian": "string",
      "titleSpanish": "string",
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "usReleaseDate": "1970-01-01"
    }
  ],
  "movies": [
    {
      "uid": "string",
      "title": "string",
      "mainDirector": {
        "uid": "string",
        "name": "string"
      },
      "titleBulgarian": "string",
      "titleCatalan": "string",
      "titleChineseTraditional": "string",
      "titleGerman": "string",
      "titleItalian": "string",
      "titleJapanese": "string",
      "titlePolish": "string",
      "titleRussian": "string",
      "titleSerbian": "string",
      "titleSpanish": "string",
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "usReleaseDate": "1970-01-01"
    }
  ]
}
```

Full staff, returned when queried using UID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Staff unique ID|
|name|string|true|none|Staff name|
|birthName|string|false|none|Staff birth name|
|gender|[Gender](#schemagender)|false|none|Gender|
|dateOfBirth|string(date)|false|none|Date the staff was born|
|placeOfBirth|string|false|none|Place the staff was born|
|dateOfDeath|string(date)|false|none|Date the staff died|
|placeOfDeath|string|false|none|Place the staff died|
|artDepartment|boolean|false|none|Whether this person is from art department|
|artDirector|boolean|false|none|Whether this person is an art director|
|productionDesigner|boolean|false|none|Whether this person is a production designer|
|cameraAndElectricalDepartment|boolean|false|none|Whether this person is from camera and electrical department|
|cinematographer|boolean|false|none|Whether this person is a cinematographer|
|castingDepartment|boolean|false|none|Whether this person is from casting department|
|costumeDepartment|boolean|false|none|Whether this person is from costume department|
|costumeDesigner|boolean|false|none|Whether this person is a custume designer|
|director|boolean|false|none|Whether this person is a director|
|assistantOrSecondUnitDirector|boolean|false|none|Whether this person is an assistant or secound unit director director|
|exhibitAndAttractionStaff|boolean|false|none|Whether this person is an exhibit and attraction staff|
|filmEditor|boolean|false|none|Whether this person is a film editor|
|linguist|boolean|false|none|Whether this person is a linguist|
|locationStaff|boolean|false|none|Whether this person is a location staff|
|makeupStaff|boolean|false|none|Whether this person is a make-up staff|
|musicDepartment|boolean|false|none|Whether this person is from music department|
|composer|boolean|false|none|Whether this person is a composer|
|personalAssistant|boolean|false|none|Whether this person is a personal assistant|
|producer|boolean|false|none|Whether this person is a producer|
|productionAssociate|boolean|false|none|Whether this person is a production associate|
|productionStaff|boolean|false|none|Whether this person is a production staff|
|publicationStaff|boolean|false|none|Whether this person is a publication staff|
|scienceConsultant|boolean|false|none|Whether this person is a science consultant|
|soundDepartment|boolean|false|none|Whether this person is from sound department|
|specialAndVisualEffectsStaff|boolean|false|none|Whether this person is a special and visual effects staff|
|author|boolean|false|none|Whether this person is an author|
|audioAuthor|boolean|false|none|Whether this person is an audio author|
|calendarArtist|boolean|false|none|Whether this person is a calendar artist|
|comicArtist|boolean|false|none|Whether this person is a comic artist|
|comicAuthor|boolean|false|none|Whether this person is a comic author|
|comicColorArtist|boolean|false|none|Whether this person is a comic color artist|
|comicInteriorArtist|boolean|false|none|Whether this person is a comic interior artist|
|comicInkArtist|boolean|false|none|Whether this person is a comic ink artist|
|comicPencilArtist|boolean|false|none|Whether this person is a comic pencil artist|
|comicLetterArtist|boolean|false|none|Whether this person is a comic letter artist|
|comicStripArtist|boolean|false|none|Whether this person is a comic strip artist|
|gameArtist|boolean|false|none|Whether this person is a game artist|
|gameAuthor|boolean|false|none|Whether this person is a game author|
|novelArtist|boolean|false|none|Whether this person is a novel artist|
|novelAuthor|boolean|false|none|Whether this person is a novel author|
|referenceArtist|boolean|false|none|Whether this person is a reference artist|
|referenceAuthor|boolean|false|none|Whether this person is a reference author|
|publicationArtist|boolean|false|none|Whether this person is a publication artist|
|publicationDesigner|boolean|false|none|Whether this person is a publication designer|
|publicationEditor|boolean|false|none|Whether this person is a publication editor|
|publicityArtist|boolean|false|none|Whether this person is a publicity artist|
|cbsDigitalStaff|boolean|false|none|Whether this person is a part of CBS digital staff|
|ilmProductionStaff|boolean|false|none|Whether this person is a part of ILM production staff|
|specialFeaturesStaff|boolean|false|none|Whether this person is a special features artist|
|storyEditor|boolean|false|none|Whether this person is a story editor|
|studioExecutive|boolean|false|none|Whether this person is a studio executive|
|stuntDepartment|boolean|false|none|Whether this person is from stunt department|
|transportationDepartment|boolean|false|none|Whether this person is from transportation department|
|videoGameProductionStaff|boolean|false|none|Whether this person is video game production staff|
|writer|boolean|false|none|Whether this person is a writer|
|writtenEpisodes|[[EpisodeBase](#schemaepisodebase)]|false|none|Episodes written by this person|
|teleplayAuthoredEpisodes|[[EpisodeBase](#schemaepisodebase)]|false|none|Episodes to which this person has written teleplay|
|storyAuthoredEpisodes|[[EpisodeBase](#schemaepisodebase)]|false|none|Episodes to which this person has written story|
|directedEpisodes|[[EpisodeBase](#schemaepisodebase)]|false|none|Episodes directed by this person|
|episodes|[[EpisodeBase](#schemaepisodebase)]|false|none|Episodes on which this person worked|
|writtenMovies|[[MovieBase](#schemamoviebase)]|false|none|Movies written by this person|
|screenplayAuthoredMovies|[[MovieBase](#schemamoviebase)]|false|none|Movies to which this person has written screenplay|
|storyAuthoredMovies|[[MovieBase](#schemamoviebase)]|false|none|Movies to which this person has written story|
|directedMovies|[[MovieBase](#schemamoviebase)]|false|none|Movies directed by this person|
|producedMovies|[[MovieBase](#schemamoviebase)]|false|none|Movies produced by this person|
|movies|[[MovieBase](#schemamoviebase)]|false|none|Movies on which this person worked|

#### Enumerated Values

|Property|Value|
|---|---|
|gender|F|
|gender|M|

<h2 id="tocS_StaffBaseResponse">StaffBaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemastaffbaseresponse"></a>
<a id="schema_StaffBaseResponse"></a>
<a id="tocSstaffbaseresponse"></a>
<a id="tocsstaffbaseresponse"></a>

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "staff": [
    {
      "uid": "string",
      "name": "string",
      "birthName": "string",
      "gender": "F",
      "dateOfBirth": "1970-01-01",
      "placeOfBirth": "string",
      "dateOfDeath": "1970-01-01",
      "placeOfDeath": "string",
      "artDepartment": true,
      "artDirector": true,
      "productionDesigner": true,
      "cameraAndElectricalDepartment": true,
      "cinematographer": true,
      "castingDepartment": true,
      "costumeDepartment": true,
      "costumeDesigner": true,
      "director": true,
      "assistantOrSecondUnitDirector": true,
      "exhibitAndAttractionStaff": true,
      "filmEditor": true,
      "linguist": true,
      "locationStaff": true,
      "makeupStaff": true,
      "musicDepartment": true,
      "composer": true,
      "personalAssistant": true,
      "producer": true,
      "productionAssociate": true,
      "productionStaff": true,
      "publicationStaff": true,
      "scienceConsultant": true,
      "soundDepartment": true,
      "specialAndVisualEffectsStaff": true,
      "author": true,
      "audioAuthor": true,
      "calendarArtist": true,
      "comicArtist": true,
      "comicAuthor": true,
      "comicColorArtist": true,
      "comicInteriorArtist": true,
      "comicInkArtist": true,
      "comicPencilArtist": true,
      "comicLetterArtist": true,
      "comicStripArtist": true,
      "gameArtist": true,
      "gameAuthor": true,
      "novelArtist": true,
      "novelAuthor": true,
      "referenceArtist": true,
      "referenceAuthor": true,
      "publicationArtist": true,
      "publicationDesigner": true,
      "publicationEditor": true,
      "publicityArtist": true,
      "cbsDigitalStaff": true,
      "ilmProductionStaff": true,
      "specialFeaturesStaff": true,
      "storyEditor": true,
      "studioExecutive": true,
      "stuntDepartment": true,
      "transportationDepartment": true,
      "videoGameProductionStaff": true,
      "writer": true
    }
  ]
}
```

Response object for staff search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|[ResponsePage](#schemaresponsepage)|false|none|Object describing response page|
|sort|[ResponseSort](#schemaresponsesort)|false|none|Response sort|
|staff|[[StaffBase](#schemastaffbase)]|false|none|List of staff matching given criteria|

<h2 id="tocS_StaffFullResponse">StaffFullResponse</h2>
<!-- backwards compatibility -->
<a id="schemastafffullresponse"></a>
<a id="schema_StaffFullResponse"></a>
<a id="tocSstafffullresponse"></a>
<a id="tocsstafffullresponse"></a>

```json
{
  "staff": {
    "uid": "string",
    "name": "string",
    "birthName": "string",
    "gender": "F",
    "dateOfBirth": "1970-01-01",
    "placeOfBirth": "string",
    "dateOfDeath": "1970-01-01",
    "placeOfDeath": "string",
    "artDepartment": true,
    "artDirector": true,
    "productionDesigner": true,
    "cameraAndElectricalDepartment": true,
    "cinematographer": true,
    "castingDepartment": true,
    "costumeDepartment": true,
    "costumeDesigner": true,
    "director": true,
    "assistantOrSecondUnitDirector": true,
    "exhibitAndAttractionStaff": true,
    "filmEditor": true,
    "linguist": true,
    "locationStaff": true,
    "makeupStaff": true,
    "musicDepartment": true,
    "composer": true,
    "personalAssistant": true,
    "producer": true,
    "productionAssociate": true,
    "productionStaff": true,
    "publicationStaff": true,
    "scienceConsultant": true,
    "soundDepartment": true,
    "specialAndVisualEffectsStaff": true,
    "author": true,
    "audioAuthor": true,
    "calendarArtist": true,
    "comicArtist": true,
    "comicAuthor": true,
    "comicColorArtist": true,
    "comicInteriorArtist": true,
    "comicInkArtist": true,
    "comicPencilArtist": true,
    "comicLetterArtist": true,
    "comicStripArtist": true,
    "gameArtist": true,
    "gameAuthor": true,
    "novelArtist": true,
    "novelAuthor": true,
    "referenceArtist": true,
    "referenceAuthor": true,
    "publicationArtist": true,
    "publicationDesigner": true,
    "publicationEditor": true,
    "publicityArtist": true,
    "cbsDigitalStaff": true,
    "ilmProductionStaff": true,
    "specialFeaturesStaff": true,
    "storyEditor": true,
    "studioExecutive": true,
    "stuntDepartment": true,
    "transportationDepartment": true,
    "videoGameProductionStaff": true,
    "writer": true,
    "writtenEpisodes": [
      {
        "uid": "string",
        "title": "string",
        "titleGerman": "string",
        "titleItalian": "string",
        "titleJapanese": "string",
        "series": {
          "uid": "string",
          "title": "string"
        },
        "season": {
          "uid": "string",
          "title": "string"
        },
        "seasonNumber": 0,
        "episodeNumber": 0,
        "productionSerialNumber": "string",
        "featureLength": true,
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "usAirDate": "1970-01-01",
        "finalScriptDate": "1970-01-01"
      }
    ],
    "teleplayAuthoredEpisodes": [
      {
        "uid": "string",
        "title": "string",
        "titleGerman": "string",
        "titleItalian": "string",
        "titleJapanese": "string",
        "series": {
          "uid": "string",
          "title": "string"
        },
        "season": {
          "uid": "string",
          "title": "string"
        },
        "seasonNumber": 0,
        "episodeNumber": 0,
        "productionSerialNumber": "string",
        "featureLength": true,
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "usAirDate": "1970-01-01",
        "finalScriptDate": "1970-01-01"
      }
    ],
    "storyAuthoredEpisodes": [
      {
        "uid": "string",
        "title": "string",
        "titleGerman": "string",
        "titleItalian": "string",
        "titleJapanese": "string",
        "series": {
          "uid": "string",
          "title": "string"
        },
        "season": {
          "uid": "string",
          "title": "string"
        },
        "seasonNumber": 0,
        "episodeNumber": 0,
        "productionSerialNumber": "string",
        "featureLength": true,
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "usAirDate": "1970-01-01",
        "finalScriptDate": "1970-01-01"
      }
    ],
    "directedEpisodes": [
      {
        "uid": "string",
        "title": "string",
        "titleGerman": "string",
        "titleItalian": "string",
        "titleJapanese": "string",
        "series": {
          "uid": "string",
          "title": "string"
        },
        "season": {
          "uid": "string",
          "title": "string"
        },
        "seasonNumber": 0,
        "episodeNumber": 0,
        "productionSerialNumber": "string",
        "featureLength": true,
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "usAirDate": "1970-01-01",
        "finalScriptDate": "1970-01-01"
      }
    ],
    "episodes": [
      {
        "uid": "string",
        "title": "string",
        "titleGerman": "string",
        "titleItalian": "string",
        "titleJapanese": "string",
        "series": {
          "uid": "string",
          "title": "string"
        },
        "season": {
          "uid": "string",
          "title": "string"
        },
        "seasonNumber": 0,
        "episodeNumber": 0,
        "productionSerialNumber": "string",
        "featureLength": true,
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "usAirDate": "1970-01-01",
        "finalScriptDate": "1970-01-01"
      }
    ],
    "writtenMovies": [
      {
        "uid": "string",
        "title": "string",
        "mainDirector": {
          "uid": "string",
          "name": "string"
        },
        "titleBulgarian": "string",
        "titleCatalan": "string",
        "titleChineseTraditional": "string",
        "titleGerman": "string",
        "titleItalian": "string",
        "titleJapanese": "string",
        "titlePolish": "string",
        "titleRussian": "string",
        "titleSerbian": "string",
        "titleSpanish": "string",
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "usReleaseDate": "1970-01-01"
      }
    ],
    "screenplayAuthoredMovies": [
      {
        "uid": "string",
        "title": "string",
        "mainDirector": {
          "uid": "string",
          "name": "string"
        },
        "titleBulgarian": "string",
        "titleCatalan": "string",
        "titleChineseTraditional": "string",
        "titleGerman": "string",
        "titleItalian": "string",
        "titleJapanese": "string",
        "titlePolish": "string",
        "titleRussian": "string",
        "titleSerbian": "string",
        "titleSpanish": "string",
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "usReleaseDate": "1970-01-01"
      }
    ],
    "storyAuthoredMovies": [
      {
        "uid": "string",
        "title": "string",
        "mainDirector": {
          "uid": "string",
          "name": "string"
        },
        "titleBulgarian": "string",
        "titleCatalan": "string",
        "titleChineseTraditional": "string",
        "titleGerman": "string",
        "titleItalian": "string",
        "titleJapanese": "string",
        "titlePolish": "string",
        "titleRussian": "string",
        "titleSerbian": "string",
        "titleSpanish": "string",
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "usReleaseDate": "1970-01-01"
      }
    ],
    "directedMovies": [
      {
        "uid": "string",
        "title": "string",
        "mainDirector": {
          "uid": "string",
          "name": "string"
        },
        "titleBulgarian": "string",
        "titleCatalan": "string",
        "titleChineseTraditional": "string",
        "titleGerman": "string",
        "titleItalian": "string",
        "titleJapanese": "string",
        "titlePolish": "string",
        "titleRussian": "string",
        "titleSerbian": "string",
        "titleSpanish": "string",
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "usReleaseDate": "1970-01-01"
      }
    ],
    "producedMovies": [
      {
        "uid": "string",
        "title": "string",
        "mainDirector": {
          "uid": "string",
          "name": "string"
        },
        "titleBulgarian": "string",
        "titleCatalan": "string",
        "titleChineseTraditional": "string",
        "titleGerman": "string",
        "titleItalian": "string",
        "titleJapanese": "string",
        "titlePolish": "string",
        "titleRussian": "string",
        "titleSerbian": "string",
        "titleSpanish": "string",
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "usReleaseDate": "1970-01-01"
      }
    ],
    "movies": [
      {
        "uid": "string",
        "title": "string",
        "mainDirector": {
          "uid": "string",
          "name": "string"
        },
        "titleBulgarian": "string",
        "titleCatalan": "string",
        "titleChineseTraditional": "string",
        "titleGerman": "string",
        "titleItalian": "string",
        "titleJapanese": "string",
        "titlePolish": "string",
        "titleRussian": "string",
        "titleSerbian": "string",
        "titleSpanish": "string",
        "stardateFrom": 0,
        "stardateTo": 0,
        "yearFrom": 0,
        "yearTo": 0,
        "usReleaseDate": "1970-01-01"
      }
    ]
  }
}
```

Response object for single staff query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|staff|[StaffFull](#schemastafffull)|false|none|Full staff, returned when queried using UID|

<h2 id="tocS_TechnologyHeader">TechnologyHeader</h2>
<!-- backwards compatibility -->
<a id="schematechnologyheader"></a>
<a id="schema_TechnologyHeader"></a>
<a id="tocStechnologyheader"></a>
<a id="tocstechnologyheader"></a>

```json
{
  "uid": "string",
  "name": "string"
}
```

Header technology, embedded in other objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Technology unique ID|
|name|string|true|none|Technology name|

<h2 id="tocS_TechnologyBase">TechnologyBase</h2>
<!-- backwards compatibility -->
<a id="schematechnologybase"></a>
<a id="schema_TechnologyBase"></a>
<a id="tocStechnologybase"></a>
<a id="tocstechnologybase"></a>

```json
{
  "uid": "string",
  "name": "string",
  "borgTechnology": true,
  "borgComponent": true,
  "communicationsTechnology": true,
  "computerTechnology": true,
  "computerProgramming": true,
  "subroutine": true,
  "database": true,
  "energyTechnology": true,
  "fictionalTechnology": true,
  "holographicTechnology": true,
  "identificationTechnology": true,
  "lifeSupportTechnology": true,
  "sensorTechnology": true,
  "shieldTechnology": true,
  "tool": true,
  "culinaryTool": true,
  "engineeringTool": true,
  "householdTool": true,
  "medicalEquipment": true,
  "transporterTechnology": true
}
```

Base technology, returned in search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Technology unique ID|
|name|string|true|none|Technology name|
|borgTechnology|boolean|false|none|Whether it's a Borg technology|
|borgComponent|boolean|false|none|Whether it's a Borg component|
|communicationsTechnology|boolean|false|none|Whether it's a communications technology|
|computerTechnology|boolean|false|none|Whether it's a computer technology|
|computerProgramming|boolean|false|none|Whether it's a technology related to computer programming|
|subroutine|boolean|false|none|Whether it's a subroutine|
|database|boolean|false|none|Whether it's a database|
|energyTechnology|boolean|false|none|Whether it's a energy technology|
|fictionalTechnology|boolean|false|none|Whether it's a fictional technology|
|holographicTechnology|boolean|false|none|Whether it's a holographic technology|
|identificationTechnology|boolean|false|none|Whether it's a identification technology|
|lifeSupportTechnology|boolean|false|none|Whether it's a life support technology|
|sensorTechnology|boolean|false|none|Whether it's a sensor technology|
|shieldTechnology|boolean|false|none|Whether it's a shield technology|
|tool|boolean|false|none|Whether it's a tool|
|culinaryTool|boolean|false|none|Whether it's a culinary tool|
|engineeringTool|boolean|false|none|Whether it's a engineering tool|
|householdTool|boolean|false|none|Whether it's a household tool|
|medicalEquipment|boolean|false|none|Whether it's a medical equipment|
|transporterTechnology|boolean|false|none|Whether it's a transporter technology|

<h2 id="tocS_TechnologyFull">TechnologyFull</h2>
<!-- backwards compatibility -->
<a id="schematechnologyfull"></a>
<a id="schema_TechnologyFull"></a>
<a id="tocStechnologyfull"></a>
<a id="tocstechnologyfull"></a>

```json
{
  "uid": "string",
  "name": "string",
  "borgTechnology": true,
  "borgComponent": true,
  "communicationsTechnology": true,
  "computerTechnology": true,
  "computerProgramming": true,
  "subroutine": true,
  "database": true,
  "energyTechnology": true,
  "fictionalTechnology": true,
  "holographicTechnology": true,
  "identificationTechnology": true,
  "lifeSupportTechnology": true,
  "sensorTechnology": true,
  "shieldTechnology": true,
  "tool": true,
  "culinaryTool": true,
  "engineeringTool": true,
  "householdTool": true,
  "medicalEquipment": true,
  "transporterTechnology": true
}
```

Full technology, returned when queried using UID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Technology unique ID|
|name|string|true|none|Technology name|
|borgTechnology|boolean|false|none|Whether it's a Borg technology|
|borgComponent|boolean|false|none|Whether it's a Borg component|
|communicationsTechnology|boolean|false|none|Whether it's a communications technology|
|computerTechnology|boolean|false|none|Whether it's a computer technology|
|computerProgramming|boolean|false|none|Whether it's a technology related to computer programming|
|subroutine|boolean|false|none|Whether it's a subroutine|
|database|boolean|false|none|Whether it's a database|
|energyTechnology|boolean|false|none|Whether it's a energy technology|
|fictionalTechnology|boolean|false|none|Whether it's a fictional technology|
|holographicTechnology|boolean|false|none|Whether it's a holographic technology|
|identificationTechnology|boolean|false|none|Whether it's a identification technology|
|lifeSupportTechnology|boolean|false|none|Whether it's a life support technology|
|sensorTechnology|boolean|false|none|Whether it's a sensor technology|
|shieldTechnology|boolean|false|none|Whether it's a shield technology|
|tool|boolean|false|none|Whether it's a tool|
|culinaryTool|boolean|false|none|Whether it's a culinary tool|
|engineeringTool|boolean|false|none|Whether it's a engineering tool|
|householdTool|boolean|false|none|Whether it's a household tool|
|medicalEquipment|boolean|false|none|Whether it's a medical equipment|
|transporterTechnology|boolean|false|none|Whether it's a transporter technology|

<h2 id="tocS_TechnologyBaseResponse">TechnologyBaseResponse</h2>
<!-- backwards compatibility -->
<a id="schematechnologybaseresponse"></a>
<a id="schema_TechnologyBaseResponse"></a>
<a id="tocStechnologybaseresponse"></a>
<a id="tocstechnologybaseresponse"></a>

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "technology": [
    {
      "uid": "string",
      "name": "string",
      "borgTechnology": true,
      "borgComponent": true,
      "communicationsTechnology": true,
      "computerTechnology": true,
      "computerProgramming": true,
      "subroutine": true,
      "database": true,
      "energyTechnology": true,
      "fictionalTechnology": true,
      "holographicTechnology": true,
      "identificationTechnology": true,
      "lifeSupportTechnology": true,
      "sensorTechnology": true,
      "shieldTechnology": true,
      "tool": true,
      "culinaryTool": true,
      "engineeringTool": true,
      "householdTool": true,
      "medicalEquipment": true,
      "transporterTechnology": true
    }
  ]
}
```

Response object for technology search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|[ResponsePage](#schemaresponsepage)|false|none|Object describing response page|
|sort|[ResponseSort](#schemaresponsesort)|false|none|Response sort|
|technology|[[TechnologyBase](#schematechnologybase)]|false|none|List of technology matching given criteria|

<h2 id="tocS_TechnologyFullResponse">TechnologyFullResponse</h2>
<!-- backwards compatibility -->
<a id="schematechnologyfullresponse"></a>
<a id="schema_TechnologyFullResponse"></a>
<a id="tocStechnologyfullresponse"></a>
<a id="tocstechnologyfullresponse"></a>

```json
{
  "technology": {
    "uid": "string",
    "name": "string",
    "borgTechnology": true,
    "borgComponent": true,
    "communicationsTechnology": true,
    "computerTechnology": true,
    "computerProgramming": true,
    "subroutine": true,
    "database": true,
    "energyTechnology": true,
    "fictionalTechnology": true,
    "holographicTechnology": true,
    "identificationTechnology": true,
    "lifeSupportTechnology": true,
    "sensorTechnology": true,
    "shieldTechnology": true,
    "tool": true,
    "culinaryTool": true,
    "engineeringTool": true,
    "householdTool": true,
    "medicalEquipment": true,
    "transporterTechnology": true
  }
}
```

Response object for single technology query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|technology|[TechnologyFull](#schematechnologyfull)|false|none|Full technology, returned when queried using UID|

<h2 id="tocS_TitleHeader">TitleHeader</h2>
<!-- backwards compatibility -->
<a id="schematitleheader"></a>
<a id="schema_TitleHeader"></a>
<a id="tocStitleheader"></a>
<a id="tocstitleheader"></a>

```json
{
  "uid": "string",
  "name": "string"
}
```

Header title, embedded in other objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Title unique ID|
|name|string|true|none|Title name|

<h2 id="tocS_TitleBase">TitleBase</h2>
<!-- backwards compatibility -->
<a id="schematitlebase"></a>
<a id="schema_TitleBase"></a>
<a id="tocStitlebase"></a>
<a id="tocstitlebase"></a>

```json
{
  "uid": "string",
  "name": "string",
  "militaryRank": true,
  "fleetRank": true,
  "religiousTitle": true,
  "position": true,
  "mirror": true
}
```

Base title, returned in search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Title unique ID|
|name|string|true|none|Title name|
|militaryRank|boolean|false|none|Whether it's a military rank|
|fleetRank|boolean|false|none|Whether it's a fleet rank|
|religiousTitle|boolean|false|none|Whether it's a religious title|
|position|boolean|false|none|Whether it's a position|
|mirror|boolean|false|none|Whether this title is from mirror universe|

<h2 id="tocS_TitleFull">TitleFull</h2>
<!-- backwards compatibility -->
<a id="schematitlefull"></a>
<a id="schema_TitleFull"></a>
<a id="tocStitlefull"></a>
<a id="tocstitlefull"></a>

```json
{
  "uid": "string",
  "name": "string",
  "militaryRank": true,
  "fleetRank": true,
  "religiousTitle": true,
  "position": true,
  "mirror": true,
  "characters": [
    {
      "uid": "string",
      "name": "string",
      "gender": "F",
      "yearOfBirth": 0,
      "monthOfBirth": 0,
      "dayOfBirth": 0,
      "placeOfBirth": "string",
      "yearOfDeath": 0,
      "monthOfDeath": 0,
      "dayOfDeath": 0,
      "placeOfDeath": "string",
      "height": 0,
      "weight": 0,
      "deceased": true,
      "bloodType": "B_NEGATIVE",
      "maritalStatus": "SINGLE",
      "serialNumber": "string",
      "hologramActivationDate": "string",
      "hologramStatus": "string",
      "hologramDateStatus": "string",
      "hologram": true,
      "fictionalCharacter": true,
      "mirror": true,
      "alternateReality": true
    }
  ]
}
```

Full title, returned when queried using UID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Title unique ID|
|name|string|true|none|Title name|
|militaryRank|boolean|false|none|Whether it's a military rank|
|fleetRank|boolean|false|none|Whether it's a fleet rank|
|religiousTitle|boolean|false|none|Whether it's a religious title|
|position|boolean|false|none|Whether it's a position|
|mirror|boolean|false|none|Whether this title is from mirror universe|
|characters|[[CharacterBase](#schemacharacterbase)]|false|none|Characters that holds this title|

<h2 id="tocS_TitleBaseResponse">TitleBaseResponse</h2>
<!-- backwards compatibility -->
<a id="schematitlebaseresponse"></a>
<a id="schema_TitleBaseResponse"></a>
<a id="tocStitlebaseresponse"></a>
<a id="tocstitlebaseresponse"></a>

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "titles": [
    {
      "uid": "string",
      "name": "string",
      "militaryRank": true,
      "fleetRank": true,
      "religiousTitle": true,
      "position": true,
      "mirror": true
    }
  ]
}
```

Response object for titles search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|[ResponsePage](#schemaresponsepage)|false|none|Object describing response page|
|sort|[ResponseSort](#schemaresponsesort)|false|none|Response sort|
|titles|[[TitleBase](#schematitlebase)]|false|none|List of titles matching given criteria|

<h2 id="tocS_TitleFullResponse">TitleFullResponse</h2>
<!-- backwards compatibility -->
<a id="schematitlefullresponse"></a>
<a id="schema_TitleFullResponse"></a>
<a id="tocStitlefullresponse"></a>
<a id="tocstitlefullresponse"></a>

```json
{
  "title": {
    "uid": "string",
    "name": "string",
    "militaryRank": true,
    "fleetRank": true,
    "religiousTitle": true,
    "position": true,
    "mirror": true,
    "characters": [
      {
        "uid": "string",
        "name": "string",
        "gender": "F",
        "yearOfBirth": 0,
        "monthOfBirth": 0,
        "dayOfBirth": 0,
        "placeOfBirth": "string",
        "yearOfDeath": 0,
        "monthOfDeath": 0,
        "dayOfDeath": 0,
        "placeOfDeath": "string",
        "height": 0,
        "weight": 0,
        "deceased": true,
        "bloodType": "B_NEGATIVE",
        "maritalStatus": "SINGLE",
        "serialNumber": "string",
        "hologramActivationDate": "string",
        "hologramStatus": "string",
        "hologramDateStatus": "string",
        "hologram": true,
        "fictionalCharacter": true,
        "mirror": true,
        "alternateReality": true
      }
    ]
  }
}
```

Response object for single title query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|[TitleFull](#schematitlefull)|false|none|Full title, returned when queried using UID|

<h2 id="tocS_TradingCardHeader">TradingCardHeader</h2>
<!-- backwards compatibility -->
<a id="schematradingcardheader"></a>
<a id="schema_TradingCardHeader"></a>
<a id="tocStradingcardheader"></a>
<a id="tocstradingcardheader"></a>

```json
{
  "uid": "string",
  "name": "string"
}
```

Header trading card, embedded in other objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Trading card unique ID|
|name|string|true|none|Trading card name|

<h2 id="tocS_TradingCardBase">TradingCardBase</h2>
<!-- backwards compatibility -->
<a id="schematradingcardbase"></a>
<a id="schema_TradingCardBase"></a>
<a id="tocStradingcardbase"></a>
<a id="tocstradingcardbase"></a>

```json
{
  "uid": "string",
  "name": "string",
  "number": "string",
  "releaseYear": 0,
  "productionRun": 0,
  "tradingCardSet": {
    "uid": "string",
    "name": "string"
  },
  "tradingCardDeck": {
    "uid": "string",
    "name": "string"
  }
}
```

Base trading card, returned in search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Trading card unique ID|
|name|string|true|none|Trading card name|
|number|string|false|none|Trading card number|
|releaseYear|integer|false|none|Release year, if set was releases over multiple years|
|productionRun|integer|false|none|Production run, if different from trading card set production run|
|tradingCardSet|[TradingCardSetHeader](#schematradingcardsetheader)|false|none|Header trading card set, embedded in other objects|
|tradingCardDeck|[TradingCardDeckHeader](#schematradingcarddeckheader)|false|none|Header trading card deck, embedded in other objects|

<h2 id="tocS_TradingCardFull">TradingCardFull</h2>
<!-- backwards compatibility -->
<a id="schematradingcardfull"></a>
<a id="schema_TradingCardFull"></a>
<a id="tocStradingcardfull"></a>
<a id="tocstradingcardfull"></a>

```json
{
  "uid": "string",
  "name": "string",
  "tradingCardSet": {
    "uid": "string",
    "name": "string",
    "releaseYear": 0,
    "releaseMonth": 0,
    "releaseDay": 0,
    "cardsPerPack": 0,
    "packsPerBox": 0,
    "boxesPerCase": 0,
    "productionRun": 0,
    "productionRunUnit": "BOX",
    "cardWidth": 0,
    "cardHeight": 0
  },
  "tradingCardDeck": {
    "uid": "string",
    "name": "string",
    "frequency": "string",
    "tradingCardSet": {
      "uid": "string",
      "name": "string"
    }
  },
  "number": "string",
  "releaseYear": 0,
  "productionRun": 0
}
```

Full trading card, returned when queried using UID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Trading card unique ID|
|name|string|true|none|Trading card name|
|tradingCardSet|[TradingCardSetBase](#schematradingcardsetbase)|false|none|Base trading card set, returned in search results|
|tradingCardDeck|[TradingCardDeckBase](#schematradingcarddeckbase)|false|none|Base trading card deck, returned in search results|
|number|string|false|none|Trading card number|
|releaseYear|integer|false|none|Release year, if set was releases over multiple years|
|productionRun|integer|false|none|Production run, if different from trading card set production run|

<h2 id="tocS_TradingCardBaseResponse">TradingCardBaseResponse</h2>
<!-- backwards compatibility -->
<a id="schematradingcardbaseresponse"></a>
<a id="schema_TradingCardBaseResponse"></a>
<a id="tocStradingcardbaseresponse"></a>
<a id="tocstradingcardbaseresponse"></a>

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "tradingCards": [
    {
      "uid": "string",
      "name": "string",
      "number": "string",
      "releaseYear": 0,
      "productionRun": 0,
      "tradingCardSet": {
        "uid": "string",
        "name": "string"
      },
      "tradingCardDeck": {
        "uid": "string",
        "name": "string"
      }
    }
  ]
}
```

Response object for trading cards search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|[ResponsePage](#schemaresponsepage)|false|none|Object describing response page|
|sort|[ResponseSort](#schemaresponsesort)|false|none|Response sort|
|tradingCards|[[TradingCardBase](#schematradingcardbase)]|false|none|List of trading cards matching given criteria|

<h2 id="tocS_TradingCardFullResponse">TradingCardFullResponse</h2>
<!-- backwards compatibility -->
<a id="schematradingcardfullresponse"></a>
<a id="schema_TradingCardFullResponse"></a>
<a id="tocStradingcardfullresponse"></a>
<a id="tocstradingcardfullresponse"></a>

```json
{
  "tradingCard": {
    "uid": "string",
    "name": "string",
    "tradingCardSet": {
      "uid": "string",
      "name": "string",
      "releaseYear": 0,
      "releaseMonth": 0,
      "releaseDay": 0,
      "cardsPerPack": 0,
      "packsPerBox": 0,
      "boxesPerCase": 0,
      "productionRun": 0,
      "productionRunUnit": "BOX",
      "cardWidth": 0,
      "cardHeight": 0
    },
    "tradingCardDeck": {
      "uid": "string",
      "name": "string",
      "frequency": "string",
      "tradingCardSet": {
        "uid": "string",
        "name": "string"
      }
    },
    "number": "string",
    "releaseYear": 0,
    "productionRun": 0
  }
}
```

Response object for single trading card query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tradingCard|[TradingCardFull](#schematradingcardfull)|false|none|Full trading card, returned when queried using UID|

<h2 id="tocS_TradingCardDeckHeader">TradingCardDeckHeader</h2>
<!-- backwards compatibility -->
<a id="schematradingcarddeckheader"></a>
<a id="schema_TradingCardDeckHeader"></a>
<a id="tocStradingcarddeckheader"></a>
<a id="tocstradingcarddeckheader"></a>

```json
{
  "uid": "string",
  "name": "string"
}
```

Header trading card deck, embedded in other objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Trading card deck unique ID|
|name|string|true|none|Trading card deck name|

<h2 id="tocS_TradingCardDeckBase">TradingCardDeckBase</h2>
<!-- backwards compatibility -->
<a id="schematradingcarddeckbase"></a>
<a id="schema_TradingCardDeckBase"></a>
<a id="tocStradingcarddeckbase"></a>
<a id="tocstradingcarddeckbase"></a>

```json
{
  "uid": "string",
  "name": "string",
  "frequency": "string",
  "tradingCardSet": {
    "uid": "string",
    "name": "string"
  }
}
```

Base trading card deck, returned in search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Trading card deck unique ID|
|name|string|true|none|Trading card deck name|
|frequency|string|false|none|Frequency with which this deck occur in it's set|
|tradingCardSet|[TradingCardSetHeader](#schematradingcardsetheader)|false|none|Header trading card set, embedded in other objects|

<h2 id="tocS_TradingCardDeckFull">TradingCardDeckFull</h2>
<!-- backwards compatibility -->
<a id="schematradingcarddeckfull"></a>
<a id="schema_TradingCardDeckFull"></a>
<a id="tocStradingcarddeckfull"></a>
<a id="tocstradingcarddeckfull"></a>

```json
{
  "uid": "string",
  "name": "string",
  "frequency": "string",
  "tradingCardSet": {
    "uid": "string",
    "name": "string"
  },
  "tradingCards": [
    {
      "uid": "string",
      "name": "string",
      "number": "string",
      "releaseYear": 0,
      "productionRun": 0,
      "tradingCardSet": {
        "uid": "string",
        "name": "string"
      },
      "tradingCardDeck": {
        "uid": "string",
        "name": "string"
      }
    }
  ]
}
```

Full trading card deck, returned when queried using UID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Trading card deck unique ID|
|name|string|true|none|Trading card deck name|
|frequency|string|false|none|Frequency with which this deck occur in it's set|
|tradingCardSet|[TradingCardSetHeader](#schematradingcardsetheader)|false|none|Header trading card set, embedded in other objects|
|tradingCards|[[TradingCardBase](#schematradingcardbase)]|false|none|Trading cards in this deck|

<h2 id="tocS_TradingCardDeckBaseResponse">TradingCardDeckBaseResponse</h2>
<!-- backwards compatibility -->
<a id="schematradingcarddeckbaseresponse"></a>
<a id="schema_TradingCardDeckBaseResponse"></a>
<a id="tocStradingcarddeckbaseresponse"></a>
<a id="tocstradingcarddeckbaseresponse"></a>

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "tradingCardDecks": [
    {
      "uid": "string",
      "name": "string",
      "frequency": "string",
      "tradingCardSet": {
        "uid": "string",
        "name": "string"
      }
    }
  ]
}
```

Response object for trading card decks search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|[ResponsePage](#schemaresponsepage)|false|none|Object describing response page|
|sort|[ResponseSort](#schemaresponsesort)|false|none|Response sort|
|tradingCardDecks|[[TradingCardDeckBase](#schematradingcarddeckbase)]|false|none|List of trading card decks matching given criteria|

<h2 id="tocS_TradingCardDeckFullResponse">TradingCardDeckFullResponse</h2>
<!-- backwards compatibility -->
<a id="schematradingcarddeckfullresponse"></a>
<a id="schema_TradingCardDeckFullResponse"></a>
<a id="tocStradingcarddeckfullresponse"></a>
<a id="tocstradingcarddeckfullresponse"></a>

```json
{
  "tradingCardDeck": {
    "uid": "string",
    "name": "string",
    "frequency": "string",
    "tradingCardSet": {
      "uid": "string",
      "name": "string"
    },
    "tradingCards": [
      {
        "uid": "string",
        "name": "string",
        "number": "string",
        "releaseYear": 0,
        "productionRun": 0,
        "tradingCardSet": {
          "uid": "string",
          "name": "string"
        },
        "tradingCardDeck": {
          "uid": "string",
          "name": "string"
        }
      }
    ]
  }
}
```

Response object for single trading card deck query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tradingCardDeck|[TradingCardDeckFull](#schematradingcarddeckfull)|false|none|Full trading card deck, returned when queried using UID|

<h2 id="tocS_TradingCardSetHeader">TradingCardSetHeader</h2>
<!-- backwards compatibility -->
<a id="schematradingcardsetheader"></a>
<a id="schema_TradingCardSetHeader"></a>
<a id="tocStradingcardsetheader"></a>
<a id="tocstradingcardsetheader"></a>

```json
{
  "uid": "string",
  "name": "string"
}
```

Header trading card set, embedded in other objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Trading card set unique ID|
|name|string|true|none|Trading card set name|

<h2 id="tocS_TradingCardSetBase">TradingCardSetBase</h2>
<!-- backwards compatibility -->
<a id="schematradingcardsetbase"></a>
<a id="schema_TradingCardSetBase"></a>
<a id="tocStradingcardsetbase"></a>
<a id="tocstradingcardsetbase"></a>

```json
{
  "uid": "string",
  "name": "string",
  "releaseYear": 0,
  "releaseMonth": 0,
  "releaseDay": 0,
  "cardsPerPack": 0,
  "packsPerBox": 0,
  "boxesPerCase": 0,
  "productionRun": 0,
  "productionRunUnit": "BOX",
  "cardWidth": 0,
  "cardHeight": 0
}
```

Base trading card set, returned in search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Trading card set unique ID|
|name|string|true|none|Trading card set name|
|releaseYear|integer|false|none|Release year|
|releaseMonth|integer|false|none|Release month|
|releaseDay|integer|false|none|Release day|
|cardsPerPack|integer|false|none|Cards per deck|
|packsPerBox|integer|false|none|Packs per box|
|boxesPerCase|integer|false|none|Boxes per case|
|productionRun|integer|false|none|Production run|
|productionRunUnit|[ProductionRunUnit](#schemaproductionrununit)|false|none|Production run unit|
|cardWidth|number(double)|false|none|Card width, in inches|
|cardHeight|number(double)|false|none|Card height, in inches|

#### Enumerated Values

|Property|Value|
|---|---|
|productionRunUnit|BOX|
|productionRunUnit|SET|

<h2 id="tocS_TradingCardSetFull">TradingCardSetFull</h2>
<!-- backwards compatibility -->
<a id="schematradingcardsetfull"></a>
<a id="schema_TradingCardSetFull"></a>
<a id="tocStradingcardsetfull"></a>
<a id="tocstradingcardsetfull"></a>

```json
{
  "uid": "string",
  "name": "string",
  "releaseYear": 0,
  "releaseMonth": 0,
  "releaseDay": 0,
  "cardsPerPack": 0,
  "packsPerBox": 0,
  "boxesPerCase": 0,
  "productionRun": 0,
  "productionRunUnit": "BOX",
  "cardWidth": 0,
  "cardHeight": 0,
  "manufacturers": [
    {
      "uid": "string",
      "name": "string",
      "broadcaster": true,
      "collectibleCompany": true,
      "conglomerate": true,
      "digitalVisualEffectsCompany": true,
      "distributor": true,
      "gameCompany": true,
      "filmEquipmentCompany": true,
      "makeUpEffectsStudio": true,
      "mattePaintingCompany": true,
      "modelAndMiniatureEffectsCompany": true,
      "postProductionCompany": true,
      "productionCompany": true,
      "propCompany": true,
      "recordLabel": true,
      "specialEffectsCompany": true,
      "tvAndFilmProductionCompany": true,
      "videoGameCompany": true
    }
  ],
  "tradingCardDecks": [
    {
      "uid": "string",
      "name": "string",
      "frequency": "string",
      "tradingCardSet": {
        "uid": "string",
        "name": "string"
      }
    }
  ],
  "tradingCards": [
    {
      "uid": "string",
      "name": "string",
      "number": "string",
      "releaseYear": 0,
      "productionRun": 0,
      "tradingCardSet": {
        "uid": "string",
        "name": "string"
      },
      "tradingCardDeck": {
        "uid": "string",
        "name": "string"
      }
    }
  ],
  "countriesOfOrigin": [
    {
      "uid": "string",
      "name": "string",
      "iso31661Alpha2Code": "string"
    }
  ]
}
```

Full trading card set, returned when queried using UID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Trading card set unique ID|
|name|string|true|none|Trading card set name|
|releaseYear|integer|false|none|Release year|
|releaseMonth|integer|false|none|Release month|
|releaseDay|integer|false|none|Release day|
|cardsPerPack|integer|false|none|Cards per deck|
|packsPerBox|integer|false|none|Packs per box|
|boxesPerCase|integer|false|none|Boxes per case|
|productionRun|integer|false|none|Production run|
|productionRunUnit|[ProductionRunUnit](#schemaproductionrununit)|false|none|Production run unit|
|cardWidth|number(double)|false|none|Card width, in inches|
|cardHeight|number(double)|false|none|Card height, in inches|
|manufacturers|[[CompanyBase](#schemacompanybase)]|false|none|Manufacturers|
|tradingCardDecks|[[TradingCardDeckBase](#schematradingcarddeckbase)]|false|none|Trading card decks in this set|
|tradingCards|[[TradingCardBase](#schematradingcardbase)]|false|none|Trading cards in this set|
|countriesOfOrigin|[[Country](#schemacountry)]|false|none|Countries of origin|

#### Enumerated Values

|Property|Value|
|---|---|
|productionRunUnit|BOX|
|productionRunUnit|SET|

<h2 id="tocS_TradingCardSetBaseResponse">TradingCardSetBaseResponse</h2>
<!-- backwards compatibility -->
<a id="schematradingcardsetbaseresponse"></a>
<a id="schema_TradingCardSetBaseResponse"></a>
<a id="tocStradingcardsetbaseresponse"></a>
<a id="tocstradingcardsetbaseresponse"></a>

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "tradingCardSets": [
    {
      "uid": "string",
      "name": "string",
      "releaseYear": 0,
      "releaseMonth": 0,
      "releaseDay": 0,
      "cardsPerPack": 0,
      "packsPerBox": 0,
      "boxesPerCase": 0,
      "productionRun": 0,
      "productionRunUnit": "BOX",
      "cardWidth": 0,
      "cardHeight": 0
    }
  ]
}
```

Response object for trading card sets search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|[ResponsePage](#schemaresponsepage)|false|none|Object describing response page|
|sort|[ResponseSort](#schemaresponsesort)|false|none|Response sort|
|tradingCardSets|[[TradingCardSetBase](#schematradingcardsetbase)]|false|none|List of trading card sets matching given criteria|

<h2 id="tocS_TradingCardSetFullResponse">TradingCardSetFullResponse</h2>
<!-- backwards compatibility -->
<a id="schematradingcardsetfullresponse"></a>
<a id="schema_TradingCardSetFullResponse"></a>
<a id="tocStradingcardsetfullresponse"></a>
<a id="tocstradingcardsetfullresponse"></a>

```json
{
  "tradingCardSet": {
    "uid": "string",
    "name": "string",
    "releaseYear": 0,
    "releaseMonth": 0,
    "releaseDay": 0,
    "cardsPerPack": 0,
    "packsPerBox": 0,
    "boxesPerCase": 0,
    "productionRun": 0,
    "productionRunUnit": "BOX",
    "cardWidth": 0,
    "cardHeight": 0,
    "manufacturers": [
      {
        "uid": "string",
        "name": "string",
        "broadcaster": true,
        "collectibleCompany": true,
        "conglomerate": true,
        "digitalVisualEffectsCompany": true,
        "distributor": true,
        "gameCompany": true,
        "filmEquipmentCompany": true,
        "makeUpEffectsStudio": true,
        "mattePaintingCompany": true,
        "modelAndMiniatureEffectsCompany": true,
        "postProductionCompany": true,
        "productionCompany": true,
        "propCompany": true,
        "recordLabel": true,
        "specialEffectsCompany": true,
        "tvAndFilmProductionCompany": true,
        "videoGameCompany": true
      }
    ],
    "tradingCardDecks": [
      {
        "uid": "string",
        "name": "string",
        "frequency": "string",
        "tradingCardSet": {
          "uid": "string",
          "name": "string"
        }
      }
    ],
    "tradingCards": [
      {
        "uid": "string",
        "name": "string",
        "number": "string",
        "releaseYear": 0,
        "productionRun": 0,
        "tradingCardSet": {
          "uid": "string",
          "name": "string"
        },
        "tradingCardDeck": {
          "uid": "string",
          "name": "string"
        }
      }
    ],
    "countriesOfOrigin": [
      {
        "uid": "string",
        "name": "string",
        "iso31661Alpha2Code": "string"
      }
    ]
  }
}
```

Response object for single trading card set query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tradingCardSet|[TradingCardSetFull](#schematradingcardsetfull)|false|none|Full trading card set, returned when queried using UID|

<h2 id="tocS_VideoGameHeader">VideoGameHeader</h2>
<!-- backwards compatibility -->
<a id="schemavideogameheader"></a>
<a id="schema_VideoGameHeader"></a>
<a id="tocSvideogameheader"></a>
<a id="tocsvideogameheader"></a>

```json
{
  "uid": "string",
  "title": "string"
}
```

Header video game, embedded in other objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Video game unique ID|
|title|string|true|none|Video game title|

<h2 id="tocS_VideoGameBase">VideoGameBase</h2>
<!-- backwards compatibility -->
<a id="schemavideogamebase"></a>
<a id="schema_VideoGameBase"></a>
<a id="tocSvideogamebase"></a>
<a id="tocsvideogamebase"></a>

```json
{
  "uid": "string",
  "title": "string",
  "releaseDate": "1970-01-01",
  "stardateFrom": 0,
  "stardateTo": 0,
  "yearFrom": 0,
  "yearTo": 0,
  "systemRequirements": "string"
}
```

Base video game, returned in search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Video game unique ID|
|title|string|true|none|Video game title|
|releaseDate|string(date)|false|none|Release date|
|stardateFrom|number(float)|false|none|Starting stardate of video game story|
|stardateTo|number(float)|false|none|Ending stardate of video game story|
|yearFrom|integer|false|none|Starting year of video game story|
|yearTo|integer|false|none|Ending year of video game story|
|systemRequirements|string|false|none|System requirements|

<h2 id="tocS_VideoGameFull">VideoGameFull</h2>
<!-- backwards compatibility -->
<a id="schemavideogamefull"></a>
<a id="schema_VideoGameFull"></a>
<a id="tocSvideogamefull"></a>
<a id="tocsvideogamefull"></a>

```json
{
  "uid": "string",
  "title": "string",
  "releaseDate": "1970-01-01",
  "stardateFrom": 0,
  "stardateTo": 0,
  "yearFrom": 0,
  "yearTo": 0,
  "systemRequirements": "string",
  "publishers": [
    {
      "uid": "string",
      "name": "string",
      "broadcaster": true,
      "collectibleCompany": true,
      "conglomerate": true,
      "digitalVisualEffectsCompany": true,
      "distributor": true,
      "gameCompany": true,
      "filmEquipmentCompany": true,
      "makeUpEffectsStudio": true,
      "mattePaintingCompany": true,
      "modelAndMiniatureEffectsCompany": true,
      "postProductionCompany": true,
      "productionCompany": true,
      "propCompany": true,
      "recordLabel": true,
      "specialEffectsCompany": true,
      "tvAndFilmProductionCompany": true,
      "videoGameCompany": true
    }
  ],
  "developers": [
    {
      "uid": "string",
      "name": "string",
      "broadcaster": true,
      "collectibleCompany": true,
      "conglomerate": true,
      "digitalVisualEffectsCompany": true,
      "distributor": true,
      "gameCompany": true,
      "filmEquipmentCompany": true,
      "makeUpEffectsStudio": true,
      "mattePaintingCompany": true,
      "modelAndMiniatureEffectsCompany": true,
      "postProductionCompany": true,
      "productionCompany": true,
      "propCompany": true,
      "recordLabel": true,
      "specialEffectsCompany": true,
      "tvAndFilmProductionCompany": true,
      "videoGameCompany": true
    }
  ],
  "platforms": [
    {
      "uid": "string",
      "name": "string"
    }
  ],
  "genres": [
    {
      "uid": "string",
      "name": "string"
    }
  ],
  "ratings": [
    {
      "uid": "string",
      "contentRatingSystem": "BBFC",
      "rating": "string"
    }
  ],
  "references": [
    {
      "uid": "string",
      "referenceType": "ASIN",
      "referenceNumber": "string"
    }
  ]
}
```

Full video game, returned when queried using UID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Video game unique ID|
|title|string|true|none|Video game title|
|releaseDate|string(date)|false|none|Release date|
|stardateFrom|number(float)|false|none|Starting stardate of video game story|
|stardateTo|number(float)|false|none|Ending stardate of video game story|
|yearFrom|integer|false|none|Starting year of video game story|
|yearTo|integer|false|none|Ending year of video game story|
|systemRequirements|string|false|none|System requirements|
|publishers|[[CompanyBase](#schemacompanybase)]|false|none|Publishers|
|developers|[[CompanyBase](#schemacompanybase)]|false|none|Developers|
|platforms|[[Platform](#schemaplatform)]|false|none|Platforms|
|genres|[[Genre](#schemagenre)]|false|none|Genres|
|ratings|[[ContentRating](#schemacontentrating)]|false|none|Ratings|
|references|[[Reference](#schemareference)]|false|none|References|

<h2 id="tocS_VideoGameBaseResponse">VideoGameBaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemavideogamebaseresponse"></a>
<a id="schema_VideoGameBaseResponse"></a>
<a id="tocSvideogamebaseresponse"></a>
<a id="tocsvideogamebaseresponse"></a>

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "videoGames": [
    {
      "uid": "string",
      "title": "string",
      "releaseDate": "1970-01-01",
      "stardateFrom": 0,
      "stardateTo": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "systemRequirements": "string"
    }
  ]
}
```

Response object for video games search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|[ResponsePage](#schemaresponsepage)|false|none|Object describing response page|
|sort|[ResponseSort](#schemaresponsesort)|false|none|Response sort|
|videoGames|[[VideoGameBase](#schemavideogamebase)]|false|none|List of video games matching given criteria|

<h2 id="tocS_VideoGameFullResponse">VideoGameFullResponse</h2>
<!-- backwards compatibility -->
<a id="schemavideogamefullresponse"></a>
<a id="schema_VideoGameFullResponse"></a>
<a id="tocSvideogamefullresponse"></a>
<a id="tocsvideogamefullresponse"></a>

```json
{
  "videoGame": {
    "uid": "string",
    "title": "string",
    "releaseDate": "1970-01-01",
    "stardateFrom": 0,
    "stardateTo": 0,
    "yearFrom": 0,
    "yearTo": 0,
    "systemRequirements": "string",
    "publishers": [
      {
        "uid": "string",
        "name": "string",
        "broadcaster": true,
        "collectibleCompany": true,
        "conglomerate": true,
        "digitalVisualEffectsCompany": true,
        "distributor": true,
        "gameCompany": true,
        "filmEquipmentCompany": true,
        "makeUpEffectsStudio": true,
        "mattePaintingCompany": true,
        "modelAndMiniatureEffectsCompany": true,
        "postProductionCompany": true,
        "productionCompany": true,
        "propCompany": true,
        "recordLabel": true,
        "specialEffectsCompany": true,
        "tvAndFilmProductionCompany": true,
        "videoGameCompany": true
      }
    ],
    "developers": [
      {
        "uid": "string",
        "name": "string",
        "broadcaster": true,
        "collectibleCompany": true,
        "conglomerate": true,
        "digitalVisualEffectsCompany": true,
        "distributor": true,
        "gameCompany": true,
        "filmEquipmentCompany": true,
        "makeUpEffectsStudio": true,
        "mattePaintingCompany": true,
        "modelAndMiniatureEffectsCompany": true,
        "postProductionCompany": true,
        "productionCompany": true,
        "propCompany": true,
        "recordLabel": true,
        "specialEffectsCompany": true,
        "tvAndFilmProductionCompany": true,
        "videoGameCompany": true
      }
    ],
    "platforms": [
      {
        "uid": "string",
        "name": "string"
      }
    ],
    "genres": [
      {
        "uid": "string",
        "name": "string"
      }
    ],
    "ratings": [
      {
        "uid": "string",
        "contentRatingSystem": "BBFC",
        "rating": "string"
      }
    ],
    "references": [
      {
        "uid": "string",
        "referenceType": "ASIN",
        "referenceNumber": "string"
      }
    ]
  }
}
```

Response object for single video game query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|videoGame|[VideoGameFull](#schemavideogamefull)|false|none|Full video game, returned when queried using UID|

<h2 id="tocS_VideoReleaseHeader">VideoReleaseHeader</h2>
<!-- backwards compatibility -->
<a id="schemavideoreleaseheader"></a>
<a id="schema_VideoReleaseHeader"></a>
<a id="tocSvideoreleaseheader"></a>
<a id="tocsvideoreleaseheader"></a>

```json
{
  "uid": "string",
  "title": "string"
}
```

Header video release, embedded in other objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Video release unique ID|
|title|string|true|none|Video release title|

<h2 id="tocS_VideoReleaseBase">VideoReleaseBase</h2>
<!-- backwards compatibility -->
<a id="schemavideoreleasebase"></a>
<a id="schema_VideoReleaseBase"></a>
<a id="tocSvideoreleasebase"></a>
<a id="tocsvideoreleasebase"></a>

```json
{
  "uid": "string",
  "title": "string",
  "series": {
    "uid": "string",
    "title": "string"
  },
  "season": {
    "uid": "string",
    "title": "string"
  },
  "format": "SUPER_8",
  "numberOfEpisodes": 0,
  "numberOfFeatureLengthEpisodes": 0,
  "numberOfDataCarriers": 0,
  "runTime": 0,
  "yearFrom": 0,
  "yearTo": 0,
  "regionFreeReleaseDate": "1970-01-01",
  "region1AReleaseDate": "1970-01-01",
  "region1SlimlineReleaseDate": "1970-01-01",
  "region2BReleaseDate": "1970-01-01",
  "region2SlimlineReleaseDate": "1970-01-01",
  "region4AReleaseDate": "1970-01-01",
  "region4SlimlineReleaseDate": "1970-01-01",
  "amazonDigitalRelease": true,
  "dailymotionDigitalRelease": true,
  "googlePlayDigitalRelease": true,
  "iTunesDigitalRelease": true,
  "ultraVioletDigitalRelease": true,
  "vimeoDigitalRelease": true,
  "vuduDigitalRelease": true,
  "xboxSmartGlassDigitalRelease": true,
  "youTubeDigitalRelease": true,
  "netflixDigitalRelease": true
}
```

Base video release, returned in search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Video release unique ID|
|title|string|true|none|Video release title|
|series|[SeriesHeader](#schemaseriesheader)|false|none|Header series, embedded in other objects|
|season|[SeasonHeader](#schemaseasonheader)|false|none|Header season, embedded in other objects|
|format|[VideoReleaseFormat](#schemavideoreleaseformat)|false|none|Video release format|
|numberOfEpisodes|integer|false|none|Number of episodes|
|numberOfFeatureLengthEpisodes|integer|false|none|Number of feature-length episodes|
|numberOfDataCarriers|integer|false|none|Number of data carriers (like DVD, VCD, VHS etc.)|
|runTime|integer|false|none|Run time, in minutes|
|yearFrom|integer|false|none|Starting year of video release story|
|yearTo|integer|false|none|Ending year of video release story|
|regionFreeReleaseDate|string(date)|false|none|Region free release date|
|region1AReleaseDate|string(date)|false|none|Region 1/A release date|
|region1SlimlineReleaseDate|string(date)|false|none|Region 1 slimline release date|
|region2BReleaseDate|string(date)|false|none|Region 2/B release date|
|region2SlimlineReleaseDate|string(date)|false|none|Region 2 slimline release date|
|region4AReleaseDate|string(date)|false|none|Region 4 release date|
|region4SlimlineReleaseDate|string(date)|false|none|Region 4 slimline release date|
|amazonDigitalRelease|boolean|false|none|Whether this video has been release on Amazon.com|
|dailymotionDigitalRelease|boolean|false|none|Whether this video has been release on Dailymotion|
|googlePlayDigitalRelease|boolean|false|none|Whether this video has been release on Google Play|
|iTunesDigitalRelease|boolean|false|none|Whether this video has been release on iTunes|
|ultraVioletDigitalRelease|boolean|false|none|Whether this video has been release on UltraViolet|
|vimeoDigitalRelease|boolean|false|none|Whether this video has been release on Vimeo|
|vuduDigitalRelease|boolean|false|none|Whether this video has been release on VUDU|
|xboxSmartGlassDigitalRelease|boolean|false|none|Whether this video has been release on Xbox SmartGlass|
|youTubeDigitalRelease|boolean|false|none|Whether this video has been release on YouTube|
|netflixDigitalRelease|boolean|false|none|Whether this video has been release on Netflix|

#### Enumerated Values

|Property|Value|
|---|---|
|format|SUPER_8|
|format|BETAMAX|
|format|VHS|
|format|CED|
|format|LD|
|format|VHD|
|format|VCD|
|format|VIDEO_8|
|format|DVD|
|format|UMD|
|format|HD_DVD|
|format|BLU_RAY|
|format|BLU_RAY_4K_UHD|
|format|DIGITAL_FORMAT|

<h2 id="tocS_VideoReleaseFormat">VideoReleaseFormat</h2>
<!-- backwards compatibility -->
<a id="schemavideoreleaseformat"></a>
<a id="schema_VideoReleaseFormat"></a>
<a id="tocSvideoreleaseformat"></a>
<a id="tocsvideoreleaseformat"></a>

```json
"SUPER_8"
```

Video release format

<h2 id="tocS_VideoReleaseFull">VideoReleaseFull</h2>
<!-- backwards compatibility -->
<a id="schemavideoreleasefull"></a>
<a id="schema_VideoReleaseFull"></a>
<a id="tocSvideoreleasefull"></a>
<a id="tocsvideoreleasefull"></a>

```json
{
  "uid": "string",
  "title": "string",
  "series": {
    "uid": "string",
    "title": "string",
    "abbreviation": "string",
    "productionStartYear": 0,
    "productionEndYear": 0,
    "originalRunStartDate": "1970-01-01",
    "originalRunEndDate": "1970-01-01",
    "seasonsCount": 0,
    "episodesCount": 0,
    "featureLengthEpisodesCount": 0,
    "productionCompany": {
      "uid": "string",
      "name": "string"
    },
    "originalBroadcaster": {
      "uid": "string",
      "name": "string"
    }
  },
  "season": {
    "uid": "string",
    "title": "string",
    "series": {
      "uid": "string",
      "title": "string"
    },
    "seasonNumber": 0,
    "numberOfEpisodes": 0
  },
  "format": "SUPER_8",
  "numberOfEpisodes": 0,
  "numberOfFeatureLengthEpisodes": 0,
  "numberOfDataCarriers": 0,
  "runTime": 0,
  "yearFrom": 0,
  "yearTo": 0,
  "regionFreeReleaseDate": "1970-01-01",
  "region1AReleaseDate": "1970-01-01",
  "region1SlimlineReleaseDate": "1970-01-01",
  "region2BReleaseDate": "1970-01-01",
  "region2SlimlineReleaseDate": "1970-01-01",
  "region4AReleaseDate": "1970-01-01",
  "region4SlimlineReleaseDate": "1970-01-01",
  "amazonDigitalRelease": true,
  "dailymotionDigitalRelease": true,
  "googlePlayDigitalRelease": true,
  "iTunesDigitalRelease": true,
  "ultraVioletDigitalRelease": true,
  "vimeoDigitalRelease": true,
  "vuduDigitalRelease": true,
  "xboxSmartGlassDigitalRelease": true,
  "youTubeDigitalRelease": true,
  "netflixDigitalRelease": true,
  "references": [
    {
      "uid": "string",
      "referenceType": "ASIN",
      "referenceNumber": "string"
    }
  ],
  "ratings": [
    {
      "uid": "string",
      "contentRatingSystem": "BBFC",
      "rating": "string"
    }
  ],
  "languages": [
    {
      "uid": "string",
      "name": "string",
      "iso6391Code": "string"
    }
  ],
  "languagesSubtitles": [
    {
      "uid": "string",
      "name": "string",
      "iso6391Code": "string"
    }
  ],
  "languagesDubbed": [
    {
      "uid": "string",
      "name": "string",
      "iso6391Code": "string"
    }
  ]
}
```

Full video release, returned when queried using UID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Video release unique ID|
|title|string|true|none|Video release title|
|series|[SeriesBase](#schemaseriesbase)|false|none|Base series, returned in search results|
|season|[SeasonBase](#schemaseasonbase)|false|none|Base season, returned in search results|
|format|[VideoReleaseFormat](#schemavideoreleaseformat)|false|none|Video release format|
|numberOfEpisodes|integer|false|none|Number of episodes|
|numberOfFeatureLengthEpisodes|integer|false|none|Number of feature-length episodes|
|numberOfDataCarriers|integer|false|none|Number of data carriers (like DVD, VCD, VHS etc.)|
|runTime|integer|false|none|Run time, in minutes|
|yearFrom|integer|false|none|Starting year of video release story|
|yearTo|integer|false|none|Ending year of video release story|
|regionFreeReleaseDate|string(date)|false|none|Region free release date|
|region1AReleaseDate|string(date)|false|none|Region 1/A release date|
|region1SlimlineReleaseDate|string(date)|false|none|Region 1 slimline release date|
|region2BReleaseDate|string(date)|false|none|Region 2/B release date|
|region2SlimlineReleaseDate|string(date)|false|none|Region 2 slimline release date|
|region4AReleaseDate|string(date)|false|none|Region 4 release date|
|region4SlimlineReleaseDate|string(date)|false|none|Region 4 slimline release date|
|amazonDigitalRelease|boolean|false|none|Whether this video has been release on Amazon.com|
|dailymotionDigitalRelease|boolean|false|none|Whether this video has been release on Dailymotion|
|googlePlayDigitalRelease|boolean|false|none|Whether this video has been release on Google Play|
|iTunesDigitalRelease|boolean|false|none|Whether this video has been release on iTunes|
|ultraVioletDigitalRelease|boolean|false|none|Whether this video has been release on UltraViolet|
|vimeoDigitalRelease|boolean|false|none|Whether this video has been release on Vimeo|
|vuduDigitalRelease|boolean|false|none|Whether this video has been release on VUDU|
|xboxSmartGlassDigitalRelease|boolean|false|none|Whether this video has been release on Xbox SmartGlass|
|youTubeDigitalRelease|boolean|false|none|Whether this video has been release on YouTube|
|netflixDigitalRelease|boolean|false|none|Whether this video has been release on Netflix|
|references|[[Reference](#schemareference)]|false|none|References|
|ratings|[[ContentRating](#schemacontentrating)]|false|none|Ratings|
|languages|[[ContentLanguage](#schemacontentlanguage)]|false|none|Languages of audio track|
|languagesSubtitles|[[ContentLanguage](#schemacontentlanguage)]|false|none|Languages of subtitles|
|languagesDubbed|[[ContentLanguage](#schemacontentlanguage)]|false|none|Languages that are available with dubbing|

#### Enumerated Values

|Property|Value|
|---|---|
|format|SUPER_8|
|format|BETAMAX|
|format|VHS|
|format|CED|
|format|LD|
|format|VHD|
|format|VCD|
|format|VIDEO_8|
|format|DVD|
|format|UMD|
|format|HD_DVD|
|format|BLU_RAY|
|format|BLU_RAY_4K_UHD|
|format|DIGITAL_FORMAT|

<h2 id="tocS_VideoReleaseBaseResponse">VideoReleaseBaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemavideoreleasebaseresponse"></a>
<a id="schema_VideoReleaseBaseResponse"></a>
<a id="tocSvideoreleasebaseresponse"></a>
<a id="tocsvideoreleasebaseresponse"></a>

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "videoReleases": [
    {
      "uid": "string",
      "title": "string",
      "series": {
        "uid": "string",
        "title": "string"
      },
      "season": {
        "uid": "string",
        "title": "string"
      },
      "format": "SUPER_8",
      "numberOfEpisodes": 0,
      "numberOfFeatureLengthEpisodes": 0,
      "numberOfDataCarriers": 0,
      "runTime": 0,
      "yearFrom": 0,
      "yearTo": 0,
      "regionFreeReleaseDate": "1970-01-01",
      "region1AReleaseDate": "1970-01-01",
      "region1SlimlineReleaseDate": "1970-01-01",
      "region2BReleaseDate": "1970-01-01",
      "region2SlimlineReleaseDate": "1970-01-01",
      "region4AReleaseDate": "1970-01-01",
      "region4SlimlineReleaseDate": "1970-01-01",
      "amazonDigitalRelease": true,
      "dailymotionDigitalRelease": true,
      "googlePlayDigitalRelease": true,
      "iTunesDigitalRelease": true,
      "ultraVioletDigitalRelease": true,
      "vimeoDigitalRelease": true,
      "vuduDigitalRelease": true,
      "xboxSmartGlassDigitalRelease": true,
      "youTubeDigitalRelease": true,
      "netflixDigitalRelease": true
    }
  ]
}
```

Response object for video releases search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|[ResponsePage](#schemaresponsepage)|false|none|Object describing response page|
|sort|[ResponseSort](#schemaresponsesort)|false|none|Response sort|
|videoReleases|[[VideoReleaseBase](#schemavideoreleasebase)]|false|none|List of video releases matching given criteria|

<h2 id="tocS_VideoReleaseFullResponse">VideoReleaseFullResponse</h2>
<!-- backwards compatibility -->
<a id="schemavideoreleasefullresponse"></a>
<a id="schema_VideoReleaseFullResponse"></a>
<a id="tocSvideoreleasefullresponse"></a>
<a id="tocsvideoreleasefullresponse"></a>

```json
{
  "videoRelease": {
    "uid": "string",
    "title": "string",
    "series": {
      "uid": "string",
      "title": "string",
      "abbreviation": "string",
      "productionStartYear": 0,
      "productionEndYear": 0,
      "originalRunStartDate": "1970-01-01",
      "originalRunEndDate": "1970-01-01",
      "seasonsCount": 0,
      "episodesCount": 0,
      "featureLengthEpisodesCount": 0,
      "productionCompany": {
        "uid": "string",
        "name": "string"
      },
      "originalBroadcaster": {
        "uid": "string",
        "name": "string"
      }
    },
    "season": {
      "uid": "string",
      "title": "string",
      "series": {
        "uid": "string",
        "title": "string"
      },
      "seasonNumber": 0,
      "numberOfEpisodes": 0
    },
    "format": "SUPER_8",
    "numberOfEpisodes": 0,
    "numberOfFeatureLengthEpisodes": 0,
    "numberOfDataCarriers": 0,
    "runTime": 0,
    "yearFrom": 0,
    "yearTo": 0,
    "regionFreeReleaseDate": "1970-01-01",
    "region1AReleaseDate": "1970-01-01",
    "region1SlimlineReleaseDate": "1970-01-01",
    "region2BReleaseDate": "1970-01-01",
    "region2SlimlineReleaseDate": "1970-01-01",
    "region4AReleaseDate": "1970-01-01",
    "region4SlimlineReleaseDate": "1970-01-01",
    "amazonDigitalRelease": true,
    "dailymotionDigitalRelease": true,
    "googlePlayDigitalRelease": true,
    "iTunesDigitalRelease": true,
    "ultraVioletDigitalRelease": true,
    "vimeoDigitalRelease": true,
    "vuduDigitalRelease": true,
    "xboxSmartGlassDigitalRelease": true,
    "youTubeDigitalRelease": true,
    "netflixDigitalRelease": true,
    "references": [
      {
        "uid": "string",
        "referenceType": "ASIN",
        "referenceNumber": "string"
      }
    ],
    "ratings": [
      {
        "uid": "string",
        "contentRatingSystem": "BBFC",
        "rating": "string"
      }
    ],
    "languages": [
      {
        "uid": "string",
        "name": "string",
        "iso6391Code": "string"
      }
    ],
    "languagesSubtitles": [
      {
        "uid": "string",
        "name": "string",
        "iso6391Code": "string"
      }
    ],
    "languagesDubbed": [
      {
        "uid": "string",
        "name": "string",
        "iso6391Code": "string"
      }
    ]
  }
}
```

Response object for single video release query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|videoRelease|[VideoReleaseFull](#schemavideoreleasefull)|false|none|Full video release, returned when queried using UID|

<h2 id="tocS_WeaponHeader">WeaponHeader</h2>
<!-- backwards compatibility -->
<a id="schemaweaponheader"></a>
<a id="schema_WeaponHeader"></a>
<a id="tocSweaponheader"></a>
<a id="tocsweaponheader"></a>

```json
{
  "uid": "string",
  "name": "string"
}
```

Header weapon, embedded in other objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Weapon unique ID|
|name|string|true|none|Weapon name|

<h2 id="tocS_WeaponBase">WeaponBase</h2>
<!-- backwards compatibility -->
<a id="schemaweaponbase"></a>
<a id="schema_WeaponBase"></a>
<a id="tocSweaponbase"></a>
<a id="tocsweaponbase"></a>

```json
{
  "uid": "string",
  "name": "string",
  "handHeldWeapon": true,
  "laserTechnology": true,
  "plasmaTechnology": true,
  "photonicTechnology": true,
  "phaserTechnology": true,
  "mirror": true,
  "alternateReality": true
}
```

Base weapon, returned in search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Weapon unique ID|
|name|string|true|none|Weapon name|
|handHeldWeapon|boolean|false|none|Whether it's hand-help weapon|
|laserTechnology|boolean|false|none|Whether it's a laser technology|
|plasmaTechnology|boolean|false|none|Whether it's a plasma technology|
|photonicTechnology|boolean|false|none|Whether it's a photonic technology|
|phaserTechnology|boolean|false|none|Whether it's a phaser technology|
|mirror|boolean|false|none|Whether this weapon is from mirror universe|
|alternateReality|boolean|false|none|Whether this weapon is from alternate reality|

<h2 id="tocS_WeaponFull">WeaponFull</h2>
<!-- backwards compatibility -->
<a id="schemaweaponfull"></a>
<a id="schema_WeaponFull"></a>
<a id="tocSweaponfull"></a>
<a id="tocsweaponfull"></a>

```json
{
  "uid": "string",
  "name": "string",
  "handHeldWeapon": true,
  "laserTechnology": true,
  "plasmaTechnology": true,
  "photonicTechnology": true,
  "phaserTechnology": true,
  "mirror": true,
  "alternateReality": true
}
```

Full weapon, returned when queried using UID

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|Weapon unique ID|
|name|string|true|none|Weapon name|
|handHeldWeapon|boolean|false|none|Whether it's a hand-help weapon|
|laserTechnology|boolean|false|none|Whether it's a laser technology|
|plasmaTechnology|boolean|false|none|Whether it's a plasma technology|
|photonicTechnology|boolean|false|none|Whether it's a photonic technology|
|phaserTechnology|boolean|false|none|Whether it's a phaser technology|
|mirror|boolean|false|none|Whether this weapon is from mirror universe|
|alternateReality|boolean|false|none|Whether this weapon is from alternate reality|

<h2 id="tocS_WeaponBaseResponse">WeaponBaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemaweaponbaseresponse"></a>
<a id="schema_WeaponBaseResponse"></a>
<a id="tocSweaponbaseresponse"></a>
<a id="tocsweaponbaseresponse"></a>

```json
{
  "page": {
    "pageNumber": 0,
    "pageSize": 0,
    "numberOfElements": 0,
    "totalElements": 0,
    "totalPages": 0,
    "firstPage": true,
    "lastPage": true
  },
  "sort": {
    "clauses": [
      {
        "name": "string",
        "direction": "ASC",
        "clauseOrder": 0
      }
    ]
  },
  "weapons": [
    {
      "uid": "string",
      "name": "string",
      "handHeldWeapon": true,
      "laserTechnology": true,
      "plasmaTechnology": true,
      "photonicTechnology": true,
      "phaserTechnology": true,
      "mirror": true,
      "alternateReality": true
    }
  ]
}
```

Response object for weapons search

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|[ResponsePage](#schemaresponsepage)|false|none|Object describing response page|
|sort|[ResponseSort](#schemaresponsesort)|false|none|Response sort|
|weapons|[[WeaponBase](#schemaweaponbase)]|false|none|List of weapons matching given criteria|

<h2 id="tocS_WeaponFullResponse">WeaponFullResponse</h2>
<!-- backwards compatibility -->
<a id="schemaweaponfullresponse"></a>
<a id="schema_WeaponFullResponse"></a>
<a id="tocSweaponfullresponse"></a>
<a id="tocsweaponfullresponse"></a>

```json
{
  "weapon": {
    "uid": "string",
    "name": "string",
    "handHeldWeapon": true,
    "laserTechnology": true,
    "plasmaTechnology": true,
    "photonicTechnology": true,
    "phaserTechnology": true,
    "mirror": true,
    "alternateReality": true
  }
}
```

Response object for single weapon query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|weapon|[WeaponFull](#schemaweaponfull)|false|none|Full weapon, returned when queried using UID|
