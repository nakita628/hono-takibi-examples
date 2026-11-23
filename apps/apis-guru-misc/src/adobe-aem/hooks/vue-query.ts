import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCqactionsHtmlKey() {
  return ['.cqactions.html'] as const
}

export function getAppsKey() {
  return ['apps'] as const
}

export function getBinKey() {
  return ['bin'] as const
}

export function getCrxKey() {
  return ['crx'] as const
}

export function getEtcKey() {
  return ['etc'] as const
}

export function getLibsKey() {
  return ['libs'] as const
}

export function getSystemKey() {
  return ['system'] as const
}

export function getIntermediatePathKey() {
  return ['{intermediatePath}'] as const
}

export function getPathKey() {
  return ['{path}'] as const
}

export function getPostCqactionsHtmlMutationKey() {
  return ['.cqactions.html', '/.cqactions.html', 'POST'] as const
}

export function getPostCqactionsHtmlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['.cqactions.html']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['.cqactions.html']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCqactionsHtmlMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['.cqactions.html']['$post']>) {
      return parseResponse(client['.cqactions.html'].$post(args, options))
    },
  })
}

export function usePostCqactionsHtml<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['.cqactions.html']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['.cqactions.html']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCqactionsHtmlMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAppsSystemConfigComAdobeGraniteAuthSamlSamlAuthenticationHandlerConfigMutationKey() {
  return [
    'apps',
    '/apps/system/config/com.adobe.granite.auth.saml.SamlAuthenticationHandler.config',
    'POST',
  ] as const
}

export function getPostAppsSystemConfigComAdobeGraniteAuthSamlSamlAuthenticationHandlerConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps.system.config)['com.adobe.granite.auth.saml.SamlAuthenticationHandler.config']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apps.system.config)['com.adobe.granite.auth.saml.SamlAuthenticationHandler.config']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAppsSystemConfigComAdobeGraniteAuthSamlSamlAuthenticationHandlerConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps.system.config)['com.adobe.granite.auth.saml.SamlAuthenticationHandler.config']['$post']
      >,
    ) {
      return parseResponse(
        client.apps.system.config[
          'com.adobe.granite.auth.saml.SamlAuthenticationHandler.config'
        ].$post(args, options),
      )
    },
  })
}

export function usePostAppsSystemConfigComAdobeGraniteAuthSamlSamlAuthenticationHandlerConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apps.system.config)['com.adobe.granite.auth.saml.SamlAuthenticationHandler.config']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apps.system.config)['com.adobe.granite.auth.saml.SamlAuthenticationHandler.config']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAppsSystemConfigComAdobeGraniteAuthSamlSamlAuthenticationHandlerConfigMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAppsSystemConfigComShinesolutionsAemPasswordresetActivatorMutationKey() {
  return [
    'apps',
    '/apps/system/config/com.shinesolutions.aem.passwordreset.Activator',
    'POST',
  ] as const
}

export function getPostAppsSystemConfigComShinesolutionsAemPasswordresetActivatorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps.system.config)['com.shinesolutions.aem.passwordreset.Activator']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apps.system.config)['com.shinesolutions.aem.passwordreset.Activator']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppsSystemConfigComShinesolutionsAemPasswordresetActivatorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps.system.config)['com.shinesolutions.aem.passwordreset.Activator']['$post']
      >,
    ) {
      return parseResponse(
        client.apps.system.config['com.shinesolutions.aem.passwordreset.Activator'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAppsSystemConfigComShinesolutionsAemPasswordresetActivator<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apps.system.config)['com.shinesolutions.aem.passwordreset.Activator']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apps.system.config)['com.shinesolutions.aem.passwordreset.Activator']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAppsSystemConfigComShinesolutionsAemPasswordresetActivatorMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAppsSystemConfigComShinesolutionsHealthcheckHcImplActiveBundleHealthCheckMutationKey() {
  return [
    'apps',
    '/apps/system/config/com.shinesolutions.healthcheck.hc.impl.ActiveBundleHealthCheck',
    'POST',
  ] as const
}

export function getPostAppsSystemConfigComShinesolutionsHealthcheckHcImplActiveBundleHealthCheckMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps.system.config)['com.shinesolutions.healthcheck.hc.impl.ActiveBundleHealthCheck']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apps.system.config)['com.shinesolutions.healthcheck.hc.impl.ActiveBundleHealthCheck']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAppsSystemConfigComShinesolutionsHealthcheckHcImplActiveBundleHealthCheckMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps.system.config)['com.shinesolutions.healthcheck.hc.impl.ActiveBundleHealthCheck']['$post']
      >,
    ) {
      return parseResponse(
        client.apps.system.config[
          'com.shinesolutions.healthcheck.hc.impl.ActiveBundleHealthCheck'
        ].$post(args, options),
      )
    },
  })
}

