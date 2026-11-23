import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccountingCategories(
  args: InferRequestType<(typeof client)['accounting-categories']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['accounting-categories'].$get(args, options))
}

export async function postAccountingCategories(
  args: InferRequestType<(typeof client)['accounting-categories']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['accounting-categories'].$post(args, options))
}

export async function getAccountingCategoriesAccountingCategoryId(
  args: InferRequestType<
    (typeof client)['accounting-categories'][':accounting_category_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['accounting-categories'][':accounting_category_id'].$get(args, options),
  )
}

export async function deleteAccountingCategoriesAccountingCategoryId(
  args: InferRequestType<
    (typeof client)['accounting-categories'][':accounting_category_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['accounting-categories'][':accounting_category_id'].$delete(args, options),
  )
}

export async function patchAccountingCategoriesAccountingCategoryId(
  args: InferRequestType<
    (typeof client)['accounting-categories'][':accounting_category_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['accounting-categories'][':accounting_category_id'].$patch(args, options),
  )
}

export async function postAccountNameValidation(
  args: InferRequestType<(typeof client)['account-name-validation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['account-name-validation'].$post(args, options))
}

export async function getAccounts(
  args: InferRequestType<typeof client.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.$get(args, options))
}

export async function getAccountsAccountId(
  args: InferRequestType<(typeof client.accounts)[':account_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':account_id'].$get(args, options))
}

export async function getAccountsAccountIdBankDetails(
  args: InferRequestType<(typeof client.accounts)[':account_id']['bank-details']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':account_id']['bank-details'].$get(args, options))
}

export async function getCardInvitations(
  args: InferRequestType<(typeof client)['card-invitations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['card-invitations'].$get(args, options))
}

export async function postCardInvitations(
  args: InferRequestType<(typeof client)['card-invitations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['card-invitations'].$post(args, options))
}

export async function getCardInvitationsCardInvitationId(
  args: InferRequestType<(typeof client)['card-invitations'][':card_invitation_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['card-invitations'][':card_invitation_id'].$get(args, options))
}

export async function patchCardInvitationsCardInvitationId(
  args: InferRequestType<(typeof client)['card-invitations'][':card_invitation_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['card-invitations'][':card_invitation_id'].$patch(args, options),
  )
}

export async function postCardInvitationsCardInvitationIdCancel(
  args: InferRequestType<
    (typeof client)['card-invitations'][':cardInvitationId']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['card-invitations'][':cardInvitationId'].cancel.$post(args, options),
  )
}

export async function getCards(
  args: InferRequestType<typeof client.cards.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards.$get(args, options))
}

export async function postCards(
  args: InferRequestType<typeof client.cards.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards.$post(args, options))
}

export async function getCardsCardId(
  args: InferRequestType<(typeof client.cards)[':card_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':card_id'].$get(args, options))
}

export async function deleteCardsCardId(
  args: InferRequestType<(typeof client.cards)[':card_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':card_id'].$delete(args, options))
}

export async function patchCardsCardId(
  args: InferRequestType<(typeof client.cards)[':card_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':card_id'].$patch(args, options))
}

export async function putCardsCardIdContacts(
  args: InferRequestType<(typeof client.cards)[':card_id']['contacts']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':card_id'].contacts.$put(args, options))
}

export async function putCardsCardIdReferences(
  args: InferRequestType<(typeof client.cards)[':card_id']['references']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':card_id'].references.$put(args, options))
}

export async function postCardsCardIdFreeze(
  args: InferRequestType<(typeof client.cards)[':card_id']['freeze']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':card_id'].freeze.$post(args, options))
}

export async function postCardsCardIdUnfreeze(
  args: InferRequestType<(typeof client.cards)[':card_id']['unfreeze']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':card_id'].unfreeze.$post(args, options))
}

export async function postCardsCardIdLock(
  args: InferRequestType<(typeof client.cards)[':card_id']['lock']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':card_id'].lock.$post(args, options))
}

export async function postCardsCardIdUnlock(
  args: InferRequestType<(typeof client.cards)[':card_id']['unlock']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':card_id'].unlock.$post(args, options))
}

