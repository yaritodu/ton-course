
import { address, toNano } from "@ton/core";
import { MainContract } from "../wrappers/MainContract";
import { NetworkProvider, compile } from "@ton/blueprint";

export async function run(provider: NetworkProvider) {
    const myContract = MainContract.createFromConfig(
      {
        number: 0,
        address: address("0QDqW91UXbvOFQEmkKAmmbMayrq9C1UgndU7RRop04UAvsMn"),
        owner_address: address(
          "0QDqW91UXbvOFQEmkKAmmbMayrq9C1UgndU7RRop04UAvsMn"
        ),
      },
      await compile("MainContract")
    );
  
    const openedContract = provider.open(myContract);
  
    openedContract.sendDeploy(provider.sender(), toNano("1"));
  
    await provider.waitForDeploy(myContract.address, 6, 10000);
  }