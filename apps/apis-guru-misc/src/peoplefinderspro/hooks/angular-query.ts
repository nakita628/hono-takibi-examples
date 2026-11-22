import { injectMutation, mutationOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectPostAddressAutocomplete<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAddressAutocompleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostContactEnrich<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostContactEnrichMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostEmailEnrich<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEmailEnrichMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostIdentityVerifyId<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIdentityVerifyIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostPhoneEnrich<TError = DefaultError, TOnMutateResult = unknown>(
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPhoneEnrichMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
