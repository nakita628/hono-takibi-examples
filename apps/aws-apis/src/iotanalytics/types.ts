type Message = { messageId: {}; payload: {} }
type BatchPutMessageResponse = { batchPutMessageErrorEntries?: {} | undefined }
type CancelPipelineReprocessingResponse = { [x: string]: unknown }
type Tag = { key: {}; value: {} }
type CreateChannelResponse = {
  channelName?: {} | undefined
  channelArn?: {} | undefined
  retentionPeriod?: { unlimited?: {} | undefined; numberOfDays?: {} | undefined } | undefined
}
type ListChannelsResponse = { channelSummaries?: {} | undefined; nextToken?: {} | undefined }
type DatasetAction = {
  actionName?: {} | undefined
  queryAction?: { sqlQuery: {}; filters?: {} | undefined } | undefined
  containerAction?:
    | {
        image: {}
        executionRoleArn: {}
        resourceConfiguration: { computeType: {}; volumeSizeInGB: {} }
        variables?: {} | undefined
      }
    | undefined
}
type DatasetTrigger = {
  schedule?: { expression?: {} | undefined } | undefined
  dataset?: { name: {} } | undefined
}
type DatasetContentDeliveryRule = {
  entryName?: {} | undefined
  destination: {
    iotEventsDestinationConfiguration?: { inputName: {}; roleArn: {} } | undefined
    s3DestinationConfiguration?:
      | {
          bucket: {}
          key: {}
          glueConfiguration?: { tableName: {}; databaseName: {} } | undefined
          roleArn: {}
        }
      | undefined
  }
}
type LateDataRule = {
  ruleName?: {} | undefined
  ruleConfiguration: { deltaTimeSessionWindowConfiguration?: { timeoutInMinutes: {} } | undefined }
}
type CreateDatasetResponse = {
  datasetName?: {} | undefined
  datasetArn?: {} | undefined
  retentionPeriod?: { unlimited?: {} | undefined; numberOfDays?: {} | undefined } | undefined
}
type ListDatasetsResponse = { datasetSummaries?: {} | undefined; nextToken?: {} | undefined }
type CreateDatasetContentResponse = { versionId?: {} | undefined }
type GetDatasetContentResponse = {
  entries?: {} | undefined
  timestamp?: {} | undefined
  status?: { state?: {} | undefined; reason?: {} | undefined } | undefined
}
type CreateDatastoreResponse = {
  datastoreName?: {} | undefined
  datastoreArn?: {} | undefined
  retentionPeriod?: { unlimited?: {} | undefined; numberOfDays?: {} | undefined } | undefined
}
type ListDatastoresResponse = { datastoreSummaries?: {} | undefined; nextToken?: {} | undefined }
type PipelineActivity = {
  channel?: { name: {}; channelName: {}; next?: {} | undefined } | undefined
  lambda?: { name: {}; lambdaName: {}; batchSize: {}; next?: {} | undefined } | undefined
  datastore?: { name: {}; datastoreName: {} } | undefined
  addAttributes?: { name: {}; attributes: {}; next?: {} | undefined } | undefined
  removeAttributes?: { name: {}; attributes: {}; next?: {} | undefined } | undefined
  selectAttributes?: { name: {}; attributes: {}; next?: {} | undefined } | undefined
  filter?: { name: {}; filter: {}; next?: {} | undefined } | undefined
  math?: { name: {}; attribute: {}; math: {}; next?: {} | undefined } | undefined
  deviceRegistryEnrich?:
    | { name: {}; attribute: {}; thingName: {}; roleArn: {}; next?: {} | undefined }
    | undefined
  deviceShadowEnrich?:
    | { name: {}; attribute: {}; thingName: {}; roleArn: {}; next?: {} | undefined }
    | undefined
}
type CreatePipelineResponse = { pipelineName?: {} | undefined; pipelineArn?: {} | undefined }
type ListPipelinesResponse = { pipelineSummaries?: {} | undefined; nextToken?: {} | undefined }
type DescribeChannelResponse = {
  channel?:
    | {
        name?: {} | undefined
        storage?:
          | {
              serviceManagedS3?: {} | undefined
              customerManagedS3?:
                | { bucket: {}; keyPrefix?: {} | undefined; roleArn: {} }
                | undefined
            }
          | undefined
        arn?: {} | undefined
        status?: {} | undefined
        retentionPeriod?: { unlimited?: {} | undefined; numberOfDays?: {} | undefined } | undefined
        creationTime?: {} | undefined
        lastUpdateTime?: {} | undefined
        lastMessageArrivalTime?: {} | undefined
      }
    | undefined
  statistics?:
    | { size?: { estimatedSizeInBytes?: {} | undefined; estimatedOn?: {} | undefined } | undefined }
    | undefined
}
type DescribeDatasetResponse = {
  dataset?:
    | {
        name?: {} | undefined
        arn?: {} | undefined
        actions?: {} | undefined
        triggers?: {} | undefined
        contentDeliveryRules?: {} | undefined
        status?: {} | undefined
        creationTime?: {} | undefined
        lastUpdateTime?: {} | undefined
        retentionPeriod?: { unlimited?: {} | undefined; numberOfDays?: {} | undefined } | undefined
        versioningConfiguration?:
          | { unlimited?: {} | undefined; maxVersions?: {} | undefined }
          | undefined
        lateDataRules?: {} | undefined
      }
    | undefined
}
type DescribeDatastoreResponse = {
  datastore?:
    | {
        name?: {} | undefined
        storage?:
          | {
              serviceManagedS3?: {} | undefined
              customerManagedS3?:
                | { bucket: {}; keyPrefix?: {} | undefined; roleArn: {} }
                | undefined
              iotSiteWiseMultiLayerStorage?:
                | { customerManagedS3Storage: { bucket: {}; keyPrefix?: {} | undefined } }
                | undefined
            }
          | undefined
        arn?: {} | undefined
        status?: {} | undefined
        retentionPeriod?: { unlimited?: {} | undefined; numberOfDays?: {} | undefined } | undefined
        creationTime?: {} | undefined
        lastUpdateTime?: {} | undefined
        lastMessageArrivalTime?: {} | undefined
        fileFormatConfiguration?:
          | {
              jsonConfiguration?: {} | undefined
              parquetConfiguration?:
                | { schemaDefinition?: { columns?: {} | undefined } | undefined }
                | undefined
            }
          | undefined
        datastorePartitions?: { partitions?: {} | undefined } | undefined
      }
    | undefined
  statistics?:
    | { size?: { estimatedSizeInBytes?: {} | undefined; estimatedOn?: {} | undefined } | undefined }
    | undefined
}
type DescribePipelineResponse = {
  pipeline?:
    | {
        name?: {} | undefined
        arn?: {} | undefined
        activities?: {} | undefined
        reprocessingSummaries?: {} | undefined
        creationTime?: {} | undefined
        lastUpdateTime?: {} | undefined
      }
    | undefined
}
type DescribeLoggingOptionsResponse = {
  loggingOptions?: { roleArn: {}; level: {}; enabled: {} } | undefined
}
type ListDatasetContentsResponse = {
  datasetContentSummaries?: {} | undefined
  nextToken?: {} | undefined
}
type ListTagsForResourceResponse = { tags?: {} | undefined }
type TagResourceResponse = { [x: string]: unknown }
type MessagePayload = string
type RunPipelineActivityResponse = { payloads?: {} | undefined; logResult?: {} | undefined }
type SampleChannelDataResponse = { payloads?: {} | undefined }
type StartPipelineReprocessingResponse = { reprocessingId?: {} | undefined }
type TagKey = string
type UntagResourceResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/messages/batch': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { channelName: string; messages: Message[] } }
        output: BatchPutMessageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/pipelines/:pipelineName/reprocessing/:reprocessingId': {
      $delete: {
        input: { param: { pipelineName: string; reprocessingId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CancelPipelineReprocessingResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/channels': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            channelName: string
            channelStorage?:
              | {
                  serviceManagedS3?: {} | undefined
                  customerManagedS3?:
                    | { bucket: {}; keyPrefix?: {} | undefined; roleArn: {} }
                    | undefined
                }
              | undefined
            retentionPeriod?:
              | { unlimited?: {} | undefined; numberOfDays?: {} | undefined }
              | undefined
            tags?: Tag[] | undefined
          }
        }
        output: CreateChannelResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { query: { nextToken?: string | undefined; maxResults?: number | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListChannelsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/datasets': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            datasetName: string
            actions: DatasetAction[]
            triggers?: DatasetTrigger[] | undefined
            contentDeliveryRules?: DatasetContentDeliveryRule[] | undefined
            retentionPeriod?:
              | { unlimited?: {} | undefined; numberOfDays?: {} | undefined }
              | undefined
            versioningConfiguration?:
              | { unlimited?: {} | undefined; maxVersions?: {} | undefined }
              | undefined
            tags?: Tag[] | undefined
            lateDataRules?: LateDataRule[] | undefined
          }
        }
        output: CreateDatasetResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { query: { nextToken?: string | undefined; maxResults?: number | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListDatasetsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/datasets/:datasetName/content': {
      $post: {
        input: { param: { datasetName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { versionId?: string | undefined } }
        output: CreateDatasetContentResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { datasetName: string } } & {
          query: { versionId?: string | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { datasetName: string } } & {
          query: { versionId?: string | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetDatasetContentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/datastores': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            datastoreName: string
            datastoreStorage?:
              | {
                  serviceManagedS3?: {} | undefined
                  customerManagedS3?:
                    | { bucket: {}; keyPrefix?: {} | undefined; roleArn: {} }
                    | undefined
                  iotSiteWiseMultiLayerStorage?:
                    | { customerManagedS3Storage: { bucket: {}; keyPrefix?: {} | undefined } }
                    | undefined
                }
              | undefined
            retentionPeriod?:
              | { unlimited?: {} | undefined; numberOfDays?: {} | undefined }
              | undefined
            tags?: Tag[] | undefined
            fileFormatConfiguration?:
              | {
                  jsonConfiguration?: {} | undefined
                  parquetConfiguration?:
                    | { schemaDefinition?: { columns?: {} | undefined } | undefined }
                    | undefined
                }
              | undefined
            datastorePartitions?: { partitions?: {} | undefined } | undefined
          }
        }
        output: CreateDatastoreResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { query: { nextToken?: string | undefined; maxResults?: number | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListDatastoresResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/pipelines': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            pipelineName: string
            pipelineActivities: PipelineActivity[]
            tags?: Tag[] | undefined
          }
        }
        output: CreatePipelineResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { query: { nextToken?: string | undefined; maxResults?: number | undefined } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListPipelinesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/channels/:channelName': {
      $delete: {
        input: { param: { channelName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { channelName: string } } & {
          query: { includeStatistics?: boolean | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeChannelResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { channelName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            channelStorage?:
              | {
                  serviceManagedS3?: {} | undefined
                  customerManagedS3?:
                    | { bucket: {}; keyPrefix?: {} | undefined; roleArn: {} }
                    | undefined
                }
              | undefined
            retentionPeriod?:
              | { unlimited?: {} | undefined; numberOfDays?: {} | undefined }
              | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/datasets/:datasetName': {
      $delete: {
        input: { param: { datasetName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { datasetName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeDatasetResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { datasetName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            actions: DatasetAction[]
            triggers?: DatasetTrigger[] | undefined
            contentDeliveryRules?: DatasetContentDeliveryRule[] | undefined
            retentionPeriod?:
              | { unlimited?: {} | undefined; numberOfDays?: {} | undefined }
              | undefined
            versioningConfiguration?:
              | { unlimited?: {} | undefined; maxVersions?: {} | undefined }
              | undefined
            lateDataRules?: LateDataRule[] | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/datastores/:datastoreName': {
      $delete: {
        input: { param: { datastoreName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { datastoreName: string } } & {
          query: { includeStatistics?: boolean | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeDatastoreResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { datastoreName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            retentionPeriod?:
              | { unlimited?: {} | undefined; numberOfDays?: {} | undefined }
              | undefined
            datastoreStorage?:
              | {
                  serviceManagedS3?: {} | undefined
                  customerManagedS3?:
                    | { bucket: {}; keyPrefix?: {} | undefined; roleArn: {} }
                    | undefined
                  iotSiteWiseMultiLayerStorage?:
                    | { customerManagedS3Storage: { bucket: {}; keyPrefix?: {} | undefined } }
                    | undefined
                }
              | undefined
            fileFormatConfiguration?:
              | {
                  jsonConfiguration?: {} | undefined
                  parquetConfiguration?:
                    | { schemaDefinition?: { columns?: {} | undefined } | undefined }
                    | undefined
                }
              | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/pipelines/:pipelineName': {
      $delete: {
        input: { param: { pipelineName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { pipelineName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribePipelineResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { pipelineName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { pipelineActivities: PipelineActivity[] } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/logging': {
      $get: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeLoggingOptionsResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            loggingOptions: {
              roleArn?: {} | undefined
              level?: {} | undefined
              enabled?: {} | undefined
            }
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/datasets/:datasetName/contents': {
      $get: {
        input: { param: { datasetName: string } } & {
          query: {
            nextToken?: string | undefined
            maxResults?: number | undefined
            scheduledOnOrAfter?: string | undefined
            scheduledBefore?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListDatasetContentsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags#resourceArn': {
      $get: {
        input: { query: { resourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListTagsForResourceResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { query: { resourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { tags: Tag[] } }
        output: TagResourceResponse
        outputFormat: 'json'
        status: 204
      }
    }
  } & {
    '/pipelineactivities/run': {
      $post: {
        input: {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            pipelineActivity: {
              channel?: { name: {}; channelName: {}; next?: {} | undefined } | undefined
              lambda?:
                | { name: {}; lambdaName: {}; batchSize: {}; next?: {} | undefined }
                | undefined
              datastore?: { name: {}; datastoreName: {} } | undefined
              addAttributes?: { name: {}; attributes: {}; next?: {} | undefined } | undefined
              removeAttributes?: { name: {}; attributes: {}; next?: {} | undefined } | undefined
              selectAttributes?: { name: {}; attributes: {}; next?: {} | undefined } | undefined
              filter?: { name: {}; filter: {}; next?: {} | undefined } | undefined
              math?: { name: {}; attribute: {}; math: {}; next?: {} | undefined } | undefined
              deviceRegistryEnrich?:
                | { name: {}; attribute: {}; thingName: {}; roleArn: {}; next?: {} | undefined }
                | undefined
              deviceShadowEnrich?:
                | { name: {}; attribute: {}; thingName: {}; roleArn: {}; next?: {} | undefined }
                | undefined
            }
            payloads: MessagePayload[]
          }
        }
        output: RunPipelineActivityResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/channels/:channelName/sample': {
      $get: {
        input: { param: { channelName: string } } & {
          query: {
            maxMessages?: number | undefined
            startTime?: string | undefined
            endTime?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: SampleChannelDataResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/pipelines/:pipelineName/reprocessing': {
      $post: {
        input: { param: { pipelineName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            startTime?: string | undefined
            endTime?: string | undefined
            channelMessages?: { s3Paths?: {} | undefined } | undefined
          }
        }
        output: StartPipelineReprocessingResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags#resourceArn&tagKeys': {
      $delete: {
        input: { query: { resourceArn: string; tagKeys: TagKey[] } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: UntagResourceResponse
        outputFormat: 'json'
        status: 204
      }
    }
  },
  '/'
>
export default routes
