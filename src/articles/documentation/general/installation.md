# Installation


### Python 
The framework requires python. As of now, the framework only works with python 3.x. Make sure
you have a version of python 3 installed.
 
### Python pip install (recommended)

You can easily use pip to install the framework in your python environment.

```sh
$ pip install investing-algorithm-framework
```
 
### Installation from source

First clone the repository
```sh
$ git clone https://github.com/coding-kitties/investing-algorithm-framework.git
```

Then install the framework by running:
```sh
$ pip install <path to cloned investing-algorithm-framework>
```

### Verifying the installation

To verify that you correctly installed the framework, type python from your shell. Then at the Python prompt, 
try to import investing-algorithm-framework:

```python
import investing_algorithm_framework
print(investing_algorithm_framework.get_version())
```

You have successfully installed the framework.