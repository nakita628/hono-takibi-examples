type CreateScalingPlanRequest = {
  ScalingPlanName: {}
  ApplicationSource: { CloudFormationStackARN?: {} | undefined; TagFilters?: {} | undefined }
  ScalingInstructions: {}
}
type CreateScalingPlanResponse = { ScalingPlanVersion: {} }
type ValidationException = { [x: string]: unknown }
type LimitExceededException = { [x: string]: unknown }
type ConcurrentUpdateException = { [x: string]: unknown }
type InternalServiceException = { [x: string]: unknown }
type DeleteScalingPlanRequest = { ScalingPlanName: {}; ScalingPlanVersion: {} }
type DeleteScalingPlanResponse = { [x: string]: unknown }
type ObjectNotFoundException = { [x: string]: unknown }
type DescribeScalingPlanResourcesRequest = {
  ScalingPlanName: {}
  ScalingPlanVersion: {}
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeScalingPlanResourcesResponse = {
  ScalingPlanResources?: {} | undefined
  NextToken?: {} | undefined
}
type InvalidNextTokenException = { [x: string]: unknown }
type DescribeScalingPlansRequest = {
  ScalingPlanNames?: {} | undefined
  ScalingPlanVersion?: {} | undefined
  ApplicationSources?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
}
type DescribeScalingPlansResponse = { ScalingPlans?: {} | undefined; NextToken?: {} | undefined }
type GetScalingPlanResourceForecastDataRequest = {
  ScalingPlanName: {}
  ScalingPlanVersion: {}
  ServiceNamespace: {}
  ResourceId: {}
  ScalableDimension: {}
  ForecastDataType: {}
  StartTime: {}
  EndTime: {}
}
type GetScalingPlanResourceForecastDataResponse = { Datapoints: {} }
type UpdateScalingPlanRequest = {
  ScalingPlanName: {}
  ScalingPlanVersion: {}
  ApplicationSource?:
    | { CloudFormationStackARN?: {} | undefined; TagFilters?: {} | undefined }
    | undefined
  ScalingInstructions?: {} | undefined
}
type UpdateScalingPlanResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=AnyScaleScalingPlannerFrontendService.CreateScalingPlan': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AnyScaleScalingPlannerFrontendService.CreateScalingPlan'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateScalingPlanRequest }
            output: CreateScalingPlanResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AnyScaleScalingPlannerFrontendService.CreateScalingPlan'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateScalingPlanRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AnyScaleScalingPlannerFrontendService.CreateScalingPlan'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateScalingPlanRequest }
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AnyScaleScalingPlannerFrontendService.CreateScalingPlan'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateScalingPlanRequest }
            output: ConcurrentUpdateException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AnyScaleScalingPlannerFrontendService.CreateScalingPlan'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: CreateScalingPlanRequest }
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DeleteScalingPlan': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AnyScaleScalingPlannerFrontendService.DeleteScalingPlan'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteScalingPlanRequest }
            output: DeleteScalingPlanResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AnyScaleScalingPlannerFrontendService.DeleteScalingPlan'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteScalingPlanRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AnyScaleScalingPlannerFrontendService.DeleteScalingPlan'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteScalingPlanRequest }
            output: ObjectNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AnyScaleScalingPlannerFrontendService.DeleteScalingPlan'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteScalingPlanRequest }
            output: ConcurrentUpdateException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AnyScaleScalingPlannerFrontendService.DeleteScalingPlan'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DeleteScalingPlanRequest }
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeScalingPlanResourcesRequest }
            output: DescribeScalingPlanResourcesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeScalingPlanResourcesRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeScalingPlanResourcesRequest }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeScalingPlanResourcesRequest }
            output: ConcurrentUpdateException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeScalingPlanResourcesRequest }
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DescribeScalingPlans': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AnyScaleScalingPlannerFrontendService.DescribeScalingPlans'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeScalingPlansRequest }
            output: DescribeScalingPlansResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AnyScaleScalingPlannerFrontendService.DescribeScalingPlans'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeScalingPlansRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AnyScaleScalingPlannerFrontendService.DescribeScalingPlans'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeScalingPlansRequest }
            output: InvalidNextTokenException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AnyScaleScalingPlannerFrontendService.DescribeScalingPlans'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeScalingPlansRequest }
            output: ConcurrentUpdateException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AnyScaleScalingPlannerFrontendService.DescribeScalingPlans'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeScalingPlansRequest }
            output: InternalServiceException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/#X-Amz-Target=AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetScalingPlanResourceForecastDataRequest }
            output: GetScalingPlanResourceForecastDataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetScalingPlanResourceForecastDataRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetScalingPlanResourceForecastDataRequest }
            output: InternalServiceException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=AnyScaleScalingPlannerFrontendService.UpdateScalingPlan': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'AnyScaleScalingPlannerFrontendService.UpdateScalingPlan'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateScalingPlanRequest }
            output: UpdateScalingPlanResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AnyScaleScalingPlannerFrontendService.UpdateScalingPlan'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateScalingPlanRequest }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AnyScaleScalingPlannerFrontendService.UpdateScalingPlan'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateScalingPlanRequest }
            output: ConcurrentUpdateException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AnyScaleScalingPlannerFrontendService.UpdateScalingPlan'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateScalingPlanRequest }
            output: InternalServiceException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'AnyScaleScalingPlannerFrontendService.UpdateScalingPlan'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: UpdateScalingPlanRequest }
            output: ObjectNotFoundException
            outputFormat: 'json'
            status: 483
          }
    }
  },
  '/'
>
export default routes
