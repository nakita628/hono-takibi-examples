type CreateRowData = { batchItemId: {}; cellsToCreate: {} }
type BatchCreateTableRowsResult = {
  workbookCursor: {}
  createdRows: {}
  failedBatchItems?: {} | undefined
}
type RowId = string
type BatchDeleteTableRowsResult = { workbookCursor: {}; failedBatchItems?: {} | undefined }
type UpdateRowData = { rowId: {}; cellsToUpdate: {} }
type BatchUpdateTableRowsResult = { workbookCursor: {}; failedBatchItems?: {} | undefined }
type UpsertRowData = {
  batchItemId: {}
  filter: { formula: {}; contextRowId?: {} | undefined }
  cellsToUpdate: {}
}
type BatchUpsertTableRowsResult = {
  rows: {}
  workbookCursor: {}
  failedBatchItems?: {} | undefined
}
type DescribeTableDataImportJobResult = {
  jobStatus: {}
  message: {}
  jobMetadata: {
    submitter: { email?: {} | undefined; userArn?: {} | undefined }
    submitTime: {}
    importOptions: {
      destinationOptions?: { columnMap?: {} | undefined } | undefined
      delimitedTextOptions?:
        | {
            delimiter: {}
            hasHeaderRow?: {} | undefined
            ignoreEmptyRows?: {} | undefined
            dataCharacterEncoding?: {} | undefined
          }
        | undefined
    }
    dataSource: { dataSourceConfig: { dataSourceUrl?: {} | undefined } }
  }
  errorCode?: {} | undefined
}
type VariableValue = { rawValue: {} }
type GetScreenDataResult = { results: {}; workbookCursor: {}; nextToken?: {} | undefined }
type InvokeScreenAutomationResult = { workbookCursor: {} }
type ListTableColumnsResult = {
  tableColumns: {}
  nextToken?: {} | undefined
  workbookCursor?: {} | undefined
}
type ListTableRowsResult = {
  columnIds: {}
  rows: {}
  rowIdsNotFound?: {} | undefined
  nextToken?: {} | undefined
  workbookCursor: {}
}
type ListTablesResult = { tables: {}; nextToken?: {} | undefined; workbookCursor?: {} | undefined }
type ListTagsForResourceResult = { tags?: {} | undefined }
type TagValue = string
type TagResourceResult = { [x: string]: unknown }
type QueryTableRowsResult = {
  columnIds: {}
  rows: {}
  nextToken?: {} | undefined
  workbookCursor: {}
}
type StartTableDataImportJobResult = { jobId: {}; jobStatus: {} }
type TagKey = string
type UntagResourceResult = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/workbooks/:workbookId/tables/:tableId/rows/batchcreate': {
      $post: {
        input: { param: { workbookId: string; tableId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { rowsToCreate: CreateRowData[]; clientRequestToken?: string | undefined } }
        output: BatchCreateTableRowsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workbooks/:workbookId/tables/:tableId/rows/batchdelete': {
      $post: {
        input: { param: { workbookId: string; tableId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { rowIds: RowId[]; clientRequestToken?: string | undefined } }
        output: BatchDeleteTableRowsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workbooks/:workbookId/tables/:tableId/rows/batchupdate': {
      $post: {
        input: { param: { workbookId: string; tableId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { rowsToUpdate: UpdateRowData[]; clientRequestToken?: string | undefined } }
        output: BatchUpdateTableRowsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workbooks/:workbookId/tables/:tableId/rows/batchupsert': {
      $post: {
        input: { param: { workbookId: string; tableId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { rowsToUpsert: UpsertRowData[]; clientRequestToken?: string | undefined } }
        output: BatchUpsertTableRowsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workbooks/:workbookId/tables/:tableId/import/:jobId': {
      $get: {
        input: { param: { workbookId: string; tableId: string; jobId: string } } & {
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
        output: DescribeTableDataImportJobResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/screendata': {
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
            workbookId: string
            appId: string
            screenId: string
            variables?: { [x: string]: VariableValue } | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
          }
        }
        output: GetScreenDataResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workbooks/:workbookId/apps/:appId/screens/:screenId/automations/:automationId': {
      $post: {
        input: {
          param: { workbookId: string; appId: string; screenId: string; automationId: string }
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
        } & {
          json: {
            variables?: { [x: string]: VariableValue } | undefined
            rowId?: string | undefined
            clientRequestToken?: string | undefined
          }
        }
        output: InvokeScreenAutomationResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workbooks/:workbookId/tables/:tableId/columns': {
      $get: {
        input: { param: { workbookId: string; tableId: string } } & {
          query: { nextToken?: string | undefined }
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
        output: ListTableColumnsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workbooks/:workbookId/tables/:tableId/rows/list': {
      $post: {
        input: { param: { workbookId: string; tableId: string } } & {
          query: { maxResults?: string | undefined; nextToken?: string | undefined }
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
        } & {
          json: {
            rowIds?: RowId[] | undefined
            maxResults?: number | undefined
            nextToken?: string | undefined
          }
        }
        output: ListTableRowsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workbooks/:workbookId/tables': {
      $get: {
        input: { param: { workbookId: string } } & {
          query: { maxResults?: number | undefined; nextToken?: string | undefined }
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
        output: ListTablesResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:resourceArn': {
      $get: {
        input: { param: { resourceArn: string } } & {
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
        output: ListTagsForResourceResult
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { resourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { tags: { [x: string]: TagValue } } }
        output: TagResourceResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workbooks/:workbookId/tables/:tableId/rows/query': {
      $post: {
        input: { param: { workbookId: string; tableId: string } } & {
          query: { maxResults?: string | undefined; nextToken?: string | undefined }
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
        } & {
          json: {
            filterFormula: { formula?: {} | undefined; contextRowId?: {} | undefined }
            maxResults?: number | undefined
            nextToken?: string | undefined
          }
        }
        output: QueryTableRowsResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/workbooks/:workbookId/tables/:tableId/import': {
      $post: {
        input: { param: { workbookId: string; tableId: string } } & {
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
            dataSource: { dataSourceConfig?: { dataSourceUrl?: {} | undefined } | undefined }
            dataFormat: 'DELIMITED_TEXT'
            importOptions: {
              destinationOptions?: { columnMap?: {} | undefined } | undefined
              delimitedTextOptions?:
                | {
                    delimiter: {}
                    hasHeaderRow?: {} | undefined
                    ignoreEmptyRows?: {} | undefined
                    dataCharacterEncoding?: {} | undefined
                  }
                | undefined
            }
            clientRequestToken: string
          }
        }
        output: StartTableDataImportJobResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:resourceArn#tagKeys': {
      $delete: {
        input: { param: { resourceArn: string } } & { query: { tagKeys: TagKey[] } } & {
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
        output: UntagResourceResult
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