export function usePostAppsSystemConfigComShinesolutionsHealthcheckHcImplActiveBundleHealthCheck<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apps.system.config)['com.shinesolutions.healthcheck.hc.impl.ActiveBundleHealthCheck']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apps.system.config)['com.shinesolutions.healthcheck.hc.impl.ActiveBundleHealthCheck']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAppsSystemConfigComShinesolutionsHealthcheckHcImplActiveBundleHealthCheckMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAppsSystemConfigOrgApacheFelixHttpMutationKey() {
  return ['apps', '/apps/system/config/org.apache.felix.http', 'POST'] as const
}

export function getPostAppsSystemConfigOrgApacheFelixHttpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps.system.config)['org.apache.felix.http']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps.system.config)['org.apache.felix.http']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsSystemConfigOrgApacheFelixHttpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps.system.config)['org.apache.felix.http']['$post']>,
    ) {
      return parseResponse(client.apps.system.config['org.apache.felix.http'].$post(args, options))
    },
  })
}

export function usePostAppsSystemConfigOrgApacheFelixHttp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps.system.config)['org.apache.felix.http']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps.system.config)['org.apache.felix.http']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsSystemConfigOrgApacheFelixHttpMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAppsSystemConfigOrgApacheHttpProxyconfiguratorConfigMutationKey() {
  return ['apps', '/apps/system/config/org.apache.http.proxyconfigurator.config', 'POST'] as const
}

export function getPostAppsSystemConfigOrgApacheHttpProxyconfiguratorConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps.system.config)['org.apache.http.proxyconfigurator.config']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apps.system.config)['org.apache.http.proxyconfigurator.config']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppsSystemConfigOrgApacheHttpProxyconfiguratorConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps.system.config)['org.apache.http.proxyconfigurator.config']['$post']
      >,
    ) {
      return parseResponse(
        client.apps.system.config['org.apache.http.proxyconfigurator.config'].$post(args, options),
      )
    },
  })
}

export function usePostAppsSystemConfigOrgApacheHttpProxyconfiguratorConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apps.system.config)['org.apache.http.proxyconfigurator.config']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apps.system.config)['org.apache.http.proxyconfigurator.config']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAppsSystemConfigOrgApacheHttpProxyconfiguratorConfigMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAppsSystemConfigOrgApacheSlingJcrDavexImplServletsSlingDavExServletMutationKey() {
  return [
    'apps',
    '/apps/system/config/org.apache.sling.jcr.davex.impl.servlets.SlingDavExServlet',
    'POST',
  ] as const
}

export function getPostAppsSystemConfigOrgApacheSlingJcrDavexImplServletsSlingDavExServletMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps.system.config)['org.apache.sling.jcr.davex.impl.servlets.SlingDavExServlet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apps.system.config)['org.apache.sling.jcr.davex.impl.servlets.SlingDavExServlet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAppsSystemConfigOrgApacheSlingJcrDavexImplServletsSlingDavExServletMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps.system.config)['org.apache.sling.jcr.davex.impl.servlets.SlingDavExServlet']['$post']
      >,
    ) {
      return parseResponse(
        client.apps.system.config[
          'org.apache.sling.jcr.davex.impl.servlets.SlingDavExServlet'
        ].$post(args, options),
      )
    },
  })
}

export function usePostAppsSystemConfigOrgApacheSlingJcrDavexImplServletsSlingDavExServlet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apps.system.config)['org.apache.sling.jcr.davex.impl.servlets.SlingDavExServlet']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apps.system.config)['org.apache.sling.jcr.davex.impl.servlets.SlingDavExServlet']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAppsSystemConfigOrgApacheSlingJcrDavexImplServletsSlingDavExServletMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAppsSystemConfigOrgApacheSlingSecurityImplReferrerFilterMutationKey() {
  return [
    'apps',
    '/apps/system/config/org.apache.sling.security.impl.ReferrerFilter',
    'POST',
  ] as const
}

export function getPostAppsSystemConfigOrgApacheSlingSecurityImplReferrerFilterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps.system.config)['org.apache.sling.security.impl.ReferrerFilter']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apps.system.config)['org.apache.sling.security.impl.ReferrerFilter']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppsSystemConfigOrgApacheSlingSecurityImplReferrerFilterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps.system.config)['org.apache.sling.security.impl.ReferrerFilter']['$post']
      >,
    ) {
      return parseResponse(
        client.apps.system.config['org.apache.sling.security.impl.ReferrerFilter'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAppsSystemConfigOrgApacheSlingSecurityImplReferrerFilter<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apps.system.config)['org.apache.sling.security.impl.ReferrerFilter']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apps.system.config)['org.apache.sling.security.impl.ReferrerFilter']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAppsSystemConfigOrgApacheSlingSecurityImplReferrerFilterMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAppsSystemConfigOrgApacheSlingServletsGetDefaultGetServletMutationKey() {
  return [
    'apps',
    '/apps/system/config/org.apache.sling.servlets.get.DefaultGetServlet',
    'POST',
  ] as const
}

export function getPostAppsSystemConfigOrgApacheSlingServletsGetDefaultGetServletMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps.system.config)['org.apache.sling.servlets.get.DefaultGetServlet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apps.system.config)['org.apache.sling.servlets.get.DefaultGetServlet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppsSystemConfigOrgApacheSlingServletsGetDefaultGetServletMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps.system.config)['org.apache.sling.servlets.get.DefaultGetServlet']['$post']
      >,
    ) {
      return parseResponse(
        client.apps.system.config['org.apache.sling.servlets.get.DefaultGetServlet'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAppsSystemConfigOrgApacheSlingServletsGetDefaultGetServlet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.apps.system.config)['org.apache.sling.servlets.get.DefaultGetServlet']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apps.system.config)['org.apache.sling.servlets.get.DefaultGetServlet']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAppsSystemConfigOrgApacheSlingServletsGetDefaultGetServletMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAppsSystemConfigConfigNodeNameMutationKey() {
  return ['apps', '/apps/system/config/:configNodeName', 'POST'] as const
}

export function getPostAppsSystemConfigConfigNodeNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps.system.config)[':configNodeName']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps.system.config)[':configNodeName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsSystemConfigConfigNodeNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps.system.config)[':configNodeName']['$post']>,
    ) {
      return parseResponse(client.apps.system.config[':configNodeName'].$post(args, options))
    },
  })
}

