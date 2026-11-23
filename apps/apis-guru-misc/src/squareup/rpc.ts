import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postMobileAuthorizationCode(
  args: InferRequestType<(typeof client.mobile)['authorization-code']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mobile['authorization-code'].$post(args, options))
}

export async function postOauth2ClientsClientIdAccessTokenRenew(
  args: InferRequestType<
    (typeof client.oauth2.clients)[':client_id']['access-token']['renew']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.oauth2.clients[':client_id']['access-token'].renew.$post(args, options),
  )
}

export async function postOauth2Revoke(
  args: InferRequestType<typeof client.oauth2.revoke.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2.revoke.$post(args, options))
}

export async function postOauth2Token(
  args: InferRequestType<typeof client.oauth2.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2.token.$post(args, options))
}

export async function getV1MeEmployees(
  args: InferRequestType<typeof client.v1.me.employees.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.me.employees.$get(args, options))
}

export async function postV1MeEmployees(
  args: InferRequestType<typeof client.v1.me.employees.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.me.employees.$post(args, options))
}

export async function getV1MeEmployeesEmployeeId(
  args: InferRequestType<(typeof client.v1.me.employees)[':employee_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.me.employees[':employee_id'].$get(args, options))
}

export async function putV1MeEmployeesEmployeeId(
  args: InferRequestType<(typeof client.v1.me.employees)[':employee_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.me.employees[':employee_id'].$put(args, options))
}

export async function getV1MeRoles(
  args: InferRequestType<typeof client.v1.me.roles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.me.roles.$get(args, options))
}

export async function postV1MeRoles(
  args: InferRequestType<typeof client.v1.me.roles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.me.roles.$post(args, options))
}

export async function getV1MeRolesRoleId(
  args: InferRequestType<(typeof client.v1.me.roles)[':role_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.me.roles[':role_id'].$get(args, options))
}

export async function putV1MeRolesRoleId(
  args: InferRequestType<(typeof client.v1.me.roles)[':role_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.me.roles[':role_id'].$put(args, options))
}

export async function getV1LocationIdOrders(
  args: InferRequestType<(typeof client.v1)[':location_id']['orders']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':location_id'].orders.$get(args, options))
}

export async function getV1LocationIdOrdersOrderId(
  args: InferRequestType<(typeof client.v1)[':location_id']['orders'][':order_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':location_id'].orders[':order_id'].$get(args, options))
}

export async function putV1LocationIdOrdersOrderId(
  args: InferRequestType<(typeof client.v1)[':location_id']['orders'][':order_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':location_id'].orders[':order_id'].$put(args, options))
}

export async function getV1LocationIdPayments(
  args: InferRequestType<(typeof client.v1)[':location_id']['payments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':location_id'].payments.$get(args, options))
}

export async function getV1LocationIdPaymentsPaymentId(
  args: InferRequestType<(typeof client.v1)[':location_id']['payments'][':payment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':location_id'].payments[':payment_id'].$get(args, options))
}

export async function getV1LocationIdRefunds(
  args: InferRequestType<(typeof client.v1)[':location_id']['refunds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':location_id'].refunds.$get(args, options))
}

export async function postV1LocationIdRefunds(
  args: InferRequestType<(typeof client.v1)[':location_id']['refunds']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':location_id'].refunds.$post(args, options))
}

export async function getV1LocationIdSettlements(
  args: InferRequestType<(typeof client.v1)[':location_id']['settlements']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':location_id'].settlements.$get(args, options))
}

export async function getV1LocationIdSettlementsSettlementId(
  args: InferRequestType<
    (typeof client.v1)[':location_id']['settlements'][':settlement_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':location_id'].settlements[':settlement_id'].$get(args, options),
  )
}

export async function postV2ApplePayDomains(
  args: InferRequestType<(typeof client.v2)['apple-pay']['domains']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['apple-pay'].domains.$post(args, options))
}

export async function getV2BankAccounts(
  args: InferRequestType<(typeof client.v2)['bank-accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['bank-accounts'].$get(args, options))
}

export async function getV2BankAccountsByV1IdV1BankAccountId(
  args: InferRequestType<
    (typeof client.v2)['bank-accounts']['by-v1-id'][':v1_bank_account_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['bank-accounts']['by-v1-id'][':v1_bank_account_id'].$get(args, options),
  )
}

export async function getV2BankAccountsBankAccountId(
  args: InferRequestType<(typeof client.v2)['bank-accounts'][':bank_account_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['bank-accounts'][':bank_account_id'].$get(args, options))
}

export async function postV2Bookings(
  args: InferRequestType<typeof client.v2.bookings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bookings.$post(args, options))
}

export async function postV2BookingsAvailabilitySearch(
  args: InferRequestType<typeof client.v2.bookings.availability.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bookings.availability.search.$post(args, options))
}

