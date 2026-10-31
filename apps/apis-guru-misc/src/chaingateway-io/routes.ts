import { createRoute, z } from '@hono/zod-openapi'

const AddressSchema = z
  .object({ ethereumaddress: z.string() })
  .openapi({
    example: { ethereumaddress: '0x71892889ed4d79d88ab6ea3783b571b8ece9bef4' },
    required: ['ethereumaddress'],
    title: 'Address',
  })
  .openapi('Address')

const CipherparamsSchema = z
  .object({ iv: z.string() })
  .openapi({
    example: { iv: '76e6f2497b9f2a8e024fc752a5418a6d' },
    required: ['iv'],
    title: 'Cipherparams',
  })
  .openapi('Cipherparams')

const KdfparamsSchema = z
  .object({ dklen: z.int32(), n: z.int32(), p: z.int32(), r: z.int32(), salt: z.string() })
  .openapi({
    example: {
      dklen: 32,
      n: 131072,
      p: 1,
      r: 8,
      salt: 'd11d996a7cc4bfad730d4c9b9057eff2c0fb3940b5bfc59db62ae218c14a54f4',
    },
    required: ['dklen', 'salt', 'n', 'r', 'p'],
    title: 'Kdfparams',
  })
  .openapi('Kdfparams')

const CryptoSchema = z
  .object({
    cipher: z.string(),
    cipherparams: CipherparamsSchema,
    ciphertext: z.string(),
    kdf: z.string(),
    kdfparams: KdfparamsSchema,
    mac: z.string(),
  })
  .openapi({
    example: {
      cipher: 'aes-128-ctr',
      cipherparams: { iv: '76e6f2497b9f2a8e024fc752a5418a6d' },
      ciphertext: '9d74262517b984f9b0560b8f23b5e3340f7be0f56b70cd91ff445dcaf5b1968f',
      kdf: 'scrypt',
      kdfparams: {
        dklen: 32,
        n: 131072,
        p: 1,
        r: 8,
        salt: 'd11d996a7cc4bfad730d4c9b9057eff2c0fb3940b5bfc59db62ae218c14a54f4',
      },
      mac: 'dcc342bbbbb8eea97c89b47bafc23de568fc1a48e0bd21ae8d776a95c4704ac9',
    },
    required: ['ciphertext', 'cipherparams', 'cipher', 'kdf', 'kdfparams', 'mac'],
    title: 'Crypto',
  })
  .openapi('Crypto')

const ContentSchema = z
  .object({ address: z.string(), crypto: CryptoSchema, id: z.string(), version: z.int32() })
  .openapi({
    example: {
      address: '71892889ed4d79d88ab6ea3783b571b8ece9bef4',
      crypto: {
        cipher: 'aes-128-ctr',
        cipherparams: { iv: '76e6f2497b9f2a8e024fc752a5418a6d' },
        ciphertext: '9d74262517b984f9b0560b8f23b5e3340f7be0f56b70cd91ff445dcaf5b1968f',
        kdf: 'scrypt',
        kdfparams: {
          dklen: 32,
          n: 131072,
          p: 1,
          r: 8,
          salt: 'd11d996a7cc4bfad730d4c9b9057eff2c0fb3940b5bfc59db62ae218c14a54f4',
        },
        mac: 'dcc342bbbbb8eea97c89b47bafc23de568fc1a48e0bd21ae8d776a95c4704ac9',
      },
      id: '85b790ff-408e-42b8-b123-bec9523964dc',
      version: 3,
    },
    required: ['version', 'id', 'address', 'crypto'],
    title: 'Content',
  })
  .openapi('Content')

const FailedIpnSchema = z
  .object({
    action: z.string(),
    amount: z.string(),
    contractaddress: z.string(),
    ethereumaddress: z.string(),
    id: z.string(),
    timestamp: z.string(),
    url: z.string(),
  })
  .openapi({
    example: {
      action: 'deposit',
      amount: '496588.7771277759',
      contractaddress: '0x514910771af9ca656af840dff83e8264ecf986ca',
      ethereumaddress: '0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974',
      id: '17766',
      timestamp: '2020-09-19 14:33:01',
      url: 'https://yoururl.com/ipnreceiver.php',
    },
    required: ['id', 'timestamp', 'ethereumaddress', 'contractaddress', 'amount', 'url', 'action'],
    title: 'FailedIpn',
  })
  .openapi('FailedIpn')

const IpnSchema = z
  .object({ contractaddress: z.string(), ethereumaddress: z.string(), url: z.string() })
  .openapi({
    example: {
      contractaddress: '0x514910771af9ca656af840dff83e8264ecf986ca',
      ethereumaddress: '0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974',
      url: 'https://yoururl.com/ipnreceiver.php',
    },
    required: ['ethereumaddress', 'contractaddress', 'url'],
    title: 'Ipn',
  })
  .openapi('Ipn')

const TransactionSchema = z
  .object({
    amount: z.string(),
    block_number: z.string(),
    contract_address: z.string(),
    from: z.string(),
    gas: z.string(),
    gas_price: z.string(),
    to: z.string(),
    token_decimals: z.string(),
    token_name: z.string(),
    token_supply: z.string(),
    token_symbol: z.string(),
    txid: z.string(),
    type: z.string(),
  })
  .openapi({
    example: {
      amount: '10',
      block_number: '6432816',
      contract_address: '0x9E2B71e87d9304c4773674584EB9D0c838643568',
      from: '0x8dF9654c7D81c850FDd35D93292B2fC60e666bF0',
      gas: '90000',
      gas_price: '9',
      to: '0xbee9422f1b65687d0cb923bbd1fc5ccb9307e861',
      token_decimals: '18',
      token_name: 'Shopiblock',
      token_supply: '1000000000',
      token_symbol: 'SHB',
      txid: '0x8ab5543bc103bdd908681da501d03c2c495afd7fde5ed104935ba97b1550d65b',
      type: 'ERC20',
    },
    required: [
      'txid',
      'block_number',
      'contract_address',
      'type',
      'token_name',
      'token_symbol',
      'token_decimals',
      'token_supply',
      'gas',
      'gas_price',
      'from',
      'to',
      'amount',
    ],
    title: 'Transaction',
  })
  .openapi('Transaction')

