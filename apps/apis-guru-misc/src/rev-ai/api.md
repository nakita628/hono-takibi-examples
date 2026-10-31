<h1 id="asynchronous-speech-to-text-api-documentation">Asynchronous Speech-To-Text API Documentation v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Rev.ai provides quality speech-text recognition via a RESTful API. All public methods and objects are documented here for developer reference.
For a real-time speech to text solution, use Rev.ai's [Streaming API](/docs/streaming).

# Base Endpoint

The base url for this version of the API is

> `https://api.rev.ai/speechtotext/v1`

All endpoints described in this documentation are relative to this base url.

# Quick Start

Follow the [getting started checklist](https://www.rev.ai/getting_started)

## Get your Access Token

You can generate your [access token](#section/Authentication/Access-Token) on the [settings page](https://www.rev.ai/access_token) of your account. This access token only needs to be generated once and never expires. You can re-generate your token, however this will invalidate the previous token.

## Submit a File

To submit an audio file for transcription to Rev.ai:

```
curl -X POST "https://api.rev.ai/speechtotext/v1/jobs" -H "Authorization: Bearer $REV_ACCESS_TOKEN" -H "Content-Type: application/json" -d "{\"media_url\":\"https://www.rev.ai/FTC_Sample_1.mp3\",\"metadata\":\"This is a sample submit jobs option\"}"
```

You’ll receive a response like this:

~~~
{
  "id": "Umx5c6F7pH7r",
  "created_on": "2018-09-15T05:14:38.13",
  "name": "sample.mp3",
  "metadata": "This is a sample submit jobs option for multipart",
  "status": "in_progress"
}
~~~

The `id` (in this case `Umx5c6F7pH7r`) will allow you to retrieve your transcript.

## Get Your Transcript

Once a transcription job's `status` becomes `transcribed`, you can retrieve the transcript in JSON format by running:

```
curl -X GET "https://api.rev.ai/speechtotext/v1/jobs/{id}/transcript" -H "Authorization: Bearer $REV_ACCESS_TOKEN" -H "Accept: application/vnd.rev.transcript.v1.0+json"
```

Alternatively you can get the plain text version by running:

```
curl -X GET "https://api.rev.ai/speechtotext/v1/jobs/{id}/transcript" -H "Authorization: Bearer $REV_ACCESS_TOKEN" -H "Accept: text/plain"
```

You can poll for the `status` of your job by querying for the job periodically:

```
curl -X GET https://api.rev.ai/speechtotext/v1/jobs/{id} -H "Authorization: Bearer $REV_ACCESS_TOKEN"
```

**Note:** Polling is NOT recommended in a production server. Rather, use [webhooks](#section/Webhooks) to asynchronously receive notifications once the transcription job completes

If you have any further questions, contact us at <support@rev.ai>

# Submitting Files

Two `POST` request formats can be used to submit a file: `application/json` or `multipart/form-data`.

## JSON

This is the preferred method of file submission. Uses the `media_url` property to provide a direct download URL to the Rev.ai server.
This method supports the use of pre-signed URLs. Links to videos hosted on platforms like Youtube are not valid because they are not direct download links.

**Important note on presigned URLs:**
Signed URLs usually have an expiration time which is configurable. To ensure the Rev.ai server can access the link, make sure the expiration time is set to 2 hours or more.
In the event you plan on resending the same file, make sure to generate a new presigned URL.

## FormData

Used to send a local file to the Rev.ai server. This allows the customer to send the file directly from the host machine.
Certain limits apply to this format, see the [Async API Limits section](#section/Async-API-Limits) for more detals.

# Turnaround Time and Chunking

Often, especially for shorter files, your transcript will be ready in 5 minutes or less. It generally takes no longer than 15 minutes to return longer audios. If you require faster turn around time please contact <support@rev.ai>

Chunking is the act of breaking audio files into smaller segments. Rev.ai uses this method to decrease turnaround time of audios greater than 3 minutes in length.

# Webhooks

If the optional `callback_url` is provided, the API will make an HTTP POST request to the `callback_url` with the
following request body when the job either completes successfully or fails.

## Sample Webhook

**On Successful Transcription Job**

```
{
  "job": {
    "id": "Umx5c6F7pH7r",
    "status": "transcribed",
    "created_on": "2018-05-05T23:23:22.29Z",
    "callback_url": "https://www.example.com/callback",
    "duration_seconds": 356.24,
    "media_url": "https://www.rev.ai/FTC_Sample_1.mp3"
  }
}
```

**On Failed Transcription Job**

```
{
  "job": {
    "id": "Umx5c6F7pH7r",
    "status": "failed",
    "created_on": "2018-05-05T23:23:22.29Z",
    "callback_url": "https://www.example.com/callback",
    "failure": "download_failure",
    "failure_detail": "Failed to download media file. Please check your url and file type"
  }
}
```

**Important notes for using webhooks:**
The API will make a POST request, not a GET request, to the `callback_url`. The request body is the job details.
You can unsubscribe from a webhook by responding to the webhook request with a 200 response.
If a webhook invocation does not receive a 200 Rev.ai will retry the `callback_url` every 30 minutes until either 24 hours have passed or we receive a 200 response.

For initial webhook testing, you can try using a third party webhook testing tool such as [https://webhook.site/](https://webhook.site/).

# Async API Limits

The following default limits apply per user, per endpoint and are configurable by Rev.ai support. If you have any further questions, contact us at <support@rev.ai>

- 10,000 transcription requests submitted every 10 minutes
- 500 transcriptions processed every 10 minutes
- Multi-part/form-data requests to the /jobs endpoint have a concurrency limit of 10 and a file size limit of 2GB
- POST requests to the /jobs endpoint that use the media_url property do not have a concurrency limit or file restriction. They are only limited by the first two bullet points

# Error Handling

The API indicates failure with 4xx and 5xx HTTP status codes. 4xx status codes indicate an error due to the request provided (e.g., a required parameter was omitted). 5xx error indicate an error with Rev.ai's servers.

When an 4xx error occurs during invocation of a request, the API responds with a [problem details](https://tools.ietf.org/html/rfc7807) as HTTP response payload.

The problem details information is represented as a JSON object with the following optional properties:

| Property   | Description                                   |
|------------|-----------------------------------------------|
| type       | a URI representing the type for the error     |
| title      | a short human readable description of type    |
| details    | additional details of the error               |
| status     | HTTP status code of the error                 |

In addition to the properties listed above, the problem details object may list additional properties that help to troubleshoot the problem.

## Example Errors

```
// Bad Submit Job Request
{
  "parameter": {
    "media_url": [
      "The media_url field is required"
    ]
  },
  "type": "https://www.rev.ai/api/v1/errors/invalid-parameters",
  "title": "Your request parameters didn't validate",
  "status": 400
}

// Invalid Transcript State
{
  "allowed_values": [
    "transcribed"
  ],
  "current_value": "in_progress",
  "type": "https://rev.ai/api/v1/errors/invalid-job-state",
  "title": "Job is in invalid state",
  "detail": "Job is in invalid state to obtain the transcript",
  "status": 409
}
```

## Retrying Failed Requests

Some errors can be resolved simply by retrying the request. The following error codes are likely to be resolved with successive retries.

| Status Code | Error |
|---|:---|
| 429 | Too Many Requests |
| 502 | Bad Gateway |
| 503 | Service Unavailable |
| 504 | Gateway Timeout |

Note: With the exception of the 429 status code, it is recommended that the maximum number of retries be limited to 5 attempts per request. The number of retries can be higher
for 429 errors but if you notice consistent throttling please contact us at <support@rev.ai>.

Base URLs:

* <a href="https://api.rev.ai/speechtotext/v1">https://api.rev.ai/speechtotext/v1</a> - Rev.ai API

# Authentication

- HTTP Authentication, scheme: bearer All API requests must be authorized with an `Authorization: Bearer` header

> `-H "Authorization: Bearer $REV_ACCESS_TOKEN"`

Developers can obtain their access token from their [settings page](https://rev.ai/access_token). This token need only be generated once and never expires.

<h1 id="asynchronous-speech-to-text-api-documentation-account">Account</h1>

## Get Account

<a id="opIdGetAccount"></a>

> Code samples

```bash
curl https://example.com/account \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account`

Get the developer's account information

> Example responses

> 200 Response

```json
{
  "balance_seconds": 150,
  "email": "jay@rev.ai"
}
```

> 401 Response

```json
{
  "status": 401,
  "title": "Authorization has been denied for this request"
}
```

<h3 id="get-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Rev.ai Account|[Account](#schemaaccount)|
|401|Unauthorized|Request Unauthorized<br>***<br>Caused by an old or invalid [access token](#section/Authentication/Access-Token), try regenerating your token on your [access token page](https://rev.ai/access_token).<br>|Inline|

<h3 id="get-account-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|integer|false|none|HTTP status code of the error|
|title|string|false|none|Short, human-readable summary of the problem type|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Access-Token
</aside>

<h1 id="asynchronous-speech-to-text-api-documentation-jobs">Jobs</h1>

## Get List of Jobs

<a id="opIdGetListOfJobs"></a>

> Code samples

```bash
curl https://example.com/jobs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /jobs`

Gets a list of transcription jobs submitted within the last 30 days in reverse chronological order up to the provided `limit` number of jobs per call. **Note:** Jobs older than 30 days will not be listed. Pagination is supported via passing the last job `id` from a previous call into `starting_after`.

<h3 id="get-list-of-jobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Limits the number of jobs returned, default is 100, max is 1000|
|starting_after|query|string|false|If specified, returns transcription jobs submitted before the job with this id, exclusive (job with this id is not included)|

> Example responses

> 200 Response

```json
[
  {
    "created_on": "2018-05-05T23:23:22.29Z",
    "delete_after_seconds": 50,
    "id": "Umx5c6F7pH7r",
    "status": "in_progress",
    "type": "async"
  }
]
```

> 400 Response

```json
{
  "parameter": {
    "limit": [
      "The max value for limit is 1000"
    ]
  },
  "status": 400,
  "title": "Your request parameters didn't validate",
  "type": "https://www.rev.ai/api/v1/errors/invalid-parameters"
}
```

> 401 Response

```json
{
  "status": 401,
  "title": "Authorization has been denied for this request"
}
```

<h3 id="get-list-of-jobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of Rev.ai Transcription Jobs|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Request Unauthorized<br>***<br>Caused by an old or invalid [access token](#section/Authentication/Access-Token), try regenerating your token on your [access token page](https://rev.ai/access_token).<br>|Inline|

<h3 id="get-list-of-jobs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Job](#schemajob)]|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|integer|false|none|HTTP status code of the error|
|title|string|false|none|Short, human-readable summary of the problem type|
|type|string|false|none|URI that identifies the problem|
|parameters|object|false|none|Invalid properties object where each property is the key, mapped to a list of reasons why the property is invalid|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|integer|false|none|HTTP status code of the error|
|title|string|false|none|Short, human-readable summary of the problem type|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Access-Token
</aside>

## Submit Transcription Job

<a id="opIdSubmitTranscriptionJob"></a>

> Code samples

```bash
curl https://example.com/jobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "media_url": "https://www.rev.ai/FTC_Sample_1.mp3",
    "callback_url": "https://www.example.com/callback",
    "custom_vocabulary_id": "cvgnDwmB6iXevn",
    "delete_after_seconds": 50,
    "filter_profanity": true,
    "language": "en",
    "metadata": "sample metadata",
    "remove_disfluencies": true,
    "skip_diarization": true,
    "skip_punctuation": true,
    "speaker_channels_count": 2,
    "custom_vocabularies": [
      {
        "phrases": [
          "Paul McCartney",
          "Amelia Earhart",
          "Weiss-Bergman",
          "BLM"
        ]
      }
    ]
  }'
```

`POST /jobs`

Starts an asynchronous job to transcribe speech-to-text for a media file. Media files can be specified in two ways, either by including a public url to the media in the transcription job `options` or by uploading a local file as part of a multipart/form request.

> Body parameter

```json
{
  "media_url": "https://www.rev.ai/FTC_Sample_1.mp3",
  "callback_url": "https://www.example.com/callback",
  "custom_vocabulary_id": "cvgnDwmB6iXevn",
  "delete_after_seconds": 50,
  "filter_profanity": true,
  "language": "en",
  "metadata": "sample metadata",
  "remove_disfluencies": true,
  "skip_diarization": true,
  "skip_punctuation": true,
  "speaker_channels_count": 2,
  "custom_vocabularies": [
    {
      "phrases": [
        "Paul McCartney",
        "Amelia Earhart",
        "Weiss-Bergman",
        "BLM"
      ]
    }
  ]
}
```

<h3 id="submit-transcription-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SubmitJobMediaUrlOptions](#schemasubmitjobmediaurloptions)|true|Transcription Job Options|
|» media_url|body|string|true|Direct download media url. Ignored if submitting job from file. **Note:** Media files longer than 17 hours are not supported for English transcription, and media files longer than 12 hours are not supported for non-English transcription. For non-English jobs, expected turnaround time can be up to 6 hours.|
|» callback_url|body|object|false|Optional callback url to invoke when processing is complete|
|» custom_vocabulary_id|body|object|false|**This feature is in beta.** You can supply the id of a pre-completed custom vocabulary that you submitted through the [Custom Vocabularies API](https://rev.ai/docs/streaming#operation/SubmitCustomVocabulary) instead of uploading the list of phrases using the `custom_vocabularies` parameter. Using `custom_vocabulary_id` or `custom_vocabularies` with the same list of phrases yields the same transcription result, but `custom_vocabulary_id` allows your submission to finish processing faster by 6 seconds on average. <br><br>You cannot use both `custom_vocabulary_id` and `custom_vocabularies` at the same time, and doing so will result in a 400 response. If the supplied id represents an incomplete, deleted, or non-existent custom vocabulary then you will receive a 404 response.<br>|
|» delete_after_seconds|body|object|false|Specify the number of seconds after job completion when job is auto-deleted. It may take up to 2 minutes after the scheduled time for the job to be deleted.<br>The number of seconds provided must range from `0` seconds to `2592000` seconds (30 days).<br>|
|» filter_profanity|body|object|false|Enabling this option will filter for approx. 600 profanities, which cover most use cases. If a transcribed word matches a word on this list, then all the characters of that word will be replaced by asterisks except for the first and last character.<br>|
|» language|body|object|false|You can provide a language parameter for transcribing audio in one of the following languages:<br><br>\| Language   \| ISO 639 Language Code                                \|<br>\|------------\|-----------------------------------------------\|<br>\| Arabic \| ar \|<br>\| Bulgarian  \| bg \|<br>\| Catalan    \| ca \|<br>\| Croatian   \| hr \|<br>\| Czech  \| cs \|<br>\| Danish \| da \|<br>\| Dutch  \| nl \|<br>\| English    \| en \|<br>\| Finnish    \| fi \|<br>\| French \| fr \|<br>\| German \| de \|<br>\| Greek  \| el \|<br>\| Hindi  \| hi \|<br>\| Hungarian  \| hu \|<br>\| Italian    \| it \|<br>\| Japanese   \| ja \|<br>\| Korean \| ko \|<br>\| Lithuanian \| lt \|<br>\| Latvian    \| lv \|<br>\| Malay  \| ms \|<br>\| Mandarin   \| cmn \|<br>\| Norwegian  \| no \|<br>\| Polish \| pl \|<br>\| Portuguese \| pt \|<br>\| Romanian   \| ro \|<br>\| Russian    \| ru \|<br>\| Slovak \| sk \|<br>\| Slovenian  \| sl \|<br>\| Spanish    \| es \|<br>\| Swedish    \| sv \|<br>\| Turkish    \| tr \|<br>Language parameter is provided as a [ISO 639-1 language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes), with the exception of Mandarin (cmn) which is supplied as an [ISO 639-3 language code](https://en.wikipedia.org/wiki/ISO_639-3).<br><br>Only 1 language can be selected per audio, i.e. no multiple languages in one transcription job. Additionally, the following parameters may **not** be used with non-English languages: `skip_punctuation`, `remove_disfluencies`, `filter_profanity`, `speaker_channels_count`, `custom_vocabulary_id`.<br>|
|» metadata|body|object|false|Optional metadata that was provided during submission|
|» remove_disfluencies|body|object|false|Currently we only define disfluencies as 'ums' and 'uhs'. When set to true, disfluencies will be not appear in the transcript.<br>|
|» skip_diarization|body|object|false|Specify if speaker diarization will be skipped by the speech engine|
|» skip_punctuation|body|object|false|Specify if "punct" type elements will be skipped by the speech engine. For JSON outputs, this includes removing spaces. For text outputs,<br>words will still be delimited by a space<br>|
|» speaker_channels_count|body|object|false|Use to specify the total number of unique speaker channels in the audio.<br><br>Given the number of audio channels provided, each channel will be transcribed<br>separately and the channel id assigned to the `speaker` label. The final output will be a combination of all individual channel outputs. Overlapping `monologues` will have ordering broken<br>by the order in which the first spoken `element` of each `monologue` occurs. If `speaker_channels_count` is greater than the actual channels in the audio,<br>the job will fail with `invalid_media`.<br><br>**Note:**<br>  - The amount charged will be the duration of the file multiplied by the number of channels specified.<br>  - When using `speaker_channels_count` each channel will be diarized as one speaker, and the value of `skip_diarization` will be ignored if provided<br>|
|» custom_vocabularies|body|[object]|false|none|
|» » phrases|body|[string]|true|Array of phrases not found in normal dictionary. Add technical jargon, proper nouns and uncommon phrases as strings in this array to add them to the lexicon for this job. <br><br>A phrase must contain at least 1 alpha character but may contain any non-numeric character from the Basic Latin set. A phrase can contain up to 12 words. Each word can contain up to 34 characters.<br><br>**Note**: Only 6000 phrases can be used per transcription job. For more details, check [Custom Vocabularies](https://www.rev.ai/docs/overview#section/Features/Custom-Vocabularies).<br>|
|» metadata|body|string \| null|false|none|
|» callback_url|body|string \| null|false|none|
|» custom_vocabulary_id|body|string \| null|false|none|
|» delete_after_seconds|body|integer \| null|false|none|
|» filter_profanity|body|boolean \| null|false|none|
|» language|body|string \| null|false|none|
|» media_url|body|string \| null|true|none|
|» remove_disfluencies|body|boolean \| null|false|none|
|» skip_diarization|body|boolean \| null|false|none|
|» skip_punctuation|body|boolean \| null|false|none|
|» speaker_channels_count|body|integer \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» language|en|
|» language|ar|
|» language|bg|
|» language|ca|
|» language|cmn|
|» language|cs|
|» language|da|
|» language|de|
|» language|el|
|» language|es|
|» language|fi|
|» language|fr|
|» language|hi|
|» language|hr|
|» language|hu|
|» language|it|
|» language|ja|
|» language|ko|
|» language|lt|
|» language|lv|
|» language|ms|
|» language|nl|
|» language|no|
|» language|pl|
|» language|pt|
|» language|ro|
|» language|ru|
|» language|sk|
|» language|sl|
|» language|sv|
|» language|tr|

> Example responses

> 200 Response

```json
{
  "created_on": "2018-05-05T23:23:22.29Z",
  "delete_after_seconds": 50,
  "id": "Umx5c6F7pH7r",
  "status": "in_progress",
  "type": "async"
}
```

> 400 Response

```json
{
  "parameter": {
    "media_url": [
      "The media_url field is required"
    ]
  },
  "status": 400,
  "title": "Your request parameters didn't validate",
  "type": "https://www.rev.ai/api/v1/errors/invalid-parameters"
}
```

> 401 Response

```json
{
  "status": 401,
  "title": "Authorization has been denied for this request"
}
```

> 413 Response

```json
{
  "detail": "Submitted payload exceeds maximum allowed file size",
  "status": 413,
  "title": "Payload Too Large"
}
```

<h3 id="submit-transcription-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Transcription Job Details|[Job](#schemajob)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Request Unauthorized<br>***<br>Caused by an old or invalid [access token](#section/Authentication/Access-Token), try regenerating your token on your [access token page](https://rev.ai/access_token).<br>|Inline|
|413|Payload Too Large|Payload Too Large<br>***<br>Only returned when job is submitted using a local file as part of `multipart/form-data`. Use a `media_url`<br>for files larger than 2GBs<br>|Inline|

<h3 id="submit-transcription-job-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|integer|false|none|HTTP status code of the error|
|title|string|false|none|Short, human-readable summary of the problem type|
|type|string|false|none|URI that identifies the problem|
|parameters|object|false|none|Invalid properties object where each property is the key, mapped to a list of reasons why the property is invalid|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|integer|false|none|HTTP status code of the error|
|title|string|false|none|Short, human-readable summary of the problem type|

Status Code **413**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Human-readable explanation specific to this occurrence of the problem|
|status|integer|false|none|HTTP status code of the error|
|title|string|false|none|Short, human-readable summary of the problem type|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Access-Token
</aside>

## Get Job By Id

<a id="opIdGetJobById"></a>

> Code samples

```bash
curl https://example.com/jobs/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /jobs/{id}`

Returns information about a transcription job

<h3 id="get-job-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Rev.ai API Job Id|

> Example responses

> 200 Response

```json
{
  "completed_on": "2018-05-05T23:23:24.11Z",
  "created_on": "2018-05-05T23:23:22.29Z",
  "failure": "download_failure",
  "failure_detail": "Failed to download media file. Please check your url and file type",
  "id": "Umx5c6F7pH7r",
  "language": "en",
  "status": "failed"
}
```

> 401 Response

```json
{
  "status": 401,
  "title": "Authorization has been denied for this request"
}
```

> 404 Response

```json
{
  "status": 404,
  "title": "could not find job",
  "type": "https://www.rev.ai/api/v1/errors/job-not-found"
}
```

<h3 id="get-job-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Transcription Job Details|[Job](#schemajob)|
|401|Unauthorized|Request Unauthorized<br>***<br>Caused by an old or invalid [access token](#section/Authentication/Access-Token), try regenerating your token on your [access token page](https://rev.ai/access_token).<br>|Inline|
|404|Not Found|Job Not Found|Inline|

<h3 id="get-job-by-id-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|integer|false|none|HTTP status code of the error|
|title|string|false|none|Short, human-readable summary of the problem type|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|integer|false|none|HTTP status code of the error|
|title|string|false|none|Short, human-readable summary of the problem type|
|type|string|false|none|URI that identifies the problem|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Access-Token
</aside>

## Delete Job by Id

<a id="opIdDeleteJobById"></a>

> Code samples

```bash
curl https://example.com/jobs/string \
  -X DELETE \
  -H 'Accept: application/problem+json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /jobs/{id}`

Deletes a transcription job. All data related to the job, such as input media and transcript, will be permanently deleted. A job can only be deleted once it's completed (either with success or failure).

<h3 id="delete-job-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Rev.ai API Job Id|

> Example responses

> 401 Response

```json
{
  "status": 401,
  "title": "Authorization has been denied for this request"
}
```

> 404 Response

```json
{
  "status": 404,
  "title": "could not find job",
  "type": "https://www.rev.ai/api/v1/errors/job-not-found"
}
```

> 409 Response

```json
{
  "allowed_values": [
    "transcribed",
    "failed"
  ],
  "current_value": "in_progress",
  "detail": "Job is in invalid state to be deleted",
  "status": 409,
  "title": "Job is in invalid state",
  "type": "https://rev.ai/api/v1/errors/invalid-job-state"
}
```

<h3 id="delete-job-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Job was successfully deleted|None|
|401|Unauthorized|Request Unauthorized<br>***<br>Caused by an old or invalid [access token](#section/Authentication/Access-Token), try regenerating your token on your [access token page](https://rev.ai/access_token).<br>|Inline|
|404|Not Found|Job Not Found|Inline|
|409|Conflict|Invalid Deletion State<br>|Inline|

<h3 id="delete-job-by-id-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|integer|false|none|HTTP status code of the error|
|title|string|false|none|Short, human-readable summary of the problem type|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|integer|false|none|HTTP status code of the error|
|title|string|false|none|Short, human-readable summary of the problem type|
|type|string|false|none|URI that identifies the problem|

Status Code **409**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|integer|false|none|HTTP status code of the error|
|title|string|false|none|Short, human-readable summary of the problem type|
|type|string|false|none|URI that identifies the problem|
|allowed_values|[string]|false|none|Allowed values for this request|
|current_value|string|false|none|Value passed in given request|
|detail|string|false|none|Human-readable explanation specific to this occurrence of the problem|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Access-Token
</aside>

<h1 id="asynchronous-speech-to-text-api-documentation-captions">Captions</h1>

## Get Captions

<a id="opIdGetCaptions"></a>

> Code samples

```bash
curl https://example.com/jobs/string/captions \
  -H 'Accept: application/problem+json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /jobs/{id}/captions`

Returns the caption output for a transcription job. We currently support SubRip (SRT) and Web Video Text Tracks (VTT) output.
Caption output format can be specified in the `Accept` header. Returns SRT by default.
***
Note: For streaming jobs, transient failure of our storage during a live session may prevent the final hypothesis elements from saving properly, resulting in an incomplete caption file. This is rare, but not impossible.


<h3 id="get-captions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|false|MIME type specifying the caption output format|
|speaker_channel|query|integer|false|Identifies which channel of the job output to caption. Default is `null` which works only for jobs with no `speaker_channels_count` provided during job submission.|
|id|path|string|true|Rev.ai API Job Id|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Accept|application/x-subrip|
|Accept|text/vtt|

> Example responses

> 200 Response

```text
1
00:00:01,210 --> 00:00:04,840
Hello there, this is a example captions output

2
00:00:07,350 --> 00:00:10,970
Each caption group is in the SubRip Text
file format

```

> 401 Response

```json
{
  "status": 401,
  "title": "Authorization has been denied for this request"
}
```

> 404 Response

```json
{
  "status": 404,
  "title": "could not find job",
  "type": "https://www.rev.ai/api/v1/errors/job-not-found"
}
```

> 405 Response

```json
{
  "detail": "Job with speaker channels provided are not supported for retrieving captions",
  "status": 405,
  "title": "Job contains unsupported properties",
  "type": "https://rev.ai/api/v1/errors/invalid-job-properties"
}
```

> 406 Response

```json
{
  "allowed_values": [
    "application/x-subrip",
    "text/vtt"
  ],
  "current_value": "*/*",
  "detail": "Unsupported value */*",
  "status": 406,
  "title": "Output format is not supported",
  "type": "https://www.rev.ai/api/v1/errors/unsupported-output-format"
}
```

> 409 Response

```json
{
  "allowed_values": [
    "transcribed"
  ],
  "current_value": "in_progress",
  "detail": "Job is in progress or failed",
  "status": 409,
  "title": "Job is in invalid state",
  "type": "https://rev.ai/api/v1/errors/invalid-job-state"
}
```

<h3 id="get-captions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Rev.ai API Captions<br>***<br>Note: Caption output format is required in the Accept header. The supported headers are `application/x-subrip` and `text/vtt`.<br>([SRT](https://en.wikipedia.org/wiki/SubRip))<br>|Inline|
|401|Unauthorized|Request Unauthorized<br>***<br>Caused by an old or invalid [access token](#section/Authentication/Access-Token), try regenerating your token on your [access token page](https://rev.ai/access_token).<br>|Inline|
|404|Not Found|Job Not Found|Inline|
|405|Method Not Allowed|Invalid Job Property|Inline|
|406|Not Acceptable|Invalid Caption Format|Inline|
|409|Conflict|Invalid Job State<br>***<br>In case of failure, more details can be found at [`GET /jobs/{id}`](#operation/GetJobById)<br>|Inline|

<h3 id="get-captions-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|integer|false|none|HTTP status code of the error|
|title|string|false|none|Short, human-readable summary of the problem type|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|integer|false|none|HTTP status code of the error|
|title|string|false|none|Short, human-readable summary of the problem type|
|type|string|false|none|URI that identifies the problem|

Status Code **405**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|integer|false|none|HTTP status code of the error|
|title|string|false|none|Short, human-readable summary of the problem type|
|type|string|false|none|URI that identifies the problem|
|detail|string|false|none|Human-readable explanation specific to this occurrence of the problem|

Status Code **406**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|integer|false|none|HTTP status code of the error|
|title|string|false|none|Short, human-readable summary of the problem type|
|type|string|false|none|URI that identifies the problem|
|allowed_values|[string]|false|none|Allowed values for this request|
|current_value|string|false|none|Value passed in given request|
|detail|string|false|none|Human-readable explanation specific to this occurrence of the problem|

Status Code **409**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|integer|false|none|HTTP status code of the error|
|title|string|false|none|Short, human-readable summary of the problem type|
|type|string|false|none|URI that identifies the problem|
|allowed_values|[string]|false|none|Allowed values for this request|
|current_value|string|false|none|Value passed in given request|
|detail|string|false|none|Human-readable explanation specific to this occurrence of the problem|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Access-Token
</aside>

<h1 id="asynchronous-speech-to-text-api-documentation-transcript">Transcript</h1>

## Get Transcript By Id

<a id="opIdGetTranscriptById"></a>

> Code samples

```bash
curl https://example.com/jobs/string/transcript \
  -H 'Accept: application/vnd.rev.transcript.v1.0+json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /jobs/{id}/transcript`

Returns the transcript for a completed transcription job. Transcript can be returned as either JSON or plaintext format. Transcript output format can be specified in the `Accept` header. Returns JSON by default.
***
Note: For streaming jobs, transient failure of our storage during a live session may prevent the final hypothesis elements from saving properly, resulting in an incomplete transcript. This is rare, but not impossible. To guarantee 100% completeness, we recommend capturing all final hypothesis when you receive them on the client.


<h3 id="get-transcript-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept|header|string|false|MIME type specifying the transcription output format|
|id|path|string|true|Rev.ai API Job Id|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Accept|application/vnd.rev.transcript.v1.0+json|
|Accept|text/plain|

> Example responses

> 200 Response

```json
{
  "monologues": [
    {
      "elements": [
        {
          "confidence": 1,
          "end_ts": 1.5,
          "ts": 0.5,
          "type": "text",
          "value": "Hello"
        },
        {
          "type": "punct",
          "value": " "
        },
        {
          "confidence": 0.8,
          "end_ts": 2.85,
          "ts": 1.75,
          "type": "text",
          "value": "World"
        },
        {
          "type": "punct",
          "value": "."
        }
      ],
      "speaker": 1
    },
    {
      "elements": [
        {
          "confidence": 1,
          "end_ts": 3.5,
          "ts": 3,
          "type": "text",
          "value": "monologues"
        },
        {
          "type": "punct",
          "value": " "
        },
        {
          "confidence": 1,
          "end_ts": 3.9,
          "ts": 3.6,
          "type": "text",
          "value": "are"
        },
        {
          "type": "punct",
          "value": " "
        },
        {
          "confidence": 1,
          "end_ts": 4.3,
          "ts": 4,
          "type": "text",
          "value": "a"
        },
        {
          "type": "punct",
          "value": " "
        },
        {
          "confidence": 1,
          "end_ts": 5.5,
          "ts": 4.5,
          "type": "text",
          "value": "block"
        },
        {
          "type": "punct",
          "value": " "
        },
        {
          "confidence": 1,
          "end_ts": 6.14,
          "ts": 5.75,
          "type": "text",
          "value": "of"
        },
        {
          "type": "punct",
          "value": " "
        },
        {
          "type": "unknown",
          "value": "<inaudible>"
        },
        {
          "type": "punct",
          "value": " "
        },
        {
          "confidence": 1,
          "end_ts": 7.78,
          "ts": 6.5,
          "type": "text",
          "value": "text"
        },
        {
          "type": "punct",
          "value": "."
        }
      ],
      "speaker": 2
    }
  ]
}
```

> 401 Response

```json
{
  "status": 401,
  "title": "Authorization has been denied for this request"
}
```

> 404 Response

```json
{
  "status": 404,
  "title": "could not find job",
  "type": "https://www.rev.ai/api/v1/errors/job-not-found"
}
```

> 406 Response

```json
{
  "allowed_values": [
    "text/plain",
    "application/vnd.rev.transcript.v1.0+json"
  ],
  "current_value": "*/*",
  "detail": "Unsupported value */*",
  "status": 406,
  "title": "Output format is not supported",
  "type": "https://www.rev.ai/api/v1/errors/unsupported-output-format"
}
```

> 409 Response

```json
{
  "allowed_values": [
    "transcribed"
  ],
  "current_value": "in_progress",
  "detail": "Job is in progress or failed",
  "status": 409,
  "title": "Job is in invalid state",
  "type": "https://rev.ai/api/v1/errors/invalid-job-state"
}
```

<h3 id="get-transcript-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Rev.ai API Transcript<br>***<br>Note: Transcript output format is required in the Accept header. Output can either be in Rev's JSON format or plaintext.<br>|[Transcript](#schematranscript)|
|401|Unauthorized|Request Unauthorized<br>***<br>Caused by an old or invalid [access token](#section/Authentication/Access-Token), try regenerating your token on your [access token page](https://rev.ai/access_token).<br>|Inline|
|404|Not Found|Job Not Found|Inline|
|406|Not Acceptable|Invalid Transcript Format|Inline|
|409|Conflict|Invalid Job State<br>***<br>In case of failure, more details can be found at [`GET /jobs/{id}`](#operation/GetJobById)<br>|Inline|

<h3 id="get-transcript-by-id-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|integer|false|none|HTTP status code of the error|
|title|string|false|none|Short, human-readable summary of the problem type|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|integer|false|none|HTTP status code of the error|
|title|string|false|none|Short, human-readable summary of the problem type|
|type|string|false|none|URI that identifies the problem|

Status Code **406**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|integer|false|none|HTTP status code of the error|
|title|string|false|none|Short, human-readable summary of the problem type|
|type|string|false|none|URI that identifies the problem|
|allowed_values|[string]|false|none|Allowed values for this request|
|current_value|string|false|none|Value passed in given request|
|detail|string|false|none|Human-readable explanation specific to this occurrence of the problem|

Status Code **409**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|integer|false|none|HTTP status code of the error|
|title|string|false|none|Short, human-readable summary of the problem type|
|type|string|false|none|URI that identifies the problem|
|allowed_values|[string]|false|none|Allowed values for this request|
|current_value|string|false|none|Value passed in given request|
|detail|string|false|none|Human-readable explanation specific to this occurrence of the problem|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Access-Token
</aside>

# Schemas

<h2 id="tocS_Account">Account</h2>
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_Account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
{
  "balance_seconds": 150,
  "email": "jay@rev.ai"
}
```

Rev.ai Account Model

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balance_seconds|integer|false|none|Amount of Rev.ai API credits remaining in seconds|
|email|string|false|none|Email of developer account|

<h2 id="tocS_DescriptionlessJobOptions">DescriptionlessJobOptions</h2>
<!-- backwards compatibility -->
<a id="schemadescriptionlessjoboptions"></a>
<a id="schema_DescriptionlessJobOptions"></a>
<a id="tocSdescriptionlessjoboptions"></a>
<a id="tocsdescriptionlessjoboptions"></a>

```json
{
  "metadata": "sample metadata",
  "callback_url": "https://www.example.com/callback",
  "custom_vocabulary_id": "cvgnDwmB6iXevn",
  "delete_after_seconds": 50,
  "filter_profanity": true,
  "language": "en",
  "media_url": "https://www.rev.ai/FTC_Sample_1.mp3",
  "remove_disfluencies": true,
  "skip_diarization": true,
  "skip_punctuation": true,
  "speaker_channels_count": 2
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metadata|string \| null|false|none|none|
|callback_url|string \| null|false|none|none|
|custom_vocabulary_id|string \| null|false|none|none|
|delete_after_seconds|integer \| null|false|none|none|
|filter_profanity|boolean \| null|false|none|none|
|language|string \| null|false|none|none|
|media_url|string \| null|false|none|none|
|remove_disfluencies|boolean \| null|false|none|none|
|skip_diarization|boolean \| null|false|none|none|
|skip_punctuation|boolean \| null|false|none|none|
|speaker_channels_count|integer \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|language|en|
|language|ar|
|language|bg|
|language|ca|
|language|cmn|
|language|cs|
|language|da|
|language|de|
|language|el|
|language|es|
|language|fi|
|language|fr|
|language|hi|
|language|hr|
|language|hu|
|language|it|
|language|ja|
|language|ko|
|language|lt|
|language|lv|
|language|ms|
|language|nl|
|language|no|
|language|pl|
|language|pt|
|language|ro|
|language|ru|
|language|sk|
|language|sl|
|language|sv|
|language|tr|

<h2 id="tocS_Job">Job</h2>
<!-- backwards compatibility -->
<a id="schemajob"></a>
<a id="schema_Job"></a>
<a id="tocSjob"></a>
<a id="tocsjob"></a>

```json
{
  "created_on": "2018-05-05T23:23:22.29Z",
  "delete_after_seconds": 50,
  "id": "Umx5c6F7pH7r",
  "status": "in_progress",
  "type": "async"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callback_url|object|false|none|Callback url provided by the user.|
|completed_on|string(dateTime) \| null|false|none|The date and time the job was completed, whether successfully or failing, in ISO-8601 UTC form|
|created_on|string(dateTime)|false|none|The date and time the job was created in ISO-8601 UTC form|
|custom_vocabulary_id|object|false|none|User-supplied custom vocabulary ID to be used with job for transcription.|
|delete_after_seconds|object|false|none|Amount of time after job completion when job is auto-deleted. Present only when preference set in job request.|
|duration_seconds|number(double) \| null|false|none|Duration of the file in seconds. Null if the file could not be retrieved or there was not a valid media file|
|failure|string \| null|false|none|Simple reason of why the transcription job failed. Check `failure_detail` for specific details and solutions|
|failure_detail|string \| null|false|none|Human-readable reason why the job failed|
|filter_profanity|object|false|none|User-supplied preference on whether to remove explicit words.|
|id|string|false|none|Id of the job|
|language|object|false|none|User-supplied language to transcribe the audio into.|
|media_url|object|false|none|Media url provided by the job submission. Null if the job was provided using a local file.|
|metadata|object|false|none|Optional metadata that was provided during job submission|
|name|string \| null|false|none|Name of the file provided. Present when the file name is available|
|remove_disfluencies|object|false|none|User-supplied preference on whether to remove disfluencies.|
|skip_diarization|object|false|none|User-supplied preference on whether to skip diarization.|
|skip_punctuation|object|false|none|User-supplied preference on whether to skip punctuation.|
|speaker_channels_count|object|false|none|User-supplied number of speaker channels in the audio.|
|status|string|false|none|Current status of the job|
|type|string|false|none|Type of speech recognition performed. Currently the only supported values are 'async' for asynchronous jobs and `stream` for streaming jobs|
|metadata|string \| null|false|none|none|
|callback_url|string \| null|false|none|none|
|custom_vocabulary_id|string \| null|false|none|none|
|delete_after_seconds|integer \| null|false|none|none|
|filter_profanity|boolean \| null|false|none|none|
|language|string \| null|false|none|none|
|media_url|string \| null|false|none|none|
|remove_disfluencies|boolean \| null|false|none|none|
|skip_diarization|boolean \| null|false|none|none|
|skip_punctuation|boolean \| null|false|none|none|
|speaker_channels_count|integer \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|failure|internal_processing|
|failure|download_failure|
|failure|duration_exceeded|
|failure|duration_too_short|
|failure|invalid_media|
|failure|empty_media|
|failure|transcription|
|failure|insufficient_balance|
|failure|invoicing_limit_exceeded|
|status|in_progress|
|status|transcribed|
|status|failed|
|type|async|
|language|en|
|language|ar|
|language|bg|
|language|ca|
|language|cmn|
|language|cs|
|language|da|
|language|de|
|language|el|
|language|es|
|language|fi|
|language|fr|
|language|hi|
|language|hr|
|language|hu|
|language|it|
|language|ja|
|language|ko|
|language|lt|
|language|lv|
|language|ms|
|language|nl|
|language|no|
|language|pl|
|language|pt|
|language|ro|
|language|ru|
|language|sk|
|language|sl|
|language|sv|
|language|tr|

<h2 id="tocS_SubmitJobMediaUrlOptions">SubmitJobMediaUrlOptions</h2>
<!-- backwards compatibility -->
<a id="schemasubmitjobmediaurloptions"></a>
<a id="schema_SubmitJobMediaUrlOptions"></a>
<a id="tocSsubmitjobmediaurloptions"></a>
<a id="tocssubmitjobmediaurloptions"></a>

```json
{
  "media_url": "https://www.rev.ai/FTC_Sample_1.mp3",
  "callback_url": "https://www.example.com/callback",
  "custom_vocabulary_id": "cvgnDwmB6iXevn",
  "delete_after_seconds": 50,
  "filter_profanity": true,
  "language": "en",
  "metadata": "sample metadata",
  "remove_disfluencies": true,
  "skip_diarization": true,
  "skip_punctuation": true,
  "speaker_channels_count": 2,
  "custom_vocabularies": [
    {
      "phrases": [
        "Paul McCartney",
        "Amelia Earhart",
        "Weiss-Bergman",
        "BLM"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|media_url|string|true|none|Direct download media url. Ignored if submitting job from file. **Note:** Media files longer than 17 hours are not supported for English transcription, and media files longer than 12 hours are not supported for non-English transcription. For non-English jobs, expected turnaround time can be up to 6 hours.|
|callback_url|object|false|none|Optional callback url to invoke when processing is complete|
|custom_vocabulary_id|object|false|none|**This feature is in beta.** You can supply the id of a pre-completed custom vocabulary that you submitted through the [Custom Vocabularies API](https://rev.ai/docs/streaming#operation/SubmitCustomVocabulary) instead of uploading the list of phrases using the `custom_vocabularies` parameter. Using `custom_vocabulary_id` or `custom_vocabularies` with the same list of phrases yields the same transcription result, but `custom_vocabulary_id` allows your submission to finish processing faster by 6 seconds on average. <br><br>You cannot use both `custom_vocabulary_id` and `custom_vocabularies` at the same time, and doing so will result in a 400 response. If the supplied id represents an incomplete, deleted, or non-existent custom vocabulary then you will receive a 404 response.<br>|
|delete_after_seconds|object|false|none|Specify the number of seconds after job completion when job is auto-deleted. It may take up to 2 minutes after the scheduled time for the job to be deleted.<br>The number of seconds provided must range from `0` seconds to `2592000` seconds (30 days).<br>|
|filter_profanity|object|false|none|Enabling this option will filter for approx. 600 profanities, which cover most use cases. If a transcribed word matches a word on this list, then all the characters of that word will be replaced by asterisks except for the first and last character.<br>|
|language|object|false|none|You can provide a language parameter for transcribing audio in one of the following languages:<br><br>\| Language   \| ISO 639 Language Code                                \|<br>\|------------\|-----------------------------------------------\|<br>\| Arabic \| ar \|<br>\| Bulgarian  \| bg \|<br>\| Catalan    \| ca \|<br>\| Croatian   \| hr \|<br>\| Czech  \| cs \|<br>\| Danish \| da \|<br>\| Dutch  \| nl \|<br>\| English    \| en \|<br>\| Finnish    \| fi \|<br>\| French \| fr \|<br>\| German \| de \|<br>\| Greek  \| el \|<br>\| Hindi  \| hi \|<br>\| Hungarian  \| hu \|<br>\| Italian    \| it \|<br>\| Japanese   \| ja \|<br>\| Korean \| ko \|<br>\| Lithuanian \| lt \|<br>\| Latvian    \| lv \|<br>\| Malay  \| ms \|<br>\| Mandarin   \| cmn \|<br>\| Norwegian  \| no \|<br>\| Polish \| pl \|<br>\| Portuguese \| pt \|<br>\| Romanian   \| ro \|<br>\| Russian    \| ru \|<br>\| Slovak \| sk \|<br>\| Slovenian  \| sl \|<br>\| Spanish    \| es \|<br>\| Swedish    \| sv \|<br>\| Turkish    \| tr \|<br>Language parameter is provided as a [ISO 639-1 language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes), with the exception of Mandarin (cmn) which is supplied as an [ISO 639-3 language code](https://en.wikipedia.org/wiki/ISO_639-3).<br><br>Only 1 language can be selected per audio, i.e. no multiple languages in one transcription job. Additionally, the following parameters may **not** be used with non-English languages: `skip_punctuation`, `remove_disfluencies`, `filter_profanity`, `speaker_channels_count`, `custom_vocabulary_id`.<br>|
|metadata|object|false|none|Optional metadata that was provided during submission|
|remove_disfluencies|object|false|none|Currently we only define disfluencies as 'ums' and 'uhs'. When set to true, disfluencies will be not appear in the transcript.<br>|
|skip_diarization|object|false|none|Specify if speaker diarization will be skipped by the speech engine|
|skip_punctuation|object|false|none|Specify if "punct" type elements will be skipped by the speech engine. For JSON outputs, this includes removing spaces. For text outputs,<br>words will still be delimited by a space<br>|
|speaker_channels_count|object|false|none|Use to specify the total number of unique speaker channels in the audio.<br><br>Given the number of audio channels provided, each channel will be transcribed<br>separately and the channel id assigned to the `speaker` label. The final output will be a combination of all individual channel outputs. Overlapping `monologues` will have ordering broken<br>by the order in which the first spoken `element` of each `monologue` occurs. If `speaker_channels_count` is greater than the actual channels in the audio,<br>the job will fail with `invalid_media`.<br><br>**Note:**<br>  - The amount charged will be the duration of the file multiplied by the number of channels specified.<br>  - When using `speaker_channels_count` each channel will be diarized as one speaker, and the value of `skip_diarization` will be ignored if provided<br>|
|custom_vocabularies|[object]|false|none|none|
|metadata|string \| null|false|none|none|
|callback_url|string \| null|false|none|none|
|custom_vocabulary_id|string \| null|false|none|none|
|delete_after_seconds|integer \| null|false|none|none|
|filter_profanity|boolean \| null|false|none|none|
|language|string \| null|false|none|none|
|media_url|string \| null|true|none|none|
|remove_disfluencies|boolean \| null|false|none|none|
|skip_diarization|boolean \| null|false|none|none|
|skip_punctuation|boolean \| null|false|none|none|
|speaker_channels_count|integer \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|language|en|
|language|ar|
|language|bg|
|language|ca|
|language|cmn|
|language|cs|
|language|da|
|language|de|
|language|el|
|language|es|
|language|fi|
|language|fr|
|language|hi|
|language|hr|
|language|hu|
|language|it|
|language|ja|
|language|ko|
|language|lt|
|language|lv|
|language|ms|
|language|nl|
|language|no|
|language|pl|
|language|pt|
|language|ro|
|language|ru|
|language|sk|
|language|sl|
|language|sv|
|language|tr|

<h2 id="tocS_SubmitJobOptions">SubmitJobOptions</h2>
<!-- backwards compatibility -->
<a id="schemasubmitjoboptions"></a>
<a id="schema_SubmitJobOptions"></a>
<a id="tocSsubmitjoboptions"></a>
<a id="tocssubmitjoboptions"></a>

```json
{
  "callback_url": "https://www.example.com/callback",
  "custom_vocabulary_id": "cvgnDwmB6iXevn",
  "delete_after_seconds": 50,
  "filter_profanity": true,
  "language": "en",
  "metadata": "sample metadata",
  "remove_disfluencies": true,
  "skip_diarization": true,
  "skip_punctuation": true,
  "speaker_channels_count": 2,
  "custom_vocabularies": [
    {
      "phrases": [
        "Paul McCartney",
        "Amelia Earhart",
        "Weiss-Bergman",
        "BLM"
      ]
    }
  ],
  "media_url": "https://www.rev.ai/FTC_Sample_1.mp3"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callback_url|object|false|none|Optional callback url to invoke when processing is complete|
|custom_vocabulary_id|object|false|none|**This feature is in beta.** You can supply the id of a pre-completed custom vocabulary that you submitted through the [Custom Vocabularies API](https://rev.ai/docs/streaming#operation/SubmitCustomVocabulary) instead of uploading the list of phrases using the `custom_vocabularies` parameter. Using `custom_vocabulary_id` or `custom_vocabularies` with the same list of phrases yields the same transcription result, but `custom_vocabulary_id` allows your submission to finish processing faster by 6 seconds on average. <br><br>You cannot use both `custom_vocabulary_id` and `custom_vocabularies` at the same time, and doing so will result in a 400 response. If the supplied id represents an incomplete, deleted, or non-existent custom vocabulary then you will receive a 404 response.<br>|
|delete_after_seconds|object|false|none|Specify the number of seconds after job completion when job is auto-deleted. It may take up to 2 minutes after the scheduled time for the job to be deleted.<br>The number of seconds provided must range from `0` seconds to `2592000` seconds (30 days).<br>|
|filter_profanity|object|false|none|Enabling this option will filter for approx. 600 profanities, which cover most use cases. If a transcribed word matches a word on this list, then all the characters of that word will be replaced by asterisks except for the first and last character.<br>|
|language|object|false|none|You can provide a language parameter for transcribing audio in one of the following languages:<br><br>\| Language   \| ISO 639 Language Code                                \|<br>\|------------\|-----------------------------------------------\|<br>\| Arabic \| ar \|<br>\| Bulgarian  \| bg \|<br>\| Catalan    \| ca \|<br>\| Croatian   \| hr \|<br>\| Czech  \| cs \|<br>\| Danish \| da \|<br>\| Dutch  \| nl \|<br>\| English    \| en \|<br>\| Finnish    \| fi \|<br>\| French \| fr \|<br>\| German \| de \|<br>\| Greek  \| el \|<br>\| Hindi  \| hi \|<br>\| Hungarian  \| hu \|<br>\| Italian    \| it \|<br>\| Japanese   \| ja \|<br>\| Korean \| ko \|<br>\| Lithuanian \| lt \|<br>\| Latvian    \| lv \|<br>\| Malay  \| ms \|<br>\| Mandarin   \| cmn \|<br>\| Norwegian  \| no \|<br>\| Polish \| pl \|<br>\| Portuguese \| pt \|<br>\| Romanian   \| ro \|<br>\| Russian    \| ru \|<br>\| Slovak \| sk \|<br>\| Slovenian  \| sl \|<br>\| Spanish    \| es \|<br>\| Swedish    \| sv \|<br>\| Turkish    \| tr \|<br>Language parameter is provided as a [ISO 639-1 language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes), with the exception of Mandarin (cmn) which is supplied as an [ISO 639-3 language code](https://en.wikipedia.org/wiki/ISO_639-3).<br><br>Only 1 language can be selected per audio, i.e. no multiple languages in one transcription job. Additionally, the following parameters may **not** be used with non-English languages: `skip_punctuation`, `remove_disfluencies`, `filter_profanity`, `speaker_channels_count`, `custom_vocabulary_id`.<br>|
|metadata|object|false|none|Optional metadata that was provided during submission|
|remove_disfluencies|object|false|none|Currently we only define disfluencies as 'ums' and 'uhs'. When set to true, disfluencies will be not appear in the transcript.<br>|
|skip_diarization|object|false|none|Specify if speaker diarization will be skipped by the speech engine|
|skip_punctuation|object|false|none|Specify if "punct" type elements will be skipped by the speech engine. For JSON outputs, this includes removing spaces. For text outputs,<br>words will still be delimited by a space<br>|
|speaker_channels_count|object|false|none|Use to specify the total number of unique speaker channels in the audio.<br><br>Given the number of audio channels provided, each channel will be transcribed<br>separately and the channel id assigned to the `speaker` label. The final output will be a combination of all individual channel outputs. Overlapping `monologues` will have ordering broken<br>by the order in which the first spoken `element` of each `monologue` occurs. If `speaker_channels_count` is greater than the actual channels in the audio,<br>the job will fail with `invalid_media`.<br><br>**Note:**<br>  - The amount charged will be the duration of the file multiplied by the number of channels specified.<br>  - When using `speaker_channels_count` each channel will be diarized as one speaker, and the value of `skip_diarization` will be ignored if provided<br>|
|custom_vocabularies|[object]|false|none|none|
|metadata|string \| null|false|none|none|
|callback_url|string \| null|false|none|none|
|custom_vocabulary_id|string \| null|false|none|none|
|delete_after_seconds|integer \| null|false|none|none|
|filter_profanity|boolean \| null|false|none|none|
|language|string \| null|false|none|none|
|media_url|string \| null|false|none|none|
|remove_disfluencies|boolean \| null|false|none|none|
|skip_diarization|boolean \| null|false|none|none|
|skip_punctuation|boolean \| null|false|none|none|
|speaker_channels_count|integer \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|language|en|
|language|ar|
|language|bg|
|language|ca|
|language|cmn|
|language|cs|
|language|da|
|language|de|
|language|el|
|language|es|
|language|fi|
|language|fr|
|language|hi|
|language|hr|
|language|hu|
|language|it|
|language|ja|
|language|ko|
|language|lt|
|language|lv|
|language|ms|
|language|nl|
|language|no|
|language|pl|
|language|pt|
|language|ro|
|language|ru|
|language|sk|
|language|sl|
|language|sv|
|language|tr|

<h2 id="tocS_Transcript">Transcript</h2>
<!-- backwards compatibility -->
<a id="schematranscript"></a>
<a id="schema_Transcript"></a>
<a id="tocStranscript"></a>
<a id="tocstranscript"></a>

```json
{
  "monologues": [
    {
      "elements": [
        {
          "confidence": 0.85,
          "ts": 0.75,
          "ts_end": 1.25,
          "type": "text",
          "value": "Hello"
        }
      ],
      "speaker": 1
    }
  ]
}
```

Rev.ai Transcript Model
***
Note: properties are not displayed in the returned object if they are null

Jobs with skip_diarization set to true will only show a single speaker for the entire duration of the transcript.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|monologues|[object]|false|none|none|