export async function getV2BookingsBusinessBookingProfile(options?: ClientRequestOptions) {
  return await parseResponse(
    client.v2.bookings['business-booking-profile'].$get(undefined, options),
  )
}

export async function getV2BookingsTeamMemberBookingProfiles(
  args: InferRequestType<(typeof client.v2.bookings)['team-member-booking-profiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bookings['team-member-booking-profiles'].$get(args, options))
}

export async function getV2BookingsTeamMemberBookingProfilesTeamMemberId(
  args: InferRequestType<
    (typeof client.v2.bookings)['team-member-booking-profiles'][':team_member_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.bookings['team-member-booking-profiles'][':team_member_id'].$get(args, options),
  )
}

export async function getV2BookingsBookingId(
  args: InferRequestType<(typeof client.v2.bookings)[':booking_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bookings[':booking_id'].$get(args, options))
}

export async function putV2BookingsBookingId(
  args: InferRequestType<(typeof client.v2.bookings)[':booking_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bookings[':booking_id'].$put(args, options))
}

export async function postV2BookingsBookingIdCancel(
  args: InferRequestType<(typeof client.v2.bookings)[':booking_id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bookings[':booking_id'].cancel.$post(args, options))
}

export async function getV2Cards(
  args: InferRequestType<typeof client.v2.cards.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.cards.$get(args, options))
}

export async function postV2Cards(
  args: InferRequestType<typeof client.v2.cards.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.cards.$post(args, options))
}

export async function getV2CardsCardId(
  args: InferRequestType<(typeof client.v2.cards)[':card_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.cards[':card_id'].$get(args, options))
}

export async function postV2CardsCardIdDisable(
  args: InferRequestType<(typeof client.v2.cards)[':card_id']['disable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.cards[':card_id'].disable.$post(args, options))
}

export async function getV2CashDrawersShifts(
  args: InferRequestType<(typeof client.v2)['cash-drawers']['shifts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['cash-drawers'].shifts.$get(args, options))
}

export async function getV2CashDrawersShiftsShiftId(
  args: InferRequestType<(typeof client.v2)['cash-drawers']['shifts'][':shift_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['cash-drawers'].shifts[':shift_id'].$get(args, options))
}

export async function getV2CashDrawersShiftsShiftIdEvents(
  args: InferRequestType<
    (typeof client.v2)['cash-drawers']['shifts'][':shift_id']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['cash-drawers'].shifts[':shift_id'].events.$get(args, options),
  )
}

export async function postV2CatalogBatchDelete(
  args: InferRequestType<(typeof client.v2.catalog)['batch-delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.catalog['batch-delete'].$post(args, options))
}

export async function postV2CatalogBatchRetrieve(
  args: InferRequestType<(typeof client.v2.catalog)['batch-retrieve']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.catalog['batch-retrieve'].$post(args, options))
}

export async function postV2CatalogBatchUpsert(
  args: InferRequestType<(typeof client.v2.catalog)['batch-upsert']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.catalog['batch-upsert'].$post(args, options))
}

export async function getV2CatalogInfo(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.catalog.info.$get(undefined, options))
}

export async function getV2CatalogList(
  args: InferRequestType<typeof client.v2.catalog.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.catalog.list.$get(args, options))
}

export async function postV2CatalogObject(
  args: InferRequestType<typeof client.v2.catalog.object.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.catalog.object.$post(args, options))
}

export async function getV2CatalogObjectObjectId(
  args: InferRequestType<(typeof client.v2.catalog.object)[':object_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.catalog.object[':object_id'].$get(args, options))
}

export async function deleteV2CatalogObjectObjectId(
  args: InferRequestType<(typeof client.v2.catalog.object)[':object_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.catalog.object[':object_id'].$delete(args, options))
}

export async function postV2CatalogSearch(
  args: InferRequestType<typeof client.v2.catalog.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.catalog.search.$post(args, options))
}

export async function postV2CatalogSearchCatalogItems(
  args: InferRequestType<(typeof client.v2.catalog)['search-catalog-items']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.catalog['search-catalog-items'].$post(args, options))
}

export async function postV2CatalogUpdateItemModifierLists(
  args: InferRequestType<(typeof client.v2.catalog)['update-item-modifier-lists']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.catalog['update-item-modifier-lists'].$post(args, options))
}