const ClearAddressSchema = z
  .object({
    amount: z.number(),
    ethereumaddress: z.string(),
    gas: z.number(),
    newaddress: z.string(),
    ok: z.boolean(),
    total: z.string(),
    txid: z.string(),
  })
  .openapi({
    example: {
      amount: 0.02300916225,
      ethereumaddress: '0x3a32c4c31fe8d2a89976af5d284a94a040b44aa8',
      gas: 0.0025199999999999997,
      newaddress: '0xef4943d727e34280a2efa0b3352dfd61f508ee48',
      ok: true,
      total: '0.025529162250000000',
      txid: '0xcff06775098019d18f7bab6a350c18e86f89399db63cbce5269104e6c9a79499',
    },
    required: ['ok', 'txid', 'ethereumaddress', 'newaddress', 'amount', 'gas', 'total'],
    title: 'clearAddress',
  })
  .openapi('ClearAddress')

const ClearAddressRequestSchema = z
  .object({ ethereumaddress: z.string(), newaddress: z.string(), password: z.string() })
  .openapi({
    example: {
      ethereumaddress: '0x3a32c4c31fe8d2a89976af5d284a94a040b44aa8',
      newaddress: '0xef4943d727e34280a2efa0b3352dfd61f508ee48',
      password: 'padN39QkRA2hJ',
    },
    required: ['ethereumaddress', 'newaddress', 'password'],
    title: 'clearAddressRequest',
  })
  .openapi('ClearAddressRequest')

const DeleteAddressSchema = z
  .object({ deleted: z.boolean(), ethereumaddress: z.string(), ok: z.boolean() })
  .openapi({
    example: {
      deleted: true,
      ethereumaddress: '0x71892889ed4d79d88ab6ea3783b571b8ece9bef4',
      ok: true,
    },
    required: ['ok', 'ethereumaddress', 'deleted'],
    title: 'deleteAddress',
  })
  .openapi('DeleteAddress')

const DeleteAddressRequestSchema = z
  .object({ ethereumaddress: z.string(), password: z.string() })
  .openapi({
    example: {
      ethereumaddress: '0x71892689ed0d79d88ab6ea3783b571b8ece9bee3',
      password: 'padN39QkRA2hJ',
    },
    required: ['ethereumaddress', 'password'],
    title: 'deleteAddressRequest',
  })
  .openapi('DeleteAddressRequest')

const ExportAddressSchema = z
  .object({ content: z.string(), filename: z.string(), ok: z.boolean() })
  .openapi({
    example: {
      content:
        "{'version':3,'id':'85b790ff-408e-42b8-b123-bec9523964dc','address':'71892889ed4d79d88ab6ea3783b571b8ece9bef4','crypto':{'ciphertext':'9d74262517b984f9b0560b8f23b5e3340f7be0f56b70cd91ff445dcaf5b1968f','cipherparams':{'iv':'76e6f2497b9f2a8e024fc752a5418a6d'},'cipher':'aes-128-ctr','kdf':'scrypt','kdfparams':{'dklen':32,'salt':'d11d996a7cc4bfad730d4c9b9057eff2c0fb3940b5bfc59db62ae218c14a54f4','n':131072,'r':8,'p':1},'mac':'dcc342bbbbb8eea97c89b47bafc23de568fc1a48e0bd21ae8d776a95c4704ac9'}}",
      filename: 'UTC--2020-09-19T10-42-26.196Z--71892889ed4d79d88ab6ea3783b571b8ece9bef4',
      ok: true,
    },
    required: ['ok', 'filename', 'content'],
    title: 'exportAddress',
  })
  .openapi('ExportAddress')

const ExportAddressRequestSchema = z
  .object({ ethaddress: z.string(), password: z.string() })
  .openapi({
    example: {
      ethaddress: '0x71892889ed4d79d88ab6ea3783b571b8ece9bef4',
      password: 'padN39QkRA2hJ',
    },
    required: ['ethaddress', 'password'],
    title: 'exportAddressRequest',
  })
  .openapi('ExportAddressRequest')

const GetBlockSchema = z
  .object({
    block_number: z.string(),
    difficulty: z.string(),
    gas_limit: z.string(),
    gas_used: z.string(),
    hash: z.string(),
    miner: z.string(),
    ok: z.boolean(),
    parent_hash: z.string(),
    size_in_bytes: z.string(),
    time_stamp: z.string(),
    transactions_count: z.string(),
  })
  .openapi({
    example: {
      block_number: '5000000',
      difficulty: '2546613975853490',
      gas_limit: '8000029',
      gas_used: '7994053',
      hash: '0x7d5a4369273c723454ac137f48a4f142b097aa2779464e6505f1b1c5e37b5382',
      miner: '0xb2930B35844a230f00E51431aCAe96Fe543a0347',
      ok: true,
      parent_hash: '0xcae4df80f5862e4321690857eded0d8a40136dafb8155453920bade5bd0c46c0',
      size_in_bytes: '24017',
      time_stamp: '2018-01-30 14:41:33',
      transactions_count: '109',
    },
    required: [
      'ok',
      'hash',
      'block_number',
      'parent_hash',
      'miner',
      'difficulty',
      'size_in_bytes',
      'gas_limit',
      'gas_used',
      'time_stamp',
      'transactions_count',
    ],
    title: 'getBlock',
  })
  .openapi('GetBlock')

const GetBlockRequestSchema = z
  .object({ block: z.string() })
  .openapi({ example: { block: '5000000' }, required: ['block'], title: 'getBlockRequest' })
  .openapi('GetBlockRequest')

const GetEthereumBalanceSchema = z
  .object({ balance: z.number(), ethereumaddress: z.string(), ok: z.boolean() })
  .openapi({
    example: {
      balance: 0.009956019840987648,
      ethereumaddress: '0xa1f36016221d48ce7f15cde7b826a4fbe09bacce',
      ok: true,
    },
    required: ['ok', 'ethereumaddress', 'balance'],
    title: 'getEthereumBalance',
  })
  .openapi('GetEthereumBalance')

const GetEthereumBalanceRequestSchema = z
  .object({ ethereumaddress: z.string() })
  .openapi({
    example: { ethereumaddress: '0xa1f36016221d48ce7f15cde7b826a4fbe09bacce' },
    required: ['ethereumaddress'],
    title: 'getEthereumBalanceRequest',
  })
  .openapi('GetEthereumBalanceRequest')