export async function getCardsCardIdSensitiveDetails(
  args: InferRequestType<(typeof client.cards)[':card_id']['sensitive-details']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':card_id']['sensitive-details'].$get(args, options))
}

export async function getCounterparties(
  args: InferRequestType<typeof client.counterparties.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.counterparties.$get(args, options))
}

export async function postCounterparty(
  args: InferRequestType<typeof client.counterparty.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.counterparty.$post(args, options))
}

export async function getCounterpartiesCountries(
  args: InferRequestType<typeof client.counterparties.countries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.counterparties.countries.$get(args, options))
}

export async function getCounterpartiesFields(
  args: InferRequestType<typeof client.counterparties.fields.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.counterparties.fields.$get(args, options))
}

export async function getCounterpartyCounterpartyId(
  args: InferRequestType<(typeof client.counterparty)[':counterparty_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.counterparty[':counterparty_id'].$get(args, options))
}

export async function deleteCounterpartyCounterpartyId(
  args: InferRequestType<(typeof client.counterparty)[':counterparty_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.counterparty[':counterparty_id'].$delete(args, options))
}

export async function patchCounterpartiesCounterpartyIdPaymentMethodsPaymentMethodId(
  args: InferRequestType<
    (typeof client.counterparties)[':counterparty_id']['payment-methods'][':payment_method_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.counterparties[':counterparty_id']['payment-methods'][':payment_method_id'].$patch(
      args,
      options,
    ),
  )
}

export async function getRate(
  args: InferRequestType<typeof client.rate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rate.$get(args, options))
}

export async function postExchange(
  args: InferRequestType<typeof client.exchange.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exchange.$post(args, options))
}

export async function getExchangeReasons(
  args: InferRequestType<(typeof client)['exchange-reasons']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['exchange-reasons'].$get(args, options))
}

export async function getExpenses(
  args: InferRequestType<typeof client.expenses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.expenses.$get(args, options))
}

export async function getExpensesExpenseId(
  args: InferRequestType<(typeof client.expenses)[':expense_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.expenses[':expense_id'].$get(args, options))
}

export async function getExpensesExpenseIdReceiptsReceiptIdContent(
  args: InferRequestType<
    (typeof client.expenses)[':expense_id']['receipts'][':receipt_id']['content']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.expenses[':expense_id'].receipts[':receipt_id'].content.$get(args, options),
  )
}

