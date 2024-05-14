## Contributing

If you would like to contribute to this project you can do so through GitHub by
forking the repository and creating a pull request with your changes.

When submitting code, please make every effort to follow existing conventions
and style in order to keep the code as readable as possible.



Verified commits and releases
=============================

This project deals with security, and as such, we require that every code change in it will be [signed as well][2].

These signatures help us attest that code changes were made by real people, and provide
and additional layer of security.

In addition to only allowing verified commits, we also require signing every release tag
with an SSH key that belongs to one of the GitHub usernames specified in the `allowed-release-signers` entry in the
[release workflow](.github/workflows/release.yml) file

[1]: https://spreadsheets.google.com/spreadsheet/viewform?formkey=dDViT2xzUHAwRkI3X3k5Z0lQM091OGc6MQ&ndplr=1
[2]: https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits