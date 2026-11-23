import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiCreditcontrolAccounts(
  args: InferRequestType<typeof client.api.creditcontrol.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.creditcontrol.accounts.$get(args, options))
}

export async function postApiCreditcontrolAccounts(
  args: InferRequestType<typeof client.api.creditcontrol.accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.creditcontrol.accounts.$post(args, options))
}

export async function putApiCreditcontrolAccountsAccountId(
  args: InferRequestType<(typeof client.api.creditcontrol.accounts)[':accountId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.creditcontrol.accounts[':accountId'].$put(args, options))
}

export async function getApiCreditcontrolAccountsCreditAccountId(
  args: InferRequestType<(typeof client.api.creditcontrol.accounts)[':creditAccountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.creditcontrol.accounts[':creditAccountId'].$get(args, options),
  )
}

export async function putApiCreditcontrolAccountsCreditAccountId(
  args: InferRequestType<(typeof client.api.creditcontrol.accounts)[':creditAccountId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.creditcontrol.accounts[':creditAccountId'].$put(args, options),
  )
}

export async function deleteApiCreditcontrolAccountsCreditAccountId(
  args: InferRequestType<(typeof client.api.creditcontrol.accounts)[':creditAccountId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.creditcontrol.accounts[':creditAccountId'].$delete(args, options),
  )
}

export async function putApiCreditcontrolAccountsCreditAccountIdCreditlimit(
  args: InferRequestType<
    (typeof client.api.creditcontrol.accounts)[':creditAccountId']['creditlimit']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.creditcontrol.accounts[':creditAccountId'].creditlimit.$put(args, options),
  )
}

export async function postApiCreditcontrolAccountsCreditAccountIdHolders(
  args: InferRequestType<
    (typeof client.api.creditcontrol.accounts)[':creditAccountId']['holders']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.creditcontrol.accounts[':creditAccountId'].holders.$post(args, options),
  )
}

export async function deleteApiCreditcontrolAccountsCreditAccountIdHoldersHolderId(
  args: InferRequestType<
    (typeof client.api.creditcontrol.accounts)[':creditAccountId']['holders'][':holderId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.creditcontrol.accounts[':creditAccountId'].holders[':holderId'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiCreditcontrolAccountsCreditAccountIdInvoices(
  args: InferRequestType<
    (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.creditcontrol.accounts[':creditAccountId'].invoices.$get(args, options),
  )
}

export async function getApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceId(
  args: InferRequestType<
    (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices'][':invoiceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.creditcontrol.accounts[':creditAccountId'].invoices[':invoiceId'].$get(
      args,
      options,
    ),
  )
}

export async function putApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceId(
  args: InferRequestType<
    (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices'][':invoiceId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.creditcontrol.accounts[':creditAccountId'].invoices[':invoiceId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceId(
  args: InferRequestType<
    (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices'][':invoiceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.creditcontrol.accounts[':creditAccountId'].invoices[':invoiceId'].$delete(
      args,
      options,
    ),
  )
}

export async function postApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdPayments(
  args: InferRequestType<
    (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices'][':invoiceId']['payments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.creditcontrol.accounts[':creditAccountId'].invoices[':invoiceId'].payments.$post(
      args,
      options,
    ),
  )
}

export async function putApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdPostponement(
  args: InferRequestType<
    (typeof client.api.creditcontrol.accounts)[':creditAccountId']['invoices'][':invoiceId']['postponement']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.creditcontrol.accounts[':creditAccountId'].invoices[':invoiceId'].postponement.$put(
      args,
      options,
    ),
  )
}

export async function getApiCreditcontrolAccountsCreditAccountIdStatements(
  args: InferRequestType<
    (typeof client.api.creditcontrol.accounts)[':creditAccountId']['statements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.creditcontrol.accounts[':creditAccountId'].statements.$get(args, options),
  )
}

export async function putApiCreditcontrolAccountsCreditAccountIdStatementsStatementId(
  args: InferRequestType<
    (typeof client.api.creditcontrol.accounts)[':creditAccountId']['statements'][':statementId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.creditcontrol.accounts[':creditAccountId'].statements[':statementId'].$put(
      args,
      options,
    ),
  )
}

export async function putApiCreditcontrolAccountsCreditAccountIdTolerance(
  args: InferRequestType<
    (typeof client.api.creditcontrol.accounts)[':creditAccountId']['tolerance']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.creditcontrol.accounts[':creditAccountId'].tolerance.$put(args, options),
  )
}

export async function postApiCreditcontrolAccountsCreditAccountIdTransaction(
  args: InferRequestType<
    (typeof client.api.creditcontrol.accounts)[':creditAccountId']['transaction']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.creditcontrol.accounts[':creditAccountId'].transaction.$post(args, options),
  )
}

export async function putApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionId(
  args: InferRequestType<
    (typeof client.api.creditcontrol.accounts)[':creditAccountId']['transactions'][':transactionId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.creditcontrol.accounts[':creditAccountId'].transactions[':transactionId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionId(
  args: InferRequestType<
    (typeof client.api.creditcontrol.accounts)[':creditAccountId']['transactions'][':transactionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.creditcontrol.accounts[':creditAccountId'].transactions[':transactionId'].$delete(
      args,
      options,
    ),
  )
}

export async function postApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdRefunds(
  args: InferRequestType<
    (typeof client.api.creditcontrol.accounts)[':creditAccountId']['transactions'][':transactionId']['refunds']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.creditcontrol.accounts[':creditAccountId'].transactions[
      ':transactionId'
    ].refunds.$post(args, options),
  )
}

export async function putApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdSettlement(
  args: InferRequestType<
    (typeof client.api.creditcontrol.accounts)[':creditAccountId']['transactions'][':transactionId']['settlement']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.creditcontrol.accounts[':creditAccountId'].transactions[
      ':transactionId'
    ].settlement.$put(args, options),
  )
}

export async function getApiCreditcontrolInvoices(
  args: InferRequestType<typeof client.api.creditcontrol.invoices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.creditcontrol.invoices.$get(args, options))
}

export async function getApiCreditcontrolStoreconfig(
  args: InferRequestType<typeof client.api.creditcontrol.storeconfig.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.creditcontrol.storeconfig.$get(args, options))
}

export async function putApiCreditcontrolStoreconfig(
  args: InferRequestType<typeof client.api.creditcontrol.storeconfig.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.creditcontrol.storeconfig.$put(args, options))
}