export async function getLabelGroups(
  args: InferRequestType<(typeof client)['label-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['label-groups'].$get(args, options))
}

export async function postLabelGroups(
  args: InferRequestType<(typeof client)['label-groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['label-groups'].$post(args, options))
}

export async function getLabelGroupsGroupId(
  args: InferRequestType<(typeof client)['label-groups'][':group_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['label-groups'][':group_id'].$get(args, options))
}

export async function deleteLabelGroupsGroupId(
  args: InferRequestType<(typeof client)['label-groups'][':group_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['label-groups'][':group_id'].$delete(args, options))
}

export async function patchLabelGroupsGroupId(
  args: InferRequestType<(typeof client)['label-groups'][':group_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['label-groups'][':group_id'].$patch(args, options))
}

export async function getLabelGroupsGroupIdLabels(
  args: InferRequestType<(typeof client)['label-groups'][':group_id']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['label-groups'][':group_id'].labels.$get(args, options))
}

export async function postLabelGroupsGroupIdLabels(
  args: InferRequestType<(typeof client)['label-groups'][':group_id']['labels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['label-groups'][':group_id'].labels.$post(args, options))
}

export async function deleteLabelGroupsGroupIdLabelsLabelId(
  args: InferRequestType<
    (typeof client)['label-groups'][':group_id']['labels'][':label_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['label-groups'][':group_id'].labels[':label_id'].$delete(args, options),
  )
}

export async function patchLabelGroupsGroupIdLabelsLabelId(
  args: InferRequestType<
    (typeof client)['label-groups'][':group_id']['labels'][':label_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['label-groups'][':group_id'].labels[':label_id'].$patch(args, options),
  )
}

export async function getPaymentDrafts(
  args: InferRequestType<(typeof client)['payment-drafts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['payment-drafts'].$get(args, options))
}

export async function postPaymentDrafts(
  args: InferRequestType<(typeof client)['payment-drafts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['payment-drafts'].$post(args, options))
}

export async function getPaymentDraftsPaymentDraftId(
  args: InferRequestType<(typeof client)['payment-drafts'][':payment_draft_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['payment-drafts'][':payment_draft_id'].$get(args, options))
}

export async function deletePaymentDraftsPaymentDraftId(
  args: InferRequestType<(typeof client)['payment-drafts'][':payment_draft_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['payment-drafts'][':payment_draft_id'].$delete(args, options))
}

export async function patchPaymentDraftsPaymentDraftId(
  args: InferRequestType<(typeof client)['payment-drafts'][':payment_draft_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['payment-drafts'][':payment_draft_id'].$patch(args, options))
}

export async function postPaymentDraftsPaymentDraftIdPayments(
  args: InferRequestType<
    (typeof client)['payment-drafts'][':payment_draft_id']['payments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['payment-drafts'][':payment_draft_id'].payments.$post(args, options),
  )
}

export async function deletePaymentDraftsPaymentDraftIdPaymentsPaymentId(
  args: InferRequestType<
    (typeof client)['payment-drafts'][':payment_draft_id']['payments'][':payment_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['payment-drafts'][':payment_draft_id'].payments[':payment_id'].$delete(args, options),
  )
}

export async function patchPaymentDraftsPaymentDraftIdPaymentsPaymentId(
  args: InferRequestType<
    (typeof client)['payment-drafts'][':payment_draft_id']['payments'][':payment_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['payment-drafts'][':payment_draft_id'].payments[':payment_id'].$patch(args, options),
  )
}

export async function getPayoutLinks(
  args: InferRequestType<(typeof client)['payout-links']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['payout-links'].$get(args, options))
}

export async function postPayoutLinks(
  args: InferRequestType<(typeof client)['payout-links']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['payout-links'].$post(args, options))
}

export async function getPayoutLinksPayoutLinkId(
  args: InferRequestType<(typeof client)['payout-links'][':payout_link_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['payout-links'][':payout_link_id'].$get(args, options))
}

export async function postPayoutLinksPayoutLinkIdCancel(
  args: InferRequestType<(typeof client)['payout-links'][':payout_link_id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['payout-links'][':payout_link_id'].cancel.$post(args, options))
}

export async function postSandboxTransactionsIdAction(
  args: InferRequestType<(typeof client.sandbox.transactions)[':id'][':action']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox.transactions[':id'][':action'].$post(args, options))
}

export async function postSandboxTopup(
  args: InferRequestType<typeof client.sandbox.topup.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sandbox.topup.$post(args, options))
}

export async function getTaxRates(
  args: InferRequestType<(typeof client)['tax-rates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['tax-rates'].$get(args, options))
}

export async function postTaxRates(
  args: InferRequestType<(typeof client)['tax-rates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['tax-rates'].$post(args, options))
}

export async function getTaxRatesTaxRateId(
  args: InferRequestType<(typeof client)['tax-rates'][':tax_rate_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['tax-rates'][':tax_rate_id'].$get(args, options))
}

export async function deleteTaxRatesTaxRateId(
  args: InferRequestType<(typeof client)['tax-rates'][':tax_rate_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['tax-rates'][':tax_rate_id'].$delete(args, options))
}

export async function patchTaxRatesTaxRateId(
  args: InferRequestType<(typeof client)['tax-rates'][':tax_rate_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['tax-rates'][':tax_rate_id'].$patch(args, options))
}

export async function getTeamMembers(
  args: InferRequestType<(typeof client)['team-members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['team-members'].$get(args, options))
}

export async function postTeamMembers(
  args: InferRequestType<(typeof client)['team-members']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['team-members'].$post(args, options))
}

export async function getTeamMembersTeamMemberId(
  args: InferRequestType<(typeof client)['team-members'][':team_member_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['team-members'][':team_member_id'].$get(args, options))
}

export async function deleteTeamMembersTeamMemberId(
  args: InferRequestType<(typeof client)['team-members'][':team_member_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['team-members'][':team_member_id'].$delete(args, options))
}

export async function putTeamMembersTeamMemberIdDepartment(
  args: InferRequestType<(typeof client)['team-members'][':team_member_id']['department']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['team-members'][':team_member_id'].department.$put(args, options),
  )
}

export async function deleteTeamMembersTeamMemberIdDepartment(
  args: InferRequestType<
    (typeof client)['team-members'][':team_member_id']['department']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['team-members'][':team_member_id'].department.$delete(args, options),
  )
}

export async function putTeamMembersTeamMemberIdManager(
  args: InferRequestType<(typeof client)['team-members'][':team_member_id']['manager']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['team-members'][':team_member_id'].manager.$put(args, options))
}

export async function deleteTeamMembersTeamMemberIdManager(
  args: InferRequestType<(typeof client)['team-members'][':team_member_id']['manager']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['team-members'][':team_member_id'].manager.$delete(args, options),
  )
}

export async function putTeamMembersTeamMemberIdRole(
  args: InferRequestType<(typeof client)['team-members'][':team_member_id']['role']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['team-members'][':team_member_id'].role.$put(args, options))
}

export async function postTeamMembersTeamMemberIdSuspend(
  args: InferRequestType<(typeof client)['team-members'][':team_member_id']['suspend']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['team-members'][':team_member_id'].suspend.$post(args, options))
}

export async function postTeamMembersTeamMemberIdUnsuspend(
  args: InferRequestType<(typeof client)['team-members'][':team_member_id']['unsuspend']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['team-members'][':team_member_id'].unsuspend.$post(args, options),
  )
}

export async function getRoles(
  args: InferRequestType<typeof client.roles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.roles.$get(args, options))
}

export async function getDepartments(
  args: InferRequestType<typeof client.departments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.departments.$get(args, options))
}

export async function postDepartments(
  args: InferRequestType<typeof client.departments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.departments.$post(args, options))
}

export async function getDepartmentsDepartmentId(
  args: InferRequestType<(typeof client.departments)[':department_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.departments[':department_id'].$get(args, options))
}

export async function deleteDepartmentsDepartmentId(
  args: InferRequestType<(typeof client.departments)[':department_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.departments[':department_id'].$delete(args, options))
}

export async function patchDepartmentsDepartmentId(
  args: InferRequestType<(typeof client.departments)[':department_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.departments[':department_id'].$patch(args, options))
}

export async function getTransactions(
  args: InferRequestType<typeof client.transactions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions.$get(args, options))
}

export async function getTransactionId(
  args: InferRequestType<(typeof client.transaction)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transaction[':id'].$get(args, options))
}

export async function postPay(
  args: InferRequestType<typeof client.pay.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pay.$post(args, options))
}

export async function postPayIndicativeQuote(
  args: InferRequestType<(typeof client.pay)['indicative-quote']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pay['indicative-quote'].$post(args, options))
}

export async function postPayFields(
  args: InferRequestType<typeof client.pay.fields.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pay.fields.$post(args, options))
}

export async function postTransfer(
  args: InferRequestType<typeof client.transfer.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transfer.$post(args, options))
}

export async function getTransferReasons(
  args: InferRequestType<(typeof client)['transfer-reasons']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['transfer-reasons'].$get(args, options))
}

export async function getWebhook(
  args: InferRequestType<typeof client.webhook.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook.$get(args, options))
}

export async function postWebhook(
  args: InferRequestType<typeof client.webhook.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook.$post(args, options))
}

export async function deleteWebhook(
  args: InferRequestType<typeof client.webhook.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook.$delete(args, options))
}

export async function getWebhooks(
  args: InferRequestType<typeof client.webhooks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.$get(args, options))
}

export async function postWebhooks(
  args: InferRequestType<typeof client.webhooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.$post(args, options))
}

export async function getWebhooksWebhookId(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhook_id'].$get(args, options))
}

export async function deleteWebhooksWebhookId(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhook_id'].$delete(args, options))
}

export async function patchWebhooksWebhookId(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhook_id'].$patch(args, options))
}

export async function postWebhooksWebhookIdRotateSigningSecret(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['rotate-signing-secret']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.webhooks[':webhook_id']['rotate-signing-secret'].$post(args, options),
  )
}

export async function getWebhooksWebhookIdFailedEvents(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['failed-events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhook_id']['failed-events'].$get(args, options))
}