export async function postV2CatalogUpdateItemTaxes(
  args: InferRequestType<(typeof client.v2.catalog)['update-item-taxes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.catalog['update-item-taxes'].$post(args, options))
}

export async function getV2Customers(
  args: InferRequestType<typeof client.v2.customers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customers.$get(args, options))
}

export async function postV2Customers(
  args: InferRequestType<typeof client.v2.customers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customers.$post(args, options))
}

export async function getV2CustomersGroups(
  args: InferRequestType<typeof client.v2.customers.groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customers.groups.$get(args, options))
}

export async function postV2CustomersGroups(
  args: InferRequestType<typeof client.v2.customers.groups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customers.groups.$post(args, options))
}

export async function getV2CustomersGroupsGroupId(
  args: InferRequestType<(typeof client.v2.customers.groups)[':group_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customers.groups[':group_id'].$get(args, options))
}

export async function putV2CustomersGroupsGroupId(
  args: InferRequestType<(typeof client.v2.customers.groups)[':group_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customers.groups[':group_id'].$put(args, options))
}

export async function deleteV2CustomersGroupsGroupId(
  args: InferRequestType<(typeof client.v2.customers.groups)[':group_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customers.groups[':group_id'].$delete(args, options))
}

export async function postV2CustomersSearch(
  args: InferRequestType<typeof client.v2.customers.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customers.search.$post(args, options))
}

export async function getV2CustomersSegments(
  args: InferRequestType<typeof client.v2.customers.segments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customers.segments.$get(args, options))
}

export async function getV2CustomersSegmentsSegmentId(
  args: InferRequestType<(typeof client.v2.customers.segments)[':segment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customers.segments[':segment_id'].$get(args, options))
}

export async function getV2CustomersCustomerId(
  args: InferRequestType<(typeof client.v2.customers)[':customer_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customers[':customer_id'].$get(args, options))
}

export async function putV2CustomersCustomerId(
  args: InferRequestType<(typeof client.v2.customers)[':customer_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customers[':customer_id'].$put(args, options))
}

export async function deleteV2CustomersCustomerId(
  args: InferRequestType<(typeof client.v2.customers)[':customer_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customers[':customer_id'].$delete(args, options))
}

export async function postV2CustomersCustomerIdCards(
  args: InferRequestType<(typeof client.v2.customers)[':customer_id']['cards']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customers[':customer_id'].cards.$post(args, options))
}

export async function deleteV2CustomersCustomerIdCardsCardId(
  args: InferRequestType<
    (typeof client.v2.customers)[':customer_id']['cards'][':card_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customers[':customer_id'].cards[':card_id'].$delete(args, options),
  )
}

export async function putV2CustomersCustomerIdGroupsGroupId(
  args: InferRequestType<
    (typeof client.v2.customers)[':customer_id']['groups'][':group_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customers[':customer_id'].groups[':group_id'].$put(args, options),
  )
}

export async function deleteV2CustomersCustomerIdGroupsGroupId(
  args: InferRequestType<
    (typeof client.v2.customers)[':customer_id']['groups'][':group_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customers[':customer_id'].groups[':group_id'].$delete(args, options),
  )
}

export async function getV2DevicesCodes(
  args: InferRequestType<typeof client.v2.devices.codes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.devices.codes.$get(args, options))
}

export async function postV2DevicesCodes(
  args: InferRequestType<typeof client.v2.devices.codes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.devices.codes.$post(args, options))
}

export async function getV2DevicesCodesId(
  args: InferRequestType<(typeof client.v2.devices.codes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.devices.codes[':id'].$get(args, options))
}

export async function getV2Disputes(
  args: InferRequestType<typeof client.v2.disputes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.disputes.$get(args, options))
}

export async function getV2DisputesDisputeId(
  args: InferRequestType<(typeof client.v2.disputes)[':dispute_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.disputes[':dispute_id'].$get(args, options))
}

export async function postV2DisputesDisputeIdAccept(
  args: InferRequestType<(typeof client.v2.disputes)[':dispute_id']['accept']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.disputes[':dispute_id'].accept.$post(args, options))
}

export async function getV2DisputesDisputeIdEvidence(
  args: InferRequestType<(typeof client.v2.disputes)[':dispute_id']['evidence']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.disputes[':dispute_id'].evidence.$get(args, options))
}

export async function postV2DisputesDisputeIdEvidenceText(
  args: InferRequestType<(typeof client.v2.disputes)[':dispute_id']['evidence-text']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.disputes[':dispute_id']['evidence-text'].$post(args, options),
  )
}

