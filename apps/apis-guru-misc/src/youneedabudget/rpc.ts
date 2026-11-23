import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getBudgets(
  args: InferRequestType<typeof client.budgets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.budgets.$get(args, options))
}

export async function getBudgetsBudgetId(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.budgets[':budget_id'].$get(args, options))
}

export async function getBudgetsBudgetIdAccounts(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.budgets[':budget_id'].accounts.$get(args, options))
}

export async function postBudgetsBudgetIdAccounts(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['accounts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.budgets[':budget_id'].accounts.$post(args, options))
}

export async function getBudgetsBudgetIdAccountsAccountId(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['accounts'][':account_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.budgets[':budget_id'].accounts[':account_id'].$get(args, options),
  )
}

export async function getBudgetsBudgetIdAccountsAccountIdTransactions(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['accounts'][':account_id']['transactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.budgets[':budget_id'].accounts[':account_id'].transactions.$get(args, options),
  )
}

export async function getBudgetsBudgetIdCategories(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['categories']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.budgets[':budget_id'].categories.$get(args, options))
}

export async function getBudgetsBudgetIdCategoriesCategoryId(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['categories'][':category_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.budgets[':budget_id'].categories[':category_id'].$get(args, options),
  )
}

export async function getBudgetsBudgetIdCategoriesCategoryIdTransactions(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['categories'][':category_id']['transactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.budgets[':budget_id'].categories[':category_id'].transactions.$get(args, options),
  )
}

export async function getBudgetsBudgetIdMonths(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['months']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.budgets[':budget_id'].months.$get(args, options))
}

export async function getBudgetsBudgetIdMonthsMonth(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['months'][':month']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.budgets[':budget_id'].months[':month'].$get(args, options))
}

export async function getBudgetsBudgetIdMonthsMonthCategoriesCategoryId(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['months'][':month']['categories'][':category_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.budgets[':budget_id'].months[':month'].categories[':category_id'].$get(args, options),
  )
}

export async function patchBudgetsBudgetIdMonthsMonthCategoriesCategoryId(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['months'][':month']['categories'][':category_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.budgets[':budget_id'].months[':month'].categories[':category_id'].$patch(args, options),
  )
}

export async function getBudgetsBudgetIdPayeeLocations(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['payee_locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.budgets[':budget_id'].payee_locations.$get(args, options))
}

export async function getBudgetsBudgetIdPayeeLocationsPayeeLocationId(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['payee_locations'][':payee_location_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.budgets[':budget_id'].payee_locations[':payee_location_id'].$get(args, options),
  )
}

export async function getBudgetsBudgetIdPayees(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['payees']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.budgets[':budget_id'].payees.$get(args, options))
}

export async function getBudgetsBudgetIdPayeesPayeeId(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['payees'][':payee_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.budgets[':budget_id'].payees[':payee_id'].$get(args, options))
}

export async function getBudgetsBudgetIdPayeesPayeeIdPayeeLocations(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['payees'][':payee_id']['payee_locations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.budgets[':budget_id'].payees[':payee_id'].payee_locations.$get(args, options),
  )
}

export async function getBudgetsBudgetIdPayeesPayeeIdTransactions(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['payees'][':payee_id']['transactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.budgets[':budget_id'].payees[':payee_id'].transactions.$get(args, options),
  )
}

export async function getBudgetsBudgetIdScheduledTransactions(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['scheduled_transactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.budgets[':budget_id'].scheduled_transactions.$get(args, options),
  )
}

export async function getBudgetsBudgetIdScheduledTransactionsScheduledTransactionId(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['scheduled_transactions'][':scheduled_transaction_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.budgets[':budget_id'].scheduled_transactions[':scheduled_transaction_id'].$get(
      args,
      options,
    ),
  )
}

export async function getBudgetsBudgetIdSettings(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.budgets[':budget_id'].settings.$get(args, options))
}

export async function getBudgetsBudgetIdTransactions(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['transactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.budgets[':budget_id'].transactions.$get(args, options))
}

export async function postBudgetsBudgetIdTransactions(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['transactions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.budgets[':budget_id'].transactions.$post(args, options))
}

export async function patchBudgetsBudgetIdTransactions(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['transactions']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.budgets[':budget_id'].transactions.$patch(args, options))
}

export async function postBudgetsBudgetIdTransactionsBulk(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['transactions']['bulk']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.budgets[':budget_id'].transactions.bulk.$post(args, options))
}

export async function postBudgetsBudgetIdTransactionsImport(
  args: InferRequestType<(typeof client.budgets)[':budget_id']['transactions']['import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.budgets[':budget_id'].transactions.import.$post(args, options))
}

export async function getBudgetsBudgetIdTransactionsTransactionId(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['transactions'][':transaction_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.budgets[':budget_id'].transactions[':transaction_id'].$get(args, options),
  )
}

export async function putBudgetsBudgetIdTransactionsTransactionId(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['transactions'][':transaction_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.budgets[':budget_id'].transactions[':transaction_id'].$put(args, options),
  )
}

export async function deleteBudgetsBudgetIdTransactionsTransactionId(
  args: InferRequestType<
    (typeof client.budgets)[':budget_id']['transactions'][':transaction_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.budgets[':budget_id'].transactions[':transaction_id'].$delete(args, options),
  )
}

export async function getUser(options?: ClientRequestOptions) {
  return await parseResponse(client.user.$get(undefined, options))
}
