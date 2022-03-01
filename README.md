# jsprimer

ecma6 learning with jsprimer

`launch.json`

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "pwa-chrome",
      "request": "launch",
      "name": "Launch Program",
      "file": "${workspaceFolder}/index.html",
      "runtimeArgs": [
        "--allow-file-access-from-files",
        "--remote-debugging-port=9222"
      ]
    }
  ]
}
```