export async function getV2DisputesDisputeIdEvidenceEvidenceId(
  args: InferRequestType<
    (typeof client.v2.disputes)[':dispute_id']['evidence'][':evidence_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.disputes[':dispute_id'].evidence[':evidence_id'].$get(args, options),
  )
}

export async function deleteV2DisputesDisputeIdEvidenceEvidenceId(
  args: InferRequestType<
    (typeof client.v2.disputes)[':dispute_id']['evidence'][':evidence_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.disputes[':dispute_id'].evidence[':evidence_id'].$delete(args, options),
  )
}

export async function postV2DisputesDisputeIdSubmitEvidence(
  args: InferRequestType<(typeof client.v2.disputes)[':dispute_id']['submit-evidence']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.disputes[':dispute_id']['submit-evidence'].$post(args, options),
  )
}

export async function getV2Employees(
  args: InferRequestType<typeof client.v2.employees.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.employees.$get(args, options))
}

export async function getV2EmployeesId(
  args: InferRequestType<(typeof client.v2.employees)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.employees[':id'].$get(args, options))
}

export async function getV2GiftCards(
  args: InferRequestType<(typeof client.v2)['gift-cards']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gift-cards'].$get(args, options))
}

export async function postV2GiftCards(
  args: InferRequestType<(typeof client.v2)['gift-cards']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gift-cards'].$post(args, options))
}

export async function getV2GiftCardsActivities(
  args: InferRequestType<(typeof client.v2)['gift-cards']['activities']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gift-cards'].activities.$get(args, options))
}

export async function postV2GiftCardsActivities(
  args: InferRequestType<(typeof client.v2)['gift-cards']['activities']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gift-cards'].activities.$post(args, options))
}

export async function postV2GiftCardsFromGan(
  args: InferRequestType<(typeof client.v2)['gift-cards']['from-gan']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gift-cards']['from-gan'].$post(args, options))
}

export async function postV2GiftCardsFromNonce(
  args: InferRequestType<(typeof client.v2)['gift-cards']['from-nonce']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gift-cards']['from-nonce'].$post(args, options))
}

export async function postV2GiftCardsGiftCardIdLinkCustomer(
  args: InferRequestType<
    (typeof client.v2)['gift-cards'][':gift_card_id']['link-customer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gift-cards'][':gift_card_id']['link-customer'].$post(args, options),
  )
}

export async function postV2GiftCardsGiftCardIdUnlinkCustomer(
  args: InferRequestType<
    (typeof client.v2)['gift-cards'][':gift_card_id']['unlink-customer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['gift-cards'][':gift_card_id']['unlink-customer'].$post(args, options),
  )
}

export async function getV2GiftCardsId(
  args: InferRequestType<(typeof client.v2)['gift-cards'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['gift-cards'][':id'].$get(args, options))
}