export function usePostAppsSystemConfigConfigNodeName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apps.system.config)[':configNodeName']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps.system.config)[':configNodeName']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAppsSystemConfigConfigNodeNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBinQuerybuilderJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bin)['querybuilder.json']['$get']>>,
) {
  return ['bin', '/bin/querybuilder.json', toValue(args)] as const
}

export function getBinQuerybuilderJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bin)['querybuilder.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBinQuerybuilderJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bin['querybuilder.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBinQuerybuilderJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.bin)['querybuilder.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bin)['querybuilder.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bin)['querybuilder.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bin)['querybuilder.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBinQuerybuilderJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.bin)['querybuilder.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBinQuerybuilderJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBinQuerybuilderJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bin['querybuilder.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBinQuerybuilderJsonMutationKey() {
  return ['bin', '/bin/querybuilder.json', 'POST'] as const
}

export function getPostBinQuerybuilderJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.bin)['querybuilder.json']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.bin)['querybuilder.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBinQuerybuilderJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.bin)['querybuilder.json']['$post']>) {
      return parseResponse(client.bin['querybuilder.json'].$post(args, options))
    },
  })
}

export function usePostBinQuerybuilderJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.bin)['querybuilder.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.bin)['querybuilder.json']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBinQuerybuilderJsonMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCrxExplorerUiSetpasswordJspMutationKey() {
  return ['crx', '/crx/explorer/ui/setpassword.jsp', 'POST'] as const
}

export function getPostCrxExplorerUiSetpasswordJspMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crx.explorer.ui)['setpassword.jsp']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.crx.explorer.ui)['setpassword.jsp']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrxExplorerUiSetpasswordJspMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.crx.explorer.ui)['setpassword.jsp']['$post']>,
    ) {
      return parseResponse(client.crx.explorer.ui['setpassword.jsp'].$post(args, options))
    },
  })
}

export function usePostCrxExplorerUiSetpasswordJsp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crx.explorer.ui)['setpassword.jsp']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.crx.explorer.ui)['setpassword.jsp']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrxExplorerUiSetpasswordJspMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCrxPackmgrInstallstatusJspQueryKey() {
  return ['crx', '/crx/packmgr/installstatus.jsp'] as const
}

export function getCrxPackmgrInstallstatusJspQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCrxPackmgrInstallstatusJspQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crx.packmgr['installstatus.jsp'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrxPackmgrInstallstatusJsp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crx.packmgr)['installstatus.jsp']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crx.packmgr)['installstatus.jsp']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crx.packmgr)['installstatus.jsp']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCrxPackmgrInstallstatusJspQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crx.packmgr)['installstatus.jsp']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrxPackmgrInstallstatusJspQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCrxPackmgrInstallstatusJspQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.crx.packmgr['installstatus.jsp'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCrxPackmgrServiceJspMutationKey() {
  return ['crx', '/crx/packmgr/service.jsp', 'POST'] as const
}

export function getPostCrxPackmgrServiceJspMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crx.packmgr)['service.jsp']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.crx.packmgr)['service.jsp']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrxPackmgrServiceJspMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.crx.packmgr)['service.jsp']['$post']>) {
      return parseResponse(client.crx.packmgr['service.jsp'].$post(args, options))
    },
  })
}

export function usePostCrxPackmgrServiceJsp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crx.packmgr)['service.jsp']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.crx.packmgr)['service.jsp']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrxPackmgrServiceJspMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCrxPackmgrServiceJsonPathMutationKey() {
  return ['crx', '/crx/packmgr/service/.json/:path', 'POST'] as const
}

export function getPostCrxPackmgrServiceJsonPathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crx.packmgr.service)['.json'][':path']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.crx.packmgr.service)['.json'][':path']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrxPackmgrServiceJsonPathMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.crx.packmgr.service)['.json'][':path']['$post']>,
    ) {
      return parseResponse(client.crx.packmgr.service['.json'][':path'].$post(args, options))
    },
  })
}

export function usePostCrxPackmgrServiceJsonPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crx.packmgr.service)['.json'][':path']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.crx.packmgr.service)['.json'][':path']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrxPackmgrServiceJsonPathMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCrxPackmgrServiceScriptHtmlQueryKey() {
  return ['crx', '/crx/packmgr/service/script.html'] as const
}

export function getCrxPackmgrServiceScriptHtmlQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCrxPackmgrServiceScriptHtmlQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crx.packmgr.service['script.html'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrxPackmgrServiceScriptHtml<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crx.packmgr.service)['script.html']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crx.packmgr.service)['script.html']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crx.packmgr.service)['script.html']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCrxPackmgrServiceScriptHtmlQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crx.packmgr.service)['script.html']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrxPackmgrServiceScriptHtmlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCrxPackmgrServiceScriptHtmlQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.crx.packmgr.service['script.html'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCrxPackmgrUpdateJspMutationKey() {
  return ['crx', '/crx/packmgr/update.jsp', 'POST'] as const
}

export function getPostCrxPackmgrUpdateJspMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crx.packmgr)['update.jsp']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.crx.packmgr)['update.jsp']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrxPackmgrUpdateJspMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.crx.packmgr)['update.jsp']['$post']>) {
      return parseResponse(client.crx.packmgr['update.jsp'].$post(args, options))
    },
  })
}

export function usePostCrxPackmgrUpdateJsp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crx.packmgr)['update.jsp']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.crx.packmgr)['update.jsp']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrxPackmgrUpdateJspMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCrxServerCrxDefaultJcrRoot1JsonQueryKey() {
  return ['crx', '/crx/server/crx.default/jcr:root/.1.json'] as const
}

export function getCrxServerCrxDefaultJcrRoot1JsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCrxServerCrxDefaultJcrRoot1JsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crx.server['crx.default']['jcr:root']['.1.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrxServerCrxDefaultJcrRoot1Json<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.crx.server)['crx.default']['jcr:root']['.1.json']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.crx.server)['crx.default']['jcr:root']['.1.json']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.crx.server)['crx.default']['jcr:root']['.1.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCrxServerCrxDefaultJcrRoot1JsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.crx.server)['crx.default']['jcr:root']['.1.json']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrxServerCrxDefaultJcrRoot1JsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCrxServerCrxDefaultJcrRoot1JsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.crx.server['crx.default']['jcr:root']['.1.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEtcPackagesGroupNameVersionZipQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.etc.packages)[':group'][':name-{version}.zip']['$get']>
  >,
) {
  return ['etc', '/etc/packages/:group/:name-{version}.zip', toValue(args)] as const
}

export function getEtcPackagesGroupNameVersionZipQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.etc.packages)[':group'][':name-{version}.zip']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEtcPackagesGroupNameVersionZipQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.etc.packages[':group'][':name-{version}.zip'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEtcPackagesGroupNameVersionZip<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.etc.packages)[':group'][':name-{version}.zip']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.etc.packages)[':group'][':name-{version}.zip']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.etc.packages)[':group'][':name-{version}.zip']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.etc.packages)[':group'][':name-{version}.zip']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEtcPackagesGroupNameVersionZipQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.etc.packages)[':group'][':name-{version}.zip']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEtcPackagesGroupNameVersionZipQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEtcPackagesGroupNameVersionZipQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.etc.packages[':group'][':name-{version}.zip'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEtcPackagesGroupNameVersionZipJcrContentVltDefinitionFilterTidy2JsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.etc.packages)[':group'][':name-{version}.zip']['jcr:content']['vlt:definition']['filter.tidy.2.json']['$get']
    >
  >,
) {
  return [
    'etc',
    '/etc/packages/:group/:name-{version}.zip/jcr:content/vlt:definition/filter.tidy.2.json',
    toValue(args),
  ] as const
}

export function getEtcPackagesGroupNameVersionZipJcrContentVltDefinitionFilterTidy2JsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.etc.packages)[':group'][':name-{version}.zip']['jcr:content']['vlt:definition']['filter.tidy.2.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getEtcPackagesGroupNameVersionZipJcrContentVltDefinitionFilterTidy2JsonQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.etc.packages[':group'][':name-{version}.zip']['jcr:content']['vlt:definition'][
          'filter.tidy.2.json'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEtcPackagesGroupNameVersionZipJcrContentVltDefinitionFilterTidy2Json<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.etc.packages)[':group'][':name-{version}.zip']['jcr:content']['vlt:definition']['filter.tidy.2.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.etc.packages)[':group'][':name-{version}.zip']['jcr:content']['vlt:definition']['filter.tidy.2.json']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.etc.packages)[':group'][':name-{version}.zip']['jcr:content']['vlt:definition']['filter.tidy.2.json']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.etc.packages)[':group'][':name-{version}.zip']['jcr:content']['vlt:definition']['filter.tidy.2.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getEtcPackagesGroupNameVersionZipJcrContentVltDefinitionFilterTidy2JsonQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.etc.packages)[':group'][':name-{version}.zip']['jcr:content']['vlt:definition']['filter.tidy.2.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getEtcPackagesGroupNameVersionZipJcrContentVltDefinitionFilterTidy2JsonQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getEtcPackagesGroupNameVersionZipJcrContentVltDefinitionFilterTidy2JsonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.etc.packages[':group'][':name-{version}.zip']['jcr:content']['vlt:definition'][
            'filter.tidy.2.json'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getEtcReplicationAgentsRunmode1JsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.etc.replication)['agents.{runmode}.-1.json']['$get']>
  >,
) {
  return ['etc', '/etc/replication/agents.{runmode}.-1.json', toValue(args)] as const
}

