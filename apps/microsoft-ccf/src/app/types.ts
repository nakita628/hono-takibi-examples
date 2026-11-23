type Json = { [x: string]: unknown }
type CCFError = { error?: { code?: string | undefined; message?: string | undefined } | undefined }
type Boolean = boolean
type Uint64 = number
type TransactionId = string
type TransactionIdArray = TransactionId[]
type GetCommitOut = { transaction_id: TransactionId; view_history?: TransactionIdArray | undefined }
type String = string
type LoggingGetOut = { msg: String }
type LoggingRecordIn = { id: Uint64; msg: String; record_claim?: Boolean | undefined }
type LoggingPutOut = { success: Boolean; tx_id: String }
type LoggingGetHistoricalRangeEntry = { id: Uint64; msg: String; seqno: Uint64 }
type LoggingGetHistoricalRangeEntryArray = LoggingGetHistoricalRangeEntry[]
type LoggingGetHistoricalRangeOut = {
  '@nextLink'?: String | undefined
  entries: LoggingGetHistoricalRangeEntryArray
}
type LoggingGetReceiptOut = { msg: String; receipt: Json }
type Base64string = string
type Base64stringArray = Base64string[]
type LoggingGetCoseEndorsementsOut = { endorsements: Base64stringArray | null }
type LoggingGetCoseSignatureOut = { cose_signature: Base64string }
type Cose = File
type TxStatus = 'Unknown' | 'Pending' | 'Committed' | 'Invalid'
type GetTxStatusOut = { status: TxStatus; transaction_id: TransactionId }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/app/api': {
      $get:
        | { input: {}; output: Json; outputFormat: 'json'; status: 200 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/app/commit': {
      $get:
        | {
            input: {
              query: { view_history?: Boolean | undefined; view_history_since?: Uint64 | undefined }
            }
            output: GetCommitOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { view_history?: Boolean | undefined; view_history_since?: Uint64 | undefined }
            }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/app/cose_signatures_config': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/app/custom_auth': {
      $get:
        | { input: {}; output: Json; outputFormat: 'json'; status: 200 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/app/log/blocking/private': {
      $get:
        | {
            input: { query: { id: Uint64 } }
            output: LoggingGetOut
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { id: Uint64 } }; output: CCFError; outputFormat: 'json'; status: 200 }
      $post:
        | { input: { json: LoggingRecordIn }; output: Boolean; outputFormat: 'json'; status: 200 }
        | { input: { json: LoggingRecordIn }; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/app/log/blocking/private/receipt': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/app/log/cose_signed_content': {
      $post:
        | { input: {}; output: String; outputFormat: 'text'; status: 200 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/app/log/private': {
      $delete:
        | { input: { query: { id: Uint64 } }; output: Boolean; outputFormat: 'json'; status: 200 }
        | { input: { query: { id: Uint64 } }; output: CCFError; outputFormat: 'json'; status: 200 }
      $get:
        | {
            input: { query: { id: Uint64 } }
            output: LoggingGetOut
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { id: Uint64 } }; output: CCFError; outputFormat: 'json'; status: 200 }
      $post:
        | { input: { json: LoggingRecordIn }; output: Boolean; outputFormat: 'json'; status: 200 }
        | { input: { json: LoggingRecordIn }; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/app/log/private/admin_only': {
      $post:
        | { input: { json: LoggingRecordIn }; output: Boolean; outputFormat: 'json'; status: 200 }
        | { input: { json: LoggingRecordIn }; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/app/log/private/all': {
      $delete:
        | { input: {}; output: Boolean; outputFormat: 'json'; status: 200 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/app/log/private/anonymous': {
      $post:
        | { input: { json: LoggingRecordIn }; output: Boolean; outputFormat: 'json'; status: 200 }
        | { input: { json: LoggingRecordIn }; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/app/log/private/anonymous/v2': {
      $post:
        | {
            input: { json: LoggingRecordIn }
            output: LoggingPutOut
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: LoggingRecordIn }; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/app/log/private/backup': {
      $get:
        | {
            input: { query: { id: Uint64 } }
            output: LoggingGetOut
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { id: Uint64 } }; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/app/log/private/committed': {
      $get:
        | {
            input: { query: { id: Uint64 } }
            output: LoggingGetOut
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { id: Uint64 } }; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/app/log/private/count': {
      $get:
        | { input: {}; output: Uint64; outputFormat: 'json'; status: 200 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/app/log/private/historical': {
      $get:
        | {
            input: { query: { id: Uint64 } }
            output: LoggingGetOut
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { id: Uint64 } }; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/app/log/private/historical/handle': {
      $get:
        | {
            input: { query: { handle: Uint64; seqno: Uint64 } }
            output: Json
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { handle: Uint64; seqno: Uint64 } }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/app/log/private/historical/sparse': {
      $get:
        | {
            input: { query: { seqnos: String; id: Uint64 } }
            output: LoggingGetHistoricalRangeOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { seqnos: String; id: Uint64 } }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/app/log/private/historical_receipt': {
      $get:
        | {
            input: { query: { id: Uint64 } }
            output: LoggingGetReceiptOut
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { id: Uint64 } }; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/app/log/private/install_committed_index': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/app/log/private/optional_commit': {
      $post:
        | {
            input: { query: { wait_for_commit?: Boolean | undefined } } & { json: LoggingRecordIn }
            output: Boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { wait_for_commit?: Boolean | undefined } } & { json: LoggingRecordIn }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/app/log/private/prefix_cert': {
      $post:
        | { input: { json: LoggingRecordIn }; output: Boolean; outputFormat: 'json'; status: 200 }
        | { input: { json: LoggingRecordIn }; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/app/log/private/raw_text/:id': {
      $post:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/app/log/private/uninstall_committed_index': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/app/log/public': {
      $delete:
        | { input: { query: { id: Uint64 } }; output: Boolean; outputFormat: 'json'; status: 200 }
        | { input: { query: { id: Uint64 } }; output: CCFError; outputFormat: 'json'; status: 200 }
      $get:
        | {
            input: { query: { id: Uint64 } }
            output: LoggingGetOut
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { id: Uint64 } }; output: CCFError; outputFormat: 'json'; status: 200 }
      $post:
        | { input: { json: LoggingRecordIn }; output: Boolean; outputFormat: 'json'; status: 200 }
        | { input: { json: LoggingRecordIn }; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/app/log/public/all': {
      $delete:
        | { input: {}; output: Boolean; outputFormat: 'json'; status: 200 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/app/log/public/backup': {
      $get:
        | {
            input: { query: { id: Uint64 } }
            output: LoggingGetOut
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { id: Uint64 } }; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/app/log/public/cose_endorsements': {
      $get:
        | { input: {}; output: LoggingGetCoseEndorsementsOut; outputFormat: 'json'; status: 200 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/app/log/public/cose_receipt': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/app/log/public/cose_signature': {
      $get:
        | { input: {}; output: LoggingGetCoseSignatureOut; outputFormat: 'json'; status: 200 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/app/log/public/count': {
      $get:
        | { input: {}; output: Uint64; outputFormat: 'json'; status: 200 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/app/log/public/historical/range': {
      $get:
        | {
            input: {
              query: { from_seqno?: Uint64 | undefined; to_seqno?: Uint64 | undefined; id: Uint64 }
            }
            output: LoggingGetHistoricalRangeOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { from_seqno?: Uint64 | undefined; to_seqno?: Uint64 | undefined; id: Uint64 }
            }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/app/log/public/historical_receipt': {
      $get:
        | {
            input: { query: { id: Uint64 } }
            output: LoggingGetReceiptOut
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { id: Uint64 } }; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/app/log/public/trusted_keys': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/app/log/public/verify_cose_receipt': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/app/log/request_query': {
      $get:
        | { input: {}; output: String; outputFormat: 'text'; status: 200 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/app/log/signed_statement': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/app/log/transparent_statement': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/app/multi_auth': {
      $post:
        | { input: {}; output: String; outputFormat: 'text'; status: 200 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/app/receipt': {
      $get:
        | {
            input: { query: { transaction_id: TransactionId } }
            output: Json
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { transaction_id: TransactionId } }
            output: String
            outputFormat: 'text'
            status: 202
          }
        | {
            input: { query: { transaction_id: TransactionId } }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/app/receipt/cose': {
      $get:
        | {
            input: { query: { transaction_id: TransactionId } }
            output: Cose
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { transaction_id: TransactionId } }
            output: String
            outputFormat: 'text'
            status: 202
          }
        | {
            input: { query: { transaction_id: TransactionId } }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/app/tx': {
      $get:
        | {
            input: { query: { transaction_id: TransactionId } }
            output: GetTxStatusOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { transaction_id: TransactionId } }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
