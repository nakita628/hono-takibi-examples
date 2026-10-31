<h1 id="ccf-governance">CCF Governance v5.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The governance API implemented by this CCF build. This document describes the moving 'latest' API and does not guarantee that older document versions remain available.

<h1 id="ccf-governance-default">Default</h1>

## OpenAPI schema

<a id="opIdGetGovApi"></a>

> Code samples

```bash
curl https://localhost:8000/gov/api \
  -H 'Accept: application/json'
```

`GET /gov/api`

<h3 id="openapi-schema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api-version|query|string|false|Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="openapi-schema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[json](#schemajson)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## Current commit level

<a id="opIdGetGovCommit"></a>

> Code samples

```bash
curl https://localhost:8000/gov/commit \
  -H 'Accept: application/json'
```

`GET /gov/commit`

Latest transaction ID that has been committed on the service

<h3 id="current-commit-level-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|view_history|query|[boolean](#schemaboolean)|false|none|
|view_history_since|query|[uint64](#schemauint64)|false|none|
|api-version|query|string|false|Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.|

> Example responses

> 200 Response

```json
{
  "transaction_id": "string",
  "view_history": [
    "string"
  ]
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="current-commit-level-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[GetCommit__Out](#schemagetcommit__out)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## List governance proposals

<a id="opIdGetGovMembersProposals"></a>

> Code samples

```bash
curl https://localhost:8000/gov/members/proposals \
  -H 'Accept: application/json'
```

`GET /gov/members/proposals`

<h3 id="list-governance-proposals-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api-version|query|string|false|Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.|

> Example responses

> 200 Response

```json
{
  "value": [
    {
      "ballotCount": 0,
      "ballotSubmitters": [
        "string"
      ],
      "failure": {
        "reason": "string",
        "trace": "string"
      },
      "finalVotes": {
        "property1": true,
        "property2": true
      },
      "proposalId": "string",
      "proposalState": "Open",
      "proposerId": "string",
      "voteFailures": {
        "property1": {
          "reason": "string",
          "trace": "string"
        },
        "property2": {
          "reason": "string",
          "trace": "string"
        }
      }
    }
  ]
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="list-governance-proposals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[ProposalList](#schemaproposallist)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a governance proposal

<a id="opIdGetGovMembersProposalsProposalId"></a>

> Code samples

```bash
curl https://localhost:8000/gov/members/proposals/string \
  -H 'Accept: application/json'
```

`GET /gov/members/proposals/{proposalId}`

<h3 id="get-a-governance-proposal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|proposalId|path|string|true|none|
|api-version|query|string|false|Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.|

> Example responses

> 200 Response

```json
{
  "ballotCount": 0,
  "ballotSubmitters": [
    "string"
  ],
  "failure": {
    "reason": "string",
    "trace": "string"
  },
  "finalVotes": {
    "property1": true,
    "property2": true
  },
  "proposalId": "string",
  "proposalState": "Open",
  "proposerId": "string",
  "voteFailures": {
    "property1": {
      "reason": "string",
      "trace": "string"
    },
    "property2": {
      "reason": "string",
      "trace": "string"
    }
  }
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="get-a-governance-proposal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[Proposal](#schemaproposal)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a proposal's actions

<a id="opIdGetGovMembersProposalsProposalIdActions"></a>

> Code samples

```bash
curl https://localhost:8000/gov/members/proposals/string/actions \
  -H 'Accept: application/json'
```

`GET /gov/members/proposals/{proposalId}/actions`

<h3 id="get-a-proposals-actions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|proposalId|path|string|true|none|
|api-version|query|string|false|Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="get-a-proposals-actions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[json](#schemajson)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a member's ballot

<a id="opIdGetGovMembersProposalsProposalIdBallotsMemberId"></a>

> Code samples

```bash
curl https://localhost:8000/gov/members/proposals/string/ballots/string \
  -H 'Accept: application/json'
```

`GET /gov/members/proposals/{proposalId}/ballots/{memberId}`

<h3 id="get-a-members-ballot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|proposalId|path|string|true|none|
|memberId|path|string|true|none|
|api-version|query|string|false|Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.|

> Example responses

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="get-a-members-ballot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[Javascript](#schemajavascript)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## Submit a ballot

<a id="opIdPostGovMembersProposalsProposalIdBallotsMemberIdSubmit"></a>

> Code samples

```bash
curl https://localhost:8000/gov/members/proposals/string/ballots/string:submit \
  -X POST \
  -H 'Content-Type: application/cose' \
  -H 'Accept: application/json' \
  --data-binary '@/path/to/file'
```

`POST /gov/members/proposals/{proposalId}/ballots/{memberId}:submit`

<h3 id="submit-a-ballot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|proposalId|path|string|true|none|
|memberId|path|string|true|none|
|api-version|query|string|false|Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.|
|body|body|[Cose](#schemacose)|true|Auto-generated request body schema|

> Example responses

> 200 Response

```json
{
  "ballotCount": 0,
  "ballotSubmitters": [
    "string"
  ],
  "failure": {
    "reason": "string",
    "trace": "string"
  },
  "finalVotes": {
    "property1": true,
    "property2": true
  },
  "proposalId": "string",
  "proposalState": "Open",
  "proposerId": "string",
  "voteFailures": {
    "property1": {
      "reason": "string",
      "trace": "string"
    },
    "property2": {
      "reason": "string",
      "trace": "string"
    }
  }
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="submit-a-ballot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[Proposal](#schemaproposal)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## Withdraw a governance proposal

<a id="opIdPostGovMembersProposalsProposalIdWithdraw"></a>

> Code samples

```bash
curl https://localhost:8000/gov/members/proposals/string:withdraw \
  -X POST \
  -H 'Content-Type: application/cose' \
  -H 'Accept: application/json' \
  --data-binary '@/path/to/file'
```

`POST /gov/members/proposals/{proposalId}:withdraw`

<h3 id="withdraw-a-governance-proposal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|proposalId|path|string|true|none|
|api-version|query|string|false|Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.|
|body|body|[Cose](#schemacose)|true|Auto-generated request body schema|

> Example responses

> 200 Response

```json
{
  "ballotCount": 0,
  "ballotSubmitters": [
    "string"
  ],
  "failure": {
    "reason": "string",
    "trace": "string"
  },
  "finalVotes": {
    "property1": true,
    "property2": true
  },
  "proposalId": "string",
  "proposalState": "Open",
  "proposerId": "string",
  "voteFailures": {
    "property1": {
      "reason": "string",
      "trace": "string"
    },
    "property2": {
      "reason": "string",
      "trace": "string"
    }
  }
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="withdraw-a-governance-proposal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[Proposal](#schemaproposal)|
|204|No Content|The proposal no longer exists.|None|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a governance proposal

<a id="opIdPostGovMembersProposalsCreate"></a>

> Code samples

```bash
curl https://localhost:8000/gov/members/proposals:create \
  -X POST \
  -H 'Content-Type: application/cose' \
  -H 'Accept: application/json' \
  --data-binary '@/path/to/file'
```

`POST /gov/members/proposals:create`

<h3 id="create-a-governance-proposal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api-version|query|string|false|Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.|
|body|body|[Cose](#schemacose)|true|Auto-generated request body schema|

> Example responses

> 200 Response

```json
{
  "ballotCount": 0,
  "ballotSubmitters": [
    "string"
  ],
  "failure": {
    "reason": "string",
    "trace": "string"
  },
  "finalVotes": {
    "property1": true,
    "property2": true
  },
  "proposalId": "string",
  "proposalState": "Open",
  "proposerId": "string",
  "voteFailures": {
    "property1": {
      "reason": "string",
      "trace": "string"
    },
    "property2": {
      "reason": "string",
      "trace": "string"
    }
  }
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="create-a-governance-proposal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[Proposal](#schemaproposal)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a member's state digest

<a id="opIdGetGovMembersStateDigestsMemberId"></a>

> Code samples

```bash
curl https://localhost:8000/gov/members/state-digests/string \
  -H 'Accept: application/json'
```

`GET /gov/members/state-digests/{memberId}`

<h3 id="get-a-members-state-digest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|memberId|path|string|true|none|
|api-version|query|string|false|Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.|

> Example responses

> 200 Response

```json
{
  "memberId": "string",
  "stateDigest": "string"
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="get-a-members-state-digest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[StateDigest](#schemastatedigest)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## Acknowledge a member's state digest

<a id="opIdPostGovMembersStateDigestsMemberIdAck"></a>

> Code samples

```bash
curl https://localhost:8000/gov/members/state-digests/string:ack \
  -X POST \
  -H 'Content-Type: application/cose' \
  -H 'Accept: application/json' \
  --data-binary '@/path/to/file'
```

`POST /gov/members/state-digests/{memberId}:ack`

<h3 id="acknowledge-a-members-state-digest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|memberId|path|string|true|none|
|api-version|query|string|false|Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.|
|body|body|[Cose](#schemacose)|true|Auto-generated request body schema|

> Example responses

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="acknowledge-a-members-state-digest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Default response description|None|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a member's state digest

<a id="opIdPostGovMembersStateDigestsMemberIdUpdate"></a>

> Code samples

```bash
curl https://localhost:8000/gov/members/state-digests/string:update \
  -X POST \
  -H 'Content-Type: application/cose' \
  -H 'Accept: application/json' \
  --data-binary '@/path/to/file'
```

`POST /gov/members/state-digests/{memberId}:update`

<h3 id="update-a-members-state-digest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|memberId|path|string|true|none|
|api-version|query|string|false|Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.|
|body|body|[Cose](#schemacose)|true|Auto-generated request body schema|

> Example responses

> 200 Response

```json
{
  "memberId": "string",
  "stateDigest": "string"
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="update-a-members-state-digest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[StateDigest](#schemastatedigest)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## Receipt for a transaction

<a id="opIdGetGovReceipt"></a>

> Code samples

```bash
curl 'https://localhost:8000/gov/receipt?transaction_id=string' \
  -H 'Accept: application/json'
```

`GET /gov/receipt`

A signed statement from the service over a transaction entry in the ledger

<h3 id="receipt-for-a-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transaction_id|query|[TransactionId](#schematransactionid)|true|none|
|api-version|query|string|false|Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="receipt-for-a-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[json](#schemajson)|
|202|Accepted|The transaction is not yet available. The response describes why and the Retry-After header indicates when to retry.|[string](#schemastring)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## COSE receipt for a transaction

<a id="opIdGetGovReceiptCose"></a>

> Code samples

```bash
curl 'https://localhost:8000/gov/receipt/cose?transaction_id=string' \
  -H 'Accept: application/json'
```

`GET /gov/receipt/cose`

A COSE Sign1 envelope containing a signed statement from the service over a transaction entry in the ledger, with a Merkle proof in the unprotected header. See https://datatracker.ietf.org/doc/draft-ietf-scitt-receipts-ccf-profile/ for a complete description.

<h3 id="cose-receipt-for-a-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transaction_id|query|[TransactionId](#schematransactionid)|true|none|
|api-version|query|string|false|Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.|

> Example responses

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="cose-receipt-for-a-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[Cose](#schemacose)|
|202|Accepted|The transaction is not yet available. The response describes why and the Retry-After header indicates when to retry.|[string](#schemastring)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get an encrypted recovery share

<a id="opIdGetGovRecoveryEncryptedSharesMemberId"></a>

> Code samples

```bash
curl https://localhost:8000/gov/recovery/encrypted-shares/string \
  -H 'Accept: application/json'
```

`GET /gov/recovery/encrypted-shares/{memberId}`

<h3 id="get-an-encrypted-recovery-share-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|memberId|path|string|true|none|
|api-version|query|string|false|Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.|

> Example responses

> 200 Response

```json
{
  "encryptedShare": "string",
  "memberId": "string"
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="get-an-encrypted-recovery-share-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[EncryptedRecoveryShare](#schemaencryptedrecoveryshare)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## Submit a recovery share

<a id="opIdPostGovRecoveryMembersMemberIdRecover"></a>

> Code samples

```bash
curl https://localhost:8000/gov/recovery/members/string:recover \
  -X POST \
  -H 'Content-Type: application/cose' \
  -H 'Accept: application/json' \
  --data-binary '@/path/to/file'
```

`POST /gov/recovery/members/{memberId}:recover`

<h3 id="submit-a-recovery-share-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|memberId|path|string|true|none|
|api-version|query|string|false|Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.|
|body|body|[Cose](#schemacose)|true|Auto-generated request body schema|

> Example responses

> 200 Response

```json
{
  "fullKeySubmitted": true,
  "message": "string",
  "recoveryThreshold": 0,
  "submittedCount": 0
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="submit-a-recovery-share-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[RecoveryResponse](#schemarecoveryresponse)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get the service constitution

<a id="opIdGetGovServiceConstitution"></a>

> Code samples

```bash
curl https://localhost:8000/gov/service/constitution \
  -H 'Accept: application/json'
```

`GET /gov/service/constitution`

<h3 id="get-the-service-constitution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api-version|query|string|false|Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.|

> Example responses

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="get-the-service-constitution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[Javascript](#schemajavascript)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get service information

<a id="opIdGetGovServiceInfo"></a>

> Code samples

```bash
curl https://localhost:8000/gov/service/info \
  -H 'Accept: application/json'
```

`GET /gov/service/info`

<h3 id="get-service-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api-version|query|string|false|Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.|

> Example responses

> 200 Response

```json
{
  "certificate": "string",
  "configuration": {
    "maximumNodeCertificateValidityDays": 0,
    "maximumServiceCertificateValidityDays": 0,
    "recentCoseProposalsWindowSize": 0,
    "recoveryThreshold": 0
  },
  "creationTransactionId": "string",
  "previousServiceCreationTransactionId": "string",
  "recoveryCount": 0,
  "serviceData": null,
  "status": "Opening"
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="get-service-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[ServiceInfo](#schemaserviceinfo)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get the installed JavaScript application

<a id="opIdGetGovServiceJavascriptApp"></a>

> Code samples

```bash
curl https://localhost:8000/gov/service/javascript-app \
  -H 'Accept: application/json'
```

`GET /gov/service/javascript-app`

<h3 id="get-the-installed-javascript-application-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|case|query|[JavascriptAppCase](#schemajavascriptappcase)|false|none|
|api-version|query|string|false|Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|case|original|

> Example responses

> 200 Response

```json
{
  "endpoints": null
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="get-the-installed-javascript-application-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[JavascriptApp](#schemajavascriptapp)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## List JavaScript modules

<a id="opIdGetGovServiceJavascriptModules"></a>

> Code samples

```bash
curl https://localhost:8000/gov/service/javascript-modules \
  -H 'Accept: application/json'
```

`GET /gov/service/javascript-modules`

<h3 id="list-javascript-modules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api-version|query|string|false|Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.|

> Example responses

> 200 Response

```json
{
  "value": [
    {
      "moduleName": "string"
    }
  ]
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="list-javascript-modules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[JavascriptModules](#schemajavascriptmodules)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a JavaScript module

<a id="opIdGetGovServiceJavascriptModulesModuleName"></a>

> Code samples

```bash
curl https://localhost:8000/gov/service/javascript-modules/string \
  -H 'Accept: application/json'
```

`GET /gov/service/javascript-modules/{moduleName}`

<h3 id="get-a-javascript-module-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|moduleName|path|string|true|none|
|api-version|query|string|false|Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.|

> Example responses

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="get-a-javascript-module-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[Javascript](#schemajavascript)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get the service join policy

<a id="opIdGetGovServiceJoinPolicy"></a>

> Code samples

```bash
curl https://localhost:8000/gov/service/join-policy \
  -H 'Accept: application/json'
```

`GET /gov/service/join-policy`

<h3 id="get-the-service-join-policy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api-version|query|string|false|Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.|

> Example responses

> 200 Response

```json
{
  "sgx": {
    "measurements": [
      "string"
    ]
  },
  "snp": {
    "hostData": {
      "property1": "string",
      "property2": "string"
    },
    "measurements": [
      "string"
    ],
    "tcbVersions": {
      "property1": {
        "boot_loader": 0,
        "fmc": 0,
        "hexstring": "string",
        "microcode": 0,
        "snp": 0,
        "tee": 0
      },
      "property2": {
        "boot_loader": 0,
        "fmc": 0,
        "hexstring": "string",
        "microcode": 0,
        "snp": 0,
        "tee": 0
      }
    },
    "uvmEndorsements": {
      "property1": {
        "property1": {
          "svn": "string"
        },
        "property2": {
          "svn": "string"
        }
      },
      "property2": {
        "property1": {
          "svn": "string"
        },
        "property2": {
          "svn": "string"
        }
      }
    }
  },
  "virtual": {
    "hostData": [
      "string"
    ],
    "measurements": [
      "string"
    ]
  }
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="get-the-service-join-policy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[JoinPolicy](#schemajoinpolicy)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get accepted JWT issuers and keys

<a id="opIdGetGovServiceJwk"></a>

> Code samples

```bash
curl https://localhost:8000/gov/service/jwk \
  -H 'Accept: application/json'
```

`GET /gov/service/jwk`

<h3 id="get-accepted-jwt-issuers-and-keys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api-version|query|string|false|Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.|

> Example responses

> 200 Response

```json
{
  "caCertBundles": {
    "property1": "string",
    "property2": "string"
  },
  "issuers": {
    "property1": {
      "autoRefresh": true,
      "caCertBundleName": "string"
    },
    "property2": {
      "autoRefresh": true,
      "caCertBundleName": "string"
    }
  },
  "keys": {
    "property1": [
      {
        "constraint": null,
        "issuer": "string",
        "publicKey": "string"
      }
    ],
    "property2": [
      {
        "constraint": null,
        "issuer": "string",
        "publicKey": "string"
      }
    ]
  }
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="get-accepted-jwt-issuers-and-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[JwkInfo](#schemajwkinfo)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## List consortium members

<a id="opIdGetGovServiceMembers"></a>

> Code samples

```bash
curl https://localhost:8000/gov/service/members \
  -H 'Accept: application/json'
```

`GET /gov/service/members`

<h3 id="list-consortium-members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api-version|query|string|false|Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.|

> Example responses

> 200 Response

```json
{
  "value": [
    {
      "certificate": "string",
      "memberData": null,
      "memberId": "string",
      "publicEncryptionKey": "string",
      "recoveryRole": "NonParticipant",
      "status": "Accepted"
    }
  ]
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="list-consortium-members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[Members](#schemamembers)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a consortium member

<a id="opIdGetGovServiceMembersMemberId"></a>

> Code samples

```bash
curl https://localhost:8000/gov/service/members/string \
  -H 'Accept: application/json'
```

`GET /gov/service/members/{memberId}`

<h3 id="get-a-consortium-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|memberId|path|string|true|none|
|api-version|query|string|false|Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.|

> Example responses

> 200 Response

```json
{
  "certificate": "string",
  "memberData": null,
  "memberId": "string",
  "publicEncryptionKey": "string",
  "recoveryRole": "NonParticipant",
  "status": "Accepted"
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="get-a-consortium-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[Member](#schemamember)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## List service nodes

<a id="opIdGetGovServiceNodes"></a>

> Code samples

```bash
curl https://localhost:8000/gov/service/nodes \
  -H 'Accept: application/json'
```

`GET /gov/service/nodes`

<h3 id="list-service-nodes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api-version|query|string|false|Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.|

> Example responses

> 200 Response

```json
{
  "value": [
    {
      "certificate": "string",
      "nodeData": null,
      "nodeId": "string",
      "quoteInfo": null,
      "retiredCommitted": true,
      "rpcInterfaces": {
        "property1": {
          "protocol": "string",
          "publishedAddress": "string"
        },
        "property2": {
          "protocol": "string",
          "publishedAddress": "string"
        }
      },
      "status": "Pending"
    }
  ]
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="list-service-nodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[Nodes](#schemanodes)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a service node

<a id="opIdGetGovServiceNodesNodeId"></a>

> Code samples

```bash
curl https://localhost:8000/gov/service/nodes/string \
  -H 'Accept: application/json'
```

`GET /gov/service/nodes/{nodeId}`

<h3 id="get-a-service-node-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nodeId|path|string|true|none|
|api-version|query|string|false|Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.|

> Example responses

> 200 Response

```json
{
  "certificate": "string",
  "nodeData": null,
  "nodeId": "string",
  "quoteInfo": null,
  "retiredCommitted": true,
  "rpcInterfaces": {
    "property1": {
      "protocol": "string",
      "publishedAddress": "string"
    },
    "property2": {
      "protocol": "string",
      "publishedAddress": "string"
    }
  },
  "status": "Pending"
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="get-a-service-node-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[Node](#schemanode)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get the latest committed transaction

<a id="opIdGetGovServiceTransactionsCommit"></a>

> Code samples

```bash
curl https://localhost:8000/gov/service/transactions/commit \
  -H 'Accept: application/json'
```

`GET /gov/service/transactions/commit`

<h3 id="get-the-latest-committed-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api-version|query|string|false|Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.|

> Example responses

> 200 Response

```json
{
  "status": "Unknown",
  "transactionId": "string"
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="get-the-latest-committed-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[Transaction](#schematransaction)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get transaction status

<a id="opIdGetGovServiceTransactionsTransactionId"></a>

> Code samples

```bash
curl https://localhost:8000/gov/service/transactions/string \
  -H 'Accept: application/json'
```

`GET /gov/service/transactions/{transactionId}`

<h3 id="get-transaction-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transactionId|path|string|true|none|
|api-version|query|string|false|Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.|

> Example responses

> 200 Response

```json
{
  "status": "Unknown",
  "transactionId": "string"
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="get-transaction-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[Transaction](#schematransaction)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## List application users

<a id="opIdGetGovServiceUsers"></a>

> Code samples

```bash
curl https://localhost:8000/gov/service/users \
  -H 'Accept: application/json'
```

`GET /gov/service/users`

<h3 id="list-application-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|api-version|query|string|false|Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.|

> Example responses

> 200 Response

```json
{
  "value": [
    {
      "certificate": "string",
      "userData": null,
      "userId": "string"
    }
  ]
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="list-application-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[Users](#schemausers)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get an application user

<a id="opIdGetGovServiceUsersUserId"></a>

> Code samples

```bash
curl https://localhost:8000/gov/service/users/string \
  -H 'Accept: application/json'
```

`GET /gov/service/users/{userId}`

<h3 id="get-an-application-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|none|
|api-version|query|string|false|Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.|

> Example responses

> 200 Response

```json
{
  "certificate": "string",
  "userData": null,
  "userId": "string"
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="get-an-application-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[User](#schemauser)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

## Current status of a transaction

<a id="opIdGetGovTx"></a>

> Code samples

```bash
curl 'https://localhost:8000/gov/tx?transaction_id=string' \
  -H 'Accept: application/json'
```

`GET /gov/tx`

Possible statuses returned are Unknown, Pending, Committed or Invalid.

<h3 id="current-status-of-a-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transaction_id|query|[TransactionId](#schematransactionid)|true|none|
|api-version|query|string|false|Optional API selector. 'latest' selects the API implemented by this CCF build and does not identify a frozen contract. Dated versions select frozen compatibility contracts while they remain supported.|

> Example responses

> 200 Response

```json
{
  "status": "Unknown",
  "transaction_id": "string"
}
```

> default Response

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

<h3 id="current-status-of-a-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Default response description|[GetTxStatus__Out](#schemagettxstatus__out)|
|default|Default|An error occurred|[CCFError](#schemaccferror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_BasicJoinPolicy">BasicJoinPolicy</h2>
<!-- backwards compatibility -->
<a id="schemabasicjoinpolicy"></a>
<a id="schema_BasicJoinPolicy"></a>
<a id="tocSbasicjoinpolicy"></a>
<a id="tocsbasicjoinpolicy"></a>

```json
{
  "measurements": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|measurements|[string_array](#schemastring_array)|true|none|none|

<h2 id="tocS_CCFError">CCFError</h2>
<!-- backwards compatibility -->
<a id="schemaccferror"></a>
<a id="schema_CCFError"></a>
<a id="tocSccferror"></a>
<a id="tocsccferror"></a>

```json
{
  "error": {
    "code": "string",
    "message": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|

<h2 id="tocS_Cose">Cose</h2>
<!-- backwards compatibility -->
<a id="schemacose"></a>
<a id="schema_Cose"></a>
<a id="tocScose"></a>
<a id="tocscose"></a>

```json
"string"
```

<h2 id="tocS_EncryptedRecoveryShare">EncryptedRecoveryShare</h2>
<!-- backwards compatibility -->
<a id="schemaencryptedrecoveryshare"></a>
<a id="schema_EncryptedRecoveryShare"></a>
<a id="tocSencryptedrecoveryshare"></a>
<a id="tocsencryptedrecoveryshare"></a>

```json
{
  "encryptedShare": "string",
  "memberId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encryptedShare|[string](#schemastring)|true|none|none|
|memberId|[MemberId](#schemamemberid)|true|none|none|

<h2 id="tocS_Failure">Failure</h2>
<!-- backwards compatibility -->
<a id="schemafailure"></a>
<a id="schema_Failure"></a>
<a id="tocSfailure"></a>
<a id="tocsfailure"></a>

```json
{
  "reason": "string",
  "trace": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|[string](#schemastring)|true|none|none|
|trace|[string](#schemastring)|false|none|none|

<h2 id="tocS_GetCommit__Out">GetCommit__Out</h2>
<!-- backwards compatibility -->
<a id="schemagetcommit__out"></a>
<a id="schema_GetCommit__Out"></a>
<a id="tocSgetcommit__out"></a>
<a id="tocsgetcommit__out"></a>

```json
{
  "transaction_id": "string",
  "view_history": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transaction_id|[TransactionId](#schematransactionid)|true|none|none|
|view_history|[TransactionId_array](#schematransactionid_array)|false|none|none|

<h2 id="tocS_GetTxStatus__Out">GetTxStatus__Out</h2>
<!-- backwards compatibility -->
<a id="schemagettxstatus__out"></a>
<a id="schema_GetTxStatus__Out"></a>
<a id="tocSgettxstatus__out"></a>
<a id="tocsgettxstatus__out"></a>

```json
{
  "status": "Unknown",
  "transaction_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[TxStatus](#schematxstatus)|true|none|none|
|transaction_id|[TransactionId](#schematransactionid)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|Unknown|
|status|Pending|
|status|Committed|
|status|Invalid|

<h2 id="tocS_Javascript">Javascript</h2>
<!-- backwards compatibility -->
<a id="schemajavascript"></a>
<a id="schema_Javascript"></a>
<a id="tocSjavascript"></a>
<a id="tocsjavascript"></a>

```json
"string"
```

<h2 id="tocS_JavascriptApp">JavascriptApp</h2>
<!-- backwards compatibility -->
<a id="schemajavascriptapp"></a>
<a id="schema_JavascriptApp"></a>
<a id="tocSjavascriptapp"></a>
<a id="tocsjavascriptapp"></a>

```json
{
  "endpoints": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoints|[json](#schemajson)|true|none|none|

<h2 id="tocS_JavascriptAppCase">JavascriptAppCase</h2>
<!-- backwards compatibility -->
<a id="schemajavascriptappcase"></a>
<a id="schema_JavascriptAppCase"></a>
<a id="tocSjavascriptappcase"></a>
<a id="tocsjavascriptappcase"></a>

```json
"original"
```

<h2 id="tocS_JavascriptModule">JavascriptModule</h2>
<!-- backwards compatibility -->
<a id="schemajavascriptmodule"></a>
<a id="schema_JavascriptModule"></a>
<a id="tocSjavascriptmodule"></a>
<a id="tocsjavascriptmodule"></a>

```json
{
  "moduleName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|moduleName|[string](#schemastring)|true|none|none|

<h2 id="tocS_JavascriptModule_array">JavascriptModule_array</h2>
<!-- backwards compatibility -->
<a id="schemajavascriptmodule_array"></a>
<a id="schema_JavascriptModule_array"></a>
<a id="tocSjavascriptmodule_array"></a>
<a id="tocsjavascriptmodule_array"></a>

```json
[
  {
    "moduleName": "string"
  }
]
```

<h2 id="tocS_JavascriptModules">JavascriptModules</h2>
<!-- backwards compatibility -->
<a id="schemajavascriptmodules"></a>
<a id="schema_JavascriptModules"></a>
<a id="tocSjavascriptmodules"></a>
<a id="tocsjavascriptmodules"></a>

```json
{
  "value": [
    {
      "moduleName": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|[JavascriptModule_array](#schemajavascriptmodule_array)|true|none|none|

<h2 id="tocS_JoinPolicy">JoinPolicy</h2>
<!-- backwards compatibility -->
<a id="schemajoinpolicy"></a>
<a id="schema_JoinPolicy"></a>
<a id="tocSjoinpolicy"></a>
<a id="tocsjoinpolicy"></a>

```json
{
  "sgx": {
    "measurements": [
      "string"
    ]
  },
  "snp": {
    "hostData": {
      "property1": "string",
      "property2": "string"
    },
    "measurements": [
      "string"
    ],
    "tcbVersions": {
      "property1": {
        "boot_loader": 0,
        "fmc": 0,
        "hexstring": "string",
        "microcode": 0,
        "snp": 0,
        "tee": 0
      },
      "property2": {
        "boot_loader": 0,
        "fmc": 0,
        "hexstring": "string",
        "microcode": 0,
        "snp": 0,
        "tee": 0
      }
    },
    "uvmEndorsements": {
      "property1": {
        "property1": {
          "svn": "string"
        },
        "property2": {
          "svn": "string"
        }
      },
      "property2": {
        "property1": {
          "svn": "string"
        },
        "property2": {
          "svn": "string"
        }
      }
    }
  },
  "virtual": {
    "hostData": [
      "string"
    ],
    "measurements": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sgx|[BasicJoinPolicy](#schemabasicjoinpolicy)|true|none|none|
|snp|[SnpJoinPolicy](#schemasnpjoinpolicy)|true|none|none|
|virtual|[VirtualJoinPolicy](#schemavirtualjoinpolicy)|true|none|none|

<h2 id="tocS_Jwk">Jwk</h2>
<!-- backwards compatibility -->
<a id="schemajwk"></a>
<a id="schema_Jwk"></a>
<a id="tocSjwk"></a>
<a id="tocsjwk"></a>

```json
{
  "constraint": null,
  "issuer": "string",
  "publicKey": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|constraint|[json](#schemajson)|true|none|none|
|issuer|[string](#schemastring)|true|none|none|
|publicKey|[string](#schemastring)|true|none|none|

<h2 id="tocS_JwkInfo">JwkInfo</h2>
<!-- backwards compatibility -->
<a id="schemajwkinfo"></a>
<a id="schema_JwkInfo"></a>
<a id="tocSjwkinfo"></a>
<a id="tocsjwkinfo"></a>

```json
{
  "caCertBundles": {
    "property1": "string",
    "property2": "string"
  },
  "issuers": {
    "property1": {
      "autoRefresh": true,
      "caCertBundleName": "string"
    },
    "property2": {
      "autoRefresh": true,
      "caCertBundleName": "string"
    }
  },
  "keys": {
    "property1": [
      {
        "constraint": null,
        "issuer": "string",
        "publicKey": "string"
      }
    ],
    "property2": [
      {
        "constraint": null,
        "issuer": "string",
        "publicKey": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caCertBundles|[string_to_string](#schemastring_to_string)|true|none|none|
|issuers|[string_to_JwtIssuer](#schemastring_to_jwtissuer)|true|none|none|
|keys|[string_to_Jwk_array](#schemastring_to_jwk_array)|true|none|none|

<h2 id="tocS_Jwk_array">Jwk_array</h2>
<!-- backwards compatibility -->
<a id="schemajwk_array"></a>
<a id="schema_Jwk_array"></a>
<a id="tocSjwk_array"></a>
<a id="tocsjwk_array"></a>

```json
[
  {
    "constraint": null,
    "issuer": "string",
    "publicKey": "string"
  }
]
```

<h2 id="tocS_JwtIssuer">JwtIssuer</h2>
<!-- backwards compatibility -->
<a id="schemajwtissuer"></a>
<a id="schema_JwtIssuer"></a>
<a id="tocSjwtissuer"></a>
<a id="tocsjwtissuer"></a>

```json
{
  "autoRefresh": true,
  "caCertBundleName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoRefresh|[boolean](#schemaboolean)|true|none|none|
|caCertBundleName|[string](#schemastring)|false|none|none|

<h2 id="tocS_Member">Member</h2>
<!-- backwards compatibility -->
<a id="schemamember"></a>
<a id="schema_Member"></a>
<a id="tocSmember"></a>
<a id="tocsmember"></a>

```json
{
  "certificate": "string",
  "memberData": null,
  "memberId": "string",
  "publicEncryptionKey": "string",
  "recoveryRole": "NonParticipant",
  "status": "Accepted"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificate|[string](#schemastring)|false|none|none|
|memberData|[json](#schemajson)|true|none|none|
|memberId|[MemberId](#schemamemberid)|true|none|none|
|publicEncryptionKey|[string](#schemastring)|false|none|none|
|recoveryRole|[MemberRecoveryRole](#schemamemberrecoveryrole)|true|none|none|
|status|[MemberStatus](#schemamemberstatus)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|recoveryRole|NonParticipant|
|recoveryRole|Participant|
|recoveryRole|Owner|
|status|Accepted|
|status|Active|

<h2 id="tocS_MemberId">MemberId</h2>
<!-- backwards compatibility -->
<a id="schemamemberid"></a>
<a id="schema_MemberId"></a>
<a id="tocSmemberid"></a>
<a id="tocsmemberid"></a>

```json
"string"
```

<h2 id="tocS_MemberId_array">MemberId_array</h2>
<!-- backwards compatibility -->
<a id="schemamemberid_array"></a>
<a id="schema_MemberId_array"></a>
<a id="tocSmemberid_array"></a>
<a id="tocsmemberid_array"></a>

```json
[
  "string"
]
```

<h2 id="tocS_MemberId_to_Failure">MemberId_to_Failure</h2>
<!-- backwards compatibility -->
<a id="schemamemberid_to_failure"></a>
<a id="schema_MemberId_to_Failure"></a>
<a id="tocSmemberid_to_failure"></a>
<a id="tocsmemberid_to_failure"></a>

```json
{
  "property1": {
    "reason": "string",
    "trace": "string"
  },
  "property2": {
    "reason": "string",
    "trace": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Failure](#schemafailure)|false|none|none|

<h2 id="tocS_MemberId_to_boolean">MemberId_to_boolean</h2>
<!-- backwards compatibility -->
<a id="schemamemberid_to_boolean"></a>
<a id="schema_MemberId_to_boolean"></a>
<a id="tocSmemberid_to_boolean"></a>
<a id="tocsmemberid_to_boolean"></a>

```json
{
  "property1": true,
  "property2": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[boolean](#schemaboolean)|false|none|none|

<h2 id="tocS_MemberRecoveryRole">MemberRecoveryRole</h2>
<!-- backwards compatibility -->
<a id="schemamemberrecoveryrole"></a>
<a id="schema_MemberRecoveryRole"></a>
<a id="tocSmemberrecoveryrole"></a>
<a id="tocsmemberrecoveryrole"></a>

```json
"NonParticipant"
```

<h2 id="tocS_MemberStatus">MemberStatus</h2>
<!-- backwards compatibility -->
<a id="schemamemberstatus"></a>
<a id="schema_MemberStatus"></a>
<a id="tocSmemberstatus"></a>
<a id="tocsmemberstatus"></a>

```json
"Accepted"
```

<h2 id="tocS_Member_array">Member_array</h2>
<!-- backwards compatibility -->
<a id="schemamember_array"></a>
<a id="schema_Member_array"></a>
<a id="tocSmember_array"></a>
<a id="tocsmember_array"></a>

```json
[
  {
    "certificate": "string",
    "memberData": null,
    "memberId": "string",
    "publicEncryptionKey": "string",
    "recoveryRole": "NonParticipant",
    "status": "Accepted"
  }
]
```

<h2 id="tocS_Members">Members</h2>
<!-- backwards compatibility -->
<a id="schemamembers"></a>
<a id="schema_Members"></a>
<a id="tocSmembers"></a>
<a id="tocsmembers"></a>

```json
{
  "value": [
    {
      "certificate": "string",
      "memberData": null,
      "memberId": "string",
      "publicEncryptionKey": "string",
      "recoveryRole": "NonParticipant",
      "status": "Accepted"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|[Member_array](#schemamember_array)|true|none|none|

<h2 id="tocS_NetworkInterface">NetworkInterface</h2>
<!-- backwards compatibility -->
<a id="schemanetworkinterface"></a>
<a id="schema_NetworkInterface"></a>
<a id="tocSnetworkinterface"></a>
<a id="tocsnetworkinterface"></a>

```json
{
  "protocol": "string",
  "publishedAddress": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|protocol|[string](#schemastring)|false|none|none|
|publishedAddress|[string](#schemastring)|true|none|none|

<h2 id="tocS_Node">Node</h2>
<!-- backwards compatibility -->
<a id="schemanode"></a>
<a id="schema_Node"></a>
<a id="tocSnode"></a>
<a id="tocsnode"></a>

```json
{
  "certificate": "string",
  "nodeData": null,
  "nodeId": "string",
  "quoteInfo": null,
  "retiredCommitted": true,
  "rpcInterfaces": {
    "property1": {
      "protocol": "string",
      "publishedAddress": "string"
    },
    "property2": {
      "protocol": "string",
      "publishedAddress": "string"
    }
  },
  "status": "Pending"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificate|[string](#schemastring)|false|none|none|
|nodeData|[json](#schemajson)|true|none|none|
|nodeId|[NodeId](#schemanodeid)|true|none|none|
|quoteInfo|[json](#schemajson)|true|none|none|
|retiredCommitted|[boolean](#schemaboolean)|true|none|none|
|rpcInterfaces|[string_to_NetworkInterface](#schemastring_to_networkinterface)|true|none|none|
|status|[NodeStatus](#schemanodestatus)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|Pending|
|status|Trusted|
|status|Retired|

<h2 id="tocS_NodeId">NodeId</h2>
<!-- backwards compatibility -->
<a id="schemanodeid"></a>
<a id="schema_NodeId"></a>
<a id="tocSnodeid"></a>
<a id="tocsnodeid"></a>

```json
"string"
```

<h2 id="tocS_NodeStatus">NodeStatus</h2>
<!-- backwards compatibility -->
<a id="schemanodestatus"></a>
<a id="schema_NodeStatus"></a>
<a id="tocSnodestatus"></a>
<a id="tocsnodestatus"></a>

```json
"Pending"
```

<h2 id="tocS_Node_array">Node_array</h2>
<!-- backwards compatibility -->
<a id="schemanode_array"></a>
<a id="schema_Node_array"></a>
<a id="tocSnode_array"></a>
<a id="tocsnode_array"></a>

```json
[
  {
    "certificate": "string",
    "nodeData": null,
    "nodeId": "string",
    "quoteInfo": null,
    "retiredCommitted": true,
    "rpcInterfaces": {
      "property1": {
        "protocol": "string",
        "publishedAddress": "string"
      },
      "property2": {
        "protocol": "string",
        "publishedAddress": "string"
      }
    },
    "status": "Pending"
  }
]
```

<h2 id="tocS_Nodes">Nodes</h2>
<!-- backwards compatibility -->
<a id="schemanodes"></a>
<a id="schema_Nodes"></a>
<a id="tocSnodes"></a>
<a id="tocsnodes"></a>

```json
{
  "value": [
    {
      "certificate": "string",
      "nodeData": null,
      "nodeId": "string",
      "quoteInfo": null,
      "retiredCommitted": true,
      "rpcInterfaces": {
        "property1": {
          "protocol": "string",
          "publishedAddress": "string"
        },
        "property2": {
          "protocol": "string",
          "publishedAddress": "string"
        }
      },
      "status": "Pending"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|[Node_array](#schemanode_array)|true|none|none|

<h2 id="tocS_Proposal">Proposal</h2>
<!-- backwards compatibility -->
<a id="schemaproposal"></a>
<a id="schema_Proposal"></a>
<a id="tocSproposal"></a>
<a id="tocsproposal"></a>

```json
{
  "ballotCount": 0,
  "ballotSubmitters": [
    "string"
  ],
  "failure": {
    "reason": "string",
    "trace": "string"
  },
  "finalVotes": {
    "property1": true,
    "property2": true
  },
  "proposalId": "string",
  "proposalState": "Open",
  "proposerId": "string",
  "voteFailures": {
    "property1": {
      "reason": "string",
      "trace": "string"
    },
    "property2": {
      "reason": "string",
      "trace": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ballotCount|[uint64](#schemauint64)|true|none|none|
|ballotSubmitters|[MemberId_array](#schemamemberid_array)|true|none|none|
|failure|[Failure](#schemafailure)|false|none|none|
|finalVotes|[MemberId_to_boolean](#schemamemberid_to_boolean)|false|none|none|
|proposalId|[string](#schemastring)|true|none|none|
|proposalState|[ProposalState](#schemaproposalstate)|true|none|none|
|proposerId|[MemberId](#schemamemberid)|true|none|none|
|voteFailures|[MemberId_to_Failure](#schemamemberid_to_failure)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|proposalState|Open|
|proposalState|Accepted|
|proposalState|Withdrawn|
|proposalState|Rejected|
|proposalState|Failed|
|proposalState|Dropped|

<h2 id="tocS_ProposalList">ProposalList</h2>
<!-- backwards compatibility -->
<a id="schemaproposallist"></a>
<a id="schema_ProposalList"></a>
<a id="tocSproposallist"></a>
<a id="tocsproposallist"></a>

```json
{
  "value": [
    {
      "ballotCount": 0,
      "ballotSubmitters": [
        "string"
      ],
      "failure": {
        "reason": "string",
        "trace": "string"
      },
      "finalVotes": {
        "property1": true,
        "property2": true
      },
      "proposalId": "string",
      "proposalState": "Open",
      "proposerId": "string",
      "voteFailures": {
        "property1": {
          "reason": "string",
          "trace": "string"
        },
        "property2": {
          "reason": "string",
          "trace": "string"
        }
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|[Proposal_array](#schemaproposal_array)|true|none|none|

<h2 id="tocS_ProposalState">ProposalState</h2>
<!-- backwards compatibility -->
<a id="schemaproposalstate"></a>
<a id="schema_ProposalState"></a>
<a id="tocSproposalstate"></a>
<a id="tocsproposalstate"></a>

```json
"Open"
```

<h2 id="tocS_Proposal_array">Proposal_array</h2>
<!-- backwards compatibility -->
<a id="schemaproposal_array"></a>
<a id="schema_Proposal_array"></a>
<a id="tocSproposal_array"></a>
<a id="tocsproposal_array"></a>

```json
[
  {
    "ballotCount": 0,
    "ballotSubmitters": [
      "string"
    ],
    "failure": {
      "reason": "string",
      "trace": "string"
    },
    "finalVotes": {
      "property1": true,
      "property2": true
    },
    "proposalId": "string",
    "proposalState": "Open",
    "proposerId": "string",
    "voteFailures": {
      "property1": {
        "reason": "string",
        "trace": "string"
      },
      "property2": {
        "reason": "string",
        "trace": "string"
      }
    }
  }
]
```

<h2 id="tocS_RecoveryResponse">RecoveryResponse</h2>
<!-- backwards compatibility -->
<a id="schemarecoveryresponse"></a>
<a id="schema_RecoveryResponse"></a>
<a id="tocSrecoveryresponse"></a>
<a id="tocsrecoveryresponse"></a>

```json
{
  "fullKeySubmitted": true,
  "message": "string",
  "recoveryThreshold": 0,
  "submittedCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fullKeySubmitted|[boolean](#schemaboolean)|true|none|none|
|message|[string](#schemastring)|true|none|none|
|recoveryThreshold|[uint64](#schemauint64)|true|none|none|
|submittedCount|[uint64](#schemauint64)|true|none|none|

<h2 id="tocS_ServiceConfiguration">ServiceConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaserviceconfiguration"></a>
<a id="schema_ServiceConfiguration"></a>
<a id="tocSserviceconfiguration"></a>
<a id="tocsserviceconfiguration"></a>

```json
{
  "maximumNodeCertificateValidityDays": 0,
  "maximumServiceCertificateValidityDays": 0,
  "recentCoseProposalsWindowSize": 0,
  "recoveryThreshold": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maximumNodeCertificateValidityDays|[uint64](#schemauint64)|true|none|none|
|maximumServiceCertificateValidityDays|[uint64](#schemauint64)|true|none|none|
|recentCoseProposalsWindowSize|[uint64](#schemauint64)|true|none|none|
|recoveryThreshold|[uint64](#schemauint64)|true|none|none|

<h2 id="tocS_ServiceInfo">ServiceInfo</h2>
<!-- backwards compatibility -->
<a id="schemaserviceinfo"></a>
<a id="schema_ServiceInfo"></a>
<a id="tocSserviceinfo"></a>
<a id="tocsserviceinfo"></a>

```json
{
  "certificate": "string",
  "configuration": {
    "maximumNodeCertificateValidityDays": 0,
    "maximumServiceCertificateValidityDays": 0,
    "recentCoseProposalsWindowSize": 0,
    "recoveryThreshold": 0
  },
  "creationTransactionId": "string",
  "previousServiceCreationTransactionId": "string",
  "recoveryCount": 0,
  "serviceData": null,
  "status": "Opening"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificate|[string](#schemastring)|true|none|none|
|configuration|[ServiceConfiguration](#schemaserviceconfiguration)|false|none|none|
|creationTransactionId|[TransactionId](#schematransactionid)|false|none|none|
|previousServiceCreationTransactionId|[TransactionId](#schematransactionid)|false|none|none|
|recoveryCount|[uint64](#schemauint64)|true|none|none|
|serviceData|[json](#schemajson)|true|none|none|
|status|[ServiceStatus](#schemaservicestatus)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|Opening|
|status|Open|
|status|WaitingForRecoveryShares|
|status|Recovering|

<h2 id="tocS_ServiceStatus">ServiceStatus</h2>
<!-- backwards compatibility -->
<a id="schemaservicestatus"></a>
<a id="schema_ServiceStatus"></a>
<a id="tocSservicestatus"></a>
<a id="tocsservicestatus"></a>

```json
"Opening"
```

<h2 id="tocS_SnpJoinPolicy">SnpJoinPolicy</h2>
<!-- backwards compatibility -->
<a id="schemasnpjoinpolicy"></a>
<a id="schema_SnpJoinPolicy"></a>
<a id="tocSsnpjoinpolicy"></a>
<a id="tocssnpjoinpolicy"></a>

```json
{
  "hostData": {
    "property1": "string",
    "property2": "string"
  },
  "measurements": [
    "string"
  ],
  "tcbVersions": {
    "property1": {
      "boot_loader": 0,
      "fmc": 0,
      "hexstring": "string",
      "microcode": 0,
      "snp": 0,
      "tee": 0
    },
    "property2": {
      "boot_loader": 0,
      "fmc": 0,
      "hexstring": "string",
      "microcode": 0,
      "snp": 0,
      "tee": 0
    }
  },
  "uvmEndorsements": {
    "property1": {
      "property1": {
        "svn": "string"
      },
      "property2": {
        "svn": "string"
      }
    },
    "property2": {
      "property1": {
        "svn": "string"
      },
      "property2": {
        "svn": "string"
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hostData|[string_to_string](#schemastring_to_string)|true|none|none|
|measurements|[string_array](#schemastring_array)|true|none|none|
|tcbVersions|[string_to_TcbVersionPolicy](#schemastring_to_tcbversionpolicy)|true|none|none|
|uvmEndorsements|[string_to_string_to_UVMEndorsementsData](#schemastring_to_string_to_uvmendorsementsdata)|true|none|none|

<h2 id="tocS_StateDigest">StateDigest</h2>
<!-- backwards compatibility -->
<a id="schemastatedigest"></a>
<a id="schema_StateDigest"></a>
<a id="tocSstatedigest"></a>
<a id="tocsstatedigest"></a>

```json
{
  "memberId": "string",
  "stateDigest": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memberId|[MemberId](#schemamemberid)|true|none|none|
|stateDigest|[string](#schemastring)|true|none|none|

<h2 id="tocS_TcbVersionPolicy">TcbVersionPolicy</h2>
<!-- backwards compatibility -->
<a id="schematcbversionpolicy"></a>
<a id="schema_TcbVersionPolicy"></a>
<a id="tocStcbversionpolicy"></a>
<a id="tocstcbversionpolicy"></a>

```json
{
  "boot_loader": 0,
  "fmc": 0,
  "hexstring": "string",
  "microcode": 0,
  "snp": 0,
  "tee": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boot_loader|[uint32](#schemauint32)|false|none|none|
|fmc|[uint32](#schemauint32)|false|none|none|
|hexstring|[string](#schemastring)|false|none|none|
|microcode|[uint32](#schemauint32)|false|none|none|
|snp|[uint32](#schemauint32)|false|none|none|
|tee|[uint32](#schemauint32)|false|none|none|

<h2 id="tocS_Transaction">Transaction</h2>
<!-- backwards compatibility -->
<a id="schematransaction"></a>
<a id="schema_Transaction"></a>
<a id="tocStransaction"></a>
<a id="tocstransaction"></a>

```json
{
  "status": "Unknown",
  "transactionId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[TxStatus](#schematxstatus)|true|none|none|
|transactionId|[TransactionId](#schematransactionid)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|Unknown|
|status|Pending|
|status|Committed|
|status|Invalid|

<h2 id="tocS_TransactionId">TransactionId</h2>
<!-- backwards compatibility -->
<a id="schematransactionid"></a>
<a id="schema_TransactionId"></a>
<a id="tocStransactionid"></a>
<a id="tocstransactionid"></a>

```json
"string"
```

<h2 id="tocS_TransactionId_array">TransactionId_array</h2>
<!-- backwards compatibility -->
<a id="schematransactionid_array"></a>
<a id="schema_TransactionId_array"></a>
<a id="tocStransactionid_array"></a>
<a id="tocstransactionid_array"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TxStatus">TxStatus</h2>
<!-- backwards compatibility -->
<a id="schematxstatus"></a>
<a id="schema_TxStatus"></a>
<a id="tocStxstatus"></a>
<a id="tocstxstatus"></a>

```json
"Unknown"
```

<h2 id="tocS_UVMEndorsementsData">UVMEndorsementsData</h2>
<!-- backwards compatibility -->
<a id="schemauvmendorsementsdata"></a>
<a id="schema_UVMEndorsementsData"></a>
<a id="tocSuvmendorsementsdata"></a>
<a id="tocsuvmendorsementsdata"></a>

```json
{
  "svn": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|svn|[string](#schemastring)|true|none|none|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "certificate": "string",
  "userData": null,
  "userId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificate|[string](#schemastring)|true|none|none|
|userData|[json](#schemajson)|true|none|none|
|userId|[UserId](#schemauserid)|true|none|none|

<h2 id="tocS_UserId">UserId</h2>
<!-- backwards compatibility -->
<a id="schemauserid"></a>
<a id="schema_UserId"></a>
<a id="tocSuserid"></a>
<a id="tocsuserid"></a>

```json
"string"
```

<h2 id="tocS_User_array">User_array</h2>
<!-- backwards compatibility -->
<a id="schemauser_array"></a>
<a id="schema_User_array"></a>
<a id="tocSuser_array"></a>
<a id="tocsuser_array"></a>

```json
[
  {
    "certificate": "string",
    "userData": null,
    "userId": "string"
  }
]
```

<h2 id="tocS_Users">Users</h2>
<!-- backwards compatibility -->
<a id="schemausers"></a>
<a id="schema_Users"></a>
<a id="tocSusers"></a>
<a id="tocsusers"></a>

```json
{
  "value": [
    {
      "certificate": "string",
      "userData": null,
      "userId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|[User_array](#schemauser_array)|true|none|none|

<h2 id="tocS_VirtualJoinPolicy">VirtualJoinPolicy</h2>
<!-- backwards compatibility -->
<a id="schemavirtualjoinpolicy"></a>
<a id="schema_VirtualJoinPolicy"></a>
<a id="tocSvirtualjoinpolicy"></a>
<a id="tocsvirtualjoinpolicy"></a>

```json
{
  "hostData": [
    "string"
  ],
  "measurements": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hostData|[string_array](#schemastring_array)|true|none|none|
|measurements|[string_array](#schemastring_array)|true|none|none|

<h2 id="tocS_boolean">boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_json">json</h2>
<!-- backwards compatibility -->
<a id="schemajson"></a>
<a id="schema_json"></a>
<a id="tocSjson"></a>
<a id="tocsjson"></a>

```json
null
```

<h2 id="tocS_string">string</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_string"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_string_array">string_array</h2>
<!-- backwards compatibility -->
<a id="schemastring_array"></a>
<a id="schema_string_array"></a>
<a id="tocSstring_array"></a>
<a id="tocsstring_array"></a>

```json
[
  "string"
]
```

<h2 id="tocS_string_to_Jwk_array">string_to_Jwk_array</h2>
<!-- backwards compatibility -->
<a id="schemastring_to_jwk_array"></a>
<a id="schema_string_to_Jwk_array"></a>
<a id="tocSstring_to_jwk_array"></a>
<a id="tocsstring_to_jwk_array"></a>

```json
{
  "property1": [
    {
      "constraint": null,
      "issuer": "string",
      "publicKey": "string"
    }
  ],
  "property2": [
    {
      "constraint": null,
      "issuer": "string",
      "publicKey": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Jwk_array](#schemajwk_array)|false|none|none|

<h2 id="tocS_string_to_JwtIssuer">string_to_JwtIssuer</h2>
<!-- backwards compatibility -->
<a id="schemastring_to_jwtissuer"></a>
<a id="schema_string_to_JwtIssuer"></a>
<a id="tocSstring_to_jwtissuer"></a>
<a id="tocsstring_to_jwtissuer"></a>

```json
{
  "property1": {
    "autoRefresh": true,
    "caCertBundleName": "string"
  },
  "property2": {
    "autoRefresh": true,
    "caCertBundleName": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[JwtIssuer](#schemajwtissuer)|false|none|none|

<h2 id="tocS_string_to_NetworkInterface">string_to_NetworkInterface</h2>
<!-- backwards compatibility -->
<a id="schemastring_to_networkinterface"></a>
<a id="schema_string_to_NetworkInterface"></a>
<a id="tocSstring_to_networkinterface"></a>
<a id="tocsstring_to_networkinterface"></a>

```json
{
  "property1": {
    "protocol": "string",
    "publishedAddress": "string"
  },
  "property2": {
    "protocol": "string",
    "publishedAddress": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[NetworkInterface](#schemanetworkinterface)|false|none|none|

<h2 id="tocS_string_to_TcbVersionPolicy">string_to_TcbVersionPolicy</h2>
<!-- backwards compatibility -->
<a id="schemastring_to_tcbversionpolicy"></a>
<a id="schema_string_to_TcbVersionPolicy"></a>
<a id="tocSstring_to_tcbversionpolicy"></a>
<a id="tocsstring_to_tcbversionpolicy"></a>

```json
{
  "property1": {
    "boot_loader": 0,
    "fmc": 0,
    "hexstring": "string",
    "microcode": 0,
    "snp": 0,
    "tee": 0
  },
  "property2": {
    "boot_loader": 0,
    "fmc": 0,
    "hexstring": "string",
    "microcode": 0,
    "snp": 0,
    "tee": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[TcbVersionPolicy](#schematcbversionpolicy)|false|none|none|

<h2 id="tocS_string_to_UVMEndorsementsData">string_to_UVMEndorsementsData</h2>
<!-- backwards compatibility -->
<a id="schemastring_to_uvmendorsementsdata"></a>
<a id="schema_string_to_UVMEndorsementsData"></a>
<a id="tocSstring_to_uvmendorsementsdata"></a>
<a id="tocsstring_to_uvmendorsementsdata"></a>

```json
{
  "property1": {
    "svn": "string"
  },
  "property2": {
    "svn": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[UVMEndorsementsData](#schemauvmendorsementsdata)|false|none|none|

<h2 id="tocS_string_to_string">string_to_string</h2>
<!-- backwards compatibility -->
<a id="schemastring_to_string"></a>
<a id="schema_string_to_string"></a>
<a id="tocSstring_to_string"></a>
<a id="tocsstring_to_string"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[string](#schemastring)|false|none|none|

<h2 id="tocS_string_to_string_to_UVMEndorsementsData">string_to_string_to_UVMEndorsementsData</h2>
<!-- backwards compatibility -->
<a id="schemastring_to_string_to_uvmendorsementsdata"></a>
<a id="schema_string_to_string_to_UVMEndorsementsData"></a>
<a id="tocSstring_to_string_to_uvmendorsementsdata"></a>
<a id="tocsstring_to_string_to_uvmendorsementsdata"></a>

```json
{
  "property1": {
    "property1": {
      "svn": "string"
    },
    "property2": {
      "svn": "string"
    }
  },
  "property2": {
    "property1": {
      "svn": "string"
    },
    "property2": {
      "svn": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[string_to_UVMEndorsementsData](#schemastring_to_uvmendorsementsdata)|false|none|none|

<h2 id="tocS_uint32">uint32</h2>
<!-- backwards compatibility -->
<a id="schemauint32"></a>
<a id="schema_uint32"></a>
<a id="tocSuint32"></a>
<a id="tocsuint32"></a>

```json
0
```

<h2 id="tocS_uint64">uint64</h2>
<!-- backwards compatibility -->
<a id="schemauint64"></a>
<a id="schema_uint64"></a>
<a id="tocSuint64"></a>
<a id="tocsuint64"></a>

```json
0
```