const GetExchangeRateSchema = z
  .object({ currency: z.string(), ok: z.boolean(), rate: z.number() })
  .openapi({
    example: { currency: 'eur', ok: true, rate: 321.2 },
    required: ['ok', 'currency', 'rate'],
    title: 'getExchangeRate',
  })
  .openapi('GetExchangeRate')

const GetExchangeRateRequestSchema = z
  .object({ currency: z.string() })
  .openapi({
    example: { currency: 'eur' },
    required: ['currency'],
    title: 'getExchangeRateRequest',
  })
  .openapi('GetExchangeRateRequest')

const GetGasPriceSchema = z
  .object({ gasprice: z.int32(), ok: z.boolean() })
  .openapi({
    example: { gasprice: 70, ok: true },
    required: ['ok', 'gasprice'],
    title: 'getGasPrice',
  })
  .openapi('GetGasPrice')

const GetLastBlockNumberSchema = z
  .object({ blocknumber: z.int32(), ok: z.boolean() })
  .openapi({
    example: { blocknumber: 10892021, ok: true },
    required: ['ok', 'blocknumber'],
    title: 'getLastBlockNumber',
  })
  .openapi('GetLastBlockNumber')

const GetTokenSchema = z
  .object({
    contractaddress: z.string(),
    decimals: z.int32(),
    name: z.string(),
    ok: z.boolean(),
    supply: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    symbol: z.string(),
  })
  .openapi({
    example: {
      contractaddress: '0x5b86a33f0c232fe909eb4602a9d039072869d915',
      decimals: 2,
      name: 'Bitfranken',
      ok: true,
      supply: 76507131570,
      symbol: 'BIFRA',
    },
    required: ['ok', 'contractaddress', 'name', 'symbol', 'decimals', 'supply'],
    title: 'getToken',
  })
  .openapi('GetToken')

const GetTokenBalanceSchema = z
  .object({
    balance: z.int32(),
    contractaddress: z.string(),
    ethereumaddress: z.string(),
    ok: z.boolean(),
  })
  .openapi({
    example: {
      balance: 9980,
      contractaddress: '0x5b86a33f0c232fe909eb4602a9d039072869d915',
      ethereumaddress: '0xa1f36016221d48ce7f15cde7b826a4fbe09bacce',
      ok: true,
    },
    required: ['ok', 'contractaddress', 'ethereumaddress', 'balance'],
    title: 'getTokenBalance',
  })
  .openapi('GetTokenBalance')

const GetTokenBalanceRequestSchema = z
  .object({ contractaddress: z.string(), ethereumaddress: z.string() })
  .openapi({
    example: {
      contractaddress: '0x5b86a33f0c232fe909eb4602a9d039072869d915',
      ethereumaddress: '0xa1f36016221d48ce7f15cde7b826a4fbe09bacce',
    },
    required: ['contractaddress', 'ethereumaddress'],
    title: 'getTokenBalanceRequest',
  })
  .openapi('GetTokenBalanceRequest')

const GetTokenRequestSchema = z
  .object({ contractaddress: z.string() })
  .openapi({
    example: { contractaddress: '0x5b86a33f0c232fe909eb4602a9d039072869d915' },
    required: ['contractaddress'],
    title: 'getTokenRequest',
  })
  .openapi('GetTokenRequest')

const GetTransactionsSchema = z
  .object({ ok: z.boolean(), transactions: z.array(TransactionSchema) })
  .openapi({
    example: {
      ok: true,
      transactions: [
        {
          amount: '10',
          block_number: '6432816',
          contract_address: '0x9E2B71e87d9304c4773674584EB9D0c838643568',
          from: '0x8dF9654c7D81c850FDd35D93292B2fC60e666bF0',
          gas: '90000',
          gas_price: '9',
          to: '0xbee9422f1b65687d0cb923bbd1fc5ccb9307e861',
          token_decimals: '18',
          token_name: 'Shopiblock',
          token_supply: '1000000000',
          token_symbol: 'SHB',
          txid: '0x8ab5543bc103bdd908681da501d03c2c495afd7fde5ed104935ba97b1550d65b',
          type: 'ERC20',
        },
      ],
    },
    required: ['ok', 'transactions'],
    title: 'getTransactions',
  })
  .openapi('GetTransactions')

const GetTransactionsRequestSchema = z
  .object({ txid: z.string() })
  .openapi({
    example: { txid: '0x8ab5543bc103bdd908681da501d03c2c495afd7fde5ed104935ba97b1550d65b' },
    required: ['txid'],
    title: 'getTransactionsRequest',
  })
  .openapi('GetTransactionsRequest')

const ImportAddressSchema = z
  .object({ ethaddress: z.string(), filename: z.string(), ok: z.boolean() })
  .openapi({
    example: {
      ethaddress: '0x71892889ed4d79d88ab6ea3783b571b8ece9bef4',
      filename: 'UTC--2020-09-19T10-42-26.196Z--71892889ed4d79d88ab6ea3783b571b8ece9bef4',
      ok: true,
    },
    required: ['ok', 'ethaddress', 'filename'],
    title: 'importAddress',
  })
  .openapi('ImportAddress')

const ImportAddressRequestSchema = z
  .object({ content: ContentSchema, filename: z.string(), password: z.string() })
  .openapi({
    example: {
      content: {
        address: '71892889ed4d79d88ab6ea3783b571b8ece9bef4',
        crypto: {
          cipher: 'aes-128-ctr',
          cipherparams: { iv: '76e6f2497b9f2a8e024fc752a5418a6d' },
          ciphertext: '9d74262517b984f9b0560b8f23b5e3340f7be0f56b70cd91ff445dcaf5b1968f',
          kdf: 'scrypt',
          kdfparams: {
            dklen: 32,
            n: 131072,
            p: 1,
            r: 8,
            salt: 'd11d996a7cc4bfad730d4c9b9057eff2c0fb3940b5bfc59db62ae218c14a54f4',
          },
          mac: 'dcc342bbbbb8eea97c89b47bafc23de568fc1a48e0bd21ae8d776a95c4704ac9',
        },
        id: '85b790ff-408e-42b8-b123-bec9523964dc',
        version: 3,
      },
      filename: 'UTC--2020-09-19T10-42-26.196Z--71892889ed4d79d88ab6ea3783b571b8ece9bef4',
      password: 'padN39QkRA2hJ',
    },
    required: ['filename', 'content', 'password'],
    title: 'importAddressRequest',
  })
  .openapi('ImportAddressRequest')