export function getEtcReplicationAgentsRunmode1JsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.etc.replication)['agents.{runmode}.-1.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEtcReplicationAgentsRunmode1JsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.etc.replication['agents.{runmode}.-1.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEtcReplicationAgentsRunmode1Json<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.etc.replication)['agents.{runmode}.-1.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.etc.replication)['agents.{runmode}.-1.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.etc.replication)['agents.{runmode}.-1.json']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.etc.replication)['agents.{runmode}.-1.json']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEtcReplicationAgentsRunmode1JsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.etc.replication)['agents.{runmode}.-1.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEtcReplicationAgentsRunmode1JsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEtcReplicationAgentsRunmode1JsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.etc.replication['agents.{runmode}.-1.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEtcReplicationAgentsRunmodeNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.etc.replication)['agents.{runmode}'][':name']['$get']>
  >,
) {
  return ['etc', '/etc/replication/agents.{runmode}/:name', toValue(args)] as const
}

export function getEtcReplicationAgentsRunmodeNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.etc.replication)['agents.{runmode}'][':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEtcReplicationAgentsRunmodeNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.etc.replication['agents.{runmode}'][':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEtcReplicationAgentsRunmodeName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.etc.replication)['agents.{runmode}'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.etc.replication)['agents.{runmode}'][':name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.etc.replication)['agents.{runmode}'][':name']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.etc.replication)['agents.{runmode}'][':name']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEtcReplicationAgentsRunmodeNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.etc.replication)['agents.{runmode}'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEtcReplicationAgentsRunmodeNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEtcReplicationAgentsRunmodeNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.etc.replication['agents.{runmode}'][':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEtcReplicationAgentsRunmodeNameMutationKey() {
  return ['etc', '/etc/replication/agents.{runmode}/:name', 'POST'] as const
}

export function getPostEtcReplicationAgentsRunmodeNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.etc.replication)['agents.{runmode}'][':name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.etc.replication)['agents.{runmode}'][':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEtcReplicationAgentsRunmodeNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.etc.replication)['agents.{runmode}'][':name']['$post']>,
    ) {
      return parseResponse(client.etc.replication['agents.{runmode}'][':name'].$post(args, options))
    },
  })
}

export function usePostEtcReplicationAgentsRunmodeName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.etc.replication)['agents.{runmode}'][':name']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.etc.replication)['agents.{runmode}'][':name']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEtcReplicationAgentsRunmodeNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteEtcReplicationAgentsRunmodeNameMutationKey() {
  return ['etc', '/etc/replication/agents.{runmode}/:name', 'DELETE'] as const
}

export function getDeleteEtcReplicationAgentsRunmodeNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.etc.replication)['agents.{runmode}'][':name']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.etc.replication)['agents.{runmode}'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEtcReplicationAgentsRunmodeNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.etc.replication)['agents.{runmode}'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.etc.replication['agents.{runmode}'][':name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteEtcReplicationAgentsRunmodeName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.etc.replication)['agents.{runmode}'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.etc.replication)['agents.{runmode}'][':name']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteEtcReplicationAgentsRunmodeNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostEtcTruststoreMutationKey() {
  return ['etc', '/etc/truststore', 'POST'] as const
}

export function getPostEtcTruststoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etc.truststore.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.etc.truststore.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEtcTruststoreMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.etc.truststore.$post>) {
      return parseResponse(client.etc.truststore.$post(args, options))
    },
  })
}

export function usePostEtcTruststore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.etc.truststore.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.etc.truststore.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEtcTruststoreMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getEtcTruststoreTruststoreP12QueryKey() {
  return ['etc', '/etc/truststore/truststore.p12'] as const
}

