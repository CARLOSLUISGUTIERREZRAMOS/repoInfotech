import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

//Importamos el modelo Usuario
import { UserModel } from '../../models/user.model';
import Swal from 'sweetalert2';


//Importamos el Servicio
import { UsersService } from '../../services/users.service';
import { faUserEdit, faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: UserModel[];
  user: UserModel;
  modalRef: BsModalRef;
  faUserEdit = faUserEdit;
  faTrash = faTrash;

  constructor(
    private userService: UsersService,
    private modalService: BsModalService,
    private toastr: ToastrService
  ) { }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users)
  }

  getUser(id: number): void {
    this.userService.getUser(id)
      .subscribe(user => this.user = user)
  }

  ngOnInit(): void {
    this.getUsers();
  }

  eliminar(idUser: number) {
    Swal.fire({
      title: `¿Está seguro de eliminar el usuario ${idUser} ?`,
      text: 'Una vez eliminado no podrá ser recuperado.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmar Eliminación',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'No se elimino el usuario :)',
          'error'
        )
      }
    })  
  }

  openModal(template: TemplateRef<any>, user: UserModel) {
    this.modalRef = this.modalService.show(template);
    this.getUser(user.id);
  }

  registrar(userName: string){
    this.toastr.success(`Se registro a ${userName}`, 'Registro actualizado!');
  }
}
