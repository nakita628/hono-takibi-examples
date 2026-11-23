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

export function getVisitorIdentificationKey() {
  return ['visitor-identification'] as const
}

export function getPostVisitorIdentification202609TokensCreateMutationKey() {
  return [
    'visitor-identification',
    '/visitor-identification/2026-09/tokens/create',
    'POST',
  ] as const
}

export function getPostVisitorIdentification202609TokensCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['visitor-identification']['2026-09']['tokens']['create']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['visitor-identification']['2026-09']['tokens']['create']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostVisitorIdentification202609TokensCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['visitor-identification']['2026-09']['tokens']['create']['$post']
      >,
    ) {
      return parseResponse(
        client['visitor-identification']['2026-09'].tokens.create.$post(args, options),
      )
    },
  })
}

export function injectPostVisitorIdentification202609TokensCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['visitor-identification']['2026-09']['tokens']['create']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['visitor-identification']['2026-09']['tokens']['create']['$post']
        >,
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
    const mutationDefaults = getPostVisitorIdentification202609TokensCreateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
