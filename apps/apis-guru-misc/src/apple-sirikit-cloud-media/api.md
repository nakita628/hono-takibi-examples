<h1 id="sirikit-cloud-media">SiriKit Cloud Media v1.0.2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://cloudextension-testservice.local/api">https://cloudextension-testservice.local/api</a>

Web: <a href="https://developer.apple.com/siri/">Siri for Developers</a> 

<h1 id="sirikit-cloud-media-config">config</h1>

## Configuration Resource

<a id="opIdextensionConfiguration"></a>

> Code samples

```bash
curl https://example.com/configuration \
  -H 'x-applecloudextension-session-id: string' \
  -H 'Request-Timeout: 1' \
  -H 'User-Agent: string' \
  -H 'Accept-Language: string' \
  -H 'Cache-Control: string'
```

`GET /configuration`

<h3 id="configuration-resource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-applecloudextension-session-id|header|string|true|none|
|x-applecloudextension-retry-count|header|number(uint32)|false|none|
|Request-Timeout|header|number(uint32)|true|none|
|User-Agent|header|string|true|none|
|Accept-Language|header|string|true|none|
|If-None-Match|header|[ExtensionConfigTag](#schemaextensionconfigtag)|false|none|
|Cache-Control|header|string|true|none|

<h3 id="configuration-resource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[ExtensionConfig](#schemaextensionconfig)|
|304|Not Modified||None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||none|
|200|ETag|string||none|
|200|x-applecloudextension-session-id|string||none|
|304|Cache-Control|string||none|
|304|x-applecloudextension-session-id|string||none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sirikit-cloud-media-intent">intent</h1>

## addMedia

<a id="opIdaddMediaIntentHandling"></a>

> Code samples

```bash
curl https://example.com/intent/addMedia \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'x-applecloudextension-session-id: string' \
  -H 'Request-Timeout: 1' \
  -H 'User-Agent: string' \
  -H 'Accept-Language: string' \
  -d '[
    {
      "method": "AddMediaIntentHandling.resolveMediaItems",
      "params": {
        "intent": {
          "class": "AddMediaIntent",
          "identifier": "string",
          "mediaDestination": {
            "mediaDestinationType": "library"
          },
          "mediaItems": [
            {
              "identifier": "string",
              "type": "unknown"
            }
          ],
          "mediaSearch": {
            "albumName": "string",
            "artistName": "string",
            "genreNames": [
              "string"
            ],
            "mediaIdentifier": "string",
            "mediaName": "string",
            "mediaType": "unknown",
            "moodNames": [
              "string"
            ],
            "reference": "unknown",
            "releaseDate": {
              "endDateComponents": "1980",
              "startDateComponents": "1980"
            },
            "sortOrder": "unknown"
          }
        }
      },
      "session": {
        "constraints": {
          "allowExplicitContent": true,
          "maximumQueueSegmentItemCount": 1000,
          "updateUserTasteProfile": true
        },
        "deadline": "1970-01-01T00:00:00Z",
        "identifier": "string",
        "playerContext": {
          "activityIdentifier": "string",
          "contentIdentifier": "j15f8A3cuU0GG",
          "offsetInMillis": 10942,
          "playbackSpeed": 1,
          "queueIdentifier": "u104823q8201"
        },
        "requested": "1970-01-01T00:00:00Z",
        "version": "string"
      }
    }
  ]'
```

`POST /intent/addMedia`

> Body parameter

```json
[
  {
    "method": "AddMediaIntentHandling.resolveMediaItems",
    "params": {
      "intent": {
        "class": "AddMediaIntent",
        "identifier": "string",
        "mediaDestination": {
          "mediaDestinationType": "library"
        },
        "mediaItems": [
          {
            "identifier": "string",
            "type": "unknown"
          }
        ],
        "mediaSearch": {
          "albumName": "string",
          "artistName": "string",
          "genreNames": [
            "string"
          ],
          "mediaIdentifier": "string",
          "mediaName": "string",
          "mediaType": "unknown",
          "moodNames": [
            "string"
          ],
          "reference": "unknown",
          "releaseDate": {
            "endDateComponents": "1980",
            "startDateComponents": "1980"
          },
          "sortOrder": "unknown"
        }
      }
    },
    "session": {
      "constraints": {
        "allowExplicitContent": true,
        "maximumQueueSegmentItemCount": 1000,
        "updateUserTasteProfile": true
      },
      "deadline": "1970-01-01T00:00:00Z",
      "identifier": "string",
      "playerContext": {
        "activityIdentifier": "string",
        "contentIdentifier": "j15f8A3cuU0GG",
        "offsetInMillis": 10942,
        "playbackSpeed": 1,
        "queueIdentifier": "u104823q8201"
      },
      "requested": "1970-01-01T00:00:00Z",
      "version": "string"
    }
  }
]
```

<h3 id="addmedia-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-applecloudextension-session-id|header|string|true|none|
|x-applecloudextension-retry-count|header|number(uint32)|false|none|
|Request-Timeout|header|number(uint32)|true|none|
|User-Agent|header|string|true|none|
|Accept-Language|header|string|true|none|
|body|body|[[AddMediaIntentHandlingInvocation](#schemaaddmediaintenthandlinginvocation)]|false|none|

> Example responses

> 200 Response

```json
[
  {
    "debug": "http://example.com",
    "method": "AddMediaIntentHandling.resolveMediaItems",
    "metrics": {
      "completed": "1970-01-01T00:00:00Z",
      "duration": 0,
      "received": "1970-01-01T00:00:00Z"
    },
    "result": {
      "resolutionResult": [
        {
          "class": "AddMediaMediaItemResolutionResult",
          "needsValue": {},
          "notRequired": {},
          "unsupported": {
            "reason": "loginRequired"
          },
          "confirmationRequired": {
            "mediaItemToConfirm": {
              "artist": "string",
              "identifier": "string",
              "title": "string",
              "type": "unknown"
            }
          },
          "disambiguation": {
            "mediaItemsToDisambiguate": [
              {
                "artist": "string",
                "identifier": "string",
                "title": "string",
                "type": "unknown"
              },
              {
                "artist": "string",
                "identifier": "string",
                "title": "string",
                "type": "unknown"
              }
            ]
          },
          "success": {
            "resolvedMediaItem": {
              "artist": "string",
              "identifier": "string",
              "title": "string",
              "type": "unknown"
            }
          }
        }
      ]
    }
  }
]
```

<h3 id="addmedia-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="addmedia-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AddMediaIntentHandlingInvocationResponse](#schemaaddmediaintenthandlinginvocationresponse)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-applecloudextension-session-id|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## playMedia

<a id="opIdplayMediaIntentHandling"></a>

> Code samples

```bash
curl https://example.com/intent/playMedia \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'x-applecloudextension-session-id: string' \
  -H 'Request-Timeout: 1' \
  -H 'User-Agent: string' \
  -H 'Accept-Language: string' \
  -d '[
    {
      "method": "PlayMediaIntentHandling.resolveMediaItems",
      "params": {
        "intent": {
          "class": "PlayMediaIntent",
          "identifier": "string",
          "mediaItems": [
            {
              "identifier": "string",
              "type": "unknown"
            }
          ],
          "mediaSearch": {
            "albumName": "string",
            "artistName": "string",
            "genreNames": [
              "string"
            ],
            "mediaIdentifier": "string",
            "mediaName": "string",
            "mediaType": "unknown",
            "moodNames": [
              "string"
            ],
            "reference": "unknown",
            "releaseDate": {
              "endDateComponents": "1980",
              "startDateComponents": "1980"
            },
            "sortOrder": "unknown"
          },
          "playShuffled": true,
          "playbackQueueLocation": "unknown",
          "playbackRepeatMode": "unknown",
          "playbackSpeed": 0,
          "resumePlayback": true
        }
      },
      "session": {
        "constraints": {
          "allowExplicitContent": true,
          "maximumQueueSegmentItemCount": 1000,
          "updateUserTasteProfile": true
        },
        "deadline": "1970-01-01T00:00:00Z",
        "identifier": "string",
        "playerContext": {
          "activityIdentifier": "string",
          "contentIdentifier": "j15f8A3cuU0GG",
          "offsetInMillis": 10942,
          "playbackSpeed": 1,
          "queueIdentifier": "u104823q8201"
        },
        "requested": "1970-01-01T00:00:00Z",
        "version": "string"
      }
    }
  ]'
```

`POST /intent/playMedia`

> Body parameter

```json
[
  {
    "method": "PlayMediaIntentHandling.resolveMediaItems",
    "params": {
      "intent": {
        "class": "PlayMediaIntent",
        "identifier": "string",
        "mediaItems": [
          {
            "identifier": "string",
            "type": "unknown"
          }
        ],
        "mediaSearch": {
          "albumName": "string",
          "artistName": "string",
          "genreNames": [
            "string"
          ],
          "mediaIdentifier": "string",
          "mediaName": "string",
          "mediaType": "unknown",
          "moodNames": [
            "string"
          ],
          "reference": "unknown",
          "releaseDate": {
            "endDateComponents": "1980",
            "startDateComponents": "1980"
          },
          "sortOrder": "unknown"
        },
        "playShuffled": true,
        "playbackQueueLocation": "unknown",
        "playbackRepeatMode": "unknown",
        "playbackSpeed": 0,
        "resumePlayback": true
      }
    },
    "session": {
      "constraints": {
        "allowExplicitContent": true,
        "maximumQueueSegmentItemCount": 1000,
        "updateUserTasteProfile": true
      },
      "deadline": "1970-01-01T00:00:00Z",
      "identifier": "string",
      "playerContext": {
        "activityIdentifier": "string",
        "contentIdentifier": "j15f8A3cuU0GG",
        "offsetInMillis": 10942,
        "playbackSpeed": 1,
        "queueIdentifier": "u104823q8201"
      },
      "requested": "1970-01-01T00:00:00Z",
      "version": "string"
    }
  }
]
```

<h3 id="playmedia-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-applecloudextension-session-id|header|string|true|none|
|x-applecloudextension-retry-count|header|number(uint32)|false|none|
|Request-Timeout|header|number(uint32)|true|none|
|User-Agent|header|string|true|none|
|Accept-Language|header|string|true|none|
|body|body|[[PlayMediaIntentHandlingInvocation](#schemaplaymediaintenthandlinginvocation)]|false|none|

> Example responses

> 200 Response

```json
[
  {
    "debug": "http://example.com",
    "method": "PlayMediaIntentHandling.resolveMediaItems",
    "metrics": {
      "completed": "1970-01-01T00:00:00Z",
      "duration": 0,
      "received": "1970-01-01T00:00:00Z"
    },
    "result": {
      "resolutionResult": [
        {
          "class": "PlayMediaMediaItemResolutionResult",
          "needsValue": {},
          "notRequired": {},
          "unsupported": {
            "reason": "loginRequired"
          },
          "confirmationRequired": {
            "mediaItemToConfirm": {
              "artist": "string",
              "identifier": "string",
              "title": "string",
              "type": "unknown"
            }
          },
          "disambiguation": {
            "mediaItemsToDisambiguate": [
              {
                "artist": "string",
                "identifier": "string",
                "title": "string",
                "type": "unknown"
              },
              {
                "artist": "string",
                "identifier": "string",
                "title": "string",
                "type": "unknown"
              }
            ]
          },
          "success": {
            "resolvedMediaItem": {
              "artist": "string",
              "identifier": "string",
              "title": "string",
              "type": "unknown"
            }
          }
        }
      ]
    }
  }
]
```

<h3 id="playmedia-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="playmedia-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PlayMediaIntentHandlingInvocationResponse](#schemaplaymediaintenthandlinginvocationresponse)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-applecloudextension-session-id|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## updateMediaAffinity

<a id="opIdupdateMediaAffinityIntentHandling"></a>

> Code samples

```bash
curl https://example.com/intent/updateMediaAffinity \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'x-applecloudextension-session-id: string' \
  -H 'Request-Timeout: 1' \
  -H 'User-Agent: string' \
  -H 'Accept-Language: string' \
  -d '[
    {
      "method": "UpdateMediaAffinityIntentHandling.resolveMediaItems",
      "params": {
        "intent": {
          "class": "UpdateMediaAffinityIntent",
          "identifier": "string",
          "affinityType": "unknown",
          "mediaItems": [
            {
              "identifier": "string",
              "type": "unknown"
            }
          ],
          "mediaSearch": {
            "albumName": "string",
            "artistName": "string",
            "genreNames": [
              "string"
            ],
            "mediaIdentifier": "string",
            "mediaName": "string",
            "mediaType": "unknown",
            "moodNames": [
              "string"
            ],
            "reference": "unknown",
            "releaseDate": {
              "endDateComponents": "1980",
              "startDateComponents": "1980"
            },
            "sortOrder": "unknown"
          }
        }
      },
      "session": {
        "constraints": {
          "allowExplicitContent": true,
          "maximumQueueSegmentItemCount": 1000,
          "updateUserTasteProfile": true
        },
        "deadline": "1970-01-01T00:00:00Z",
        "identifier": "string",
        "playerContext": {
          "activityIdentifier": "string",
          "contentIdentifier": "j15f8A3cuU0GG",
          "offsetInMillis": 10942,
          "playbackSpeed": 1,
          "queueIdentifier": "u104823q8201"
        },
        "requested": "1970-01-01T00:00:00Z",
        "version": "string"
      }
    }
  ]'
```

`POST /intent/updateMediaAffinity`

> Body parameter

```json
[
  {
    "method": "UpdateMediaAffinityIntentHandling.resolveMediaItems",
    "params": {
      "intent": {
        "class": "UpdateMediaAffinityIntent",
        "identifier": "string",
        "affinityType": "unknown",
        "mediaItems": [
          {
            "identifier": "string",
            "type": "unknown"
          }
        ],
        "mediaSearch": {
          "albumName": "string",
          "artistName": "string",
          "genreNames": [
            "string"
          ],
          "mediaIdentifier": "string",
          "mediaName": "string",
          "mediaType": "unknown",
          "moodNames": [
            "string"
          ],
          "reference": "unknown",
          "releaseDate": {
            "endDateComponents": "1980",
            "startDateComponents": "1980"
          },
          "sortOrder": "unknown"
        }
      }
    },
    "session": {
      "constraints": {
        "allowExplicitContent": true,
        "maximumQueueSegmentItemCount": 1000,
        "updateUserTasteProfile": true
      },
      "deadline": "1970-01-01T00:00:00Z",
      "identifier": "string",
      "playerContext": {
        "activityIdentifier": "string",
        "contentIdentifier": "j15f8A3cuU0GG",
        "offsetInMillis": 10942,
        "playbackSpeed": 1,
        "queueIdentifier": "u104823q8201"
      },
      "requested": "1970-01-01T00:00:00Z",
      "version": "string"
    }
  }
]
```

<h3 id="updatemediaaffinity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-applecloudextension-session-id|header|string|true|none|
|x-applecloudextension-retry-count|header|number(uint32)|false|none|
|Request-Timeout|header|number(uint32)|true|none|
|User-Agent|header|string|true|none|
|Accept-Language|header|string|true|none|
|body|body|[[UpdateMediaAffinityIntentHandlingInvocation](#schemaupdatemediaaffinityintenthandlinginvocation)]|false|none|

> Example responses

> 200 Response

```json
[
  {
    "debug": "http://example.com",
    "method": "UpdateMediaAffinityIntentHandling.resolveMediaItems",
    "metrics": {
      "completed": "1970-01-01T00:00:00Z",
      "duration": 0,
      "received": "1970-01-01T00:00:00Z"
    },
    "result": {
      "resolutionResult": [
        {
          "class": "UpdateMediaAffinityMediaItemResolutionResult",
          "needsValue": {},
          "notRequired": {},
          "unsupported": {
            "reason": "loginRequired"
          },
          "confirmationRequired": {
            "mediaItemToConfirm": {
              "artist": "string",
              "identifier": "string",
              "title": "string",
              "type": "unknown"
            }
          },
          "disambiguation": {
            "mediaItemsToDisambiguate": [
              {
                "artist": "string",
                "identifier": "string",
                "title": "string",
                "type": "unknown"
              },
              {
                "artist": "string",
                "identifier": "string",
                "title": "string",
                "type": "unknown"
              }
            ]
          },
          "success": {
            "resolvedMediaItem": {
              "artist": "string",
              "identifier": "string",
              "title": "string",
              "type": "unknown"
            }
          }
        }
      ]
    }
  }
]
```

<h3 id="updatemediaaffinity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="updatemediaaffinity-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[UpdateMediaAffinityIntentHandlingInvocationResponse](#schemaupdatemediaaffinityintenthandlinginvocationresponse)]|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-applecloudextension-session-id|string||none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sirikit-cloud-media-queues">queues</h1>

## playMedia

<a id="opIdplayMediaOnQueue"></a>

> Code samples

```bash
curl https://example.com/queues/playMedia \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'x-applecloudextension-session-id: string' \
  -H 'User-Agent: string' \
  -H 'Accept-Language: string' \
  -d '{
    "constraints": {
      "allowExplicitContent": true,
      "maximumQueueSegmentItemCount": 1000,
      "updateUserTasteProfile": true
    },
    "userActivity": {
      "activityType": "com.mediastreamingservice.playmedia",
      "persistentIdentifier": "string",
      "title": "string",
      "userInfo": {},
      "version": "string"
    },
    "version": "string"
  }'
```

`POST /queues/playMedia`

> Body parameter

```json
{
  "constraints": {
    "allowExplicitContent": true,
    "maximumQueueSegmentItemCount": 1000,
    "updateUserTasteProfile": true
  },
  "userActivity": {
    "activityType": "com.mediastreamingservice.playmedia",
    "persistentIdentifier": "string",
    "title": "string",
    "userInfo": {},
    "version": "string"
  },
  "version": "string"
}
```

<h3 id="playmedia-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-applecloudextension-session-id|header|string|true|none|
|x-applecloudextension-retry-count|header|number(uint32)|false|none|
|User-Agent|header|string|true|none|
|Accept-Language|header|string|true|none|
|body|body|[PlayMediaRequest](#schemaplaymediarequest)|false|none|
|» constraints|body|[Constraints](#schemaconstraints)|true|none|
|» userActivity|body|[UserActivity](#schemauseractivity)|true|none|
|» version|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "attributes": {
        "albumName": "Blood On the Tracks",
        "artistName": "Bob Dylan",
        "artwork": {
          "url": "string"
        },
        "composerName": "B. Dylan",
        "durationInMillis": 0,
        "genreNames": [
          "string"
        ],
        "name": "Tangled Up In Blue",
        "trackNumber": 1
      },
      "control": "song",
      "identifier": "j15f8A3cuU0GG",
      "isLive": true,
      "playIndex": 0,
      "url": "string"
    }
  ],
  "contentItemsCount": 0,
  "controls": {
    "default": {
      "activity": {
        "playElapsed": 5,
        "playElapsedInterval": 5,
        "playPaused": 5
      },
      "commands": {
        "bookmarkTrack": true,
        "dislikeTrack": true,
        "likeTrack": true,
        "nextTrack": true,
        "preferSkipBackward": true,
        "preferSkipForward": true,
        "previousTrack": true,
        "seekToPlaybackPosition": true,
        "skipBackward": true,
        "skipForward": true
      },
      "scheme": "custom"
    },
    "property1": {
      "activity": {
        "playElapsed": 5,
        "playElapsedInterval": 5,
        "playPaused": 5
      },
      "commands": {
        "bookmarkTrack": true,
        "dislikeTrack": true,
        "likeTrack": true,
        "nextTrack": true,
        "preferSkipBackward": true,
        "preferSkipForward": true,
        "previousTrack": true,
        "seekToPlaybackPosition": true,
        "skipBackward": true,
        "skipForward": true
      },
      "scheme": "custom"
    },
    "property2": {
      "activity": {
        "playElapsed": 5,
        "playElapsedInterval": 5,
        "playPaused": 5
      },
      "commands": {
        "bookmarkTrack": true,
        "dislikeTrack": true,
        "likeTrack": true,
        "nextTrack": true,
        "preferSkipBackward": true,
        "preferSkipForward": true,
        "previousTrack": true,
        "seekToPlaybackPosition": true,
        "skipBackward": true,
        "skipForward": true
      },
      "scheme": "custom"
    }
  },
  "identifier": "u104823q8201",
  "insertPointer": {
    "afterIdentifier": "j15f8A3cuU0GG",
    "replace": false
  },
  "nextContentUrl": "string",
  "playPointer": {
    "contentIdentifier": "j15f8A3cuU0GG",
    "offsetInMillis": 10942
  },
  "prerollSeconds": 0,
  "previousContentUrl": "string",
  "skipsRemaining": 0,
  "version": "string"
}
```

<h3 id="playmedia-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[Queue](#schemaqueue)|
|204|No Content||None|
|401|Unauthorized||None|
|410|Gone||None|

<aside class="success">
This operation does not require authentication
</aside>

## updateActivity

<a id="opIdupdateActivityOnQueue"></a>

> Code samples

```bash
curl https://example.com/queues/updateActivity \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'x-applecloudextension-session-id: string' \
  -H 'User-Agent: string' \
  -H 'Accept-Language: string' \
  -d '{
    "constraints": {
      "allowExplicitContent": true,
      "maximumQueueSegmentItemCount": 1000,
      "updateUserTasteProfile": true
    },
    "nowPlaying": {
      "activityIdentifier": "string",
      "contentIdentifier": "j15f8A3cuU0GG",
      "offsetInMillis": 10942,
      "playbackSpeed": 1,
      "queueIdentifier": "u104823q8201"
    },
    "previouslyPlaying": {
      "activityIdentifier": "string",
      "contentIdentifier": "j15f8A3cuU0GG",
      "offsetInMillis": 10942,
      "playbackSpeed": 1,
      "queueIdentifier": "u104823q8201"
    },
    "report": "local.playing.elapsed",
    "timestamp": "1970-01-01T00:00:00Z",
    "userActivity": {
      "activityType": "com.mediastreamingservice.playmedia",
      "persistentIdentifier": "string",
      "title": "string",
      "userInfo": {},
      "version": "string"
    },
    "version": "string"
  }'
```

`POST /queues/updateActivity`

> Body parameter

```json
{
  "constraints": {
    "allowExplicitContent": true,
    "maximumQueueSegmentItemCount": 1000,
    "updateUserTasteProfile": true
  },
  "nowPlaying": {
    "activityIdentifier": "string",
    "contentIdentifier": "j15f8A3cuU0GG",
    "offsetInMillis": 10942,
    "playbackSpeed": 1,
    "queueIdentifier": "u104823q8201"
  },
  "previouslyPlaying": {
    "activityIdentifier": "string",
    "contentIdentifier": "j15f8A3cuU0GG",
    "offsetInMillis": 10942,
    "playbackSpeed": 1,
    "queueIdentifier": "u104823q8201"
  },
  "report": "local.playing.elapsed",
  "timestamp": "1970-01-01T00:00:00Z",
  "userActivity": {
    "activityType": "com.mediastreamingservice.playmedia",
    "persistentIdentifier": "string",
    "title": "string",
    "userInfo": {},
    "version": "string"
  },
  "version": "string"
}
```

<h3 id="updateactivity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-applecloudextension-session-id|header|string|true|none|
|x-applecloudextension-retry-count|header|number(uint32)|false|none|
|User-Agent|header|string|true|none|
|Accept-Language|header|string|true|none|
|body|body|[UpdateActivityRequest](#schemaupdateactivityrequest)|false|none|
|» constraints|body|[Constraints](#schemaconstraints)|false|none|
|» nowPlaying|body|[PlayerContext](#schemaplayercontext)|false|none|
|» previouslyPlaying|body|[PlayerContext](#schemaplayercontext)|false|none|
|» report|body|[QueueActivityReportEvent](#schemaqueueactivityreportevent)|true|none|
|» timestamp|body|string(date-time)|true|none|
|» userActivity|body|[UserActivity](#schemauseractivity)|true|none|
|» version|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» report|local.playing.elapsed|
|» report|local.playing.paused|
|» report|local.playing.continued|
|» report|local.playing.scrub|
|» report|local.playing.fastForward|
|» report|local.playing.fastRewind|
|» report|local.playing.transitioned.naturally|
|» report|local.playing.transitioned.skip_next|
|» report|local.playing.transitioned.skip_previous|
|» report|local.playing.transitioned.queue_replaced|
|» report|local.stopped.naturally|
|» report|local.stopped.skip_past_end|
|» report|local.command.like|
|» report|local.command.dislike|
|» report|local.command.bookmark|

> Example responses

> 200 Response

```json
{
  "queue": {
    "content": [
      {
        "attributes": {
          "albumName": "Blood On the Tracks",
          "artistName": "Bob Dylan",
          "artwork": {
            "url": "string"
          },
          "composerName": "B. Dylan",
          "durationInMillis": 0,
          "genreNames": [
            "string"
          ],
          "name": "Tangled Up In Blue",
          "trackNumber": 1
        },
        "control": "song",
        "identifier": "j15f8A3cuU0GG",
        "isLive": true,
        "playIndex": 0,
        "url": "string"
      }
    ],
    "contentItemsCount": 0,
    "controls": {
      "default": {
        "activity": {
          "playElapsed": 5,
          "playElapsedInterval": 5,
          "playPaused": 5
        },
        "commands": {
          "bookmarkTrack": true,
          "dislikeTrack": true,
          "likeTrack": true,
          "nextTrack": true,
          "preferSkipBackward": true,
          "preferSkipForward": true,
          "previousTrack": true,
          "seekToPlaybackPosition": true,
          "skipBackward": true,
          "skipForward": true
        },
        "scheme": "custom"
      },
      "property1": {
        "activity": {
          "playElapsed": 5,
          "playElapsedInterval": 5,
          "playPaused": 5
        },
        "commands": {
          "bookmarkTrack": true,
          "dislikeTrack": true,
          "likeTrack": true,
          "nextTrack": true,
          "preferSkipBackward": true,
          "preferSkipForward": true,
          "previousTrack": true,
          "seekToPlaybackPosition": true,
          "skipBackward": true,
          "skipForward": true
        },
        "scheme": "custom"
      },
      "property2": {
        "activity": {
          "playElapsed": 5,
          "playElapsedInterval": 5,
          "playPaused": 5
        },
        "commands": {
          "bookmarkTrack": true,
          "dislikeTrack": true,
          "likeTrack": true,
          "nextTrack": true,
          "preferSkipBackward": true,
          "preferSkipForward": true,
          "previousTrack": true,
          "seekToPlaybackPosition": true,
          "skipBackward": true,
          "skipForward": true
        },
        "scheme": "custom"
      }
    },
    "identifier": "u104823q8201",
    "insertPointer": {
      "afterIdentifier": "j15f8A3cuU0GG",
      "replace": false
    },
    "nextContentUrl": "string",
    "playPointer": {
      "contentIdentifier": "j15f8A3cuU0GG",
      "offsetInMillis": 10942
    },
    "prerollSeconds": 0,
    "previousContentUrl": "string",
    "skipsRemaining": 0,
    "version": "string"
  },
  "userActivity": {
    "activityType": "com.mediastreamingservice.playmedia",
    "persistentIdentifier": "string",
    "title": "string",
    "userInfo": {},
    "version": "string"
  }
}
```

<h3 id="updateactivity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[UpdateActivityResponse](#schemaupdateactivityresponse)|
|204|No Content||None|
|401|Unauthorized||None|
|404|Not Found||None|
|410|Gone||None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AddMediaIntent">AddMediaIntent</h2>
<!-- backwards compatibility -->
<a id="schemaaddmediaintent"></a>
<a id="schema_AddMediaIntent"></a>
<a id="tocSaddmediaintent"></a>
<a id="tocsaddmediaintent"></a>

```json
{
  "class": "AddMediaIntent",
  "identifier": "string",
  "mediaDestination": {
    "mediaDestinationType": "library"
  },
  "mediaItems": [
    {
      "artist": "string",
      "identifier": "string",
      "title": "string",
      "type": "unknown"
    }
  ],
  "mediaSearch": {
    "albumName": "string",
    "artistName": "string",
    "genreNames": [
      "string"
    ],
    "mediaIdentifier": "string",
    "mediaName": "string",
    "mediaType": "unknown",
    "moodNames": [
      "string"
    ],
    "reference": "unknown",
    "releaseDate": {
      "endDateComponents": "1980",
      "startDateComponents": "1980"
    },
    "sortOrder": "unknown"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|class|string|true|none|none|
|identifier|string|true|none|none|
|class|string|true|none|none|
|mediaDestination|[MediaDestination](#schemamediadestination)|false|none|none|
|mediaItems|[[MediaItem](#schemamediaitem)]|false|none|none|
|mediaSearch|[MediaSearch](#schemamediasearch)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|class|AddMediaIntent|

<h2 id="tocS_AddMediaIntentHandlingConfirmInvocationResponse">AddMediaIntentHandlingConfirmInvocationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddmediaintenthandlingconfirminvocationresponse"></a>
<a id="schema_AddMediaIntentHandlingConfirmInvocationResponse"></a>
<a id="tocSaddmediaintenthandlingconfirminvocationresponse"></a>
<a id="tocsaddmediaintenthandlingconfirminvocationresponse"></a>

```json
{
  "debug": "http://example.com",
  "method": "AddMediaIntentHandling.confirm",
  "metrics": {
    "completed": "1970-01-01T00:00:00Z",
    "duration": 0,
    "received": "1970-01-01T00:00:00Z"
  },
  "result": {
    "response": {
      "class": "AddMediaIntentResponse",
      "userActivity": {
        "activityType": "com.mediastreamingservice.playmedia",
        "persistentIdentifier": "string",
        "title": "string",
        "userInfo": {},
        "version": "string"
      },
      "code": "unspecified"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|debug|[ServiceDebugReference](#schemaservicedebugreference)|false|none|none|
|method|string|true|none|none|
|metrics|[ExecutionMetrics](#schemaexecutionmetrics)|false|none|none|
|result|object \| null|true|none|none|
|method|string|true|none|none|
|result|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|method|AddMediaIntentHandling.confirm|

<h2 id="tocS_AddMediaIntentHandlingHandleInvocationResponse">AddMediaIntentHandlingHandleInvocationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddmediaintenthandlinghandleinvocationresponse"></a>
<a id="schema_AddMediaIntentHandlingHandleInvocationResponse"></a>
<a id="tocSaddmediaintenthandlinghandleinvocationresponse"></a>
<a id="tocsaddmediaintenthandlinghandleinvocationresponse"></a>

```json
{
  "debug": "http://example.com",
  "method": "AddMediaIntentHandling.handle",
  "metrics": {
    "completed": "1970-01-01T00:00:00Z",
    "duration": 0,
    "received": "1970-01-01T00:00:00Z"
  },
  "result": {
    "response": {
      "class": "AddMediaIntentResponse",
      "userActivity": {
        "activityType": "com.mediastreamingservice.playmedia",
        "persistentIdentifier": "string",
        "title": "string",
        "userInfo": {},
        "version": "string"
      },
      "code": "unspecified"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|debug|[ServiceDebugReference](#schemaservicedebugreference)|false|none|none|
|method|string|true|none|none|
|metrics|[ExecutionMetrics](#schemaexecutionmetrics)|false|none|none|
|result|object \| null|true|none|none|
|method|string|true|none|none|
|result|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|method|AddMediaIntentHandling.handle|

<h2 id="tocS_AddMediaIntentHandlingInvocation">AddMediaIntentHandlingInvocation</h2>
<!-- backwards compatibility -->
<a id="schemaaddmediaintenthandlinginvocation"></a>
<a id="schema_AddMediaIntentHandlingInvocation"></a>
<a id="tocSaddmediaintenthandlinginvocation"></a>
<a id="tocsaddmediaintenthandlinginvocation"></a>

```json
{
  "method": "AddMediaIntentHandling.resolveMediaItems",
  "params": {
    "intent": {
      "class": "AddMediaIntent",
      "identifier": "string",
      "mediaDestination": {
        "mediaDestinationType": "library"
      },
      "mediaItems": [
        {
          "artist": "string",
          "identifier": "string",
          "title": "string",
          "type": "unknown"
        }
      ],
      "mediaSearch": {
        "albumName": "string",
        "artistName": "string",
        "genreNames": [
          "string"
        ],
        "mediaIdentifier": "string",
        "mediaName": "string",
        "mediaType": "unknown",
        "moodNames": [
          "string"
        ],
        "reference": "unknown",
        "releaseDate": {
          "endDateComponents": "1980",
          "startDateComponents": "1980"
        },
        "sortOrder": "unknown"
      }
    }
  },
  "session": {
    "constraints": {
      "allowExplicitContent": true,
      "maximumQueueSegmentItemCount": 1000,
      "updateUserTasteProfile": true
    },
    "deadline": "1970-01-01T00:00:00Z",
    "identifier": "string",
    "playerContext": {
      "activityIdentifier": "string",
      "contentIdentifier": "j15f8A3cuU0GG",
      "offsetInMillis": 10942,
      "playbackSpeed": 1,
      "queueIdentifier": "u104823q8201"
    },
    "requested": "1970-01-01T00:00:00Z",
    "version": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|method|string|true|none|none|
|params|object \| null|true|none|none|
|session|[Session](#schemasession)|false|none|none|
|method|string|true|none|none|
|params|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|method|AddMediaIntentHandling.resolveMediaItems|
|method|AddMediaIntentHandling.resolveMediaDestination|
|method|AddMediaIntentHandling.confirm|
|method|AddMediaIntentHandling.handle|

<h2 id="tocS_AddMediaIntentHandlingInvocationResponse">AddMediaIntentHandlingInvocationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddmediaintenthandlinginvocationresponse"></a>
<a id="schema_AddMediaIntentHandlingInvocationResponse"></a>
<a id="tocSaddmediaintenthandlinginvocationresponse"></a>
<a id="tocsaddmediaintenthandlinginvocationresponse"></a>

```json
{
  "debug": "http://example.com",
  "method": "AddMediaIntentHandling.resolveMediaItems",
  "metrics": {
    "completed": "1970-01-01T00:00:00Z",
    "duration": 0,
    "received": "1970-01-01T00:00:00Z"
  },
  "result": {
    "resolutionResult": [
      {
        "class": "AddMediaMediaItemResolutionResult",
        "needsValue": {},
        "notRequired": {},
        "unsupported": {
          "reason": "loginRequired"
        },
        "confirmationRequired": {
          "mediaItemToConfirm": {
            "artist": "string",
            "identifier": "string",
            "title": "string",
            "type": "unknown"
          }
        },
        "disambiguation": {
          "mediaItemsToDisambiguate": [
            {
              "artist": "string",
              "identifier": "string",
              "title": "string",
              "type": "unknown"
            },
            {
              "artist": "string",
              "identifier": "string",
              "title": "string",
              "type": "unknown"
            }
          ]
        },
        "success": {
          "resolvedMediaItem": {
            "artist": "string",
            "identifier": "string",
            "title": "string",
            "type": "unknown"
          }
        }
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[AddMediaIntentHandlingResolveMediaItemsInvocationResponse](#schemaaddmediaintenthandlingresolvemediaitemsinvocationresponse)|false|none|none|
|*oneOf*|[AddMediaIntentHandlingResolveMediaDestinationInvocationResponse](#schemaaddmediaintenthandlingresolvemediadestinationinvocationresponse)|false|none|none|
|*oneOf*|[AddMediaIntentHandlingConfirmInvocationResponse](#schemaaddmediaintenthandlingconfirminvocationresponse)|false|none|none|
|*oneOf*|[AddMediaIntentHandlingHandleInvocationResponse](#schemaaddmediaintenthandlinghandleinvocationresponse)|false|none|none|
|*oneOf*|[ProtocolExceptionInvocationResponse](#schemaprotocolexceptioninvocationresponse)|false|none|none|

<h2 id="tocS_AddMediaIntentHandlingResolveMediaDestinationInvocationResponse">AddMediaIntentHandlingResolveMediaDestinationInvocationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddmediaintenthandlingresolvemediadestinationinvocationresponse"></a>
<a id="schema_AddMediaIntentHandlingResolveMediaDestinationInvocationResponse"></a>
<a id="tocSaddmediaintenthandlingresolvemediadestinationinvocationresponse"></a>
<a id="tocsaddmediaintenthandlingresolvemediadestinationinvocationresponse"></a>

```json
{
  "debug": "http://example.com",
  "method": "AddMediaIntentHandling.resolveMediaDestination",
  "metrics": {
    "completed": "1970-01-01T00:00:00Z",
    "duration": 0,
    "received": "1970-01-01T00:00:00Z"
  },
  "result": {
    "resolutionResult": {
      "class": "AddMediaMediaDestinationResolutionResult",
      "needsValue": {},
      "notRequired": {},
      "unsupported": {
        "reason": "playlistNameNotFound"
      },
      "confirmationRequired": {
        "mediaDestinationToConfirm": {
          "mediaDestinationType": "library"
        }
      },
      "disambiguation": {
        "mediaDestinationsToDisambiguate": [
          {
            "mediaDestinationType": "library"
          },
          {
            "mediaDestinationType": "library"
          }
        ]
      },
      "success": {
        "resolvedMediaDestination": {
          "mediaDestinationType": "library"
        }
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|debug|[ServiceDebugReference](#schemaservicedebugreference)|false|none|none|
|method|string|true|none|none|
|metrics|[ExecutionMetrics](#schemaexecutionmetrics)|false|none|none|
|result|object \| null|true|none|none|
|method|string|true|none|none|
|result|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|method|AddMediaIntentHandling.resolveMediaDestination|

<h2 id="tocS_AddMediaIntentHandlingResolveMediaItemsInvocationResponse">AddMediaIntentHandlingResolveMediaItemsInvocationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddmediaintenthandlingresolvemediaitemsinvocationresponse"></a>
<a id="schema_AddMediaIntentHandlingResolveMediaItemsInvocationResponse"></a>
<a id="tocSaddmediaintenthandlingresolvemediaitemsinvocationresponse"></a>
<a id="tocsaddmediaintenthandlingresolvemediaitemsinvocationresponse"></a>

```json
{
  "debug": "http://example.com",
  "method": "AddMediaIntentHandling.resolveMediaItems",
  "metrics": {
    "completed": "1970-01-01T00:00:00Z",
    "duration": 0,
    "received": "1970-01-01T00:00:00Z"
  },
  "result": {
    "resolutionResult": [
      {
        "class": "AddMediaMediaItemResolutionResult",
        "needsValue": {},
        "notRequired": {},
        "unsupported": {
          "reason": "loginRequired"
        },
        "confirmationRequired": {
          "mediaItemToConfirm": {
            "artist": "string",
            "identifier": "string",
            "title": "string",
            "type": "unknown"
          }
        },
        "disambiguation": {
          "mediaItemsToDisambiguate": [
            {
              "artist": "string",
              "identifier": "string",
              "title": "string",
              "type": "unknown"
            },
            {
              "artist": "string",
              "identifier": "string",
              "title": "string",
              "type": "unknown"
            }
          ]
        },
        "success": {
          "resolvedMediaItem": {
            "artist": "string",
            "identifier": "string",
            "title": "string",
            "type": "unknown"
          }
        }
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|debug|[ServiceDebugReference](#schemaservicedebugreference)|false|none|none|
|method|string|true|none|none|
|metrics|[ExecutionMetrics](#schemaexecutionmetrics)|false|none|none|
|result|object \| null|true|none|none|
|method|string|true|none|none|
|result|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|method|AddMediaIntentHandling.resolveMediaItems|

<h2 id="tocS_AddMediaIntentResponse">AddMediaIntentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddmediaintentresponse"></a>
<a id="schema_AddMediaIntentResponse"></a>
<a id="tocSaddmediaintentresponse"></a>
<a id="tocsaddmediaintentresponse"></a>

```json
{
  "class": "AddMediaIntentResponse",
  "userActivity": {
    "activityType": "com.mediastreamingservice.playmedia",
    "persistentIdentifier": "string",
    "title": "string",
    "userInfo": {},
    "version": "string"
  },
  "code": "unspecified"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|class|string|true|none|none|
|userActivity|[UserActivity](#schemauseractivity)|true|none|none|
|class|string|true|none|none|
|code|[AddMediaIntentResponseCode](#schemaaddmediaintentresponsecode)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|class|AddMediaIntentResponse|
|code|unspecified|
|code|ready|
|code|inProgress|
|code|success|
|code|failure|
|code|failureRequiringAppLaunch|

<h2 id="tocS_AddMediaIntentResponseCode">AddMediaIntentResponseCode</h2>
<!-- backwards compatibility -->
<a id="schemaaddmediaintentresponsecode"></a>
<a id="schema_AddMediaIntentResponseCode"></a>
<a id="tocSaddmediaintentresponsecode"></a>
<a id="tocsaddmediaintentresponsecode"></a>

```json
"unspecified"
```

<h2 id="tocS_AddMediaMediaDestinationResolutionResult">AddMediaMediaDestinationResolutionResult</h2>
<!-- backwards compatibility -->
<a id="schemaaddmediamediadestinationresolutionresult"></a>
<a id="schema_AddMediaMediaDestinationResolutionResult"></a>
<a id="tocSaddmediamediadestinationresolutionresult"></a>
<a id="tocsaddmediamediadestinationresolutionresult"></a>

```json
{
  "class": "AddMediaMediaDestinationResolutionResult",
  "needsValue": {},
  "notRequired": {},
  "unsupported": {
    "reason": "playlistNameNotFound"
  },
  "confirmationRequired": {
    "mediaDestinationToConfirm": {
      "mediaDestinationType": "library"
    }
  },
  "disambiguation": {
    "mediaDestinationsToDisambiguate": [
      {
        "mediaDestinationType": "library"
      },
      {
        "mediaDestinationType": "library"
      }
    ]
  },
  "success": {
    "resolvedMediaDestination": {
      "mediaDestinationType": "library"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|class|string|true|none|none|
|needsValue|object|false|none|none|
|notRequired|object|false|none|none|
|unsupported|object|false|none|none|
|class|string|true|none|none|
|confirmationRequired|object|false|none|none|
|disambiguation|object|false|none|none|
|success|object|false|none|none|
|unsupported|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|class|AddMediaMediaDestinationResolutionResult|

<h2 id="tocS_AddMediaMediaDestinationUnsupportedReason">AddMediaMediaDestinationUnsupportedReason</h2>
<!-- backwards compatibility -->
<a id="schemaaddmediamediadestinationunsupportedreason"></a>
<a id="schema_AddMediaMediaDestinationUnsupportedReason"></a>
<a id="tocSaddmediamediadestinationunsupportedreason"></a>
<a id="tocsaddmediamediadestinationunsupportedreason"></a>

```json
"playlistNameNotFound"
```

<h2 id="tocS_AddMediaMediaItemResolutionResult">AddMediaMediaItemResolutionResult</h2>
<!-- backwards compatibility -->
<a id="schemaaddmediamediaitemresolutionresult"></a>
<a id="schema_AddMediaMediaItemResolutionResult"></a>
<a id="tocSaddmediamediaitemresolutionresult"></a>
<a id="tocsaddmediamediaitemresolutionresult"></a>

```json
{
  "class": "AddMediaMediaItemResolutionResult",
  "needsValue": {},
  "notRequired": {},
  "unsupported": {
    "reason": "loginRequired"
  },
  "confirmationRequired": {
    "mediaItemToConfirm": {
      "artist": "string",
      "identifier": "string",
      "title": "string",
      "type": "unknown"
    }
  },
  "disambiguation": {
    "mediaItemsToDisambiguate": [
      {
        "artist": "string",
        "identifier": "string",
        "title": "string",
        "type": "unknown"
      },
      {
        "artist": "string",
        "identifier": "string",
        "title": "string",
        "type": "unknown"
      }
    ]
  },
  "success": {
    "resolvedMediaItem": {
      "artist": "string",
      "identifier": "string",
      "title": "string",
      "type": "unknown"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|class|string|true|none|none|
|needsValue|object|false|none|none|
|notRequired|object|false|none|none|
|unsupported|object|false|none|none|
|class|string|true|none|none|
|confirmationRequired|object|false|none|none|
|disambiguation|object|false|none|none|
|success|object|false|none|none|
|unsupported|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|class|AddMediaMediaItemResolutionResult|

<h2 id="tocS_AddMediaMediaItemUnsupportedReason">AddMediaMediaItemUnsupportedReason</h2>
<!-- backwards compatibility -->
<a id="schemaaddmediamediaitemunsupportedreason"></a>
<a id="schema_AddMediaMediaItemUnsupportedReason"></a>
<a id="tocSaddmediamediaitemunsupportedreason"></a>
<a id="tocsaddmediamediaitemunsupportedreason"></a>

```json
"loginRequired"
```

<h2 id="tocS_BooleanResolutionResult">BooleanResolutionResult</h2>
<!-- backwards compatibility -->
<a id="schemabooleanresolutionresult"></a>
<a id="schema_BooleanResolutionResult"></a>
<a id="tocSbooleanresolutionresult"></a>
<a id="tocsbooleanresolutionresult"></a>

```json
{
  "class": "BooleanResolutionResult",
  "needsValue": {},
  "notRequired": {},
  "unsupported": {},
  "confirmationRequired": {
    "valueToConfirm": true
  },
  "success": {
    "resolvedValue": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|class|string|true|none|none|
|needsValue|object|false|none|none|
|notRequired|object|false|none|none|
|unsupported|object|false|none|none|
|class|string|true|none|none|
|confirmationRequired|object|false|none|none|
|success|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|class|BooleanResolutionResult|

<h2 id="tocS_Constraints">Constraints</h2>
<!-- backwards compatibility -->
<a id="schemaconstraints"></a>
<a id="schema_Constraints"></a>
<a id="tocSconstraints"></a>
<a id="tocsconstraints"></a>

```json
{
  "allowExplicitContent": true,
  "maximumQueueSegmentItemCount": 1000,
  "updateUserTasteProfile": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowExplicitContent|boolean|false|none|none|
|maximumQueueSegmentItemCount|integer(uint32)|false|none|none|
|updateUserTasteProfile|boolean|false|none|none|

<h2 id="tocS_Content">Content</h2>
<!-- backwards compatibility -->
<a id="schemacontent"></a>
<a id="schema_Content"></a>
<a id="tocScontent"></a>
<a id="tocscontent"></a>

```json
{
  "attributes": {
    "albumName": "Blood On the Tracks",
    "artistName": "Bob Dylan",
    "artwork": {
      "url": "string"
    },
    "composerName": "B. Dylan",
    "durationInMillis": 0,
    "genreNames": [
      "string"
    ],
    "name": "Tangled Up In Blue",
    "trackNumber": 1
  },
  "control": "song",
  "identifier": "j15f8A3cuU0GG",
  "isLive": true,
  "playIndex": 0,
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[ContentAttributes](#schemacontentattributes)|false|none|none|
|control|string|false|none|none|
|identifier|[ContentIdentifier](#schemacontentidentifier)|true|none|none|
|isLive|boolean|false|none|none|
|playIndex|integer(uint64)|false|none|none|
|url|string|false|none|none|

<h2 id="tocS_ContentAttributes">ContentAttributes</h2>
<!-- backwards compatibility -->
<a id="schemacontentattributes"></a>
<a id="schema_ContentAttributes"></a>
<a id="tocScontentattributes"></a>
<a id="tocscontentattributes"></a>

```json
{
  "albumName": "Blood On the Tracks",
  "artistName": "Bob Dylan",
  "artwork": {
    "url": "string"
  },
  "composerName": "B. Dylan",
  "durationInMillis": 0,
  "genreNames": [
    "string"
  ],
  "name": "Tangled Up In Blue",
  "trackNumber": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|albumName|string|false|none|none|
|artistName|string|false|none|none|
|artwork|object|false|none|none|
|composerName|string|false|none|none|
|durationInMillis|integer(uint64)|false|none|none|
|genreNames|[string]|false|none|none|
|name|string|false|none|none|
|trackNumber|integer(uint32)|false|none|none|

<h2 id="tocS_ContentIdentifier">ContentIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemacontentidentifier"></a>
<a id="schema_ContentIdentifier"></a>
<a id="tocScontentidentifier"></a>
<a id="tocscontentidentifier"></a>

```json
"j15f8A3cuU0GG"
```

<h2 id="tocS_DateComponents">DateComponents</h2>
<!-- backwards compatibility -->
<a id="schemadatecomponents"></a>
<a id="schema_DateComponents"></a>
<a id="tocSdatecomponents"></a>
<a id="tocsdatecomponents"></a>

```json
"1980"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|none|
|*oneOf*|string|false|none|none|
|*oneOf*|string(date)|false|none|none|
|*oneOf*|string(date-time)|false|none|none|
|*oneOf*|[ExplicitDateComponents](#schemaexplicitdatecomponents)|false|none|none|

<h2 id="tocS_DateComponentsRange">DateComponentsRange</h2>
<!-- backwards compatibility -->
<a id="schemadatecomponentsrange"></a>
<a id="schema_DateComponentsRange"></a>
<a id="tocSdatecomponentsrange"></a>
<a id="tocsdatecomponentsrange"></a>

```json
{
  "endDateComponents": "1980",
  "startDateComponents": "1980"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endDateComponents|[DateComponents](#schemadatecomponents)|false|none|none|
|startDateComponents|[DateComponents](#schemadatecomponents)|false|none|none|

<h2 id="tocS_ExecutionMetrics">ExecutionMetrics</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionmetrics"></a>
<a id="schema_ExecutionMetrics"></a>
<a id="tocSexecutionmetrics"></a>
<a id="tocsexecutionmetrics"></a>

```json
{
  "completed": "1970-01-01T00:00:00Z",
  "duration": 0,
  "received": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completed|string(date-time)|false|none|none|
|duration|number(float)|false|none|none|
|received|string(date-time)|false|none|none|

<h2 id="tocS_ExplicitDateComponents">ExplicitDateComponents</h2>
<!-- backwards compatibility -->
<a id="schemaexplicitdatecomponents"></a>
<a id="schema_ExplicitDateComponents"></a>
<a id="tocSexplicitdatecomponents"></a>
<a id="tocsexplicitdatecomponents"></a>

```json
{
  "calendarIdentifier": "string",
  "day": 0,
  "era": 0,
  "hour": 0,
  "minute": 0,
  "month": 0,
  "nanosecond": 0,
  "second": 0,
  "timeZone": "string",
  "year": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calendarIdentifier|string|false|none|none|
|day|integer(int32)|false|none|none|
|era|integer(int32)|false|none|none|
|hour|integer(int32)|false|none|none|
|minute|integer(int32)|false|none|none|
|month|integer(int32)|false|none|none|
|nanosecond|integer(int32)|false|none|none|
|second|integer(int32)|false|none|none|
|timeZone|string|false|none|none|
|year|integer(int32)|false|none|none|

<h2 id="tocS_ExtensionConfig">ExtensionConfig</h2>
<!-- backwards compatibility -->
<a id="schemaextensionconfig"></a>
<a id="schema_ExtensionConfig"></a>
<a id="tocSextensionconfig"></a>
<a id="tocsextensionconfig"></a>

```json
{
  "hdr": {
    "x-client-type": "headless",
    "x-service-affinity": "cluster1"
  },
  "intent": {
    "addMedia": {
      "hdr": {},
      "url": "string",
      "opt": [
        "resolveMediaDestination"
      ]
    },
    "hdr": {
      "x-service-affinity": "intent2"
    },
    "playMedia": {
      "hdr": {},
      "url": "string",
      "opt": [
        "resolvePlayShuffled"
      ]
    },
    "updateMediaAffinity": {
      "hdr": {},
      "url": "string",
      "opt": [
        "resolveAffinityType"
      ]
    }
  },
  "media": {
    "queues": {
      "hdr": {
        "x-content-min-ttl": 1200,
        "x-media-catalog-region": "en_US"
      },
      "playMedia": {
        "hdr": {
          "x-headless-client": true
        },
        "url": "/queues/playMedia"
      },
      "updateActivity": {
        "hdr": {},
        "url": "/queues/updateActivity"
      }
    }
  },
  "url": "/v2",
  "version": "1.0.0"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hdr|object|false|none|none|
|intent|object|true|none|none|
|media|object|true|none|none|
|url|string|false|none|none|
|version|string|true|none|none|

<h2 id="tocS_ExtensionConfigTag">ExtensionConfigTag</h2>
<!-- backwards compatibility -->
<a id="schemaextensionconfigtag"></a>
<a id="schema_ExtensionConfigTag"></a>
<a id="tocSextensionconfigtag"></a>
<a id="tocsextensionconfigtag"></a>

```json
"string"
```

<h2 id="tocS_ExtensionEndpointConfig">ExtensionEndpointConfig</h2>
<!-- backwards compatibility -->
<a id="schemaextensionendpointconfig"></a>
<a id="schema_ExtensionEndpointConfig"></a>
<a id="tocSextensionendpointconfig"></a>
<a id="tocsextensionendpointconfig"></a>

```json
{
  "hdr": {},
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hdr|object|false|none|none|
|url|string|false|none|none|

<h2 id="tocS_Intent">Intent</h2>
<!-- backwards compatibility -->
<a id="schemaintent"></a>
<a id="schema_Intent"></a>
<a id="tocSintent"></a>
<a id="tocsintent"></a>

```json
{
  "class": "string",
  "identifier": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|class|string|true|none|none|
|identifier|string|true|none|none|

<h2 id="tocS_IntentResolutionResult">IntentResolutionResult</h2>
<!-- backwards compatibility -->
<a id="schemaintentresolutionresult"></a>
<a id="schema_IntentResolutionResult"></a>
<a id="tocSintentresolutionresult"></a>
<a id="tocsintentresolutionresult"></a>

```json
{
  "class": "string",
  "needsValue": {},
  "notRequired": {},
  "unsupported": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|class|string|true|none|none|
|needsValue|object|false|none|none|
|notRequired|object|false|none|none|
|unsupported|object|false|none|none|

<h2 id="tocS_IntentResponse">IntentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaintentresponse"></a>
<a id="schema_IntentResponse"></a>
<a id="tocSintentresponse"></a>
<a id="tocsintentresponse"></a>

```json
{
  "class": "string",
  "userActivity": {
    "activityType": "com.mediastreamingservice.playmedia",
    "persistentIdentifier": "string",
    "title": "string",
    "userInfo": {},
    "version": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|class|string|true|none|none|
|userActivity|[UserActivity](#schemauseractivity)|true|none|none|

<h2 id="tocS_Invocation">Invocation</h2>
<!-- backwards compatibility -->
<a id="schemainvocation"></a>
<a id="schema_Invocation"></a>
<a id="tocSinvocation"></a>
<a id="tocsinvocation"></a>

```json
{
  "method": "string",
  "params": {},
  "session": {
    "constraints": {
      "allowExplicitContent": true,
      "maximumQueueSegmentItemCount": 1000,
      "updateUserTasteProfile": true
    },
    "deadline": "1970-01-01T00:00:00Z",
    "identifier": "string",
    "playerContext": {
      "activityIdentifier": "string",
      "contentIdentifier": "j15f8A3cuU0GG",
      "offsetInMillis": 10942,
      "playbackSpeed": 1,
      "queueIdentifier": "u104823q8201"
    },
    "requested": "1970-01-01T00:00:00Z",
    "version": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|method|string|true|none|none|
|params|object \| null|true|none|none|
|session|[Session](#schemasession)|false|none|none|

<h2 id="tocS_InvocationResponse">InvocationResponse</h2>
<!-- backwards compatibility -->
<a id="schemainvocationresponse"></a>
<a id="schema_InvocationResponse"></a>
<a id="tocSinvocationresponse"></a>
<a id="tocsinvocationresponse"></a>

```json
{
  "debug": "http://example.com",
  "method": "string",
  "metrics": {
    "completed": "1970-01-01T00:00:00Z",
    "duration": 0,
    "received": "1970-01-01T00:00:00Z"
  },
  "result": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|debug|[ServiceDebugReference](#schemaservicedebugreference)|false|none|none|
|method|string|true|none|none|
|metrics|[ExecutionMetrics](#schemaexecutionmetrics)|false|none|none|
|result|object \| null|true|none|none|

<h2 id="tocS_MediaAffinityType">MediaAffinityType</h2>
<!-- backwards compatibility -->
<a id="schemamediaaffinitytype"></a>
<a id="schema_MediaAffinityType"></a>
<a id="tocSmediaaffinitytype"></a>
<a id="tocsmediaaffinitytype"></a>

```json
"unknown"
```

<h2 id="tocS_MediaAffinityTypeResolutionResult">MediaAffinityTypeResolutionResult</h2>
<!-- backwards compatibility -->
<a id="schemamediaaffinitytyperesolutionresult"></a>
<a id="schema_MediaAffinityTypeResolutionResult"></a>
<a id="tocSmediaaffinitytyperesolutionresult"></a>
<a id="tocsmediaaffinitytyperesolutionresult"></a>

```json
{
  "class": "MediaAffinityTypeResolutionResult",
  "needsValue": {},
  "notRequired": {},
  "unsupported": {},
  "confirmationRequired": {
    "mediaAffinityTypeToConfirm": "unknown"
  },
  "success": {
    "resolvedMediaAffinityType": "unknown"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|class|string|true|none|none|
|needsValue|object|false|none|none|
|notRequired|object|false|none|none|
|unsupported|object|false|none|none|
|class|string|true|none|none|
|confirmationRequired|object|false|none|none|
|success|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|class|MediaAffinityTypeResolutionResult|

<h2 id="tocS_MediaDestination">MediaDestination</h2>
<!-- backwards compatibility -->
<a id="schemamediadestination"></a>
<a id="schema_MediaDestination"></a>
<a id="tocSmediadestination"></a>
<a id="tocsmediadestination"></a>

```json
{
  "mediaDestinationType": "library"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mediaDestinationType|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|mediaDestinationType|library|
|mediaDestinationType|playlist|

<h2 id="tocS_MediaDestinationLibrary">MediaDestinationLibrary</h2>
<!-- backwards compatibility -->
<a id="schemamediadestinationlibrary"></a>
<a id="schema_MediaDestinationLibrary"></a>
<a id="tocSmediadestinationlibrary"></a>
<a id="tocsmediadestinationlibrary"></a>

```json
{
  "mediaDestinationType": "library"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mediaDestinationType|string|true|none|none|
|mediaDestinationType|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|mediaDestinationType|library|
|mediaDestinationType|playlist|
|mediaDestinationType|library|

<h2 id="tocS_MediaDestinationPlaylist">MediaDestinationPlaylist</h2>
<!-- backwards compatibility -->
<a id="schemamediadestinationplaylist"></a>
<a id="schema_MediaDestinationPlaylist"></a>
<a id="tocSmediadestinationplaylist"></a>
<a id="tocsmediadestinationplaylist"></a>

```json
{
  "mediaDestinationType": "playlist",
  "playlistName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mediaDestinationType|string|true|none|none|
|mediaDestinationType|string|true|none|none|
|playlistName|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|mediaDestinationType|library|
|mediaDestinationType|playlist|
|mediaDestinationType|playlist|

<h2 id="tocS_MediaItem">MediaItem</h2>
<!-- backwards compatibility -->
<a id="schemamediaitem"></a>
<a id="schema_MediaItem"></a>
<a id="tocSmediaitem"></a>
<a id="tocsmediaitem"></a>

```json
{
  "artist": "string",
  "identifier": "string",
  "title": "string",
  "type": "unknown"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|artist|string|false|read-only|none|
|identifier|string|true|none|none|
|title|string|false|read-only|none|
|type|[MediaItemType](#schemamediaitemtype)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|unknown|
|type|song|
|type|album|
|type|artist|
|type|genre|
|type|playlist|
|type|podcastShow|
|type|podcastEpisode|
|type|podcastPlaylist|
|type|musicStation|
|type|audioBook|
|type|movie|
|type|tvShow|
|type|tvShowEpisode|
|type|musicVideo|
|type|podcastStation|
|type|radioStation|
|type|station|
|type|music|
|type|algorithmicRadioStation|
|type|news|

<h2 id="tocS_MediaItemType">MediaItemType</h2>
<!-- backwards compatibility -->
<a id="schemamediaitemtype"></a>
<a id="schema_MediaItemType"></a>
<a id="tocSmediaitemtype"></a>
<a id="tocsmediaitemtype"></a>

```json
"unknown"
```

<h2 id="tocS_MediaReference">MediaReference</h2>
<!-- backwards compatibility -->
<a id="schemamediareference"></a>
<a id="schema_MediaReference"></a>
<a id="tocSmediareference"></a>
<a id="tocsmediareference"></a>

```json
"unknown"
```

<h2 id="tocS_MediaSearch">MediaSearch</h2>
<!-- backwards compatibility -->
<a id="schemamediasearch"></a>
<a id="schema_MediaSearch"></a>
<a id="tocSmediasearch"></a>
<a id="tocsmediasearch"></a>

```json
{
  "albumName": "string",
  "artistName": "string",
  "genreNames": [
    "string"
  ],
  "mediaIdentifier": "string",
  "mediaName": "string",
  "mediaType": "unknown",
  "moodNames": [
    "string"
  ],
  "reference": "unknown",
  "releaseDate": {
    "endDateComponents": "1980",
    "startDateComponents": "1980"
  },
  "sortOrder": "unknown"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|albumName|string|false|none|none|
|artistName|string|false|none|none|
|genreNames|[string]|false|none|none|
|mediaIdentifier|string|false|none|none|
|mediaName|string|false|none|none|
|mediaType|[MediaItemType](#schemamediaitemtype)|false|none|none|
|moodNames|[string]|false|none|none|
|reference|[MediaReference](#schemamediareference)|false|none|none|
|releaseDate|[DateComponentsRange](#schemadatecomponentsrange)|false|none|none|
|sortOrder|[MediaSortOrder](#schemamediasortorder)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|mediaType|unknown|
|mediaType|song|
|mediaType|album|
|mediaType|artist|
|mediaType|genre|
|mediaType|playlist|
|mediaType|podcastShow|
|mediaType|podcastEpisode|
|mediaType|podcastPlaylist|
|mediaType|musicStation|
|mediaType|audioBook|
|mediaType|movie|
|mediaType|tvShow|
|mediaType|tvShowEpisode|
|mediaType|musicVideo|
|mediaType|podcastStation|
|mediaType|radioStation|
|mediaType|station|
|mediaType|music|
|mediaType|algorithmicRadioStation|
|mediaType|news|
|reference|unknown|
|reference|currentlyPlaying|
|reference|my|
|sortOrder|unknown|
|sortOrder|newest|
|sortOrder|oldest|
|sortOrder|best|
|sortOrder|worst|
|sortOrder|popular|
|sortOrder|unpopular|
|sortOrder|trending|
|sortOrder|recommended|

<h2 id="tocS_MediaSortOrder">MediaSortOrder</h2>
<!-- backwards compatibility -->
<a id="schemamediasortorder"></a>
<a id="schema_MediaSortOrder"></a>
<a id="tocSmediasortorder"></a>
<a id="tocsmediasortorder"></a>

```json
"unknown"
```

<h2 id="tocS_PlayMediaControl">PlayMediaControl</h2>
<!-- backwards compatibility -->
<a id="schemaplaymediacontrol"></a>
<a id="schema_PlayMediaControl"></a>
<a id="tocSplaymediacontrol"></a>
<a id="tocsplaymediacontrol"></a>

```json
{
  "activity": {
    "playElapsed": 5,
    "playElapsedInterval": 5,
    "playPaused": 5
  },
  "commands": {
    "bookmarkTrack": true,
    "dislikeTrack": true,
    "likeTrack": true,
    "nextTrack": true,
    "preferSkipBackward": true,
    "preferSkipForward": true,
    "previousTrack": true,
    "seekToPlaybackPosition": true,
    "skipBackward": true,
    "skipForward": true
  },
  "scheme": "custom"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activity|[PlayMediaControlActivity](#schemaplaymediacontrolactivity)|false|none|none|
|commands|[PlayMediaControlCommandSet](#schemaplaymediacontrolcommandset)|false|none|none|
|scheme|[PlayMediaControlScheme](#schemaplaymediacontrolscheme)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|scheme|custom|
|scheme|onDemand|
|scheme|internetRadio|
|scheme|liveStreaming|
|scheme|audioBook|
|scheme|podcast|
|scheme|advertisement|

<h2 id="tocS_PlayMediaControlActivity">PlayMediaControlActivity</h2>
<!-- backwards compatibility -->
<a id="schemaplaymediacontrolactivity"></a>
<a id="schema_PlayMediaControlActivity"></a>
<a id="tocSplaymediacontrolactivity"></a>
<a id="tocsplaymediacontrolactivity"></a>

```json
{
  "playElapsed": 5,
  "playElapsedInterval": 5,
  "playPaused": 5
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|playElapsed|integer(uint32)|false|none|none|
|playElapsedInterval|integer(uint32)|false|none|none|
|playPaused|integer(uint32)|false|none|none|

<h2 id="tocS_PlayMediaControlCommandSet">PlayMediaControlCommandSet</h2>
<!-- backwards compatibility -->
<a id="schemaplaymediacontrolcommandset"></a>
<a id="schema_PlayMediaControlCommandSet"></a>
<a id="tocSplaymediacontrolcommandset"></a>
<a id="tocsplaymediacontrolcommandset"></a>

```json
{
  "bookmarkTrack": true,
  "dislikeTrack": true,
  "likeTrack": true,
  "nextTrack": true,
  "preferSkipBackward": true,
  "preferSkipForward": true,
  "previousTrack": true,
  "seekToPlaybackPosition": true,
  "skipBackward": true,
  "skipForward": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bookmarkTrack|boolean|false|none|none|
|dislikeTrack|boolean|false|none|none|
|likeTrack|boolean|false|none|none|
|nextTrack|boolean|false|none|none|
|preferSkipBackward|boolean|false|none|none|
|preferSkipForward|boolean|false|none|none|
|previousTrack|boolean|false|none|none|
|seekToPlaybackPosition|boolean|false|none|none|
|skipBackward|boolean|false|none|none|
|skipForward|boolean|false|none|none|

<h2 id="tocS_PlayMediaControlScheme">PlayMediaControlScheme</h2>
<!-- backwards compatibility -->
<a id="schemaplaymediacontrolscheme"></a>
<a id="schema_PlayMediaControlScheme"></a>
<a id="tocSplaymediacontrolscheme"></a>
<a id="tocsplaymediacontrolscheme"></a>

```json
"custom"
```

<h2 id="tocS_PlayMediaIntent">PlayMediaIntent</h2>
<!-- backwards compatibility -->
<a id="schemaplaymediaintent"></a>
<a id="schema_PlayMediaIntent"></a>
<a id="tocSplaymediaintent"></a>
<a id="tocsplaymediaintent"></a>

```json
{
  "class": "PlayMediaIntent",
  "identifier": "string",
  "mediaItems": [
    {
      "artist": "string",
      "identifier": "string",
      "title": "string",
      "type": "unknown"
    }
  ],
  "mediaSearch": {
    "albumName": "string",
    "artistName": "string",
    "genreNames": [
      "string"
    ],
    "mediaIdentifier": "string",
    "mediaName": "string",
    "mediaType": "unknown",
    "moodNames": [
      "string"
    ],
    "reference": "unknown",
    "releaseDate": {
      "endDateComponents": "1980",
      "startDateComponents": "1980"
    },
    "sortOrder": "unknown"
  },
  "playShuffled": true,
  "playbackQueueLocation": "unknown",
  "playbackRepeatMode": "unknown",
  "playbackSpeed": 0,
  "resumePlayback": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|class|string|true|none|none|
|identifier|string|true|none|none|
|class|string|true|none|none|
|mediaItems|[[MediaItem](#schemamediaitem)]|false|none|none|
|mediaSearch|[MediaSearch](#schemamediasearch)|false|none|none|
|playShuffled|boolean|false|none|none|
|playbackQueueLocation|[PlaybackQueueLocation](#schemaplaybackqueuelocation)|false|none|none|
|playbackRepeatMode|[PlaybackRepeatMode](#schemaplaybackrepeatmode)|false|none|none|
|playbackSpeed|number(double)|false|none|none|
|resumePlayback|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|class|PlayMediaIntent|
|playbackQueueLocation|unknown|
|playbackQueueLocation|now|
|playbackQueueLocation|next|
|playbackQueueLocation|later|
|playbackRepeatMode|unknown|
|playbackRepeatMode|none|
|playbackRepeatMode|all|
|playbackRepeatMode|one|

<h2 id="tocS_PlayMediaIntentHandlingHandleInvocationResponse">PlayMediaIntentHandlingHandleInvocationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaplaymediaintenthandlinghandleinvocationresponse"></a>
<a id="schema_PlayMediaIntentHandlingHandleInvocationResponse"></a>
<a id="tocSplaymediaintenthandlinghandleinvocationresponse"></a>
<a id="tocsplaymediaintenthandlinghandleinvocationresponse"></a>

```json
{
  "debug": "http://example.com",
  "method": "PlayMediaIntentHandling.handle",
  "metrics": {
    "completed": "1970-01-01T00:00:00Z",
    "duration": 0,
    "received": "1970-01-01T00:00:00Z"
  },
  "result": {
    "response": {
      "class": "PlayMediaIntentResponse",
      "userActivity": {
        "activityType": "com.mediastreamingservice.playmedia",
        "persistentIdentifier": "string",
        "title": "string",
        "userInfo": {},
        "version": "string"
      },
      "code": "unspecified"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|debug|[ServiceDebugReference](#schemaservicedebugreference)|false|none|none|
|method|string|true|none|none|
|metrics|[ExecutionMetrics](#schemaexecutionmetrics)|false|none|none|
|result|object \| null|true|none|none|
|method|string|true|none|none|
|result|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|method|PlayMediaIntentHandling.handle|

<h2 id="tocS_PlayMediaIntentHandlingInvocation">PlayMediaIntentHandlingInvocation</h2>
<!-- backwards compatibility -->
<a id="schemaplaymediaintenthandlinginvocation"></a>
<a id="schema_PlayMediaIntentHandlingInvocation"></a>
<a id="tocSplaymediaintenthandlinginvocation"></a>
<a id="tocsplaymediaintenthandlinginvocation"></a>

```json
{
  "method": "PlayMediaIntentHandling.resolveMediaItems",
  "params": {
    "intent": {
      "class": "PlayMediaIntent",
      "identifier": "string",
      "mediaItems": [
        {
          "artist": "string",
          "identifier": "string",
          "title": "string",
          "type": "unknown"
        }
      ],
      "mediaSearch": {
        "albumName": "string",
        "artistName": "string",
        "genreNames": [
          "string"
        ],
        "mediaIdentifier": "string",
        "mediaName": "string",
        "mediaType": "unknown",
        "moodNames": [
          "string"
        ],
        "reference": "unknown",
        "releaseDate": {
          "endDateComponents": "1980",
          "startDateComponents": "1980"
        },
        "sortOrder": "unknown"
      },
      "playShuffled": true,
      "playbackQueueLocation": "unknown",
      "playbackRepeatMode": "unknown",
      "playbackSpeed": 0,
      "resumePlayback": true
    }
  },
  "session": {
    "constraints": {
      "allowExplicitContent": true,
      "maximumQueueSegmentItemCount": 1000,
      "updateUserTasteProfile": true
    },
    "deadline": "1970-01-01T00:00:00Z",
    "identifier": "string",
    "playerContext": {
      "activityIdentifier": "string",
      "contentIdentifier": "j15f8A3cuU0GG",
      "offsetInMillis": 10942,
      "playbackSpeed": 1,
      "queueIdentifier": "u104823q8201"
    },
    "requested": "1970-01-01T00:00:00Z",
    "version": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|method|string|true|none|none|
|params|object \| null|true|none|none|
|session|[Session](#schemasession)|false|none|none|
|method|string|true|none|none|
|params|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|method|PlayMediaIntentHandling.resolveMediaItems|
|method|PlayMediaIntentHandling.resolvePlayShuffled|
|method|PlayMediaIntentHandling.resolvePlaybackQueueLocation|
|method|PlayMediaIntentHandling.resolvePlaybackRepeatMode|
|method|PlayMediaIntentHandling.resolveResumePlayback|
|method|PlayMediaIntentHandling.handle|

<h2 id="tocS_PlayMediaIntentHandlingInvocationResponse">PlayMediaIntentHandlingInvocationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaplaymediaintenthandlinginvocationresponse"></a>
<a id="schema_PlayMediaIntentHandlingInvocationResponse"></a>
<a id="tocSplaymediaintenthandlinginvocationresponse"></a>
<a id="tocsplaymediaintenthandlinginvocationresponse"></a>

```json
{
  "debug": "http://example.com",
  "method": "PlayMediaIntentHandling.resolveMediaItems",
  "metrics": {
    "completed": "1970-01-01T00:00:00Z",
    "duration": 0,
    "received": "1970-01-01T00:00:00Z"
  },
  "result": {
    "resolutionResult": [
      {
        "class": "PlayMediaMediaItemResolutionResult",
        "needsValue": {},
        "notRequired": {},
        "unsupported": {
          "reason": "loginRequired"
        },
        "confirmationRequired": {
          "mediaItemToConfirm": {
            "artist": "string",
            "identifier": "string",
            "title": "string",
            "type": "unknown"
          }
        },
        "disambiguation": {
          "mediaItemsToDisambiguate": [
            {
              "artist": "string",
              "identifier": "string",
              "title": "string",
              "type": "unknown"
            },
            {
              "artist": "string",
              "identifier": "string",
              "title": "string",
              "type": "unknown"
            }
          ]
        },
        "success": {
          "resolvedMediaItem": {
            "artist": "string",
            "identifier": "string",
            "title": "string",
            "type": "unknown"
          }
        }
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[PlayMediaIntentHandlingResolveMediaItemsInvocationResponse](#schemaplaymediaintenthandlingresolvemediaitemsinvocationresponse)|false|none|none|
|*oneOf*|[PlayMediaIntentHandlingResolvePlayShuffledInvocationResponse](#schemaplaymediaintenthandlingresolveplayshuffledinvocationresponse)|false|none|none|
|*oneOf*|[PlayMediaIntentHandlingResolvePlaybackQueueLocationInvocationResponse](#schemaplaymediaintenthandlingresolveplaybackqueuelocationinvocationresponse)|false|none|none|
|*oneOf*|[PlayMediaIntentHandlingResolvePlaybackRepeatModeInvocationResponse](#schemaplaymediaintenthandlingresolveplaybackrepeatmodeinvocationresponse)|false|none|none|
|*oneOf*|[PlayMediaIntentHandlingResolveResumePlaybackInvocationResponse](#schemaplaymediaintenthandlingresolveresumeplaybackinvocationresponse)|false|none|none|
|*oneOf*|[PlayMediaIntentHandlingHandleInvocationResponse](#schemaplaymediaintenthandlinghandleinvocationresponse)|false|none|none|
|*oneOf*|[ProtocolExceptionInvocationResponse](#schemaprotocolexceptioninvocationresponse)|false|none|none|

<h2 id="tocS_PlayMediaIntentHandlingResolveMediaItemsInvocationResponse">PlayMediaIntentHandlingResolveMediaItemsInvocationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaplaymediaintenthandlingresolvemediaitemsinvocationresponse"></a>
<a id="schema_PlayMediaIntentHandlingResolveMediaItemsInvocationResponse"></a>
<a id="tocSplaymediaintenthandlingresolvemediaitemsinvocationresponse"></a>
<a id="tocsplaymediaintenthandlingresolvemediaitemsinvocationresponse"></a>

```json
{
  "debug": "http://example.com",
  "method": "PlayMediaIntentHandling.resolveMediaItems",
  "metrics": {
    "completed": "1970-01-01T00:00:00Z",
    "duration": 0,
    "received": "1970-01-01T00:00:00Z"
  },
  "result": {
    "resolutionResult": [
      {
        "class": "PlayMediaMediaItemResolutionResult",
        "needsValue": {},
        "notRequired": {},
        "unsupported": {
          "reason": "loginRequired"
        },
        "confirmationRequired": {
          "mediaItemToConfirm": {
            "artist": "string",
            "identifier": "string",
            "title": "string",
            "type": "unknown"
          }
        },
        "disambiguation": {
          "mediaItemsToDisambiguate": [
            {
              "artist": "string",
              "identifier": "string",
              "title": "string",
              "type": "unknown"
            },
            {
              "artist": "string",
              "identifier": "string",
              "title": "string",
              "type": "unknown"
            }
          ]
        },
        "success": {
          "resolvedMediaItem": {
            "artist": "string",
            "identifier": "string",
            "title": "string",
            "type": "unknown"
          }
        }
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|debug|[ServiceDebugReference](#schemaservicedebugreference)|false|none|none|
|method|string|true|none|none|
|metrics|[ExecutionMetrics](#schemaexecutionmetrics)|false|none|none|
|result|object \| null|true|none|none|
|method|string|true|none|none|
|result|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|method|PlayMediaIntentHandling.resolveMediaItems|

<h2 id="tocS_PlayMediaIntentHandlingResolvePlayShuffledInvocationResponse">PlayMediaIntentHandlingResolvePlayShuffledInvocationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaplaymediaintenthandlingresolveplayshuffledinvocationresponse"></a>
<a id="schema_PlayMediaIntentHandlingResolvePlayShuffledInvocationResponse"></a>
<a id="tocSplaymediaintenthandlingresolveplayshuffledinvocationresponse"></a>
<a id="tocsplaymediaintenthandlingresolveplayshuffledinvocationresponse"></a>

```json
{
  "debug": "http://example.com",
  "method": "PlayMediaIntentHandling.resolvePlayShuffled",
  "metrics": {
    "completed": "1970-01-01T00:00:00Z",
    "duration": 0,
    "received": "1970-01-01T00:00:00Z"
  },
  "result": {
    "resolutionResult": {
      "class": "BooleanResolutionResult",
      "needsValue": {},
      "notRequired": {},
      "unsupported": {},
      "confirmationRequired": {
        "valueToConfirm": true
      },
      "success": {
        "resolvedValue": true
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|debug|[ServiceDebugReference](#schemaservicedebugreference)|false|none|none|
|method|string|true|none|none|
|metrics|[ExecutionMetrics](#schemaexecutionmetrics)|false|none|none|
|result|object \| null|true|none|none|
|method|string|true|none|none|
|result|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|method|PlayMediaIntentHandling.resolvePlayShuffled|

<h2 id="tocS_PlayMediaIntentHandlingResolvePlaybackQueueLocationInvocationResponse">PlayMediaIntentHandlingResolvePlaybackQueueLocationInvocationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaplaymediaintenthandlingresolveplaybackqueuelocationinvocationresponse"></a>
<a id="schema_PlayMediaIntentHandlingResolvePlaybackQueueLocationInvocationResponse"></a>
<a id="tocSplaymediaintenthandlingresolveplaybackqueuelocationinvocationresponse"></a>
<a id="tocsplaymediaintenthandlingresolveplaybackqueuelocationinvocationresponse"></a>

```json
{
  "debug": "http://example.com",
  "method": "PlayMediaIntentHandling.resolvePlaybackQueueLocation",
  "metrics": {
    "completed": "1970-01-01T00:00:00Z",
    "duration": 0,
    "received": "1970-01-01T00:00:00Z"
  },
  "result": {
    "resolutionResult": {
      "class": "PlaybackQueueLocationResolutionResult",
      "needsValue": {},
      "notRequired": {},
      "unsupported": {},
      "confirmationRequired": {
        "playbackQueueLocationToConfirm": "unknown"
      },
      "success": {
        "resolvedPlaybackQueueLocation": "unknown"
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|debug|[ServiceDebugReference](#schemaservicedebugreference)|false|none|none|
|method|string|true|none|none|
|metrics|[ExecutionMetrics](#schemaexecutionmetrics)|false|none|none|
|result|object \| null|true|none|none|
|method|string|true|none|none|
|result|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|method|PlayMediaIntentHandling.resolvePlaybackQueueLocation|

<h2 id="tocS_PlayMediaIntentHandlingResolvePlaybackRepeatModeInvocationResponse">PlayMediaIntentHandlingResolvePlaybackRepeatModeInvocationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaplaymediaintenthandlingresolveplaybackrepeatmodeinvocationresponse"></a>
<a id="schema_PlayMediaIntentHandlingResolvePlaybackRepeatModeInvocationResponse"></a>
<a id="tocSplaymediaintenthandlingresolveplaybackrepeatmodeinvocationresponse"></a>
<a id="tocsplaymediaintenthandlingresolveplaybackrepeatmodeinvocationresponse"></a>

```json
{
  "debug": "http://example.com",
  "method": "PlayMediaIntentHandling.resolvePlaybackRepeatMode",
  "metrics": {
    "completed": "1970-01-01T00:00:00Z",
    "duration": 0,
    "received": "1970-01-01T00:00:00Z"
  },
  "result": {
    "resolutionResult": {
      "class": "PlaybackRepeatModeResolutionResult",
      "needsValue": {},
      "notRequired": {},
      "unsupported": {},
      "confirmationRequired": {
        "playbackRepeatModeToConfirm": "unknown"
      },
      "success": {
        "resolvedPlaybackRepeatMode": "unknown"
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|debug|[ServiceDebugReference](#schemaservicedebugreference)|false|none|none|
|method|string|true|none|none|
|metrics|[ExecutionMetrics](#schemaexecutionmetrics)|false|none|none|
|result|object \| null|true|none|none|
|method|string|true|none|none|
|result|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|method|PlayMediaIntentHandling.resolvePlaybackRepeatMode|

<h2 id="tocS_PlayMediaIntentHandlingResolveResumePlaybackInvocationResponse">PlayMediaIntentHandlingResolveResumePlaybackInvocationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaplaymediaintenthandlingresolveresumeplaybackinvocationresponse"></a>
<a id="schema_PlayMediaIntentHandlingResolveResumePlaybackInvocationResponse"></a>
<a id="tocSplaymediaintenthandlingresolveresumeplaybackinvocationresponse"></a>
<a id="tocsplaymediaintenthandlingresolveresumeplaybackinvocationresponse"></a>

```json
{
  "debug": "http://example.com",
  "method": "PlayMediaIntentHandling.resolveResumePlayback",
  "metrics": {
    "completed": "1970-01-01T00:00:00Z",
    "duration": 0,
    "received": "1970-01-01T00:00:00Z"
  },
  "result": {
    "resolutionResult": {
      "class": "BooleanResolutionResult",
      "needsValue": {},
      "notRequired": {},
      "unsupported": {},
      "confirmationRequired": {
        "valueToConfirm": true
      },
      "success": {
        "resolvedValue": true
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|debug|[ServiceDebugReference](#schemaservicedebugreference)|false|none|none|
|method|string|true|none|none|
|metrics|[ExecutionMetrics](#schemaexecutionmetrics)|false|none|none|
|result|object \| null|true|none|none|
|method|string|true|none|none|
|result|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|method|PlayMediaIntentHandling.resolveResumePlayback|

<h2 id="tocS_PlayMediaIntentResponse">PlayMediaIntentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaplaymediaintentresponse"></a>
<a id="schema_PlayMediaIntentResponse"></a>
<a id="tocSplaymediaintentresponse"></a>
<a id="tocsplaymediaintentresponse"></a>

```json
{
  "class": "PlayMediaIntentResponse",
  "userActivity": {
    "activityType": "com.mediastreamingservice.playmedia",
    "persistentIdentifier": "string",
    "title": "string",
    "userInfo": {},
    "version": "string"
  },
  "code": "unspecified"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|class|string|true|none|none|
|userActivity|[UserActivity](#schemauseractivity)|true|none|none|
|class|string|true|none|none|
|code|[PlayMediaIntentResponseCode](#schemaplaymediaintentresponsecode)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|class|PlayMediaIntentResponse|
|code|unspecified|
|code|success|
|code|failure|
|code|failureRequiringAppLaunch|
|code|failureUnknownMediaType|
|code|failureNoUnplayedContent|
|code|failureRestrictedContent|

<h2 id="tocS_PlayMediaIntentResponseCode">PlayMediaIntentResponseCode</h2>
<!-- backwards compatibility -->
<a id="schemaplaymediaintentresponsecode"></a>
<a id="schema_PlayMediaIntentResponseCode"></a>
<a id="tocSplaymediaintentresponsecode"></a>
<a id="tocsplaymediaintentresponsecode"></a>

```json
"unspecified"
```

<h2 id="tocS_PlayMediaMediaItemResolutionResult">PlayMediaMediaItemResolutionResult</h2>
<!-- backwards compatibility -->
<a id="schemaplaymediamediaitemresolutionresult"></a>
<a id="schema_PlayMediaMediaItemResolutionResult"></a>
<a id="tocSplaymediamediaitemresolutionresult"></a>
<a id="tocsplaymediamediaitemresolutionresult"></a>

```json
{
  "class": "PlayMediaMediaItemResolutionResult",
  "needsValue": {},
  "notRequired": {},
  "unsupported": {
    "reason": "loginRequired"
  },
  "confirmationRequired": {
    "mediaItemToConfirm": {
      "artist": "string",
      "identifier": "string",
      "title": "string",
      "type": "unknown"
    }
  },
  "disambiguation": {
    "mediaItemsToDisambiguate": [
      {
        "artist": "string",
        "identifier": "string",
        "title": "string",
        "type": "unknown"
      },
      {
        "artist": "string",
        "identifier": "string",
        "title": "string",
        "type": "unknown"
      }
    ]
  },
  "success": {
    "resolvedMediaItem": {
      "artist": "string",
      "identifier": "string",
      "title": "string",
      "type": "unknown"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|class|string|true|none|none|
|needsValue|object|false|none|none|
|notRequired|object|false|none|none|
|unsupported|object|false|none|none|
|class|string|true|none|none|
|confirmationRequired|object|false|none|none|
|disambiguation|object|false|none|none|
|success|object|false|none|none|
|unsupported|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|class|PlayMediaMediaItemResolutionResult|

<h2 id="tocS_PlayMediaMediaItemUnsupportedReason">PlayMediaMediaItemUnsupportedReason</h2>
<!-- backwards compatibility -->
<a id="schemaplaymediamediaitemunsupportedreason"></a>
<a id="schema_PlayMediaMediaItemUnsupportedReason"></a>
<a id="tocSplaymediamediaitemunsupportedreason"></a>
<a id="tocsplaymediamediaitemunsupportedreason"></a>

```json
"loginRequired"
```

<h2 id="tocS_PlayMediaRequest">PlayMediaRequest</h2>
<!-- backwards compatibility -->
<a id="schemaplaymediarequest"></a>
<a id="schema_PlayMediaRequest"></a>
<a id="tocSplaymediarequest"></a>
<a id="tocsplaymediarequest"></a>

```json
{
  "constraints": {
    "allowExplicitContent": true,
    "maximumQueueSegmentItemCount": 1000,
    "updateUserTasteProfile": true
  },
  "userActivity": {
    "activityType": "com.mediastreamingservice.playmedia",
    "persistentIdentifier": "string",
    "title": "string",
    "userInfo": {},
    "version": "string"
  },
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|constraints|[Constraints](#schemaconstraints)|true|none|none|
|userActivity|[UserActivity](#schemauseractivity)|true|none|none|
|version|string|true|none|none|

<h2 id="tocS_PlaybackQueueLocation">PlaybackQueueLocation</h2>
<!-- backwards compatibility -->
<a id="schemaplaybackqueuelocation"></a>
<a id="schema_PlaybackQueueLocation"></a>
<a id="tocSplaybackqueuelocation"></a>
<a id="tocsplaybackqueuelocation"></a>

```json
"unknown"
```

<h2 id="tocS_PlaybackQueueLocationResolutionResult">PlaybackQueueLocationResolutionResult</h2>
<!-- backwards compatibility -->
<a id="schemaplaybackqueuelocationresolutionresult"></a>
<a id="schema_PlaybackQueueLocationResolutionResult"></a>
<a id="tocSplaybackqueuelocationresolutionresult"></a>
<a id="tocsplaybackqueuelocationresolutionresult"></a>

```json
{
  "class": "PlaybackQueueLocationResolutionResult",
  "needsValue": {},
  "notRequired": {},
  "unsupported": {},
  "confirmationRequired": {
    "playbackQueueLocationToConfirm": "unknown"
  },
  "success": {
    "resolvedPlaybackQueueLocation": "unknown"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|class|string|true|none|none|
|needsValue|object|false|none|none|
|notRequired|object|false|none|none|
|unsupported|object|false|none|none|
|class|string|true|none|none|
|confirmationRequired|object|false|none|none|
|success|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|class|PlaybackQueueLocationResolutionResult|

<h2 id="tocS_PlaybackRepeatMode">PlaybackRepeatMode</h2>
<!-- backwards compatibility -->
<a id="schemaplaybackrepeatmode"></a>
<a id="schema_PlaybackRepeatMode"></a>
<a id="tocSplaybackrepeatmode"></a>
<a id="tocsplaybackrepeatmode"></a>

```json
"unknown"
```

<h2 id="tocS_PlaybackRepeatModeResolutionResult">PlaybackRepeatModeResolutionResult</h2>
<!-- backwards compatibility -->
<a id="schemaplaybackrepeatmoderesolutionresult"></a>
<a id="schema_PlaybackRepeatModeResolutionResult"></a>
<a id="tocSplaybackrepeatmoderesolutionresult"></a>
<a id="tocsplaybackrepeatmoderesolutionresult"></a>

```json
{
  "class": "PlaybackRepeatModeResolutionResult",
  "needsValue": {},
  "notRequired": {},
  "unsupported": {},
  "confirmationRequired": {
    "playbackRepeatModeToConfirm": "unknown"
  },
  "success": {
    "resolvedPlaybackRepeatMode": "unknown"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|class|string|true|none|none|
|needsValue|object|false|none|none|
|notRequired|object|false|none|none|
|unsupported|object|false|none|none|
|class|string|true|none|none|
|confirmationRequired|object|false|none|none|
|success|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|class|PlaybackRepeatModeResolutionResult|

<h2 id="tocS_PlayerContext">PlayerContext</h2>
<!-- backwards compatibility -->
<a id="schemaplayercontext"></a>
<a id="schema_PlayerContext"></a>
<a id="tocSplayercontext"></a>
<a id="tocsplayercontext"></a>

```json
{
  "activityIdentifier": "string",
  "contentIdentifier": "j15f8A3cuU0GG",
  "offsetInMillis": 10942,
  "playbackSpeed": 1,
  "queueIdentifier": "u104823q8201"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activityIdentifier|string|false|none|none|
|contentIdentifier|[ContentIdentifier](#schemacontentidentifier)|false|none|none|
|offsetInMillis|integer(int64)|false|none|none|
|playbackSpeed|number(double)|false|none|none|
|queueIdentifier|[QueueIdentifier](#schemaqueueidentifier)|false|none|none|

<h2 id="tocS_ProtocolException">ProtocolException</h2>
<!-- backwards compatibility -->
<a id="schemaprotocolexception"></a>
<a id="schema_ProtocolException"></a>
<a id="tocSprotocolexception"></a>
<a id="tocsprotocolexception"></a>

```json
{
  "code": 0,
  "methodIndex": 0,
  "methodName": "string",
  "reason": "unsupported",
  "retryWithDelay": -1,
  "trace": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int64)|false|none|none|
|methodIndex|integer(uint32)|false|none|none|
|methodName|string|false|none|none|
|reason|[ProtocolExceptionReason](#schemaprotocolexceptionreason)|true|none|none|
|retryWithDelay|number(float)|false|none|none|
|trace|[string]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|reason|unsupported|
|reason|unauthorized|
|reason|unexpected|
|reason|invalid|
|reason|unparseable|
|reason|deprecated|
|reason|internal|
|reason|complex|
|reason|busy|

<h2 id="tocS_ProtocolExceptionInvocationResponse">ProtocolExceptionInvocationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaprotocolexceptioninvocationresponse"></a>
<a id="schema_ProtocolExceptionInvocationResponse"></a>
<a id="tocSprotocolexceptioninvocationresponse"></a>
<a id="tocsprotocolexceptioninvocationresponse"></a>

```json
{
  "debug": "http://example.com",
  "method": "ProtocolException",
  "metrics": {
    "completed": "1970-01-01T00:00:00Z",
    "duration": 0,
    "received": "1970-01-01T00:00:00Z"
  },
  "result": {},
  "exception": {
    "code": 0,
    "methodIndex": 0,
    "methodName": "string",
    "reason": "unsupported",
    "retryWithDelay": -1,
    "trace": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|debug|[ServiceDebugReference](#schemaservicedebugreference)|false|none|none|
|method|string|true|none|none|
|metrics|[ExecutionMetrics](#schemaexecutionmetrics)|false|none|none|
|result|object \| null|true|none|none|
|exception|[ProtocolException](#schemaprotocolexception)|true|none|none|
|method|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|method|ProtocolException|

<h2 id="tocS_ProtocolExceptionReason">ProtocolExceptionReason</h2>
<!-- backwards compatibility -->
<a id="schemaprotocolexceptionreason"></a>
<a id="schema_ProtocolExceptionReason"></a>
<a id="tocSprotocolexceptionreason"></a>
<a id="tocsprotocolexceptionreason"></a>

```json
"unsupported"
```

<h2 id="tocS_Queue">Queue</h2>
<!-- backwards compatibility -->
<a id="schemaqueue"></a>
<a id="schema_Queue"></a>
<a id="tocSqueue"></a>
<a id="tocsqueue"></a>

```json
{
  "content": [
    {
      "attributes": {
        "albumName": "Blood On the Tracks",
        "artistName": "Bob Dylan",
        "artwork": {
          "url": "string"
        },
        "composerName": "B. Dylan",
        "durationInMillis": 0,
        "genreNames": [
          "string"
        ],
        "name": "Tangled Up In Blue",
        "trackNumber": 1
      },
      "control": "song",
      "identifier": "j15f8A3cuU0GG",
      "isLive": true,
      "playIndex": 0,
      "url": "string"
    }
  ],
  "contentItemsCount": 0,
  "controls": {
    "default": {
      "activity": {
        "playElapsed": 5,
        "playElapsedInterval": 5,
        "playPaused": 5
      },
      "commands": {
        "bookmarkTrack": true,
        "dislikeTrack": true,
        "likeTrack": true,
        "nextTrack": true,
        "preferSkipBackward": true,
        "preferSkipForward": true,
        "previousTrack": true,
        "seekToPlaybackPosition": true,
        "skipBackward": true,
        "skipForward": true
      },
      "scheme": "custom"
    },
    "property1": {
      "activity": {
        "playElapsed": 5,
        "playElapsedInterval": 5,
        "playPaused": 5
      },
      "commands": {
        "bookmarkTrack": true,
        "dislikeTrack": true,
        "likeTrack": true,
        "nextTrack": true,
        "preferSkipBackward": true,
        "preferSkipForward": true,
        "previousTrack": true,
        "seekToPlaybackPosition": true,
        "skipBackward": true,
        "skipForward": true
      },
      "scheme": "custom"
    },
    "property2": {
      "activity": {
        "playElapsed": 5,
        "playElapsedInterval": 5,
        "playPaused": 5
      },
      "commands": {
        "bookmarkTrack": true,
        "dislikeTrack": true,
        "likeTrack": true,
        "nextTrack": true,
        "preferSkipBackward": true,
        "preferSkipForward": true,
        "previousTrack": true,
        "seekToPlaybackPosition": true,
        "skipBackward": true,
        "skipForward": true
      },
      "scheme": "custom"
    }
  },
  "identifier": "u104823q8201",
  "insertPointer": {
    "afterIdentifier": "j15f8A3cuU0GG",
    "replace": false
  },
  "nextContentUrl": "string",
  "playPointer": {
    "contentIdentifier": "j15f8A3cuU0GG",
    "offsetInMillis": 10942
  },
  "prerollSeconds": 0,
  "previousContentUrl": "string",
  "skipsRemaining": 0,
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[Content](#schemacontent)]|true|none|none|
|contentItemsCount|integer(uint32) \| null|false|none|none|
|controls|[QueueControlMapping](#schemaqueuecontrolmapping)|false|none|none|
|identifier|[QueueIdentifier](#schemaqueueidentifier)|true|none|none|
|insertPointer|[QueueInsertPointer](#schemaqueueinsertpointer)|false|none|none|
|nextContentUrl|string \| null|false|none|none|
|playPointer|[QueuePlayPointer](#schemaqueueplaypointer)|false|none|none|
|prerollSeconds|number(double)|false|none|none|
|previousContentUrl|string \| null|false|none|none|
|skipsRemaining|integer(uint32) \| null|false|none|none|
|version|string|true|none|none|

<h2 id="tocS_QueueActivityReportEvent">QueueActivityReportEvent</h2>
<!-- backwards compatibility -->
<a id="schemaqueueactivityreportevent"></a>
<a id="schema_QueueActivityReportEvent"></a>
<a id="tocSqueueactivityreportevent"></a>
<a id="tocsqueueactivityreportevent"></a>

```json
"local.playing.elapsed"
```

<h2 id="tocS_QueueControlMapping">QueueControlMapping</h2>
<!-- backwards compatibility -->
<a id="schemaqueuecontrolmapping"></a>
<a id="schema_QueueControlMapping"></a>
<a id="tocSqueuecontrolmapping"></a>
<a id="tocsqueuecontrolmapping"></a>

```json
{
  "default": {
    "activity": {
      "playElapsed": 5,
      "playElapsedInterval": 5,
      "playPaused": 5
    },
    "commands": {
      "bookmarkTrack": true,
      "dislikeTrack": true,
      "likeTrack": true,
      "nextTrack": true,
      "preferSkipBackward": true,
      "preferSkipForward": true,
      "previousTrack": true,
      "seekToPlaybackPosition": true,
      "skipBackward": true,
      "skipForward": true
    },
    "scheme": "custom"
  },
  "property1": {
    "activity": {
      "playElapsed": 5,
      "playElapsedInterval": 5,
      "playPaused": 5
    },
    "commands": {
      "bookmarkTrack": true,
      "dislikeTrack": true,
      "likeTrack": true,
      "nextTrack": true,
      "preferSkipBackward": true,
      "preferSkipForward": true,
      "previousTrack": true,
      "seekToPlaybackPosition": true,
      "skipBackward": true,
      "skipForward": true
    },
    "scheme": "custom"
  },
  "property2": {
    "activity": {
      "playElapsed": 5,
      "playElapsedInterval": 5,
      "playPaused": 5
    },
    "commands": {
      "bookmarkTrack": true,
      "dislikeTrack": true,
      "likeTrack": true,
      "nextTrack": true,
      "preferSkipBackward": true,
      "preferSkipForward": true,
      "previousTrack": true,
      "seekToPlaybackPosition": true,
      "skipBackward": true,
      "skipForward": true
    },
    "scheme": "custom"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|default|[PlayMediaControl](#schemaplaymediacontrol)|true|none|none|
|**additionalProperties**|[PlayMediaControl](#schemaplaymediacontrol)|false|none|none|

<h2 id="tocS_QueueIdentifier">QueueIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaqueueidentifier"></a>
<a id="schema_QueueIdentifier"></a>
<a id="tocSqueueidentifier"></a>
<a id="tocsqueueidentifier"></a>

```json
"u104823q8201"
```

<h2 id="tocS_QueueInsertPointer">QueueInsertPointer</h2>
<!-- backwards compatibility -->
<a id="schemaqueueinsertpointer"></a>
<a id="schema_QueueInsertPointer"></a>
<a id="tocSqueueinsertpointer"></a>
<a id="tocsqueueinsertpointer"></a>

```json
{
  "afterIdentifier": "j15f8A3cuU0GG",
  "replace": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|afterIdentifier|[ContentIdentifier](#schemacontentidentifier)|false|none|none|
|replace|boolean|false|none|none|

<h2 id="tocS_QueuePlayPointer">QueuePlayPointer</h2>
<!-- backwards compatibility -->
<a id="schemaqueueplaypointer"></a>
<a id="schema_QueuePlayPointer"></a>
<a id="tocSqueueplaypointer"></a>
<a id="tocsqueueplaypointer"></a>

```json
{
  "contentIdentifier": "j15f8A3cuU0GG",
  "offsetInMillis": 10942
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentIdentifier|[ContentIdentifier](#schemacontentidentifier)|false|none|none|
|offsetInMillis|integer(int64)|false|none|none|

<h2 id="tocS_ServiceDebugReference">ServiceDebugReference</h2>
<!-- backwards compatibility -->
<a id="schemaservicedebugreference"></a>
<a id="schema_ServiceDebugReference"></a>
<a id="tocSservicedebugreference"></a>
<a id="tocsservicedebugreference"></a>

```json
"http://example.com"
```

<h2 id="tocS_Session">Session</h2>
<!-- backwards compatibility -->
<a id="schemasession"></a>
<a id="schema_Session"></a>
<a id="tocSsession"></a>
<a id="tocssession"></a>

```json
{
  "constraints": {
    "allowExplicitContent": true,
    "maximumQueueSegmentItemCount": 1000,
    "updateUserTasteProfile": true
  },
  "deadline": "1970-01-01T00:00:00Z",
  "identifier": "string",
  "playerContext": {
    "activityIdentifier": "string",
    "contentIdentifier": "j15f8A3cuU0GG",
    "offsetInMillis": 10942,
    "playbackSpeed": 1,
    "queueIdentifier": "u104823q8201"
  },
  "requested": "1970-01-01T00:00:00Z",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|constraints|[Constraints](#schemaconstraints)|true|none|none|
|deadline|string(date-time)|true|none|none|
|identifier|string|true|none|none|
|playerContext|[PlayerContext](#schemaplayercontext)|false|none|none|
|requested|string(date-time)|true|none|none|
|version|string|true|none|none|

<h2 id="tocS_UpdateActivityRequest">UpdateActivityRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateactivityrequest"></a>
<a id="schema_UpdateActivityRequest"></a>
<a id="tocSupdateactivityrequest"></a>
<a id="tocsupdateactivityrequest"></a>

```json
{
  "constraints": {
    "allowExplicitContent": true,
    "maximumQueueSegmentItemCount": 1000,
    "updateUserTasteProfile": true
  },
  "nowPlaying": {
    "activityIdentifier": "string",
    "contentIdentifier": "j15f8A3cuU0GG",
    "offsetInMillis": 10942,
    "playbackSpeed": 1,
    "queueIdentifier": "u104823q8201"
  },
  "previouslyPlaying": {
    "activityIdentifier": "string",
    "contentIdentifier": "j15f8A3cuU0GG",
    "offsetInMillis": 10942,
    "playbackSpeed": 1,
    "queueIdentifier": "u104823q8201"
  },
  "report": "local.playing.elapsed",
  "timestamp": "1970-01-01T00:00:00Z",
  "userActivity": {
    "activityType": "com.mediastreamingservice.playmedia",
    "persistentIdentifier": "string",
    "title": "string",
    "userInfo": {},
    "version": "string"
  },
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|constraints|[Constraints](#schemaconstraints)|false|none|none|
|nowPlaying|[PlayerContext](#schemaplayercontext)|false|none|none|
|previouslyPlaying|[PlayerContext](#schemaplayercontext)|false|none|none|
|report|[QueueActivityReportEvent](#schemaqueueactivityreportevent)|true|none|none|
|timestamp|string(date-time)|true|none|none|
|userActivity|[UserActivity](#schemauseractivity)|true|none|none|
|version|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|report|local.playing.elapsed|
|report|local.playing.paused|
|report|local.playing.continued|
|report|local.playing.scrub|
|report|local.playing.fastForward|
|report|local.playing.fastRewind|
|report|local.playing.transitioned.naturally|
|report|local.playing.transitioned.skip_next|
|report|local.playing.transitioned.skip_previous|
|report|local.playing.transitioned.queue_replaced|
|report|local.stopped.naturally|
|report|local.stopped.skip_past_end|
|report|local.command.like|
|report|local.command.dislike|
|report|local.command.bookmark|

<h2 id="tocS_UpdateActivityResponse">UpdateActivityResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateactivityresponse"></a>
<a id="schema_UpdateActivityResponse"></a>
<a id="tocSupdateactivityresponse"></a>
<a id="tocsupdateactivityresponse"></a>

```json
{
  "queue": {
    "content": [
      {
        "attributes": {
          "albumName": "Blood On the Tracks",
          "artistName": "Bob Dylan",
          "artwork": {
            "url": "string"
          },
          "composerName": "B. Dylan",
          "durationInMillis": 0,
          "genreNames": [
            "string"
          ],
          "name": "Tangled Up In Blue",
          "trackNumber": 1
        },
        "control": "song",
        "identifier": "j15f8A3cuU0GG",
        "isLive": true,
        "playIndex": 0,
        "url": "string"
      }
    ],
    "contentItemsCount": 0,
    "controls": {
      "default": {
        "activity": {
          "playElapsed": 5,
          "playElapsedInterval": 5,
          "playPaused": 5
        },
        "commands": {
          "bookmarkTrack": true,
          "dislikeTrack": true,
          "likeTrack": true,
          "nextTrack": true,
          "preferSkipBackward": true,
          "preferSkipForward": true,
          "previousTrack": true,
          "seekToPlaybackPosition": true,
          "skipBackward": true,
          "skipForward": true
        },
        "scheme": "custom"
      },
      "property1": {
        "activity": {
          "playElapsed": 5,
          "playElapsedInterval": 5,
          "playPaused": 5
        },
        "commands": {
          "bookmarkTrack": true,
          "dislikeTrack": true,
          "likeTrack": true,
          "nextTrack": true,
          "preferSkipBackward": true,
          "preferSkipForward": true,
          "previousTrack": true,
          "seekToPlaybackPosition": true,
          "skipBackward": true,
          "skipForward": true
        },
        "scheme": "custom"
      },
      "property2": {
        "activity": {
          "playElapsed": 5,
          "playElapsedInterval": 5,
          "playPaused": 5
        },
        "commands": {
          "bookmarkTrack": true,
          "dislikeTrack": true,
          "likeTrack": true,
          "nextTrack": true,
          "preferSkipBackward": true,
          "preferSkipForward": true,
          "previousTrack": true,
          "seekToPlaybackPosition": true,
          "skipBackward": true,
          "skipForward": true
        },
        "scheme": "custom"
      }
    },
    "identifier": "u104823q8201",
    "insertPointer": {
      "afterIdentifier": "j15f8A3cuU0GG",
      "replace": false
    },
    "nextContentUrl": "string",
    "playPointer": {
      "contentIdentifier": "j15f8A3cuU0GG",
      "offsetInMillis": 10942
    },
    "prerollSeconds": 0,
    "previousContentUrl": "string",
    "skipsRemaining": 0,
    "version": "string"
  },
  "userActivity": {
    "activityType": "com.mediastreamingservice.playmedia",
    "persistentIdentifier": "string",
    "title": "string",
    "userInfo": {},
    "version": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queue|[Queue](#schemaqueue)|false|none|none|
|userActivity|[UserActivity](#schemauseractivity)|false|none|none|

<h2 id="tocS_UpdateMediaAffinityIntent">UpdateMediaAffinityIntent</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemediaaffinityintent"></a>
<a id="schema_UpdateMediaAffinityIntent"></a>
<a id="tocSupdatemediaaffinityintent"></a>
<a id="tocsupdatemediaaffinityintent"></a>

```json
{
  "class": "UpdateMediaAffinityIntent",
  "identifier": "string",
  "affinityType": "unknown",
  "mediaItems": [
    {
      "artist": "string",
      "identifier": "string",
      "title": "string",
      "type": "unknown"
    }
  ],
  "mediaSearch": {
    "albumName": "string",
    "artistName": "string",
    "genreNames": [
      "string"
    ],
    "mediaIdentifier": "string",
    "mediaName": "string",
    "mediaType": "unknown",
    "moodNames": [
      "string"
    ],
    "reference": "unknown",
    "releaseDate": {
      "endDateComponents": "1980",
      "startDateComponents": "1980"
    },
    "sortOrder": "unknown"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|class|string|true|none|none|
|identifier|string|true|none|none|
|affinityType|[MediaAffinityType](#schemamediaaffinitytype)|false|none|none|
|class|string|true|none|none|
|mediaItems|[[MediaItem](#schemamediaitem)]|false|none|none|
|mediaSearch|[MediaSearch](#schemamediasearch)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|affinityType|unknown|
|affinityType|like|
|affinityType|dislike|
|class|UpdateMediaAffinityIntent|

<h2 id="tocS_UpdateMediaAffinityIntentHandlingHandleInvocationResponse">UpdateMediaAffinityIntentHandlingHandleInvocationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemediaaffinityintenthandlinghandleinvocationresponse"></a>
<a id="schema_UpdateMediaAffinityIntentHandlingHandleInvocationResponse"></a>
<a id="tocSupdatemediaaffinityintenthandlinghandleinvocationresponse"></a>
<a id="tocsupdatemediaaffinityintenthandlinghandleinvocationresponse"></a>

```json
{
  "debug": "http://example.com",
  "method": "UpdateMediaAffinityIntentHandling.handle",
  "metrics": {
    "completed": "1970-01-01T00:00:00Z",
    "duration": 0,
    "received": "1970-01-01T00:00:00Z"
  },
  "result": {
    "response": {
      "class": "UpdateMediaAffinityIntentResponse",
      "userActivity": {
        "activityType": "com.mediastreamingservice.playmedia",
        "persistentIdentifier": "string",
        "title": "string",
        "userInfo": {},
        "version": "string"
      },
      "code": "unspecified"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|debug|[ServiceDebugReference](#schemaservicedebugreference)|false|none|none|
|method|string|true|none|none|
|metrics|[ExecutionMetrics](#schemaexecutionmetrics)|false|none|none|
|result|object \| null|true|none|none|
|method|string|true|none|none|
|result|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|method|UpdateMediaAffinityIntentHandling.handle|

<h2 id="tocS_UpdateMediaAffinityIntentHandlingInvocation">UpdateMediaAffinityIntentHandlingInvocation</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemediaaffinityintenthandlinginvocation"></a>
<a id="schema_UpdateMediaAffinityIntentHandlingInvocation"></a>
<a id="tocSupdatemediaaffinityintenthandlinginvocation"></a>
<a id="tocsupdatemediaaffinityintenthandlinginvocation"></a>

```json
{
  "method": "UpdateMediaAffinityIntentHandling.resolveMediaItems",
  "params": {
    "intent": {
      "class": "UpdateMediaAffinityIntent",
      "identifier": "string",
      "affinityType": "unknown",
      "mediaItems": [
        {
          "artist": "string",
          "identifier": "string",
          "title": "string",
          "type": "unknown"
        }
      ],
      "mediaSearch": {
        "albumName": "string",
        "artistName": "string",
        "genreNames": [
          "string"
        ],
        "mediaIdentifier": "string",
        "mediaName": "string",
        "mediaType": "unknown",
        "moodNames": [
          "string"
        ],
        "reference": "unknown",
        "releaseDate": {
          "endDateComponents": "1980",
          "startDateComponents": "1980"
        },
        "sortOrder": "unknown"
      }
    }
  },
  "session": {
    "constraints": {
      "allowExplicitContent": true,
      "maximumQueueSegmentItemCount": 1000,
      "updateUserTasteProfile": true
    },
    "deadline": "1970-01-01T00:00:00Z",
    "identifier": "string",
    "playerContext": {
      "activityIdentifier": "string",
      "contentIdentifier": "j15f8A3cuU0GG",
      "offsetInMillis": 10942,
      "playbackSpeed": 1,
      "queueIdentifier": "u104823q8201"
    },
    "requested": "1970-01-01T00:00:00Z",
    "version": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|method|string|true|none|none|
|params|object \| null|true|none|none|
|session|[Session](#schemasession)|false|none|none|
|method|string|true|none|none|
|params|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|method|UpdateMediaAffinityIntentHandling.resolveMediaItems|
|method|UpdateMediaAffinityIntentHandling.resolveAffinityType|
|method|UpdateMediaAffinityIntentHandling.handle|

<h2 id="tocS_UpdateMediaAffinityIntentHandlingInvocationResponse">UpdateMediaAffinityIntentHandlingInvocationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemediaaffinityintenthandlinginvocationresponse"></a>
<a id="schema_UpdateMediaAffinityIntentHandlingInvocationResponse"></a>
<a id="tocSupdatemediaaffinityintenthandlinginvocationresponse"></a>
<a id="tocsupdatemediaaffinityintenthandlinginvocationresponse"></a>

```json
{
  "debug": "http://example.com",
  "method": "UpdateMediaAffinityIntentHandling.resolveMediaItems",
  "metrics": {
    "completed": "1970-01-01T00:00:00Z",
    "duration": 0,
    "received": "1970-01-01T00:00:00Z"
  },
  "result": {
    "resolutionResult": [
      {
        "class": "UpdateMediaAffinityMediaItemResolutionResult",
        "needsValue": {},
        "notRequired": {},
        "unsupported": {
          "reason": "loginRequired"
        },
        "confirmationRequired": {
          "mediaItemToConfirm": {
            "artist": "string",
            "identifier": "string",
            "title": "string",
            "type": "unknown"
          }
        },
        "disambiguation": {
          "mediaItemsToDisambiguate": [
            {
              "artist": "string",
              "identifier": "string",
              "title": "string",
              "type": "unknown"
            },
            {
              "artist": "string",
              "identifier": "string",
              "title": "string",
              "type": "unknown"
            }
          ]
        },
        "success": {
          "resolvedMediaItem": {
            "artist": "string",
            "identifier": "string",
            "title": "string",
            "type": "unknown"
          }
        }
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[UpdateMediaAffinityIntentHandlingResolveMediaItemsInvocationResponse](#schemaupdatemediaaffinityintenthandlingresolvemediaitemsinvocationresponse)|false|none|none|
|*oneOf*|[UpdateMediaAffinityIntentHandlingResolveAffinityTypeInvocationResponse](#schemaupdatemediaaffinityintenthandlingresolveaffinitytypeinvocationresponse)|false|none|none|
|*oneOf*|[UpdateMediaAffinityIntentHandlingHandleInvocationResponse](#schemaupdatemediaaffinityintenthandlinghandleinvocationresponse)|false|none|none|
|*oneOf*|[ProtocolExceptionInvocationResponse](#schemaprotocolexceptioninvocationresponse)|false|none|none|

<h2 id="tocS_UpdateMediaAffinityIntentHandlingResolveAffinityTypeInvocationResponse">UpdateMediaAffinityIntentHandlingResolveAffinityTypeInvocationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemediaaffinityintenthandlingresolveaffinitytypeinvocationresponse"></a>
<a id="schema_UpdateMediaAffinityIntentHandlingResolveAffinityTypeInvocationResponse"></a>
<a id="tocSupdatemediaaffinityintenthandlingresolveaffinitytypeinvocationresponse"></a>
<a id="tocsupdatemediaaffinityintenthandlingresolveaffinitytypeinvocationresponse"></a>

```json
{
  "debug": "http://example.com",
  "method": "UpdateMediaAffinityIntentHandling.resolveAffinityType",
  "metrics": {
    "completed": "1970-01-01T00:00:00Z",
    "duration": 0,
    "received": "1970-01-01T00:00:00Z"
  },
  "result": {
    "resolutionResult": {
      "class": "MediaAffinityTypeResolutionResult",
      "needsValue": {},
      "notRequired": {},
      "unsupported": {},
      "confirmationRequired": {
        "mediaAffinityTypeToConfirm": "unknown"
      },
      "success": {
        "resolvedMediaAffinityType": "unknown"
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|debug|[ServiceDebugReference](#schemaservicedebugreference)|false|none|none|
|method|string|true|none|none|
|metrics|[ExecutionMetrics](#schemaexecutionmetrics)|false|none|none|
|result|object \| null|true|none|none|
|method|string|true|none|none|
|result|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|method|UpdateMediaAffinityIntentHandling.resolveAffinityType|

<h2 id="tocS_UpdateMediaAffinityIntentHandlingResolveMediaItemsInvocationResponse">UpdateMediaAffinityIntentHandlingResolveMediaItemsInvocationResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemediaaffinityintenthandlingresolvemediaitemsinvocationresponse"></a>
<a id="schema_UpdateMediaAffinityIntentHandlingResolveMediaItemsInvocationResponse"></a>
<a id="tocSupdatemediaaffinityintenthandlingresolvemediaitemsinvocationresponse"></a>
<a id="tocsupdatemediaaffinityintenthandlingresolvemediaitemsinvocationresponse"></a>

```json
{
  "debug": "http://example.com",
  "method": "UpdateMediaAffinityIntentHandling.resolveMediaItems",
  "metrics": {
    "completed": "1970-01-01T00:00:00Z",
    "duration": 0,
    "received": "1970-01-01T00:00:00Z"
  },
  "result": {
    "resolutionResult": [
      {
        "class": "UpdateMediaAffinityMediaItemResolutionResult",
        "needsValue": {},
        "notRequired": {},
        "unsupported": {
          "reason": "loginRequired"
        },
        "confirmationRequired": {
          "mediaItemToConfirm": {
            "artist": "string",
            "identifier": "string",
            "title": "string",
            "type": "unknown"
          }
        },
        "disambiguation": {
          "mediaItemsToDisambiguate": [
            {
              "artist": "string",
              "identifier": "string",
              "title": "string",
              "type": "unknown"
            },
            {
              "artist": "string",
              "identifier": "string",
              "title": "string",
              "type": "unknown"
            }
          ]
        },
        "success": {
          "resolvedMediaItem": {
            "artist": "string",
            "identifier": "string",
            "title": "string",
            "type": "unknown"
          }
        }
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|debug|[ServiceDebugReference](#schemaservicedebugreference)|false|none|none|
|method|string|true|none|none|
|metrics|[ExecutionMetrics](#schemaexecutionmetrics)|false|none|none|
|result|object \| null|true|none|none|
|method|string|true|none|none|
|result|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|method|UpdateMediaAffinityIntentHandling.resolveMediaItems|

<h2 id="tocS_UpdateMediaAffinityIntentResponse">UpdateMediaAffinityIntentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemediaaffinityintentresponse"></a>
<a id="schema_UpdateMediaAffinityIntentResponse"></a>
<a id="tocSupdatemediaaffinityintentresponse"></a>
<a id="tocsupdatemediaaffinityintentresponse"></a>

```json
{
  "class": "UpdateMediaAffinityIntentResponse",
  "userActivity": {
    "activityType": "com.mediastreamingservice.playmedia",
    "persistentIdentifier": "string",
    "title": "string",
    "userInfo": {},
    "version": "string"
  },
  "code": "unspecified"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|class|string|true|none|none|
|userActivity|[UserActivity](#schemauseractivity)|true|none|none|
|class|string|true|none|none|
|code|[UpdateMediaAffinityIntentResponseCode](#schemaupdatemediaaffinityintentresponsecode)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|class|UpdateMediaAffinityIntentResponse|
|code|unspecified|
|code|inProgress|
|code|success|
|code|failure|
|code|failureRequiringAppLaunch|

<h2 id="tocS_UpdateMediaAffinityIntentResponseCode">UpdateMediaAffinityIntentResponseCode</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemediaaffinityintentresponsecode"></a>
<a id="schema_UpdateMediaAffinityIntentResponseCode"></a>
<a id="tocSupdatemediaaffinityintentresponsecode"></a>
<a id="tocsupdatemediaaffinityintentresponsecode"></a>

```json
"unspecified"
```

<h2 id="tocS_UpdateMediaAffinityMediaItemResolutionResult">UpdateMediaAffinityMediaItemResolutionResult</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemediaaffinitymediaitemresolutionresult"></a>
<a id="schema_UpdateMediaAffinityMediaItemResolutionResult"></a>
<a id="tocSupdatemediaaffinitymediaitemresolutionresult"></a>
<a id="tocsupdatemediaaffinitymediaitemresolutionresult"></a>

```json
{
  "class": "UpdateMediaAffinityMediaItemResolutionResult",
  "needsValue": {},
  "notRequired": {},
  "unsupported": {
    "reason": "loginRequired"
  },
  "confirmationRequired": {
    "mediaItemToConfirm": {
      "artist": "string",
      "identifier": "string",
      "title": "string",
      "type": "unknown"
    }
  },
  "disambiguation": {
    "mediaItemsToDisambiguate": [
      {
        "artist": "string",
        "identifier": "string",
        "title": "string",
        "type": "unknown"
      },
      {
        "artist": "string",
        "identifier": "string",
        "title": "string",
        "type": "unknown"
      }
    ]
  },
  "success": {
    "resolvedMediaItem": {
      "artist": "string",
      "identifier": "string",
      "title": "string",
      "type": "unknown"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|class|string|true|none|none|
|needsValue|object|false|none|none|
|notRequired|object|false|none|none|
|unsupported|object|false|none|none|
|class|string|true|none|none|
|confirmationRequired|object|false|none|none|
|disambiguation|object|false|none|none|
|success|object|false|none|none|
|unsupported|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|class|UpdateMediaAffinityMediaItemResolutionResult|

<h2 id="tocS_UpdateMediaAffinityMediaItemUnsupportedReason">UpdateMediaAffinityMediaItemUnsupportedReason</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemediaaffinitymediaitemunsupportedreason"></a>
<a id="schema_UpdateMediaAffinityMediaItemUnsupportedReason"></a>
<a id="tocSupdatemediaaffinitymediaitemunsupportedreason"></a>
<a id="tocsupdatemediaaffinitymediaitemunsupportedreason"></a>

```json
"loginRequired"
```

<h2 id="tocS_UserActivity">UserActivity</h2>
<!-- backwards compatibility -->
<a id="schemauseractivity"></a>
<a id="schema_UserActivity"></a>
<a id="tocSuseractivity"></a>
<a id="tocsuseractivity"></a>

```json
{
  "activityType": "com.mediastreamingservice.playmedia",
  "persistentIdentifier": "string",
  "title": "string",
  "userInfo": {},
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activityType|string|true|none|none|
|persistentIdentifier|string|false|none|none|
|title|string|false|none|none|
|userInfo|object|false|none|none|
|version|string|true|none|none|
