## Bulma Project

Generate access tokens
~~~~
php artisan passport:install
~~~~

Creating A Personal Access Client
~~~
php artisan passport:client --personal
~~~

After creating your personal access client, place the client's ID and plain-text secret value in your application's .env file:

~~~
PASSPORT_PERSONAL_ACCESS_CLIENT_ID="client-id-value"
PASSPORT_PERSONAL_ACCESS_CLIENT_SECRET="unhashed-client-secret-value"
~~~



## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
