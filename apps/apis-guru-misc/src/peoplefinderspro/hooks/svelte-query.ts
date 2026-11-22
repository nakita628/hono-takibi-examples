import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
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

export function getPostAddressAutocompleteMutationKey() {
  return ['address', '/address/autocomplete', 'POST'] as const
}

export function getPostAddressAutocompleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.address.autocomplete.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.address.autocomplete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAddressAutocompleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.address.autocomplete.$post>) {
      return parseResponse(client.address.autocomplete.$post(args, options))
    },
  })
}

export function createPostAddressAutocomplete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.address.autocomplete.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.address.autocomplete.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAddressAutocompleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostContactEnrichMutationKey() {
  return ['contact', '/contact/enrich', 'POST'] as const
}

export function getPostContactEnrichMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contact.enrich.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.contact.enrich.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContactEnrichMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.contact.enrich.$post>) {
      return parseResponse(client.contact.enrich.$post(args, options))
    },
  })
}

export function createPostContactEnrich<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contact.enrich.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.contact.enrich.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostContactEnrichMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostEmailEnrichMutationKey() {
  return ['email', '/email/enrich', 'POST'] as const
}

export function getPostEmailEnrichMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.enrich.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.email.enrich.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEmailEnrichMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.email.enrich.$post>) {
      return parseResponse(client.email.enrich.$post(args, options))
    },
  })
}

export function createPostEmailEnrich<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.enrich.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.email.enrich.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEmailEnrichMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostIdentityVerifyIdMutationKey() {
  return ['identity', '/identity/verify_id', 'POST'] as const
}

export function getPostIdentityVerifyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.identity.verify_id.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.identity.verify_id.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIdentityVerifyIdMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.identity.verify_id.$post>) {
      return parseResponse(client.identity.verify_id.$post(args, options))
    },
  })
}

export function createPostIdentityVerifyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.identity.verify_id.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.identity.verify_id.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIdentityVerifyIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostPhoneEnrichMutationKey() {
  return ['phone', '/phone/enrich', 'POST'] as const
}

export function getPostPhoneEnrichMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.enrich.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.phone.enrich.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPhoneEnrichMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.phone.enrich.$post>) {
      return parseResponse(client.phone.enrich.$post(args, options))
    },
  })
}

export function createPostPhoneEnrich<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phone.enrich.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.phone.enrich.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPhoneEnrichMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