const ListAddressesSchema = z
  .object({ addresses: z.array(AddressSchema), ok: z.boolean() })
  .openapi({
    example: {
      addresses: [{ ethereumaddress: '0x71892889ed4d79d88ab6ea3783b571b8ece9bef4' }],
      ok: true,
    },
    required: ['ok', 'addresses'],
    title: 'listAddresses',
  })
  .openapi('ListAddresses')

const ListFailedIPNsSchema = z
  .object({ failed_ipns: z.array(FailedIpnSchema), ok: z.boolean() })
  .openapi({
    example: {
      failed_ipns: [
        {
          action: 'deposit',
          amount: '496588.7771277759',
          contractaddress: '0x514910771af9ca656af840dff83e8264ecf986ca',
          ethereumaddress: '0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974',
          id: '17766',
          timestamp: '2020-09-19 14:33:01',
          url: 'https://yoururl.com/ipnreceiver.php',
        },
      ],
      ok: true,
    },
    required: ['ok', 'failed_ipns'],
    title: 'listFailedIPNs',
  })
  .openapi('ListFailedIPNs')

const ListSubscribedAddressesSchema = z
  .object({ ipns: z.array(IpnSchema), ok: z.boolean() })
  .openapi({
    example: {
      ipns: [
        {
          contractaddress: '0x514910771af9ca656af840dff83e8264ecf986ca',
          ethereumaddress: '0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974',
          url: 'https://yoururl.com/ipnreceiver.php',
        },
      ],
      ok: true,
    },
    required: ['ok', 'ipns'],
    title: 'listSubscribedAddresses',
  })
  .openapi('ListSubscribedAddresses')

const NewAddressSchema = z
  .object({ ethereumaddress: z.string(), ok: z.boolean(), password: z.string() })
  .openapi({
    example: {
      ethereumaddress: '0x71892889ed4d79d88ab6ea3783b571b8ece9bef4',
      ok: true,
      password: 'padN39QkRA2hJ',
    },
    required: ['ok', 'ethereumaddress', 'password'],
    title: 'newAddress',
  })
  .openapi('NewAddress')

const NewAddressRequestSchema = z
  .object({ password: z.string() })
  .openapi({
    example: { password: 'padN39QkRA2hJ' },
    required: ['password'],
    title: 'newAddressRequest',
  })
  .openapi('NewAddressRequest')

const ResendFailedIPNSchema = z
  .object({ id: z.int32(), ok: z.boolean() })
  .openapi({ example: { id: 17766, ok: true }, required: ['ok', 'id'], title: 'resendFailedIPN' })
  .openapi('ResendFailedIPN')

const ResendFailedIPNRequestSchema = z
  .object({ id: z.int32() })
  .openapi({ example: { id: 17766 }, required: ['id'], title: 'resendFailedIPNRequest' })
  .openapi('ResendFailedIPNRequest')

const SendEthereumSchema = z
  .object({
    amount: z.string(),
    from: z.string(),
    ok: z.boolean(),
    to: z.string(),
    txid: z.string(),
  })
  .openapi({
    example: {
      amount: '0.010000000000000000',
      from: '0x3a32c4c31fe8d2a89976af5d284a94a040b44aa8',
      ok: true,
      to: '0xef4943d727e34280a2efa0b3352dfd61f508ee48',
      txid: '0xcff06775098019d18f7bab6a350c18e86f89399db63cbce5269104e6c9a79499',
    },
    required: ['ok', 'txid', 'from', 'to', 'amount'],
    title: 'sendEthereum',
  })
  .openapi('SendEthereum')

const SendEthereumRequestSchema = z
  .object({ amount: z.number(), from: z.string(), password: z.string(), to: z.string() })
  .openapi({
    example: {
      amount: 0.01,
      from: '0x3a32c4c31fe8d2a89976af5d284a94a040b44aa8',
      password: 'padN39QkRA2hJ',
      to: '0xef4943d727e34280a2efa0b3352dfd61f508ee48',
    },
    required: ['from', 'to', 'password', 'amount'],
    title: 'sendEthereumRequest',
  })
  .openapi('SendEthereumRequest')

const SendTokenSchema = z
  .object({
    amount: z.int32(),
    contractaddress: z.string(),
    from: z.string(),
    identifier: z.string(),
    ok: z.boolean(),
    to: z.string(),
    txid: z.string(),
  })
  .openapi({
    example: {
      amount: 5,
      contractaddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
      from: '0x3a32c4c31fe8d2a89976af5d284a94a040b44aa8',
      identifier: 'CN562',
      ok: true,
      to: '0xef4943d727e34280a2efa0b3352dfd61f508ee48',
      txid: '0xcff06775098019d18f7bab6a350c18e86f89399db63cbce5269104e6c9a79499',
    },
    required: ['ok', 'identifier', 'txid', 'contractaddress', 'from', 'to', 'amount'],
    title: 'sendToken',
  })
  .openapi('SendToken')

const SendTokenRequestSchema = z
  .object({
    amount: z.int32(),
    contractaddress: z.string(),
    from: z.string(),
    identifier: z.string(),
    password: z.string(),
    to: z.string(),
  })
  .openapi({
    example: {
      amount: 5,
      contractaddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
      from: '0x3a32c4c31fe8d2a89976af5d284a94a040b44aa8',
      identifier: 'CN562',
      password: 'padN39QkRA2hJ',
      to: '0xef4943d727e34280a2efa0b3352dfd61f508ee48',
    },
    required: ['contractaddress', 'from', 'to', 'password', 'amount', 'identifier'],
    title: 'sendTokenRequest',
  })
  .openapi('SendTokenRequest')

const SubscribeAddressSchema = z
  .object({
    contractaddress: z.string(),
    ethereumaddress: z.string(),
    ok: z.boolean(),
    url: z.string(),
  })
  .openapi({
    example: {
      contractaddress: '0x514910771af9ca656af840dff83e8264ecf986ca',
      ethereumaddress: '0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974',
      ok: true,
      url: 'https://yoururl.com/ipnreceiver.php',
    },
    required: ['ok', 'ethereumaddress', 'contractaddress', 'url'],
    title: 'subscribeAddress',
  })
  .openapi('SubscribeAddress')

