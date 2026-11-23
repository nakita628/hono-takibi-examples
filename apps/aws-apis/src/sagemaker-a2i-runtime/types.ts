type DeleteHumanLoopResponse = { [x: string]: unknown }
type DescribeHumanLoopResponse = {
  CreationTime: {}
  FailureReason?: {} | undefined
  FailureCode?: {} | undefined
  HumanLoopStatus: {}
  HumanLoopName: {}
  HumanLoopArn: {}
  FlowDefinitionArn: {}
  HumanLoopOutput?: { OutputS3Uri: {} } | undefined
}
type ListHumanLoopsResponse = { HumanLoopSummaries: {}; NextToken?: {} | undefined }
type StartHumanLoopResponse = { HumanLoopArn?: {} | undefined }
type StopHumanLoopResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/human-loops/:HumanLoopName': {
      $delete: {
        input: { param: { HumanLoopName: string } } & {
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
        output: DeleteHumanLoopResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { HumanLoopName: string } } & {
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
        output: DescribeHumanLoopResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/human-loops#FlowDefinitionArn': {
      $get: {
        input: {
          query: {
            CreationTimeAfter?: string | undefined
            CreationTimeBefore?: string | undefined
            FlowDefinitionArn: string
            SortOrder?: 'Ascending' | 'Descending' | undefined
            NextToken?: string | undefined
            MaxResults?: number | undefined
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
        output: ListHumanLoopsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/human-loops': {
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
            HumanLoopName: string
            FlowDefinitionArn: string
            HumanLoopInput: { InputContent?: {} | undefined }
            DataAttributes?: { ContentClassifiers?: {} | undefined } | undefined
          }
        }
        output: StartHumanLoopResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/human-loops/stop': {
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
        } & { json: { HumanLoopName: string } }
        output: StopHumanLoopResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
