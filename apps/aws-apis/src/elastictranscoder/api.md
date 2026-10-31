<h1 id="amazon-elastic-transcoder">Amazon Elastic Transcoder v2012-09-25</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<fullname>AWS Elastic Transcoder Service</fullname> <p>The AWS Elastic Transcoder Service.</p>

Base URLs:

* <a href="http://elastictranscoder.us-east-1.amazonaws.com">http://elastictranscoder.us-east-1.amazonaws.com</a> - The Amazon Elastic Transcoder multi-region endpoint

* <a href="https://elastictranscoder.us-east-1.amazonaws.com">https://elastictranscoder.us-east-1.amazonaws.com</a> - The Amazon Elastic Transcoder multi-region endpoint

* <a href="http://elastictranscoder.cn-north-1.amazonaws.com.cn">http://elastictranscoder.cn-north-1.amazonaws.com.cn</a> - The Amazon Elastic Transcoder endpoint for China (Beijing) and China (Ningxia)

* <a href="https://elastictranscoder.cn-north-1.amazonaws.com.cn">https://elastictranscoder.cn-north-1.amazonaws.com.cn</a> - The Amazon Elastic Transcoder endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/elastictranscoder/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-elastic-transcoder-default">Default</h1>

## ReadJob

<a id="opIdReadJob"></a>

> Code samples

```bash
curl https://elastictranscoder.us-east-1.amazonaws.com/2012-09-25/jobs/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2012-09-25/jobs/{Id}`

The ReadJob operation returns detailed information about a job.