export async function getV2InventoryAdjustmentAdjustmentId(
  args: InferRequestType<(typeof client.v2.inventory.adjustment)[':adjustment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.inventory.adjustment[':adjustment_id'].$get(args, options))
}

export async function getV2InventoryAdjustmentsAdjustmentId(
  args: InferRequestType<(typeof client.v2.inventory.adjustments)[':adjustment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.inventory.adjustments[':adjustment_id'].$get(args, options))
}

export async function postV2InventoryBatchChange(
  args: InferRequestType<(typeof client.v2.inventory)['batch-change']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.inventory['batch-change'].$post(args, options))
}

export async function postV2InventoryBatchRetrieveChanges(
  args: InferRequestType<(typeof client.v2.inventory)['batch-retrieve-changes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.inventory['batch-retrieve-changes'].$post(args, options))
}

export async function postV2InventoryBatchRetrieveCounts(
  args: InferRequestType<(typeof client.v2.inventory)['batch-retrieve-counts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.inventory['batch-retrieve-counts'].$post(args, options))
}

export async function postV2InventoryChangesBatchCreate(
  args: InferRequestType<(typeof client.v2.inventory.changes)['batch-create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.inventory.changes['batch-create'].$post(args, options))
}

export async function postV2InventoryChangesBatchRetrieve(
  args: InferRequestType<(typeof client.v2.inventory.changes)['batch-retrieve']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.inventory.changes['batch-retrieve'].$post(args, options))
}

export async function postV2InventoryCountsBatchRetrieve(
  args: InferRequestType<(typeof client.v2.inventory.counts)['batch-retrieve']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.inventory.counts['batch-retrieve'].$post(args, options))
}

export async function getV2InventoryPhysicalCountPhysicalCountId(
  args: InferRequestType<
    (typeof client.v2.inventory)['physical-count'][':physical_count_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.inventory['physical-count'][':physical_count_id'].$get(args, options),
  )
}

export async function getV2InventoryPhysicalCountsPhysicalCountId(
  args: InferRequestType<
    (typeof client.v2.inventory)['physical-counts'][':physical_count_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.inventory['physical-counts'][':physical_count_id'].$get(args, options),
  )
}

export async function getV2InventoryTransfersTransferId(
  args: InferRequestType<(typeof client.v2.inventory.transfers)[':transfer_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.inventory.transfers[':transfer_id'].$get(args, options))
}

export async function getV2InventoryCatalogObjectId(
  args: InferRequestType<(typeof client.v2.inventory)[':catalog_object_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.inventory[':catalog_object_id'].$get(args, options))
}

export async function getV2InventoryCatalogObjectIdChanges(
  args: InferRequestType<(typeof client.v2.inventory)[':catalog_object_id']['changes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.inventory[':catalog_object_id'].changes.$get(args, options))
}

export async function getV2Invoices(
  args: InferRequestType<typeof client.v2.invoices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.invoices.$get(args, options))
}

export async function postV2Invoices(
  args: InferRequestType<typeof client.v2.invoices.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.invoices.$post(args, options))
}

export async function postV2InvoicesSearch(
  args: InferRequestType<typeof client.v2.invoices.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.invoices.search.$post(args, options))
}

export async function getV2InvoicesInvoiceId(
  args: InferRequestType<(typeof client.v2.invoices)[':invoice_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.invoices[':invoice_id'].$get(args, options))
}

export async function putV2InvoicesInvoiceId(
  args: InferRequestType<(typeof client.v2.invoices)[':invoice_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.invoices[':invoice_id'].$put(args, options))
}

export async function deleteV2InvoicesInvoiceId(
  args: InferRequestType<(typeof client.v2.invoices)[':invoice_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.invoices[':invoice_id'].$delete(args, options))
}

export async function postV2InvoicesInvoiceIdCancel(
  args: InferRequestType<(typeof client.v2.invoices)[':invoice_id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.invoices[':invoice_id'].cancel.$post(args, options))
}

export async function postV2InvoicesInvoiceIdPublish(
  args: InferRequestType<(typeof client.v2.invoices)[':invoice_id']['publish']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.invoices[':invoice_id'].publish.$post(args, options))
}

export async function getV2LaborBreakTypes(
  args: InferRequestType<(typeof client.v2.labor)['break-types']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.labor['break-types'].$get(args, options))
}

export async function postV2LaborBreakTypes(
  args: InferRequestType<(typeof client.v2.labor)['break-types']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.labor['break-types'].$post(args, options))
}

export async function getV2LaborBreakTypesId(
  args: InferRequestType<(typeof client.v2.labor)['break-types'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.labor['break-types'][':id'].$get(args, options))
}

export async function putV2LaborBreakTypesId(
  args: InferRequestType<(typeof client.v2.labor)['break-types'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.labor['break-types'][':id'].$put(args, options))
}

export async function deleteV2LaborBreakTypesId(
  args: InferRequestType<(typeof client.v2.labor)['break-types'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.labor['break-types'][':id'].$delete(args, options))
}

export async function getV2LaborEmployeeWages(
  args: InferRequestType<(typeof client.v2.labor)['employee-wages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.labor['employee-wages'].$get(args, options))
}

export async function getV2LaborEmployeeWagesId(
  args: InferRequestType<(typeof client.v2.labor)['employee-wages'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.labor['employee-wages'][':id'].$get(args, options))
}

export async function postV2LaborShifts(
  args: InferRequestType<typeof client.v2.labor.shifts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.labor.shifts.$post(args, options))
}

export async function postV2LaborShiftsSearch(
  args: InferRequestType<typeof client.v2.labor.shifts.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.labor.shifts.search.$post(args, options))
}

export async function getV2LaborShiftsId(
  args: InferRequestType<(typeof client.v2.labor.shifts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.labor.shifts[':id'].$get(args, options))
}

export async function putV2LaborShiftsId(
  args: InferRequestType<(typeof client.v2.labor.shifts)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.labor.shifts[':id'].$put(args, options))
}

export async function deleteV2LaborShiftsId(
  args: InferRequestType<(typeof client.v2.labor.shifts)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.labor.shifts[':id'].$delete(args, options))
}