export function getEtcTruststoreTruststoreP12QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getEtcTruststoreTruststoreP12QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.etc.truststore['truststore.p12'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEtcTruststoreTruststoreP12<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.etc.truststore)['truststore.p12']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.etc.truststore)['truststore.p12']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.etc.truststore)['truststore.p12']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEtcTruststoreTruststoreP12QueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.etc.truststore)['truststore.p12']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEtcTruststoreTruststoreP12QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEtcTruststoreTruststoreP12QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.etc.truststore['truststore.p12'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLibsGraniteCoreContentLoginHtmlQueryKey() {
  return ['libs', '/libs/granite/core/content/login.html'] as const
}

export function getLibsGraniteCoreContentLoginHtmlQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLibsGraniteCoreContentLoginHtmlQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.libs.granite.core.content['login.html'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLibsGraniteCoreContentLoginHtml<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.libs.granite.core.content)['login.html']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.libs.granite.core.content)['login.html']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.libs.granite.core.content)['login.html']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLibsGraniteCoreContentLoginHtmlQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.libs.granite.core.content)['login.html']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLibsGraniteCoreContentLoginHtmlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLibsGraniteCoreContentLoginHtmlQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.libs.granite.core.content['login.html'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLibsGraniteSecurityPostAuthorizablesMutationKey() {
  return ['libs', '/libs/granite/security/post/authorizables', 'POST'] as const
}

export function getPostLibsGraniteSecurityPostAuthorizablesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.libs.granite.security.post.authorizables.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.libs.granite.security.post.authorizables.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLibsGraniteSecurityPostAuthorizablesMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.libs.granite.security.post.authorizables.$post>,
    ) {
      return parseResponse(client.libs.granite.security.post.authorizables.$post(args, options))
    },
  })
}

export function usePostLibsGraniteSecurityPostAuthorizables<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.libs.granite.security.post.authorizables.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.libs.granite.security.post.authorizables.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLibsGraniteSecurityPostAuthorizablesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostLibsGraniteSecurityPostSslSetupHtmlMutationKey() {
  return ['libs', '/libs/granite/security/post/sslSetup.html', 'POST'] as const
}

export function getPostLibsGraniteSecurityPostSslSetupHtmlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.libs.granite.security.post)['sslSetup.html']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.libs.granite.security.post)['sslSetup.html']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLibsGraniteSecurityPostSslSetupHtmlMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.libs.granite.security.post)['sslSetup.html']['$post']>,
    ) {
      return parseResponse(client.libs.granite.security.post['sslSetup.html'].$post(args, options))
    },
  })
}

export function usePostLibsGraniteSecurityPostSslSetupHtml<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.libs.granite.security.post)['sslSetup.html']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.libs.granite.security.post)['sslSetup.html']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLibsGraniteSecurityPostSslSetupHtmlMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostLibsGraniteSecurityPostTruststoreMutationKey() {
  return ['libs', '/libs/granite/security/post/truststore', 'POST'] as const
}

export function getPostLibsGraniteSecurityPostTruststoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.libs.granite.security.post.truststore.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.libs.granite.security.post.truststore.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLibsGraniteSecurityPostTruststoreMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.libs.granite.security.post.truststore.$post>,
    ) {
      return parseResponse(client.libs.granite.security.post.truststore.$post(args, options))
    },
  })
}

export function usePostLibsGraniteSecurityPostTruststore<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.libs.granite.security.post.truststore.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.libs.granite.security.post.truststore.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLibsGraniteSecurityPostTruststoreMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLibsGraniteSecurityTruststoreJsonQueryKey() {
  return ['libs', '/libs/granite/security/truststore.json'] as const
}

export function getLibsGraniteSecurityTruststoreJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLibsGraniteSecurityTruststoreJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.libs.granite.security['truststore.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLibsGraniteSecurityTruststoreJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.libs.granite.security)['truststore.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.libs.granite.security)['truststore.json']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.libs.granite.security)['truststore.json']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getLibsGraniteSecurityTruststoreJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.libs.granite.security)['truststore.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLibsGraniteSecurityTruststoreJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLibsGraniteSecurityTruststoreJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.libs.granite.security['truststore.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLibsReplicationTreeactivationHtmlMutationKey() {
  return ['libs', '/libs/replication/treeactivation.html', 'POST'] as const
}

export function getPostLibsReplicationTreeactivationHtmlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.libs.replication)['treeactivation.html']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.libs.replication)['treeactivation.html']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLibsReplicationTreeactivationHtmlMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.libs.replication)['treeactivation.html']['$post']>,
    ) {
      return parseResponse(client.libs.replication['treeactivation.html'].$post(args, options))
    },
  })
}

export function usePostLibsReplicationTreeactivationHtml<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.libs.replication)['treeactivation.html']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.libs.replication)['treeactivation.html']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLibsReplicationTreeactivationHtmlMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSystemConsoleBundlesNameMutationKey() {
  return ['system', '/system/console/bundles/:name', 'POST'] as const
}

export function getPostSystemConsoleBundlesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.system.console.bundles)[':name']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.system.console.bundles)[':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSystemConsoleBundlesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.system.console.bundles)[':name']['$post']>,
    ) {
      return parseResponse(client.system.console.bundles[':name'].$post(args, options))
    },
  })
}

export function usePostSystemConsoleBundlesName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.system.console.bundles)[':name']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.system.console.bundles)[':name']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSystemConsoleBundlesNameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSystemConsoleBundlesNameJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.system.console.bundles)[':name.json']['$get']>
  >,
) {
  return ['system', '/system/console/bundles/:name.json', toValue(args)] as const
}

export function getSystemConsoleBundlesNameJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.system.console.bundles)[':name.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSystemConsoleBundlesNameJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.system.console.bundles[':name.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSystemConsoleBundlesNameJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.system.console.bundles)[':name.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.system.console.bundles)[':name.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.system.console.bundles)[':name.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.system.console.bundles)[':name.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSystemConsoleBundlesNameJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.system.console.bundles)[':name.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSystemConsoleBundlesNameJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSystemConsoleBundlesNameJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.system.console.bundles[':name.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSystemConsoleConfigMgrQueryKey() {
  return ['system', '/system/console/configMgr'] as const
}

export function getSystemConsoleConfigMgrQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSystemConsoleConfigMgrQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.system.console.configMgr.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSystemConsoleConfigMgr<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.system.console.configMgr.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.system.console.configMgr.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.system.console.configMgr.$get>>>
            >
          >,
          ReturnType<typeof getSystemConsoleConfigMgrQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.system.console.configMgr.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSystemConsoleConfigMgrQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSystemConsoleConfigMgrQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.system.console.configMgr.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSystemConsoleConfigMgrComAdobeGraniteAuthSamlSamlAuthenticationHandlerMutationKey() {
  return [
    'system',
    '/system/console/configMgr/com.adobe.granite.auth.saml.SamlAuthenticationHandler',
    'POST',
  ] as const
}

export function getPostSystemConsoleConfigMgrComAdobeGraniteAuthSamlSamlAuthenticationHandlerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.system.console.configMgr)['com.adobe.granite.auth.saml.SamlAuthenticationHandler']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.system.console.configMgr)['com.adobe.granite.auth.saml.SamlAuthenticationHandler']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostSystemConsoleConfigMgrComAdobeGraniteAuthSamlSamlAuthenticationHandlerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.system.console.configMgr)['com.adobe.granite.auth.saml.SamlAuthenticationHandler']['$post']
      >,
    ) {
      return parseResponse(
        client.system.console.configMgr[
          'com.adobe.granite.auth.saml.SamlAuthenticationHandler'
        ].$post(args, options),
      )
    },
  })
}

export function usePostSystemConsoleConfigMgrComAdobeGraniteAuthSamlSamlAuthenticationHandler<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.system.console.configMgr)['com.adobe.granite.auth.saml.SamlAuthenticationHandler']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.system.console.configMgr)['com.adobe.granite.auth.saml.SamlAuthenticationHandler']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostSystemConsoleConfigMgrComAdobeGraniteAuthSamlSamlAuthenticationHandlerMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSystemConsoleJmxComAdobeGraniteTypeRepositoryOpActionMutationKey() {
  return [
    'system',
    '/system/console/jmx/com.adobe.granite:type=Repository/op/:action',
    'POST',
  ] as const
}

export function getPostSystemConsoleJmxComAdobeGraniteTypeRepositoryOpActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.system.console.jmx)['com.adobe.granite:type=Repository']['op'][':action']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.system.console.jmx)['com.adobe.granite:type=Repository']['op'][':action']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSystemConsoleJmxComAdobeGraniteTypeRepositoryOpActionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.system.console.jmx)['com.adobe.granite:type=Repository']['op'][':action']['$post']
      >,
    ) {
      return parseResponse(
        client.system.console.jmx['com.adobe.granite:type=Repository'].op[':action'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostSystemConsoleJmxComAdobeGraniteTypeRepositoryOpAction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.system.console.jmx)['com.adobe.granite:type=Repository']['op'][':action']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.system.console.jmx)['com.adobe.granite:type=Repository']['op'][':action']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostSystemConsoleJmxComAdobeGraniteTypeRepositoryOpActionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSystemConsoleStatusProductinfoJsonQueryKey() {
  return ['system', '/system/console/status-productinfo.json'] as const
}

export function getSystemConsoleStatusProductinfoJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSystemConsoleStatusProductinfoJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.system.console['status-productinfo.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSystemConsoleStatusProductinfoJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.system.console)['status-productinfo.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.system.console)['status-productinfo.json']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.system.console)['status-productinfo.json']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSystemConsoleStatusProductinfoJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.system.console)['status-productinfo.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSystemConsoleStatusProductinfoJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSystemConsoleStatusProductinfoJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.system.console['status-productinfo.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSystemHealthQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.system.health.$get>>,
) {
  return ['system', '/system/health', toValue(args)] as const
}

export function getSystemHealthQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.system.health.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSystemHealthQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.system.health.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSystemHealth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.health.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.system.health.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.health.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.health.$get>>>>
          >,
          ReturnType<typeof getSystemHealthQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSystemHealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSystemHealthQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.system.health.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostIntermediatePathAuthorizableIdKsHtmlMutationKey() {
  return [':intermediatePath', '/:intermediatePath/:authorizableId.ks.html', 'POST'] as const
}

