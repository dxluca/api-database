# yes
real
<br><br>

## API Endpoints:
Endpoints with a "[S]" are secured, meaning you will have to set an authorization header to access them.<br>
The key can be changed in the config.json file.

<br>

### GET: /api/get
Returns database content as JSON string.
Response:
```json
[
  {
    "id": "key",
    "data": "value"
  },
  {
    "id": "key",
    "data": "value"
  }
]
```
---

### [S] POST: /api/add
Add something to the database

Body format:
```json
{
  "id": "key",
  "data": "value"
}
```

Response:
```json
[
  {
    "success": "true",
    "added": {
      "id": "key",
      "data": "value"
    },
    "data": [
      {
        "id": "key",
        "data": "value"
      }
    ]
  }
]
```
---
### [S] POST: /api/remove
Remove stuff from the database

Body format:
```json
{
  "id": "key"
}
```

Response:
```json
[
  {
    "success": "true",
    "removed": {
      "id": "key",
      "data": "value"
    },
    "data": []
  }
]
```