export async function getV2LaborTeamMemberWages(
  args: InferRequestType<(typeof client.v2.labor)['team-member-wages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.labor['team-member-wages'].$get(args, options))
}

export async function getV2LaborTeamMemberWagesId(
  args: InferRequestType<(typeof client.v2.labor)['team-member-wages'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.labor['team-member-wages'][':id'].$get(args, options))
}

export async function getV2LaborWorkweekConfigs(
  args: InferRequestType<(typeof client.v2.labor)['workweek-configs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.labor['workweek-configs'].$get(args, options))
}

export async function putV2LaborWorkweekConfigsId(
  args: InferRequestType<(typeof client.v2.labor)['workweek-configs'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.labor['workweek-configs'][':id'].$put(args, options))
}

export async function getV2Locations(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.locations.$get(undefined, options))
}

export async function postV2Locations(
  args: InferRequestType<typeof client.v2.locations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.locations.$post(args, options))
}

export async function getV2LocationsLocationId(
  args: InferRequestType<(typeof client.v2.locations)[':location_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.locations[':location_id'].$get(args, options))
}

export async function putV2LocationsLocationId(
  args: InferRequestType<(typeof client.v2.locations)[':location_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.locations[':location_id'].$put(args, options))
}

export async function postV2LocationsLocationIdCheckouts(
  args: InferRequestType<(typeof client.v2.locations)[':location_id']['checkouts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.locations[':location_id'].checkouts.$post(args, options))
}

export async function getV2LocationsLocationIdRefunds(
  args: InferRequestType<(typeof client.v2.locations)[':location_id']['refunds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.locations[':location_id'].refunds.$get(args, options))
}

export async function getV2LocationsLocationIdTransactions(
  args: InferRequestType<(typeof client.v2.locations)[':location_id']['transactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.locations[':location_id'].transactions.$get(args, options))
}

export async function postV2LocationsLocationIdTransactions(
  args: InferRequestType<(typeof client.v2.locations)[':location_id']['transactions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.locations[':location_id'].transactions.$post(args, options))
}

export async function getV2LocationsLocationIdTransactionsTransactionId(
  args: InferRequestType<
    (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.locations[':location_id'].transactions[':transaction_id'].$get(args, options),
  )
}

export async function postV2LocationsLocationIdTransactionsTransactionIdCapture(
  args: InferRequestType<
    (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['capture']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.locations[':location_id'].transactions[':transaction_id'].capture.$post(
      args,
      options,
    ),
  )
}

export async function postV2LocationsLocationIdTransactionsTransactionIdRefund(
  args: InferRequestType<
    (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['refund']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.locations[':location_id'].transactions[':transaction_id'].refund.$post(args, options),
  )
}

export async function postV2LocationsLocationIdTransactionsTransactionIdVoid(
  args: InferRequestType<
    (typeof client.v2.locations)[':location_id']['transactions'][':transaction_id']['void']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.locations[':location_id'].transactions[':transaction_id'].void.$post(args, options),
  )
}

export async function postV2LoyaltyAccounts(
  args: InferRequestType<typeof client.v2.loyalty.accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.loyalty.accounts.$post(args, options))
}

export async function postV2LoyaltyAccountsSearch(
  args: InferRequestType<typeof client.v2.loyalty.accounts.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.loyalty.accounts.search.$post(args, options))
}

export async function getV2LoyaltyAccountsAccountId(
  args: InferRequestType<(typeof client.v2.loyalty.accounts)[':account_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.loyalty.accounts[':account_id'].$get(args, options))
}

export async function postV2LoyaltyAccountsAccountIdAccumulate(
  args: InferRequestType<(typeof client.v2.loyalty.accounts)[':account_id']['accumulate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.loyalty.accounts[':account_id'].accumulate.$post(args, options),
  )
}

export async function postV2LoyaltyAccountsAccountIdAdjust(
  args: InferRequestType<(typeof client.v2.loyalty.accounts)[':account_id']['adjust']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.loyalty.accounts[':account_id'].adjust.$post(args, options))
}

export async function postV2LoyaltyEventsSearch(
  args: InferRequestType<typeof client.v2.loyalty.events.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.loyalty.events.search.$post(args, options))
}

export async function getV2LoyaltyPrograms(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.loyalty.programs.$get(undefined, options))
}

export async function getV2LoyaltyProgramsProgramId(
  args: InferRequestType<(typeof client.v2.loyalty.programs)[':program_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.loyalty.programs[':program_id'].$get(args, options))
}

export async function postV2LoyaltyProgramsProgramIdCalculate(
  args: InferRequestType<(typeof client.v2.loyalty.programs)[':program_id']['calculate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.loyalty.programs[':program_id'].calculate.$post(args, options),
  )
}

export async function postV2LoyaltyRewards(
  args: InferRequestType<typeof client.v2.loyalty.rewards.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.loyalty.rewards.$post(args, options))
}

export async function postV2LoyaltyRewardsSearch(
  args: InferRequestType<typeof client.v2.loyalty.rewards.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.loyalty.rewards.search.$post(args, options))
}

