import { createRoute, z } from '@hono/zod-openapi'

const ErrorSchema = z
  .object({
    code: z.int32().exactOptional(),
    fields: z.string().exactOptional(),
    message: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Error')

const BroadcastTxRequestSchema = z
  .object({ txHex: z.string().openapi({ description: 'Signed raw tx hex to broadcast' }) })
  .openapi({ required: ['txHex'] })
  .openapi('BroadcastTxRequest')

const BroadcastTxResponseSchema = z
  .object({
    txid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Txid of successfully broadcasted transaction' }),
  })
  .openapi({ required: [] })
  .openapi('BroadcastTxResponse')

const BurnTokenRequestSchema = z
  .object({
    burn: z
      .array(
        z
          .object({
            amount: z.number().exactOptional().openapi({ description: 'Amount of tokens to burn' }),
            tokenId: z
              .string()
              .exactOptional()
              .openapi({ description: 'Unique token id we are burning' }),
          })
          .openapi({ required: [] }),
      )
      .openapi({ description: 'Array of objects representing tokens to be burned' }),
    fee: z
      .number()
      .openapi({
        description:
          'Fee in satoshi to include in the issuance transaction min 10000 (0.0001 NEBL)',
      }),
    from: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Array of addresses to send the token from' }),
    transfer: z
      .array(
        z
          .object({
            address: z
              .string()
              .exactOptional()
              .openapi({ description: 'Address to transfer tokens to' }),
            amount: z.number().exactOptional().openapi({ description: 'Number of tokens to send' }),
            tokenId: z
              .string()
              .exactOptional()
              .openapi({ description: 'ID of token we are sending' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: ['fee', 'burn'] })
  .openapi('BurnTokenRequest')

const BurnTokenResponseSchema = z
  .object({
    multisigOutputs: z
      .array(z.number())
      .exactOptional()
      .openapi({ description: 'Array of indexes of multisig outputs' }),
    ntp1OutputIndexes: z
      .array(z.number())
      .exactOptional()
      .openapi({ description: 'Array of indexes transfering NTP1 tokens' }),
    txHex: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unsigned, raw transaction hex of the transaction to burn the token',
      }),
  })
  .openapi({ required: [] })
  .openapi('BurnTokenResponse')

const GetAddressBalanceResponseSchema = z
  .number()
  .openapi({ description: 'Address balance in satoshis' })
  .openapi('GetAddressBalanceResponse')

const GetAddressInfoResponseSchema = z
  .object({
    address: z.string().exactOptional().openapi({ description: 'The Neblio Address' }),
    utxos: z
      .array(
        z
          .object({
            blockheight: z
              .number()
              .exactOptional()
              .openapi({ description: 'Blockheight of the UTXO' }),
            blocktime: z.number().exactOptional().openapi({ description: 'Blocktime of the UTXO' }),
            index: z
              .number()
              .exactOptional()
              .openapi({ description: 'Index of the UTXO at this address' }),
            scriptPubKey: z
              .object({})
              .exactOptional()
              .openapi({ description: 'Object representing the scruptPubKey of the UTXO' }),
            tokens: z
              .array(
                z
                  .object({
                    aggregationPolicy: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Whether the tokens can be aggregated together' }),
                    amount: z.number().exactOptional().openapi({ description: 'Number of Tokens' }),
                    divisibility: z
                      .number()
                      .exactOptional()
                      .openapi({ description: 'Decimal places the token is divisible to' }),
                    issueTxid: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'TXID the token originally was issued in' }),
                    lockStatus: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description:
                          'Whether the token is locked, preventing more from being issued',
                      }),
                    tokenId: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Unique NTP1 identifier for this token' }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional()
              .openapi({ description: 'Array of NTP1 tokens in this UTXO.' }),
            txid: z.string().exactOptional().openapi({ description: 'Txid of this UTXO' }),
            used: z
              .boolean()
              .exactOptional()
              .openapi({ description: 'Whether the UTXO has been used' }),
            value: z
              .number()
              .exactOptional()
              .openapi({ description: 'Value of the UTXO in NEBL satoshi' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Array of UTXOs held at this address.' }),
  })
  .openapi({ required: [] })
  .openapi('GetAddressInfoResponse')

const GetAddressResponseSchema = z
  .object({
    addrStr: z.string().exactOptional().openapi({ description: 'Address in string form' }),
    balance: z.number().exactOptional().openapi({ description: 'NEBL balance' }),
    balanceSat: z.number().exactOptional().openapi({ description: 'NEBL balance in satoshis' }),
    totalReceived: z.number().exactOptional().openapi({ description: 'Total NEBL received' }),
    totalReceivedSat: z
      .number()
      .exactOptional()
      .openapi({ description: 'Total NEBL received in satoshis' }),
    totalSent: z.number().exactOptional().openapi({ description: 'Total NEBL sent' }),
    totalSentSat: z.number().exactOptional().openapi({ description: 'Total NEBL sent satoshis' }),
    transactions: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Array of transaction ids for this address' }),
    txAppearances: z
      .number()
      .exactOptional()
      .openapi({ description: 'Number of transactions for this address' }),
    unconfirmedBalance: z
      .number()
      .exactOptional()
      .openapi({ description: 'Unconfirmed NEBL balance' }),
    unconfirmedBalanceSat: z
      .number()
      .exactOptional()
      .openapi({ description: 'Unconfirmed NEBL balance in satoshis' }),
    unconfirmedTxAppearances: z
      .number()
      .exactOptional()
      .openapi({ description: 'Number of unconfirmed transactions for this address' }),
  })
  .openapi({ required: [] })
  .openapi('GetAddressResponse')

const GetAddressTotalReceivedResponseSchema = z
  .number()
  .openapi({ description: 'Address total received in satoshis' })
  .openapi('GetAddressTotalReceivedResponse')

const GetAddressTotalSentResponseSchema = z
  .number()
  .openapi({ description: 'Address total sent in satoshis' })
  .openapi('GetAddressTotalSentResponse')

const GetAddressUnconfirmedBalanceResponseSchema = z
  .number()
  .openapi({ description: 'Address unconfirmed balance in satoshis' })
  .openapi('GetAddressUnconfirmedBalanceResponse')

const GetAddressUtxosResponseSchema = z
  .array(
    z
      .object({
        address: z.string().exactOptional().openapi({ description: 'Address' }),
        amount: z.number().exactOptional().openapi({ description: 'NEBL amount' }),
        confirmations: z
          .number()
          .exactOptional()
          .openapi({ description: 'Number of confirmations' }),
        scriptPubKey: z.string().exactOptional().openapi({ description: 'scriptPubKey' }),
        ts: z.number().exactOptional().openapi({ description: 'Timestamp' }),
        txid: z.string().exactOptional().openapi({ description: 'Transaction ID' }),
        vout: z.number().exactOptional().openapi({ description: 'vout' }),
      })
      .openapi({ required: [] }),
  )
  .openapi({ description: "Array of objects representing this address' UTXOs" })
  .openapi('GetAddressUtxosResponse')

const GetBlockIndexResponseSchema = z
  .object({
    blockHash: z.string().exactOptional().openapi({ description: 'Hash of the requested block' }),
  })
  .openapi({ required: [] })
  .openapi('GetBlockIndexResponse')

const GetBlockResponseSchema = z
  .object({
    bits: z.string().exactOptional().openapi({ description: 'Block bits' }),
    confirmations: z
      .number()
      .exactOptional()
      .openapi({ description: 'Number of confirmations block has' }),
    difficulty: z.number().exactOptional().openapi({ description: 'Block difficulty' }),
    hash: z.string().exactOptional().openapi({ description: 'Block hash' }),
    height: z.number().exactOptional().openapi({ description: 'Block height' }),
    merkleroot: z.string().exactOptional().openapi({ description: 'Merkleroot of block' }),
    nextblockhash: z
      .string()
      .exactOptional()
      .openapi({ description: 'Hash of the next block on the chain' }),
    nonce: z.number().exactOptional().openapi({ description: 'Block nonce' }),
    previousblockhash: z
      .string()
      .exactOptional()
      .openapi({ description: 'Hash of the previous block on the chain' }),
    reward: z
      .number()
      .exactOptional()
      .openapi({ description: 'Number of NEBL awarded in this block' }),
    size: z.number().exactOptional().openapi({ description: 'Block size in bytes' }),
    time: z.number().exactOptional().openapi({ description: 'Block time relative to epoch' }),
    tx: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Array of tx ids in the block' }),
    version: z.number().exactOptional().openapi({ description: 'Block version' }),
  })
  .openapi({ required: [] })
  .openapi('GetBlockResponse')

const GetFaucetResponseSchema = z
  .object({
    data: z
      .object({
        txId: z
          .string()
          .exactOptional()
          .openapi({ description: 'TXID of a successful withdrawal' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    status: z
      .string()
      .exactOptional()
      .openapi({ description: 'Whether the withdrawal was successful' }),
  })
  .openapi({ required: [] })
  .openapi('GetFaucetResponse')

const GetRawTxResponseSchema = z
  .object({
    rawtx: z
      .string()
      .exactOptional()
      .openapi({ description: 'Raw hex representing the transaction' }),
  })
  .openapi({ required: [] })
  .openapi('GetRawTxResponse')

const GetStatusResponseSchema = z
  .object({})
  .openapi({
    description:
      'Depending on the function called, the structure and information contained in this object will vary',
  })
  .openapi('GetStatusResponse')

const GetSyncResponseSchema = z
  .object({
    blockChainHeight: z
      .number()
      .exactOptional()
      .openapi({ description: 'Current blockchain height' }),
    error: z.string().exactOptional().openapi({ description: 'Recent sync error messages' }),
    height: z.number().exactOptional().openapi({ description: 'Height node is synced to' }),
    status: z.string().exactOptional().openapi({ description: 'Current sync status' }),
    syncPercentage: z.number().exactOptional().openapi({ description: 'Current sync percentage' }),
    type: z.string().exactOptional().openapi({ description: 'Node type' }),
  })
  .openapi({ description: 'Object containing node sync status', required: [] })
  .openapi('GetSyncResponse')

const GetTokenHoldersResponseSchema = z
  .object({
    aggregationPolicy: z
      .string()
      .exactOptional()
      .openapi({ description: 'Whether the tokesn are aggregatable' }),
    divibility: z
      .number()
      .exactOptional()
      .openapi({ description: 'How many decimal points the token is divisble to' }),
    holders: z
      .array(
        z
          .object({ address: z.string().exactOptional(), amount: z.number().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    lockStatus: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether new issuances of this token are locked' }),
    someUtxo: z.string().exactOptional().openapi({ description: 'A UTXO of this token' }),
    tokenId: z.string().exactOptional().openapi({ description: 'TokenId of the token' }),
  })
  .openapi({ required: [] })
  .openapi('GetTokenHoldersResponse')

const GetTokenIdResponseSchema = z
  .object({
    tokenId: z.string().exactOptional().openapi({ description: 'Unique ID of the token' }),
    tokenName: z
      .string()
      .exactOptional()
      .openapi({ description: 'String representing the token Symbol' }),
  })
  .openapi({ required: [] })
  .openapi('GetTokenIdResponse')

const GetTokenMetadataResponseSchema = z
  .object({
    aggregationPolicy: z
      .string()
      .exactOptional()
      .openapi({ description: 'Whether the tokens are aggregatable' }),
    divisibility: z
      .number()
      .exactOptional()
      .openapi({ description: 'Decimal places the token is divisible to' }),
    firstBlock: z
      .number()
      .exactOptional()
      .openapi({ description: 'Block number token was issued in' }),
    initialIssuanceAmount: z
      .number()
      .exactOptional()
      .openapi({ description: 'Total tokens issued in initial issuance' }),
    issuanceTxid: z
      .string()
      .exactOptional()
      .openapi({ description: 'TXID the token was issued with' }),
    issueAddress: z
      .string()
      .exactOptional()
      .openapi({ description: 'Address that issued the tokens' }),
    lockStatus: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether issuance of more tokens is locked' }),
    metadataOfIssuance: z
      .object({
        data: z
          .object({
            description: z.string().exactOptional().openapi({ description: 'Token description' }),
            issuer: z.string().exactOptional().openapi({ description: 'Name of token issuer' }),
            tokenName: z.string().exactOptional().openapi({ description: 'Token symbol' }),
            userData: z
              .object({
                meta: z
                  .array(
                    z
                      .object({
                        key: z.string().exactOptional(),
                        value: z.string().exactOptional(),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional(),
              })
              .exactOptional()
              .openapi({ description: 'Metadata set by user on token', required: [] }),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ description: 'Metadata set at issuance', required: [] }),
    metadataOfUtxo: z
      .object({
        userData: z
          .object({ meta: z.array(z.object({})).exactOptional() })
          .exactOptional()
          .openapi({ description: 'Metadata set by user on token for UTXO', required: [] }),
      })
      .exactOptional()
      .openapi({ description: 'Metadata set for UTXO', required: [] }),
    numOfBurns: z
      .number()
      .exactOptional()
      .openapi({ description: 'Number of times tokens have been burned' }),
    numOfHolders: z
      .number()
      .exactOptional()
      .openapi({ description: 'Total number of addresses this token is held at' }),
    numOfIssuance: z
      .number()
      .exactOptional()
      .openapi({ description: 'Total number of times this token has been issued' }),
    numOfTransfers: z
      .number()
      .exactOptional()
      .openapi({ description: 'Total number of transactions of this token' }),
    someUtxo: z
      .string()
      .exactOptional()
      .openapi({ description: 'Example UTXO containing this token.' }),
    tokenId: z.string().exactOptional().openapi({ description: 'ID of the token' }),
    totalSupply: z
      .number()
      .exactOptional()
      .openapi({ description: 'Total number of tokens in supply' }),
  })
  .openapi({ required: [] })
  .openapi('GetTokenMetadataResponse')

const GetTransactionInfoResponseSchema = z
  .object({
    blockhash: z
      .string()
      .exactOptional()
      .openapi({ description: 'Hash of the block this transaction is in' }),
    blockheight: z
      .number()
      .exactOptional()
      .openapi({ description: 'Block height of this transaction' }),
    blocktime: z
      .number()
      .exactOptional()
      .openapi({ description: 'Block time of this transaction' }),
    confirmations: z
      .number()
      .exactOptional()
      .openapi({ description: 'Number of transaction confirmations' }),
    fee: z
      .number()
      .exactOptional()
      .openapi({ description: 'Total NEBL used as fee for this transcation in satoshis' }),
    hex: z.string().exactOptional().openapi({ description: 'Transaction in raw hex' }),
    locktime: z.number().exactOptional().openapi({ description: 'Transaction locktime' }),
    time: z.number().exactOptional().openapi({ description: 'Transaction time' }),
    totalsent: z
      .number()
      .exactOptional()
      .openapi({ description: 'Total NEBL sent in this transaction in satoshis' }),
    txid: z.string().exactOptional().openapi({ description: 'TXID of transaction' }),
    version: z.number().exactOptional().openapi({ description: 'Transaction version' }),
    vin: z
      .array(
        z
          .object({
            previousOutput: z
              .object({
                addresses: z.array(z.string()).exactOptional(),
                asm: z.string().exactOptional(),
                hex: z.string().exactOptional(),
                reqSigs: z.number().exactOptional(),
                type: z.string().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
            scriptSig: z
              .object({ asm: z.string().exactOptional(), hex: z.string().exactOptional() })
              .exactOptional()
              .openapi({ required: [] }),
            sequence: z.number().exactOptional(),
            tokens: z
              .array(
                z
                  .object({
                    aggregationPolicy: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Whether the tokens are aggregatable' }),
                    amount: z.number().exactOptional().openapi({ description: 'Number of tokens' }),
                    divisibility: z
                      .number()
                      .exactOptional()
                      .openapi({ description: 'Decimal places the token is divisible to' }),
                    issueTxid: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'TXID the token was issued in' }),
                    lockStatus: z
                      .boolean()
                      .exactOptional()
                      .openapi({ description: 'Whether issuance of more tokens is locked' }),
                    tokenId: z.string().exactOptional().openapi({ description: 'ID of the token' }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional(),
            txid: z.string().exactOptional().openapi({ description: 'TXID of the input' }),
            value: z
              .number()
              .exactOptional()
              .openapi({ description: 'Value of input in NEBL satoshi' }),
            vout: z.number().exactOptional().openapi({ description: 'output index' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Array of transaction inputs' }),
    vout: z
      .array(
        z
          .object({
            blockheight: z
              .number()
              .exactOptional()
              .openapi({ description: 'Blockheight of this transaction' }),
            n: z.number().exactOptional().openapi({ description: 'Output index' }),
            scriptPubKey: z
              .object({
                addresses: z.array(z.string()).exactOptional(),
                asm: z.string().exactOptional(),
                hex: z.string().exactOptional(),
                reqSigs: z.number().exactOptional(),
                type: z.string().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
            tokens: z
              .array(
                z
                  .object({
                    aggregationPolicy: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Whether the tokens are aggregatable' }),
                    amount: z.number().exactOptional().openapi({ description: 'Number of tokens' }),
                    divisibility: z
                      .number()
                      .exactOptional()
                      .openapi({ description: 'Decimal places the token is divisible to' }),
                    issueTxid: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'TXID the token was issued in' }),
                    lockStatus: z
                      .boolean()
                      .exactOptional()
                      .openapi({ description: 'Whether issuance of more tokens is locked' }),
                    tokenId: z.string().exactOptional().openapi({ description: 'ID of the token' }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional(),
            used: z
              .boolean()
              .exactOptional()
              .openapi({ description: 'Whether this output has now been used' }),
            usedBlockheight: z
              .number()
              .exactOptional()
              .openapi({ description: 'Blockheight this output was used in' }),
            usedTxid: z
              .string()
              .exactOptional()
              .openapi({ description: 'TXID this output was used in' }),
            value: z
              .number()
              .exactOptional()
              .openapi({ description: 'Value of the output in NEBL satoshi' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Array of transaction outputs' }),
  })
  .openapi({ required: [] })
  .openapi('GetTransactionInfoResponse')

const GetTxResponseSchema = z
  .object({
    blockhash: z
      .string()
      .exactOptional()
      .openapi({ description: 'Hash of the block this transaction is in' }),
    blockheight: z
      .number()
      .exactOptional()
      .openapi({ description: 'Block height of this transaction' }),
    blocktime: z
      .number()
      .exactOptional()
      .openapi({ description: 'Block time of this transaction' }),
    confirmations: z
      .number()
      .exactOptional()
      .openapi({ description: 'Number of transaction confirmations' }),
    fee: z
      .number()
      .exactOptional()
      .openapi({ description: 'Total NEBL used as fee for this transcation in satoshis' }),
    fees: z
      .number()
      .exactOptional()
      .openapi({ description: 'Total NEBL used in fees for this transaction' }),
    locktime: z.number().exactOptional().openapi({ description: 'Transaction locktime' }),
    size: z.number().exactOptional().openapi({ description: 'Transcation size in bytes' }),
    time: z.number().exactOptional().openapi({ description: 'Transaction time' }),
    totalsent: z
      .number()
      .exactOptional()
      .openapi({ description: 'Total NEBL sent in this transaction in satoshis' }),
    txid: z.string().exactOptional().openapi({ description: 'TXID of transaction' }),
    valueIn: z
      .number()
      .exactOptional()
      .openapi({ description: 'Total NEBL input in this transaction' }),
    valueOut: z
      .number()
      .exactOptional()
      .openapi({ description: 'Total NEBL output in this transaction' }),
    version: z.number().exactOptional().openapi({ description: 'Transaction version' }),
    vin: z
      .array(
        z
          .object({
            n: z.number().exactOptional().openapi({ description: 'input index' }),
            scriptSig: z
              .object({ asm: z.string().exactOptional(), hex: z.string().exactOptional() })
              .exactOptional()
              .openapi({ required: [] }),
            sequence: z.number().exactOptional(),
            txid: z.string().exactOptional().openapi({ description: 'TXID of the input' }),
            value: z.number().exactOptional().openapi({ description: 'Value of input in NEBL' }),
            valueSat: z
              .number()
              .exactOptional()
              .openapi({ description: 'Value of input in NEBL satoshi' }),
            vout: z.number().exactOptional().openapi({ description: 'output index' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Array of transaction inputs' }),
    vout: z
      .array(
        z
          .object({
            blockheight: z
              .number()
              .exactOptional()
              .openapi({ description: 'Blockheight of this transaction' }),
            n: z.number().exactOptional().openapi({ description: 'Output index' }),
            scriptPubKey: z
              .object({
                addresses: z.array(z.string()).exactOptional(),
                asm: z.string().exactOptional(),
                hex: z.string().exactOptional(),
                reqSigs: z.number().exactOptional(),
                type: z.string().exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
            used: z
              .boolean()
              .exactOptional()
              .openapi({ description: 'Whether this output has now been used' }),
            usedBlockheight: z
              .number()
              .exactOptional()
              .openapi({ description: 'Blockheight this output was used in' }),
            usedTxid: z
              .string()
              .exactOptional()
              .openapi({ description: 'TXID this output was used in' }),
            value: z
              .number()
              .exactOptional()
              .openapi({ description: 'Value of the output in NEBL' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Array of transaction outputs' }),
  })
  .openapi({ required: [] })
  .openapi('GetTxResponse')

const GetTxsResponseSchema = z
  .object({
    pagesTotal: z
      .number()
      .exactOptional()
      .openapi({ description: 'Number of pages of transactions' }),
    txs: z
      .array(GetTxResponseSchema)
      .exactOptional()
      .openapi({ description: 'Array of transaction objects' }),
  })
  .openapi({ description: 'Object containing an array of transaction objects', required: [] })
  .openapi('GetTxsResponse')

const IssueTokenRequestSchema = z
  .object({
    amount: z.number().openapi({ description: 'Number of tokens to issue' }),
    divisibility: z
      .number()
      .openapi({ description: 'Number of decimal places the token should be divisble by (0-7)' }),
    fee: z
      .number()
      .openapi({
        description:
          'Fee in satoshi to include in the issuance transaction min 1000000000 (10 NEBL)',
      }),
    flags: z
      .object({
        splitChange: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If true change will be split into 2 outputs, one for NEBL change and one for NTP1 change (recommended)',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Object representing flags that potentialy modify this transaction',
        required: [],
      }),
    issueAddress: z.string().openapi({ description: 'Address issuing the token' }),
    metadata: z
      .object({
        description: z
          .string()
          .exactOptional()
          .openapi({ description: 'Long name or description of token (ex. Nibble)' }),
        encryptions: z
          .array(
            z
              .object({
                format: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'key format (pem or der)' }),
                key: z.string().exactOptional().openapi({ description: 'userData key to encrypt' }),
                pubkey: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'RSA public key used for encryption' }),
                type: z.string().exactOptional().openapi({ description: 'pkcs1 or pkcs8' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({
            description: 'Array of encryption instruction objects for encrypting userData',
          }),
        issuer: z.string().exactOptional().openapi({ description: 'Name of token issuer' }),
        rules: z
          .object({
            expiration: z
              .object({
                locked: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description: 'Whether this rule can be modified in future transactions',
                  }),
                validUntil: z
                  .number()
                  .exactOptional()
                  .openapi({ description: 'Blockheight at wh' }),
              })
              .exactOptional()
              .openapi({
                description: 'Object describing expiration rules of the token',
                required: [],
              }),
            fees: z
              .object({
                items: z
                  .array(
                    z
                      .object({
                        address: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'Address fee is auto sent to' }),
                        tokenId: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'How fee should be paid, either with a tokenId, or with NEBL if null',
                          }),
                        value: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: 'Amount of NTP1 token, or NEBL (in satoshi) to pay as fee',
                          }),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional()
                  .openapi({ description: 'Array of objects describing fee rules' }),
                locked: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description: 'Whether this rule can be modified in future transactions',
                  }),
              })
              .exactOptional()
              .openapi({ required: [] }),
            holders: z
              .array(
                z
                  .object({
                    address: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Address that can hold the token' }),
                    locked: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description: 'Whether this rule can be modified in future transactions',
                      }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional()
              .openapi({
                description: 'Array of objects describing what addresses can hold the token',
              }),
          })
          .exactOptional()
          .openapi({ description: 'Object describing token rules', required: [] }),
        tokenName: z
          .string()
          .exactOptional()
          .openapi({ description: 'Token Symbol it will be identified by (ex. NIBBL)' }),
        urls: z
          .array(
            z
              .object({
                dataHash: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Hash of data at the URL, used for verification' }),
                mimeType: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'mimeType of URL content' }),
                name: z.string().exactOptional().openapi({ description: 'Name of the URL' }),
                url: z.string().exactOptional().openapi({ description: 'Actual URL' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        userData: z
          .object({
            meta: z
              .array(
                z
                  .object({ key: z.string().exactOptional(), value: z.string().exactOptional() })
                  .openapi({ required: [] }),
              )
              .exactOptional(),
          })
          .exactOptional()
          .openapi({ description: 'Metadata set by user on token', required: [] }),
      })
      .exactOptional()
      .openapi({ description: 'Object representing all metadata at token issuance', required: [] }),
    reissuable: z.boolean().openapi({ description: 'whether the token should be reissuable' }),
    transfer: z.array(
      z
        .object({
          address: z
            .string()
            .exactOptional()
            .openapi({ description: 'Address to send the amount of issued tokens to' }),
          amount: z.number().exactOptional(),
        })
        .openapi({ required: [] }),
    ),
  })
  .openapi({
    required: ['issueAddress', 'amount', 'divisibility', 'fee', 'reissuable', 'transfer'],
  })
  .openapi('IssueTokenRequest')

const IssueTokenResponseSchema = z
  .object({
    tokenId: z
      .string()
      .exactOptional()
      .openapi({ description: 'TokenId of the to be issued token' }),
    txHex: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unsigned, raw transaction hex of the transaction to issue the token',
      }),
  })
  .openapi({ required: [] })
  .openapi('IssueTokenResponse')

const RpcRequestSchema = z
  .object({
    id: z
      .string()
      .default('neblio-apis')
      .openapi({ description: 'Identifier of RCP caller', example: 'neblio-apis' }),
    jsonrpc: z.string().default('1.0').openapi({ description: 'JSON-RPC version', example: '1.0' }),
    method: z
      .string()
      .openapi({ description: 'Name of the Neblio RPC method to call', example: 'getstakinginfo' }),
    params: z
      .array(z.string())
      .openapi({
        description: 'Array of string params that should be passed to the RPC method.',
        example: [],
      }),
  })
  .openapi({ required: ['jsonrpc', 'id', 'method', 'params'] })
  .openapi('RpcRequest')

const RpcResponseSchema = z
  .object({
    error: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Object containing any error information.' }),
    id: z.string().exactOptional().openapi({ description: 'Identifier of RCP caller' }),
    result: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Object containing the response output.' }),
  })
  .openapi({
    description: 'Object containing the JSON response from the Neblio node.',
    required: [],
  })
  .openapi('RpcResponse')

const SendTokenRequestSchema = z
  .object({
    fee: z
      .number()
      .openapi({
        description:
          'Fee in satoshi to include in the issuance transaction min 10000 (0.0001 NEBL)',
      }),
    flags: z
      .object({
        splitChange: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If true change will be split into 2 outputs, one for NEBL change and one for NTP1 change (recommended)',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Object representing flags that potentialy modify this transaction',
        required: [],
      }),
    from: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Array of addresses to send the token from' }),
    metadata: z
      .object({
        description: z
          .string()
          .exactOptional()
          .openapi({ description: 'Long name or description of token (ex. Nibble)' }),
        encryptions: z
          .array(
            z
              .object({
                format: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'key format (pem or der)' }),
                key: z.string().exactOptional().openapi({ description: 'userData key to encrypt' }),
                pubkey: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'RSA public key used for encryption' }),
                type: z.string().exactOptional().openapi({ description: 'pkcs1 or pkcs8' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({
            description: 'Array of encryption instruction objects for encrypting userData',
          }),
        issuer: z.string().exactOptional().openapi({ description: 'Name of token issuer' }),
        rules: z
          .object({
            expiration: z
              .object({
                locked: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description: 'Whether this rule can be modified in future transactions',
                  }),
                validUntil: z
                  .number()
                  .exactOptional()
                  .openapi({ description: 'Blockheight at wh' }),
              })
              .exactOptional()
              .openapi({
                description: 'Object describing expiration rules of the token',
                required: [],
              }),
            fees: z
              .object({
                items: z
                  .array(
                    z
                      .object({
                        address: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'Address fee is auto sent to' }),
                        tokenId: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'How fee should be paid, either with a tokenId, or with NEBL if null',
                          }),
                        value: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: 'Amount of NTP1 token, or NEBL (in satoshi) to pay as fee',
                          }),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional()
                  .openapi({ description: 'Array of objects describing fee rules' }),
                locked: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description: 'Whether this rule can be modified in future transactions',
                  }),
              })
              .exactOptional()
              .openapi({ required: [] }),
            holders: z
              .array(
                z
                  .object({
                    address: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Address that can hold the token' }),
                    locked: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description: 'Whether this rule can be modified in future transactions',
                      }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional()
              .openapi({
                description: 'Array of objects describing what addresses can hold the token',
              }),
          })
          .exactOptional()
          .openapi({ description: 'Object describing token rules', required: [] }),
        tokenName: z
          .string()
          .exactOptional()
          .openapi({ description: 'Token Symbol it will be identified by (ex. NIBBL)' }),
        urls: z
          .array(
            z
              .object({
                dataHash: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Hash of data at the URL, used for verification' }),
                mimeType: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'mimeType of URL content' }),
                name: z.string().exactOptional().openapi({ description: 'Name of the URL' }),
                url: z.string().exactOptional().openapi({ description: 'Actual URL' }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        userData: z
          .object({
            meta: z
              .array(
                z
                  .object({ key: z.string().exactOptional(), value: z.string().exactOptional() })
                  .openapi({ required: [] }),
              )
              .exactOptional(),
          })
          .exactOptional()
          .openapi({ description: 'Metadata set by user on token', required: [] }),
      })
      .exactOptional()
      .openapi({ description: 'Object representing all metadata at token issuance', required: [] }),
    sendutxo: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Array of UTXOs to send the token from' }),
    to: z.array(
      z
        .object({
          address: z
            .string()
            .exactOptional()
            .openapi({ description: 'Address to transfer tokens to' }),
          amount: z.number().exactOptional().openapi({ description: 'Number of tokens to send' }),
          tokenId: z
            .string()
            .exactOptional()
            .openapi({ description: 'ID of token we are sending' }),
        })
        .openapi({ required: [] }),
    ),
  })
  .openapi({ required: ['fee', 'to'] })
  .openapi('SendTokenRequest')

const SendTokenResponseSchema = z
  .object({
    multisigOutputs: z
      .array(z.number())
      .exactOptional()
      .openapi({ description: 'Array of indexes of multisig outputs' }),
    ntp1OutputIndexes: z
      .array(z.number())
      .exactOptional()
      .openapi({ description: 'Array of indexes transfering NTP1 tokens' }),
    txHex: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unsigned, raw transaction hex of the transaction to send the token',
      }),
  })
  .openapi({ required: [] })
  .openapi('SendTokenResponse')

const SendTxRequestSchema = z
  .object({ rawtx: z.string().openapi({ description: 'Signed raw tx hex to broadcast' }) })
  .openapi({ required: ['rawtx'] })
  .openapi('SendTxRequest')

const BroadcastTxRequestRequestBody = {
  description: 'Object representing a transaction to broadcast',
  content: { 'application/json': { schema: BroadcastTxRequestSchema } },
  required: true,
}

const BurnTokenRequestRequestBody = {
  description: 'Object representing the token to be burned',
  content: { 'application/json': { schema: BurnTokenRequestSchema } },
  required: true,
}

const IssueTokenRequestRequestBody = {
  description: 'Object representing the token to be created',
  content: { 'application/json': { schema: IssueTokenRequestSchema } },
  required: true,
}

const SendTokenRequestRequestBody = {
  description: 'Object representing the token to be sent',
  content: { 'application/json': { schema: SendTokenRequestSchema } },
  required: true,
}

const SendTxRequestRequestBody = {
  description: 'Object representing a transaction to broadcast',
  content: { 'application/json': { schema: SendTxRequestSchema } },
  required: true,
}

const RpcAuthSecurityScheme = { scheme: 'basic', type: 'http' }

export const postRoute = createRoute({
  method: 'post',
  path: '/',
  tags: ['JSON-RPC'],
  summary: 'Send a JSON-RPC call to a localhost neblio-Qt or nebliod node',
  description:
    'Call any Neblio RPC command from the Neblio API libraries. Useful for signing transactions with a local node and other functions. Will not work from a browser due to CORS restrictions. Requires a node to be running locally at 127.0.0.1',
  operationId: 'json_rpc',
  request: {
    body: { content: { 'application/json': { schema: RpcRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Object containing the JSON response from the Neblio node.',
      content: { 'application/json': { schema: RpcResponseSchema } },
    },
    401: {
      description: 'Authentication information is missing or invalid',
      headers: z.object({
        WWW_Authenticate: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{ rpcAuth: [] }],
  servers: [
    {
      description: 'Communicate with locally running Neblio node on Mainnet',
      url: 'http://127.0.0.1:6326',
    },
    {
      description: 'Communicate with locally running Neblio node on Testnet',
      url: 'http://127.0.0.1:16326',
    },
  ],
})

export const getInsAddrAddressRoute = createRoute({
  method: 'get',
  path: '/ins/addr/{address}',
  tags: ['Insight'],
  summary: 'Returns address object',
  description: 'Returns NEBL address object containing information on a specific address',
  operationId: 'getAddress',
  request: {
    params: z.object({
      address: z
        .string()
        .openapi({
          param: {
            description: 'Address',
            in: 'path',
            name: 'address',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Object containing address info',
      content: { 'application/json': { schema: GetAddressResponseSchema } },
    },
  },
})

export const getInsAddrAddressBalanceRoute = createRoute({
  method: 'get',
  path: '/ins/addr/{address}/balance',
  tags: ['Insight'],
  summary: 'Returns address balance in sats',
  description: 'Returns NEBL address balance in satoshis',
  operationId: 'getAddressBalance',
  request: {
    params: z.object({
      address: z
        .string()
        .openapi({
          param: {
            description: 'Address',
            in: 'path',
            name: 'address',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Address balance',
      content: { 'application/json': { schema: GetAddressBalanceResponseSchema } },
    },
  },
})

export const getInsAddrAddressTotalReceivedRoute = createRoute({
  method: 'get',
  path: '/ins/addr/{address}/totalReceived',
  tags: ['Insight'],
  summary: 'Returns total received by address in sats',
  description: 'Returns total NEBL received by address in satoshis',
  operationId: 'getAddressTotalReceived',
  request: {
    params: z.object({
      address: z
        .string()
        .openapi({
          param: {
            description: 'Address',
            in: 'path',
            name: 'address',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Total received by address',
      content: { 'application/json': { schema: GetAddressTotalReceivedResponseSchema } },
    },
  },
})

export const getInsAddrAddressTotalSentRoute = createRoute({
  method: 'get',
  path: '/ins/addr/{address}/totalSent',
  tags: ['Insight'],
  summary: 'Returns total sent by address in sats',
  description: 'Returns total NEBL sent by address in satoshis',
  operationId: 'getAddressTotalSent',
  request: {
    params: z.object({
      address: z
        .string()
        .openapi({
          param: {
            description: 'Address',
            in: 'path',
            name: 'address',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Total sent by address',
      content: { 'application/json': { schema: GetAddressTotalSentResponseSchema } },
    },
  },
})

export const getInsAddrAddressUnconfirmedBalanceRoute = createRoute({
  method: 'get',
  path: '/ins/addr/{address}/unconfirmedBalance',
  tags: ['Insight'],
  summary: 'Returns address unconfirmed balance in sats',
  description: 'Returns NEBL address unconfirmed balance in satoshis',
  operationId: 'getAddressUnconfirmedBalance',
  request: {
    params: z.object({
      address: z
        .string()
        .openapi({
          param: {
            description: 'Address',
            in: 'path',
            name: 'address',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Address unconfirmed balance',
      content: { 'application/json': { schema: GetAddressUnconfirmedBalanceResponseSchema } },
    },
  },
})

export const getInsAddrAddressUtxoRoute = createRoute({
  method: 'get',
  path: '/ins/addr/{address}/utxo',
  tags: ['Insight'],
  summary: 'Returns all UTXOs at a given address',
  description: 'Returns information on each Unspent Transaction Output contained at an address',
  operationId: 'getAddressUtxos',
  request: {
    params: z.object({
      address: z
        .string()
        .openapi({
          param: {
            description: 'Address',
            in: 'path',
            name: 'address',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'UTXOs at an address',
      content: { 'application/json': { schema: GetAddressUtxosResponseSchema } },
    },
  },
})

export const getInsBlockIndexBlockindexRoute = createRoute({
  method: 'get',
  path: '/ins/block-index/{blockindex}',
  tags: ['Insight'],
  summary: 'Returns block hash of block',
  description: 'Returns the block hash of a block at a given block index',
  operationId: 'getBlockIndex',
  request: {
    params: z.object({
      blockindex: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Block Index',
            in: 'path',
            name: 'blockindex',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Object containing block hash',
      content: { 'application/json': { schema: GetBlockIndexResponseSchema } },
    },
  },
})

export const getInsBlockBlockhashRoute = createRoute({
  method: 'get',
  path: '/ins/block/{blockhash}',
  tags: ['Insight'],
  summary: 'Returns information regarding a Neblio block',
  description: 'Returns blockchain data for a given block based upon the block hash',
  operationId: 'getBlock',
  request: {
    params: z.object({
      blockhash: z
        .string()
        .openapi({
          param: {
            description: 'Block Hash',
            in: 'path',
            name: 'blockhash',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Object containing all information on a blockchain block',
      content: { 'application/json': { schema: GetBlockResponseSchema } },
    },
  },
})

export const getInsRawtxTxidRoute = createRoute({
  method: 'get',
  path: '/ins/rawtx/{txid}',
  tags: ['Insight'],
  summary: 'Returns raw transaction hex',
  description: 'Returns raw transaction hex representing a NEBL transaction',
  operationId: 'getRawTx',
  request: {
    params: z.object({
      txid: z
        .string()
        .openapi({
          param: {
            description: 'Transaction ID',
            in: 'path',
            name: 'txid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Object containing raw hex of transaction',
      content: { 'application/json': { schema: GetRawTxResponseSchema } },
    },
  },
})

export const getInsStatusRoute = createRoute({
  method: 'get',
  path: '/ins/status',
  tags: ['Insight'],
  summary: 'Utility API for calling several blockchain node functions',
  description:
    'Utility API for calling several blockchain node functions - getInfo, getDifficulty, getBestBlockHash, getLastBlockHash',
  operationId: 'getStatus',
  request: {
    query: z.object({
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Function to call, getInfo, getDifficulty, getBestBlockHash, or getLastBlockHash',
            in: 'query',
            name: 'q',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Function Response',
      content: { 'application/json': { schema: GetStatusResponseSchema } },
    },
  },
})

export const getInsSyncRoute = createRoute({
  method: 'get',
  path: '/ins/sync',
  tags: ['Insight'],
  summary: 'Get node sync status',
  description: "Returns information on the node's sync progress",
  operationId: 'getSync',
  responses: {
    200: {
      description: 'Sync Info',
      content: { 'application/json': { schema: GetSyncResponseSchema } },
    },
  },
})

export const postInsTxSendRoute = createRoute({
  method: 'post',
  path: '/ins/tx/send',
  tags: ['Insight'],
  summary: 'Broadcasts a signed raw transaction to the network (not NTP1 specific)',
  description:
    'Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.\n',
  operationId: 'sendTx',
  request: { body: SendTxRequestRequestBody },
  responses: {
    200: {
      description: 'An object containing the TXID if the broadcast was successful',
      content: { 'application/json': { schema: BroadcastTxResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getInsTxTxidRoute = createRoute({
  method: 'get',
  path: '/ins/tx/{txid}',
  tags: ['Insight'],
  summary: 'Returns transaction object',
  description: 'Returns NEBL transaction object representing a NEBL transaction',
  operationId: 'getTx',
  request: {
    params: z.object({
      txid: z
        .string()
        .openapi({
          param: {
            description: 'Transaction ID',
            in: 'path',
            name: 'txid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Object containing transaction info',
      content: { 'application/json': { schema: GetTxResponseSchema } },
    },
  },
})

export const getInsTxsRoute = createRoute({
  method: 'get',
  path: '/ins/txs',
  tags: ['Insight'],
  summary: 'Get transactions by block or address',
  description: 'Returns all transactions by block or address',
  operationId: 'getTxs',
  request: {
    query: z.object({
      address: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Address',
            in: 'query',
            name: 'address',
            required: false,
            schema: { type: 'string' },
          },
        }),
      block: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Block Hash',
            in: 'query',
            name: 'block',
            required: false,
            schema: { type: 'string' },
          },
        }),
      pageNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number to display',
            in: 'query',
            name: 'pageNum',
            required: false,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of transactions',
      content: { 'application/json': { schema: GetTxsResponseSchema } },
    },
  },
})

export const getNtp1AddressinfoAddressRoute = createRoute({
  method: 'get',
  path: '/ntp1/addressinfo/{address}',
  tags: ['NTP1'],
  summary: 'Information On a Neblio Address',
  description: 'Returns both NEBL and NTP1 token UTXOs held at the given address.\n',
  operationId: 'getAddressInfo',
  request: {
    params: z.object({
      address: z
        .string()
        .openapi({
          param: {
            description: 'Neblio Address to get information on.',
            in: 'path',
            name: 'address',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An object with an array of UTXOs for this address',
      content: { 'application/json': { schema: GetAddressInfoResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postNtp1BroadcastRoute = createRoute({
  method: 'post',
  path: '/ntp1/broadcast',
  tags: ['NTP1'],
  summary: 'Broadcasts a signed raw transaction to the network',
  description:
    'Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.\n',
  operationId: 'broadcastTx',
  request: { body: BroadcastTxRequestRequestBody },
  responses: {
    200: {
      description: 'An object containing the TXID if the broadcast was successful',
      content: { 'application/json': { schema: BroadcastTxResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postNtp1BurntokenRoute = createRoute({
  method: 'post',
  path: '/ntp1/burntoken',
  tags: ['NTP1'],
  summary: 'Builds a transaction that burns an NTP1 Token',
  description:
    'Builds an unsigned raw transaction that burns an NTP1 token on the Neblio blockchain.\n',
  operationId: 'burnToken',
  request: { body: BurnTokenRequestRequestBody },
  responses: {
    200: {
      description: 'An object representing the tx to burn the token',
      content: { 'application/json': { schema: BurnTokenResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postNtp1IssueRoute = createRoute({
  method: 'post',
  path: '/ntp1/issue',
  tags: ['NTP1'],
  summary: 'Builds a transaction that issues a new NTP1 Token',
  description:
    'Builds an unsigned raw transaction that issues a new NTP1 token on the Neblio blockchain.\n',
  operationId: 'issueToken',
  request: { body: IssueTokenRequestRequestBody },
  responses: {
    200: {
      description: 'An object representing the token created',
      content: { 'application/json': { schema: IssueTokenResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postNtp1SendtokenRoute = createRoute({
  method: 'post',
  path: '/ntp1/sendtoken',
  tags: ['NTP1'],
  summary: 'Builds a transaction that sends an NTP1 Token',
  description:
    'Builds an unsigned raw transaction that sends an NTP1 token on the Neblio blockchain.\n',
  operationId: 'sendToken',
  request: { body: SendTokenRequestRequestBody },
  responses: {
    200: {
      description: 'An object representing the tx to send the token',
      content: { 'application/json': { schema: SendTokenResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getNtp1StakeholdersTokenidRoute = createRoute({
  method: 'get',
  path: '/ntp1/stakeholders/{tokenid}',
  tags: ['NTP1'],
  summary: 'Get Addresses Holding a Token',
  description: 'Returns the the the addresses holding a token and how many tokens are held\n',
  operationId: 'getTokenHolders',
  request: {
    params: z.object({
      tokenid: z
        .string()
        .openapi({
          param: {
            description: 'TokenId to request metadata for',
            in: 'path',
            name: 'tokenid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An object containing all of the addresses holding a token',
      content: { 'application/json': { schema: GetTokenHoldersResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getNtp1TokenidTokensymbolRoute = createRoute({
  method: 'get',
  path: '/ntp1/tokenid/{tokensymbol}',
  tags: ['NTP1'],
  summary: 'Returns the tokenId representing a token',
  description:
    'Translates a token symbol to a tokenId if a token exists with that symbol on the network\n',
  operationId: 'getTokenId',
  request: {
    params: z.object({
      tokensymbol: z
        .string()
        .openapi({
          param: {
            description: 'Token symbol',
            in: 'path',
            name: 'tokensymbol',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Object containing the token symbol and ID, if token symbol does not exist on network, empty object is returned.',
      content: { 'application/json': { schema: GetTokenIdResponseSchema } },
    },
  },
})

export const getNtp1TokenmetadataTokenidRoute = createRoute({
  method: 'get',
  path: '/ntp1/tokenmetadata/{tokenid}',
  tags: ['NTP1'],
  summary: 'Get Metadata of Token',
  description: 'Returns the metadata associated with a token.\n',
  operationId: 'getTokenMetadata',
  request: {
    params: z.object({
      tokenid: z
        .string()
        .openapi({
          param: {
            description: 'TokenId to request metadata for',
            in: 'path',
            name: 'tokenid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      verbosity: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              '0 (Default) is fastest, 1 contains token stats, 2 contains token holding addresses',
            in: 'query',
            name: 'verbosity',
            schema: { type: 'number' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An object containing the metadata of a token',
      content: { 'application/json': { schema: GetTokenMetadataResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getNtp1TokenmetadataTokenidUtxoRoute = createRoute({
  method: 'get',
  path: '/ntp1/tokenmetadata/{tokenid}/{utxo}',
  tags: ['NTP1'],
  summary: 'Get UTXO Metadata of Token',
  description:
    'Returns the metadata associated with a token for that specific utxo instead of the issuance transaction.\n',
  operationId: 'getTokenMetadataOfUtxo',
  request: {
    params: z.object({
      tokenid: z
        .string()
        .openapi({
          param: {
            description: 'TokenId to request metadata for',
            in: 'path',
            name: 'tokenid',
            required: true,
            schema: { type: 'string' },
          },
        }),
      utxo: z
        .string()
        .openapi({
          param: {
            description: 'Specific UTXO to request metadata for',
            in: 'path',
            name: 'utxo',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      verbosity: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              '0 (Default) is fastest, 1 contains token stats, 2 contains token holding addresses',
            in: 'query',
            name: 'verbosity',
            schema: { type: 'number' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An object containing the metadata of a token for a UTXO',
      content: { 'application/json': { schema: GetTokenMetadataResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getNtp1TransactioninfoTxidRoute = createRoute({
  method: 'get',
  path: '/ntp1/transactioninfo/{txid}',
  tags: ['NTP1'],
  summary: 'Information On an NTP1 Transaction',
  description: 'Returns detailed information regarding an NTP1 transaction.\n',
  operationId: 'getTransactionInfo',
  request: {
    params: z.object({
      txid: z
        .string()
        .openapi({
          param: {
            description: 'Neblio txid to get information on.',
            in: 'path',
            name: 'txid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An object represending this transaction',
      content: { 'application/json': { schema: GetTransactionInfoResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getTestnetFaucetRoute = createRoute({
  method: 'get',
  path: '/testnet/faucet',
  tags: ['Testnet-Faucet'],
  summary: 'Withdraws testnet NEBL to the specified address',
  description:
    'Withdraw testnet NEBL to your Neblio Testnet address. By default amount is 1500000000 or 15 NEBL and has a max of 50 NEBL. Only 2 withdrawals allowed per 24 hour period.\n',
  operationId: 'testnet_getFaucet',
  request: {
    query: z.object({
      address: z
        .string()
        .openapi({
          param: {
            description: 'Your Neblio Testnet Address',
            in: 'query',
            name: 'address',
            required: true,
            schema: { type: 'string' },
          },
        }),
      amount: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Amount of NEBL to withdrawal in satoshis',
            in: 'query',
            name: 'amount',
            required: false,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Object containing the transaction ID of the withdrawal.',
      content: { 'application/json': { schema: GetFaucetResponseSchema } },
    },
  },
})

export const getTestnetInsAddrAddressRoute = createRoute({
  method: 'get',
  path: '/testnet/ins/addr/{address}',
  tags: ['Testnet-Insight'],
  summary: 'Returns address object',
  description: 'Returns NEBL address object containing information on a specific address',
  operationId: 'testnet_getAddress',
  request: {
    params: z.object({
      address: z
        .string()
        .openapi({
          param: {
            description: 'Address',
            in: 'path',
            name: 'address',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Object containing address info',
      content: { 'application/json': { schema: GetAddressResponseSchema } },
    },
  },
})

export const getTestnetInsAddrAddressBalanceRoute = createRoute({
  method: 'get',
  path: '/testnet/ins/addr/{address}/balance',
  tags: ['Testnet-Insight'],
  summary: 'Returns address balance in sats',
  description: 'Returns NEBL address balance in satoshis',
  operationId: 'testnet_getAddressBalance',
  request: {
    params: z.object({
      address: z
        .string()
        .openapi({
          param: {
            description: 'Address',
            in: 'path',
            name: 'address',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Address balance',
      content: { 'application/json': { schema: GetAddressBalanceResponseSchema } },
    },
  },
})

export const getTestnetInsAddrAddressTotalReceivedRoute = createRoute({
  method: 'get',
  path: '/testnet/ins/addr/{address}/totalReceived',
  tags: ['Testnet-Insight'],
  summary: 'Returns total received by address in sats',
  description: 'Returns total NEBL received by address in satoshis',
  operationId: 'testnet_getAddressTotalReceived',
  request: {
    params: z.object({
      address: z
        .string()
        .openapi({
          param: {
            description: 'Address',
            in: 'path',
            name: 'address',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Total received by address',
      content: { 'application/json': { schema: GetAddressTotalReceivedResponseSchema } },
    },
  },
})

export const getTestnetInsAddrAddressTotalSentRoute = createRoute({
  method: 'get',
  path: '/testnet/ins/addr/{address}/totalSent',
  tags: ['Testnet-Insight'],
  summary: 'Returns total sent by address in sats',
  description: 'Returns total NEBL sent by address in satoshis',
  operationId: 'testnet_getAddressTotalSent',
  request: {
    params: z.object({
      address: z
        .string()
        .openapi({
          param: {
            description: 'Address',
            in: 'path',
            name: 'address',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Total sent by address',
      content: { 'application/json': { schema: GetAddressTotalSentResponseSchema } },
    },
  },
})

export const getTestnetInsAddrAddressUnconfirmedBalanceRoute = createRoute({
  method: 'get',
  path: '/testnet/ins/addr/{address}/unconfirmedBalance',
  tags: ['Testnet-Insight'],
  summary: 'Returns address unconfirmed balance in sats',
  description: 'Returns NEBL address unconfirmed balance in satoshis',
  operationId: 'testnet_getAddressUnconfirmedBalance',
  request: {
    params: z.object({
      address: z
        .string()
        .openapi({
          param: {
            description: 'Address',
            in: 'path',
            name: 'address',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Address unconfirmed balance',
      content: { 'application/json': { schema: GetAddressUnconfirmedBalanceResponseSchema } },
    },
  },
})

export const getTestnetInsAddrAddressUtxoRoute = createRoute({
  method: 'get',
  path: '/testnet/ins/addr/{address}/utxo',
  tags: ['Testnet-Insight'],
  summary: 'Returns all UTXOs at a given address',
  description: 'Returns information on each Unspent Transaction Output contained at an address',
  operationId: 'testnet_getAddressUtxos',
  request: {
    params: z.object({
      address: z
        .string()
        .openapi({
          param: {
            description: 'Address',
            in: 'path',
            name: 'address',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'UTXOs at an address',
      content: { 'application/json': { schema: GetAddressUtxosResponseSchema } },
    },
  },
})

export const getTestnetInsBlockIndexBlockindexRoute = createRoute({
  method: 'get',
  path: '/testnet/ins/block-index/{blockindex}',
  tags: ['Testnet-Insight'],
  summary: 'Returns block hash of block',
  description: 'Returns the block hash of a block at a given block index',
  operationId: 'testnet_getBlockIndex',
  request: {
    params: z.object({
      blockindex: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Block Index',
            in: 'path',
            name: 'blockindex',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Object containing block hash',
      content: { 'application/json': { schema: GetBlockIndexResponseSchema } },
    },
  },
})

export const getTestnetInsBlockBlockhashRoute = createRoute({
  method: 'get',
  path: '/testnet/ins/block/{blockhash}',
  tags: ['Testnet-Insight'],
  summary: 'Returns information regarding a Neblio block',
  description: 'Returns blockchain data for a given block based upon the block hash',
  operationId: 'testnet_getBlock',
  request: {
    params: z.object({
      blockhash: z
        .string()
        .openapi({
          param: {
            description: 'Block Hash',
            in: 'path',
            name: 'blockhash',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Object containing all information on a blockchain block',
      content: { 'application/json': { schema: GetBlockResponseSchema } },
    },
  },
})

export const getTestnetInsRawtxTxidRoute = createRoute({
  method: 'get',
  path: '/testnet/ins/rawtx/{txid}',
  tags: ['Testnet-Insight'],
  summary: 'Returns raw transaction hex',
  description: 'Returns raw transaction hex representing a NEBL transaction',
  operationId: 'testnet_getRawTx',
  request: {
    params: z.object({
      txid: z
        .string()
        .openapi({
          param: {
            description: 'Transaction ID',
            in: 'path',
            name: 'txid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Object containing raw hex of transaction',
      content: { 'application/json': { schema: GetRawTxResponseSchema } },
    },
  },
})

export const getTestnetInsStatusRoute = createRoute({
  method: 'get',
  path: '/testnet/ins/status',
  tags: ['Testnet-Insight'],
  summary: 'Utility API for calling several blockchain node functions',
  description:
    'Utility API for calling several blockchain node functions - getInfo, getDifficulty, getBestBlockHash, getLastBlockHash',
  operationId: 'testnet_getStatus',
  request: {
    query: z.object({
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Function to call, getInfo, getDifficulty, getBestBlockHash, or getLastBlockHash',
            in: 'query',
            name: 'q',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Function Response',
      content: { 'application/json': { schema: GetStatusResponseSchema } },
    },
  },
})

export const getTestnetInsSyncRoute = createRoute({
  method: 'get',
  path: '/testnet/ins/sync',
  tags: ['Testnet-Insight'],
  summary: 'Get node sync status',
  description: "Returns information on the node's sync progress",
  operationId: 'testnet_getSync',
  responses: {
    200: {
      description: 'Sync Info',
      content: { 'application/json': { schema: GetSyncResponseSchema } },
    },
  },
})

export const postTestnetInsTxSendRoute = createRoute({
  method: 'post',
  path: '/testnet/ins/tx/send',
  tags: ['Testnet-Insight'],
  summary: 'Broadcasts a signed raw transaction to the network (not NTP1 specific)',
  description:
    'Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.\n',
  operationId: 'testnet_sendTx',
  request: { body: SendTxRequestRequestBody },
  responses: {
    200: {
      description: 'An object containing the TXID if the broadcast was successful',
      content: { 'application/json': { schema: BroadcastTxResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getTestnetInsTxTxidRoute = createRoute({
  method: 'get',
  path: '/testnet/ins/tx/{txid}',
  tags: ['Testnet-Insight'],
  summary: 'Returns transaction object',
  description: 'Returns NEBL transaction object representing a NEBL transaction',
  operationId: 'testnet_getTx',
  request: {
    params: z.object({
      txid: z
        .string()
        .openapi({
          param: {
            description: 'Transaction ID',
            in: 'path',
            name: 'txid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Object containing transaction info',
      content: { 'application/json': { schema: GetTxResponseSchema } },
    },
  },
})

export const getTestnetInsTxsRoute = createRoute({
  method: 'get',
  path: '/testnet/ins/txs',
  tags: ['Testnet-Insight'],
  summary: 'Get transactions by block or address',
  description: 'Returns all transactions by block or address',
  operationId: 'testnet_getTxs',
  request: {
    query: z.object({
      address: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Address',
            in: 'query',
            name: 'address',
            required: false,
            schema: { type: 'string' },
          },
        }),
      block: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Block Hash',
            in: 'query',
            name: 'block',
            required: false,
            schema: { type: 'string' },
          },
        }),
      pageNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Page number to display',
            in: 'query',
            name: 'pageNum',
            required: false,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of transactions',
      content: { 'application/json': { schema: GetTxsResponseSchema } },
    },
  },
})

export const getTestnetNtp1AddressinfoAddressRoute = createRoute({
  method: 'get',
  path: '/testnet/ntp1/addressinfo/{address}',
  tags: ['Testnet-NTP1'],
  summary: 'Information On a Neblio Address',
  description: 'Returns both NEBL and NTP1 token UTXOs held at the given address.\n',
  operationId: 'testnet_getAddressInfo',
  request: {
    params: z.object({
      address: z
        .string()
        .openapi({
          param: {
            description: 'Neblio Address to get information on.',
            in: 'path',
            name: 'address',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An object with an array of UTXOs for this address',
      content: { 'application/json': { schema: GetAddressInfoResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postTestnetNtp1BroadcastRoute = createRoute({
  method: 'post',
  path: '/testnet/ntp1/broadcast',
  tags: ['Testnet-NTP1'],
  summary: 'Broadcasts a signed raw transaction to the network',
  description:
    'Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.\n',
  operationId: 'testnet_broadcastTx',
  request: { body: BroadcastTxRequestRequestBody },
  responses: {
    200: {
      description: 'An object containing the TXID if the broadcast was successful',
      content: { 'application/json': { schema: BroadcastTxResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postTestnetNtp1BurntokenRoute = createRoute({
  method: 'post',
  path: '/testnet/ntp1/burntoken',
  tags: ['Testnet-NTP1'],
  summary: 'Builds a transaction that burns an NTP1 Token',
  description:
    'Builds an unsigned raw transaction that burns an NTP1 token on the Neblio blockchain.\n',
  operationId: 'testnet_burnToken',
  request: { body: BurnTokenRequestRequestBody },
  responses: {
    200: {
      description: 'An object representing the tx to burn the token',
      content: { 'application/json': { schema: BurnTokenResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postTestnetNtp1IssueRoute = createRoute({
  method: 'post',
  path: '/testnet/ntp1/issue',
  tags: ['Testnet-NTP1'],
  summary: 'Builds a transaction that issues a new NTP1 Token',
  description:
    'Builds an unsigned raw transaction that issues a new NTP1 token on the Neblio blockchain.\n',
  operationId: 'testnet_issueToken',
  request: { body: IssueTokenRequestRequestBody },
  responses: {
    200: {
      description: 'An object representing the token created',
      content: { 'application/json': { schema: IssueTokenResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postTestnetNtp1SendtokenRoute = createRoute({
  method: 'post',
  path: '/testnet/ntp1/sendtoken',
  tags: ['Testnet-NTP1'],
  summary: 'Builds a transaction that sends an NTP1 Token',
  description:
    'Builds an unsigned raw transaction that sends an NTP1 token on the Neblio blockchain.\n',
  operationId: 'testnet_sendToken',
  request: { body: SendTokenRequestRequestBody },
  responses: {
    200: {
      description: 'An object representing the tx to send the token',
      content: { 'application/json': { schema: SendTokenResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getTestnetNtp1StakeholdersTokenidRoute = createRoute({
  method: 'get',
  path: '/testnet/ntp1/stakeholders/{tokenid}',
  tags: ['Testnet-NTP1'],
  summary: 'Get Addresses Holding a Token',
  description: 'Returns the the the addresses holding a token and how many tokens are held\n',
  operationId: 'testnet_getTokenHolders',
  request: {
    params: z.object({
      tokenid: z
        .string()
        .openapi({
          param: {
            description: 'TokenId to request metadata for',
            in: 'path',
            name: 'tokenid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An object containing all of the addresses holding a token',
      content: { 'application/json': { schema: GetTokenHoldersResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getTestnetNtp1TokenidTokensymbolRoute = createRoute({
  method: 'get',
  path: '/testnet/ntp1/tokenid/{tokensymbol}',
  tags: ['Testnet-NTP1'],
  summary: 'Returns the tokenId representing a token',
  description:
    'Translates a token symbol to a tokenId if a token exists with that symbol on the network\n',
  operationId: 'testnet_getTokenId',
  request: {
    params: z.object({
      tokensymbol: z
        .string()
        .openapi({
          param: {
            description: 'Token symbol',
            in: 'path',
            name: 'tokensymbol',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Object containing the token symbol and ID, if token symbol does not exist on network, empty object is returned.',
      content: { 'application/json': { schema: GetTokenIdResponseSchema } },
    },
  },
})

export const getTestnetNtp1TokenmetadataTokenidRoute = createRoute({
  method: 'get',
  path: '/testnet/ntp1/tokenmetadata/{tokenid}',
  tags: ['Testnet-NTP1'],
  summary: 'Get Metadata of Token',
  description: 'Returns the metadata associated with a token.\n',
  operationId: 'testnet_getTokenMetadata',
  request: {
    params: z.object({
      tokenid: z
        .string()
        .openapi({
          param: {
            description: 'TokenId to request metadata for',
            in: 'path',
            name: 'tokenid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      verbosity: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              '0 (Default) is fastest, 1 contains token stats, 2 contains token holding addresses',
            in: 'query',
            name: 'verbosity',
            schema: { type: 'number' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An object containing the metadata of a token',
      content: { 'application/json': { schema: GetTokenMetadataResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getTestnetNtp1TokenmetadataTokenidUtxoRoute = createRoute({
  method: 'get',
  path: '/testnet/ntp1/tokenmetadata/{tokenid}/{utxo}',
  tags: ['Testnet-NTP1'],
  summary: 'Get UTXO Metadata of Token',
  description:
    'Returns the metadata associated with a token for that specific utxo instead of the issuance transaction.\n',
  operationId: 'testnet_getTokenMetadataOfUtxo',
  request: {
    params: z.object({
      tokenid: z
        .string()
        .openapi({
          param: {
            description: 'TokenId to request metadata for',
            in: 'path',
            name: 'tokenid',
            required: true,
            schema: { type: 'string' },
          },
        }),
      utxo: z
        .string()
        .openapi({
          param: {
            description: 'Specific UTXO to request metadata for',
            in: 'path',
            name: 'utxo',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      verbosity: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              '0 (Default) is fastest, 1 contains token stats, 2 contains token holding addresses',
            in: 'query',
            name: 'verbosity',
            schema: { type: 'number' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An object containing the metadata of a token for a UTXO',
      content: { 'application/json': { schema: GetTokenMetadataResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getTestnetNtp1TransactioninfoTxidRoute = createRoute({
  method: 'get',
  path: '/testnet/ntp1/transactioninfo/{txid}',
  tags: ['Testnet-NTP1'],
  summary: 'Information On an NTP1 Transaction',
  description: 'Returns detailed information regarding an NTP1 transaction.\n',
  operationId: 'testnet_getTransactionInfo',
  request: {
    params: z.object({
      txid: z
        .string()
        .openapi({
          param: {
            description: 'Neblio txid to get information on.',
            in: 'path',
            name: 'txid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An object represending this transaction',
      content: { 'application/json': { schema: GetTransactionInfoResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})
