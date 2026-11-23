type RpcRequest = { id: string; jsonrpc: string; method: string; params: string[] }
type RpcResponse = {
  error?: { [x: string]: unknown } | undefined
  id?: string | undefined
  result?: { [x: string]: unknown } | undefined
}
type GetAddressResponse = {
  addrStr?: string | undefined
  balance?: number | undefined
  balanceSat?: number | undefined
  totalReceived?: number | undefined
  totalReceivedSat?: number | undefined
  totalSent?: number | undefined
  totalSentSat?: number | undefined
  transactions?: string[] | undefined
  txAppearances?: number | undefined
  unconfirmedBalance?: number | undefined
  unconfirmedBalanceSat?: number | undefined
  unconfirmedTxAppearances?: number | undefined
}
type GetAddressBalanceResponse = number
type GetAddressTotalReceivedResponse = number
type GetAddressTotalSentResponse = number
type GetAddressUnconfirmedBalanceResponse = number
type GetAddressUtxosResponse = {
  address?: string | undefined
  amount?: number | undefined
  confirmations?: number | undefined
  scriptPubKey?: string | undefined
  ts?: number | undefined
  txid?: string | undefined
  vout?: number | undefined
}[]
type GetBlockIndexResponse = { blockHash?: string | undefined }
type GetBlockResponse = {
  bits?: string | undefined
  confirmations?: number | undefined
  difficulty?: number | undefined
  hash?: string | undefined
  height?: number | undefined
  merkleroot?: string | undefined
  nextblockhash?: string | undefined
  nonce?: number | undefined
  previousblockhash?: string | undefined
  reward?: number | undefined
  size?: number | undefined
  time?: number | undefined
  tx?: string[] | undefined
  version?: number | undefined
}
type GetRawTxResponse = { rawtx?: string | undefined }
type GetStatusResponse = { [x: string]: unknown }
type GetSyncResponse = {
  blockChainHeight?: number | undefined
  error?: string | undefined
  height?: number | undefined
  status?: string | undefined
  syncPercentage?: number | undefined
  type?: string | undefined
}
type SendTxRequest = { rawtx: string }
type BroadcastTxResponse = { txid?: string | undefined }
type Error = {
  code?: number | undefined
  fields?: string | undefined
  message?: string | undefined
}
type GetTxResponse = {
  blockhash?: string | undefined
  blockheight?: number | undefined
  blocktime?: number | undefined
  confirmations?: number | undefined
  fee?: number | undefined
  fees?: number | undefined
  locktime?: number | undefined
  size?: number | undefined
  time?: number | undefined
  totalsent?: number | undefined
  txid?: string | undefined
  valueIn?: number | undefined
  valueOut?: number | undefined
  version?: number | undefined
  vin?:
    | {
        n?: number | undefined
        scriptSig?: { asm?: string | undefined; hex?: string | undefined } | undefined
        sequence?: number | undefined
        txid?: string | undefined
        value?: number | undefined
        valueSat?: number | undefined
        vout?: number | undefined
      }[]
    | undefined
  vout?:
    | {
        blockheight?: number | undefined
        n?: number | undefined
        scriptPubKey?:
          | {
              addresses?: string[] | undefined
              asm?: string | undefined
              hex?: string | undefined
              reqSigs?: number | undefined
              type?: string | undefined
            }
          | undefined
        used?: boolean | undefined
        usedBlockheight?: number | undefined
        usedTxid?: string | undefined
        value?: number | undefined
      }[]
    | undefined
}
type GetTxsResponse = { pagesTotal?: number | undefined; txs?: GetTxResponse[] | undefined }
type GetAddressInfoResponse = {
  address?: string | undefined
  utxos?:
    | {
        blockheight?: number | undefined
        blocktime?: number | undefined
        index?: number | undefined
        scriptPubKey?: { [x: string]: unknown } | undefined
        tokens?:
          | {
              aggregationPolicy?: string | undefined
              amount?: number | undefined
              divisibility?: number | undefined
              issueTxid?: string | undefined
              lockStatus?: boolean | undefined
              tokenId?: string | undefined
            }[]
          | undefined
        txid?: string | undefined
        used?: boolean | undefined
        value?: number | undefined
      }[]
    | undefined
}
type BroadcastTxRequest = { txHex: string }
type BurnTokenRequest = {
  burn: { amount?: number | undefined; tokenId?: string | undefined }[]
  fee: number
  from?: string[] | undefined
  transfer?:
    | { address?: string | undefined; amount?: number | undefined; tokenId?: string | undefined }[]
    | undefined
}
type BurnTokenResponse = {
  multisigOutputs?: number[] | undefined
  ntp1OutputIndexes?: number[] | undefined
  txHex?: string | undefined
}
type IssueTokenRequest = {
  amount: number
  divisibility: number
  fee: number
  flags?: { splitChange?: boolean | undefined } | undefined
  issueAddress: string
  metadata?:
    | {
        description?: string | undefined
        encryptions?:
          | {
              format?: string | undefined
              key?: string | undefined
              pubkey?: string | undefined
              type?: string | undefined
            }[]
          | undefined
        issuer?: string | undefined
        rules?:
          | {
              expiration?:
                | { locked?: boolean | undefined; validUntil?: number | undefined }
                | undefined
              fees?:
                | {
                    items?:
                      | {
                          address?: string | undefined
                          tokenId?: string | undefined
                          value?: string | undefined
                        }[]
                      | undefined
                    locked?: boolean | undefined
                  }
                | undefined
              holders?: { address?: string | undefined; locked?: boolean | undefined }[] | undefined
            }
          | undefined
        tokenName?: string | undefined
        urls?:
          | {
              dataHash?: string | undefined
              mimeType?: string | undefined
              name?: string | undefined
              url?: string | undefined
            }[]
          | undefined
        userData?:
          | { meta?: { key?: string | undefined; value?: string | undefined }[] | undefined }
          | undefined
      }
    | undefined
  reissuable: boolean
  transfer: { address?: string | undefined; amount?: number | undefined }[]
}
type IssueTokenResponse = { tokenId?: string | undefined; txHex?: string | undefined }
type SendTokenRequest = {
  fee: number
  flags?: { splitChange?: boolean | undefined } | undefined
  from?: string[] | undefined
  metadata?:
    | {
        description?: string | undefined
        encryptions?:
          | {
              format?: string | undefined
              key?: string | undefined
              pubkey?: string | undefined
              type?: string | undefined
            }[]
          | undefined
        issuer?: string | undefined
        rules?:
          | {
              expiration?:
                | { locked?: boolean | undefined; validUntil?: number | undefined }
                | undefined
              fees?:
                | {
                    items?:
                      | {
                          address?: string | undefined
                          tokenId?: string | undefined
                          value?: string | undefined
                        }[]
                      | undefined
                    locked?: boolean | undefined
                  }
                | undefined
              holders?: { address?: string | undefined; locked?: boolean | undefined }[] | undefined
            }
          | undefined
        tokenName?: string | undefined
        urls?:
          | {
              dataHash?: string | undefined
              mimeType?: string | undefined
              name?: string | undefined
              url?: string | undefined
            }[]
          | undefined
        userData?:
          | { meta?: { key?: string | undefined; value?: string | undefined }[] | undefined }
          | undefined
      }
    | undefined
  sendutxo?: string[] | undefined
  to: { address?: string | undefined; amount?: number | undefined; tokenId?: string | undefined }[]
}
type SendTokenResponse = {
  multisigOutputs?: number[] | undefined
  ntp1OutputIndexes?: number[] | undefined
  txHex?: string | undefined
}
type GetTokenHoldersResponse = {
  aggregationPolicy?: string | undefined
  divibility?: number | undefined
  holders?: { address?: string | undefined; amount?: number | undefined }[] | undefined
  lockStatus?: boolean | undefined
  someUtxo?: string | undefined
  tokenId?: string | undefined
}
type GetTokenIdResponse = { tokenId?: string | undefined; tokenName?: string | undefined }
type GetTokenMetadataResponse = {
  aggregationPolicy?: string | undefined
  divisibility?: number | undefined
  firstBlock?: number | undefined
  initialIssuanceAmount?: number | undefined
  issuanceTxid?: string | undefined
  issueAddress?: string | undefined
  lockStatus?: boolean | undefined
  metadataOfIssuance?:
    | {
        data?:
          | {
              description?: string | undefined
              issuer?: string | undefined
              tokenName?: string | undefined
              userData?:
                | { meta?: { key?: string | undefined; value?: string | undefined }[] | undefined }
                | undefined
            }
          | undefined
      }
    | undefined
  metadataOfUtxo?:
    | { userData?: { meta?: { [x: string]: unknown }[] | undefined } | undefined }
    | undefined
  numOfBurns?: number | undefined
  numOfHolders?: number | undefined
  numOfIssuance?: number | undefined
  numOfTransfers?: number | undefined
  someUtxo?: string | undefined
  tokenId?: string | undefined
  totalSupply?: number | undefined
}
type GetTransactionInfoResponse = {
  blockhash?: string | undefined
  blockheight?: number | undefined
  blocktime?: number | undefined
  confirmations?: number | undefined
  fee?: number | undefined
  hex?: string | undefined
  locktime?: number | undefined
  time?: number | undefined
  totalsent?: number | undefined
  txid?: string | undefined
  version?: number | undefined
  vin?:
    | {
        previousOutput?:
          | {
              addresses?: string[] | undefined
              asm?: string | undefined
              hex?: string | undefined
              reqSigs?: number | undefined
              type?: string | undefined
            }
          | undefined
        scriptSig?: { asm?: string | undefined; hex?: string | undefined } | undefined
        sequence?: number | undefined
        tokens?:
          | {
              aggregationPolicy?: string | undefined
              amount?: number | undefined
              divisibility?: number | undefined
              issueTxid?: string | undefined
              lockStatus?: boolean | undefined
              tokenId?: string | undefined
            }[]
          | undefined
        txid?: string | undefined
        value?: number | undefined
        vout?: number | undefined
      }[]
    | undefined
  vout?:
    | {
        blockheight?: number | undefined
        n?: number | undefined
        scriptPubKey?:
          | {
              addresses?: string[] | undefined
              asm?: string | undefined
              hex?: string | undefined
              reqSigs?: number | undefined
              type?: string | undefined
            }
          | undefined
        tokens?:
          | {
              aggregationPolicy?: string | undefined
              amount?: number | undefined
              divisibility?: number | undefined
              issueTxid?: string | undefined
              lockStatus?: boolean | undefined
              tokenId?: string | undefined
            }[]
          | undefined
        used?: boolean | undefined
        usedBlockheight?: number | undefined
        usedTxid?: string | undefined
        value?: number | undefined
      }[]
    | undefined
}
type GetFaucetResponse = {
  data?: { txId?: string | undefined } | undefined
  status?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/': {
      $post:
        | { input: { json: RpcRequest }; output: RpcResponse; outputFormat: 'json'; status: 200 }
        | { input: { json: RpcRequest }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/ins/addr/:address': {
      $get: {
        input: { param: { address: string } }
        output: GetAddressResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ins/addr/:address/balance': {
      $get: {
        input: { param: { address: string } }
        output: GetAddressBalanceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ins/addr/:address/totalReceived': {
      $get: {
        input: { param: { address: string } }
        output: GetAddressTotalReceivedResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ins/addr/:address/totalSent': {
      $get: {
        input: { param: { address: string } }
        output: GetAddressTotalSentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ins/addr/:address/unconfirmedBalance': {
      $get: {
        input: { param: { address: string } }
        output: GetAddressUnconfirmedBalanceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ins/addr/:address/utxo': {
      $get: {
        input: { param: { address: string } }
        output: GetAddressUtxosResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ins/block-index/:blockindex': {
      $get: {
        input: { param: { blockindex: number } }
        output: GetBlockIndexResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ins/block/:blockhash': {
      $get: {
        input: { param: { blockhash: string } }
        output: GetBlockResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ins/rawtx/:txid': {
      $get: {
        input: { param: { txid: string } }
        output: GetRawTxResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ins/status': {
      $get: {
        input: { query: { q?: string | undefined } }
        output: GetStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ins/sync': { $get: { input: {}; output: GetSyncResponse; outputFormat: 'json'; status: 200 } }
  } & {
    '/ins/tx/send': {
      $post:
        | {
            input: { json: SendTxRequest }
            output: BroadcastTxResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: SendTxRequest }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/ins/tx/:txid': {
      $get: {
        input: { param: { txid: string } }
        output: GetTxResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ins/txs': {
      $get: {
        input: {
          query: {
            address?: string | undefined
            block?: string | undefined
            pageNum?: number | undefined
          }
        }
        output: GetTxsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ntp1/addressinfo/:address': {
      $get:
        | {
            input: { param: { address: string } }
            output: GetAddressInfoResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/ntp1/broadcast': {
      $post:
        | {
            input: { json: BroadcastTxRequest }
            output: BroadcastTxResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: BroadcastTxRequest }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/ntp1/burntoken': {
      $post:
        | {
            input: { json: BurnTokenRequest }
            output: BurnTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: BurnTokenRequest }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/ntp1/issue': {
      $post:
        | {
            input: { json: IssueTokenRequest }
            output: IssueTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: IssueTokenRequest }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/ntp1/sendtoken': {
      $post:
        | {
            input: { json: SendTokenRequest }
            output: SendTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: SendTokenRequest }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/ntp1/stakeholders/:tokenid': {
      $get:
        | {
            input: { param: { tokenid: string } }
            output: GetTokenHoldersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tokenid: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/ntp1/tokenid/:tokensymbol': {
      $get: {
        input: { param: { tokensymbol: string } }
        output: GetTokenIdResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ntp1/tokenmetadata/:tokenid': {
      $get:
        | {
            input: { param: { tokenid: string } } & { query: { verbosity?: number | undefined } }
            output: GetTokenMetadataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tokenid: string } } & { query: { verbosity?: number | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/ntp1/tokenmetadata/:tokenid/:utxo': {
      $get:
        | {
            input: { param: { tokenid: string; utxo: string } } & {
              query: { verbosity?: number | undefined }
            }
            output: GetTokenMetadataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tokenid: string; utxo: string } } & {
              query: { verbosity?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/ntp1/transactioninfo/:txid': {
      $get:
        | {
            input: { param: { txid: string } }
            output: GetTransactionInfoResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { txid: string } }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/testnet/faucet': {
      $get: {
        input: { query: { address: string; amount?: number | undefined } }
        output: GetFaucetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/testnet/ins/addr/:address': {
      $get: {
        input: { param: { address: string } }
        output: GetAddressResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/testnet/ins/addr/:address/balance': {
      $get: {
        input: { param: { address: string } }
        output: GetAddressBalanceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/testnet/ins/addr/:address/totalReceived': {
      $get: {
        input: { param: { address: string } }
        output: GetAddressTotalReceivedResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/testnet/ins/addr/:address/totalSent': {
      $get: {
        input: { param: { address: string } }
        output: GetAddressTotalSentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/testnet/ins/addr/:address/unconfirmedBalance': {
      $get: {
        input: { param: { address: string } }
        output: GetAddressUnconfirmedBalanceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/testnet/ins/addr/:address/utxo': {
      $get: {
        input: { param: { address: string } }
        output: GetAddressUtxosResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/testnet/ins/block-index/:blockindex': {
      $get: {
        input: { param: { blockindex: number } }
        output: GetBlockIndexResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/testnet/ins/block/:blockhash': {
      $get: {
        input: { param: { blockhash: string } }
        output: GetBlockResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/testnet/ins/rawtx/:txid': {
      $get: {
        input: { param: { txid: string } }
        output: GetRawTxResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/testnet/ins/status': {
      $get: {
        input: { query: { q?: string | undefined } }
        output: GetStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/testnet/ins/sync': {
      $get: { input: {}; output: GetSyncResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/testnet/ins/tx/send': {
      $post:
        | {
            input: { json: SendTxRequest }
            output: BroadcastTxResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: SendTxRequest }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/testnet/ins/tx/:txid': {
      $get: {
        input: { param: { txid: string } }
        output: GetTxResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/testnet/ins/txs': {
      $get: {
        input: {
          query: {
            address?: string | undefined
            block?: string | undefined
            pageNum?: number | undefined
          }
        }
        output: GetTxsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/testnet/ntp1/addressinfo/:address': {
      $get:
        | {
            input: { param: { address: string } }
            output: GetAddressInfoResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/testnet/ntp1/broadcast': {
      $post:
        | {
            input: { json: BroadcastTxRequest }
            output: BroadcastTxResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: BroadcastTxRequest }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/testnet/ntp1/burntoken': {
      $post:
        | {
            input: { json: BurnTokenRequest }
            output: BurnTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: BurnTokenRequest }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/testnet/ntp1/issue': {
      $post:
        | {
            input: { json: IssueTokenRequest }
            output: IssueTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: IssueTokenRequest }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/testnet/ntp1/sendtoken': {
      $post:
        | {
            input: { json: SendTokenRequest }
            output: SendTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: SendTokenRequest }; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/testnet/ntp1/stakeholders/:tokenid': {
      $get:
        | {
            input: { param: { tokenid: string } }
            output: GetTokenHoldersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tokenid: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/testnet/ntp1/tokenid/:tokensymbol': {
      $get: {
        input: { param: { tokensymbol: string } }
        output: GetTokenIdResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/testnet/ntp1/tokenmetadata/:tokenid': {
      $get:
        | {
            input: { param: { tokenid: string } } & { query: { verbosity?: number | undefined } }
            output: GetTokenMetadataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tokenid: string } } & { query: { verbosity?: number | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/testnet/ntp1/tokenmetadata/:tokenid/:utxo': {
      $get:
        | {
            input: { param: { tokenid: string; utxo: string } } & {
              query: { verbosity?: number | undefined }
            }
            output: GetTokenMetadataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tokenid: string; utxo: string } } & {
              query: { verbosity?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/testnet/ntp1/transactioninfo/:txid': {
      $get:
        | {
            input: { param: { txid: string } }
            output: GetTransactionInfoResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { txid: string } }; output: Error; outputFormat: 'json'; status: 200 }
    }
  },
  '/'
>
export default routes