export async function getV2LoyaltyRewardsRewardId(
  args: InferRequestType<(typeof client.v2.loyalty.rewards)[':reward_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.loyalty.rewards[':reward_id'].$get(args, options))
}

export async function deleteV2LoyaltyRewardsRewardId(
  args: InferRequestType<(typeof client.v2.loyalty.rewards)[':reward_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.loyalty.rewards[':reward_id'].$delete(args, options))
}

export async function postV2LoyaltyRewardsRewardIdRedeem(
  args: InferRequestType<(typeof client.v2.loyalty.rewards)[':reward_id']['redeem']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.loyalty.rewards[':reward_id'].redeem.$post(args, options))
}

export async function getV2Merchants(
  args: InferRequestType<typeof client.v2.merchants.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.merchants.$get(args, options))
}

export async function getV2MerchantsMerchantId(
  args: InferRequestType<(typeof client.v2.merchants)[':merchant_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.merchants[':merchant_id'].$get(args, options))
}

export async function postV2Orders(
  args: InferRequestType<typeof client.v2.orders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.orders.$post(args, options))
}

export async function postV2OrdersBatchRetrieve(
  args: InferRequestType<(typeof client.v2.orders)['batch-retrieve']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.orders['batch-retrieve'].$post(args, options))
}

export async function postV2OrdersCalculate(
  args: InferRequestType<typeof client.v2.orders.calculate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.orders.calculate.$post(args, options))
}

export async function postV2OrdersSearch(
  args: InferRequestType<typeof client.v2.orders.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.orders.search.$post(args, options))
}

export async function getV2OrdersOrderId(
  args: InferRequestType<(typeof client.v2.orders)[':order_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.orders[':order_id'].$get(args, options))
}

export async function putV2OrdersOrderId(
  args: InferRequestType<(typeof client.v2.orders)[':order_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.orders[':order_id'].$put(args, options))
}

export async function postV2OrdersOrderIdPay(
  args: InferRequestType<(typeof client.v2.orders)[':order_id']['pay']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.orders[':order_id'].pay.$post(args, options))
}

export async function getV2Payments(
  args: InferRequestType<typeof client.v2.payments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.payments.$get(args, options))
}

export async function postV2Payments(
  args: InferRequestType<typeof client.v2.payments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.payments.$post(args, options))
}

export async function postV2PaymentsCancel(
  args: InferRequestType<typeof client.v2.payments.cancel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.payments.cancel.$post(args, options))
}

export async function getV2PaymentsPaymentId(
  args: InferRequestType<(typeof client.v2.payments)[':payment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.payments[':payment_id'].$get(args, options))
}

export async function putV2PaymentsPaymentId(
  args: InferRequestType<(typeof client.v2.payments)[':payment_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.payments[':payment_id'].$put(args, options))
}

export async function postV2PaymentsPaymentIdCancel(
  args: InferRequestType<(typeof client.v2.payments)[':payment_id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.payments[':payment_id'].cancel.$post(args, options))
}

export async function postV2PaymentsPaymentIdComplete(
  args: InferRequestType<(typeof client.v2.payments)[':payment_id']['complete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.payments[':payment_id'].complete.$post(args, options))
}

export async function getV2Refunds(
  args: InferRequestType<typeof client.v2.refunds.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.refunds.$get(args, options))
}

export async function postV2Refunds(
  args: InferRequestType<typeof client.v2.refunds.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.refunds.$post(args, options))
}

export async function getV2RefundsRefundId(
  args: InferRequestType<(typeof client.v2.refunds)[':refund_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.refunds[':refund_id'].$get(args, options))
}

export async function getV2Sites(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.sites.$get(undefined, options))
}

export async function getV2SitesSiteIdSnippet(
  args: InferRequestType<(typeof client.v2.sites)[':site_id']['snippet']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.sites[':site_id'].snippet.$get(args, options))
}

export async function postV2SitesSiteIdSnippet(
  args: InferRequestType<(typeof client.v2.sites)[':site_id']['snippet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.sites[':site_id'].snippet.$post(args, options))
}

export async function deleteV2SitesSiteIdSnippet(
  args: InferRequestType<(typeof client.v2.sites)[':site_id']['snippet']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.sites[':site_id'].snippet.$delete(args, options))
}

export async function postV2Subscriptions(
  args: InferRequestType<typeof client.v2.subscriptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.subscriptions.$post(args, options))
}