<h3 id="readjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The identifier of the job for which you want to get detailed information.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Job": {
    "Id": {},
    "Arn": {},
    "PipelineId": {},
    "Input": {
      "Key": {},
      "FrameRate": {},
      "Resolution": {},
      "AspectRatio": {},
      "Interlaced": {},
      "Container": {},
      "Encryption": {
        "Mode": {},
        "Key": {},
        "KeyMd5": {},
        "InitializationVector": {}
      },
      "TimeSpan": {
        "StartTime": {},
        "Duration": {}
      },
      "InputCaptions": {
        "MergePolicy": {},
        "CaptionSources": {}
      },
      "DetectedProperties": {
        "Width": {},
        "Height": {},
        "FrameRate": {},
        "FileSize": {},
        "DurationMillis": {}
      }
    },
    "Inputs": {},
    "Output": {
      "Id": {},
      "Key": {},
      "ThumbnailPattern": {},
      "ThumbnailEncryption": {
        "Mode": {},
        "Key": {},
        "KeyMd5": {},
        "InitializationVector": {}
      },
      "Rotate": {},
      "PresetId": {},
      "SegmentDuration": {},
      "Status": {},
      "StatusDetail": {},
      "Duration": {},
      "Width": {},
      "Height": {},
      "FrameRate": {},
      "FileSize": {},
      "DurationMillis": {},
      "Watermarks": {},
      "AlbumArt": {
        "MergePolicy": {},
        "Artwork": {}
      },
      "Composition": {},
      "Captions": {
        "MergePolicy": {},
        "CaptionSources": {},
        "CaptionFormats": {}
      },
      "Encryption": {
        "Mode": {},
        "Key": {},
        "KeyMd5": {},
        "InitializationVector": {}
      },
      "AppliedColorSpaceConversion": {}
    },
    "Outputs": {},
    "OutputKeyPrefix": {},
    "Playlists": {},
    "Status": {},
    "UserMetadata": {
      "property1": "string",
      "property2": "string"
    },
    "Timing": {
      "SubmitTimeMillis": {},
      "StartTimeMillis": {},
      "FinishTimeMillis": {}
    }
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="readjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ReadJobResponse](#schemareadjobresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|IncompatibleVersionException|[IncompatibleVersionException](#schemaincompatibleversionexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CancelJob

<a id="opIdCancelJob"></a>

> Code samples

```bash
curl https://elastictranscoder.us-east-1.amazonaws.com/2012-09-25/jobs/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2012-09-25/jobs/{Id}`

<p>The CancelJob operation cancels an unfinished job.</p> <note> <p>You can only cancel a job that has a status of <code>Submitted</code>. To prevent a pipeline from starting to process a job while you're getting the job identifier, use <a>UpdatePipelineStatus</a> to temporarily pause the pipeline.</p> </note>

<h3 id="canceljob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|<p>The identifier of the job that you want to cancel.</p> <p>To get a list of the jobs (including their <code>jobId</code>) that have a status of <code>Submitted</code>, use the <a>ListJobsByStatus</a> API action.</p>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 202 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="canceljob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[CancelJobResponse](#schemacanceljobresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|IncompatibleVersionException|[IncompatibleVersionException](#schemaincompatibleversionexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateJob

<a id="opIdCreateJob"></a>

> Code samples

```bash
curl https://elastictranscoder.us-east-1.amazonaws.com/2012-09-25/jobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "PipelineId": "string",
    "Input": {
      "Key": {},
      "FrameRate": {},
      "Resolution": {},
      "AspectRatio": {},
      "Interlaced": {},
      "Container": {},
      "Encryption": {
        "Mode": {},
        "Key": {},
        "KeyMd5": {},
        "InitializationVector": {}
      },
      "TimeSpan": {
        "StartTime": {},
        "Duration": {}
      },
      "InputCaptions": {
        "MergePolicy": {},
        "CaptionSources": {}
      },
      "DetectedProperties": {
        "Width": {},
        "Height": {},
        "FrameRate": {},
        "FileSize": {},
        "DurationMillis": {}
      }
    },
    "Inputs": [
      {
        "Key": {},
        "FrameRate": {},
        "Resolution": {},
        "AspectRatio": {},
        "Interlaced": {},
        "Container": {},
        "Encryption": {
          "Mode": {},
          "Key": {},
          "KeyMd5": {},
          "InitializationVector": {}
        },
        "TimeSpan": {
          "StartTime": {},
          "Duration": {}
        },
        "InputCaptions": {
          "MergePolicy": {},
          "CaptionSources": {}
        },
        "DetectedProperties": {
          "Width": {},
          "Height": {},
          "FrameRate": {},
          "FileSize": {},
          "DurationMillis": {}
        }
      }
    ],
    "Output": {
      "Key": {},
      "ThumbnailPattern": {},
      "ThumbnailEncryption": {
        "Mode": {},
        "Key": {},
        "KeyMd5": {},
        "InitializationVector": {}
      },
      "Rotate": {},
      "PresetId": {},
      "SegmentDuration": {},
      "Watermarks": {},
      "AlbumArt": {
        "MergePolicy": {},
        "Artwork": {}
      },
      "Composition": {},
      "Captions": {
        "MergePolicy": {},
        "CaptionSources": {},
        "CaptionFormats": {}
      },
      "Encryption": {
        "Mode": {},
        "Key": {},
        "KeyMd5": {},
        "InitializationVector": {}
      }
    },
    "Outputs": [
      {
        "Key": {},
        "ThumbnailPattern": {},
        "ThumbnailEncryption": {
          "Mode": {},
          "Key": {},
          "KeyMd5": {},
          "InitializationVector": {}
        },
        "Rotate": {},
        "PresetId": {},
        "SegmentDuration": {},
        "Watermarks": {},
        "AlbumArt": {
          "MergePolicy": {},
          "Artwork": {}
        },
        "Composition": {},
        "Captions": {
          "MergePolicy": {},
          "CaptionSources": {},
          "CaptionFormats": {}
        },
        "Encryption": {
          "Mode": {},
          "Key": {},
          "KeyMd5": {},
          "InitializationVector": {}
        }
      }
    ],
    "OutputKeyPrefix": "string",
    "Playlists": [
      {
        "Name": {},
        "Format": {},
        "OutputKeys": {},
        "HlsContentProtection": {
          "Method": {},
          "Key": {},
          "KeyMd5": {},
          "InitializationVector": {},
          "LicenseAcquisitionUrl": {},
          "KeyStoragePolicy": {}
        },
        "PlayReadyDrm": {
          "Format": {},
          "Key": {},
          "KeyMd5": {},
          "KeyId": {},
          "InitializationVector": {},
          "LicenseAcquisitionUrl": {}
        }
      }
    ],
    "UserMetadata": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /2012-09-25/jobs`

<p>When you create a job, Elastic Transcoder returns JSON data that includes the values that you specified plus information about the job that is created.</p> <p>If you have specified more than one output for your jobs (for example, one output for the Kindle Fire and another output for the Apple iPhone 4s), you currently must use the Elastic Transcoder API to list the jobs (as opposed to the AWS Console).</p>

> Body parameter

```json
{
  "PipelineId": "string",
  "Input": {
    "Key": {},
    "FrameRate": {},
    "Resolution": {},
    "AspectRatio": {},
    "Interlaced": {},
    "Container": {},
    "Encryption": {
      "Mode": {},
      "Key": {},
      "KeyMd5": {},
      "InitializationVector": {}
    },
    "TimeSpan": {
      "StartTime": {},
      "Duration": {}
    },
    "InputCaptions": {
      "MergePolicy": {},
      "CaptionSources": {}
    },
    "DetectedProperties": {
      "Width": {},
      "Height": {},
      "FrameRate": {},
      "FileSize": {},
      "DurationMillis": {}
    }
  },
  "Inputs": [
    {
      "Key": {},
      "FrameRate": {},
      "Resolution": {},
      "AspectRatio": {},
      "Interlaced": {},
      "Container": {},
      "Encryption": {
        "Mode": {},
        "Key": {},
        "KeyMd5": {},
        "InitializationVector": {}
      },
      "TimeSpan": {
        "StartTime": {},
        "Duration": {}
      },
      "InputCaptions": {
        "MergePolicy": {},
        "CaptionSources": {}
      },
      "DetectedProperties": {
        "Width": {},
        "Height": {},
        "FrameRate": {},
        "FileSize": {},
        "DurationMillis": {}
      }
    }
  ],
  "Output": {
    "Key": {},
    "ThumbnailPattern": {},
    "ThumbnailEncryption": {
      "Mode": {},
      "Key": {},
      "KeyMd5": {},
      "InitializationVector": {}
    },
    "Rotate": {},
    "PresetId": {},
    "SegmentDuration": {},
    "Watermarks": {},
    "AlbumArt": {
      "MergePolicy": {},
      "Artwork": {}
    },
    "Composition": {},
    "Captions": {
      "MergePolicy": {},
      "CaptionSources": {},
      "CaptionFormats": {}
    },
    "Encryption": {
      "Mode": {},
      "Key": {},
      "KeyMd5": {},
      "InitializationVector": {}
    }
  },
  "Outputs": [
    {
      "Key": {},
      "ThumbnailPattern": {},
      "ThumbnailEncryption": {
        "Mode": {},
        "Key": {},
        "KeyMd5": {},
        "InitializationVector": {}
      },
      "Rotate": {},
      "PresetId": {},
      "SegmentDuration": {},
      "Watermarks": {},
      "AlbumArt": {
        "MergePolicy": {},
        "Artwork": {}
      },
      "Composition": {},
      "Captions": {
        "MergePolicy": {},
        "CaptionSources": {},
        "CaptionFormats": {}
      },
      "Encryption": {
        "Mode": {},
        "Key": {},
        "KeyMd5": {},
        "InitializationVector": {}
      }
    }
  ],
  "OutputKeyPrefix": "string",
  "Playlists": [
    {
      "Name": {},
      "Format": {},
      "OutputKeys": {},
      "HlsContentProtection": {
        "Method": {},
        "Key": {},
        "KeyMd5": {},
        "InitializationVector": {},
        "LicenseAcquisitionUrl": {},
        "KeyStoragePolicy": {}
      },
      "PlayReadyDrm": {
        "Format": {},
        "Key": {},
        "KeyMd5": {},
        "KeyId": {},
        "InitializationVector": {},
        "LicenseAcquisitionUrl": {}
      }
    }
  ],
  "UserMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createjob-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» PipelineId|body|string|true|The <code>Id</code> of the pipeline that you want Elastic Transcoder to use for transcoding. The pipeline determines several settings, including the Amazon S3 bucket from which Elastic Transcoder gets the files to transcode and the bucket into which Elastic Transcoder puts the transcoded files.|
|» Input|body|object|false|Information about the file that you're transcoding.|
|» » Key|body|object|false|none|
|» » FrameRate|body|object|false|none|
|» » Resolution|body|object|false|none|
|» » AspectRatio|body|object|false|none|
|» » Interlaced|body|object|false|none|
|» » Container|body|object|false|none|
|» » Encryption|body|object|false|none|
|» » » Mode|body|object|false|none|
|» » » Key|body|object|false|none|
|» » » KeyMd5|body|object|false|none|
|» » » InitializationVector|body|object|false|none|
|» » TimeSpan|body|object|false|none|
|» » » StartTime|body|object|false|none|
|» » » Duration|body|object|false|none|
|» » InputCaptions|body|object|false|none|
|» » » MergePolicy|body|object|false|none|
|» » » CaptionSources|body|object|false|none|
|» » DetectedProperties|body|object|false|none|
|» » » Width|body|object|false|none|
|» » » Height|body|object|false|none|
|» » » FrameRate|body|object|false|none|
|» » » FileSize|body|object|false|none|
|» » » DurationMillis|body|object|false|none|
|» Inputs|body|[[JobInput](#schemajobinput)]|false|A section of the request body that provides information about the files that are being transcoded.|
|» Output|body|object|false|The <code>CreateJobOutput</code> structure.|
|» » Key|body|object|false|none|
|» » ThumbnailPattern|body|object|false|none|
|» » ThumbnailEncryption|body|object|false|none|
|» » » Mode|body|object|false|none|
|» » » Key|body|object|false|none|
|» » » KeyMd5|body|object|false|none|
|» » » InitializationVector|body|object|false|none|
|» » Rotate|body|object|false|none|
|» » PresetId|body|object|false|none|
|» » SegmentDuration|body|object|false|none|
|» » Watermarks|body|object|false|none|
|» » AlbumArt|body|object|false|none|
|» » » MergePolicy|body|object|false|none|
|» » » Artwork|body|object|false|none|
|» » Composition|body|object|false|none|
|» » Captions|body|object|false|none|
|» » » MergePolicy|body|object|false|none|
|» » » CaptionSources|body|object|false|none|
|» » » CaptionFormats|body|object|false|none|
|» » Encryption|body|object|false|none|
|» » » Mode|body|object|false|none|
|» » » Key|body|object|false|none|
|» » » KeyMd5|body|object|false|none|
|» » » InitializationVector|body|object|false|none|
|» Outputs|body|[[CreateJobOutput](#schemacreatejoboutput)]|false| A section of the request body that provides information about the transcoded (target) files. We recommend that you use the <code>Outputs</code> syntax instead of the <code>Output</code> syntax. |
|» OutputKeyPrefix|body|string|false|The value, if any, that you want Elastic Transcoder to prepend to the names of all files that this job creates, including output files, thumbnails, and playlists.|
|» Playlists|body|[[CreateJobPlaylist](#schemacreatejobplaylist)]|false|<p>If you specify a preset in <code>PresetId</code> for which the value of <code>Container</code> is fmp4 (Fragmented MP4) or ts (MPEG-TS), Playlists contains information about the master playlists that you want Elastic Transcoder to create.</p> <p>The maximum number of master playlists in a job is 30.</p>|
|» UserMetadata|body|object|false|User-defined metadata that you want to associate with an Elastic Transcoder job. You specify metadata in <code>key/value</code> pairs, and you can add up to 10 <code>key/value</code> pairs per job. Elastic Transcoder does not guarantee that <code>key/value</code> pairs are returned in the same order in which you specify them.|
|» » **additionalProperties**|body|[String](#schemastring)|false|none|

> Example responses

> 201 Response

```json
{
  "Job": {
    "Id": {},
    "Arn": {},
    "PipelineId": {},
    "Input": {
      "Key": {},
      "FrameRate": {},
      "Resolution": {},
      "AspectRatio": {},
      "Interlaced": {},
      "Container": {},
      "Encryption": {
        "Mode": {},
        "Key": {},
        "KeyMd5": {},
        "InitializationVector": {}
      },
      "TimeSpan": {
        "StartTime": {},
        "Duration": {}
      },
      "InputCaptions": {
        "MergePolicy": {},
        "CaptionSources": {}
      },
      "DetectedProperties": {
        "Width": {},
        "Height": {},
        "FrameRate": {},
        "FileSize": {},
        "DurationMillis": {}
      }
    },
    "Inputs": {},
    "Output": {
      "Id": {},
      "Key": {},
      "ThumbnailPattern": {},
      "ThumbnailEncryption": {
        "Mode": {},
        "Key": {},
        "KeyMd5": {},
        "InitializationVector": {}
      },
      "Rotate": {},
      "PresetId": {},
      "SegmentDuration": {},
      "Status": {},
      "StatusDetail": {},
      "Duration": {},
      "Width": {},
      "Height": {},
      "FrameRate": {},
      "FileSize": {},
      "DurationMillis": {},
      "Watermarks": {},
      "AlbumArt": {
        "MergePolicy": {},
        "Artwork": {}
      },
      "Composition": {},
      "Captions": {
        "MergePolicy": {},
        "CaptionSources": {},
        "CaptionFormats": {}
      },
      "Encryption": {
        "Mode": {},
        "Key": {},
        "KeyMd5": {},
        "InitializationVector": {}
      },
      "AppliedColorSpaceConversion": {}
    },
    "Outputs": {},
    "OutputKeyPrefix": {},
    "Playlists": {},
    "Status": {},
    "UserMetadata": {
      "property1": "string",
      "property2": "string"
    },
    "Timing": {
      "SubmitTimeMillis": {},
      "StartTimeMillis": {},
      "FinishTimeMillis": {}
    }
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="createjob-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreateJobResponse](#schemacreatejobresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|IncompatibleVersionException|[IncompatibleVersionException](#schemaincompatibleversionexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPipelines

<a id="opIdListPipelines"></a>

> Code samples

```bash
curl https://elastictranscoder.us-east-1.amazonaws.com/2012-09-25/pipelines \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2012-09-25/pipelines`

The ListPipelines operation gets a list of the pipelines associated with the current AWS account.

<h3 id="listpipelines-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Ascending|query|string|false|To list pipelines in chronological order by the date and time that they were created, enter <code>true</code>. To list pipelines in reverse chronological order, enter <code>false</code>.|
|PageToken|query|string|false|When Elastic Transcoder returns more than one page of results, use <code>pageToken</code> in subsequent <code>GET</code> requests to get each successive page of results. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Pipelines": {},
  "NextPageToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="listpipelines-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPipelinesResponse](#schemalistpipelinesresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|IncompatibleVersionException|[IncompatibleVersionException](#schemaincompatibleversionexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreatePipeline

<a id="opIdCreatePipeline"></a>

> Code samples

```bash
curl https://elastictranscoder.us-east-1.amazonaws.com/2012-09-25/pipelines \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "InputBucket": "string",
    "OutputBucket": "string",
    "Role": "string",
    "AwsKmsKeyArn": "string",
    "Notifications": {
      "Progressing": {},
      "Completed": {},
      "Warning": {},
      "Error": {}
    },
    "ContentConfig": {
      "Bucket": {},
      "StorageClass": {},
      "Permissions": {}
    },
    "ThumbnailConfig": {
      "Bucket": {},
      "StorageClass": {},
      "Permissions": {}
    }
  }'
```

`POST /2012-09-25/pipelines`

The CreatePipeline operation creates a pipeline with settings that you specify.

> Body parameter

```json
{
  "Name": "string",
  "InputBucket": "string",
  "OutputBucket": "string",
  "Role": "string",
  "AwsKmsKeyArn": "string",
  "Notifications": {
    "Progressing": {},
    "Completed": {},
    "Warning": {},
    "Error": {}
  },
  "ContentConfig": {
    "Bucket": {},
    "StorageClass": {},
    "Permissions": {}
  },
  "ThumbnailConfig": {
    "Bucket": {},
    "StorageClass": {},
    "Permissions": {}
  }
}
```

<h3 id="createpipeline-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|true|<p>The name of the pipeline. We recommend that the name be unique within the AWS account, but uniqueness is not enforced.</p> <p>Constraints: Maximum 40 characters.</p>|
|» InputBucket|body|string|true|The Amazon S3 bucket in which you saved the media files that you want to transcode.|
|» OutputBucket|body|string|false|<p>The Amazon S3 bucket in which you want Elastic Transcoder to save the transcoded files. (Use this, or use ContentConfig:Bucket plus ThumbnailConfig:Bucket.)</p> <p>Specify this value when all of the following are true:</p> <ul> <li> <p>You want to save transcoded files, thumbnails (if any), and playlists (if any) together in one bucket.</p> </li> <li> <p>You do not want to specify the users or groups who have access to the transcoded files, thumbnails, and playlists.</p> </li> <li> <p>You do not want to specify the permissions that Elastic Transcoder grants to the files. </p> <important> <p>When Elastic Transcoder saves files in <code>OutputBucket</code>, it grants full control over the files only to the AWS account that owns the role that is specified by <code>Role</code>.</p> </important> </li> <li> <p>You want to associate the transcoded files and thumbnails with the Amazon S3 Standard storage class.</p> </li> </ul> <p>If you want to save transcoded files and playlists in one bucket and thumbnails in another bucket, specify which users can access the transcoded files or the permissions the users have, or change the Amazon S3 storage class, omit <code>OutputBucket</code> and specify values for <code>ContentConfig</code> and <code>ThumbnailConfig</code> instead.</p>|
|» Role|body|string|true|The IAM Amazon Resource Name (ARN) for the role that you want Elastic Transcoder to use to create the pipeline.|
|» AwsKmsKeyArn|body|string|false|<p>The AWS Key Management Service (AWS KMS) key that you want to use with this pipeline.</p> <p>If you use either <code>s3</code> or <code>s3-aws-kms</code> as your <code>Encryption:Mode</code>, you don't need to provide a key with your job because a default key, known as an AWS-KMS key, is created for you automatically. You need to provide an AWS-KMS key only if you want to use a non-default AWS-KMS key, or if you are using an <code>Encryption:Mode</code> of <code>aes-cbc-pkcs7</code>, <code>aes-ctr</code>, or <code>aes-gcm</code>.</p>|
|» Notifications|body|object|false|<p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important>|
|» » Progressing|body|object|false|none|
|» » Completed|body|object|false|none|
|» » Warning|body|object|false|none|
|» » Error|body|object|false|none|
|» ContentConfig|body|object|false|The <code>PipelineOutputConfig</code> structure.|
|» » Bucket|body|object|false|none|
|» » StorageClass|body|object|false|none|
|» » Permissions|body|object|false|none|
|» ThumbnailConfig|body|object|false|The <code>PipelineOutputConfig</code> structure.|
|» » Bucket|body|object|false|none|
|» » StorageClass|body|object|false|none|
|» » Permissions|body|object|false|none|

> Example responses

> 201 Response

```json
{
  "Pipeline": {
    "Id": {},
    "Arn": {},
    "Name": {},
    "Status": {},
    "InputBucket": {},
    "OutputBucket": {},
    "Role": {},
    "AwsKmsKeyArn": {},
    "Notifications": {
      "Progressing": {},
      "Completed": {},
      "Warning": {},
      "Error": {}
    },
    "ContentConfig": {
      "Bucket": {},
      "StorageClass": {},
      "Permissions": {}
    },
    "ThumbnailConfig": {
      "Bucket": {},
      "StorageClass": {},
      "Permissions": {}
    }
  },
  "Warnings": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="createpipeline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreatePipelineResponse](#schemacreatepipelineresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|IncompatibleVersionException|[IncompatibleVersionException](#schemaincompatibleversionexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|484|484|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|485|485|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPresets

<a id="opIdListPresets"></a>

> Code samples

```bash
curl https://elastictranscoder.us-east-1.amazonaws.com/2012-09-25/presets \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2012-09-25/presets`

The ListPresets operation gets a list of the default presets included with Elastic Transcoder and the presets that you've added in an AWS region.

<h3 id="listpresets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Ascending|query|string|false|To list presets in chronological order by the date and time that they were created, enter <code>true</code>. To list presets in reverse chronological order, enter <code>false</code>.|
|PageToken|query|string|false|When Elastic Transcoder returns more than one page of results, use <code>pageToken</code> in subsequent <code>GET</code> requests to get each successive page of results. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Presets": {},
  "NextPageToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="listpresets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPresetsResponse](#schemalistpresetsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|IncompatibleVersionException|[IncompatibleVersionException](#schemaincompatibleversionexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreatePreset

<a id="opIdCreatePreset"></a>

> Code samples

```bash
curl https://elastictranscoder.us-east-1.amazonaws.com/2012-09-25/presets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "Description": "string",
    "Container": "string",
    "Video": {
      "Codec": {},
      "CodecOptions": {
        "property1": "string",
        "property2": "string"
      },
      "KeyframesMaxDist": {},
      "FixedGOP": {},
      "BitRate": {},
      "FrameRate": {},
      "MaxFrameRate": {},
      "Resolution": {},
      "AspectRatio": {},
      "MaxWidth": {},
      "MaxHeight": {},
      "DisplayAspectRatio": {},
      "SizingPolicy": {},
      "PaddingPolicy": {},
      "Watermarks": {}
    },
    "Audio": {
      "Codec": {},
      "SampleRate": {},
      "BitRate": {},
      "Channels": {},
      "AudioPackingMode": {},
      "CodecOptions": {
        "Profile": {},
        "BitDepth": {},
        "BitOrder": {},
        "Signed": {}
      }
    },
    "Thumbnails": {
      "Format": {},
      "Interval": {},
      "Resolution": {},
      "AspectRatio": {},
      "MaxWidth": {},
      "MaxHeight": {},
      "SizingPolicy": {},
      "PaddingPolicy": {}
    }
  }'
```

`POST /2012-09-25/presets`

<p>The CreatePreset operation creates a preset with settings that you specify.</p> <important> <p>Elastic Transcoder checks the CreatePreset settings to ensure that they meet Elastic Transcoder requirements and to determine whether they comply with H.264 standards. If your settings are not valid for Elastic Transcoder, Elastic Transcoder returns an HTTP 400 response (<code>ValidationException</code>) and does not create the preset. If the settings are valid for Elastic Transcoder but aren't strictly compliant with the H.264 standard, Elastic Transcoder creates the preset and returns a warning message in the response. This helps you determine whether your settings comply with the H.264 standard while giving you greater flexibility with respect to the video that Elastic Transcoder produces.</p> </important> <p>Elastic Transcoder uses the H.264 video-compression format. For more information, see the International Telecommunication Union publication <i>Recommendation ITU-T H.264: Advanced video coding for generic audiovisual services</i>.</p>

> Body parameter

```json
{
  "Name": "string",
  "Description": "string",
  "Container": "string",
  "Video": {
    "Codec": {},
    "CodecOptions": {
      "property1": "string",
      "property2": "string"
    },
    "KeyframesMaxDist": {},
    "FixedGOP": {},
    "BitRate": {},
    "FrameRate": {},
    "MaxFrameRate": {},
    "Resolution": {},
    "AspectRatio": {},
    "MaxWidth": {},
    "MaxHeight": {},
    "DisplayAspectRatio": {},
    "SizingPolicy": {},
    "PaddingPolicy": {},
    "Watermarks": {}
  },
  "Audio": {
    "Codec": {},
    "SampleRate": {},
    "BitRate": {},
    "Channels": {},
    "AudioPackingMode": {},
    "CodecOptions": {
      "Profile": {},
      "BitDepth": {},
      "BitOrder": {},
      "Signed": {}
    }
  },
  "Thumbnails": {
    "Format": {},
    "Interval": {},
    "Resolution": {},
    "AspectRatio": {},
    "MaxWidth": {},
    "MaxHeight": {},
    "SizingPolicy": {},
    "PaddingPolicy": {}
  }
}
```

<h3 id="createpreset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|true|The name of the preset. We recommend that the name be unique within the AWS account, but uniqueness is not enforced.|
|» Description|body|string|false|A description of the preset.|
|» Container|body|string|true|The container type for the output file. Valid values include <code>flac</code>, <code>flv</code>, <code>fmp4</code>, <code>gif</code>, <code>mp3</code>, <code>mp4</code>, <code>mpg</code>, <code>mxf</code>, <code>oga</code>, <code>ogg</code>, <code>ts</code>, and <code>webm</code>.|
|» Video|body|object|false|The <code>VideoParameters</code> structure.|
|» » Codec|body|object|false|none|
|» » CodecOptions|body|object|false|none|
|» » » **additionalProperties**|body|[CodecOption](#schemacodecoption)|false|none|
|» » KeyframesMaxDist|body|object|false|none|
|» » FixedGOP|body|object|false|none|
|» » BitRate|body|object|false|none|
|» » FrameRate|body|object|false|none|
|» » MaxFrameRate|body|object|false|none|
|» » Resolution|body|object|false|none|
|» » AspectRatio|body|object|false|none|
|» » MaxWidth|body|object|false|none|
|» » MaxHeight|body|object|false|none|
|» » DisplayAspectRatio|body|object|false|none|
|» » SizingPolicy|body|object|false|none|
|» » PaddingPolicy|body|object|false|none|
|» » Watermarks|body|object|false|none|
|» Audio|body|object|false|Parameters required for transcoding audio.|
|» » Codec|body|object|false|none|
|» » SampleRate|body|object|false|none|
|» » BitRate|body|object|false|none|
|» » Channels|body|object|false|none|
|» » AudioPackingMode|body|object|false|none|
|» » CodecOptions|body|object|false|none|
|» » » Profile|body|object|false|none|
|» » » BitDepth|body|object|false|none|
|» » » BitOrder|body|object|false|none|
|» » » Signed|body|object|false|none|
|» Thumbnails|body|object|false|Thumbnails for videos.|
|» » Format|body|object|false|none|
|» » Interval|body|object|false|none|
|» » Resolution|body|object|false|none|
|» » AspectRatio|body|object|false|none|
|» » MaxWidth|body|object|false|none|
|» » MaxHeight|body|object|false|none|
|» » SizingPolicy|body|object|false|none|
|» » PaddingPolicy|body|object|false|none|

> Example responses

> 201 Response

```json
{
  "Preset": {
    "Id": {},
    "Arn": {},
    "Name": {},
    "Description": {},
    "Container": {},
    "Audio": {
      "Codec": {},
      "SampleRate": {},
      "BitRate": {},
      "Channels": {},
      "AudioPackingMode": {},
      "CodecOptions": {
        "Profile": {},
        "BitDepth": {},
        "BitOrder": {},
        "Signed": {}
      }
    },
    "Video": {
      "Codec": {},
      "CodecOptions": {
        "property1": "string",
        "property2": "string"
      },
      "KeyframesMaxDist": {},
      "FixedGOP": {},
      "BitRate": {},
      "FrameRate": {},
      "MaxFrameRate": {},
      "Resolution": {},
      "AspectRatio": {},
      "MaxWidth": {},
      "MaxHeight": {},
      "DisplayAspectRatio": {},
      "SizingPolicy": {},
      "PaddingPolicy": {},
      "Watermarks": {}
    },
    "Thumbnails": {
      "Format": {},
      "Interval": {},
      "Resolution": {},
      "AspectRatio": {},
      "MaxWidth": {},
      "MaxHeight": {},
      "SizingPolicy": {},
      "PaddingPolicy": {}
    },
    "Type": {}
  },
  "Warning": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="createpreset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[CreatePresetResponse](#schemacreatepresetresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|IncompatibleVersionException|[IncompatibleVersionException](#schemaincompatibleversionexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|LimitExceededException|[LimitExceededException](#schemalimitexceededexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ReadPipeline

<a id="opIdReadPipeline"></a>

> Code samples

```bash
curl https://elastictranscoder.us-east-1.amazonaws.com/2012-09-25/pipelines/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2012-09-25/pipelines/{Id}`

The ReadPipeline operation gets detailed information about a pipeline.

<h3 id="readpipeline-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The identifier of the pipeline to read.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Pipeline": {
    "Id": {},
    "Arn": {},
    "Name": {},
    "Status": {},
    "InputBucket": {},
    "OutputBucket": {},
    "Role": {},
    "AwsKmsKeyArn": {},
    "Notifications": {
      "Progressing": {},
      "Completed": {},
      "Warning": {},
      "Error": {}
    },
    "ContentConfig": {
      "Bucket": {},
      "StorageClass": {},
      "Permissions": {}
    },
    "ThumbnailConfig": {
      "Bucket": {},
      "StorageClass": {},
      "Permissions": {}
    }
  },
  "Warnings": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="readpipeline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ReadPipelineResponse](#schemareadpipelineresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|IncompatibleVersionException|[IncompatibleVersionException](#schemaincompatibleversionexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdatePipeline

<a id="opIdUpdatePipeline"></a>

> Code samples

```bash
curl https://elastictranscoder.us-east-1.amazonaws.com/2012-09-25/pipelines/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Name": "string",
    "InputBucket": "string",
    "Role": "string",
    "AwsKmsKeyArn": "string",
    "Notifications": {
      "Progressing": {},
      "Completed": {},
      "Warning": {},
      "Error": {}
    },
    "ContentConfig": {
      "Bucket": {},
      "StorageClass": {},
      "Permissions": {}
    },
    "ThumbnailConfig": {
      "Bucket": {},
      "StorageClass": {},
      "Permissions": {}
    }
  }'
```

`PUT /2012-09-25/pipelines/{Id}`

<p> Use the <code>UpdatePipeline</code> operation to update settings for a pipeline.</p> <important> <p>When you change pipeline settings, your changes take effect immediately. Jobs that you have already submitted and that Elastic Transcoder has not started to process are affected in addition to jobs that you submit after you change settings. </p> </important>

> Body parameter

```json
{
  "Name": "string",
  "InputBucket": "string",
  "Role": "string",
  "AwsKmsKeyArn": "string",
  "Notifications": {
    "Progressing": {},
    "Completed": {},
    "Warning": {},
    "Error": {}
  },
  "ContentConfig": {
    "Bucket": {},
    "StorageClass": {},
    "Permissions": {}
  },
  "ThumbnailConfig": {
    "Bucket": {},
    "StorageClass": {},
    "Permissions": {}
  }
}
```

<h3 id="updatepipeline-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The ID of the pipeline that you want to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Name|body|string|false|<p>The name of the pipeline. We recommend that the name be unique within the AWS account, but uniqueness is not enforced.</p> <p>Constraints: Maximum 40 characters</p>|
|» InputBucket|body|string|false|The Amazon S3 bucket in which you saved the media files that you want to transcode and the graphics that you want to use as watermarks.|
|» Role|body|string|false|The IAM Amazon Resource Name (ARN) for the role that you want Elastic Transcoder to use to transcode jobs for this pipeline.|
|» AwsKmsKeyArn|body|string|false|<p>The AWS Key Management Service (AWS KMS) key that you want to use with this pipeline.</p> <p>If you use either <code>s3</code> or <code>s3-aws-kms</code> as your <code>Encryption:Mode</code>, you don't need to provide a key with your job because a default key, known as an AWS-KMS key, is created for you automatically. You need to provide an AWS-KMS key only if you want to use a non-default AWS-KMS key, or if you are using an <code>Encryption:Mode</code> of <code>aes-cbc-pkcs7</code>, <code>aes-ctr</code>, or <code>aes-gcm</code>.</p>|
|» Notifications|body|object|false|<p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important>|
|» » Progressing|body|object|false|none|
|» » Completed|body|object|false|none|
|» » Warning|body|object|false|none|
|» » Error|body|object|false|none|
|» ContentConfig|body|object|false|The <code>PipelineOutputConfig</code> structure.|
|» » Bucket|body|object|false|none|
|» » StorageClass|body|object|false|none|
|» » Permissions|body|object|false|none|
|» ThumbnailConfig|body|object|false|The <code>PipelineOutputConfig</code> structure.|
|» » Bucket|body|object|false|none|
|» » StorageClass|body|object|false|none|
|» » Permissions|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "Pipeline": {
    "Id": {},
    "Arn": {},
    "Name": {},
    "Status": {},
    "InputBucket": {},
    "OutputBucket": {},
    "Role": {},
    "AwsKmsKeyArn": {},
    "Notifications": {
      "Progressing": {},
      "Completed": {},
      "Warning": {},
      "Error": {}
    },
    "ContentConfig": {
      "Bucket": {},
      "StorageClass": {},
      "Permissions": {}
    },
    "ThumbnailConfig": {
      "Bucket": {},
      "StorageClass": {},
      "Permissions": {}
    }
  },
  "Warnings": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="updatepipeline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdatePipelineResponse](#schemaupdatepipelineresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|IncompatibleVersionException|[IncompatibleVersionException](#schemaincompatibleversionexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|484|484|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|485|485|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeletePipeline

<a id="opIdDeletePipeline"></a>

> Code samples

```bash
curl https://elastictranscoder.us-east-1.amazonaws.com/2012-09-25/pipelines/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2012-09-25/pipelines/{Id}`

<p>The DeletePipeline operation removes a pipeline.</p> <p> You can only delete a pipeline that has never been used or that is not currently in use (doesn't contain any active jobs). If the pipeline is currently in use, <code>DeletePipeline</code> returns an error. </p>

<h3 id="deletepipeline-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The identifier of the pipeline that you want to delete.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 202 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="deletepipeline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[DeletePipelineResponse](#schemadeletepipelineresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|IncompatibleVersionException|[IncompatibleVersionException](#schemaincompatibleversionexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ReadPreset

<a id="opIdReadPreset"></a>

> Code samples

```bash
curl https://elastictranscoder.us-east-1.amazonaws.com/2012-09-25/presets/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2012-09-25/presets/{Id}`

The ReadPreset operation gets detailed information about a preset.

<h3 id="readpreset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The identifier of the preset for which you want to get detailed information.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Preset": {
    "Id": {},
    "Arn": {},
    "Name": {},
    "Description": {},
    "Container": {},
    "Audio": {
      "Codec": {},
      "SampleRate": {},
      "BitRate": {},
      "Channels": {},
      "AudioPackingMode": {},
      "CodecOptions": {
        "Profile": {},
        "BitDepth": {},
        "BitOrder": {},
        "Signed": {}
      }
    },
    "Video": {
      "Codec": {},
      "CodecOptions": {
        "property1": "string",
        "property2": "string"
      },
      "KeyframesMaxDist": {},
      "FixedGOP": {},
      "BitRate": {},
      "FrameRate": {},
      "MaxFrameRate": {},
      "Resolution": {},
      "AspectRatio": {},
      "MaxWidth": {},
      "MaxHeight": {},
      "DisplayAspectRatio": {},
      "SizingPolicy": {},
      "PaddingPolicy": {},
      "Watermarks": {}
    },
    "Thumbnails": {
      "Format": {},
      "Interval": {},
      "Resolution": {},
      "AspectRatio": {},
      "MaxWidth": {},
      "MaxHeight": {},
      "SizingPolicy": {},
      "PaddingPolicy": {}
    },
    "Type": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="readpreset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ReadPresetResponse](#schemareadpresetresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|IncompatibleVersionException|[IncompatibleVersionException](#schemaincompatibleversionexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeletePreset

<a id="opIdDeletePreset"></a>

> Code samples

```bash
curl https://elastictranscoder.us-east-1.amazonaws.com/2012-09-25/presets/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /2012-09-25/presets/{Id}`

<p>The DeletePreset operation removes a preset that you've added in an AWS region.</p> <note> <p>You can't delete the default presets that are included with Elastic Transcoder.</p> </note>

<h3 id="deletepreset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The identifier of the preset for which you want to get detailed information.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 202 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="deletepreset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success|[DeletePresetResponse](#schemadeletepresetresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|IncompatibleVersionException|[IncompatibleVersionException](#schemaincompatibleversionexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListJobsByPipeline

<a id="opIdListJobsByPipeline"></a>

> Code samples

```bash
curl https://elastictranscoder.us-east-1.amazonaws.com/2012-09-25/jobsByPipeline/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2012-09-25/jobsByPipeline/{PipelineId}`

<p>The ListJobsByPipeline operation gets a list of the jobs currently in a pipeline.</p> <p>Elastic Transcoder returns all of the jobs currently in the specified pipeline. The response body contains one element for each job that satisfies the search criteria.</p>

<h3 id="listjobsbypipeline-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PipelineId|path|string|true|The ID of the pipeline for which you want to get job information.|
|Ascending|query|string|false| To list jobs in chronological order by the date and time that they were submitted, enter <code>true</code>. To list jobs in reverse chronological order, enter <code>false</code>. |
|PageToken|query|string|false| When Elastic Transcoder returns more than one page of results, use <code>pageToken</code> in subsequent <code>GET</code> requests to get each successive page of results. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Jobs": {},
  "NextPageToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="listjobsbypipeline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListJobsByPipelineResponse](#schemalistjobsbypipelineresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|IncompatibleVersionException|[IncompatibleVersionException](#schemaincompatibleversionexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListJobsByStatus

<a id="opIdListJobsByStatus"></a>

> Code samples

```bash
curl https://elastictranscoder.us-east-1.amazonaws.com/2012-09-25/jobsByStatus/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /2012-09-25/jobsByStatus/{Status}`

The ListJobsByStatus operation gets a list of jobs that have a specified status. The response body contains one element for each job that satisfies the search criteria.

<h3 id="listjobsbystatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Status|path|string|true|To get information about all of the jobs associated with the current AWS account that have a given status, specify the following status: <code>Submitted</code>, <code>Progressing</code>, <code>Complete</code>, <code>Canceled</code>, or <code>Error</code>.|
|Ascending|query|string|false| To list jobs in chronological order by the date and time that they were submitted, enter <code>true</code>. To list jobs in reverse chronological order, enter <code>false</code>. |
|PageToken|query|string|false| When Elastic Transcoder returns more than one page of results, use <code>pageToken</code> in subsequent <code>GET</code> requests to get each successive page of results. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Jobs": {},
  "NextPageToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="listjobsbystatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListJobsByStatusResponse](#schemalistjobsbystatusresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|IncompatibleVersionException|[IncompatibleVersionException](#schemaincompatibleversionexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TestRole

<a id="opIdTestRole"></a>

> Code samples

```bash
curl https://elastictranscoder.us-east-1.amazonaws.com/2012-09-25/roleTests \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Role": "string",
    "InputBucket": "string",
    "OutputBucket": "string",
    "Topics": [
      "string"
    ]
  }'
```

`POST /2012-09-25/roleTests`

<aside class="warning">
This operation is deprecated
</aside>

<p>The TestRole operation tests the IAM role used to create the pipeline.</p> <p>The <code>TestRole</code> action lets you determine whether the IAM role you are using has sufficient permissions to let Elastic Transcoder perform tasks associated with the transcoding process. The action attempts to assume the specified IAM role, checks read access to the input and output buckets, and tries to send a test notification to Amazon SNS topics that you specify.</p>

> Body parameter

```json
{
  "Role": "string",
  "InputBucket": "string",
  "OutputBucket": "string",
  "Topics": [
    "string"
  ]
}
```

<h3 id="testrole-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Role|body|string|true|The IAM Amazon Resource Name (ARN) for the role that you want Elastic Transcoder to test.|
|» InputBucket|body|string|true|The Amazon S3 bucket that contains media files to be transcoded. The action attempts to read from this bucket.|
|» OutputBucket|body|string|true|The Amazon S3 bucket that Elastic Transcoder writes transcoded media files to. The action attempts to read from this bucket.|
|» Topics|body|[[SnsTopic](#schemasnstopic)]|true|The ARNs of one or more Amazon Simple Notification Service (Amazon SNS) topics that you want the action to send a test notification to.|

> Example responses

> 200 Response

```json
{
  "Success": {},
  "Messages": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="testrole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TestRoleResponse](#schematestroleresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|IncompatibleVersionException|[IncompatibleVersionException](#schemaincompatibleversionexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdatePipelineNotifications

<a id="opIdUpdatePipelineNotifications"></a>

> Code samples

```bash
curl https://elastictranscoder.us-east-1.amazonaws.com/2012-09-25/pipelines/string/notifications \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Notifications": {
      "Progressing": {},
      "Completed": {},
      "Warning": {},
      "Error": {}
    }
  }'
```

`POST /2012-09-25/pipelines/{Id}/notifications`

<p>With the UpdatePipelineNotifications operation, you can update Amazon Simple Notification Service (Amazon SNS) notifications for a pipeline.</p> <p>When you update notifications for a pipeline, Elastic Transcoder returns the values that you specified in the request.</p>

> Body parameter

```json
{
  "Notifications": {
    "Progressing": {},
    "Completed": {},
    "Warning": {},
    "Error": {}
  }
}
```

<h3 id="updatepipelinenotifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The identifier of the pipeline for which you want to change notification settings.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Notifications|body|object|true|<p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important>|
|» » Progressing|body|object|false|none|
|» » Completed|body|object|false|none|
|» » Warning|body|object|false|none|
|» » Error|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "Pipeline": {
    "Id": {},
    "Arn": {},
    "Name": {},
    "Status": {},
    "InputBucket": {},
    "OutputBucket": {},
    "Role": {},
    "AwsKmsKeyArn": {},
    "Notifications": {
      "Progressing": {},
      "Completed": {},
      "Warning": {},
      "Error": {}
    },
    "ContentConfig": {
      "Bucket": {},
      "StorageClass": {},
      "Permissions": {}
    },
    "ThumbnailConfig": {
      "Bucket": {},
      "StorageClass": {},
      "Permissions": {}
    }
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="updatepipelinenotifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdatePipelineNotificationsResponse](#schemaupdatepipelinenotificationsresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|IncompatibleVersionException|[IncompatibleVersionException](#schemaincompatibleversionexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdatePipelineStatus

<a id="opIdUpdatePipelineStatus"></a>

> Code samples

```bash
curl https://elastictranscoder.us-east-1.amazonaws.com/2012-09-25/pipelines/string/status \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Status": "string"
  }'
```

`POST /2012-09-25/pipelines/{Id}/status`

<p>The UpdatePipelineStatus operation pauses or reactivates a pipeline, so that the pipeline stops or restarts the processing of jobs.</p> <p>Changing the pipeline status is useful if you want to cancel one or more jobs. You can't cancel jobs after Elastic Transcoder has started processing them; if you pause the pipeline to which you submitted the jobs, you have more time to get the job IDs for the jobs that you want to cancel, and to send a <a>CancelJob</a> request. </p>

> Body parameter

```json
{
  "Status": "string"
}
```

<h3 id="updatepipelinestatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string|true|The identifier of the pipeline to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Status|body|string|true|<p>The desired status of the pipeline:</p> <ul> <li> <p> <code>Active</code>: The pipeline is processing jobs.</p> </li> <li> <p> <code>Paused</code>: The pipeline is not currently processing jobs.</p> </li> </ul>|

> Example responses

> 200 Response

```json
{
  "Pipeline": {
    "Id": {},
    "Arn": {},
    "Name": {},
    "Status": {},
    "InputBucket": {},
    "OutputBucket": {},
    "Role": {},
    "AwsKmsKeyArn": {},
    "Notifications": {
      "Progressing": {},
      "Completed": {},
      "Warning": {},
      "Error": {}
    },
    "ContentConfig": {
      "Bucket": {},
      "StorageClass": {},
      "Permissions": {}
    },
    "ThumbnailConfig": {
      "Bucket": {},
      "StorageClass": {},
      "Permissions": {}
    }
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="updatepipelinestatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdatePipelineStatusResponse](#schemaupdatepipelinestatusresponse)|
|480|480|ValidationException|[ValidationException](#schemavalidationexception)|
|481|481|IncompatibleVersionException|[IncompatibleVersionException](#schemaincompatibleversionexception)|
|482|482|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|483|483|ResourceInUseException|[ResourceInUseException](#schemaresourceinuseexception)|
|484|484|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|485|485|InternalServiceException|[InternalServiceException](#schemainternalserviceexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_CancelJobResponse">CancelJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacanceljobresponse"></a>
<a id="schema_CancelJobResponse"></a>
<a id="tocScanceljobresponse"></a>
<a id="tocscanceljobresponse"></a>

```json
{}
```

The response body contains a JSON object. If the job is successfully canceled, the value of <code>Success</code> is <code>true</code>.

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

```json
null
```

<h2 id="tocS_IncompatibleVersionException">IncompatibleVersionException</h2>
<!-- backwards compatibility -->
<a id="schemaincompatibleversionexception"></a>
<a id="schema_IncompatibleVersionException"></a>
<a id="tocSincompatibleversionexception"></a>
<a id="tocsincompatibleversionexception"></a>

```json
null
```

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_ResourceInUseException">ResourceInUseException</h2>
<!-- backwards compatibility -->
<a id="schemaresourceinuseexception"></a>
<a id="schema_ResourceInUseException"></a>
<a id="tocSresourceinuseexception"></a>
<a id="tocsresourceinuseexception"></a>

```json
null
```

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

```json
null
```

<h2 id="tocS_InternalServiceException">InternalServiceException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserviceexception"></a>
<a id="schema_InternalServiceException"></a>
<a id="tocSinternalserviceexception"></a>
<a id="tocsinternalserviceexception"></a>

```json
null
```

<h2 id="tocS_CreateJobResponse">CreateJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatejobresponse"></a>
<a id="schema_CreateJobResponse"></a>
<a id="tocScreatejobresponse"></a>
<a id="tocscreatejobresponse"></a>

```json
{
  "Job": {
    "Id": {},
    "Arn": {},
    "PipelineId": {},
    "Input": {
      "Key": {},
      "FrameRate": {},
      "Resolution": {},
      "AspectRatio": {},
      "Interlaced": {},
      "Container": {},
      "Encryption": {
        "Mode": {},
        "Key": {},
        "KeyMd5": {},
        "InitializationVector": {}
      },
      "TimeSpan": {
        "StartTime": {},
        "Duration": {}
      },
      "InputCaptions": {
        "MergePolicy": {},
        "CaptionSources": {}
      },
      "DetectedProperties": {
        "Width": {},
        "Height": {},
        "FrameRate": {},
        "FileSize": {},
        "DurationMillis": {}
      }
    },
    "Inputs": {},
    "Output": {
      "Id": {},
      "Key": {},
      "ThumbnailPattern": {},
      "ThumbnailEncryption": {
        "Mode": {},
        "Key": {},
        "KeyMd5": {},
        "InitializationVector": {}
      },
      "Rotate": {},
      "PresetId": {},
      "SegmentDuration": {},
      "Status": {},
      "StatusDetail": {},
      "Duration": {},
      "Width": {},
      "Height": {},
      "FrameRate": {},
      "FileSize": {},
      "DurationMillis": {},
      "Watermarks": {},
      "AlbumArt": {
        "MergePolicy": {},
        "Artwork": {}
      },
      "Composition": {},
      "Captions": {
        "MergePolicy": {},
        "CaptionSources": {},
        "CaptionFormats": {}
      },
      "Encryption": {
        "Mode": {},
        "Key": {},
        "KeyMd5": {},
        "InitializationVector": {}
      },
      "AppliedColorSpaceConversion": {}
    },
    "Outputs": {},
    "OutputKeyPrefix": {},
    "Playlists": {},
    "Status": {},
    "UserMetadata": {
      "property1": "string",
      "property2": "string"
    },
    "Timing": {
      "SubmitTimeMillis": {},
      "StartTimeMillis": {},
      "FinishTimeMillis": {}
    }
  }
}
```

The CreateJobResponse structure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Job|object|false|none|none|

<h2 id="tocS_LongKey">LongKey</h2>
<!-- backwards compatibility -->
<a id="schemalongkey"></a>
<a id="schema_LongKey"></a>
<a id="tocSlongkey"></a>
<a id="tocslongkey"></a>

```json
"string"
```

<h2 id="tocS_FrameRate">FrameRate</h2>
<!-- backwards compatibility -->
<a id="schemaframerate"></a>
<a id="schema_FrameRate"></a>
<a id="tocSframerate"></a>
<a id="tocsframerate"></a>

```json
"string"
```

<h2 id="tocS_Resolution">Resolution</h2>
<!-- backwards compatibility -->
<a id="schemaresolution"></a>
<a id="schema_Resolution"></a>
<a id="tocSresolution"></a>
<a id="tocsresolution"></a>

```json
"string"
```

<h2 id="tocS_AspectRatio">AspectRatio</h2>
<!-- backwards compatibility -->
<a id="schemaaspectratio"></a>
<a id="schema_AspectRatio"></a>
<a id="tocSaspectratio"></a>
<a id="tocsaspectratio"></a>

```json
"string"
```

<h2 id="tocS_Interlaced">Interlaced</h2>
<!-- backwards compatibility -->
<a id="schemainterlaced"></a>
<a id="schema_Interlaced"></a>
<a id="tocSinterlaced"></a>
<a id="tocsinterlaced"></a>

```json
"string"
```

<h2 id="tocS_JobContainer">JobContainer</h2>
<!-- backwards compatibility -->
<a id="schemajobcontainer"></a>
<a id="schema_JobContainer"></a>
<a id="tocSjobcontainer"></a>
<a id="tocsjobcontainer"></a>

```json
"string"
```

<h2 id="tocS_Encryption">Encryption</h2>
<!-- backwards compatibility -->
<a id="schemaencryption"></a>
<a id="schema_Encryption"></a>
<a id="tocSencryption"></a>
<a id="tocsencryption"></a>

```json
{
  "Mode": {},
  "Key": {},
  "KeyMd5": {},
  "InitializationVector": {}
}
```

The encryption settings, if any, that are used for decrypting your input files or encrypting your output files. If your input file is encrypted, you must specify the mode that Elastic Transcoder uses to decrypt your file, otherwise you must specify the mode you want Elastic Transcoder to use to encrypt your output files.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Mode|object|false|none|none|
|Key|object|false|none|none|
|KeyMd5|object|false|none|none|
|InitializationVector|object|false|none|none|

<h2 id="tocS_TimeSpan">TimeSpan</h2>
<!-- backwards compatibility -->
<a id="schematimespan"></a>
<a id="schema_TimeSpan"></a>
<a id="tocStimespan"></a>
<a id="tocstimespan"></a>

```json
{
  "StartTime": {},
  "Duration": {}
}
```

Settings that determine when a clip begins and how long it lasts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StartTime|object|false|none|none|
|Duration|object|false|none|none|

<h2 id="tocS_InputCaptions">InputCaptions</h2>
<!-- backwards compatibility -->
<a id="schemainputcaptions"></a>
<a id="schema_InputCaptions"></a>
<a id="tocSinputcaptions"></a>
<a id="tocsinputcaptions"></a>

```json
{
  "MergePolicy": {},
  "CaptionSources": {}
}
```

The captions to be created, if any.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MergePolicy|object|false|none|none|
|CaptionSources|object|false|none|none|

<h2 id="tocS_DetectedProperties">DetectedProperties</h2>
<!-- backwards compatibility -->
<a id="schemadetectedproperties"></a>
<a id="schema_DetectedProperties"></a>
<a id="tocSdetectedproperties"></a>
<a id="tocsdetectedproperties"></a>

```json
{
  "Width": {},
  "Height": {},
  "FrameRate": {},
  "FileSize": {},
  "DurationMillis": {}
}
```

The detected properties of the input file. Elastic Transcoder identifies these values from the input file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Width|object|false|none|none|
|Height|object|false|none|none|
|FrameRate|object|false|none|none|
|FileSize|object|false|none|none|
|DurationMillis|object|false|none|none|

<h2 id="tocS_JobInput">JobInput</h2>
<!-- backwards compatibility -->
<a id="schemajobinput"></a>
<a id="schema_JobInput"></a>
<a id="tocSjobinput"></a>
<a id="tocsjobinput"></a>

```json
{
  "Key": {},
  "FrameRate": {},
  "Resolution": {},
  "AspectRatio": {},
  "Interlaced": {},
  "Container": {},
  "Encryption": {
    "Mode": {},
    "Key": {},
    "KeyMd5": {},
    "InitializationVector": {}
  },
  "TimeSpan": {
    "StartTime": {},
    "Duration": {}
  },
  "InputCaptions": {
    "MergePolicy": {},
    "CaptionSources": {}
  },
  "DetectedProperties": {
    "Width": {},
    "Height": {},
    "FrameRate": {},
    "FileSize": {},
    "DurationMillis": {}
  }
}
```

Information about the file that you're transcoding.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|FrameRate|object|false|none|none|
|Resolution|object|false|none|none|
|AspectRatio|object|false|none|none|
|Interlaced|object|false|none|none|
|Container|object|false|none|none|
|Encryption|object|false|none|none|
|TimeSpan|object|false|none|none|
|InputCaptions|object|false|none|none|
|DetectedProperties|object|false|none|none|

<h2 id="tocS_Key">Key</h2>
<!-- backwards compatibility -->
<a id="schemakey"></a>
<a id="schema_Key"></a>
<a id="tocSkey"></a>
<a id="tocskey"></a>

```json
"string"
```

<h2 id="tocS_ThumbnailPattern">ThumbnailPattern</h2>
<!-- backwards compatibility -->
<a id="schemathumbnailpattern"></a>
<a id="schema_ThumbnailPattern"></a>
<a id="tocSthumbnailpattern"></a>
<a id="tocsthumbnailpattern"></a>

```json
"string"
```

<h2 id="tocS_Rotate">Rotate</h2>
<!-- backwards compatibility -->
<a id="schemarotate"></a>
<a id="schema_Rotate"></a>
<a id="tocSrotate"></a>
<a id="tocsrotate"></a>

```json
"string"
```

<h2 id="tocS_Id">Id</h2>
<!-- backwards compatibility -->
<a id="schemaid"></a>
<a id="schema_Id"></a>
<a id="tocSid"></a>
<a id="tocsid"></a>

```json
"string"
```

<h2 id="tocS_FloatString">FloatString</h2>
<!-- backwards compatibility -->
<a id="schemafloatstring"></a>
<a id="schema_FloatString"></a>
<a id="tocSfloatstring"></a>
<a id="tocsfloatstring"></a>

```json
"string"
```

<h2 id="tocS_JobWatermarks">JobWatermarks</h2>
<!-- backwards compatibility -->
<a id="schemajobwatermarks"></a>
<a id="schema_JobWatermarks"></a>
<a id="tocSjobwatermarks"></a>
<a id="tocsjobwatermarks"></a>

```json
[
  {
    "PresetWatermarkId": {},
    "InputKey": {},
    "Encryption": {
      "Mode": {},
      "Key": {},
      "KeyMd5": {},
      "InitializationVector": {}
    }
  }
]
```

<h2 id="tocS_JobAlbumArt">JobAlbumArt</h2>
<!-- backwards compatibility -->
<a id="schemajobalbumart"></a>
<a id="schema_JobAlbumArt"></a>
<a id="tocSjobalbumart"></a>
<a id="tocsjobalbumart"></a>

```json
{
  "MergePolicy": {},
  "Artwork": {}
}
```

The .jpg or .png file associated with an audio file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MergePolicy|object|false|none|none|
|Artwork|object|false|none|none|

<h2 id="tocS_Composition">Composition</h2>
<!-- backwards compatibility -->
<a id="schemacomposition"></a>
<a id="schema_Composition"></a>
<a id="tocScomposition"></a>
<a id="tocscomposition"></a>

```json
[
  {
    "TimeSpan": {
      "StartTime": {},
      "Duration": {}
    }
  }
]
```

<h2 id="tocS_Captions">Captions</h2>
<!-- backwards compatibility -->
<a id="schemacaptions"></a>
<a id="schema_Captions"></a>
<a id="tocScaptions"></a>
<a id="tocscaptions"></a>

```json
{
  "MergePolicy": {},
  "CaptionSources": {},
  "CaptionFormats": {}
}
```

The captions to be created, if any.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MergePolicy|object|false|none|none|
|CaptionSources|object|false|none|none|
|CaptionFormats|object|false|none|none|

<h2 id="tocS_CreateJobOutput">CreateJobOutput</h2>
<!-- backwards compatibility -->
<a id="schemacreatejoboutput"></a>
<a id="schema_CreateJobOutput"></a>
<a id="tocScreatejoboutput"></a>
<a id="tocscreatejoboutput"></a>

```json
{
  "Key": {},
  "ThumbnailPattern": {},
  "ThumbnailEncryption": {
    "Mode": {},
    "Key": {},
    "KeyMd5": {},
    "InitializationVector": {}
  },
  "Rotate": {},
  "PresetId": {},
  "SegmentDuration": {},
  "Watermarks": {},
  "AlbumArt": {
    "MergePolicy": {},
    "Artwork": {}
  },
  "Composition": {},
  "Captions": {
    "MergePolicy": {},
    "CaptionSources": {},
    "CaptionFormats": {}
  },
  "Encryption": {
    "Mode": {},
    "Key": {},
    "KeyMd5": {},
    "InitializationVector": {}
  }
}
```

The <code>CreateJobOutput</code> structure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|ThumbnailPattern|object|false|none|none|
|ThumbnailEncryption|object|false|none|none|
|Rotate|object|false|none|none|
|PresetId|object|false|none|none|
|SegmentDuration|object|false|none|none|
|Watermarks|object|false|none|none|
|AlbumArt|object|false|none|none|
|Composition|object|false|none|none|
|Captions|object|false|none|none|
|Encryption|object|false|none|none|

<h2 id="tocS_CreateJobPlaylist">CreateJobPlaylist</h2>
<!-- backwards compatibility -->
<a id="schemacreatejobplaylist"></a>
<a id="schema_CreateJobPlaylist"></a>
<a id="tocScreatejobplaylist"></a>
<a id="tocscreatejobplaylist"></a>

```json
{
  "Name": {},
  "Format": {},
  "OutputKeys": {},
  "HlsContentProtection": {
    "Method": {},
    "Key": {},
    "KeyMd5": {},
    "InitializationVector": {},
    "LicenseAcquisitionUrl": {},
    "KeyStoragePolicy": {}
  },
  "PlayReadyDrm": {
    "Format": {},
    "Key": {},
    "KeyMd5": {},
    "KeyId": {},
    "InitializationVector": {},
    "LicenseAcquisitionUrl": {}
  }
}
```

Information about the master playlist.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Format|object|false|none|none|
|OutputKeys|object|false|none|none|
|HlsContentProtection|object|false|none|none|
|PlayReadyDrm|object|false|none|none|

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_LimitExceededException">LimitExceededException</h2>
<!-- backwards compatibility -->
<a id="schemalimitexceededexception"></a>
<a id="schema_LimitExceededException"></a>
<a id="tocSlimitexceededexception"></a>
<a id="tocslimitexceededexception"></a>

```json
null
```

<h2 id="tocS_CreatePipelineResponse">CreatePipelineResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatepipelineresponse"></a>
<a id="schema_CreatePipelineResponse"></a>
<a id="tocScreatepipelineresponse"></a>
<a id="tocscreatepipelineresponse"></a>

```json
{
  "Pipeline": {
    "Id": {},
    "Arn": {},
    "Name": {},
    "Status": {},
    "InputBucket": {},
    "OutputBucket": {},
    "Role": {},
    "AwsKmsKeyArn": {},
    "Notifications": {
      "Progressing": {},
      "Completed": {},
      "Warning": {},
      "Error": {}
    },
    "ContentConfig": {
      "Bucket": {},
      "StorageClass": {},
      "Permissions": {}
    },
    "ThumbnailConfig": {
      "Bucket": {},
      "StorageClass": {},
      "Permissions": {}
    }
  },
  "Warnings": {}
}
```

When you create a pipeline, Elastic Transcoder returns the values that you specified in the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Pipeline|object|false|none|none|
|Warnings|object|false|none|none|

<h2 id="tocS_SnsTopic">SnsTopic</h2>
<!-- backwards compatibility -->
<a id="schemasnstopic"></a>
<a id="schema_SnsTopic"></a>
<a id="tocSsnstopic"></a>
<a id="tocssnstopic"></a>

```json
"string"
```

<h2 id="tocS_BucketName">BucketName</h2>
<!-- backwards compatibility -->
<a id="schemabucketname"></a>
<a id="schema_BucketName"></a>
<a id="tocSbucketname"></a>
<a id="tocsbucketname"></a>

```json
"string"
```

<h2 id="tocS_StorageClass">StorageClass</h2>
<!-- backwards compatibility -->
<a id="schemastorageclass"></a>
<a id="schema_StorageClass"></a>
<a id="tocSstorageclass"></a>
<a id="tocsstorageclass"></a>

```json
"string"
```

<h2 id="tocS_Permissions">Permissions</h2>
<!-- backwards compatibility -->
<a id="schemapermissions"></a>
<a id="schema_Permissions"></a>
<a id="tocSpermissions"></a>
<a id="tocspermissions"></a>

```json
[
  {
    "GranteeType": {},
    "Grantee": {},
    "Access": {}
  }
]
```

<h2 id="tocS_CreatePresetResponse">CreatePresetResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatepresetresponse"></a>
<a id="schema_CreatePresetResponse"></a>
<a id="tocScreatepresetresponse"></a>
<a id="tocscreatepresetresponse"></a>

```json
{
  "Preset": {
    "Id": {},
    "Arn": {},
    "Name": {},
    "Description": {},
    "Container": {},
    "Audio": {
      "Codec": {},
      "SampleRate": {},
      "BitRate": {},
      "Channels": {},
      "AudioPackingMode": {},
      "CodecOptions": {
        "Profile": {},
        "BitDepth": {},
        "BitOrder": {},
        "Signed": {}
      }
    },
    "Video": {
      "Codec": {},
      "CodecOptions": {
        "property1": "string",
        "property2": "string"
      },
      "KeyframesMaxDist": {},
      "FixedGOP": {},
      "BitRate": {},
      "FrameRate": {},
      "MaxFrameRate": {},
      "Resolution": {},
      "AspectRatio": {},
      "MaxWidth": {},
      "MaxHeight": {},
      "DisplayAspectRatio": {},
      "SizingPolicy": {},
      "PaddingPolicy": {},
      "Watermarks": {}
    },
    "Thumbnails": {
      "Format": {},
      "Interval": {},
      "Resolution": {},
      "AspectRatio": {},
      "MaxWidth": {},
      "MaxHeight": {},
      "SizingPolicy": {},
      "PaddingPolicy": {}
    },
    "Type": {}
  },
  "Warning": {}
}
```

The <code>CreatePresetResponse</code> structure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Preset|object|false|none|none|
|Warning|object|false|none|none|

<h2 id="tocS_VideoCodec">VideoCodec</h2>
<!-- backwards compatibility -->
<a id="schemavideocodec"></a>
<a id="schema_VideoCodec"></a>
<a id="tocSvideocodec"></a>
<a id="tocsvideocodec"></a>

```json
"string"
```

<h2 id="tocS_CodecOptions">CodecOptions</h2>
<!-- backwards compatibility -->
<a id="schemacodecoptions"></a>
<a id="schema_CodecOptions"></a>
<a id="tocScodecoptions"></a>
<a id="tocscodecoptions"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[CodecOption](#schemacodecoption)|false|none|none|

<h2 id="tocS_KeyframesMaxDist">KeyframesMaxDist</h2>
<!-- backwards compatibility -->
<a id="schemakeyframesmaxdist"></a>
<a id="schema_KeyframesMaxDist"></a>
<a id="tocSkeyframesmaxdist"></a>
<a id="tocskeyframesmaxdist"></a>

```json
"string"
```

<h2 id="tocS_FixedGOP">FixedGOP</h2>
<!-- backwards compatibility -->
<a id="schemafixedgop"></a>
<a id="schema_FixedGOP"></a>
<a id="tocSfixedgop"></a>
<a id="tocsfixedgop"></a>

```json
"string"
```

<h2 id="tocS_VideoBitRate">VideoBitRate</h2>
<!-- backwards compatibility -->
<a id="schemavideobitrate"></a>
<a id="schema_VideoBitRate"></a>
<a id="tocSvideobitrate"></a>
<a id="tocsvideobitrate"></a>

```json
"string"
```

<h2 id="tocS_MaxFrameRate">MaxFrameRate</h2>
<!-- backwards compatibility -->
<a id="schemamaxframerate"></a>
<a id="schema_MaxFrameRate"></a>
<a id="tocSmaxframerate"></a>
<a id="tocsmaxframerate"></a>

```json
"string"
```

<h2 id="tocS_DigitsOrAuto">DigitsOrAuto</h2>
<!-- backwards compatibility -->
<a id="schemadigitsorauto"></a>
<a id="schema_DigitsOrAuto"></a>
<a id="tocSdigitsorauto"></a>
<a id="tocsdigitsorauto"></a>

```json
"string"
```

<h2 id="tocS_SizingPolicy">SizingPolicy</h2>
<!-- backwards compatibility -->
<a id="schemasizingpolicy"></a>
<a id="schema_SizingPolicy"></a>
<a id="tocSsizingpolicy"></a>
<a id="tocssizingpolicy"></a>

```json
"string"
```

<h2 id="tocS_PaddingPolicy">PaddingPolicy</h2>
<!-- backwards compatibility -->
<a id="schemapaddingpolicy"></a>
<a id="schema_PaddingPolicy"></a>
<a id="tocSpaddingpolicy"></a>
<a id="tocspaddingpolicy"></a>

```json
"string"
```

<h2 id="tocS_PresetWatermarks">PresetWatermarks</h2>
<!-- backwards compatibility -->
<a id="schemapresetwatermarks"></a>
<a id="schema_PresetWatermarks"></a>
<a id="tocSpresetwatermarks"></a>
<a id="tocspresetwatermarks"></a>

```json
[
  {
    "Id": {},
    "MaxWidth": {},
    "MaxHeight": {},
    "SizingPolicy": {},
    "HorizontalAlign": {},
    "HorizontalOffset": {},
    "VerticalAlign": {},
    "VerticalOffset": {},
    "Opacity": {},
    "Target": {}
  }
]
```

<h2 id="tocS_AudioCodec">AudioCodec</h2>
<!-- backwards compatibility -->
<a id="schemaaudiocodec"></a>
<a id="schema_AudioCodec"></a>
<a id="tocSaudiocodec"></a>
<a id="tocsaudiocodec"></a>

```json
"string"
```

<h2 id="tocS_AudioSampleRate">AudioSampleRate</h2>
<!-- backwards compatibility -->
<a id="schemaaudiosamplerate"></a>
<a id="schema_AudioSampleRate"></a>
<a id="tocSaudiosamplerate"></a>
<a id="tocsaudiosamplerate"></a>

```json
"string"
```

<h2 id="tocS_AudioBitRate">AudioBitRate</h2>
<!-- backwards compatibility -->
<a id="schemaaudiobitrate"></a>
<a id="schema_AudioBitRate"></a>
<a id="tocSaudiobitrate"></a>
<a id="tocsaudiobitrate"></a>

```json
"string"
```

<h2 id="tocS_AudioChannels">AudioChannels</h2>
<!-- backwards compatibility -->
<a id="schemaaudiochannels"></a>
<a id="schema_AudioChannels"></a>
<a id="tocSaudiochannels"></a>
<a id="tocsaudiochannels"></a>

```json
"string"
```

<h2 id="tocS_AudioPackingMode">AudioPackingMode</h2>
<!-- backwards compatibility -->
<a id="schemaaudiopackingmode"></a>
<a id="schema_AudioPackingMode"></a>
<a id="tocSaudiopackingmode"></a>
<a id="tocsaudiopackingmode"></a>

```json
"string"
```

<h2 id="tocS_AudioCodecOptions">AudioCodecOptions</h2>
<!-- backwards compatibility -->
<a id="schemaaudiocodecoptions"></a>
<a id="schema_AudioCodecOptions"></a>
<a id="tocSaudiocodecoptions"></a>
<a id="tocsaudiocodecoptions"></a>

```json
{
  "Profile": {},
  "BitDepth": {},
  "BitOrder": {},
  "Signed": {}
}
```

Options associated with your audio codec.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Profile|object|false|none|none|
|BitDepth|object|false|none|none|
|BitOrder|object|false|none|none|
|Signed|object|false|none|none|

<h2 id="tocS_JpgOrPng">JpgOrPng</h2>
<!-- backwards compatibility -->
<a id="schemajpgorpng"></a>
<a id="schema_JpgOrPng"></a>
<a id="tocSjpgorpng"></a>
<a id="tocsjpgorpng"></a>

```json
"string"
```

<h2 id="tocS_Digits">Digits</h2>
<!-- backwards compatibility -->
<a id="schemadigits"></a>
<a id="schema_Digits"></a>
<a id="tocSdigits"></a>
<a id="tocsdigits"></a>

```json
"string"
```

<h2 id="tocS_ThumbnailResolution">ThumbnailResolution</h2>
<!-- backwards compatibility -->
<a id="schemathumbnailresolution"></a>
<a id="schema_ThumbnailResolution"></a>
<a id="tocSthumbnailresolution"></a>
<a id="tocsthumbnailresolution"></a>

```json
"string"
```

<h2 id="tocS_DeletePipelineResponse">DeletePipelineResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletepipelineresponse"></a>
<a id="schema_DeletePipelineResponse"></a>
<a id="tocSdeletepipelineresponse"></a>
<a id="tocsdeletepipelineresponse"></a>

```json
{}
```

The <code>DeletePipelineResponse</code> structure.

<h2 id="tocS_DeletePresetResponse">DeletePresetResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletepresetresponse"></a>
<a id="schema_DeletePresetResponse"></a>
<a id="tocSdeletepresetresponse"></a>
<a id="tocsdeletepresetresponse"></a>

```json
{}
```

The <code>DeletePresetResponse</code> structure.

<h2 id="tocS_ListJobsByPipelineResponse">ListJobsByPipelineResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistjobsbypipelineresponse"></a>
<a id="schema_ListJobsByPipelineResponse"></a>
<a id="tocSlistjobsbypipelineresponse"></a>
<a id="tocslistjobsbypipelineresponse"></a>

```json
{
  "Jobs": {},
  "NextPageToken": {}
}
```

The <code>ListJobsByPipelineResponse</code> structure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Jobs|object|false|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_ListJobsByStatusResponse">ListJobsByStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistjobsbystatusresponse"></a>
<a id="schema_ListJobsByStatusResponse"></a>
<a id="tocSlistjobsbystatusresponse"></a>
<a id="tocslistjobsbystatusresponse"></a>

```json
{
  "Jobs": {},
  "NextPageToken": {}
}
```

 The <code>ListJobsByStatusResponse</code> structure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Jobs|object|false|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_ListPipelinesResponse">ListPipelinesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpipelinesresponse"></a>
<a id="schema_ListPipelinesResponse"></a>
<a id="tocSlistpipelinesresponse"></a>
<a id="tocslistpipelinesresponse"></a>

```json
{
  "Pipelines": {},
  "NextPageToken": {}
}
```

A list of the pipelines associated with the current AWS account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Pipelines|object|false|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_ListPresetsResponse">ListPresetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpresetsresponse"></a>
<a id="schema_ListPresetsResponse"></a>
<a id="tocSlistpresetsresponse"></a>
<a id="tocslistpresetsresponse"></a>

```json
{
  "Presets": {},
  "NextPageToken": {}
}
```

The <code>ListPresetsResponse</code> structure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Presets|object|false|none|none|
|NextPageToken|object|false|none|none|

<h2 id="tocS_ReadJobResponse">ReadJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemareadjobresponse"></a>
<a id="schema_ReadJobResponse"></a>
<a id="tocSreadjobresponse"></a>
<a id="tocsreadjobresponse"></a>

```json
{
  "Job": {
    "Id": {},
    "Arn": {},
    "PipelineId": {},
    "Input": {
      "Key": {},
      "FrameRate": {},
      "Resolution": {},
      "AspectRatio": {},
      "Interlaced": {},
      "Container": {},
      "Encryption": {
        "Mode": {},
        "Key": {},
        "KeyMd5": {},
        "InitializationVector": {}
      },
      "TimeSpan": {
        "StartTime": {},
        "Duration": {}
      },
      "InputCaptions": {
        "MergePolicy": {},
        "CaptionSources": {}
      },
      "DetectedProperties": {
        "Width": {},
        "Height": {},
        "FrameRate": {},
        "FileSize": {},
        "DurationMillis": {}
      }
    },
    "Inputs": {},
    "Output": {
      "Id": {},
      "Key": {},
      "ThumbnailPattern": {},
      "ThumbnailEncryption": {
        "Mode": {},
        "Key": {},
        "KeyMd5": {},
        "InitializationVector": {}
      },
      "Rotate": {},
      "PresetId": {},
      "SegmentDuration": {},
      "Status": {},
      "StatusDetail": {},
      "Duration": {},
      "Width": {},
      "Height": {},
      "FrameRate": {},
      "FileSize": {},
      "DurationMillis": {},
      "Watermarks": {},
      "AlbumArt": {
        "MergePolicy": {},
        "Artwork": {}
      },
      "Composition": {},
      "Captions": {
        "MergePolicy": {},
        "CaptionSources": {},
        "CaptionFormats": {}
      },
      "Encryption": {
        "Mode": {},
        "Key": {},
        "KeyMd5": {},
        "InitializationVector": {}
      },
      "AppliedColorSpaceConversion": {}
    },
    "Outputs": {},
    "OutputKeyPrefix": {},
    "Playlists": {},
    "Status": {},
    "UserMetadata": {
      "property1": "string",
      "property2": "string"
    },
    "Timing": {
      "SubmitTimeMillis": {},
      "StartTimeMillis": {},
      "FinishTimeMillis": {}
    }
  }
}
```

The <code>ReadJobResponse</code> structure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Job|object|false|none|none|

<h2 id="tocS_ReadPipelineResponse">ReadPipelineResponse</h2>
<!-- backwards compatibility -->
<a id="schemareadpipelineresponse"></a>
<a id="schema_ReadPipelineResponse"></a>
<a id="tocSreadpipelineresponse"></a>
<a id="tocsreadpipelineresponse"></a>

```json
{
  "Pipeline": {
    "Id": {},
    "Arn": {},
    "Name": {},
    "Status": {},
    "InputBucket": {},
    "OutputBucket": {},
    "Role": {},
    "AwsKmsKeyArn": {},
    "Notifications": {
      "Progressing": {},
      "Completed": {},
      "Warning": {},
      "Error": {}
    },
    "ContentConfig": {
      "Bucket": {},
      "StorageClass": {},
      "Permissions": {}
    },
    "ThumbnailConfig": {
      "Bucket": {},
      "StorageClass": {},
      "Permissions": {}
    }
  },
  "Warnings": {}
}
```

The <code>ReadPipelineResponse</code> structure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Pipeline|object|false|none|none|
|Warnings|object|false|none|none|

<h2 id="tocS_ReadPresetResponse">ReadPresetResponse</h2>
<!-- backwards compatibility -->
<a id="schemareadpresetresponse"></a>
<a id="schema_ReadPresetResponse"></a>
<a id="tocSreadpresetresponse"></a>
<a id="tocsreadpresetresponse"></a>

```json
{
  "Preset": {
    "Id": {},
    "Arn": {},
    "Name": {},
    "Description": {},
    "Container": {},
    "Audio": {
      "Codec": {},
      "SampleRate": {},
      "BitRate": {},
      "Channels": {},
      "AudioPackingMode": {},
      "CodecOptions": {
        "Profile": {},
        "BitDepth": {},
        "BitOrder": {},
        "Signed": {}
      }
    },
    "Video": {
      "Codec": {},
      "CodecOptions": {
        "property1": "string",
        "property2": "string"
      },
      "KeyframesMaxDist": {},
      "FixedGOP": {},
      "BitRate": {},
      "FrameRate": {},
      "MaxFrameRate": {},
      "Resolution": {},
      "AspectRatio": {},
      "MaxWidth": {},
      "MaxHeight": {},
      "DisplayAspectRatio": {},
      "SizingPolicy": {},
      "PaddingPolicy": {},
      "Watermarks": {}
    },
    "Thumbnails": {
      "Format": {},
      "Interval": {},
      "Resolution": {},
      "AspectRatio": {},
      "MaxWidth": {},
      "MaxHeight": {},
      "SizingPolicy": {},
      "PaddingPolicy": {}
    },
    "Type": {}
  }
}
```

The <code>ReadPresetResponse</code> structure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Preset|object|false|none|none|

<h2 id="tocS_TestRoleResponse">TestRoleResponse</h2>
<!-- backwards compatibility -->
<a id="schematestroleresponse"></a>
<a id="schema_TestRoleResponse"></a>
<a id="tocStestroleresponse"></a>
<a id="tocstestroleresponse"></a>

```json
{
  "Success": {},
  "Messages": {}
}
```

The <code>TestRoleResponse</code> structure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Success|object|false|none|none|
|Messages|object|false|none|none|

<h2 id="tocS_UpdatePipelineResponse">UpdatePipelineResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepipelineresponse"></a>
<a id="schema_UpdatePipelineResponse"></a>
<a id="tocSupdatepipelineresponse"></a>
<a id="tocsupdatepipelineresponse"></a>

```json
{
  "Pipeline": {
    "Id": {},
    "Arn": {},
    "Name": {},
    "Status": {},
    "InputBucket": {},
    "OutputBucket": {},
    "Role": {},
    "AwsKmsKeyArn": {},
    "Notifications": {
      "Progressing": {},
      "Completed": {},
      "Warning": {},
      "Error": {}
    },
    "ContentConfig": {
      "Bucket": {},
      "StorageClass": {},
      "Permissions": {}
    },
    "ThumbnailConfig": {
      "Bucket": {},
      "StorageClass": {},
      "Permissions": {}
    }
  },
  "Warnings": {}
}
```

When you update a pipeline, Elastic Transcoder returns the values that you specified in the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Pipeline|object|false|none|none|
|Warnings|object|false|none|none|

<h2 id="tocS_UpdatePipelineNotificationsResponse">UpdatePipelineNotificationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepipelinenotificationsresponse"></a>
<a id="schema_UpdatePipelineNotificationsResponse"></a>
<a id="tocSupdatepipelinenotificationsresponse"></a>
<a id="tocsupdatepipelinenotificationsresponse"></a>

```json
{
  "Pipeline": {
    "Id": {},
    "Arn": {},
    "Name": {},
    "Status": {},
    "InputBucket": {},
    "OutputBucket": {},
    "Role": {},
    "AwsKmsKeyArn": {},
    "Notifications": {
      "Progressing": {},
      "Completed": {},
      "Warning": {},
      "Error": {}
    },
    "ContentConfig": {
      "Bucket": {},
      "StorageClass": {},
      "Permissions": {}
    },
    "ThumbnailConfig": {
      "Bucket": {},
      "StorageClass": {},
      "Permissions": {}
    }
  }
}
```

The <code>UpdatePipelineNotificationsResponse</code> structure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Pipeline|object|false|none|none|

<h2 id="tocS_UpdatePipelineStatusResponse">UpdatePipelineStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepipelinestatusresponse"></a>
<a id="schema_UpdatePipelineStatusResponse"></a>
<a id="tocSupdatepipelinestatusresponse"></a>
<a id="tocsupdatepipelinestatusresponse"></a>

```json
{
  "Pipeline": {
    "Id": {},
    "Arn": {},
    "Name": {},
    "Status": {},
    "InputBucket": {},
    "OutputBucket": {},
    "Role": {},
    "AwsKmsKeyArn": {},
    "Notifications": {
      "Progressing": {},
      "Completed": {},
      "Warning": {},
      "Error": {}
    },
    "ContentConfig": {
      "Bucket": {},
      "StorageClass": {},
      "Permissions": {}
    },
    "ThumbnailConfig": {
      "Bucket": {},
      "StorageClass": {},
      "Permissions": {}
    }
  }
}
```

When you update status for a pipeline, Elastic Transcoder returns the values that you specified in the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Pipeline|object|false|none|none|

<h2 id="tocS_AccessControl">AccessControl</h2>
<!-- backwards compatibility -->
<a id="schemaaccesscontrol"></a>
<a id="schema_AccessControl"></a>
<a id="tocSaccesscontrol"></a>
<a id="tocsaccesscontrol"></a>

```json
"string"
```

<h2 id="tocS_AccessControls">AccessControls</h2>
<!-- backwards compatibility -->
<a id="schemaaccesscontrols"></a>
<a id="schema_AccessControls"></a>
<a id="tocSaccesscontrols"></a>
<a id="tocsaccesscontrols"></a>

```json
[
  "string"
]
```

<h2 id="tocS_WatermarkKey">WatermarkKey</h2>
<!-- backwards compatibility -->
<a id="schemawatermarkkey"></a>
<a id="schema_WatermarkKey"></a>
<a id="tocSwatermarkkey"></a>
<a id="tocswatermarkkey"></a>

```json
"string"
```

<h2 id="tocS_Artwork">Artwork</h2>
<!-- backwards compatibility -->
<a id="schemaartwork"></a>
<a id="schema_Artwork"></a>
<a id="tocSartwork"></a>
<a id="tocsartwork"></a>

```json
{
  "InputKey": {},
  "MaxWidth": {},
  "MaxHeight": {},
  "SizingPolicy": {},
  "PaddingPolicy": {},
  "AlbumArtFormat": {},
  "Encryption": {
    "Mode": {},
    "Key": {},
    "KeyMd5": {},
    "InitializationVector": {}
  }
}
```

<p>The file to be used as album art. There can be multiple artworks associated with an audio file, to a maximum of 20.</p> <p>To remove artwork or leave the artwork empty, you can either set <code>Artwork</code> to null, or set the <code>Merge Policy</code> to "Replace" and use an empty <code>Artwork</code> array.</p> <p>To pass through existing artwork unchanged, set the <code>Merge Policy</code> to "Prepend", "Append", or "Fallback", and use an empty <code>Artwork</code> array.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InputKey|object|false|none|none|
|MaxWidth|object|false|none|none|
|MaxHeight|object|false|none|none|
|SizingPolicy|object|false|none|none|
|PaddingPolicy|object|false|none|none|
|AlbumArtFormat|object|false|none|none|
|Encryption|object|false|none|none|

<h2 id="tocS_Artworks">Artworks</h2>
<!-- backwards compatibility -->
<a id="schemaartworks"></a>
<a id="schema_Artworks"></a>
<a id="tocSartworks"></a>
<a id="tocsartworks"></a>

```json
[
  {
    "InputKey": {},
    "MaxWidth": {},
    "MaxHeight": {},
    "SizingPolicy": {},
    "PaddingPolicy": {},
    "AlbumArtFormat": {},
    "Encryption": {
      "Mode": {},
      "Key": {},
      "KeyMd5": {},
      "InitializationVector": {}
    }
  }
]
```

<h2 id="tocS_Ascending">Ascending</h2>
<!-- backwards compatibility -->
<a id="schemaascending"></a>
<a id="schema_Ascending"></a>
<a id="tocSascending"></a>
<a id="tocsascending"></a>

```json
"string"
```

<h2 id="tocS_AudioBitDepth">AudioBitDepth</h2>
<!-- backwards compatibility -->
<a id="schemaaudiobitdepth"></a>
<a id="schema_AudioBitDepth"></a>
<a id="tocSaudiobitdepth"></a>
<a id="tocsaudiobitdepth"></a>

```json
"string"
```

<h2 id="tocS_AudioBitOrder">AudioBitOrder</h2>
<!-- backwards compatibility -->
<a id="schemaaudiobitorder"></a>
<a id="schema_AudioBitOrder"></a>
<a id="tocSaudiobitorder"></a>
<a id="tocsaudiobitorder"></a>

```json
"string"
```

<h2 id="tocS_AudioCodecProfile">AudioCodecProfile</h2>
<!-- backwards compatibility -->
<a id="schemaaudiocodecprofile"></a>
<a id="schema_AudioCodecProfile"></a>
<a id="tocSaudiocodecprofile"></a>
<a id="tocsaudiocodecprofile"></a>

```json
"string"
```

<h2 id="tocS_AudioSigned">AudioSigned</h2>
<!-- backwards compatibility -->
<a id="schemaaudiosigned"></a>
<a id="schema_AudioSigned"></a>
<a id="tocSaudiosigned"></a>
<a id="tocsaudiosigned"></a>

```json
"string"
```

<h2 id="tocS_AudioParameters">AudioParameters</h2>
<!-- backwards compatibility -->
<a id="schemaaudioparameters"></a>
<a id="schema_AudioParameters"></a>
<a id="tocSaudioparameters"></a>
<a id="tocsaudioparameters"></a>

```json
{
  "Codec": {},
  "SampleRate": {},
  "BitRate": {},
  "Channels": {},
  "AudioPackingMode": {},
  "CodecOptions": {
    "Profile": {},
    "BitDepth": {},
    "BitOrder": {},
    "Signed": {}
  }
}
```

Parameters required for transcoding audio.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Codec|object|false|none|none|
|SampleRate|object|false|none|none|
|BitRate|object|false|none|none|
|Channels|object|false|none|none|
|AudioPackingMode|object|false|none|none|
|CodecOptions|object|false|none|none|

<h2 id="tocS_Base64EncodedString">Base64EncodedString</h2>
<!-- backwards compatibility -->
<a id="schemabase64encodedstring"></a>
<a id="schema_Base64EncodedString"></a>
<a id="tocSbase64encodedstring"></a>
<a id="tocsbase64encodedstring"></a>

```json
"string"
```

<h2 id="tocS_CancelJobRequest">CancelJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacanceljobrequest"></a>
<a id="schema_CancelJobRequest"></a>
<a id="tocScanceljobrequest"></a>
<a id="tocscanceljobrequest"></a>

```json
{}
```

The <code>CancelJobRequest</code> structure.

<h2 id="tocS_CaptionFormatFormat">CaptionFormatFormat</h2>
<!-- backwards compatibility -->
<a id="schemacaptionformatformat"></a>
<a id="schema_CaptionFormatFormat"></a>
<a id="tocScaptionformatformat"></a>
<a id="tocscaptionformatformat"></a>

```json
"string"
```

<h2 id="tocS_CaptionFormatPattern">CaptionFormatPattern</h2>
<!-- backwards compatibility -->
<a id="schemacaptionformatpattern"></a>
<a id="schema_CaptionFormatPattern"></a>
<a id="tocScaptionformatpattern"></a>
<a id="tocscaptionformatpattern"></a>

```json
"string"
```

<h2 id="tocS_CaptionFormat">CaptionFormat</h2>
<!-- backwards compatibility -->
<a id="schemacaptionformat"></a>
<a id="schema_CaptionFormat"></a>
<a id="tocScaptionformat"></a>
<a id="tocscaptionformat"></a>

```json
{
  "Format": {},
  "Pattern": {},
  "Encryption": {
    "Mode": {},
    "Key": {},
    "KeyMd5": {},
    "InitializationVector": {}
  }
}
```

The file format of the output captions. If you leave this value blank, Elastic Transcoder returns an error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Format|object|false|none|none|
|Pattern|object|false|none|none|
|Encryption|object|false|none|none|

<h2 id="tocS_CaptionFormats">CaptionFormats</h2>
<!-- backwards compatibility -->
<a id="schemacaptionformats"></a>
<a id="schema_CaptionFormats"></a>
<a id="tocScaptionformats"></a>
<a id="tocscaptionformats"></a>

```json
[
  {
    "Format": {},
    "Pattern": {},
    "Encryption": {
      "Mode": {},
      "Key": {},
      "KeyMd5": {},
      "InitializationVector": {}
    }
  }
]
```

<h2 id="tocS_CaptionMergePolicy">CaptionMergePolicy</h2>
<!-- backwards compatibility -->
<a id="schemacaptionmergepolicy"></a>
<a id="schema_CaptionMergePolicy"></a>
<a id="tocScaptionmergepolicy"></a>
<a id="tocscaptionmergepolicy"></a>

```json
"string"
```

<h2 id="tocS_TimeOffset">TimeOffset</h2>
<!-- backwards compatibility -->
<a id="schematimeoffset"></a>
<a id="schema_TimeOffset"></a>
<a id="tocStimeoffset"></a>
<a id="tocstimeoffset"></a>

```json
"string"
```

<h2 id="tocS_Name">Name</h2>
<!-- backwards compatibility -->
<a id="schemaname"></a>
<a id="schema_Name"></a>
<a id="tocSname"></a>
<a id="tocsname"></a>

```json
"string"
```

<h2 id="tocS_CaptionSource">CaptionSource</h2>
<!-- backwards compatibility -->
<a id="schemacaptionsource"></a>
<a id="schema_CaptionSource"></a>
<a id="tocScaptionsource"></a>
<a id="tocscaptionsource"></a>

```json
{
  "Key": {},
  "Language": {},
  "TimeOffset": {},
  "Label": {},
  "Encryption": {
    "Mode": {},
    "Key": {},
    "KeyMd5": {},
    "InitializationVector": {}
  }
}
```

A source file for the input sidecar captions used during the transcoding process.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|object|false|none|none|
|Language|object|false|none|none|
|TimeOffset|object|false|none|none|
|Label|object|false|none|none|
|Encryption|object|false|none|none|

<h2 id="tocS_CaptionSources">CaptionSources</h2>
<!-- backwards compatibility -->
<a id="schemacaptionsources"></a>
<a id="schema_CaptionSources"></a>
<a id="tocScaptionsources"></a>
<a id="tocscaptionsources"></a>

```json
[
  {
    "Key": {},
    "Language": {},
    "TimeOffset": {},
    "Label": {},
    "Encryption": {
      "Mode": {},
      "Key": {},
      "KeyMd5": {},
      "InitializationVector": {}
    }
  }
]
```

<h2 id="tocS_Clip">Clip</h2>
<!-- backwards compatibility -->
<a id="schemaclip"></a>
<a id="schema_Clip"></a>
<a id="tocSclip"></a>
<a id="tocsclip"></a>

```json
{
  "TimeSpan": {
    "StartTime": {},
    "Duration": {}
  }
}
```

Settings for one clip in a composition. All jobs in a playlist must have the same clip settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TimeSpan|object|false|none|none|

<h2 id="tocS_CodecOption">CodecOption</h2>
<!-- backwards compatibility -->
<a id="schemacodecoption"></a>
<a id="schema_CodecOption"></a>
<a id="tocScodecoption"></a>
<a id="tocscodecoption"></a>

```json
"string"
```

<h2 id="tocS_CreateJobOutputs">CreateJobOutputs</h2>
<!-- backwards compatibility -->
<a id="schemacreatejoboutputs"></a>
<a id="schema_CreateJobOutputs"></a>
<a id="tocScreatejoboutputs"></a>
<a id="tocscreatejoboutputs"></a>

```json
[
  {
    "Key": {},
    "ThumbnailPattern": {},
    "ThumbnailEncryption": {
      "Mode": {},
      "Key": {},
      "KeyMd5": {},
      "InitializationVector": {}
    },
    "Rotate": {},
    "PresetId": {},
    "SegmentDuration": {},
    "Watermarks": {},
    "AlbumArt": {
      "MergePolicy": {},
      "Artwork": {}
    },
    "Composition": {},
    "Captions": {
      "MergePolicy": {},
      "CaptionSources": {},
      "CaptionFormats": {}
    },
    "Encryption": {
      "Mode": {},
      "Key": {},
      "KeyMd5": {},
      "InitializationVector": {}
    }
  }
]
```

<h2 id="tocS_Filename">Filename</h2>
<!-- backwards compatibility -->
<a id="schemafilename"></a>
<a id="schema_Filename"></a>
<a id="tocSfilename"></a>
<a id="tocsfilename"></a>

```json
"string"
```

<h2 id="tocS_PlaylistFormat">PlaylistFormat</h2>
<!-- backwards compatibility -->
<a id="schemaplaylistformat"></a>
<a id="schema_PlaylistFormat"></a>
<a id="tocSplaylistformat"></a>
<a id="tocsplaylistformat"></a>

```json
"string"
```

<h2 id="tocS_OutputKeys">OutputKeys</h2>
<!-- backwards compatibility -->
<a id="schemaoutputkeys"></a>
<a id="schema_OutputKeys"></a>
<a id="tocSoutputkeys"></a>
<a id="tocsoutputkeys"></a>

```json
[
  "string"
]
```

<h2 id="tocS_HlsContentProtection">HlsContentProtection</h2>
<!-- backwards compatibility -->
<a id="schemahlscontentprotection"></a>
<a id="schema_HlsContentProtection"></a>
<a id="tocShlscontentprotection"></a>
<a id="tocshlscontentprotection"></a>

```json
{
  "Method": {},
  "Key": {},
  "KeyMd5": {},
  "InitializationVector": {},
  "LicenseAcquisitionUrl": {},
  "KeyStoragePolicy": {}
}
```

The HLS content protection settings, if any, that you want Elastic Transcoder to apply to your output files.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Method|object|false|none|none|
|Key|object|false|none|none|
|KeyMd5|object|false|none|none|
|InitializationVector|object|false|none|none|
|LicenseAcquisitionUrl|object|false|none|none|
|KeyStoragePolicy|object|false|none|none|

<h2 id="tocS_PlayReadyDrm">PlayReadyDrm</h2>
<!-- backwards compatibility -->
<a id="schemaplayreadydrm"></a>
<a id="schema_PlayReadyDrm"></a>
<a id="tocSplayreadydrm"></a>
<a id="tocsplayreadydrm"></a>

```json
{
  "Format": {},
  "Key": {},
  "KeyMd5": {},
  "KeyId": {},
  "InitializationVector": {},
  "LicenseAcquisitionUrl": {}
}
```

<p>The PlayReady DRM settings, if any, that you want Elastic Transcoder to apply to the output files associated with this playlist.</p> <p>PlayReady DRM encrypts your media files using <code>aes-ctr</code> encryption.</p> <p>If you use DRM for an <code>HLSv3</code> playlist, your outputs must have a master playlist.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Format|object|false|none|none|
|Key|object|false|none|none|
|KeyMd5|object|false|none|none|
|KeyId|object|false|none|none|
|InitializationVector|object|false|none|none|
|LicenseAcquisitionUrl|object|false|none|none|

<h2 id="tocS_CreateJobPlaylists">CreateJobPlaylists</h2>
<!-- backwards compatibility -->
<a id="schemacreatejobplaylists"></a>
<a id="schema_CreateJobPlaylists"></a>
<a id="tocScreatejobplaylists"></a>
<a id="tocscreatejobplaylists"></a>

```json
[
  {
    "Name": {},
    "Format": {},
    "OutputKeys": {},
    "HlsContentProtection": {
      "Method": {},
      "Key": {},
      "KeyMd5": {},
      "InitializationVector": {},
      "LicenseAcquisitionUrl": {},
      "KeyStoragePolicy": {}
    },
    "PlayReadyDrm": {
      "Format": {},
      "Key": {},
      "KeyMd5": {},
      "KeyId": {},
      "InitializationVector": {},
      "LicenseAcquisitionUrl": {}
    }
  }
]
```

<h2 id="tocS_JobInputs">JobInputs</h2>
<!-- backwards compatibility -->
<a id="schemajobinputs"></a>
<a id="schema_JobInputs"></a>
<a id="tocSjobinputs"></a>
<a id="tocsjobinputs"></a>

```json
[
  {
    "Key": {},
    "FrameRate": {},
    "Resolution": {},
    "AspectRatio": {},
    "Interlaced": {},
    "Container": {},
    "Encryption": {
      "Mode": {},
      "Key": {},
      "KeyMd5": {},
      "InitializationVector": {}
    },
    "TimeSpan": {
      "StartTime": {},
      "Duration": {}
    },
    "InputCaptions": {
      "MergePolicy": {},
      "CaptionSources": {}
    },
    "DetectedProperties": {
      "Width": {},
      "Height": {},
      "FrameRate": {},
      "FileSize": {},
      "DurationMillis": {}
    }
  }
]
```

<h2 id="tocS_UserMetadata">UserMetadata</h2>
<!-- backwards compatibility -->
<a id="schemausermetadata"></a>
<a id="schema_UserMetadata"></a>
<a id="tocSusermetadata"></a>
<a id="tocsusermetadata"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[String](#schemastring)|false|none|none|

<h2 id="tocS_CreateJobRequest">CreateJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatejobrequest"></a>
<a id="schema_CreateJobRequest"></a>
<a id="tocScreatejobrequest"></a>
<a id="tocscreatejobrequest"></a>

```json
{
  "PipelineId": {},
  "Input": {
    "Key": {},
    "FrameRate": {},
    "Resolution": {},
    "AspectRatio": {},
    "Interlaced": {},
    "Container": {},
    "Encryption": {
      "Mode": {},
      "Key": {},
      "KeyMd5": {},
      "InitializationVector": {}
    },
    "TimeSpan": {
      "StartTime": {},
      "Duration": {}
    },
    "InputCaptions": {
      "MergePolicy": {},
      "CaptionSources": {}
    },
    "DetectedProperties": {
      "Width": {},
      "Height": {},
      "FrameRate": {},
      "FileSize": {},
      "DurationMillis": {}
    }
  },
  "Inputs": {},
  "Output": {
    "Key": {},
    "ThumbnailPattern": {},
    "ThumbnailEncryption": {
      "Mode": {},
      "Key": {},
      "KeyMd5": {},
      "InitializationVector": {}
    },
    "Rotate": {},
    "PresetId": {},
    "SegmentDuration": {},
    "Watermarks": {},
    "AlbumArt": {
      "MergePolicy": {},
      "Artwork": {}
    },
    "Composition": {},
    "Captions": {
      "MergePolicy": {},
      "CaptionSources": {},
      "CaptionFormats": {}
    },
    "Encryption": {
      "Mode": {},
      "Key": {},
      "KeyMd5": {},
      "InitializationVector": {}
    }
  },
  "Outputs": {},
  "OutputKeyPrefix": {},
  "Playlists": {},
  "UserMetadata": {
    "property1": "string",
    "property2": "string"
  }
}
```

The <code>CreateJobRequest</code> structure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PipelineId|object|true|none|none|
|Input|object|false|none|none|
|Inputs|object|false|none|none|
|Output|object|false|none|none|
|Outputs|object|false|none|none|
|OutputKeyPrefix|object|false|none|none|
|Playlists|object|false|none|none|
|UserMetadata|object|false|none|none|

<h2 id="tocS_Job">Job</h2>
<!-- backwards compatibility -->
<a id="schemajob"></a>
<a id="schema_Job"></a>
<a id="tocSjob"></a>
<a id="tocsjob"></a>

```json
{
  "Id": {},
  "Arn": {},
  "PipelineId": {},
  "Input": {
    "Key": {},
    "FrameRate": {},
    "Resolution": {},
    "AspectRatio": {},
    "Interlaced": {},
    "Container": {},
    "Encryption": {
      "Mode": {},
      "Key": {},
      "KeyMd5": {},
      "InitializationVector": {}
    },
    "TimeSpan": {
      "StartTime": {},
      "Duration": {}
    },
    "InputCaptions": {
      "MergePolicy": {},
      "CaptionSources": {}
    },
    "DetectedProperties": {
      "Width": {},
      "Height": {},
      "FrameRate": {},
      "FileSize": {},
      "DurationMillis": {}
    }
  },
  "Inputs": {},
  "Output": {
    "Id": {},
    "Key": {},
    "ThumbnailPattern": {},
    "ThumbnailEncryption": {
      "Mode": {},
      "Key": {},
      "KeyMd5": {},
      "InitializationVector": {}
    },
    "Rotate": {},
    "PresetId": {},
    "SegmentDuration": {},
    "Status": {},
    "StatusDetail": {},
    "Duration": {},
    "Width": {},
    "Height": {},
    "FrameRate": {},
    "FileSize": {},
    "DurationMillis": {},
    "Watermarks": {},
    "AlbumArt": {
      "MergePolicy": {},
      "Artwork": {}
    },
    "Composition": {},
    "Captions": {
      "MergePolicy": {},
      "CaptionSources": {},
      "CaptionFormats": {}
    },
    "Encryption": {
      "Mode": {},
      "Key": {},
      "KeyMd5": {},
      "InitializationVector": {}
    },
    "AppliedColorSpaceConversion": {}
  },
  "Outputs": {},
  "OutputKeyPrefix": {},
  "Playlists": {},
  "Status": {},
  "UserMetadata": {
    "property1": "string",
    "property2": "string"
  },
  "Timing": {
    "SubmitTimeMillis": {},
    "StartTimeMillis": {},
    "FinishTimeMillis": {}
  }
}
```

A section of the response body that provides information about the job that is created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|
|PipelineId|object|false|none|none|
|Input|object|false|none|none|
|Inputs|object|false|none|none|
|Output|object|false|none|none|
|Outputs|object|false|none|none|
|OutputKeyPrefix|object|false|none|none|
|Playlists|object|false|none|none|
|Status|object|false|none|none|
|UserMetadata|object|false|none|none|
|Timing|object|false|none|none|

<h2 id="tocS_Role">Role</h2>
<!-- backwards compatibility -->
<a id="schemarole"></a>
<a id="schema_Role"></a>
<a id="tocSrole"></a>
<a id="tocsrole"></a>

```json
"string"
```

<h2 id="tocS_KeyArn">KeyArn</h2>
<!-- backwards compatibility -->
<a id="schemakeyarn"></a>
<a id="schema_KeyArn"></a>
<a id="tocSkeyarn"></a>
<a id="tocskeyarn"></a>

```json
"string"
```

<h2 id="tocS_Notifications">Notifications</h2>
<!-- backwards compatibility -->
<a id="schemanotifications"></a>
<a id="schema_Notifications"></a>
<a id="tocSnotifications"></a>
<a id="tocsnotifications"></a>

```json
{
  "Progressing": {},
  "Completed": {},
  "Warning": {},
  "Error": {}
}
```

<p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Progressing|object|false|none|none|
|Completed|object|false|none|none|
|Warning|object|false|none|none|
|Error|object|false|none|none|

<h2 id="tocS_PipelineOutputConfig">PipelineOutputConfig</h2>
<!-- backwards compatibility -->
<a id="schemapipelineoutputconfig"></a>
<a id="schema_PipelineOutputConfig"></a>
<a id="tocSpipelineoutputconfig"></a>
<a id="tocspipelineoutputconfig"></a>

```json
{
  "Bucket": {},
  "StorageClass": {},
  "Permissions": {}
}
```

The <code>PipelineOutputConfig</code> structure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bucket|object|false|none|none|
|StorageClass|object|false|none|none|
|Permissions|object|false|none|none|

<h2 id="tocS_CreatePipelineRequest">CreatePipelineRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatepipelinerequest"></a>
<a id="schema_CreatePipelineRequest"></a>
<a id="tocScreatepipelinerequest"></a>
<a id="tocscreatepipelinerequest"></a>

```json
{
  "Name": {},
  "InputBucket": {},
  "OutputBucket": {},
  "Role": {},
  "AwsKmsKeyArn": {},
  "Notifications": {
    "Progressing": {},
    "Completed": {},
    "Warning": {},
    "Error": {}
  },
  "ContentConfig": {
    "Bucket": {},
    "StorageClass": {},
    "Permissions": {}
  },
  "ThumbnailConfig": {
    "Bucket": {},
    "StorageClass": {},
    "Permissions": {}
  }
}
```

The <code>CreatePipelineRequest</code> structure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|InputBucket|object|true|none|none|
|OutputBucket|object|false|none|none|
|Role|object|true|none|none|
|AwsKmsKeyArn|object|false|none|none|
|Notifications|object|false|none|none|
|ContentConfig|object|false|none|none|
|ThumbnailConfig|object|false|none|none|

<h2 id="tocS_Pipeline">Pipeline</h2>
<!-- backwards compatibility -->
<a id="schemapipeline"></a>
<a id="schema_Pipeline"></a>
<a id="tocSpipeline"></a>
<a id="tocspipeline"></a>

```json
{
  "Id": {},
  "Arn": {},
  "Name": {},
  "Status": {},
  "InputBucket": {},
  "OutputBucket": {},
  "Role": {},
  "AwsKmsKeyArn": {},
  "Notifications": {
    "Progressing": {},
    "Completed": {},
    "Warning": {},
    "Error": {}
  },
  "ContentConfig": {
    "Bucket": {},
    "StorageClass": {},
    "Permissions": {}
  },
  "ThumbnailConfig": {
    "Bucket": {},
    "StorageClass": {},
    "Permissions": {}
  }
}
```

The pipeline (queue) that is used to manage jobs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|
|Name|object|false|none|none|
|Status|object|false|none|none|
|InputBucket|object|false|none|none|
|OutputBucket|object|false|none|none|
|Role|object|false|none|none|
|AwsKmsKeyArn|object|false|none|none|
|Notifications|object|false|none|none|
|ContentConfig|object|false|none|none|
|ThumbnailConfig|object|false|none|none|

<h2 id="tocS_Warnings">Warnings</h2>
<!-- backwards compatibility -->
<a id="schemawarnings"></a>
<a id="schema_Warnings"></a>
<a id="tocSwarnings"></a>
<a id="tocswarnings"></a>

```json
[
  {
    "Code": {},
    "Message": {}
  }
]
```

<h2 id="tocS_Description">Description</h2>
<!-- backwards compatibility -->
<a id="schemadescription"></a>
<a id="schema_Description"></a>
<a id="tocSdescription"></a>
<a id="tocsdescription"></a>

```json
"string"
```

<h2 id="tocS_PresetContainer">PresetContainer</h2>
<!-- backwards compatibility -->
<a id="schemapresetcontainer"></a>
<a id="schema_PresetContainer"></a>
<a id="tocSpresetcontainer"></a>
<a id="tocspresetcontainer"></a>

```json
"string"
```

<h2 id="tocS_VideoParameters">VideoParameters</h2>
<!-- backwards compatibility -->
<a id="schemavideoparameters"></a>
<a id="schema_VideoParameters"></a>
<a id="tocSvideoparameters"></a>
<a id="tocsvideoparameters"></a>

```json
{
  "Codec": {},
  "CodecOptions": {
    "property1": "string",
    "property2": "string"
  },
  "KeyframesMaxDist": {},
  "FixedGOP": {},
  "BitRate": {},
  "FrameRate": {},
  "MaxFrameRate": {},
  "Resolution": {},
  "AspectRatio": {},
  "MaxWidth": {},
  "MaxHeight": {},
  "DisplayAspectRatio": {},
  "SizingPolicy": {},
  "PaddingPolicy": {},
  "Watermarks": {}
}
```

The <code>VideoParameters</code> structure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Codec|object|false|none|none|
|CodecOptions|object|false|none|none|
|KeyframesMaxDist|object|false|none|none|
|FixedGOP|object|false|none|none|
|BitRate|object|false|none|none|
|FrameRate|object|false|none|none|
|MaxFrameRate|object|false|none|none|
|Resolution|object|false|none|none|
|AspectRatio|object|false|none|none|
|MaxWidth|object|false|none|none|
|MaxHeight|object|false|none|none|
|DisplayAspectRatio|object|false|none|none|
|SizingPolicy|object|false|none|none|
|PaddingPolicy|object|false|none|none|
|Watermarks|object|false|none|none|

<h2 id="tocS_Thumbnails">Thumbnails</h2>
<!-- backwards compatibility -->
<a id="schemathumbnails"></a>
<a id="schema_Thumbnails"></a>
<a id="tocSthumbnails"></a>
<a id="tocsthumbnails"></a>

```json
{
  "Format": {},
  "Interval": {},
  "Resolution": {},
  "AspectRatio": {},
  "MaxWidth": {},
  "MaxHeight": {},
  "SizingPolicy": {},
  "PaddingPolicy": {}
}
```

Thumbnails for videos.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Format|object|false|none|none|
|Interval|object|false|none|none|
|Resolution|object|false|none|none|
|AspectRatio|object|false|none|none|
|MaxWidth|object|false|none|none|
|MaxHeight|object|false|none|none|
|SizingPolicy|object|false|none|none|
|PaddingPolicy|object|false|none|none|

<h2 id="tocS_CreatePresetRequest">CreatePresetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatepresetrequest"></a>
<a id="schema_CreatePresetRequest"></a>
<a id="tocScreatepresetrequest"></a>
<a id="tocscreatepresetrequest"></a>

```json
{
  "Name": {},
  "Description": {},
  "Container": {},
  "Video": {
    "Codec": {},
    "CodecOptions": {
      "property1": "string",
      "property2": "string"
    },
    "KeyframesMaxDist": {},
    "FixedGOP": {},
    "BitRate": {},
    "FrameRate": {},
    "MaxFrameRate": {},
    "Resolution": {},
    "AspectRatio": {},
    "MaxWidth": {},
    "MaxHeight": {},
    "DisplayAspectRatio": {},
    "SizingPolicy": {},
    "PaddingPolicy": {},
    "Watermarks": {}
  },
  "Audio": {
    "Codec": {},
    "SampleRate": {},
    "BitRate": {},
    "Channels": {},
    "AudioPackingMode": {},
    "CodecOptions": {
      "Profile": {},
      "BitDepth": {},
      "BitOrder": {},
      "Signed": {}
    }
  },
  "Thumbnails": {
    "Format": {},
    "Interval": {},
    "Resolution": {},
    "AspectRatio": {},
    "MaxWidth": {},
    "MaxHeight": {},
    "SizingPolicy": {},
    "PaddingPolicy": {}
  }
}
```

The <code>CreatePresetRequest</code> structure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Description|object|false|none|none|
|Container|object|true|none|none|
|Video|object|false|none|none|
|Audio|object|false|none|none|
|Thumbnails|object|false|none|none|

<h2 id="tocS_Preset">Preset</h2>
<!-- backwards compatibility -->
<a id="schemapreset"></a>
<a id="schema_Preset"></a>
<a id="tocSpreset"></a>
<a id="tocspreset"></a>

```json
{
  "Id": {},
  "Arn": {},
  "Name": {},
  "Description": {},
  "Container": {},
  "Audio": {
    "Codec": {},
    "SampleRate": {},
    "BitRate": {},
    "Channels": {},
    "AudioPackingMode": {},
    "CodecOptions": {
      "Profile": {},
      "BitDepth": {},
      "BitOrder": {},
      "Signed": {}
    }
  },
  "Video": {
    "Codec": {},
    "CodecOptions": {
      "property1": "string",
      "property2": "string"
    },
    "KeyframesMaxDist": {},
    "FixedGOP": {},
    "BitRate": {},
    "FrameRate": {},
    "MaxFrameRate": {},
    "Resolution": {},
    "AspectRatio": {},
    "MaxWidth": {},
    "MaxHeight": {},
    "DisplayAspectRatio": {},
    "SizingPolicy": {},
    "PaddingPolicy": {},
    "Watermarks": {}
  },
  "Thumbnails": {
    "Format": {},
    "Interval": {},
    "Resolution": {},
    "AspectRatio": {},
    "MaxWidth": {},
    "MaxHeight": {},
    "SizingPolicy": {},
    "PaddingPolicy": {}
  },
  "Type": {}
}
```

Presets are templates that contain most of the settings for transcoding media files from one format to another. Elastic Transcoder includes some default presets for common formats, for example, several iPod and iPhone versions. You can also create your own presets for formats that aren't included among the default presets. You specify which preset you want to use when you create a job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Arn|object|false|none|none|
|Name|object|false|none|none|
|Description|object|false|none|none|
|Container|object|false|none|none|
|Audio|object|false|none|none|
|Video|object|false|none|none|
|Thumbnails|object|false|none|none|
|Type|object|false|none|none|

<h2 id="tocS_DeletePipelineRequest">DeletePipelineRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletepipelinerequest"></a>
<a id="schema_DeletePipelineRequest"></a>
<a id="tocSdeletepipelinerequest"></a>
<a id="tocsdeletepipelinerequest"></a>

```json
{}
```

The <code>DeletePipelineRequest</code> structure.

<h2 id="tocS_DeletePresetRequest">DeletePresetRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletepresetrequest"></a>
<a id="schema_DeletePresetRequest"></a>
<a id="tocSdeletepresetrequest"></a>
<a id="tocsdeletepresetrequest"></a>

```json
{}
```

The <code>DeletePresetRequest</code> structure.

<h2 id="tocS_NullableInteger">NullableInteger</h2>
<!-- backwards compatibility -->
<a id="schemanullableinteger"></a>
<a id="schema_NullableInteger"></a>
<a id="tocSnullableinteger"></a>
<a id="tocsnullableinteger"></a>

```json
0
```

<h2 id="tocS_NullableLong">NullableLong</h2>
<!-- backwards compatibility -->
<a id="schemanullablelong"></a>
<a id="schema_NullableLong"></a>
<a id="tocSnullablelong"></a>
<a id="tocsnullablelong"></a>

```json
0
```

<h2 id="tocS_EncryptionMode">EncryptionMode</h2>
<!-- backwards compatibility -->
<a id="schemaencryptionmode"></a>
<a id="schema_EncryptionMode"></a>
<a id="tocSencryptionmode"></a>
<a id="tocsencryptionmode"></a>

```json
"string"
```

<h2 id="tocS_ZeroTo255String">ZeroTo255String</h2>
<!-- backwards compatibility -->
<a id="schemazeroto255string"></a>
<a id="schema_ZeroTo255String"></a>
<a id="tocSzeroto255string"></a>
<a id="tocszeroto255string"></a>

```json
"string"
```

<h2 id="tocS_ExceptionMessages">ExceptionMessages</h2>
<!-- backwards compatibility -->
<a id="schemaexceptionmessages"></a>
<a id="schema_ExceptionMessages"></a>
<a id="tocSexceptionmessages"></a>
<a id="tocsexceptionmessages"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Grantee">Grantee</h2>
<!-- backwards compatibility -->
<a id="schemagrantee"></a>
<a id="schema_Grantee"></a>
<a id="tocSgrantee"></a>
<a id="tocsgrantee"></a>

```json
"string"
```

<h2 id="tocS_GranteeType">GranteeType</h2>
<!-- backwards compatibility -->
<a id="schemagranteetype"></a>
<a id="schema_GranteeType"></a>
<a id="tocSgranteetype"></a>
<a id="tocsgranteetype"></a>

```json
"string"
```

<h2 id="tocS_HlsContentProtectionMethod">HlsContentProtectionMethod</h2>
<!-- backwards compatibility -->
<a id="schemahlscontentprotectionmethod"></a>
<a id="schema_HlsContentProtectionMethod"></a>
<a id="tocShlscontentprotectionmethod"></a>
<a id="tocshlscontentprotectionmethod"></a>

```json
"string"
```

<h2 id="tocS_ZeroTo512String">ZeroTo512String</h2>
<!-- backwards compatibility -->
<a id="schemazeroto512string"></a>
<a id="schema_ZeroTo512String"></a>
<a id="tocSzeroto512string"></a>
<a id="tocszeroto512string"></a>

```json
"string"
```

<h2 id="tocS_KeyStoragePolicy">KeyStoragePolicy</h2>
<!-- backwards compatibility -->
<a id="schemakeystoragepolicy"></a>
<a id="schema_KeyStoragePolicy"></a>
<a id="tocSkeystoragepolicy"></a>
<a id="tocskeystoragepolicy"></a>

```json
"string"
```

<h2 id="tocS_HorizontalAlign">HorizontalAlign</h2>
<!-- backwards compatibility -->
<a id="schemahorizontalalign"></a>
<a id="schema_HorizontalAlign"></a>
<a id="tocShorizontalalign"></a>
<a id="tocshorizontalalign"></a>

```json
"string"
```

<h2 id="tocS_JobOutput">JobOutput</h2>
<!-- backwards compatibility -->
<a id="schemajoboutput"></a>
<a id="schema_JobOutput"></a>
<a id="tocSjoboutput"></a>
<a id="tocsjoboutput"></a>

```json
{
  "Id": {},
  "Key": {},
  "ThumbnailPattern": {},
  "ThumbnailEncryption": {
    "Mode": {},
    "Key": {},
    "KeyMd5": {},
    "InitializationVector": {}
  },
  "Rotate": {},
  "PresetId": {},
  "SegmentDuration": {},
  "Status": {},
  "StatusDetail": {},
  "Duration": {},
  "Width": {},
  "Height": {},
  "FrameRate": {},
  "FileSize": {},
  "DurationMillis": {},
  "Watermarks": {},
  "AlbumArt": {
    "MergePolicy": {},
    "Artwork": {}
  },
  "Composition": {},
  "Captions": {
    "MergePolicy": {},
    "CaptionSources": {},
    "CaptionFormats": {}
  },
  "Encryption": {
    "Mode": {},
    "Key": {},
    "KeyMd5": {},
    "InitializationVector": {}
  },
  "AppliedColorSpaceConversion": {}
}
```

<important> <p>Outputs recommended instead.</p> </important> <p>If you specified one output for a job, information about that output. If you specified multiple outputs for a job, the <code>Output</code> object lists information about the first output. This duplicates the information that is listed for the first output in the <code>Outputs</code> object.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|Key|object|false|none|none|
|ThumbnailPattern|object|false|none|none|
|ThumbnailEncryption|object|false|none|none|
|Rotate|object|false|none|none|
|PresetId|object|false|none|none|
|SegmentDuration|object|false|none|none|
|Status|object|false|none|none|
|StatusDetail|object|false|none|none|
|Duration|object|false|none|none|
|Width|object|false|none|none|
|Height|object|false|none|none|
|FrameRate|object|false|none|none|
|FileSize|object|false|none|none|
|DurationMillis|object|false|none|none|
|Watermarks|object|false|none|none|
|AlbumArt|object|false|none|none|
|Composition|object|false|none|none|
|Captions|object|false|none|none|
|Encryption|object|false|none|none|
|AppliedColorSpaceConversion|object|false|none|none|

<h2 id="tocS_JobOutputs">JobOutputs</h2>
<!-- backwards compatibility -->
<a id="schemajoboutputs"></a>
<a id="schema_JobOutputs"></a>
<a id="tocSjoboutputs"></a>
<a id="tocsjoboutputs"></a>

```json
[
  {
    "Id": {},
    "Key": {},
    "ThumbnailPattern": {},
    "ThumbnailEncryption": {
      "Mode": {},
      "Key": {},
      "KeyMd5": {},
      "InitializationVector": {}
    },
    "Rotate": {},
    "PresetId": {},
    "SegmentDuration": {},
    "Status": {},
    "StatusDetail": {},
    "Duration": {},
    "Width": {},
    "Height": {},
    "FrameRate": {},
    "FileSize": {},
    "DurationMillis": {},
    "Watermarks": {},
    "AlbumArt": {
      "MergePolicy": {},
      "Artwork": {}
    },
    "Composition": {},
    "Captions": {
      "MergePolicy": {},
      "CaptionSources": {},
      "CaptionFormats": {}
    },
    "Encryption": {
      "Mode": {},
      "Key": {},
      "KeyMd5": {},
      "InitializationVector": {}
    },
    "AppliedColorSpaceConversion": {}
  }
]
```

<h2 id="tocS_Playlists">Playlists</h2>
<!-- backwards compatibility -->
<a id="schemaplaylists"></a>
<a id="schema_Playlists"></a>
<a id="tocSplaylists"></a>
<a id="tocsplaylists"></a>

```json
[
  {
    "Name": {},
    "Format": {},
    "OutputKeys": {},
    "HlsContentProtection": {
      "Method": {},
      "Key": {},
      "KeyMd5": {},
      "InitializationVector": {},
      "LicenseAcquisitionUrl": {},
      "KeyStoragePolicy": {}
    },
    "PlayReadyDrm": {
      "Format": {},
      "Key": {},
      "KeyMd5": {},
      "KeyId": {},
      "InitializationVector": {},
      "LicenseAcquisitionUrl": {}
    },
    "Status": {},
    "StatusDetail": {}
  }
]
```

<h2 id="tocS_JobStatus">JobStatus</h2>
<!-- backwards compatibility -->
<a id="schemajobstatus"></a>
<a id="schema_JobStatus"></a>
<a id="tocSjobstatus"></a>
<a id="tocsjobstatus"></a>

```json
"string"
```

<h2 id="tocS_Timing">Timing</h2>
<!-- backwards compatibility -->
<a id="schematiming"></a>
<a id="schema_Timing"></a>
<a id="tocStiming"></a>
<a id="tocstiming"></a>

```json
{
  "SubmitTimeMillis": {},
  "StartTimeMillis": {},
  "FinishTimeMillis": {}
}
```

Details about the timing of a job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SubmitTimeMillis|object|false|none|none|
|StartTimeMillis|object|false|none|none|
|FinishTimeMillis|object|false|none|none|

<h2 id="tocS_MergePolicy">MergePolicy</h2>
<!-- backwards compatibility -->
<a id="schemamergepolicy"></a>
<a id="schema_MergePolicy"></a>
<a id="tocSmergepolicy"></a>
<a id="tocsmergepolicy"></a>

```json
"string"
```

<h2 id="tocS_PresetWatermarkId">PresetWatermarkId</h2>
<!-- backwards compatibility -->
<a id="schemapresetwatermarkid"></a>
<a id="schema_PresetWatermarkId"></a>
<a id="tocSpresetwatermarkid"></a>
<a id="tocspresetwatermarkid"></a>

```json
"string"
```

<h2 id="tocS_JobWatermark">JobWatermark</h2>
<!-- backwards compatibility -->
<a id="schemajobwatermark"></a>
<a id="schema_JobWatermark"></a>
<a id="tocSjobwatermark"></a>
<a id="tocsjobwatermark"></a>

```json
{
  "PresetWatermarkId": {},
  "InputKey": {},
  "Encryption": {
    "Mode": {},
    "Key": {},
    "KeyMd5": {},
    "InitializationVector": {}
  }
}
```

Watermarks can be in .png or .jpg format. If you want to display a watermark that is not rectangular, use the .png format, which supports transparency.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PresetWatermarkId|object|false|none|none|
|InputKey|object|false|none|none|
|Encryption|object|false|none|none|

<h2 id="tocS_Jobs">Jobs</h2>
<!-- backwards compatibility -->
<a id="schemajobs"></a>
<a id="schema_Jobs"></a>
<a id="tocSjobs"></a>
<a id="tocsjobs"></a>

```json
[
  {
    "Id": {},
    "Arn": {},
    "PipelineId": {},
    "Input": {
      "Key": {},
      "FrameRate": {},
      "Resolution": {},
      "AspectRatio": {},
      "Interlaced": {},
      "Container": {},
      "Encryption": {
        "Mode": {},
        "Key": {},
        "KeyMd5": {},
        "InitializationVector": {}
      },
      "TimeSpan": {
        "StartTime": {},
        "Duration": {}
      },
      "InputCaptions": {
        "MergePolicy": {},
        "CaptionSources": {}
      },
      "DetectedProperties": {
        "Width": {},
        "Height": {},
        "FrameRate": {},
        "FileSize": {},
        "DurationMillis": {}
      }
    },
    "Inputs": {},
    "Output": {
      "Id": {},
      "Key": {},
      "ThumbnailPattern": {},
      "ThumbnailEncryption": {
        "Mode": {},
        "Key": {},
        "KeyMd5": {},
        "InitializationVector": {}
      },
      "Rotate": {},
      "PresetId": {},
      "SegmentDuration": {},
      "Status": {},
      "StatusDetail": {},
      "Duration": {},
      "Width": {},
      "Height": {},
      "FrameRate": {},
      "FileSize": {},
      "DurationMillis": {},
      "Watermarks": {},
      "AlbumArt": {
        "MergePolicy": {},
        "Artwork": {}
      },
      "Composition": {},
      "Captions": {
        "MergePolicy": {},
        "CaptionSources": {},
        "CaptionFormats": {}
      },
      "Encryption": {
        "Mode": {},
        "Key": {},
        "KeyMd5": {},
        "InitializationVector": {}
      },
      "AppliedColorSpaceConversion": {}
    },
    "Outputs": {},
    "OutputKeyPrefix": {},
    "Playlists": {},
    "Status": {},
    "UserMetadata": {
      "property1": "string",
      "property2": "string"
    },
    "Timing": {
      "SubmitTimeMillis": {},
      "StartTimeMillis": {},
      "FinishTimeMillis": {}
    }
  }
]
```

<h2 id="tocS_KeyIdGuid">KeyIdGuid</h2>
<!-- backwards compatibility -->
<a id="schemakeyidguid"></a>
<a id="schema_KeyIdGuid"></a>
<a id="tocSkeyidguid"></a>
<a id="tocskeyidguid"></a>

```json
"string"
```

<h2 id="tocS_ListJobsByPipelineRequest">ListJobsByPipelineRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistjobsbypipelinerequest"></a>
<a id="schema_ListJobsByPipelineRequest"></a>
<a id="tocSlistjobsbypipelinerequest"></a>
<a id="tocslistjobsbypipelinerequest"></a>

```json
{}
```

The <code>ListJobsByPipelineRequest</code> structure.

<h2 id="tocS_ListJobsByStatusRequest">ListJobsByStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistjobsbystatusrequest"></a>
<a id="schema_ListJobsByStatusRequest"></a>
<a id="tocSlistjobsbystatusrequest"></a>
<a id="tocslistjobsbystatusrequest"></a>

```json
{}
```

The <code>ListJobsByStatusRequest</code> structure.

<h2 id="tocS_ListPipelinesRequest">ListPipelinesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpipelinesrequest"></a>
<a id="schema_ListPipelinesRequest"></a>
<a id="tocSlistpipelinesrequest"></a>
<a id="tocslistpipelinesrequest"></a>

```json
{}
```

The <code>ListPipelineRequest</code> structure.

<h2 id="tocS_Pipelines">Pipelines</h2>
<!-- backwards compatibility -->
<a id="schemapipelines"></a>
<a id="schema_Pipelines"></a>
<a id="tocSpipelines"></a>
<a id="tocspipelines"></a>

```json
[
  {
    "Id": {},
    "Arn": {},
    "Name": {},
    "Status": {},
    "InputBucket": {},
    "OutputBucket": {},
    "Role": {},
    "AwsKmsKeyArn": {},
    "Notifications": {
      "Progressing": {},
      "Completed": {},
      "Warning": {},
      "Error": {}
    },
    "ContentConfig": {
      "Bucket": {},
      "StorageClass": {},
      "Permissions": {}
    },
    "ThumbnailConfig": {
      "Bucket": {},
      "StorageClass": {},
      "Permissions": {}
    }
  }
]
```

<h2 id="tocS_ListPresetsRequest">ListPresetsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpresetsrequest"></a>
<a id="schema_ListPresetsRequest"></a>
<a id="tocSlistpresetsrequest"></a>
<a id="tocslistpresetsrequest"></a>

```json
{}
```

The <code>ListPresetsRequest</code> structure.

<h2 id="tocS_Presets">Presets</h2>
<!-- backwards compatibility -->
<a id="schemapresets"></a>
<a id="schema_Presets"></a>
<a id="tocSpresets"></a>
<a id="tocspresets"></a>

```json
[
  {
    "Id": {},
    "Arn": {},
    "Name": {},
    "Description": {},
    "Container": {},
    "Audio": {
      "Codec": {},
      "SampleRate": {},
      "BitRate": {},
      "Channels": {},
      "AudioPackingMode": {},
      "CodecOptions": {
        "Profile": {},
        "BitDepth": {},
        "BitOrder": {},
        "Signed": {}
      }
    },
    "Video": {
      "Codec": {},
      "CodecOptions": {
        "property1": "string",
        "property2": "string"
      },
      "KeyframesMaxDist": {},
      "FixedGOP": {},
      "BitRate": {},
      "FrameRate": {},
      "MaxFrameRate": {},
      "Resolution": {},
      "AspectRatio": {},
      "MaxWidth": {},
      "MaxHeight": {},
      "DisplayAspectRatio": {},
      "SizingPolicy": {},
      "PaddingPolicy": {},
      "Watermarks": {}
    },
    "Thumbnails": {
      "Format": {},
      "Interval": {},
      "Resolution": {},
      "AspectRatio": {},
      "MaxWidth": {},
      "MaxHeight": {},
      "SizingPolicy": {},
      "PaddingPolicy": {}
    },
    "Type": {}
  }
]
```

<h2 id="tocS_NonEmptyBase64EncodedString">NonEmptyBase64EncodedString</h2>
<!-- backwards compatibility -->
<a id="schemanonemptybase64encodedstring"></a>
<a id="schema_NonEmptyBase64EncodedString"></a>
<a id="tocSnonemptybase64encodedstring"></a>
<a id="tocsnonemptybase64encodedstring"></a>

```json
"string"
```

<h2 id="tocS_OneTo512String">OneTo512String</h2>
<!-- backwards compatibility -->
<a id="schemaoneto512string"></a>
<a id="schema_OneTo512String"></a>
<a id="tocSoneto512string"></a>
<a id="tocsoneto512string"></a>

```json
"string"
```

<h2 id="tocS_Opacity">Opacity</h2>
<!-- backwards compatibility -->
<a id="schemaopacity"></a>
<a id="schema_Opacity"></a>
<a id="tocSopacity"></a>
<a id="tocsopacity"></a>

```json
"string"
```

<h2 id="tocS_Permission">Permission</h2>
<!-- backwards compatibility -->
<a id="schemapermission"></a>
<a id="schema_Permission"></a>
<a id="tocSpermission"></a>
<a id="tocspermission"></a>

```json
{
  "GranteeType": {},
  "Grantee": {},
  "Access": {}
}
```

The <code>Permission</code> structure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GranteeType|object|false|none|none|
|Grantee|object|false|none|none|
|Access|object|false|none|none|

<h2 id="tocS_PipelineStatus">PipelineStatus</h2>
<!-- backwards compatibility -->
<a id="schemapipelinestatus"></a>
<a id="schema_PipelineStatus"></a>
<a id="tocSpipelinestatus"></a>
<a id="tocspipelinestatus"></a>

```json
"string"
```

<h2 id="tocS_PixelsOrPercent">PixelsOrPercent</h2>
<!-- backwards compatibility -->
<a id="schemapixelsorpercent"></a>
<a id="schema_PixelsOrPercent"></a>
<a id="tocSpixelsorpercent"></a>
<a id="tocspixelsorpercent"></a>

```json
"string"
```

<h2 id="tocS_PlayReadyDrmFormatString">PlayReadyDrmFormatString</h2>
<!-- backwards compatibility -->
<a id="schemaplayreadydrmformatstring"></a>
<a id="schema_PlayReadyDrmFormatString"></a>
<a id="tocSplayreadydrmformatstring"></a>
<a id="tocsplayreadydrmformatstring"></a>

```json
"string"
```

<h2 id="tocS_Playlist">Playlist</h2>
<!-- backwards compatibility -->
<a id="schemaplaylist"></a>
<a id="schema_Playlist"></a>
<a id="tocSplaylist"></a>
<a id="tocsplaylist"></a>

```json
{
  "Name": {},
  "Format": {},
  "OutputKeys": {},
  "HlsContentProtection": {
    "Method": {},
    "Key": {},
    "KeyMd5": {},
    "InitializationVector": {},
    "LicenseAcquisitionUrl": {},
    "KeyStoragePolicy": {}
  },
  "PlayReadyDrm": {
    "Format": {},
    "Key": {},
    "KeyMd5": {},
    "KeyId": {},
    "InitializationVector": {},
    "LicenseAcquisitionUrl": {}
  },
  "Status": {},
  "StatusDetail": {}
}
```

 Use Only for Fragmented MP4 or MPEG-TS Outputs. If you specify a preset for which the value of Container is <code>fmp4</code> (Fragmented MP4) or <code>ts</code> (MPEG-TS), Playlists contains information about the master playlists that you want Elastic Transcoder to create. We recommend that you create only one master playlist per output format. The maximum number of master playlists in a job is 30.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|Format|object|false|none|none|
|OutputKeys|object|false|none|none|
|HlsContentProtection|object|false|none|none|
|PlayReadyDrm|object|false|none|none|
|Status|object|false|none|none|
|StatusDetail|object|false|none|none|

<h2 id="tocS_PresetType">PresetType</h2>
<!-- backwards compatibility -->
<a id="schemapresettype"></a>
<a id="schema_PresetType"></a>
<a id="tocSpresettype"></a>
<a id="tocspresettype"></a>

```json
"string"
```

<h2 id="tocS_WatermarkSizingPolicy">WatermarkSizingPolicy</h2>
<!-- backwards compatibility -->
<a id="schemawatermarksizingpolicy"></a>
<a id="schema_WatermarkSizingPolicy"></a>
<a id="tocSwatermarksizingpolicy"></a>
<a id="tocswatermarksizingpolicy"></a>

```json
"string"
```

<h2 id="tocS_VerticalAlign">VerticalAlign</h2>
<!-- backwards compatibility -->
<a id="schemaverticalalign"></a>
<a id="schema_VerticalAlign"></a>
<a id="tocSverticalalign"></a>
<a id="tocsverticalalign"></a>

```json
"string"
```

<h2 id="tocS_Target">Target</h2>
<!-- backwards compatibility -->
<a id="schematarget"></a>
<a id="schema_Target"></a>
<a id="tocStarget"></a>
<a id="tocstarget"></a>

```json
"string"
```

<h2 id="tocS_PresetWatermark">PresetWatermark</h2>
<!-- backwards compatibility -->
<a id="schemapresetwatermark"></a>
<a id="schema_PresetWatermark"></a>
<a id="tocSpresetwatermark"></a>
<a id="tocspresetwatermark"></a>

```json
{
  "Id": {},
  "MaxWidth": {},
  "MaxHeight": {},
  "SizingPolicy": {},
  "HorizontalAlign": {},
  "HorizontalOffset": {},
  "VerticalAlign": {},
  "VerticalOffset": {},
  "Opacity": {},
  "Target": {}
}
```

<p>Settings for the size, location, and opacity of graphics that you want Elastic Transcoder to overlay over videos that are transcoded using this preset. You can specify settings for up to four watermarks. Watermarks appear in the specified size and location, and with the specified opacity for the duration of the transcoded video.</p> <p>Watermarks can be in .png or .jpg format. If you want to display a watermark that is not rectangular, use the .png format, which supports transparency.</p> <p>When you create a job that uses this preset, you specify the .png or .jpg graphics that you want Elastic Transcoder to include in the transcoded videos. You can specify fewer graphics in the job than you specify watermark settings in the preset, which allows you to use the same preset for up to four watermarks that have different dimensions.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|object|false|none|none|
|MaxWidth|object|false|none|none|
|MaxHeight|object|false|none|none|
|SizingPolicy|object|false|none|none|
|HorizontalAlign|object|false|none|none|
|HorizontalOffset|object|false|none|none|
|VerticalAlign|object|false|none|none|
|VerticalOffset|object|false|none|none|
|Opacity|object|false|none|none|
|Target|object|false|none|none|

<h2 id="tocS_ReadJobRequest">ReadJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemareadjobrequest"></a>
<a id="schema_ReadJobRequest"></a>
<a id="tocSreadjobrequest"></a>
<a id="tocsreadjobrequest"></a>

```json
{}
```

The <code>ReadJobRequest</code> structure.

<h2 id="tocS_ReadPipelineRequest">ReadPipelineRequest</h2>
<!-- backwards compatibility -->
<a id="schemareadpipelinerequest"></a>
<a id="schema_ReadPipelineRequest"></a>
<a id="tocSreadpipelinerequest"></a>
<a id="tocsreadpipelinerequest"></a>

```json
{}
```

The <code>ReadPipelineRequest</code> structure.

<h2 id="tocS_ReadPresetRequest">ReadPresetRequest</h2>
<!-- backwards compatibility -->
<a id="schemareadpresetrequest"></a>
<a id="schema_ReadPresetRequest"></a>
<a id="tocSreadpresetrequest"></a>
<a id="tocsreadpresetrequest"></a>

```json
{}
```

The <code>ReadPresetRequest</code> structure.

<h2 id="tocS_SnsTopics">SnsTopics</h2>
<!-- backwards compatibility -->
<a id="schemasnstopics"></a>
<a id="schema_SnsTopics"></a>
<a id="tocSsnstopics"></a>
<a id="tocssnstopics"></a>

```json
[
  "string"
]
```

<h2 id="tocS_Success">Success</h2>
<!-- backwards compatibility -->
<a id="schemasuccess"></a>
<a id="schema_Success"></a>
<a id="tocSsuccess"></a>
<a id="tocssuccess"></a>

```json
"string"
```

<h2 id="tocS_TestRoleRequest">TestRoleRequest</h2>
<!-- backwards compatibility -->
<a id="schematestrolerequest"></a>
<a id="schema_TestRoleRequest"></a>
<a id="tocStestrolerequest"></a>
<a id="tocstestrolerequest"></a>

```json
{
  "Role": {},
  "InputBucket": {},
  "OutputBucket": {},
  "Topics": {}
}
```

 The <code>TestRoleRequest</code> structure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Role|object|true|none|none|
|InputBucket|object|true|none|none|
|OutputBucket|object|true|none|none|
|Topics|object|true|none|none|

<h2 id="tocS_Time">Time</h2>
<!-- backwards compatibility -->
<a id="schematime"></a>
<a id="schema_Time"></a>
<a id="tocStime"></a>
<a id="tocstime"></a>

```json
"string"
```

<h2 id="tocS_UpdatePipelineNotificationsRequest">UpdatePipelineNotificationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepipelinenotificationsrequest"></a>
<a id="schema_UpdatePipelineNotificationsRequest"></a>
<a id="tocSupdatepipelinenotificationsrequest"></a>
<a id="tocsupdatepipelinenotificationsrequest"></a>

```json
{
  "Notifications": {
    "Progressing": {},
    "Completed": {},
    "Warning": {},
    "Error": {}
  }
}
```

The <code>UpdatePipelineNotificationsRequest</code> structure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Notifications|object|true|none|none|

<h2 id="tocS_UpdatePipelineRequest">UpdatePipelineRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepipelinerequest"></a>
<a id="schema_UpdatePipelineRequest"></a>
<a id="tocSupdatepipelinerequest"></a>
<a id="tocsupdatepipelinerequest"></a>

```json
{
  "Name": {},
  "InputBucket": {},
  "Role": {},
  "AwsKmsKeyArn": {},
  "Notifications": {
    "Progressing": {},
    "Completed": {},
    "Warning": {},
    "Error": {}
  },
  "ContentConfig": {
    "Bucket": {},
    "StorageClass": {},
    "Permissions": {}
  },
  "ThumbnailConfig": {
    "Bucket": {},
    "StorageClass": {},
    "Permissions": {}
  }
}
```

The <code>UpdatePipelineRequest</code> structure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|false|none|none|
|InputBucket|object|false|none|none|
|Role|object|false|none|none|
|AwsKmsKeyArn|object|false|none|none|
|Notifications|object|false|none|none|
|ContentConfig|object|false|none|none|
|ThumbnailConfig|object|false|none|none|

<h2 id="tocS_UpdatePipelineStatusRequest">UpdatePipelineStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepipelinestatusrequest"></a>
<a id="schema_UpdatePipelineStatusRequest"></a>
<a id="tocSupdatepipelinestatusrequest"></a>
<a id="tocsupdatepipelinestatusrequest"></a>

```json
{
  "Status": {}
}
```

The <code>UpdatePipelineStatusRequest</code> structure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Status|object|true|none|none|

<h2 id="tocS_Warning">Warning</h2>
<!-- backwards compatibility -->
<a id="schemawarning"></a>
<a id="schema_Warning"></a>
<a id="tocSwarning"></a>
<a id="tocswarning"></a>

```json
{
  "Code": {},
  "Message": {}
}
```

<p>Elastic Transcoder returns a warning if the resources used by your pipeline are not in the same region as the pipeline.</p> <p>Using resources in the same region, such as your Amazon S3 buckets, Amazon SNS notification topics, and AWS KMS key, reduces processing time and prevents cross-regional charges.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|object|false|none|none|
|Message|object|false|none|none|
