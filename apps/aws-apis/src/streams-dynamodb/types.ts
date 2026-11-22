type DescribeStreamInput = {
  StreamArn: {}
  Limit?: {} | undefined
  ExclusiveStartShardId?: {} | undefined
}
type DescribeStreamOutput = {
  StreamDescription?:
    | {
        StreamArn?: {} | undefined
        StreamLabel?: {} | undefined
        StreamStatus?: {} | undefined
        StreamViewType?: {} | undefined
        CreationRequestDateTime?: {} | undefined
        TableName?: {} | undefined
        KeySchema?: {} | undefined
        Shards?: {} | undefined
        LastEvaluatedShardId?: {} | undefined
      }
    | undefined
}
type ResourceNotFoundException = { [x: string]: unknown }
type InternalServerError = { [x: string]: unknown }
type GetRecordsInput = { ShardIterator: {}; Limit?: {} | undefined }
type GetRecordsOutput = { Records?: {} | undefined; NextShardIterator?: {} | undefined }
type LimitExceededException = { [x: string]: unknown }
type ExpiredIteratorException = { [x: string]: unknown }
type TrimmedDataAccessException = { [x: string]: unknown }
type GetShardIteratorInput = {
  StreamArn: {}
  ShardId: {}
  ShardIteratorType: {}
  SequenceNumber?: {} | undefined
}
type GetShardIteratorOutput = { ShardIterator?: {} | undefined }
type ListStreamsInput = {
  TableName?: {} | undefined
  Limit?: {} | undefined
  ExclusiveStartStreamArn?: {} | undefined
}
type ListStreamsOutput = { Streams?: {} | undefined; LastEvaluatedStreamArn?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=DynamoDBStreams_20120810.DescribeStream': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDBStreams_20120810.DescribeStream'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeStreamInput }
            output: DescribeStreamOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDBStreams_20120810.DescribeStream'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeStreamInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDBStreams_20120810.DescribeStream'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: DescribeStreamInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDBStreams_20120810.GetRecords': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDBStreams_20120810.GetRecords'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetRecordsInput }
            output: GetRecordsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDBStreams_20120810.GetRecords'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetRecordsInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDBStreams_20120810.GetRecords'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetRecordsInput }
            output: LimitExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDBStreams_20120810.GetRecords'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetRecordsInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDBStreams_20120810.GetRecords'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetRecordsInput }
            output: ExpiredIteratorException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDBStreams_20120810.GetRecords'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetRecordsInput }
            output: TrimmedDataAccessException
            outputFormat: 'json'
            status: 484
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDBStreams_20120810.GetShardIterator': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDBStreams_20120810.GetShardIterator'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetShardIteratorInput }
            output: GetShardIteratorOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDBStreams_20120810.GetShardIterator'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetShardIteratorInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDBStreams_20120810.GetShardIterator'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetShardIteratorInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDBStreams_20120810.GetShardIterator'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: GetShardIteratorInput }
            output: TrimmedDataAccessException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/#X-Amz-Target=DynamoDBStreams_20120810.ListStreams': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDBStreams_20120810.ListStreams'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListStreamsInput }
            output: ListStreamsOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDBStreams_20120810.ListStreams'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListStreamsInput }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Target': 'DynamoDBStreams_20120810.ListStreams'
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: ListStreamsInput }
            output: InternalServerError
            outputFormat: 'json'
            status: 481
          }
    }
  },
  '/'
>
export default routes
