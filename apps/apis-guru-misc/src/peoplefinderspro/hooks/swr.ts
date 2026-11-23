import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAddressKey() {
  return ['address'] as const
}

export function getContactKey() {
  return ['contact'] as const
}

export function getEmailKey() {
  return ['email'] as const
}

export function getIdentityKey() {
  return ['identity'] as const
}

export function getPhoneKey() {
  return ['phone'] as const
}

export function getPostAddressAutocompleteKey() {
  return ['address', '/address/autocomplete', 'POST'] as const
}

export function usePostAddressAutocomplete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.address.autocomplete.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.address.autocomplete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAddressAutocompleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.address.autocomplete.$post> },
      ) => parseResponse(client.address.autocomplete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostContactEnrichKey() {
  return ['contact', '/contact/enrich', 'POST'] as const
}

export function usePostContactEnrich<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contact.enrich.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.contact.enrich.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactEnrichKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.contact.enrich.$post> }) =>
        parseResponse(client.contact.enrich.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEmailEnrichKey() {
  return ['email', '/email/enrich', 'POST'] as const
}

export function usePostEmailEnrich<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.enrich.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.email.enrich.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmailEnrichKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.email.enrich.$post> }) =>
        parseResponse(client.email.enrich.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIdentityVerifyIdKey() {
  return ['identity', '/identity/verify_id', 'POST'] as const
}

export function usePostIdentityVerifyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.identity.verify_id.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.identity.verify_id.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIdentityVerifyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.identity.verify_id.$post> }) =>
        parseResponse(client.identity.verify_id.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPhoneEnrichKey() {
  return ['phone', '/phone/enrich', 'POST'] as const
}

export function usePostPhoneEnrich<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.enrich.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.phone.enrich.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPhoneEnrichKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.phone.enrich.$post> }) =>
        parseResponse(client.phone.enrich.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