const SubscribeAddressRequestSchema = z
  .object({ contractaddress: z.string(), ethereumaddress: z.string(), url: z.string() })
  .openapi({
    example: {
      contractaddress: '0x514910771af9ca656af840dff83e8264ecf986ca',
      ethereumaddress: '0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974',
      url: 'https://yoururl.com/ipnreceiver.php',
    },
    required: ['ethereumaddress', 'contractaddress', 'url'],
    title: 'subscribeAddressRequest',
  })
  .openapi('SubscribeAddressRequest')

const UnsubscribeAddressSchema = z
  .object({
    contractaddress: z.string(),
    deleted: z.boolean(),
    ethereumaddress: z.string(),
    ok: z.boolean(),
    url: z.string(),
  })
  .openapi({
    example: {
      contractaddress: '0x514910771af9ca656af840dff83e8264ecf986ca',
      deleted: true,
      ethereumaddress: '0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974',
      ok: true,
      url: 'https://yoururl.com/ipnreceiver.php',
    },
    required: ['ok', 'ethereumaddress', 'contractaddress', 'url', 'deleted'],
    title: 'unsubscribeAddress',
  })
  .openapi('UnsubscribeAddress')

const UnsubscribeAddressRequestSchema = z
  .object({ contractaddress: z.string(), ethereumaddress: z.string(), url: z.string() })
  .openapi({
    example: {
      contractaddress: '0x514910771af9ca656af840dff83e8264ecf986ca',
      ethereumaddress: '0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974',
      url: 'https://yoururl.com/ipnreceiver.php',
    },
    required: ['ethereumaddress', 'contractaddress', 'url'],
    title: 'unsubscribeAddressRequest',
  })
  .openapi('UnsubscribeAddressRequest')

export const postClearAddressRoute = createRoute({
  method: 'post',
  path: '/clearAddress',
  tags: ['Transaction Requests'],
  summary: 'clearAddress',
  description: 'Sends all available ethereum funds of an address to a specified receiver address.',
  operationId: 'clearAddress',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            description: 'API Key',
            in: 'header',
            name: 'Authorization',
            required: true,
            schema: { example: 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m', type: 'string' },
            style: 'simple',
          },
          example: 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: ClearAddressRequestSchema,
          example: {
            ethereumaddress: '0x3a32c4c31fe8d2a89976af5d284a94a040b44aa8',
            newaddress: '0xef4943d727e34280a2efa0b3352dfd61f508ee48',
            password: 'padN39QkRA2hJ',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: ClearAddressSchema,
          example: {
            amount: 0.02300916225,
            ethereumaddress: '0x3a32c4c31fe8d2a89976af5d284a94a040b44aa8',
            gas: 0.0025199999999999997,
            newaddress: '0xef4943d727e34280a2efa0b3352dfd61f508ee48',
            ok: true,
            total: '0.025529162250000000',
            txid: '0xcff06775098019d18f7bab6a350c18e86f89399db63cbce5269104e6c9a79499',
          },
        },
      },
      headers: z.object({}),
    },
  },
  security: [],
})

export const postDeleteAddressRoute = createRoute({
  method: 'post',
  path: '/deleteAddress',
  tags: ['Address Requests'],
  summary: 'deleteAddress',
  description: 'Deletes an existing ethereum address. Be careful when using this function.',
  operationId: 'deleteAddress',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            description: 'API Key',
            in: 'header',
            name: 'Authorization',
            required: true,
            schema: { example: 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m', type: 'string' },
            style: 'simple',
          },
          example: 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: DeleteAddressRequestSchema,
          example: {
            ethereumaddress: '0x71892689ed0d79d88ab6ea3783b571b8ece9bee3',
            password: 'padN39QkRA2hJ',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: DeleteAddressSchema,
          example: {
            deleted: true,
            ethereumaddress: '0x71892889ed4d79d88ab6ea3783b571b8ece9bef4',
            ok: true,
          },
        },
      },
      headers: z.object({}),
    },
  },
  security: [],
})

export const postExportAddressRoute = createRoute({
  method: 'post',
  path: '/exportAddress',
  tags: ['Address Requests'],
  summary: 'exportAddress',
  description: 'Returns all ethereum addresses created with an account.',
  operationId: 'exportAddress',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            description: 'API Key',
            in: 'header',
            name: 'Authorization',
            required: true,
            schema: { example: 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m', type: 'string' },
            style: 'simple',
          },
          example: 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: ExportAddressRequestSchema,
          example: {
            ethaddress: '0x71892889ed4d79d88ab6ea3783b571b8ece9bef4',
            password: 'padN39QkRA2hJ',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: ExportAddressSchema,
          example: {
            content:
              "{'version':3,'id':'85b790ff-408e-42b8-b123-bec9523964dc','address':'71892889ed4d79d88ab6ea3783b571b8ece9bef4','crypto':{'ciphertext':'9d74262517b984f9b0560b8f23b5e3340f7be0f56b70cd91ff445dcaf5b1968f','cipherparams':{'iv':'76e6f2497b9f2a8e024fc752a5418a6d'},'cipher':'aes-128-ctr','kdf':'scrypt','kdfparams':{'dklen':32,'salt':'d11d996a7cc4bfad730d4c9b9057eff2c0fb3940b5bfc59db62ae218c14a54f4','n':131072,'r':8,'p':1},'mac':'dcc342bbbbb8eea97c89b47bafc23de568fc1a48e0bd21ae8d776a95c4704ac9'}}",
            filename: 'UTC--2020-09-19T10-42-26.196Z--71892889ed4d79d88ab6ea3783b571b8ece9bef4',
            ok: true,
          },
        },
      },
      headers: z.object({}),
    },
  },
  security: [],
})

