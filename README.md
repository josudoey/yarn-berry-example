# Step1 install yarn2
```
 $ yarn set version berry
```


# Step2 enable the node-modules plugin

ref https://yarnpkg.com/getting-started/migration#if-required-enable-the-node-modules-plugin
```
 $ echo "nodeLinker: node-modules"| tee -a .yarnrc.yml
```

# Step3 list workspace
```
 $ yarn workspaces list
```