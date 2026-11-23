type CreateBatchInferenceJobRequest = {
  jobName: {}
  solutionVersionArn: {}
  filterArn?: {} | undefined
  numResults?: {} | undefined
  jobInput: { s3DataSource: { path: {}; kmsKeyArn?: {} | undefined } }
  jobOutput: { s3DataDestination: { path: {}; kmsKeyArn?: {} | undefined } }
  roleArn: {}
  batchInferenceJobConfig?: { itemExplorationConfig?: {} | undefined } | undefined
  tags?: {} | undefined
}
type CreateBatchInferenceJobResponse = { batchInferenceJobArn?: {} | undefined }
type S3DataConfig = { path: {}; kmsKeyArn?: {} | undefined }
type CreateBatchSegmentJobRequest = {
  jobName: {}
  solutionVersionArn: {}
  filterArn?: {} | undefined
  numResults?: {} | undefined
  jobInput: { s3DataSource: S3DataConfig }
  jobOutput: { s3DataDestination: S3DataConfig }
  roleArn: {}
  tags?: {} | undefined
}
type CreateBatchSegmentJobResponse = { batchSegmentJobArn?: {} | undefined }
type CreateCampaignRequest = {
  name: {}
  solutionVersionArn: {}
  minProvisionedTPS?: {} | undefined
  campaignConfig?: { itemExplorationConfig?: {} | undefined } | undefined
  tags?: {} | undefined
}
type CreateCampaignResponse = { campaignArn?: {} | undefined }
type CreateDatasetRequest = {
  name: {}
  schemaArn: {}
  datasetGroupArn: {}
  datasetType: {}
  tags?: {} | undefined
}
type CreateDatasetResponse = { datasetArn?: {} | undefined }
type CreateDatasetExportJobRequest = {
  jobName: {}
  datasetArn: {}
  ingestionMode?: {} | undefined
  roleArn: {}
  jobOutput: { s3DataDestination: S3DataConfig }
  tags?: {} | undefined
}
type CreateDatasetExportJobResponse = { datasetExportJobArn?: {} | undefined }
type CreateDatasetGroupRequest = {
  name: {}
  roleArn?: {} | undefined
  kmsKeyArn?: {} | undefined
  domain?: {} | undefined
  tags?: {} | undefined
}
type CreateDatasetGroupResponse = { datasetGroupArn?: {} | undefined; domain?: {} | undefined }
type CreateDatasetImportJobRequest = {
  jobName: {}
  datasetArn: {}
  dataSource: { dataLocation?: {} | undefined }
  roleArn: {}
  tags?: {} | undefined
  importMode?: {} | undefined
  publishAttributionMetricsToS3?: {} | undefined
}
type CreateDatasetImportJobResponse = { datasetImportJobArn?: {} | undefined }
type CreateEventTrackerRequest = { name: {}; datasetGroupArn: {}; tags?: {} | undefined }
type CreateEventTrackerResponse = { eventTrackerArn?: {} | undefined; trackingId?: {} | undefined }
type CreateFilterRequest = {
  name: {}
  datasetGroupArn: {}
  filterExpression: {}
  tags?: {} | undefined
}
type CreateFilterResponse = { filterArn?: {} | undefined }
type CreateMetricAttributionRequest = {
  name: {}
  datasetGroupArn: {}
  metrics: {}
  metricsOutputConfig: { s3DataDestination?: S3DataConfig | undefined; roleArn: {} }
}
type CreateMetricAttributionResponse = { metricAttributionArn?: {} | undefined }
type CreateRecommenderRequest = {
  name: {}
  datasetGroupArn: {}
  recipeArn: {}
  recommenderConfig?:
    | {
        itemExplorationConfig?: {} | undefined
        minRecommendationRequestsPerSecond?: {} | undefined
      }
    | undefined
  tags?: {} | undefined
}
type CreateRecommenderResponse = { recommenderArn?: {} | undefined }
type CreateSchemaRequest = { name: {}; schema: {}; domain?: {} | undefined }
type CreateSchemaResponse = { schemaArn?: {} | undefined }
type CreateSolutionRequest = {
  name: {}
  performHPO?: {} | undefined
  performAutoML?: {} | undefined
  recipeArn?: {} | undefined
  datasetGroupArn: {}
  eventType?: {} | undefined
  solutionConfig?:
    | {
        eventValueThreshold?: {} | undefined
        hpoConfig?:
          | {
              hpoObjective?:
                | {
                    type?: {} | undefined
                    metricName?: {} | undefined
                    metricRegex?: {} | undefined
                  }
                | undefined
              hpoResourceConfig?:
                | {
                    maxNumberOfTrainingJobs?: {} | undefined
                    maxParallelTrainingJobs?: {} | undefined
                  }
                | undefined
              algorithmHyperParameterRanges?:
                | {
                    integerHyperParameterRanges?: {} | undefined
                    continuousHyperParameterRanges?: {} | undefined
                    categoricalHyperParameterRanges?: {} | undefined
                  }
                | undefined
            }
          | undefined
        algorithmHyperParameters?: {} | undefined
        featureTransformationParameters?: {} | undefined
        autoMLConfig?: { metricName?: {} | undefined; recipeList?: {} | undefined } | undefined
        optimizationObjective?:
          | { itemAttribute?: {} | undefined; objectiveSensitivity?: {} | undefined }
          | undefined
      }
    | undefined
  tags?: {} | undefined
}
type CreateSolutionResponse = { solutionArn?: {} | undefined }
type CreateSolutionVersionRequest = {
  name?: {} | undefined
  solutionArn: {}
  trainingMode?: {} | undefined
  tags?: {} | undefined
}
type CreateSolutionVersionResponse = { solutionVersionArn?: {} | undefined }
type DeleteCampaignRequest = { campaignArn: {} }
type DeleteDatasetRequest = { datasetArn: {} }
type DeleteDatasetGroupRequest = { datasetGroupArn: {} }
type DeleteEventTrackerRequest = { eventTrackerArn: {} }
type DeleteFilterRequest = { filterArn: {} }
type DeleteMetricAttributionRequest = { metricAttributionArn: {} }
type DeleteRecommenderRequest = { recommenderArn: {} }
type DeleteSchemaRequest = { schemaArn: {} }
type DeleteSolutionRequest = { solutionArn: {} }
type DescribeAlgorithmRequest = { algorithmArn: {} }
type DescribeAlgorithmResponse = {
  algorithm?:
    | {
        name?: {} | undefined
        algorithmArn?: {} | undefined
        algorithmImage?: { name?: {} | undefined; dockerURI: {} } | undefined
        defaultHyperParameters?: {} | undefined
        defaultHyperParameterRanges?:
          | {
              integerHyperParameterRanges?: {} | undefined
              continuousHyperParameterRanges?: {} | undefined
              categoricalHyperParameterRanges?: {} | undefined
            }
          | undefined
        defaultResourceConfig?: {} | undefined
        trainingInputMode?: {} | undefined
        roleArn?: {} | undefined
        creationDateTime?: {} | undefined
        lastUpdatedDateTime?: {} | undefined
      }
    | undefined
}
type DescribeBatchInferenceJobRequest = { batchInferenceJobArn: {} }
type DescribeBatchInferenceJobResponse = {
  batchInferenceJob?:
    | {
        jobName?: {} | undefined
        batchInferenceJobArn?: {} | undefined
        filterArn?: {} | undefined
        failureReason?: {} | undefined
        solutionVersionArn?: {} | undefined
        numResults?: {} | undefined
        jobInput?: { s3DataSource: { path: {}; kmsKeyArn?: {} | undefined } } | undefined
        jobOutput?: { s3DataDestination: { path: {}; kmsKeyArn?: {} | undefined } } | undefined
        batchInferenceJobConfig?: { itemExplorationConfig?: {} | undefined } | undefined
        roleArn?: {} | undefined
        status?: {} | undefined
        creationDateTime?: {} | undefined
        lastUpdatedDateTime?: {} | undefined
      }
    | undefined
}
type DescribeBatchSegmentJobRequest = { batchSegmentJobArn: {} }
type DescribeBatchSegmentJobResponse = {
  batchSegmentJob?:
    | {
        jobName?: {} | undefined
        batchSegmentJobArn?: {} | undefined
        filterArn?: {} | undefined
        failureReason?: {} | undefined
        solutionVersionArn?: {} | undefined
        numResults?: {} | undefined
        jobInput?: { s3DataSource: S3DataConfig } | undefined
        jobOutput?: { s3DataDestination: S3DataConfig } | undefined
        roleArn?: {} | undefined
        status?: {} | undefined
        creationDateTime?: {} | undefined
        lastUpdatedDateTime?: {} | undefined
      }
    | undefined
}
type DescribeCampaignRequest = { campaignArn: {} }
type CampaignConfig = { itemExplorationConfig?: {} | undefined }
type CampaignUpdateSummary = {
  solutionVersionArn?: {} | undefined
  minProvisionedTPS?: {} | undefined
  campaignConfig?: CampaignConfig | undefined
  status?: {} | undefined
  failureReason?: {} | undefined
  creationDateTime?: {} | undefined
  lastUpdatedDateTime?: {} | undefined
}
type DescribeCampaignResponse = {
  campaign?:
    | {
        name?: {} | undefined
        campaignArn?: {} | undefined
        solutionVersionArn?: {} | undefined
        minProvisionedTPS?: {} | undefined
        campaignConfig?: { itemExplorationConfig?: {} | undefined } | undefined
        status?: {} | undefined
        failureReason?: {} | undefined
        creationDateTime?: {} | undefined
        lastUpdatedDateTime?: {} | undefined
        latestCampaignUpdate?: CampaignUpdateSummary | undefined
      }
    | undefined
}
type DescribeDatasetRequest = { datasetArn: {} }
type DescribeDatasetResponse = {
  dataset?:
    | {
        name?: {} | undefined
        datasetArn?: {} | undefined
        datasetGroupArn?: {} | undefined
        datasetType?: {} | undefined
        schemaArn?: {} | undefined
        status?: {} | undefined
        creationDateTime?: {} | undefined
        lastUpdatedDateTime?: {} | undefined
      }
    | undefined
}
type DescribeDatasetExportJobRequest = { datasetExportJobArn: {} }
type DescribeDatasetExportJobResponse = {
  datasetExportJob?:
    | {
        jobName?: {} | undefined
        datasetExportJobArn?: {} | undefined
        datasetArn?: {} | undefined
        ingestionMode?: {} | undefined
        roleArn?: {} | undefined
        status?: {} | undefined
        jobOutput?: { s3DataDestination: S3DataConfig } | undefined
        creationDateTime?: {} | undefined
        lastUpdatedDateTime?: {} | undefined
        failureReason?: {} | undefined
      }
    | undefined
}
type DescribeDatasetGroupRequest = { datasetGroupArn: {} }
type DescribeDatasetGroupResponse = {
  datasetGroup?:
    | {
        name?: {} | undefined
        datasetGroupArn?: {} | undefined
        status?: {} | undefined
        roleArn?: {} | undefined
        kmsKeyArn?: {} | undefined
        creationDateTime?: {} | undefined
        lastUpdatedDateTime?: {} | undefined
        failureReason?: {} | undefined
        domain?: {} | undefined
      }
    | undefined
}
type DescribeDatasetImportJobRequest = { datasetImportJobArn: {} }
type DescribeDatasetImportJobResponse = {
  datasetImportJob?:
    | {
        jobName?: {} | undefined
        datasetImportJobArn?: {} | undefined
        datasetArn?: {} | undefined
        dataSource?: { dataLocation?: {} | undefined } | undefined
        roleArn?: {} | undefined
        status?: {} | undefined
        creationDateTime?: {} | undefined
        lastUpdatedDateTime?: {} | undefined
        failureReason?: {} | undefined
        importMode?: {} | undefined
        publishAttributionMetricsToS3?: {} | undefined
      }
    | undefined
}
type DescribeEventTrackerRequest = { eventTrackerArn: {} }
type DescribeEventTrackerResponse = {
  eventTracker?:
    | {
        name?: {} | undefined
        eventTrackerArn?: {} | undefined
        accountId?: {} | undefined
        trackingId?: {} | undefined
        datasetGroupArn?: {} | undefined
        status?: {} | undefined
        creationDateTime?: {} | undefined
        lastUpdatedDateTime?: {} | undefined
      }
    | undefined
}
type DescribeFeatureTransformationRequest = { featureTransformationArn: {} }
type DescribeFeatureTransformationResponse = {
  featureTransformation?:
    | {
        name?: {} | undefined
        featureTransformationArn?: {} | undefined
        defaultParameters?: {} | undefined
        creationDateTime?: {} | undefined
        lastUpdatedDateTime?: {} | undefined
        status?: {} | undefined
      }
    | undefined
}
type DescribeFilterRequest = { filterArn: {} }
type DescribeFilterResponse = {
  filter?:
    | {
        name?: {} | undefined
        filterArn?: {} | undefined
        creationDateTime?: {} | undefined
        lastUpdatedDateTime?: {} | undefined
        datasetGroupArn?: {} | undefined
        failureReason?: {} | undefined
        filterExpression?: {} | undefined
        status?: {} | undefined
      }
    | undefined
}
type DescribeMetricAttributionRequest = { metricAttributionArn: {} }
type DescribeMetricAttributionResponse = {
  metricAttribution?:
    | {
        name?: {} | undefined
        metricAttributionArn?: {} | undefined
        datasetGroupArn?: {} | undefined
        metricsOutputConfig?:
          | { s3DataDestination?: S3DataConfig | undefined; roleArn: {} }
          | undefined
        status?: {} | undefined
        creationDateTime?: {} | undefined
        lastUpdatedDateTime?: {} | undefined
        failureReason?: {} | undefined
      }
    | undefined
}
type DescribeRecipeRequest = { recipeArn: {} }
type DescribeRecipeResponse = {
  recipe?:
    | {
        name?: {} | undefined
        recipeArn?: {} | undefined
        algorithmArn?: {} | undefined
        featureTransformationArn?: {} | undefined
        status?: {} | undefined
        description?: {} | undefined
        creationDateTime?: {} | undefined
        recipeType?: {} | undefined
        lastUpdatedDateTime?: {} | undefined
      }
    | undefined
}
type DescribeRecommenderRequest = { recommenderArn: {} }
type DescribeRecommenderResponse = {
  recommender?:
    | {
        recommenderArn?: {} | undefined
        datasetGroupArn?: {} | undefined
        name?: {} | undefined
        recipeArn?: {} | undefined
        recommenderConfig?:
          | {
              itemExplorationConfig?: {} | undefined
              minRecommendationRequestsPerSecond?: {} | undefined
            }
          | undefined
        creationDateTime?: {} | undefined
        lastUpdatedDateTime?: {} | undefined
        status?: {} | undefined
        failureReason?: {} | undefined
        latestRecommenderUpdate?:
          | {
              recommenderConfig?:
                | {
                    itemExplorationConfig?: {} | undefined
                    minRecommendationRequestsPerSecond?: {} | undefined
                  }
                | undefined
              creationDateTime?: {} | undefined
              lastUpdatedDateTime?: {} | undefined
              status?: {} | undefined
              failureReason?: {} | undefined
            }
          | undefined
        modelMetrics?: {} | undefined
      }
    | undefined
}
type DescribeSchemaRequest = { schemaArn: {} }
type DescribeSchemaResponse = {
  schema?:
    | {
        name?: {} | undefined
        schemaArn?: {} | undefined
        schema?: {} | undefined
        creationDateTime?: {} | undefined
        lastUpdatedDateTime?: {} | undefined
        domain?: {} | undefined
      }
    | undefined
}
type DescribeSolutionRequest = { solutionArn: {} }
type DescribeSolutionResponse = {
  solution?:
    | {
        name?: {} | undefined
        solutionArn?: {} | undefined
        performHPO?: {} | undefined
        performAutoML?: {} | undefined
        recipeArn?: {} | undefined
        datasetGroupArn?: {} | undefined
        eventType?: {} | undefined
        solutionConfig?:
          | {
              eventValueThreshold?: {} | undefined
              hpoConfig?:
                | {
                    hpoObjective?:
                      | {
                          type?: {} | undefined
                          metricName?: {} | undefined
                          metricRegex?: {} | undefined
                        }
                      | undefined
                    hpoResourceConfig?:
                      | {
                          maxNumberOfTrainingJobs?: {} | undefined
                          maxParallelTrainingJobs?: {} | undefined
                        }
                      | undefined
                    algorithmHyperParameterRanges?:
                      | {
                          integerHyperParameterRanges?: {} | undefined
                          continuousHyperParameterRanges?: {} | undefined
                          categoricalHyperParameterRanges?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
              algorithmHyperParameters?: {} | undefined
              featureTransformationParameters?: {} | undefined
              autoMLConfig?:
                | { metricName?: {} | undefined; recipeList?: {} | undefined }
                | undefined
              optimizationObjective?:
                | { itemAttribute?: {} | undefined; objectiveSensitivity?: {} | undefined }
                | undefined
            }
          | undefined
        autoMLResult?: { bestRecipeArn?: {} | undefined } | undefined
        status?: {} | undefined
        creationDateTime?: {} | undefined
        lastUpdatedDateTime?: {} | undefined
        latestSolutionVersion?:
          | {
              solutionVersionArn?: {} | undefined
              status?: {} | undefined
              creationDateTime?: {} | undefined
              lastUpdatedDateTime?: {} | undefined
              failureReason?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type DescribeSolutionVersionRequest = { solutionVersionArn: {} }
type DescribeSolutionVersionResponse = {
  solutionVersion?:
    | {
        name?: {} | undefined
        solutionVersionArn?: {} | undefined
        solutionArn?: {} | undefined
        performHPO?: {} | undefined
        performAutoML?: {} | undefined
        recipeArn?: {} | undefined
        eventType?: {} | undefined
        datasetGroupArn?: {} | undefined
        solutionConfig?:
          | {
              eventValueThreshold?: {} | undefined
              hpoConfig?:
                | {
                    hpoObjective?:
                      | {
                          type?: {} | undefined
                          metricName?: {} | undefined
                          metricRegex?: {} | undefined
                        }
                      | undefined
                    hpoResourceConfig?:
                      | {
                          maxNumberOfTrainingJobs?: {} | undefined
                          maxParallelTrainingJobs?: {} | undefined
                        }
                      | undefined
                    algorithmHyperParameterRanges?:
                      | {
                          integerHyperParameterRanges?: {} | undefined
                          continuousHyperParameterRanges?: {} | undefined
                          categoricalHyperParameterRanges?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
              algorithmHyperParameters?: {} | undefined
              featureTransformationParameters?: {} | undefined
              autoMLConfig?:
                | { metricName?: {} | undefined; recipeList?: {} | undefined }
                | undefined
              optimizationObjective?:
                | { itemAttribute?: {} | undefined; objectiveSensitivity?: {} | undefined }
                | undefined
            }
          | undefined
        trainingHours?: {} | undefined
        trainingMode?: {} | undefined
        tunedHPOParams?: { algorithmHyperParameters?: {} | undefined } | undefined
        status?: {} | undefined
        failureReason?: {} | undefined
        creationDateTime?: {} | undefined
        lastUpdatedDateTime?: {} | undefined
      }
    | undefined
}
type GetSolutionMetricsRequest = { solutionVersionArn: {} }
type GetSolutionMetricsResponse = { solutionVersionArn?: {} | undefined; metrics?: {} | undefined }
type ListBatchInferenceJobsRequest = {
  solutionVersionArn?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type ListBatchInferenceJobsResponse = {
  batchInferenceJobs?: {} | undefined
  nextToken?: {} | undefined
}
type ListBatchSegmentJobsRequest = {
  solutionVersionArn?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type ListBatchSegmentJobsResponse = {
  batchSegmentJobs?: {} | undefined
  nextToken?: {} | undefined
}
type ListCampaignsRequest = {
  solutionArn?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type ListCampaignsResponse = { campaigns?: {} | undefined; nextToken?: {} | undefined }
type ListDatasetExportJobsRequest = {
  datasetArn?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type ListDatasetExportJobsResponse = {
  datasetExportJobs?: {} | undefined
  nextToken?: {} | undefined
}
type ListDatasetGroupsRequest = { nextToken?: {} | undefined; maxResults?: {} | undefined }
type ListDatasetGroupsResponse = { datasetGroups?: {} | undefined; nextToken?: {} | undefined }
type ListDatasetImportJobsRequest = {
  datasetArn?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type ListDatasetImportJobsResponse = {
  datasetImportJobs?: {} | undefined
  nextToken?: {} | undefined
}
type ListDatasetsRequest = {
  datasetGroupArn?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type ListDatasetsResponse = { datasets?: {} | undefined; nextToken?: {} | undefined }
type ListEventTrackersRequest = {
  datasetGroupArn?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type ListEventTrackersResponse = { eventTrackers?: {} | undefined; nextToken?: {} | undefined }
type ListFiltersRequest = {
  datasetGroupArn?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type ListFiltersResponse = { Filters?: {} | undefined; nextToken?: {} | undefined }
type ListMetricAttributionMetricsRequest = {
  metricAttributionArn?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type ListMetricAttributionMetricsResponse = { metrics?: {} | undefined; nextToken?: {} | undefined }
type ListMetricAttributionsRequest = {
  datasetGroupArn?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type ListMetricAttributionsResponse = {
  metricAttributions?: {} | undefined
  nextToken?: {} | undefined
}
type ListRecipesRequest = {
  recipeProvider?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
  domain?: {} | undefined
}
type ListRecipesResponse = { recipes?: {} | undefined; nextToken?: {} | undefined }
type ListRecommendersRequest = {
  datasetGroupArn?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type ListRecommendersResponse = { recommenders?: {} | undefined; nextToken?: {} | undefined }
type ListSchemasRequest = { nextToken?: {} | undefined; maxResults?: {} | undefined }
type ListSchemasResponse = { schemas?: {} | undefined; nextToken?: {} | undefined }
type ListSolutionVersionsRequest = {
  solutionArn?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type ListSolutionVersionsResponse = {
  solutionVersions?: {} | undefined
  nextToken?: {} | undefined
}
type ListSolutionsRequest = {
  datasetGroupArn?: {} | undefined
  nextToken?: {} | undefined
  maxResults?: {} | undefined
}
type ListSolutionsResponse = { solutions?: {} | undefined; nextToken?: {} | undefined }
type ListTagsForResourceRequest = { resourceArn: {} }
type ListTagsForResourceResponse = { tags?: {} | undefined }
type StartRecommenderRequest = { recommenderArn: {} }
type StartRecommenderResponse = { recommenderArn?: {} | undefined }
type StopRecommenderRequest = { recommenderArn: {} }
type StopRecommenderResponse = { recommenderArn?: {} | undefined }
type StopSolutionVersionCreationRequest = { solutionVersionArn: {} }
type TagResourceRequest = { resourceArn: {}; tags: {} }
type TagResourceResponse = { [x: string]: unknown }
type UntagResourceRequest = { resourceArn: {}; tagKeys: {} }
type UntagResourceResponse = { [x: string]: unknown }
type UpdateCampaignRequest = {
  campaignArn: {}
  solutionVersionArn?: {} | undefined
  minProvisionedTPS?: {} | undefined
  campaignConfig?: { itemExplorationConfig?: {} | undefined } | undefined
}
type UpdateCampaignResponse = { campaignArn?: {} | undefined }
type UpdateMetricAttributionRequest = {
  addMetrics?: {} | undefined
  removeMetrics?: {} | undefined
  metricsOutputConfig?: { s3DataDestination?: S3DataConfig | undefined; roleArn: {} } | undefined
  metricAttributionArn?: {} | undefined
}
type UpdateMetricAttributionResponse = { metricAttributionArn?: {} | undefined }
type UpdateRecommenderRequest = {
  recommenderArn: {}
  recommenderConfig: {
    itemExplorationConfig?: {} | undefined
    minRecommendationRequestsPerSecond?: {} | undefined
  }
}
type UpdateRecommenderResponse = { recommenderArn?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AmazonPersonalize.CreateBatchInferenceJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.CreateBatchInferenceJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateBatchInferenceJobRequest }
        output: CreateBatchInferenceJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.CreateBatchSegmentJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.CreateBatchSegmentJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateBatchSegmentJobRequest }
        output: CreateBatchSegmentJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.CreateCampaign': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.CreateCampaign'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateCampaignRequest }
        output: CreateCampaignResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.CreateDataset': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.CreateDataset'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateDatasetRequest }
        output: CreateDatasetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.CreateDatasetExportJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.CreateDatasetExportJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateDatasetExportJobRequest }
        output: CreateDatasetExportJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.CreateDatasetGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.CreateDatasetGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateDatasetGroupRequest }
        output: CreateDatasetGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.CreateDatasetImportJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.CreateDatasetImportJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateDatasetImportJobRequest }
        output: CreateDatasetImportJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.CreateEventTracker': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.CreateEventTracker'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateEventTrackerRequest }
        output: CreateEventTrackerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.CreateFilter': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.CreateFilter'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateFilterRequest }
        output: CreateFilterResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.CreateMetricAttribution': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.CreateMetricAttribution'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateMetricAttributionRequest }
        output: CreateMetricAttributionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.CreateRecommender': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.CreateRecommender'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateRecommenderRequest }
        output: CreateRecommenderResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.CreateSchema': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.CreateSchema'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateSchemaRequest }
        output: CreateSchemaResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.CreateSolution': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.CreateSolution'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateSolutionRequest }
        output: CreateSolutionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.CreateSolutionVersion': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.CreateSolutionVersion'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateSolutionVersionRequest }
        output: CreateSolutionVersionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.DeleteCampaign': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.DeleteCampaign'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteCampaignRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.DeleteDataset': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.DeleteDataset'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteDatasetRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.DeleteDatasetGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.DeleteDatasetGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteDatasetGroupRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.DeleteEventTracker': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.DeleteEventTracker'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteEventTrackerRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.DeleteFilter': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.DeleteFilter'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteFilterRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.DeleteMetricAttribution': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.DeleteMetricAttribution'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteMetricAttributionRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.DeleteRecommender': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.DeleteRecommender'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteRecommenderRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.DeleteSchema': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.DeleteSchema'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteSchemaRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.DeleteSolution': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.DeleteSolution'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteSolutionRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.DescribeAlgorithm': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.DescribeAlgorithm'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeAlgorithmRequest }
        output: DescribeAlgorithmResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.DescribeBatchInferenceJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.DescribeBatchInferenceJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeBatchInferenceJobRequest }
        output: DescribeBatchInferenceJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.DescribeBatchSegmentJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.DescribeBatchSegmentJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeBatchSegmentJobRequest }
        output: DescribeBatchSegmentJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.DescribeCampaign': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.DescribeCampaign'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeCampaignRequest }
        output: DescribeCampaignResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.DescribeDataset': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.DescribeDataset'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeDatasetRequest }
        output: DescribeDatasetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.DescribeDatasetExportJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.DescribeDatasetExportJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeDatasetExportJobRequest }
        output: DescribeDatasetExportJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.DescribeDatasetGroup': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.DescribeDatasetGroup'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeDatasetGroupRequest }
        output: DescribeDatasetGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.DescribeDatasetImportJob': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.DescribeDatasetImportJob'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeDatasetImportJobRequest }
        output: DescribeDatasetImportJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.DescribeEventTracker': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.DescribeEventTracker'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeEventTrackerRequest }
        output: DescribeEventTrackerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.DescribeFeatureTransformation': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.DescribeFeatureTransformation'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeFeatureTransformationRequest }
        output: DescribeFeatureTransformationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.DescribeFilter': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.DescribeFilter'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeFilterRequest }
        output: DescribeFilterResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.DescribeMetricAttribution': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.DescribeMetricAttribution'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeMetricAttributionRequest }
        output: DescribeMetricAttributionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.DescribeRecipe': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.DescribeRecipe'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeRecipeRequest }
        output: DescribeRecipeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.DescribeRecommender': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.DescribeRecommender'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeRecommenderRequest }
        output: DescribeRecommenderResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.DescribeSchema': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.DescribeSchema'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeSchemaRequest }
        output: DescribeSchemaResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.DescribeSolution': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.DescribeSolution'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeSolutionRequest }
        output: DescribeSolutionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.DescribeSolutionVersion': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.DescribeSolutionVersion'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeSolutionVersionRequest }
        output: DescribeSolutionVersionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.GetSolutionMetrics': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.GetSolutionMetrics'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetSolutionMetricsRequest }
        output: GetSolutionMetricsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.ListBatchInferenceJobs': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.ListBatchInferenceJobs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListBatchInferenceJobsRequest }
        output: ListBatchInferenceJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.ListBatchSegmentJobs': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.ListBatchSegmentJobs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListBatchSegmentJobsRequest }
        output: ListBatchSegmentJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.ListCampaigns': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.ListCampaigns'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListCampaignsRequest }
        output: ListCampaignsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.ListDatasetExportJobs': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.ListDatasetExportJobs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListDatasetExportJobsRequest }
        output: ListDatasetExportJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.ListDatasetGroups': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.ListDatasetGroups'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListDatasetGroupsRequest }
        output: ListDatasetGroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.ListDatasetImportJobs': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.ListDatasetImportJobs'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListDatasetImportJobsRequest }
        output: ListDatasetImportJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.ListDatasets': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.ListDatasets'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListDatasetsRequest }
        output: ListDatasetsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.ListEventTrackers': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.ListEventTrackers'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListEventTrackersRequest }
        output: ListEventTrackersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.ListFilters': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.ListFilters'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListFiltersRequest }
        output: ListFiltersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.ListMetricAttributionMetrics': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.ListMetricAttributionMetrics'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListMetricAttributionMetricsRequest }
        output: ListMetricAttributionMetricsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.ListMetricAttributions': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.ListMetricAttributions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListMetricAttributionsRequest }
        output: ListMetricAttributionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.ListRecipes': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.ListRecipes'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListRecipesRequest }
        output: ListRecipesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.ListRecommenders': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.ListRecommenders'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListRecommendersRequest }
        output: ListRecommendersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.ListSchemas': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.ListSchemas'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListSchemasRequest }
        output: ListSchemasResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.ListSolutionVersions': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.ListSolutionVersions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListSolutionVersionsRequest }
        output: ListSolutionVersionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.ListSolutions': {
      $post: {
        input: { query: { maxResults?: string | undefined; nextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.ListSolutions'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListSolutionsRequest }
        output: ListSolutionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.ListTagsForResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.ListTagsForResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTagsForResourceRequest }
        output: ListTagsForResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.StartRecommender': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.StartRecommender'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartRecommenderRequest }
        output: StartRecommenderResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.StopRecommender': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.StopRecommender'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopRecommenderRequest }
        output: StopRecommenderResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.StopSolutionVersionCreation': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.StopSolutionVersionCreation'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopSolutionVersionCreationRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.TagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.TagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: TagResourceRequest }
        output: TagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.UntagResource': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.UntagResource'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UntagResourceRequest }
        output: UntagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.UpdateCampaign': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.UpdateCampaign'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateCampaignRequest }
        output: UpdateCampaignResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.UpdateMetricAttribution': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.UpdateMetricAttribution'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateMetricAttributionRequest }
        output: UpdateMetricAttributionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=AmazonPersonalize.UpdateRecommender': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'AmazonPersonalize.UpdateRecommender'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateRecommenderRequest }
        output: UpdateRecommenderResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