export const postGetBlockRoute = createRoute({
  method: 'post',
  path: '/getBlock',
  tags: ['Info Requests'],
  summary: 'getBlock',
  description: 'Returns information of an ethereum block with or without transactions',
  operationId: 'getBlock',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            description: 'API Key',
            in: 'header',
            name: 'Authorization',
            required: true,
            schema: { example: 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m', type: 'string' },
            style: 'simple',
          },
          example: 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m',
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GetBlockRequestSchema, example: { block: '5000000' } },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: GetBlockSchema,
          example: {
            block_number: '5000000',
            difficulty: '2546613975853490',
            gas_limit: '8000029',
            gas_used: '7994053',
            hash: '0x7d5a4369273c723454ac137f48a4f142b097aa2779464e6505f1b1c5e37b5382',
            miner: '0xb2930B35844a230f00E51431aCAe96Fe543a0347',
            ok: true,
            parent_hash: '0xcae4df80f5862e4321690857eded0d8a40136dafb8155453920bade5bd0c46c0',
            size_in_bytes: '24017',
            time_stamp: '2018-01-30 14:41:33',
            transactions_count: '109',
          },
        },
      },
      headers: z.object({}),
    },
  },
  security: [],
})

export const postGetEthereumBalanceRoute = createRoute({
  method: 'post',
  path: '/getEthereumBalance',
  tags: ['Info Requests'],
  summary: 'getEthereumBalance',
  description: 'Returns the ethereum balance of a given address.',
  operationId: 'getEthereumBalance',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            description: 'API Key',
            in: 'header',
            name: 'Authorization',
            required: true,
            schema: { example: 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m', type: 'string' },
            style: 'simple',
          },
          example: 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GetEthereumBalanceRequestSchema,
          example: { ethereumaddress: '0xa1f36016221d48ce7f15cde7b826a4fbe09bacce' },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: GetEthereumBalanceSchema,
          example: {
            balance: 0.009956019840987648,
            ethereumaddress: '0xa1f36016221d48ce7f15cde7b826a4fbe09bacce',
            ok: true,
          },
        },
      },
      headers: z.object({}),
    },
  },
  security: [],
})

export const postGetExchangeRateRoute = createRoute({
  method: 'post',
  path: '/getExchangeRate',
  tags: ['Info Requests'],
  summary: 'getExchangeRate',
  description: 'Returns the current Ethereum price in Euro or US Dollar.',
  operationId: 'getExchangeRate',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            description: 'API Key',
            in: 'header',
            name: 'Authorization',
            required: true,
            schema: { example: 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m', type: 'string' },
            style: 'simple',
          },
          example: 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m',
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GetExchangeRateRequestSchema, example: { currency: 'eur' } },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: GetExchangeRateSchema,
          example: { currency: 'eur', ok: true, rate: 321.2 },
        },
      },
      headers: z.object({}),
    },
  },
  security: [],
})

export const postGetGasPriceRoute = createRoute({
  method: 'post',
  path: '/getGasPrice',
  tags: ['Info Requests'],
  summary: 'getGasPrice',
  description: 'Returns the current gas price in GWEI.',
  operationId: 'getGasPrice',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Authorization: z
        .string()
        .openapi({
          param: {
            description: 'API Key',
            in: 'header',
            name: 'Authorization',
            required: true,
            schema: { example: 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m', type: 'string' },
            style: 'simple',
          },
          example: 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: GetGasPriceSchema, example: { gasprice: 70, ok: true } },
      },
      headers: z.object({}),
    },
  },
  security: [],
})

export const postGetLastBlockNumberRoute = createRoute({
  method: 'post',
  path: '/getLastBlockNumber',
  tags: ['Info Requests'],
  summary: 'getLastBlockNumber',
  description: 'Returns the block number of the last mined ethereum block.',
  operationId: 'getLastBlockNumber',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Authorization: z
        .string()
        .openapi({
          param: {
            description: 'API Key',
            in: 'header',
            name: 'Authorization',
            required: true,
            schema: { example: 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m', type: 'string' },
            style: 'simple',
          },
          example: 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: GetLastBlockNumberSchema,
          example: { blocknumber: 10892021, ok: true },
        },
      },
      headers: z.object({}),
    },
  },
  security: [],
})

export const postGetTokenRoute = createRoute({
  method: 'post',
  path: '/getToken',
  tags: ['Info Requests'],
  summary: 'getToken',
  description:
    'Returns information about a specific ERC20 token like name, symbol, decimal places and total supply.',
  operationId: 'getToken',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            description: 'API Key',
            in: 'header',
            name: 'Authorization',
            required: true,
            schema: { example: 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m', type: 'string' },
            style: 'simple',
          },
          example: 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GetTokenRequestSchema,
          example: { contractaddress: '0x5b86a33f0c232fe909eb4602a9d039072869d915' },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: GetTokenSchema,
          example: {
            contractaddress: '0x5b86a33f0c232fe909eb4602a9d039072869d915',
            decimals: 2,
            name: 'Bitfranken',
            ok: true,
            supply: 76507131570,
            symbol: 'BIFRA',
          },
        },
      },
      headers: z.object({}),
    },
  },
  security: [],
})

export const postGetTokenBalanceRoute = createRoute({
  method: 'post',
  path: '/getTokenBalance',
  tags: ['Info Requests'],
  summary: 'getTokenBalance',
  description: 'Returns the token balance of a given address.',
  operationId: 'getTokenBalance',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            description: 'API Key',
            in: 'header',
            name: 'Authorization',
            required: true,
            schema: { example: 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m', type: 'string' },
            style: 'simple',
          },
          example: 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GetTokenBalanceRequestSchema,
          example: {
            contractaddress: '0x5b86a33f0c232fe909eb4602a9d039072869d915',
            ethereumaddress: '0xa1f36016221d48ce7f15cde7b826a4fbe09bacce',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: GetTokenBalanceSchema,
          example: {
            balance: 9980,
            contractaddress: '0x5b86a33f0c232fe909eb4602a9d039072869d915',
            ethereumaddress: '0xa1f36016221d48ce7f15cde7b826a4fbe09bacce',
            ok: true,
          },
        },
      },
      headers: z.object({}),
    },
  },
  security: [],
})

