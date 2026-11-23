type BatchExecuteStatementInput = {
  ClientToken?: {} | undefined
  ClusterIdentifier?: {} | undefined
  Database: {}
  DbUser?: {} | undefined
  SecretArn?: {} | undefined
  Sqls: {}
  StatementName?: {} | undefined
  WithEvent?: {} | undefined
  WorkgroupName?: {} | undefined
}
type BatchExecuteStatementOutput = {
  ClusterIdentifier?: {} | undefined
  CreatedAt?: {} | undefined
  Database?: {} | undefined
  DbUser?: {} | undefined
  Id?: {} | undefined
  SecretArn?: {} | undefined
  WorkgroupName?: {} | undefined
}
type CancelStatementRequest = { Id: {} }
type CancelStatementResponse = { Status?: {} | undefined }
type DescribeStatementRequest = { Id: {} }
type DescribeStatementResponse = {
  ClusterIdentifier?: {} | undefined
  CreatedAt?: {} | undefined
  Database?: {} | undefined
  DbUser?: {} | undefined
  Duration?: {} | undefined
  Error?: {} | undefined
  HasResultSet?: {} | undefined
  Id: {}
  QueryParameters?: {} | undefined
  QueryString?: {} | undefined
  RedshiftPid?: {} | undefined
  RedshiftQueryId?: {} | undefined
  ResultRows?: {} | undefined
  ResultSize?: {} | undefined
  SecretArn?: {} | undefined
  Status?: {} | undefined
  SubStatements?: {} | undefined
  UpdatedAt?: {} | undefined
  WorkgroupName?: {} | undefined
}
type DescribeTableRequest = {
  ClusterIdentifier?: {} | undefined
  ConnectedDatabase?: {} | undefined
  Database: {}
  DbUser?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  Schema?: {} | undefined
  SecretArn?: {} | undefined
  Table?: {} | undefined
  WorkgroupName?: {} | undefined
}
type DescribeTableResponse = {
  ColumnList?: {} | undefined
  NextToken?: {} | undefined
  TableName?: {} | undefined
}
type ExecuteStatementInput = {
  ClientToken?: {} | undefined
  ClusterIdentifier?: {} | undefined
  Database: {}
  DbUser?: {} | undefined
  Parameters?: {} | undefined
  SecretArn?: {} | undefined
  Sql: {}
  StatementName?: {} | undefined
  WithEvent?: {} | undefined
  WorkgroupName?: {} | undefined
}
type ExecuteStatementOutput = {
  ClusterIdentifier?: {} | undefined
  CreatedAt?: {} | undefined
  Database?: {} | undefined
  DbUser?: {} | undefined
  Id?: {} | undefined
  SecretArn?: {} | undefined
  WorkgroupName?: {} | undefined
}
type GetStatementResultRequest = { Id: {}; NextToken?: {} | undefined }
type GetStatementResultResponse = {
  ColumnMetadata?: {} | undefined
  NextToken?: {} | undefined
  Records: {}
  TotalNumRows?: {} | undefined
}
type ListDatabasesRequest = {
  ClusterIdentifier?: {} | undefined
  Database: {}
  DbUser?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  SecretArn?: {} | undefined
  WorkgroupName?: {} | undefined
}
type ListDatabasesResponse = { Databases?: {} | undefined; NextToken?: {} | undefined }
type ListSchemasRequest = {
  ClusterIdentifier?: {} | undefined
  ConnectedDatabase?: {} | undefined
  Database: {}
  DbUser?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  SchemaPattern?: {} | undefined
  SecretArn?: {} | undefined
  WorkgroupName?: {} | undefined
}
type ListSchemasResponse = { NextToken?: {} | undefined; Schemas?: {} | undefined }
type ListStatementsRequest = {
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  RoleLevel?: {} | undefined
  StatementName?: {} | undefined
  Status?: {} | undefined
}
type ListStatementsResponse = { NextToken?: {} | undefined; Statements: {} }
type ListTablesRequest = {
  ClusterIdentifier?: {} | undefined
  ConnectedDatabase?: {} | undefined
  Database: {}
  DbUser?: {} | undefined
  MaxResults?: {} | undefined
  NextToken?: {} | undefined
  SchemaPattern?: {} | undefined
  SecretArn?: {} | undefined
  TablePattern?: {} | undefined
  WorkgroupName?: {} | undefined
}
type ListTablesResponse = { NextToken?: {} | undefined; Tables?: {} | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=RedshiftData.BatchExecuteStatement': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'RedshiftData.BatchExecuteStatement'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: BatchExecuteStatementInput }
        output: BatchExecuteStatementOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=RedshiftData.CancelStatement': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'RedshiftData.CancelStatement'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CancelStatementRequest }
        output: CancelStatementResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=RedshiftData.DescribeStatement': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'RedshiftData.DescribeStatement'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeStatementRequest }
        output: DescribeStatementResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=RedshiftData.DescribeTable': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'RedshiftData.DescribeTable'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeTableRequest }
        output: DescribeTableResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=RedshiftData.ExecuteStatement': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'RedshiftData.ExecuteStatement'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ExecuteStatementInput }
        output: ExecuteStatementOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=RedshiftData.GetStatementResult': {
      $post: {
        input: { query: { NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'RedshiftData.GetStatementResult'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetStatementResultRequest }
        output: GetStatementResultResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=RedshiftData.ListDatabases': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'RedshiftData.ListDatabases'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListDatabasesRequest }
        output: ListDatabasesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=RedshiftData.ListSchemas': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'RedshiftData.ListSchemas'
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
    '/#X-Amz-Target=RedshiftData.ListStatements': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'RedshiftData.ListStatements'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListStatementsRequest }
        output: ListStatementsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=RedshiftData.ListTables': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'RedshiftData.ListTables'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTablesRequest }
        output: ListTablesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
