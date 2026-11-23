type SqlParameter = {
  name?: {} | undefined
  value?:
    | {
        isNull?: {} | undefined
        booleanValue?: {} | undefined
        longValue?: {} | undefined
        doubleValue?: {} | undefined
        stringValue?: {} | undefined
        blobValue?: {} | undefined
        arrayValue?:
          | {
              booleanValues?: {} | undefined
              longValues?: {} | undefined
              doubleValues?: {} | undefined
              stringValues?: {} | undefined
              arrayValues?: {} | undefined
            }
          | undefined
      }
    | undefined
  typeHint?: {} | undefined
}
type SqlParametersList = SqlParameter[]
type BatchExecuteStatementResponse = { updateResults?: {} | undefined }
type BeginTransactionResponse = { transactionId?: {} | undefined }
type CommitTransactionResponse = { transactionStatus?: {} | undefined }
type ExecuteSqlResponse = { sqlStatementResults?: {} | undefined }
type ExecuteStatementResponse = {
  records?: {} | undefined
  columnMetadata?: {} | undefined
  numberOfRecordsUpdated?: {} | undefined
  generatedFields?: {} | undefined
  formattedRecords?: {} | undefined
}
type RollbackTransactionResponse = { transactionStatus?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/BatchExecute': {
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
            resourceArn: string
            secretArn: string
            sql: string
            database?: string | undefined
            schema?: string | undefined
            parameterSets?: SqlParametersList[] | undefined
            transactionId?: string | undefined
          }
        }
        output: BatchExecuteStatementResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/BeginTransaction': {
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
            resourceArn: string
            secretArn: string
            database?: string | undefined
            schema?: string | undefined
          }
        }
        output: BeginTransactionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/CommitTransaction': {
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
        } & { json: { resourceArn: string; secretArn: string; transactionId: string } }
        output: CommitTransactionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ExecuteSql': {
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
            dbClusterOrInstanceArn: string
            awsSecretStoreArn: string
            sqlStatements: string
            database?: string | undefined
            schema?: string | undefined
          }
        }
        output: ExecuteSqlResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Execute': {
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
            resourceArn: string
            secretArn: string
            sql: string
            database?: string | undefined
            schema?: string | undefined
            parameters?: SqlParameter[] | undefined
            transactionId?: string | undefined
            includeResultMetadata?: boolean | undefined
            continueAfterTimeout?: boolean | undefined
            resultSetOptions?:
              | { decimalReturnType?: {} | undefined; longReturnType?: {} | undefined }
              | undefined
            formatRecordsAs?: 'NONE' | 'JSON' | undefined
          }
        }
        output: ExecuteStatementResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/RollbackTransaction': {
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
        } & { json: { resourceArn: string; secretArn: string; transactionId: string } }
        output: RollbackTransactionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