export function getPostIntermediatePathAuthorizableIdKsHtmlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':intermediatePath'][':authorizableId.ks.html']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':intermediatePath'][':authorizableId.ks.html']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIntermediatePathAuthorizableIdKsHtmlMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':intermediatePath'][':authorizableId.ks.html']['$post']
      >,
    ) {
      return parseResponse(
        client[':intermediatePath'][':authorizableId.ks.html'].$post(args, options),
      )
    },
  })
}

export function usePostIntermediatePathAuthorizableIdKsHtml<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':intermediatePath'][':authorizableId.ks.html']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':intermediatePath'][':authorizableId.ks.html']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIntermediatePathAuthorizableIdKsHtmlMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIntermediatePathAuthorizableIdKsJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':intermediatePath'][':authorizableId.ks.json']['$get']>
  >,
) {
  return [':intermediatePath', '/:intermediatePath/:authorizableId.ks.json', toValue(args)] as const
}

export function getIntermediatePathAuthorizableIdKsJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':intermediatePath'][':authorizableId.ks.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIntermediatePathAuthorizableIdKsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':intermediatePath'][':authorizableId.ks.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIntermediatePathAuthorizableIdKsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':intermediatePath'][':authorizableId.ks.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':intermediatePath'][':authorizableId.ks.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':intermediatePath'][':authorizableId.ks.json']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':intermediatePath'][':authorizableId.ks.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getIntermediatePathAuthorizableIdKsJsonQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':intermediatePath'][':authorizableId.ks.json']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntermediatePathAuthorizableIdKsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIntermediatePathAuthorizableIdKsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':intermediatePath'][':authorizableId.ks.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIntermediatePathAuthorizableIdKeystoreStoreP12QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':intermediatePath'][':authorizableId']['keystore']['store.p12']['$get']
    >
  >,
) {
  return [
    ':intermediatePath',
    '/:intermediatePath/:authorizableId/keystore/store.p12',
    toValue(args),
  ] as const
}

export function getIntermediatePathAuthorizableIdKeystoreStoreP12QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':intermediatePath'][':authorizableId']['keystore']['store.p12']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIntermediatePathAuthorizableIdKeystoreStoreP12QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':intermediatePath'][':authorizableId'].keystore['store.p12'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIntermediatePathAuthorizableIdKeystoreStoreP12<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':intermediatePath'][':authorizableId']['keystore']['store.p12']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':intermediatePath'][':authorizableId']['keystore']['store.p12']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':intermediatePath'][':authorizableId']['keystore']['store.p12']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':intermediatePath'][':authorizableId']['keystore']['store.p12']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getIntermediatePathAuthorizableIdKeystoreStoreP12QueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':intermediatePath'][':authorizableId']['keystore']['store.p12']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntermediatePathAuthorizableIdKeystoreStoreP12QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIntermediatePathAuthorizableIdKeystoreStoreP12QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':intermediatePath'][':authorizableId'].keystore['store.p12'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPathIndexMutationKey() {
  return [':path', '/:path/', 'POST'] as const
}

export function getPostPathIndexMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['index']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':path']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPathIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':path']['index']['$post']>) {
      return parseResponse(client[':path'].index.$post(args, options))
    },
  })
}

export function usePostPathIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['index']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)[':path']['index']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPathIndexMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPathNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':path'][':name']['$get']>>,
) {
  return [':path', '/:path/:name', toValue(args)] as const
}

export function getPathNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':path'][':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPathNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':path'][':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePathName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path'][':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':path'][':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':path'][':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':path'][':name']['$get']>>>
            >
          >,
          ReturnType<typeof getPathNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':path'][':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPathNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPathNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':path'][':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPathNameMutationKey() {
  return [':path', '/:path/:name', 'POST'] as const
}

export function getPostPathNameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':path'][':name']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':path'][':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPathNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':path'][':name']['$post']>) {
      return parseResponse(client[':path'][':name'].$post(args, options))
    },
  })
}

export function usePostPathName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':path'][':name']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)[':path'][':name']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPathNameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeletePathNameMutationKey() {
  return [':path', '/:path/:name', 'DELETE'] as const
}

export function getDeletePathNameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':path'][':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':path'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePathNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':path'][':name']['$delete']>) {
      return parseResponse(client[':path'][':name'].$delete(args, options))
    },
  })
}

export function useDeletePathName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':path'][':name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':path'][':name']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePathNameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostPathNameRwHtmlMutationKey() {
  return [':path', '/:path/:name.rw.html', 'POST'] as const
}

export function getPostPathNameRwHtmlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':path'][':name.rw.html']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':path'][':name.rw.html']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPathNameRwHtmlMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':path'][':name.rw.html']['$post']>) {
      return parseResponse(client[':path'][':name.rw.html'].$post(args, options))
    },
  })
}

export function usePostPathNameRwHtml<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':path'][':name.rw.html']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':path'][':name.rw.html']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPathNameRwHtmlMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