export const postGetTransactionsRoute = createRoute({
  method: 'post',
  path: '/getTransactions',
  tags: ['Info Requests'],
  summary: 'getTransactions',
  description:
    'Returns information like confirmations, token contract address, amount, gas price and more of a given transaction.',
  operationId: 'getTransactions',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            description: 'API Key',
            in: 'header',
            name: 'Authorization',
            required: true,
            schema: { example: 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m', type: 'string' },
            style: 'simple',
          },
          example: 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GetTransactionsRequestSchema,
          example: { txid: '0x8ab5543bc103bdd908681da501d03c2c495afd7fde5ed104935ba97b1550d65b' },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: GetTransactionsSchema,
          example: {
            ok: true,
            transactions: [
              {
                amount: '10',
                block_number: '6432816',
                contract_address: '0x9E2B71e87d9304c4773674584EB9D0c838643568',
                from: '0x8dF9654c7D81c850FDd35D93292B2fC60e666bF0',
                gas: '90000',
                gas_price: '9',
                to: '0xbee9422f1b65687d0cb923bbd1fc5ccb9307e861',
                token_decimals: '18',
                token_name: 'Shopiblock',
                token_supply: '1000000000',
                token_symbol: 'SHB',
                txid: '0x8ab5543bc103bdd908681da501d03c2c495afd7fde5ed104935ba97b1550d65b',
                type: 'ERC20',
              },
            ],
          },
        },
      },
      headers: z.object({}),
    },
  },
  security: [],
})

export const postImportAddressRoute = createRoute({
  method: 'post',
  path: '/importAddress',
  tags: ['Address Requests'],
  summary: 'importAddress',
  description: 'Returns all ethereum addresses created with an account.',
  operationId: 'importAddress',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            description: 'API Key',
            in: 'header',
            name: 'Authorization',
            required: true,
            schema: { example: 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m', type: 'string' },
            style: 'simple',
          },
          example: 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: ImportAddressRequestSchema,
          example: {
            content: {
              address: '71892889ed4d79d88ab6ea3783b571b8ece9bef4',
              crypto: {
                cipher: 'aes-128-ctr',
                cipherparams: { iv: '76e6f2497b9f2a8e024fc752a5418a6d' },
                ciphertext: '9d74262517b984f9b0560b8f23b5e3340f7be0f56b70cd91ff445dcaf5b1968f',
                kdf: 'scrypt',
                kdfparams: {
                  dklen: 32,
                  n: 131072,
                  p: 1,
                  r: 8,
                  salt: 'd11d996a7cc4bfad730d4c9b9057eff2c0fb3940b5bfc59db62ae218c14a54f4',
                },
                mac: 'dcc342bbbbb8eea97c89b47bafc23de568fc1a48e0bd21ae8d776a95c4704ac9',
              },
              id: '85b790ff-408e-42b8-b123-bec9523964dc',
              version: 3,
            },
            filename: 'UTC--2020-09-19T10-42-26.196Z--71892889ed4d79d88ab6ea3783b571b8ece9bef4',
            password: 'padN39QkRA2hJ',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: ImportAddressSchema,
          example: {
            ethaddress: '0x71892889ed4d79d88ab6ea3783b571b8ece9bef4',
            filename: 'UTC--2020-09-19T10-42-26.196Z--71892889ed4d79d88ab6ea3783b571b8ece9bef4',
            ok: true,
          },
        },
      },
      headers: z.object({}),
    },
  },
  security: [],
})

export const postListAddressesRoute = createRoute({
  method: 'post',
  path: '/listAddresses',
  tags: ['Address Requests'],
  summary: 'listAddresses',
  description: 'Returns all ethereum addresses created with an account.',
  operationId: 'listAddresses',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Authorization: z
        .string()
        .openapi({
          param: {
            description: 'API Key',
            in: 'header',
            name: 'Authorization',
            required: true,
            schema: { example: 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m', type: 'string' },
            style: 'simple',
          },
          example: 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: ListAddressesSchema,
          example: {
            addresses: [{ ethereumaddress: '0x71892889ed4d79d88ab6ea3783b571b8ece9bef4' }],
            ok: true,
          },
        },
      },
      headers: z.object({}),
    },
  },
  security: [],
})

export const postListFailedIPNsRoute = createRoute({
  method: 'post',
  path: '/listFailedIPNs',
  tags: ['Subscription/IPN Requests'],
  summary: 'listFailedIPNs',
  description: 'Returns all subscriptions/IPNs created with an account.',
  operationId: 'listFailedIPNs',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Authorization: z
        .string()
        .openapi({
          param: {
            description: 'API Key',
            in: 'header',
            name: 'Authorization',
            required: true,
            schema: { example: 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m', type: 'string' },
            style: 'simple',
          },
          example: 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: ListFailedIPNsSchema,
          example: {
            failed_ipns: [
              {
                action: 'deposit',
                amount: '496588.7771277759',
                contractaddress: '0x514910771af9ca656af840dff83e8264ecf986ca',
                ethereumaddress: '0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974',
                id: '17766',
                timestamp: '2020-09-19 14:33:01',
                url: 'https://yoururl.com/ipnreceiver.php',
              },
            ],
            ok: true,
          },
        },
      },
      headers: z.object({}),
    },
  },
  security: [],
})

export const postListSubscribedAddressesRoute = createRoute({
  method: 'post',
  path: '/listSubscribedAddresses',
  tags: ['Subscription/IPN Requests'],
  summary: 'listSubscribedAddresses',
  description: 'Returns all subscriptions/IPNs created with an account.',
  operationId: 'listSubscribedAddresses',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Authorization: z
        .string()
        .openapi({
          param: {
            description: 'API Key',
            in: 'header',
            name: 'Authorization',
            required: true,
            schema: { example: 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m', type: 'string' },
            style: 'simple',
          },
          example: 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: ListSubscribedAddressesSchema,
          example: {
            ipns: [
              {
                contractaddress: '0x514910771af9ca656af840dff83e8264ecf986ca',
                ethereumaddress: '0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974',
                url: 'https://yoururl.com/ipnreceiver.php',
              },
            ],
            ok: true,
          },
        },
      },
      headers: z.object({}),
    },
  },
  security: [],
})

export const postNewAddressRoute = createRoute({
  method: 'post',
  path: '/newAddress',
  tags: ['Address Requests'],
  summary: 'newAddress',
  description:
    "Generates a new ethereum addresses you can use to send or receive funds. Do not lose the password! We can't restore access to an address if you lose it.",
  operationId: 'newAddress',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            description: 'API Key',
            in: 'header',
            name: 'Authorization',
            required: true,
            schema: { example: 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m', type: 'string' },
            style: 'simple',
          },
          example: 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: NewAddressRequestSchema,
          example: { password: 'padN39QkRA2hJ' },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: NewAddressSchema,
          example: {
            ethereumaddress: '0x71892889ed4d79d88ab6ea3783b571b8ece9bef4',
            ok: true,
            password: 'padN39QkRA2hJ',
          },
        },
      },
      headers: z.object({}),
    },
  },
  security: [],
})