export async function postV2SubscriptionsSearch(
  args: InferRequestType<typeof client.v2.subscriptions.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.subscriptions.search.$post(args, options))
}

export async function getV2SubscriptionsSubscriptionId(
  args: InferRequestType<(typeof client.v2.subscriptions)[':subscription_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.subscriptions[':subscription_id'].$get(args, options))
}

export async function putV2SubscriptionsSubscriptionId(
  args: InferRequestType<(typeof client.v2.subscriptions)[':subscription_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.subscriptions[':subscription_id'].$put(args, options))
}

export async function postV2SubscriptionsSubscriptionIdCancel(
  args: InferRequestType<(typeof client.v2.subscriptions)[':subscription_id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.subscriptions[':subscription_id'].cancel.$post(args, options),
  )
}

export async function getV2SubscriptionsSubscriptionIdEvents(
  args: InferRequestType<(typeof client.v2.subscriptions)[':subscription_id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.subscriptions[':subscription_id'].events.$get(args, options))
}

export async function postV2SubscriptionsSubscriptionIdResume(
  args: InferRequestType<(typeof client.v2.subscriptions)[':subscription_id']['resume']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.subscriptions[':subscription_id'].resume.$post(args, options),
  )
}

export async function postV2TeamMembers(
  args: InferRequestType<(typeof client.v2)['team-members']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['team-members'].$post(args, options))
}

export async function postV2TeamMembersBulkCreate(
  args: InferRequestType<(typeof client.v2)['team-members']['bulk-create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['team-members']['bulk-create'].$post(args, options))
}

export async function postV2TeamMembersBulkUpdate(
  args: InferRequestType<(typeof client.v2)['team-members']['bulk-update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['team-members']['bulk-update'].$post(args, options))
}

export async function postV2TeamMembersSearch(
  args: InferRequestType<(typeof client.v2)['team-members']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['team-members'].search.$post(args, options))
}

export async function getV2TeamMembersTeamMemberId(
  args: InferRequestType<(typeof client.v2)['team-members'][':team_member_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['team-members'][':team_member_id'].$get(args, options))
}

export async function putV2TeamMembersTeamMemberId(
  args: InferRequestType<(typeof client.v2)['team-members'][':team_member_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2['team-members'][':team_member_id'].$put(args, options))
}

export async function getV2TeamMembersTeamMemberIdWageSetting(
  args: InferRequestType<
    (typeof client.v2)['team-members'][':team_member_id']['wage-setting']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['team-members'][':team_member_id']['wage-setting'].$get(args, options),
  )
}

export async function putV2TeamMembersTeamMemberIdWageSetting(
  args: InferRequestType<
    (typeof client.v2)['team-members'][':team_member_id']['wage-setting']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2['team-members'][':team_member_id']['wage-setting'].$put(args, options),
  )
}

export async function postV2TerminalsCheckouts(
  args: InferRequestType<typeof client.v2.terminals.checkouts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.terminals.checkouts.$post(args, options))
}

export async function postV2TerminalsCheckoutsSearch(
  args: InferRequestType<typeof client.v2.terminals.checkouts.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.terminals.checkouts.search.$post(args, options))
}

export async function getV2TerminalsCheckoutsCheckoutId(
  args: InferRequestType<(typeof client.v2.terminals.checkouts)[':checkout_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.terminals.checkouts[':checkout_id'].$get(args, options))
}

export async function postV2TerminalsCheckoutsCheckoutIdCancel(
  args: InferRequestType<(typeof client.v2.terminals.checkouts)[':checkout_id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.terminals.checkouts[':checkout_id'].cancel.$post(args, options),
  )
}

export async function postV2TerminalsRefunds(
  args: InferRequestType<typeof client.v2.terminals.refunds.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.terminals.refunds.$post(args, options))
}

export async function postV2TerminalsRefundsSearch(
  args: InferRequestType<typeof client.v2.terminals.refunds.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.terminals.refunds.search.$post(args, options))
}

export async function getV2TerminalsRefundsTerminalRefundId(
  args: InferRequestType<(typeof client.v2.terminals.refunds)[':terminal_refund_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.terminals.refunds[':terminal_refund_id'].$get(args, options))
}

export async function postV2TerminalsRefundsTerminalRefundIdCancel(
  args: InferRequestType<
    (typeof client.v2.terminals.refunds)[':terminal_refund_id']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.terminals.refunds[':terminal_refund_id'].cancel.$post(args, options),
  )
}