export const postResendFailedIPNRoute = createRoute({
  method: 'post',
  path: '/resendFailedIPN',
  tags: ['Subscription/IPN Requests'],
  summary: 'resendFailedIPN',
  description: 'Returns all subscriptions/IPNs created with an account.',
  operationId: 'resendFailedIPN',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            description: 'API Key',
            in: 'header',
            name: 'Authorization',
            required: true,
            schema: { example: 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m', type: 'string' },
            style: 'simple',
          },
          example: 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m',
        }),
    }),
    body: {
      content: {
        'application/json': { schema: ResendFailedIPNRequestSchema, example: { id: 17766 } },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: ResendFailedIPNSchema, example: { id: 17766, ok: true } },
      },
      headers: z.object({}),
    },
  },
  security: [],
})

export const postSendEthereumRoute = createRoute({
  method: 'post',
  path: '/sendEthereum',
  tags: ['Transaction Requests'],
  summary: 'sendEthereum',
  description:
    'Sends ethereum from an address controlled by the account to a specified receiver address.',
  operationId: 'sendEthereum',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            description: 'API Key',
            in: 'header',
            name: 'Authorization',
            required: true,
            schema: { example: 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m', type: 'string' },
            style: 'simple',
          },
          example: 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: SendEthereumRequestSchema,
          example: {
            amount: 0.01,
            from: '0x3a32c4c31fe8d2a89976af5d284a94a040b44aa8',
            password: 'padN39QkRA2hJ',
            to: '0xef4943d727e34280a2efa0b3352dfd61f508ee48',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: SendEthereumSchema,
          example: {
            amount: '0.010000000000000000',
            from: '0x3a32c4c31fe8d2a89976af5d284a94a040b44aa8',
            ok: true,
            to: '0xef4943d727e34280a2efa0b3352dfd61f508ee48',
            txid: '0xcff06775098019d18f7bab6a350c18e86f89399db63cbce5269104e6c9a79499',
          },
        },
      },
      headers: z.object({}),
    },
  },
  security: [],
})

export const postSendTokenRoute = createRoute({
  method: 'post',
  path: '/sendToken',
  tags: ['Transaction Requests'],
  summary: 'sendToken',
  description:
    'Sends ERC20 tokens from an address controlled by the account to a specified receiver address. The token contract address is needed to specify the token. The use of the identifier parameter is recommend and awaits an unique string. Whenever a transaction is beeing sent, the identifier is checked and the transaction gets dropped if there is one with that identifier already.',
  operationId: 'sendToken',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            description: 'API Key',
            in: 'header',
            name: 'Authorization',
            required: true,
            schema: { example: 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m', type: 'string' },
            style: 'simple',
          },
          example: 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: SendTokenRequestSchema,
          example: {
            amount: 5,
            contractaddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
            from: '0x3a32c4c31fe8d2a89976af5d284a94a040b44aa8',
            identifier: 'CN562',
            password: 'padN39QkRA2hJ',
            to: '0xef4943d727e34280a2efa0b3352dfd61f508ee48',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: SendTokenSchema,
          example: {
            amount: 5,
            contractaddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
            from: '0x3a32c4c31fe8d2a89976af5d284a94a040b44aa8',
            identifier: 'CN562',
            ok: true,
            to: '0xef4943d727e34280a2efa0b3352dfd61f508ee48',
            txid: '0xcff06775098019d18f7bab6a350c18e86f89399db63cbce5269104e6c9a79499',
          },
        },
      },
      headers: z.object({}),
    },
  },
  security: [],
})

export const postSubscribeAddressRoute = createRoute({
  method: 'post',
  path: '/subscribeAddress',
  tags: ['Subscription/IPN Requests'],
  summary: 'subscribeAddress',
  description:
    "Creates a new subscription/IPN for the given address (and contractaddress). You will receive a notification to the given url every time a deposit is received. Unsubscribe the address before sending tokens/ETH from it or you won't get reliable notifications anymore.\r\n",
  operationId: 'subscribeAddress',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            description: 'API Key',
            in: 'header',
            name: 'Authorization',
            required: true,
            schema: { example: 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m', type: 'string' },
            style: 'simple',
          },
          example: 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: SubscribeAddressRequestSchema,
          example: {
            contractaddress: '0x514910771af9ca656af840dff83e8264ecf986ca',
            ethereumaddress: '0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974',
            url: 'https://yoururl.com/ipnreceiver.php',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: SubscribeAddressSchema,
          example: {
            contractaddress: '0x514910771af9ca656af840dff83e8264ecf986ca',
            ethereumaddress: '0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974',
            ok: true,
            url: 'https://yoururl.com/ipnreceiver.php',
          },
        },
      },
      headers: z.object({}),
    },
  },
  security: [],
})

export const postUnsubscribeAddressRoute = createRoute({
  method: 'post',
  path: '/unsubscribeAddress',
  tags: ['Subscription/IPN Requests'],
  summary: 'unsubscribeAddress',
  description: 'Deletes an existing subscription/IPN for the given address (and contractaddress).',
  operationId: 'unsubscribeAddress',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .openapi({
          param: {
            description: 'API Key',
            in: 'header',
            name: 'Authorization',
            required: true,
            schema: { example: 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m', type: 'string' },
            style: 'simple',
          },
          example: 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: UnsubscribeAddressRequestSchema,
          example: {
            contractaddress: '0x514910771af9ca656af840dff83e8264ecf986ca',
            ethereumaddress: '0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974',
            url: 'https://yoururl.com/ipnreceiver.php',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: UnsubscribeAddressSchema,
          example: {
            contractaddress: '0x514910771af9ca656af840dff83e8264ecf986ca',
            deleted: true,
            ethereumaddress: '0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974',
            ok: true,
            url: 'https://yoururl.com/ipnreceiver.php',
          },
        },
      },
      headers: z.object({}),
    },
  },
  security: [],
})
